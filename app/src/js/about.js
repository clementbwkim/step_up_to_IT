import $ from 'jquery';
import 'fullpage.js';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$(function () {
  $('.main-container').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    controlArrows: false,
  });
});
