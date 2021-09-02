document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        type      : 'loop',
	perPage   : 3,
	
	cover     : true,
	breakpoins: {
		640: {
			height: '6rem',
		}
	},
    classes: {
        // arrow: 'splide__arrow absolute z-20 bg-red-500 top-0 right-0',
        // prev: 'splide__arrow--prev transform'
    }
    } ).mount();
} );