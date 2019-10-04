import { DeviceType } from 'timeline-state-resolver'

let mapping = (ch) => {
	return {
		device: DeviceType.SISYFOS,
		deviceId: 'sisyfos0',
		channel: ch
	}
}
export const input = {
	mappings: {
		'fader1': mapping(0),
		'fader1_lookahead': mapping(0),
		'fader2': mapping(1),
		'fader2_lookahead': mapping(1),
		'fader3': mapping(2),
		'fader3_lookahead': mapping(2),
		'fader4': mapping(3),
		'fader4_lookahead': mapping(3),
		'fader5': mapping(4),
		'fader5_lookahead': mapping(4),
		'fader6': mapping(5),
		'fader6_lookahead': mapping(5),
		'fader7': mapping(6),
		'fader7_lookahead': mapping(6),
		'fader8': mapping(7),
		'fader8_lookahead': mapping(7)
	}
}
