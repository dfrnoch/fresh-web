import { useEffect, useState } from "react";
import { Status, Websocket } from "../types/lanyard.interface";

const useLanyard = (id: string): Websocket => {
	const [loading, setLoading] = useState(true);
	const [status, setStatus] = useState<Status>();
	const [websocket, setWebsocket] = useState<WebSocket>();

	useEffect(() => {
		const supportsWebSocket = "WebSocket" in window || "MozWebSocket" in window;
		if (!supportsWebSocket)
			throw new Error("Browser doesn't support WebSocket connections.");

		let heartbeat: NodeJS.Timeout;
		let socket: WebSocket;

		const connectSocket = () => {
			if (heartbeat) clearInterval(heartbeat);
			socket = new WebSocket("wss://api.lanyard.rest/socket");

			setWebsocket(socket);
			setLoading(true);

			socket.addEventListener("open", () => {
				socket.send(
					JSON.stringify({
						op: 2,
						d: {
							subscribe_to_id: id,
						},
					}),
				);
				heartbeat = setInterval(() => {
					socket.send(JSON.stringify({ op: 3 }));
				}, 30000);
			});

			socket.addEventListener("message", ({ data }) => {
				const { t, d } = JSON.parse(data) as {
					t: "INIT_STATE" | "PRESENCE_UPDATE";
					d: Status;
				};
				if (t === "INIT_STATE" || t === "PRESENCE_UPDATE") {
					setStatus(d || ({} as Status));
					if (loading) setLoading(false);
				}
			});

			socket.addEventListener("close", connectSocket);
		};
		connectSocket();

		return () => {
			if (heartbeat) clearInterval(heartbeat);
			socket.removeEventListener("close", connectSocket);
			socket.close();
		};
	}, []);

	return { loading, status, websocket };
};

export default useLanyard;
