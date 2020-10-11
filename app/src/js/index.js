import $ from 'jquery';

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

var screenSize = {
  large: 1024,
  tablet: 768,
  small: 546,
};
const headerContainer = document.querySelector('.header-container');
const searchOpenIcon = document.querySelector('.header-icon-item.search');
const searchContainer = document.querySelector('.search-container');
const searchCloseIcon = document.querySelector('.search-close-icon');
const searchInputBar = document.querySelector('.search-input-bar');

const burgerMenuOpenIcon = document.querySelector('.header-icon-item.burger');
const burgerMenuContainer = document.querySelector('.burger-menu-container');
const burgerMenuCloseIcon = document.querySelector('.burger-menu-close-icon');
const logo = document.querySelector('.header-logo-items');


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

    const scrollMax = 95;    
    let scaleX = 3.5;
    let scaleY = 3.5;
    let translateY = 112;

  const handleLogo = () => {  
    let calcScaleX = scaleX - (scaleX / scrollMax * window.scrollY);
    let calcScaleY = scaleY - (scaleY / scrollMax * window.scrollY);
    let calcTranslateY = translateY - (translateY / scrollMax * window.scrollY);
    logo.style.transform = `matrix(${calcScaleX > 1 ? calcScaleX : 1}, 0,0,${calcScaleY  > 1 ? calcScaleY : 1},0,${calcTranslateY  > 0 ? calcTranslateY : 0})`;
  }

searchOpenIcon.addEventListener('click', searchHiddenOff);
searchCloseIcon.addEventListener('click', searchHiddenAdd);
burgerMenuOpenIcon.addEventListener('click', burgerHiddenOff);
burgerMenuCloseIcon.addEventListener('click', burgerHiddenAdd);
window.addEventListener('scroll', handleLogo);
window.addEventListener('resize', () => {
  if(window.innerWidth <= screenSize.large) {
    logo.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
    logo.style.transition = `all .3s ease`;
    window.removeEventListener('scroll', handleLogo);
  }else{
    if(scrollY <= scrollMax || pageYOffset <= scrollMax){
      logo.style.transform = `matrix(${scaleX},0,0,${scaleY},0,${translateY})`;
    }    
    window.addEventListener('scroll', handleLogo);
  }
});

const handleLatestSection = () => {
  const latestContainer = document.querySelector('.latest-stories-container');
  const latestContentBox = document.querySelector('.latest-stories-content-box');
  const latestContentCover = document.querySelector('.latest-stories-content.cover');
  const latestContentSpacingCover = document.querySelector('.latest-stories-content.spacing-cover');

  const enterAt = window.scrollY + window.innerHeight >= latestContainer.offsetTop + latestContentBox.clientHeight;
  const latestContainerBottomY = latestContainer.offsetTop + latestContainer.clientHeight;
  const marginBottom = 100;
  const sidePadding = 40;
  const latestStoryBottomY = latestContainerBottomY - headerContainer.clientHeight - marginBottom;
  const afterBottom = window.scrollY + window.innerHeight >= latestStoryBottomY;

  if (enterAt) {
    if (afterBottom) {
      latestContentCover.style.position = 'absolute';
      latestContentCover.style.bottom = `${headerContainer.clientHeight + marginBottom}px`; // 수정 필요
      latestContentCover.style.width = '50%';
      latestContentSpacingCover.classList.remove('hidden');
    } else {
      latestContentCover.style.position = 'fixed';
      latestContentCover.style.width = `calc(50% - ${sidePadding}px)`;
      latestContentCover.style.bottom = 0;
      latestContentSpacingCover.classList.remove('hidden');      
    }
  } else {
    latestContentCover.style.position = 'static';
    latestContentCover.style.width = '50%';
    latestContentSpacingCover.classList.add('hidden');
  }

}

window.addEventListener('scroll', handleLatestSection);


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


