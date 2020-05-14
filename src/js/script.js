function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){

  console.log('DOM ready');

  if ($('.owl-carousel.owl-carousel').length) {
    $('.owl-carousel.owl-carousel').owlCarousel({
      nav: true,
      dots: false,
      margin: 15,
      responsiveClass: true,
      responsive:{
        0:{
          items: 1,
          nav: false,
          dots: true
        },
        481:{
            items: 2,
            nav: true
        },
        767:{
            items: 3,
            nav: true
        }
    }
    });
  }

  if($('.owl-carousel.owl-carousel-4').length) {
    $('.owl-carousel.owl-carousel-4').owlCarousel({
      items: 4,
      nav: true,
      dots: false,
      margin: 15,
      responsiveClass: true,
      responsive:{
        0:{
            items: 1,
            nav: false,
            dots: true
        },
        481:{
            items: 2,
            nav: true
        },
        767:{
            items: 4,
            nav: true
        }
    }
    });
  }

  var activeClassToggler = function (el, baseClass, classModifier) {
    el.toggleClass(baseClass+classModifier);
  }

  var bodyOverflowToggler = function () {
    if ($('body').css('overflow')==='hidden') {
      $('body').css('overflow', 'initial');
    } else {
      $('body').css('overflow', 'hidden');
    }
  }

  var navList = $('.main-nav__list');
  var navListClass = 'main-nav__list';
  var navListClassModifier = '--active';
  var navButton = $('.main-nav__button');
  var navButtonClass = 'main-nav__button';
  var navButtonClassModifier = '--close';
  var popupLinks = $('.popup-link');
  var popup = $('#popup');
  var popupClass = 'popup';
  var popupClassModifier = '--active';
  var popupClose = $('#popup-close');

  if(popupLinks.length && popup.length && popupClose.length) {
    popupLinks.on('click', function (e) {
      e.preventDefault();
      bodyOverflowToggler();
      activeClassToggler(popup, popupClass, popupClassModifier);
    });
    popupClose.on('click', function (e) {
      e.preventDefault();
      bodyOverflowToggler();
      activeClassToggler(popup, popupClass, popupClassModifier);
    });
  }

  if(navList.length && navButton.length) {
    navButton.on('click', function (e) {
      bodyOverflowToggler();
      activeClassToggler(navList, navListClass, navListClassModifier);
      activeClassToggler(navButton, navButtonClass, navButtonClassModifier);
    });
  }

  var headingHeight = $('.heading').outerHeight();
  var fixButton = $('#fix-button');
  var fixButtonClass = 'fix-button';
  var fixButtonClassMidifier = '--active';

  $(window).scroll(function () {

    if ($(this).scrollTop() > headingHeight/2 && !fixButton.hasClass('fix-button--active')) {
      console.log('Показываем');
      activeClassToggler(fixButton, fixButtonClass, fixButtonClassMidifier);
    } else if ($(this).scrollTop() < headingHeight/2 && fixButton.hasClass('fix-button--active')) {
      activeClassToggler(fixButton, fixButtonClass, fixButtonClassMidifier);
    }
  });
});
