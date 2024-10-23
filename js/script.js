$(document).ready(function() {
    $('.header_burger').click(function(event){
        $('.header_burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.slider').slick({
        speed: 4000,
        infinite:true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000
    });    
});