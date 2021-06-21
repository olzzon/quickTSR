const osc = require("osc");

export class SisyfosState {
	ip: string;
	port: number;
	constructor(ip: string, port: number) {
		this.ip = ip;
		this.port = port;
	}

	public getSisyfosState = (): Promise<any> => {
		return new Promise((resolve: any, reject: any) => {
			const oscConnection = new osc.UDPPort({
				remoteAddress: this.ip,
				remotePort: this.port,
			});

			oscConnection
				.on("ready", () => {
					console.log("Receiving state of desk");
					oscConnection.send({ address: "/state/full" });
				})
				.on("message", (message: any) => {
					if (message.address === "/state/full") {
						console.log("Received state");
						oscConnection.close();
						resolve(message.args[0]);
					} else {
						console.log("Unknown OSC message");
					}
				})
				.on("error", () => {
					reject();
				});

			oscConnection.open();
		});
	};
}
