import { DeviceType, TimelineContentTypeSisyfos, TSRTimeline } from 'timeline-state-resolver'
import { TSRInput } from '..'

let OFFSET_VAL = 4300
let timelineOffset = (time: number, offset: number): number => {
	return Date.now() + time + (offset - 1) * OFFSET_VAL
}

const fader = (channel: number): TSRTimeline => {
	return [
		{
			id: 'baseline' + String(channel),
			enable: {
				while: '1'
			},
			layer: 'fader' + String(channel),
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 0,
				faderLevel: 0.75
			},
			priority: 0
		},
		{
			id: 'f' + String(channel) + 'pgm',
			enable: {
				start: timelineOffset(1000, channel),
				duration: 1000,
				repeating: 4000
			},
			layer: 'fader' + String(channel),
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 1
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f' + String(channel) + 'vo',
			enable: {
				start: timelineOffset(2000, channel),
				duration: 1000,
				repeating: 4000
			},
			layer: 'fader' + String(channel),
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 2
			},
			priority: 1,
			isLookahead: false
		},
		{
			id: 'f' + String(channel) + 'pgmLow',
			enable: {
				start: timelineOffset(3000, channel),
				duration: 1000,
				repeating: 4000
			},
			layer: 'fader' + String(channel),
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 1,
				faderLevel: 0.4
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f' + String(channel) + 'pst',
			enable: {
				start: timelineOffset(500, channel),
				duration: 1500,
				repeating: 4500
			},
			layer: 'fader' + String(channel) + '_lookahead',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 1
			},
			priority: 1,
			isLookahead: true,
			lookaheadForLayer: 'fader' + String(channel)
		},
		{
			id: 'f' + String(channel) + 'pstVo',
			enable: {
				start: timelineOffset(1000, channel),
				duration: 1500,
				repeating: 4500
			},
			layer: 'fader' + String(channel) + '_lookahead',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 2
			},
			priority: 1,
			isLookahead: true,
			lookaheadForLayer: 'fader' + String(channel)
		},
		{
			id: 'f' + String(channel) + 'pstOff',
			enable: {
				start: timelineOffset(0, channel),
				duration: 1500,
				repeating: 4500
			},
			layer: 'fader' + String(channel) + '_lookahead',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 0
			},
			priority: 1,
			isLookahead: true,
			lookaheadForLayer: 'fader' + String(channel)
		}]
}

const timeline = (): TSRTimeline => {
	let elements: TSRTimeline = []
	elements = [...elements, ...fader(1)]
	elements = [...elements, 		{
		id: 'fader1',
		enable: {
			start: timelineOffset(7000, 1),
			duration: 7000,
			repeating: 14000
		},
		layer: 'fader1',
		content: {
			deviceType: DeviceType.SISYFOS,
			type: TimelineContentTypeSisyfos.SISYFOS,
			fadeToBlack: false
		},
		priority: 1
	}]
	elements = [...elements, ...fader(2)]
	elements = [...elements, ...fader(3)]
	elements = [...elements, ...fader(4)]
	elements = [...elements, ...fader(5)]
	elements = [...elements, ...fader(6)]
	elements = [...elements, ...fader(7)]
	elements = [...elements, ...fader(8)]
	elements = [...elements, ...fader(9)]
	elements = [...elements, ...fader(10)]
	elements = [...elements, ...fader(11)]
	elements = [...elements, ...fader(12)]
	elements = [...elements, ...fader(13)]
	elements = [...elements, ...fader(14)]
	elements = [...elements, ...fader(15)]
	elements = [...elements, ...fader(16)]

	return elements
}

export const input: TSRInput = {
	timeline: timeline()
}
/*	timeline:
		fader(0),

		{
			id: 'baseline2',
			enable: {
				while: '1'
			},
			layer: 'fader2',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 0
			},
			priority: 0
		},
		{
			id: 'f2pgm',
			enable: {
				start: timelineOffset(1000, 1),
				duration: 1000,
				repeating: 3000
			},
			layer: 'fader2',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 1
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f2vo',
			enable: {
				start: timelineOffset(2000, 1),
				duration: 1000,
				repeating: 3000
			},
			layer: 'fader2',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 2
			},
			priority: 1,
			isLookahead: false
		},
		{
			id: 'f2pst',
			enable: {
				start: timelineOffset(400, 1),
				duration: 400,
				repeating: 1200
			},
			layer: 'fader2_lookahead',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 1
			},
			priority: 1,
			isLookahead: true,
			lookaheadForLayer: 'fader2'
		},
		{
			id: 'f2pstVo',
			enable: {
				start: timelineOffset(800, 1),
				duration: 400,
				repeating: 1200
			},
			layer: 'fader2_lookahead',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 2
			},
			priority: 1,
			isLookahead: true,
			lookaheadForLayer: 'fader2'
		},
		{
			id: 'f2pstOff',
			enable: {
				start: timelineOffset(0, 1),
				duration: 400,
				repeating: 1200
			},
			layer: 'fader2_lookahead',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 0
			},
			priority: 1,
			isLookahead: true,
			lookaheadForLayer: 'fader2'
		},

		{
			id: 'baseline3',
			enable: {
				while: '1'
			},
			layer: 'fader3',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 0
			},
			priority: 0
		},
		{
			id: 'f3pgm',
			enable: {
				start: timelineOffset(1000, 2),
				duration: 1000,
				repeating: 3000
			},
			layer: 'fader3',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 1
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f3vo',
			enable: {
				start: timelineOffset(2000, 2),
				duration: 1000,
				repeating: 3000
			},
			layer: 'fader3',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 2
			},
			priority: 1,
			isLookahead: false
		},
		{
			id: 'f3pst',
			enable: {
				start: timelineOffset(400, 2),
				duration: 400,
				repeating: 1200
			},
			layer: 'fader3_lookahead',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 1
			},
			priority: 1,
			isLookahead: true,
			lookaheadForLayer: 'fader3'
		},
		{
			id: 'f3pstVo',
			enable: {
				start: timelineOffset(800, 2),
				duration: 400,
				repeating: 1200
			},
			layer: 'fader3_lookahead',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 2
			},
			priority: 1,
			isLookahead: true,
			lookaheadForLayer: 'fader3'
		},
		{
			id: 'f3pstOff',
			enable: {
				start: timelineOffset(0, 2),
				duration: 400,
				repeating: 1200
			},
			layer: 'fader3_lookahead',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 0
			},
			priority: 1,
			isLookahead: true,
			lookaheadForLayer: 'fader3'
		}
	]
}*/
