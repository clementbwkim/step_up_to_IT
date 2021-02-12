import $ from 'jquery';
import lazyload from 'lazyload';
import Swiper from 'swiper/dist/js/swiper.js';

const workSlide = {
		slidesPerView: 5,
		spaceBetween: 30,
		loop: true,
		speed: 1500,
    // autoplay: {
		// 	delay: 3000,
		// },
		navigation: {
			nextEl: '.slide-next-btn',
			prevEl: '.slide-prev-btn',
		},
}

var swiper = new Swiper('.swiper-container.work-slider', workSlide);
