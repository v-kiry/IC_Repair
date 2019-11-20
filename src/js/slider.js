$(document).ready(function(){
  $('.projects-slider').slick({
    dots: true,
    nextArrow: '.projects-nav-menu__next',
    prevArrow: '.projects-nav-menu__prev',
    dotsClass: 'projects-nav-menu-wrap-points',
    appendDots: '.projects-nav-menu-wrap',
    speed: 500,
    fade: true,
    cssEase: 'linear',
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


  var indexSlide = $('.projects-slider').slick('slickCurrentSlide');
  $('.projects-top-menu__item:eq('+indexSlide+')').addClass('activ-menu');

  $('.projects-slider').on('afterChange', function () {
    $('.projects-top-menu__item').removeClass('activ-menu');
    var indexSlide = $('.projects-slider').slick('slickCurrentSlide');
    $('.projects-top-menu__item:eq('+indexSlide+')').addClass('activ-menu');
  })

  $('.projects-top-menu__item').on('click', function(){
    var index = $(this).attr('data-index')
    $('.projects-slider').slick('slickGoTo', index);
  })

  $('.projects-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log(nextSlide);
  });
});
