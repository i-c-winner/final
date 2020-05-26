import "./style.css";

//даты

export let today = new Date;
export let weekDate = new Date(today - 6.048e8)
export let nodayMonth = today.getMonth() + 1;
export let todayDay = today.getDate();
export let yearToday = today.getFullYear(); // почему то в таком же формате
//  возникает ошибка
export let weekYear = weekDate.getFullYear();
export let weekDay = weekDate.getDate();
export let weekMonth = weekDate.getMonth() + 1;
//export const URL_ARRAY = [];


// переменные формы
// import {
//     INPUT_FORMA,
// } from './js/constans/constans.js';

console.log(55)
//переменные API
import {
    PATH_NEWS,
    PATH_GIT,
    URL_ARRAY,
    NEWS_COUNT,

} from './js/constans/constans.js';
export const newsArray = JSON.parse(localStorage.getItem(localStorage.getItem('NewsName')));

//const newsPosition = JSON.parse(localStorage.getItem('NumberPosition'));

const sliceNewsArray = JSON.parse(localStorage.getItem('NewsArray'));

import NewsApi from './js/modules/NEWSApi.js';
export const newsApi = new NewsApi();
import SearchInput from './js/components/SearchInput.js';
export const searchInput = new SearchInput();

export const INPUT_FORMA = document.forms.Search; //форма поиска

//localStorage.setItem('NUMBER_POSITION', 0);




//формирование карточек новостей
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from "./js/components/NewsCardList";
export const newsCardList = new NewsCardList(document.querySelector('.cards'));
export const cardsContainer = document.querySelector('.cards');
export const newsCard = new NewsCard();



//document.querySelector('.buttom_place_main').classList.remove('buttom_state.disabled')

if (typeof INPUT_FORMA !== undefined) {

    INPUT_FORMA.addEventListener('submit', function () {
        event.preventDefault();
        if (searchInput.validation(INPUT_FORMA.news)) {
            localStorage.setItem('NUMBER_POSITION', 0);
            document.querySelector('.preloader').classList.add('preloader_state_enabled');
            //обнуляем страницу
            localStorage.clear();
            URL_ARRAY.length = 0;
            document.querySelector('.body').classList.add('body_preloader');
            document.querySelector('.circle-preloader').classList.add('circle-preloader_state_disabled');
            newsCardList.renderCard(document.querySelector('.cards'),
                document.querySelectorAll('.card'));

            newsApi.getNews(PATH_NEWS, INPUT_FORMA.news.value, todayDay,
                    nodayMonth, yearToday, weekDay, weekMonth, weekYear)
                .then((res) => {
                    document.querySelector('.body').classList.remove('body_preloader');
                    document.querySelector('.body').classList.remove('preloader_error-network')
                    document.querySelector('.circle-preloader').classList.remove('circle-preloader_state_disabled');
                    localStorage.setItem(INPUT_FORMA.news.value, JSON.stringify(res));
                    localStorage.setItem('NewsName', INPUT_FORMA.news.value);
                    newsCardList.pushCard(INPUT_FORMA.news.value, 0);
                    //localStorage.setItem('NUMBER_POSITION', 3)

                })
                .catch((res) => {
                    console.log(res)
                    document.querySelector('.preloader').classList.remove('preloader_state_enabled');
                    // document.querySelector('.circle-preloader').classList.remove('circle-preloader_state_disabled');
                    // document.querySelector('.body').classList.remove('body_preloader');
                    // document.querySelector('.preloader__error').classList.remove('preloader_error-network');
                })
        }
    })

}


document.querySelector('.buttom_place_main').addEventListener('click', function (event) {

    const newsPosition = JSON.parse(localStorage.getItem('NUMBER_POSITION'));
    newsCardList.pushCard(INPUT_FORMA.news.value,
        (newsPosition));
    if ((sliceNewsArray.length + 3) >=
        (news).articles.length) {
        document.querySelector('.buttom_place_main').classList.add('buttom_state_disabled')
    }
})
INPUT_FORMA.addEventListener('input', function (event) {
    if (INPUT_FORMA.news.value.length > 3) {

        document.querySelector('.buttom_place_header').classList.remove('buttom_state_activ');
        document.querySelector('.error__text').classList.add('error__text_disabled');
    }
    if (INPUT_FORMA.news.value.length < 4) {


        document.querySelector('.error__text').classList.remove('error__text_disabled');
    }

})

document.querySelector('.cards').addEventListener("click", (event) => {
    URL_ARRAY.forEach(element => {
        if ((document.querySelector('.' + ('index' + element['index']))).contains(event.target)) {
            window.open(element['url']);
        }
    });
})

JSON.parse(localStorage.getItem("NewsArray")).forEach(element => {
    let temporaryArray = JSON.parse(localStorage.getItem(
        localStorage.getItem('NewsName'))).articles[element['index']];
    newsCardList.startPushCard(temporaryArray, element['index']);
});