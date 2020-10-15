import $ from 'jquery';
import fullpage from 'fullpage.js';


$(function () {
  $('.main-container').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    controlArrows: false,
  });
});



