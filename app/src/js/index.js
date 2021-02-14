import $ from 'jquery';
import lazyload from 'lazyload';
import Swiper from 'swiper/dist/js/swiper.js';

let headerEl;
let greetingTxtEl;
let positionTxtEl;
let introTxtEl;
let menuBtnEl;
let navListEl;
let scrlItemsEl;
let winH;
let $window;

const scrollYPos = 95;

init();
function init() {
	initElements();
	window.addEventListener('scroll', chkPosTop);
	loadAddClass(greetingTxtEl);
	loadAddClass(positionTxtEl);
	loadAddClass(introTxtEl);
	scrlEvent();
	showNav(menuBtnEl, navListEl);
}

function initElements() {
	headerEl = document.querySelector('.header')
	greetingTxtEl = document.querySelector('.txt-greeting');
	positionTxtEl = document.querySelector('.txt-position');
	introTxtEl = document.querySelector('.txt-intro');
	menuBtnEl = document.querySelector('.menu-button');
	navListEl = document.querySelector('.header-nav');
	scrlItemsEl = document.querySelectorAll('.scrl-item');
	winH = window.innerHeight;
	$window = $(window);
}

function loadAddClass(el) {
	window.addEventListener('load', ()=>{
		el.classList.add('txt-on');	
	});
}

function showNav(el, elm) {
	el.addEventListener('click', () => {
		el.classList.toggle('cross');
		elm.classList.toggle('show');
	});
}

function chkPosTop() {
	for(let i = 0; i < scrlItemsEl.length; i++) { 
		let posTop = scrlItemsEl[i].getBoundingClientRect().top;
		if(winH > posTop) {
			scrlItemsEl[i].classList.add('active');
		}
	}
}

function scrlEvent() {
	window.addEventListener('scroll', () => {
		if(window.pageYOffset> scrollYPos) {
			headerEl.classList.add('on');
		}else {
			headerEl.classList.remove('on');
		}
	})
}

const workSlide = {
		slidesPerView: 5,
		spaceBetween: 30,
		loop: true,
		speed: 1500,
    autoplay: {
			delay: 3000,
		},
		navigation: {
			nextEl: '.slide-next-btn',
			prevEl: '.slide-prev-btn',
		},
		breakpoints: {
			375: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
		}
}

var swiper = new Swiper('.swiper-container.work-slider', workSlide);
