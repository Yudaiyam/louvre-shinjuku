jQuery(function ($) {
  var headerHight = 100;
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHight;
    $("html, body").animate({ scrollTop: position }, 550, "swing");
    return false;
  });
  $("#menu-toggle").click(function () {
    $(this).toggleClass("open");
    $("body").toggleClass("open-nav");
  });
  $(document).on("mousedown touchstart", function (e) {
    if ($(e.target).closest("#gnavi, #menu-toggle").length === 0) {
      if ($("body").hasClass("open-nav")) {
        // $('#menu-toggle').trigger('click');
      }
    }
  });
  $(".pull-down").click(function () {
    $(this).toggleClass("pull-down-active");
    $(this).next(".submenu-group").slideToggle();
  });
  $(".sp-menu-content a").on("click", function () {
    $(".sp-menu-btn").removeClass("menu-btn-opened");
    $(".sp-menu-content").removeClass("sp-menu-opened");
  });
  $(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop();
    let winH = $(window).height();

    if ($(".sp-menu-content").offset().top - winH * 0.5 < scrollTop) {
      $(".sp-menu-content")
        .find(".menu-link")
        .each(function (index) {
          $(this)
            .delay(index * 300)
            .queue(function () {
              $(this).addClass("ready");
            });
        });
    }
  });
  $(".lazy").each(function () {
    var imgPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + windowHeight / 5) {
      $(this).addClass("on");
    }
  });
  $(window).scroll(function () {
    $(".lazy").each(function () {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 5) {
        $(this).addClass("on");
      }
    });
  });
  $(".question").click(function () {
    $(this).next().slideToggle();
    $(this).find(".icon-closed").toggleClass("icon-opened");
    $(".question").not(this).find(".icon-closed").removeClass("icon-opened");
  });
  // CHANGE TAB
  $("[data-tab]").click(function () {
    var _group = $(this).data("tab-group");
    var _index = $(this).data("tab");
    $('[data-tab][data-tab-group="' + _group + '"].active').removeClass(
      "active"
    );
    $(this).addClass("active");

    $('[data-tab-content][data-tab-group="' + _group + '"].active').removeClass(
      "active"
    );
    $(
      '[data-tab-content="' + _index + '"][data-tab-group="' + _group + '"]'
    ).addClass("active");
  });
  // =========== END - CHANGE TAB ============

  // ACCORDION
  $(".accordion-button").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("open");
    var _accordionID = $(this).attr("id");
    var accordion_content = $('[data-accordion-for="' + accordionID + '"]');
    accordion_content.stop().slideToggle(200);
  });
  // =========== END - ACCORDION ============

  // SUB NAV SP SLIDE TOGGLE
  $("#gnavi .list-nav span.nav-link").click(function () {
    var _screenWidth = $(window).width();
    if (_screenWidth <= 750) {
      $(this).toggleClass("open");
      $(this).next().stop().slideToggle(200);
    }
  });
  // =========== END - SUB NAV SP SLIDE TOGGLE ============

  // Slide up / down
  var _screenWidth = $(window).width();
  if (_screenWidth <= 750) {
    $(".ft-submenu").slideUp();
    $(".ft-menu-group-tt").click(function () {
      $(this).next(".ft-submenu").stop().slideToggle();
      $(this).toggleClass("drop");
    });
  }
  $(window).bind("load scroll", function () {
    if ($("body").hasClass("under")) {
      if ($(this).scrollTop() >= 1) {
        $("body").addClass("sticky");
      } else {
        $("body").removeClass("sticky");
      }
    } else {
      if ($(this).scrollTop() >= 1) {
        $("body").addClass("sticky");
      } else {
        $("body").removeClass("sticky");
      }
    }
  });
});
