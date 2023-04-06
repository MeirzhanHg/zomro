// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuList.classList.toggle('_active');
    })
}

document.addEventListener('click', (e) => {
    if (e.target === menuBody) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        menuList.classList.remove('_active');
    }
})



document.addEventListener("DOMContentLoaded", () => {


    const sliderMain = document.querySelector('.slide-main'),
        slideTarif = document.querySelector('.slide-tarif')

    function sliderActive() {
        if (window.matchMedia("(max-width: 1350px)").matches) {
            sliderMain.classList.add('slide-main-active');
            initSlider()
        } else {
            sliderMain.classList.remove('slide-main-active');
            initSlider()
        }
    }

    function slideTarifActive() {
        if (window.matchMedia("(max-width: 1050px)").matches) {
            slideTarif.classList.add('slide-tarif-active');
            initSliderTarif()
        } else {
            slideTarif.classList.remove('slide-tarif-active');
            initSliderTarif()
        }
    }

    sliderActive()
    slideTarifActive()

    window.addEventListener('resize', function () {
        sliderActive();
        slideTarifActive();
    });

    function initSlider() {
        if (sliderMain.classList.contains('slide-main-active')) {
            new Swiper('.slide-main-active', {
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
                },

                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },

                touchRatio: 2,
                keyboard: {
                    enabled: true,
                    pageUpDown: true
                },

                slidesPerView: 4,

                slidesPerGroup: 4,

                breakpoints: {
                    320: {
                        slidesPerGroup: 1,
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerGroup: 1.5,
                        slidesPerView: 1.5,
                    },
                    767: {
                        slidesPerGroup: 2.5,
                        slidesPerView: 2.5
                    },
                    1000: {
                        slidesPerGroup: 3,
                        slidesPerView: 3
                    },
                    1350: {
                        slidesPerGroup: 4,
                        slidesPerView: 4
                    }
                }
            })
        } else {
            new Swiper()
        }
    }

    function initSliderTarif() {
        if (slideTarif.classList.contains('slide-tarif-active')) {
            new Swiper('.slide-tarif-active', {
                navigation: {
                    nextEl: '.swiper-tarif-next',
                    prevEl: '.swiper-tarif-prev'
                },

                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },

                touchRatio: 2,
                keyboard: {
                    enabled: true,
                    pageUpDown: true
                },

                slidesPerView: 5,

                slidesPerGroup: 5,

                breakpoints: {
                    320: {
                        slidesPerGroup: 1,
                        slidesPerView: 1,
                    },
                    500: {
                        slidesPerGroup: 2,
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerGroup: 3,
                        slidesPerView: 3
                    },
                    1050: {
                        slidesPerGroup: 5,
                        slidesPerView: 5
                    }
                }
            })
        } else {
            new Swiper()
        }
    }

    new Swiper('.websites__swiper', {
        navigation: {
            nextEl: '.websites__swiper-next',
            prevEl: '.websites__swiper-prev'
        },

        pagination: {
            el: ".websites__pagination",
            type: 'fraction'
        },

        touchRatio: 2,
        keyboard: {
            enabled: true,
            pageUpDown: true
        },

        slidesPerView: 1,

        slidesPerGroup: 1,
    })
})

let circle = document.querySelector('.websites__circle');
let target = document.querySelector('.websites__swiper-wrapper');

// Конфигурация observer (за какими изменениями наблюдать)
const config = {
    attributes: true,
    childList: true,
    subtree: true
};

// Колбэк-функция при срабатывании мутации
const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes') {
            if (mutation.target.classList.contains('swiper-slide-active')) {
                let attributeCurrent = mutation.target.getAttribute('aria-label');
                let attributeCurrentIsNumber = Number(attributeCurrent[0])

                switch (attributeCurrentIsNumber) {
                    case 1:
                        circle.style.transform = 'rotate(0deg)';
                        break;
                    case 2:
                        circle.style.transform = 'rotate(-90deg)';
                        break;
                    case 3:
                        circle.style.transform = 'rotate(-180deg)';
                        break;
                    case 4:
                        circle.style.transform = 'rotate(-270deg)';
                        break;
                }
            }
        }
    }
};

// Создаём экземпляр наблюдателя с указанной функцией колбэка
const observer = new MutationObserver(callback);

// Начинаем наблюдение за настроенными изменениями целевого элемента
observer.observe(target, config);

let advantagesItems = document.querySelectorAll('.advantages__item'),
    advantagesBnts = document.querySelectorAll('.advantages__btn');

advantagesBnts.forEach((item, i) => {
    item.addEventListener('click', () => {
        advantagesItems[i].classList.toggle('opened')
    })
})

let footerListContent = document.querySelectorAll('.footer__list-content'),
    footerListArrow = document.querySelectorAll('.footer__list-title-span'),
    footerListTitle = document.querySelectorAll('.footer__list-wrapper>.footer__list');

footerListTitle.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        switch (i) {
            case 0:
                footerListContent[i].classList.toggle('opened')
                break;
            default:
                footerListContent[i].classList.toggle('opened-min')
                break;
        }

        footerListArrow[i].classList.toggle('opened')
    })
})


let popupBg = document.querySelector('.cart');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopup = document.querySelector('.cart__close');


openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('flex-active')
        document.body.classList.add('_lock');
    })
});

document.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target === popupBg) {
        popupBg.classList.remove('flex-active')
        document.body.classList.remove('_lock');
    }
});

closePopup.addEventListener('click', () => {
    popupBg.classList.remove('flex-active')
    document.body.classList.remove('_lock');
})

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && popupBg.classList.contains('flex-active')) {
        popupBg.classList.remove('flex-active')
        document.body.classList.remove('_lock');
    }
});

