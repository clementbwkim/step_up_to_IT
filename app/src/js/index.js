import $ from 'jquery';
import Swiper from 'swiper/bundle';

let mobileMenuEl;
let navItemsEl; 
let profileSection;
let winH;
let scrollY;
let posFromTop;
let absolutePos;

init();
function init() {
    initElements();
		showNavigation();
}

function initElements() {
    mobileMenuEl = $(".mobile-menu"); 
		navItemsEl = $(".header-nav");
		profileSection = $(".profile-section");
		winH = window.innerHeight;
		scrollY = window.pageYOffset;
	
}

function showNavigation(){
    mobileMenuEl.click(()=>{
        navItemsEl.toggleClass('show');
    });
}

const slideSetting = {
		slidePerView: 1,
		loop: true,
		speed: 1500,
    // autoplay: {
		// 	delay: 3000,
		// },
		effect: 'fade',

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
		},
}

var swiper = new Swiper('.swiper-container', slideSetting);
