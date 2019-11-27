$(document).ready(function(){
  var $slider = $('.projects-slider');
  var $subSlider = $('.projects-slider-item-wrap-slider-nested');

  $slider.slick({
    dots: true,
    nextArrow: '.projects-nav-menu__next',
    prevArrow: '.projects-nav-menu__prev',
    dotsClass: 'projects-nav-menu-wrap-points',
    appendDots: '.projects-nav-menu-wrap',
    speed: 500,
    fade: true,
    adaptiveHeight: true,
    customPaging : function(slider, i) {
    },
  });

  $subSlider.slick({
    accessibility: false,
    centerMode: true,
    centerPadding: '150px',
    draggable: false,
    swipe: false,
    prevArrow: null,
    nextArrow: '<button class="projects-slider-item-wrap__buttons-next"  aria-label="Next" type="button"></button>',
    responsive: [{
      breakpoint:900,
      settings: {
        centerMode: false,
        centerPadding: '0px',
      },
      breakpoint:600,
      settings: {
        prevArrow: '<button class="projects-slider-item-wrap__buttons-prev"  aria-label="Previous" type="button"></button>',
        centerMode: false,
        centerPadding: '0px',
      }
    }]
  }).on('beforeChange', function(event, slick){event.stopPropagation();});

  $('.projects-slider-item').each(function(i, elem) {
    $('<button>', {
      class: 'projects-top-menu__item',
      text: $(this).attr('data-content'),
      'data-index': i,
    }).appendTo('.projects-top-menu')
  });

  var indexSlide = $slider.slick('slickCurrentSlide');
  $('.projects-top-menu__item:eq('+indexSlide+')').addClass('activ-menu');

  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.projects-top-menu__item').removeClass('activ-menu');
    $('.projects-top-menu__item:eq('+nextSlide+')').addClass('activ-menu');
  });

  $('.projects-top-menu__item').on('click', function(){
    var dataIndex = $(this).attr('data-index')
    $('.projects-slider').slick('slickGoTo', dataIndex);
  });
});
