import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


let headerEl;
let burgerBtnEl;
let navEl;


init();
function init() {
    initElements();
    showHideNav();
    btnCross()
    changeBgColor();
}

function initElements() {
  headerEl = $('.header-container');
  burgerBtnEl = $('.bar-wrapper');
  navEl = $('.nav-wrapper');
}

function changeBgColor() {
  $(window).scroll(() => {
    if (0 < pageYOffset) {
      headerEl.addClass('header-bg-on');
    } else {
      headerEl.removeClass('header-bg-on');
    }
  });
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
  speed : 2000,
  infinite: true,
  autoplaySpeed: 2000,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true
});
