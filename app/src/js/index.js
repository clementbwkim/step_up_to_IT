import $ from 'jquery';

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

var screenSize = {
  large: 1024,
  tablet: 768,
  small: 546,
};

const searchOpenIcon = document.querySelector('.header-icon-item.search');
const searchContainer = document.querySelector('.search-container');
const searchCloseIcon = document.querySelector('.search-close-icon');
const searchInputBar = document.querySelector('.search-input-bar');

const burgerMenuOpenIcon = document.querySelector('.header-icon-item.burger');
const burgerMenuContainer = document.querySelector('.burger-menu-container');
const burgerMenuCloseIcon = document.querySelector('.burger-menu-close-icon');
const logo = document.querySelector('.header-logo-items');

const scrollMax = 95;
let scaleX = 3.5;
let scaleY = 3.5;
let translateY = 112;

function searchHiddenOff() {
  searchContainer.classList.remove('hidden');
  searchInputBar.focus();
}
function searchHiddenAdd() {
  searchContainer.classList.add('hidden');
}
function burgerHiddenOff() {
  burgerMenuContainer.classList.remove('hidden');
}
function burgerHiddenAdd() {
  burgerMenuContainer.classList.add('hidden');
}

function handleLogo() {
  if (window.scrollY === 0) {
    logo.style.transform = `matrix(${scaleX},0,0, ${scaleY}, 0, ${translateY})`;
    logo.style.transition = `all .3s ease`;
  } else {
    logo.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
    logo.style.transition = `all .3s ease`;
  }
}

searchOpenIcon.addEventListener('click', searchHiddenOff);
searchCloseIcon.addEventListener('click', searchHiddenAdd);
burgerMenuOpenIcon.addEventListener('click', burgerHiddenOff);
burgerMenuCloseIcon.addEventListener('click', burgerHiddenAdd);

$(function () {
  $('.current-issues-contents').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '20%',
    slidesToShow: 1,
    speed: 500,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerPadding: '10%',
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  });
  if (window.innerWidth === screenSize.large) {
    $('.selected-stories-content').slick({
      centerMode: true,
      infinite: true,
      centerPadding: '10%',
      slidesToShow: 3,
      speed: 500,
      variableWidth: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 545,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 2,
          },
        },
      ],
    });
  }
});

if (window.innerWidth > screenSize.large) {
  window.addEventListener('scroll', handleLogo);
}
