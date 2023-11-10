jQuery(function ($) {
  var headerHight = 100;
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHight;
    $("html, body").animate({ scrollTop: position }, 550, "swing");
    return false;
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
});
