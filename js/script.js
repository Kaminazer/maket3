$(document).ready(function() {
    $('.header_burger').click(function(event){
        $('.header_burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.slider').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:true,
        speed:500,
        infinite:true,
        autoplay:true,
        autoplay:4000,
        pauseOnFocus:false,
    });
});