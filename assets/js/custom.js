// const config = {
//   type: 'carousel',
//   perView: 3,
// 	 breakpoints:{
// 	  600: { perView: 1 },
// 	  800: { perView: 2 },
// 	  1200: { perView: 3 }
// 	}
// }
// new Glide('.glide', config).mount();

let config1 = {
    type: 'carousel',
    perView: 3,
    breakpoints:{
	  600: { perView: 1 },
	  800: { perView: 2 },
	  1200: { perView: 3 }
	}
};

new Glide('.glide', config1).mount();

let config2 = {
    type: 'carousel',
    autoplay:2500,
    perView: 4,
    breakpoints: {
        500: {
            perView:1
        },
        767: {
            perView: 2
        },
        992: {
            perView: 3
        }
    }
};

new Glide('.glide2', config2).mount();


let config3 = {
    type: 'carousel',
    perView: 2,
    // autoplay:2500,
    animationDuration: 600,
    animationTimingFunc: 'linear',
    breakpoints: {
        767: {
            perView: 1
        },
        992: {
            perView: 2
        }
    }
};

new Glide('._about_slider', config3).mount();



