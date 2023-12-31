import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function exploreSlider() {
    new Swiper('.explore__slider', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        navigation: {
            nextEl: '.explore__slider-navigatuin-next',
            prevEl: '.explore__slider-navigatuin-prev',
        },

        pagination: {
            el: '.explore__slider-pagination',
            clickable: true,
            bulletClass: 'explore__slider-pagination-bullet',
            bulletActiveClass: 'explore__slider-pagination-bullet--active',
        },
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            1080: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            720: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    });
}
