import Finbar from 'finbars';

export default function test() {
	[].forEach.call(
		document.querySelectorAll( '[data-finbars]' ),
		(elm, index) => {
			let cfg = elm.getAttribute( 'data-finbars' || '' ),
				bar = null,
				resizing = false,
				resize = (e) => {
					if(resizing) {
						cancelAnimationFrame(resizing);
					}

					resizing = requestAnimationFrame((e) => {
						bar.resize();
						resizing = false;
						console.log('resized');
					});
				};

			if (!cfg) {
				let finbarStyles = {
					
				}

				cfg = {
					// orientation: optional, 'vertical',
					// range: {min: 0, max: 100}, optional rangeType???,
					// max: 100, optional,
					// index: min, optional,
					// onchange: null, optional finbarOnChange???,
					// increment: 1, optional,
					// paging: true, optional,,
					// barStyles: null, optional finbarStyles???,
					// deltaProp: null, optional string 'deltaY' for vert, 'deltaX' for horz
					// classPrefix: null, optional,
					// container: bar.parentElement, optional element,
					// content: null, optional element,
					orientation: 'vertical',
					content: elm.firstElementChild
				};
			}

			bar = new Finbar(cfg);

			elm.appendChild(bar.bar);

			bar.resize();

			window.addEventListener('resize', resize);

			console.log('using config:', cfg);
		}
	);
}