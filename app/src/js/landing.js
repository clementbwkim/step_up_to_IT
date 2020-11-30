import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

let burgerBtnEl;
let navEl;

init();
function init() {
    initElements();
    showHideNav();
    btnCross()
}

function initElements() {
  burgerBtnEl = $('.bar-wrapper');
  navEl = $('.nav-wrapper');
}

function btnCross() {
  burgerBtnEl.click(() =>{
    burgerBtnEl.toggleClass('cross');
  });
}

function showHideNav() {
  burgerBtnEl.click(() =>{
    console.log(123);
    navEl.toggleClass('header-slide');
  });
}


$('.banner-items').slick({
  autoplay : true,
  dots: true,
  speed : 300,
  infinite: true,
  autoplaySpeed: 3000,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false
});
