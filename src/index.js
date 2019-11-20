import "./scss/main.scss";
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick';

$(document).ready(function(){
  $('.projects-slider').slick({
    dots: true,
    nextArrow: '.projects-nav-menu__next',
    prevArrow: '.projects-nav-menu__prev',
    dotsClass: 'projects-nav-menu-wrap-points',
    appendDots: '.projects-nav-menu-wrap',
    customPaging : function(slider, i) {},
  });
  $('.projects-slider-item-wrap-slider-nested').slick({
    accessibility: false,
    centerMode: true,
    centerPadding: '150px',
    draggable: false,
    prevArrow: null,
    nextArrow: '<button class="projects-slider-item-wrap-slider-nested-item__btn" aria-label="Next" type="button"></button>',
  });
});
