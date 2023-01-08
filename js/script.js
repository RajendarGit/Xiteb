$(document).ready(function() {
    $('[data-target="banner-carousel"]').slick({
        infinite: true,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        infinite: true,
    });

    $('[data-target="destination-carousel"]').slick({
        infinite: true,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        infinite: true,
    });

    AOS.init();


    $('[data-target="menu-header"').click(function() {
        $(this).next('[data-area="menu-content"]').slideToggle(300);
        $('[data-target="menu-header"').not(this).next('[data-area="menu-content"]').slideUp(100);
    })
    
});