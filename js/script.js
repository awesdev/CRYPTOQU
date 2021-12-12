$(document).ready(function () {
    // Wow js
    wow = new WOW({
        animateClass: 'animate__animated',
    })
    wow.init();

    // Scroll
    $(".toHome").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".hero").offset().top
        }, 200);
    });

    $(".toFeatured").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".featured").offset().top
        }, 200);
    });

    $(".toService").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".service").offset().top
        }, 200);
    });

    $(".toPricing").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".pricing").offset().top
        }, 200);
    });

    // Burger menu
    $('.burger-menu').on('click', function(){
        $(this).toggleClass('burger-menu_active');
        $('.header__menu').toggleClass('header__menu_active');
    })
})