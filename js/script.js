$(document).ready(function() {
    $('.header__burger').click(function(event) {
        event.preventDefault();
        $('.header__burger').toggleClass('header__burger--active');
        $('.menu').toggleClass('menu--active');
        $('.menu__list').removeClass('container');
        $('body').toggleClass('lock');
    });

    $('.content__burger').click(function(event) {
        event.preventDefault();
        $('.content__burger').toggleClass('content__burger--active');
        $('.content-menu').toggleClass('content-menu--active');
        $('body').toggleClass('lock');
    });

    $('.header__phone-icon').click(function(event) {
        event.preventDefault();
        $('.header__phone-icon').toggleClass('header__phone-icon--active');
        $('.header__phone').toggleClass('header__phone--active');
    });


    $('.header__feedback-link a, .header__feedback-icon').click(function(event) {
        event.preventDefault();
        $('.feedback').fadeIn(1000);
        $('.overlay').fadeIn(300);
        $('body').addClass('lock');
    });
    
    $('.feedback__close').click(function(event) {
        event.preventDefault();
        $('.feedback').fadeOut(1000);
        $('.overlay').fadeOut(300);
        $('.header__phone').removeClass('lock');
    });
    
    $("form").submit(function(event) {
        const $emailInput = $('#email');
        const $emailError = $('#email-error');
        const emailValue = $emailInput.val().trim();

        const $phoneInput = $('#phone');
        const $phoneError = $('#phone-error');
        const phoneValue = $phoneInput.val().trim();


        let hasError = false;

        event.preventDefault();
        $(this).addClass("submitted");
        $(this).find("input[required]").each(function(){
            if (!this.checkValidity()) {
                $(this).addClass("error");
                $(this).attr("placeholder", "Поле обов'язкове до заповнення")
            }
        });

        if (!isValidPhone(phoneValue)) {
            $phoneError.text("Некоректний формат телефону").show();
            $phoneInput.addClass("error");
            hasError = true;
        } else {
            $phoneError.hide();
            $phoneInput.removeClass("error");
        }

        if (!isValidEmail(emailValue)) {
            $emailError.text("Некоректний формат email").show();
            $emailInput.addClass("error");
            hasError = true;
        } else {
            $emailError.hide(); 
            $emailInput.removeClass("error");
        }

        function isValidPhone(phone) {
            const phonePattern = /^\+?[0-9\s()-]{7,15}$/;
            return phonePattern.test(phone);
        }

        function isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }

        if (this.checkValidity()) {
            this.submit();
        }
    });

    $('.slider').slick({
        speed: 2000,
        infinite: true,
        fade: true,
        cssEase: 'ease-in-out',
        autoplay: true,
        autoplaySpeed: 4000,
        waitForAnimate:false,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});
