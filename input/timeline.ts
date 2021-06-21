import { DeviceType, TimelineContentTypeSisyfos } from 'timeline-state-resolver'
import { TSRInput } from '../src/index'

export const input: TSRInput = {
	timeline: [
		{
			id: 'baseline1',
			enable: {
				while: '1'
			},
			layer: 'sisyfos0Fader1',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: false,
				isPst: false
			},
			priority: 0,
			isLookahead: true
		},
		{
			id: 'f1pgm',
			enable: {
				start: Date.now() + 1000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader1',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: true
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f1pst',
			enable: {
				start: Date.now() + 2000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader1',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPst: true
			},
			priority: 1,
			isLookahead: true

		},
		{
			id: 'baseline2',
			enable: {
				while: '1'
			},
			layer: 'sisyfos0Fader2',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: false
			},
			priority: 0,
			isLookahead: true
		},
		{
			id: 'f2pgm',
			enable: {
				start: Date.now() + 2000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader2',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: true
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f2pst',
			enable: {
				start: Date.now() + 4000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader2',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPst: true
			},
			priority: 1,
			isLookahead: true

		},
		{
			id: 'baseline3',
			enable: {
				while: '1'
			},
			layer: 'sisyfos0Fader3',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: false
			},
			priority: 0,
			isLookahead: true
		},
		{
			id: 'f3pgm',
			enable: {
				start: Date.now() + 2500,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader3',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: true
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f3pst',
			enable: {
				start: Date.now() + 4500,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader3',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPst: true
			},
			priority: 1,
			isLookahead: true

		},
		{
			id: 'baseline4',
			enable: {
				while: '1'
			},
			layer: 'sisyfos0Fader4',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: false,
				isPst: false
			},
			priority: 0,
			isLookahead: true
		},
		{
			id: 'f4pgm',
			enable: {
				start: Date.now() + 1000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader4',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: true
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f4pst',
			enable: {
				start: Date.now() + 2000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader4',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPst: true
			},
			priority: 1,
			isLookahead: true

		},
		{
			id: 'baseline5',
			enable: {
				while: '1'
			},
			layer: 'sisyfos0Fader5',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: false
			},
			priority: 0,
			isLookahead: true
		},
		{
			id: 'f5pgm',
			enable: {
				start: Date.now() + 2000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader5',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: true
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f5pst',
			enable: {
				start: Date.now() + 4000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader5',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPst: true
			},
			priority: 1,
			isLookahead: true

		},
		{
			id: 'baseline6',
			enable: {
				while: '1'
			},
			layer: 'sisyfos0Fader6',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: false
			},
			priority: 0,
			isLookahead: true
		},
		{
			id: 'f6pgm',
			enable: {
				start: Date.now() + 2500,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader6',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: true
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f6pst',
			enable: {
				start: Date.now() + 4500,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader6',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPst: true
			},
			priority: 1,
			isLookahead: true

		},
		{
			id: 'baseline7',
			enable: {
				while: '1'
			},
			layer: 'sisyfos0Fader7',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: false,
				isPst: false
			},
			priority: 0,
			isLookahead: true
		},
		{
			id: 'f7pgm',
			enable: {
				start: Date.now() + 1000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader7',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: true
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f7pst',
			enable: {
				start: Date.now() + 2000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader7',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPst: true
			},
			priority: 1,
			isLookahead: true

		},
		{
			id: 'baseline8',
			enable: {
				while: '1'
			},
			layer: 'sisyfos0Fader8',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: false
			},
			priority: 0,
			isLookahead: true
		},
		{
			id: 'f8pgm',
			enable: {
				start: Date.now() + 2000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader8',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: true
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f8pst',
			enable: {
				start: Date.now() + 4000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader8',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPst: true
			},
			priority: 1,
			isLookahead: true

		},
		{
			id: 'baseline9',
			enable: {
				while: '1'
			},
			layer: 'sisyfos0Fader9',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: false
			},
			priority: 0,
			isLookahead: true
		},
		{
			id: 'f9pgm',
			enable: {
				start: Date.now() + 2500,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader9',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: true
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f9pst',
			enable: {
				start: Date.now() + 4500,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader9',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPst: true
			},
			priority: 1,
			isLookahead: true

		},
		{
			id: 'baseline10',
			enable: {
				while: '1'
			},
			layer: 'sisyfos0Fader10',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: false,
				isPst: false
			},
			priority: 0,
			isLookahead: true
		},
		{
			id: 'f10pgm',
			enable: {
				start: Date.now() + 1000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader10',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: true
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f10pst',
			enable: {
				start: Date.now() + 2000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader10',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPst: true
			},
			priority: 1,
			isLookahead: true

		},
		{
			id: 'baseline11',
			enable: {
				while: '1'
			},
			layer: 'sisyfos0Fader11',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: false
			},
			priority: 0,
			isLookahead: true
		},
		{
			id: 'f11pgm',
			enable: {
				start: Date.now() + 2000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader11',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: true
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f11pst',
			enable: {
				start: Date.now() + 4000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader11',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPst: true
			},
			priority: 1,
			isLookahead: true

		},
		{
			id: 'baseline12',
			enable: {
				while: '1'
			},
			layer: 'sisyfos0Fader12',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: false
			},
			priority: 0,
			isLookahead: true
		},
		{
			id: 'f12pgm',
			enable: {
				start: Date.now() + 2500,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader12',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: true
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f12pst',
			enable: {
				start: Date.now() + 4500,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader12',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPst: true
			},
			priority: 1,
			isLookahead: true

		},
		{
			id: 'baseline13',
			enable: {
				while: '1'
			},
			layer: 'sisyfos0Fader13',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: false,
				isPst: false
			},
			priority: 0,
			isLookahead: true
		},
		{
			id: 'f13pgm',
			enable: {
				start: Date.now() + 1000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader13',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: true
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f13pst',
			enable: {
				start: Date.now() + 2000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader13',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPst: true
			},
			priority: 1,
			isLookahead: true

		},
		{
			id: 'baseline14',
			enable: {
				while: '1'
			},
			layer: 'sisyfos0Fader14',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: false
			},
			priority: 0,
			isLookahead: true
		},
		{
			id: 'f14pgm',
			enable: {
				start: Date.now() + 2000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader14',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPgm: true
			},
			priority: 1,
			isLookahead: false

		},
		{
			id: 'f14pst',
			enable: {
				start: Date.now() + 4000,
				duration: 1000,
				repeating: 3000
			},
			layer: 'sisyfos0Fader14',
			content: {
				deviceType: DeviceType.SISYFOS,
				type: TimelineContentTypeSisyfos.SISYFOS,
				isPst: true
			},
			priority: 1,
			isLookahead: true

		},

	]
}
