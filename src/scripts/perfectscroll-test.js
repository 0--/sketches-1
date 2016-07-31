import PS from 'perfect-scrollbar';

const defaults = {
	handlers: ['click-rail', 'drag-scrollbar', 'keyboard', 'wheel', 'touch' /*, 'selection' */], // list of handlers for events to trigger scrolling, 
	wheelSpeed: 1, // how fast the wheel scrolls
	wheelPropagation: false, // allow wheel events to propagate after end of track reached
	swipePropagation: true, // allow swipe events to propagate after end of track reached
	minScrollbarLength: null, // min thumb size in pixels
	useBothWheelAxes: false, // when true, if only one bar is visible, both horz and vert scrolling affect that bar
	suppressScrollX: false, // when true, x bar is never shown
	suppressScrollY: false, // when true, y bar is never shown
	scrollXMarginOffset: 0, // number of pixels by which the scrolled content can exceed the container before bar is shown
	scrollYMarginOffset: 0, // same as 'scrollXMarginOffset', but for Y
	stopPropagationOnClick: true, // suppress click events on the rail
	theme: 'default' // theme class name to apply, rendered in the format `ps-theme=${`
}

export default function test() {
	[].forEach.call(
		document.querySelectorAll('[data-perfectscroll]'),
		(elm, index) => {
			let cfg = JSON.parse(elm.getAttribute('data-perfectscroll') || '""'),
				result,
				resizing = false,
				resize = (e) => {
					if(resizing) {
						cancelAnimationFrame(resizing);
					}

					resizing = requestAnimationFrame(() => {
						PS.update(elm);
						resizing = false;
						console.log('resized');
					});
				};

			if(!cfg) {
				cfg = {
					_dflt: true,
				}
			}

			console.log('initializing PerfectScroll with config: ');
			console.log(cfg);

			result = PS.initialize(elm, cfg);

			resize();

			console.log('created:');
			console.log(result);
		}
	);
}