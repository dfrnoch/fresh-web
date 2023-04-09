export interface User {
	discord_status: string;
	discord_user: {
		id: string;
		username: string;
		discriminator: string;
		avatar: string;
	};
}
