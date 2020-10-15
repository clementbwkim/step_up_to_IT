import $ from 'jquery';
import fullpage from 'fullpage.js';


$(function () {
  $('.main-container').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    controlArrows: false,
    afterLoad: function (anchorLink, index){
			if (index == 1){
				$('.intro-img').addClass('animation-on');
			}			
			else if (index == 2){
				$('.img-box').addClass('animation-on');
			}
			else if (index ==3){
				$('.contact-logo').addClass('animation-on');
			}
	
		}
  });
});



