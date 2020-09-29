import $ from 'jquery';

const searchOpenIcon = document.querySelector('.header-icon-item.search');
const searchContainer = document.querySelector('.search-container');
const searchCloseIcon = document.querySelector('.search-close-icon');

const burgerMenuOpenIcon = document.querySelector('.header-icon-item.burger');
const burgerMenuContainer = document.querySelector('.burger-menu-container');
const burgerMenuCloseIcon = document.querySelector('.burger-menu-close-icon');
const logo = document.querySelector('.header-logo-items');

function searchHiddenOff() {
  searchContainer.classList.remove('hidden');
  document.querySelector('.search-input-bar').focus();
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
  const scrollMax = 95;
  // scaleX / 95;
  let scaleX = 3.5;
  let scaleY = 3.5;
  let translateY = 112;
  // (scaleX / window.scrollY) * 95;

  if (window.scrollY === 0) {
    console.log(1111);
    logo.style.transform = `matrix(3.5,0,0, 3.5, 0, 112)`;
    logo.style.transition = `all .3s ease`;
  } else {
    console.log(222);
    logo.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
    logo.style.transition = `all .3s ease`;
  }
}

searchOpenIcon.addEventListener('click', searchHiddenOff);
searchCloseIcon.addEventListener('click', searchHiddenAdd);
burgerMenuOpenIcon.addEventListener('click', burgerHiddenOff);
burgerMenuCloseIcon.addEventListener('click', burgerHiddenAdd);
window.addEventListener('scroll', handleLogo);
