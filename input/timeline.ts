import { DeviceType, TimelineContentTypeSisyfos } from 'timeline-state-resolver'
import { TSRInput } from '..'

let OFFSET_VAL = 1400
let timelineOffset = (time: number, offset: number): number => {
	return Date.now() + time + offset * OFFSET_VAL
}

export const input: TSRInput = {
	timeline: [
		{
			id: 'baseline1',
			enable: {
				while: '1'
			},
			layer: 'fader1',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 0
			},
			priority: 0
		},
		{
			id: 'f1pgm',
			enable: {
				start: timelineOffset(1000, 0),
				duration: 1000,
				repeating: 3000
			},
			layer: 'fader1',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 1
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f1vo',
			enable: {
				start: timelineOffset(2000, 0),
				duration: 1000,
				repeating: 3000
			},
			layer: 'fader1',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 2
			},
			priority: 1,
			isLookahead: false
		},
		{
			id: 'f1pst',
			enable: {
				start: timelineOffset(500, 0),
				duration: 500,
				repeating: 1500
			},
			layer: 'fader1_lookahead',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 1
			},
			priority: 1,
			isLookahead: true,
			lookaheadForLayer: 'fader1'
		},
		{
			id: 'f1pstVo',
			enable: {
				start: timelineOffset(1000, 0),
				duration: 500,
				repeating: 1500
			},
			layer: 'fader1_lookahead',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 2
			},
			priority: 1,
			isLookahead: true,
			lookaheadForLayer: 'fader1'
		},
		{
			id: 'f1pstOff',
			enable: {
				start: timelineOffset(0, 0),
				duration: 500,
				repeating: 1500
			},
			layer: 'fader1_lookahead',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: 0
			},
			priority: 1,
			isLookahead: true,
			lookaheadForLayer: 'fader1'
		},

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
}
