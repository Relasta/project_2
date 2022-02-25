// Swiper

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    // пагинация
    pagination: {
    el: '.swiper-pagination',
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
    active: 0
    });

// document.querySelectorAll('.questions__list_item_fake-plust').forEach(Function(plustBtn) {
//     plistBtn.addEventListener('click', function(d) {
    
//     })
// } )