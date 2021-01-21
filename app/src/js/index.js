import $ from 'jquery';
import Swiper from 'swiper/dist/js/swiper.js';

let mobileMenuEl;
let navItemsEl; 
let scrlItems;
var winH;


window.addEventListener('resize', init);
init();
function init() {
    initElements();
		showNavigation();
		chkPosTop();
		window.addEventListener('scroll', chkPosTop);
		window.addEventListener('load', chkPosTop);
}

function initElements() {
    mobileMenuEl = $(".mobile-menu"); 
		navItemsEl = $(".header-nav");
		scrlItems = document.querySelectorAll(".scrl-item");	
		winH = window.innerHeight;
}

function showNavigation(){
    mobileMenuEl.click(()=>{
        navItemsEl.toggleClass('show');
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
