
$(function($){
  'use strict'

    var menu =$('.menu_full').offset().top;

    $(window).scroll(function(){
      var scrolling =  $(this).scrollTop();
      if(scrolling>menu){
        $('.menu_full').addClass('menu_fix');
      }
      else{
        $('.menu_full').removeClass('menu_fix');
      }
    });
  
// screenshot part

    $('.slider_img').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: true,
      });

// team part

      $('.user_feedback_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.user_feedback_img',
      });
      $('.user_feedback_img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.user_feedback_text',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0,
        arrows: false,
      });

// video part

      $('.venobox').venobox({
        spinner: 'rotating-plane',
        spinColor: 'red',
      });

// smooth scroll

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus(); 
          };
        });
      }
    }
  });





})