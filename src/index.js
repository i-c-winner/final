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

//переменные API
import {
    PATH_NEWS,
    PATH_GIT,
    urlArray,
    inputForma,
    QUANTITY_CARDS
} from './js/constans/constans.js';

let inputFieldFlag = true;
//const newsPosition = JSON.parse(localStorage.getItem('NumberPosition'));

const sliceNewsArray = JSON.parse(localStorage.getItem('NewsArray'));

import NewsApi from './js/modules/NEWSApi.js';
export const newsApi = new NewsApi();
import SearchInput from './js/components/SearchInput.js';
export const searchInput = new SearchInput();

//формирование карточек новостей
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from "./js/components/NewsCardList";
export const newsCardList = new NewsCardList(document.querySelector('.cards'));
export const cardsContainer = document.querySelector('.cards');
export const newsCard = new NewsCard();

if (inputForma.news.value.length < 4) {
    document.querySelector('.buttom_place_header').classList.remove('buttom_state_activ');
    document.querySelector('.error__text').classList.add('error__text_disabled');
} else {
    document.querySelector('.buttom_place_header').classList.add('buttom_state_activ');
    document.querySelector('.error__text').classList.remove('error__text_disabled');
}

inputForma.news.value = localStorage.getItem('NewsName');
document.forms.Search.addEventListener('submit', function () {
    event.preventDefault();
    if (searchInput.validation(inputForma.news)) {

        document.querySelector('.buttom_place_header').classList.remove('buttom_state_activ');
        document.querySelector('.error__text').classList.add('error__text_disabled');

        inputFieldFlag = true;
        localStorage.setItem('NUMBER_POSITION', 0);
        document.querySelector('.preloader').classList.add('preloader_state_enabled');
        //обнуляем страницу
        localStorage.clear();
        urlArray.length = 0;
        document.querySelector('.body').classList.add('body_preloader');
        document.querySelector('.circle-preloader').classList.add('circle-preloader_state_disabled');
        newsCardList.renderCard(document.querySelector('.cards'),
            document.querySelectorAll('.card'));

        newsApi.getNews(PATH_NEWS, inputForma.news.value, todayDay,
                nodayMonth, yearToday, weekDay, weekMonth, weekYear)
            .then((res) => {
                document.querySelector('.body').classList.remove('body_preloader');
                document.querySelector('.body').classList.remove('preloader_error-network')
                document.querySelector('.circle-preloader').classList.remove('circle-preloader_state_disabled');
                localStorage.setItem(inputForma.news.value, JSON.stringify(res));
                localStorage.setItem('NewsName', inputForma.news.value);
                newsCardList.pushCard(inputForma.news.value, 0);

            })
            .catch((res) => {
                console.log(res)
                document.querySelector('.preloader').classList.remove('preloader_state_enabled');
            })
    }
})


//слушатель кнопки "Ещё"
document.querySelector('.buttom_place_main').addEventListener('click', function (event) {
    const arrayLength = sliceNewsArray.length + QUANTITY_CARDS;
    const secondArrayLength = ((JSON.parse(localStorage.getItem(localStorage.getItem('NewsName')))).articles.length);
    if ((arrayLength) >=
        secondArrayLength) {
        console.log((JSON.parse(localStorage.getItem(localStorage.getItem('NewsName')))).articles.length);
        document.querySelector('.buttom_place_main').classList.add('buttom_state_disabled')
    }
    inputFieldFlag = true;
    const newsPosition = JSON.parse(localStorage.getItem('NUMBER_POSITION'));
    newsCardList.pushCard(localStorage.getItem('NewsName'),
        (newsPosition));
})

inputForma.addEventListener('input', function (event) {
    if (inputForma.news.value.length > 3) {
        document.querySelector('.buttom_place_header').classList.remove('buttom_state_activ');
        document.querySelector('.error__text').classList.add('error__text_disabled');
    }
    if (inputForma.news.value.length < 4) {
        document.querySelector('.error__text').classList.remove('error__text_disabled');
    }

})

inputForma.addEventListener('click', function () {
    if (inputFieldFlag) {
        inputForma.news.value = '';
        inputFieldFlag = false;
    }
    document.querySelector('.buttom_place_header').classList.add('buttom_state_activ');
    document.querySelector('.error__text').classList.remove('error__text_disabled');

})

document.querySelector('.cards').addEventListener("click", (event) => {
    const urlArray = JSON.parse(localStorage.getItem('NewsArray'))
    urlArray.forEach(element => {
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