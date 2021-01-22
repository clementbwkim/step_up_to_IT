import $ from 'jquery';
import lazyload from 'lazyload';
import Swiper from 'swiper/dist/js/swiper.js';

let headerEl;
let mobileMenuEl;
let navItemsEl; 
let scrlItems;
let winH;

window.addEventListener('resize', init);
init();
function init() {
		initElements();
		showNavigation(navItemsEl);
		scrollEvent(headerEl);
		window.addEventListener('scroll', chkPosTop);
		window.addEventListener('load', chkPosTop);
}

function initElements() {
		headerEl = $(".header");
    mobileMenuEl = $(".mobile-menu"); 
		navItemsEl = $(".header-nav");
		scrlItems = $(".scrl-item");	
		winH = $(window).height();

}

function showNavigation(el){
    mobileMenuEl.click(()=>{
        el.toggleClass('show');
    });
}

function chkPosTop() {
	for(let i = 0; i < scrlItems.length; i++){
		let posTop = scrlItems[i].getBoundingClientRect().top;
		if(winH > posTop) {
			scrlItems[i].classList.add('active');
		}
	}
}

function scrollEvent(el) {
	let prevPos = 0; //default 
	$(window).scroll(()=>{
		let currentScrlPos = $(window).scrollTop();
		let profileSecEl = $('.profile-section').offset().top;
		if(currentScrlPos > profileSecEl){ //bg color
			el.addClass('on');
		}else {
			el.removeClass('on');
		}

		el.toggleClass('hidden', currentScrlPos > prevPos); //showin nav 
		prevPos = currentScrlPos;
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
