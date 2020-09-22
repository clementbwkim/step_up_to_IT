import $ from 'jquery';

const searchOpenIcon = document.querySelector('.header-icon-item.search');
const searchContainer = document.querySelector('.search-container');
const searchCloseIcon = document.querySelector('.search-close-icon');

const burgerMenuOpenIcon = document.querySelector('.header-icon-item.burger');
const burgerMenuContainer = document.querySelector('.burger-menu-container');
const burgerMenuCloseIcon = document.querySelector('.burger-menu-close-icon');

searchOpenIcon.addEventListener('click', function () {
  searchContainer.classList.remove('hidden');
});

searchCloseIcon.addEventListener('click', function () {
  searchContainer.classList.add('hidden');
});

burgerMenuOpenIcon.addEventListener('click', function () {
  burgerMenuContainer.classList.remove('hidden');
});

burgerMenuCloseIcon.addEventListener('click', function () {
  burgerMenuContainer.classList.add('hidden');
});
