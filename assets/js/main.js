(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {



        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 165) {
                $(".header-aera").removeClass("scroll-header");
            } else {
                $(".header-aera").addClass("scroll-header");
            }
        });



        // Script for OffCanvas Menu Activation
        $(document).ready(function () {
            $('.bar').on('click', function () {
                $('.offcanva, .off-canvas-overlay').addClass('active');
            })

            $('.cross').on('click', function () {
                $('.offcanva, .off-canvas-overlay').removeClass('active');
            })

            $('.off-canvas-overlay').on('click', function () {
                $('.offcanva, .off-canvas-overlay').removeClass('active');
            })
        })







    });


    jQuery(window).load(function () {


    });


}(jQuery));
