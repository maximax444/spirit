const swiper = new Swiper('.main .swiper-desktop', {

    slidesPerView: 2,
    spaceBetween: 55,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.main__next',
        prevEl: '.main__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 2,
            spaceBetween: 55
        }
    }
});
$('.sear').on('click', function () {
    $(this).find('form').show();
});
const swiper10 = new Swiper('.main .swiper-mob', {

    slidesPerView: 2,
    spaceBetween: 55,
    loop: true,
    effect: 'slide',
    speed: 1110,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.main__next',
        prevEl: '.main__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});
// 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'
const swiper2 = new Swiper('.home-games .swiper', {
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.home-games__next',
        prevEl: '.home-games__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1240: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
});
const swiper3 = new Swiper('.home-chooze__grey .swiper', {
    // Navigation arrows
    navigation: {
        nextEl: '.home-chooze__grey .home-chooze__next',
        prevEl: '.home-chooze__grey .home-chooze__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 'auto',
            spaceBetween: 30
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 'auto',
            spaceBetween: 60
        }
    }
});
var changed = false;
$(".home-chooze__grey .home-chooze__next").on('click', function () {
    if (changed === true) {
        changed = false;
        swiper3.slideTo(0);
    }
    if (swiper3.isEnd) changed = true;
});
const swiper4 = new Swiper('.home-chooze__white .swiper', {

    // Navigation arrows
    navigation: {
        nextEl: '.home-chooze__white .home-chooze__next',
        prevEl: '.home-chooze__white .home-chooze__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 'auto',
            spaceBetween: 30
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 'auto',
            spaceBetween: 60
        }
    }
});
var changed2 = false;
$(".home-chooze__white .home-chooze__next").on('click', function () {
    if (changed2 === true) {
        changed2 = false;
        swiper4.slideTo(0);
    }
    if (swiper4.isEnd) changed2 = true;
});
$('.ncart-promo__start').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('hide');
    $('.ncart-promo__show').addClass('show');
});
const swiper5 = new Swiper('.home-clients .swiper', {

    // Navigation arrows
    navigation: {
        nextEl: '.home-clients .home-chooze__next',
        prevEl: '.home-clients .home-chooze__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 'auto',
            spaceBetween: 20
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 70
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1240: {
            slidesPerView: 4,
            spaceBetween: 120
        }
    }
});
var changed3 = false;
$(".home-clients .home-chooze__next").on('click', function () {
    if (changed3 === true) {
        changed3 = false;
        swiper5.slideTo(0);
    }
    if (swiper5.isEnd) changed3 = true;
});
$('a.with-sub').on('click', function (e) {
    e.preventDefault();
    $(this).next('ul').toggle();
    $(this).toggleClass('active');
});
$('a.header__burg').on('click', function (e) {
    e.preventDefault();
    $('.mob-menu').addClass('active');
    $('body').css('overflow', 'hidden');
});
$('.header__close').on('click', function (e) {
    e.preventDefault();
    $('.mob-menu').removeClass('active');
    $('body').css('overflow', 'visible');
});
$('.overlay-start__submit').on('click', function (e) {
    e.preventDefault();
    $('.overlay-start').removeClass('overlay-active');
    $('body').css('overflow', 'visible');
});

