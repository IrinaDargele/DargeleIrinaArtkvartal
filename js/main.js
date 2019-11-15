$(document).ready(function() {

    $('.menu-trigger').on("click", function() {
        $('.header_nav').slideToggle('slow');
    });



    if (window.innerWidth > 570) {
        $('.all_slider').slick({
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1000,
        });
        sliderIsLive = true;
    }else{
        sliderIsLive = false;
    }

    window.addEventListener("resize", function() {
        if (window.innerWidth <= 570) {
            if (sliderIsLive) {
                $('.all_slider').slick('unslick');
                sliderIsLive = false;
            }
        } else {
            if (!sliderIsLive) {
                $('.all_slider').slick({
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    speed: 1000,
                });
                sliderIsLive = true;
            }
        }
    });




});



