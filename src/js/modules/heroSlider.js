import Swiper from 'swiper';
import { Pagination, Autoplay, Scrollbar } from 'swiper/modules';

export function heroSlider() {
    new Swiper('.hero__slider', {
        modules: [Pagination, Autoplay, Scrollbar],
        direction: 'vertical',
        loop: true,
        pagination: {
            el: '.hero__slider-pagination',
            type: 'fraction',
            renderFraction: function (currentClass) {
                return '<span class="' + currentClass + '"></span>';
            },
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
        },
        scrollbar: {
            el: '.hero__slider-scrollbar',
        },

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        speed: 2000,
    });
}
