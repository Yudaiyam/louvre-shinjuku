$(document).ready(function () {
  "use strict";
});

$(window).load(function () {
  "use strict";
  // SLIDER
  // if( $('#visual').length > 0 ) {
  //     $('#visual').slick({
  //         dots: false,
  //         infinite: true,
  //         speed: 1000,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         autoplay: true,
  //         autoplaySpeed: 5000,
  //         arrows: false,
  //         centerMode: false,
  //         centerPadding: 0,
  //         pauseOnHover: false,
  //         fade: false,
  //         variableWidth: false,
  //     });
  // }
  /*============== END - SLIDER ================*/

  // CONTENT LOAD ANIMATION
  // AOS.init({
  //     duration: 600,
  //     disable: 'mobile',
  //     once: true
  // });
  /*============== END - CONTENT LOAD ANIMATION ================*/

  $(".box1-slide").slick({
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    fade: true,
  });
});

$(window).on("load resize", function () {
  var _screenWidth = $(window).width();
  if (_screenWidth <= 750) {
    $(".frame-list-new").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
    });
  }
});

// Tab
function tab_blog() {
  var buttons = document.getElementsByClassName("tab-box");
  var contents = document.getElementsByClassName("tab-content");

  function showContent(id) {
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
    }
    var content = document.getElementById(id);
    content.style.display = "block";
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      var id = this.textContent;
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
      }
      this.className += " active";
      showContent(id);
    });
  }
  showContent("お知らせ");
}
if (jQuery(".tab-box").length) {
  tab_blog();
}

$(window).on("load resize", function () {
  var _screenWidth = $(window).width();
  if ($(".box4-item").length) {
    $(".box4-item-content").matchHeight();
  }
});
$(".banner-slide").slick({
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
});
