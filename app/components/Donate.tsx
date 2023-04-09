"use client";
import Image from "next/image";

interface Props {
	adress: string;
	name: string;
	qr: string;
}

export default function Donate(props: Props) {
	function copyToClipboard() {
		navigator.clipboard.writeText(props.adress);
	}

	return (
		<div
			className={
				"flex flex-col items-center bg-gray-100 rounded-lg p-4 mb-3 sm:mb-0 w-[60%] sm:w-auto"
			}
		>
			<div className={"rounded"}>
				<Image src={props.qr} width={150} height={150} alt="donate" />
			</div>
			<h3 className={"text-lg font-bold"}>{props.name}</h3>
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<p
				onClick={copyToClipboard}
				className={"cursor-pointer text-sm hover:text-green-500 transition"}
			>
				Click to copy
			</p>
		</div>
	);
}
