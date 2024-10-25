$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger').toggleClass('header__burger--active');
        $('.menu').toggleClass('menu--active');
        $('body').toggleClass('lock');
    }),
    $('.content__burger').click(function(event){
        $('.content__burger').toggleClass('content__burger--active');
        $('.content-menu').toggleClass('content-menu--active');
    }),
    $('.slider').slick({
        speed: 4000,
        infinite:true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000
    });    
});