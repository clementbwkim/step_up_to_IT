import $ from 'jquery';
import Swiper from 'swiper/bundle';

let mobileMenuEl;
let navItemsEl; 

init();
function init() {
    initElements();
    showNavigation();
}

function initElements() {
    mobileMenuEl = $(".mobile-menu"); 
    navItemsEl = $(".header-nav");
}

function showNavigation(){
    mobileMenuEl.click(()=>{
        navItemsEl.toggleClass('show');
    });
}

const slideSetting = {
    slidePerView: 'auto',
		spacebetween: 5,
		loop: true,
		speed: 800,
    autoplay: {
			delay: 3000,
		},
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
		},

		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
			},
			// when window width is >= 480px
			480: {
			},
			// when window width is >= 640px
			640: {
			}
		}
}

var swiper = new Swiper('.swiper-container', slideSetting);
