$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger').toggleClass('header__burger--active');
        $('.menu').toggleClass('menu--active');
        $('body').toggleClass('lock');
    }),
    $('.content__burger').click(function(event){
        $('.content__burger').toggleClass('content__burger--active');
        $('.content-menu').toggleClass('content-menu--active');
        $('body').toggleClass('lock');
    }),
    $('.header__phone-icon').click(function(event){
        $('.header__phone-icon').toggleClass('header__phone-icon--active');
        $('.header__phone').toggleClass('header__phone--active');
        $('body').toggleClass('lock');
    }),

    $('.slider').slick({
        speed: 4000,
        infinite:true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000
    });    
});