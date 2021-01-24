import $ from 'jquery';
import lazyload from 'lazyload';
import Swiper from 'swiper/dist/js/swiper.js';

let headerEl;
let mobileMenuEl;
let navItemsEl; 
let scrlItems;
let winH;
let currentScrlPos;
let $window

window.addEventListener('resize', init);
init();
function init() {
	initElements();
	showNavigation(mobileMenuEl,navItemsEl);
	scrollEvent(headerEl);
	scrollShowNav(headerEl);
	window.addEventListener('scroll', chkPosTop);
	window.addEventListener('load', chkPosTop);
}

function initElements() {
	headerEl = $(".header");
	mobileMenuEl = $(".mobile-menu"); 
	navItemsEl = $(".header-nav");
	scrlItems = $(".scrl-item");	
	winH = $(window).height();
	$window = $(window);
}

function showNavigation(el, elm){
	el.off().on('click',()=>{ //when clicked one time, react one time
		console.log(123);
		elm.toggleClass('show')
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
	$window.scroll(()=>{
		currentScrlPos = $window.scrollTop(); //scrollY top
		let profileSecEl = $('.profile-section').offset().top;
		if(currentScrlPos > profileSecEl){ //bg color
			el.addClass('on');
		}else {
			el.removeClass('on');
		}
	});
}

function scrollShowNav(el){ //
	let prevPos = 0; //default
	if($window.width() > 768){ //if more than width: 768px
		$window.scroll(()=>{
			currentScrlPos = $window.scrollTop();
			el.toggleClass('hidden', currentScrlPos > prevPos); //showin nav 
			prevPos = currentScrlPos;
		});
	}else{
		$window.scroll(()=>{ //if less than width: 768px
				el.removeClass('hidden');
		});
	}; 
}

const slideSetting = {
		slidePerView: 1,
		loop: true,
		speed: 1500,
    autoplay: {
			delay: 3000,
		},
		effect: 'fade',
}

var swiper = new Swiper('.swiper-container', slideSetting);