$('.modal-search').on('click', function (e) {
    e.preventDefault();
    $('.overlay-search').addClass('active');
    $('body').css("overflow", "hidden");
});
$('.search__close').on('click', function (e) {
    $(this).closest('.overlay-search').removeClass('active');
    $('body').css("overflow", "visible");
});
$('.overlay-search').on('click', function (e) {
    if (!(($(e.target).parents('.search').length) || ($(e.target).hasClass('search')))) {
        $('body').css("overflow", "visible");
        $('.overlay-search').removeClass('active');
    }
});
$('.modal-cart').on('click', function (e) {
    e.preventDefault();
    $('.overlay-cart').addClass('active');
    $('body').css("overflow", "hidden");
});
$('.cart__close').on('click', function (e) {
    $(this).closest('.overlay-cart').removeClass('active');
    $('body').css("overflow", "visible");
});
$('.overlay-cart').on('click', function (e) {
    if (!(($(e.target).parents('.cart').length) || ($(e.target).hasClass('cart')))) {
        $('body').css("overflow", "visible");
        $('.overlay-cart').removeClass('active');
    }
});
$('.cart-main__count .minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.cart-main__count .plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});
$('.cart__search-top').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.cart__search-drop').toggleClass('active');
});
$('body').on('mousedown', function (e) {
    if (!(($(e.target).parents('.cart__search').length) || ($(e.target).hasClass('cart__search')))) {
        $('.cart__search-drop').removeClass('active');
        $('.cart__search-top').removeClass('active');
    }
});
$('.cart__search-drop a').on('click', function (e) {
    e.preventDefault();
    let newP = $(this).html();
    let oldP = $('.cart__search-top').html();
    $(this).closest('.cart__search').find('input').val(newP);
    $(this).closest('.cart__search-drop').removeClass('active');
    $(this).closest('.cart__search').find('.cart__search-top').removeClass('active');
    $('.cart__search-top').html(newP);
    $(this).html(oldP);
});
$('.catalog-top__name').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.catalog-top__drop').toggleClass('active');
});
$('.catalog-top__drop a').on('click', function (e) {
    e.preventDefault();
    $('.catalog-top__name').removeClass('active');
    $('.catalog-top__drop').removeClass('active');
    $(this).closest('.catalog-top__select').find('input').val($(this).attr('data-sort'));
    $(this).closest('.catalog-top__select').find('.catalog-top__name').html($(this).html());
});
$('body').on('mousedown', function (e) {
    if (!(($(e.target).parents('.catalog-top__select').length) || ($(e.target).hasClass('catalog-top__select')))) {
        $('.catalog-top__name').removeClass('active');
        $('.catalog-top__drop').removeClass('active');
    }
});
$('.catalog-filters__title').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.catalog-filters__list').toggle();
});
$('.card-qa__title').on('click', function (e) {
    e.preventDefault();
    $(this).next('.card-qa__cont').toggle();
    $(this).toggleClass('active');
});
const swiper6 = new Swiper('.card .swiper', {
    direction: "vertical",
    slidesPerView: 6,
    loop: true,
    // Navigation arrows
    navigation: {
        prevEl: '.card .card__prev',
        nextEl: '.card .card__next',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            direction: "horizontal",
            slidesPerView: 3,
            spaceBetween: 10
        },
        576: {
            direction: "horizontal",
            slidesPerView: 4,
            spaceBetween: 10
        },
        // when window width is >= 480px
        768: {
            direction: "horizontal",
            slidesPerView: 5,
            spaceBetween: 10
        },
        // when window width is >= 640px
        992: {
            direction: "vertical",
            slidesPerView: 4,
            spaceBetween: 19
        },
        // when window width is >= 640px
        1240: {
            direction: "vertical",
            slidesPerView: 6,
            spaceBetween: 19
        }
    }
});
swiper6.on('transitionEnd', function () {
    $('.card__img').attr('href', $('.swiper-slide-active').find('img').attr('src'));
    $('.card__img img').attr('src', $('.swiper-slide-active').find('img').attr('src'));
    $('.card__num span').html(swiper6.realIndex + 1);
});
$('.card__slide').on('click', function (e) {
    e.preventDefault();
    $('.card__img').attr('href', $(this).find('img').attr('src'));
    $('.card__img img').attr('src', $(this).find('img').attr('src'));
});
$('.add__close, .add__more, .stock__close').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.overlay').removeClass('overlay-active');
    $('body').css("overflow", "visible");
});
$('.overlay').on('click', function (e) {
    if (!(($(e.target).parents('.popup').length) || ($(e.target).hasClass('popup')))) {
        $('body').css("overflow", "visible");
        $('.overlay').removeClass('overlay-active');
    }
});
// $('').on('click', function (e) {
//     e.preventDefault();
//     $('.overlay-add').addClass('overlay-active');
//     $('body').css("overflow", "hidden");
// });
$('.faq__name').on('click', function () {
    $(this).closest('.faq__block').toggleClass('active');
});