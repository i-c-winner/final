import "../style.css";
import CommitCard from '../js/components/CommitCard.js'
import {
    GIT_PATH
} from '../js/constans/constans.js';
import GitHubApi from '../js/modules/GitHubApi.js';
const GITHUBAPI = new GitHubApi(GIT_PATH)
export const COMMITCARD = new CommitCard();
import CommitCardList from '../js/components/CommitCardList.js';
const COMMITCARDLIST = new CommitCardList(document.querySelector('.swiper-wrapper'))

GITHUBAPI.getGitInfo()
    .then((res) => {
        COMMITCARDLIST.pushCard(res)
    });
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