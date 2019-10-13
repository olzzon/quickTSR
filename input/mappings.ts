import { DeviceType } from 'timeline-state-resolver'

let mapping = (ch) => {
	return {
		device: DeviceType.SISYFOS,
		deviceId: 'sisyfos0',
		channel: ch
	}
}


const fader = (channel: number) => {
	return {
		['fader' + String(channel)]: mapping(channel - 1),
		['fader' + String(channel) + '_lookahead']: mapping(channel - 1)
	}
}


const mappings = () => {
	let maps = {
		'faderAll' : {
			device: DeviceType.SISYFOS,
			deviceId: 'sisyfos0',
			channel: 4
		},
		...fader(1),
		...fader(2),
		...fader(3),
		...fader(4),
		...fader(5),
		...fader(6),
		...fader(7),
		...fader(8),
		...fader(9),
		...fader(10),
		...fader(11),
		...fader(12),
		...fader(13),
		...fader(14),
		...fader(15),
		...fader(16)
	}
	return {
		mappings: maps
	}
}

export const input = mappings()
