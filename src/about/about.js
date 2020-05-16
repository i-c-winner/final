import "../style.css";
const SWIPER = require('swiper');

// var mySwiper = new Swiper('.swiper-container', {
//     speed: 400,
//     spaceBetween: 100
// });

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    init: true,
    direction: 'horizontal',
    loop: true,
    width: 350,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',

    },


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
})

console.log(mySwiper)