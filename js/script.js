// Search
$('.header-main__search-button').click(function () {
    if (!$('.burger-menu').hasClass('burger-menu_visible')) {
        $('.header-main__bar-2_item').toggleClass('header-main__bar-2_item_slide-d', true);
        $('.header-main__bar-2_item').toggleClass('header-main__bar-2_item_slide-u', false);
        $('.shadow_search').fadeTo('fast', 0);
    }
});

$('.header__cross').click(function () {
    $('.header-main__bar-2_item').toggleClass('header-main__bar-2_item_slide-d', 'header-main__bar-2_item_slide-u');
    $('.header-main__bar-2_item').toggleClass('header-main__bar-2_item_slide-u', true);
    $('.shadow_search').fadeTo('fast', 1);
});

// Burger 

$(document).ready(function() {
    $('#burger').click(function() {
        if (!$('.header-main__bar-2_item').hasClass('header-main__bar-2_item_slide-d')) {
            if (!$('.burger-menu').hasClass('burger-menu_visible')) {
                $('.burger-menu').removeClass('burger-menu_unvisible');
                $('.burger-menu').addClass('burger-menu_visible');
                $('.burger').toggleClass('burger-item_cross');
            }
            // if ($('.burger-menu').hasClass('burger-menu_unvisible')) {
            //     $('.burger-menu').toggleClass('burger-menu_unvisible, burger-menu_visible');
            // }
            else {
                $('.burger-menu').removeClass('burger-menu_visible');
                $('.burger-menu').addClass('burger-menu_unvisible');
                $('.burger').toggleClass('burger-item_cross');
            }
        }
    });    
});

// Swiper

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    // пагинация
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
    },
    // навигация
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

// Tabs

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){btn.classList.remove('tabs-nav__btn--active')});
e.currentTarget.classList.add('tabs-nav__btn--active');

document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {tabsBtn.classList.remove('tabs-item--active')});

document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
})

// Accordion

$(".accordion").accordion({
    heightStyle: "content",
    active: true,
    disables: true,
    collapsible: true
} )

$(".ui-accordion-header").attr({tabindex: 0}); 