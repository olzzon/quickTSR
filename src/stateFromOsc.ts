const osc = require("osc");

export class SisyfosState {
	ip: string;
	localPort: number;
	constructor(ip: string, localPort: number) {
		this.ip = ip;
		this.localPort = localPort;
	}

	public getSisyfosState = (): Promise<any> => {
		return new Promise((resolve: any, reject: any) => {
			const oscConnection = new osc.UDPPort({
				localAddress: '0.0.0.0',
				localPort: this.localPort,
				remoteAddress: this.ip,
				remotePort: 5255,
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
