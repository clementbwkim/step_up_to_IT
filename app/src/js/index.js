import $ from 'jquery';
import 'jquery-lazy';

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



var screenSize = {
  large: 1024,
  tablet: 768,
  small: 546,
};

/*Elemnets */
let headerContainerEl;
let searchOpenIconEl;
let searchContainerEl;
let searchCloseIconEl;
let searchInputBarEl;
let burgerMenuOpenIconEl;
let burgerMenuContainerEl;
let burgerMenuCloseIconEl;
let logoEl;


let latestContainer;
let latestContentBox;
let latestContentCover;
let latestContentSpacingCover;

let scrollMax = 95;    
let scaleX = 3.5;
let scaleY = 3.5;
let translateY = 112;

/*Functions */
function searchHiddenOff () {
  searchContainerEl.classList.remove('hidden');
  searchInputBarEl.focus();
}
function searchHiddenAdd () {
  searchContainerEl.classList.add('hidden');
}
function burgerHiddenOff () {
  burgerMenuContainerEl.classList.remove('hidden');
}
function burgerHiddenAdd () {
  burgerMenuContainerEl.classList.add('hidden');
}
function handleLogo () {  
  let calcScaleX = scaleX - (scaleX / scrollMax * window.pageYOffset);
  let calcScaleY = scaleY - (scaleY / scrollMax * window.pageYOffset);
  let calcTranslateY = translateY - (translateY / scrollMax * window.pageYOffset);
  logoEl.style.transform = `matrix(${calcScaleX > 1 ? calcScaleX : 1}, 0,0,${calcScaleY  > 1 ? calcScaleY : 1},0,${calcTranslateY  > 0 ? calcTranslateY : 0})`;
}

function resize () {
  window.addEventListener('resize', () => {
    if(window.innerWidth <= screenSize.large) {
      logoEl.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
      logoEl.style.transition = `all .3s ease`;
      window.removeEventListener('scroll', handleLogo);
      window.removeEventListener('scroll', handleLatestSection);
      latestContentCover.style.position = 'static';
      latestContentCover.style.width = '100%';

    }else{
      if(scrollY <= scrollMax || pageYOffset <= scrollMax){
        logoEl.style.transform = `matrix(${scaleX},0,0,${scaleY},0,${translateY})`;
      }    
      window.addEventListener('scroll', handleLogo);
      window.addEventListener('scroll', handleLatestSection);

    }
  });
}

function handleLatestSection () {
  const enterAt = window.pageYOffset + window.innerHeight >= latestContainer.offsetTop + latestContentBox.clientHeight;
  const latestContainerBottomY = latestContainer.offsetTop + latestContainer.clientHeight;
  const marginBottom = 100;
  const sidePadding = 40;
  const latestStoryBottomY = latestContainerBottomY - headerContainerEl.clientHeight - marginBottom;
  const afterBottom = window.pageYOffset + window.innerHeight >= latestStoryBottomY;

  if (enterAt) {
    if (afterBottom) {
      latestContentCover.style.position = 'absolute';
      latestContentCover.style.bottom = `${headerContainerEl.clientHeight + marginBottom}px`; // 수정 필요
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
function currentIssueSlick () {
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
}
  function selectedStorySlick (){
      $('.selected-stories-content').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        speed: 500,
        variableWidth: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              arrows: false,
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 860,
            settings: {
              arrows: false,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
            },
          },
        ],
      });
  }
  

init();
function init () {
  initElements();
  initEvents();
  imgLazyLoad();
}

function initEvents () {
  searchOpenIconEl.addEventListener('click', searchHiddenOff);
  searchCloseIconEl.addEventListener('click', searchHiddenAdd);
  burgerMenuOpenIconEl.addEventListener('click', burgerHiddenOff);
  burgerMenuCloseIconEl.addEventListener('click', burgerHiddenAdd);
  window.addEventListener('scroll', handleLogo);
  resize();
  handleLatestSection ();
}

function initElements () {
  headerContainerEl = document.querySelector('.header-container');
  searchOpenIconEl = document.querySelector('.header-icon-item.search');
  searchContainerEl = document.querySelector('.search-container');
  searchCloseIconEl = document.querySelector('.search-close-icon');
  searchInputBarEl = document.querySelector('.search-input-bar');
  burgerMenuOpenIconEl = document.querySelector('.header-icon-item.burger');
  burgerMenuContainerEl = document.querySelector('.burger-menu-container');
  burgerMenuCloseIconEl = document.querySelector('.burger-menu-close-icon');
  logoEl = document.querySelector('.header-logo-items');
  latestContainer = document.querySelector('.latest-stories-container');
  latestContentBox = document.querySelector('.latest-stories-content-box');
  latestContentCover = document.querySelector('.latest-stories-content.cover');
  latestContentSpacingCover = document.querySelector('.latest-stories-content.spacing-cover');
}

slickSlides();
function slickSlides (){
  currentIssueSlick();
  selectedStorySlick();
}


function imgLazyLoad (){
    $(".lazy").Lazy({effect: 'fadeIn'});
}
      



