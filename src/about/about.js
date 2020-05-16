import "../style.css";

import {
    SWIPER
} from '../js/utils/swiper/swiper.js'

const MYSWIPER = new Swiper(('.swiper-container'), {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    on: {
        init: function () {
            console.log('swiper initialized');
        },
    },

})
console.log(SWIPER)
console.log(MYSWIPER)


MYSWIPER.slideNext(1000, true)