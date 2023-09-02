$(document).ready(function () {
    "use strict";
    console.log('( •ิཬ•ั ) Hello!!!');

    // MENU TOGGLE SP
    $('#menu-toggle').click(function () {
        $(this).toggleClass('open');
        $('body').toggleClass('open-nav');
    });
    $(document).on('mousedown touchstart', function (e) {
        if ($(e.target).closest("#gnavi, #menu-toggle").length === 0) {
            if ($('body').hasClass('open-nav')) {
                // $('#menu-toggle').trigger('click');
            }
        }
    });
    // =========== END - MENU TOGGLE SP ============



    // CHANGE TAB
    $('[data-tab]').click(function () {
        var _group = $(this).data('tab-group');
        var _index = $(this).data('tab');
        $('[data-tab][data-tab-group="' + _group + '"].active').removeClass('active');
        $(this).addClass('active');

        $('[data-tab-content][data-tab-group="' + _group + '"].active').removeClass('active');
        $('[data-tab-content="' + _index + '"][data-tab-group="' + _group + '"]').addClass('active');
    });
    // =========== END - CHANGE TAB ============



    // ACCORDION
    $(".accordion-button").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("open");
        var _accordionID = $(this).attr('id');
        var accordion_content = $('[data-accordion-for="' + accordionID + '"]');
        accordion_content.stop().slideToggle(200);
    });
    // =========== END - ACCORDION ============



    // SUB NAV SP SLIDE TOGGLE
    $('#gnavi .list-nav span.nav-link').click(function () {
        var _screenWidth = $(window).width();
        if (_screenWidth <= 750) {
            $(this).toggleClass('open');
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
            $(this).toggleClass('drop');
        });
    }

    if ($('.under-post .pst-title').length) {
        $('.under-post .pst-title').matchHeight();
    }

    if ($('.under-footer .ft-title').length) {
        $('.under-footer .ft-title').matchHeight();
    }

    if ($('.udr-style01 li').length) {
        $('.udr-style01 li').matchHeight();
    }

    if ($('.udr-dl dt').length) {
        $('.udr-dl dt').matchHeight();
    }

    if ($('.udr-dl dd').length) {
        $('.udr-dl dd').matchHeight();
    }

    if ($('.udr-slider').length) {
        $('.slr-bg').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slr-sm'
        });
        $('.slr-sm').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slr-bg',
            dots: false,
            arrows: true,
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 426,
                  settings: {
                    slidesToShow: 2,
                  }
                },
              ]
        });
    }

});

$(window).bind('load scroll', function () {
    if ($('body').hasClass('under')) {
        if ($(this).scrollTop() >= 1) {
            $('body').addClass('sticky');
        } else {
            $('body').removeClass('sticky');
        }
    } else {
        if ($(this).scrollTop() >= 1) {
            $('body').addClass('sticky');
        } else {
            $('body').removeClass('sticky');
        }
    }
});