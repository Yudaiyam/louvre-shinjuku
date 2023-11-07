// anchor in page
$(window).bind('load', function () {
    "use strict";
    $(function () {
        $('a[href^="#"]').click(function () {
            if ($($(this).attr('href')).length) {
                var p = $($(this).attr('href')).offset();
                if ($(window).width() > 750) {
                    $('html,body').animate({
                        scrollTop: p.top - 130
                    }, 400);
                } else {
                    $('html,body').animate({
                        scrollTop: p.top - 60
                    }, 400);
                }
            }
            return false;
        });
    });
	
});

// anchor top page #
$(window).bind('load', function () {
    "use strict";
    var hash = location.hash;
    if (hash) {
        var p1 = $(hash).offset();
        if ($(window).width() > 750) {

            $('html,body').animate({
                scrollTop: p1.top - 130
            }, 400);
        } else {
            $('html,body').animate({
                scrollTop: p1.top - 60
            }, 400);
        }
    }

});


//totop
$(document).ready(function () {
  "use strict";
  $("#toTop").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });
});