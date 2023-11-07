$(window).bind('load', function () {
  AOS.init({
    easing: 'ease-in-out-sine',
    once: true,
    duration: 1000,
  });
	
	$('#nav-icon4,#gnavi .menu_main li a').click(function(){
		$('#nav-icon4').toggleClass('open');
		$('#gnavi').stop(0,1).slideToggle();
	});	
});


// common
$(document).ready(function () {
  "use strict";
  $('.sec05_btn').click(function () {
    $(this).toggleClass('rotate');
    $(this).next(".sec05_box").stop(0, 1).slideToggle();
  });

  $('.sec14_tit').click(function () {
    $(this).toggleClass('rotate');
    $(this).next(".sec14_inner").stop(0, 1).slideToggle();
  });
	
  $('.box_qa dt').click(function () {
    $(this).toggleClass('rotate');
    $(this).next("dd").stop(0, 1).slideToggle();
  });

});

// fix menu scroll
$(window).bind('scroll', function () {
  "use strict";
  var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
  if (windowWidth > 750) {
    if ($(this).scrollTop() >= 200) {
      $("header").addClass('active');
    } else {
      $("header").removeClass('active');
    }
  }

  if (windowWidth <= 750) {
    if ($(this).scrollTop() >= 80) {
      $(".info_fixed,header").addClass('active');
    } else {
      $(".info_fixed,header").removeClass('active');
    }
  }

});
