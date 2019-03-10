$(document).ready(function() {

    $('.menu-trigger').on("click", function() {
        $('.header_nav').slideToggle('slow');
    });




    $('.all_slider').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    });




});



