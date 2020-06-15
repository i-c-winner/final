import "./style.css";

//даты

export const today = new Date;
export const weekDate = new Date(today - 6.048e8)
export const nodayMonth = today.getMonth() + 1;
export const todayDay = today.getDate();
export const yearToday = today.getFullYear(); // почему то в таком же формате
//  возникает ошибка
export const weekYear = weekDate.getFullYear();
export const weekDay = weekDate.getDate();
export const weekMonth = weekDate.getMonth() + 1;

//переменные API
import {
    PATH_NEWS,
    PATH_GIT,
    arrayUrls,
    inputForma,
    QUANTITY_CARDS,
    proverka,
} from './js/constans/constans.js';

import moveMouse from './js/utils/moveMouse.js';


let inputFieldFlag = true;
//const newsPosition = JSON.parse(localStorage.getItem('NumberPosition'));
import NewsApi from './js/modules/NEWSApi.js';
const newsApi = new NewsApi();
import SearchInput from './js/components/SearchInput.js';
const searchInput = new SearchInput();

//формирование карточек новостей
import {
    NewsCard
} from './js/components/NewsCard.js';
import NewsCardList from "./js/components/NewsCardList";
const newsCardList = new NewsCardList(document.querySelector('.cards'));
const cardsContainer = document.querySelector('.cards');
const newsCard = new NewsCard();

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
        arrayUrls.length = 0;
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
                newsCardList.pushCard(inputForma.news.value, 0, newsCard);
                document.querySelector('.main-top__subtitle').classList.remove('main-top__subtitle_disabled');
            })
            .catch((res) => {
                console.log(res)
                document.querySelector('.preloader').classList.remove('preloader_state_enabled');
            })
    }
})


//слушатель кнопки "Ещё"
document.querySelector('.buttom_place_main').addEventListener('mouseout', function (event) {
    moveMouse('', '.buttom_place_main');

});
document.querySelector('.buttom_place_main').addEventListener('mouseover', function (event) {
    moveMouse('buttom_state_none-activ', '.buttom_place_main');
})


if ((!JSON.parse(localStorage.getItem("NewsArray")))) {

    document.querySelector('.main-top__subtitle').classList.add('main-top__subtitle_disabled');
} else {
    document.querySelector('.main-top__subtitle').classList.remove('main-top__subtitle_disabled');
}



document.querySelector('.buttom_place_main').addEventListener('click', function (event) {
    const sliceNewsArray = JSON.parse(localStorage.getItem('NewsArray'));
    const arrayLength = sliceNewsArray.length + QUANTITY_CARDS;
    const secondArrayLength = ((JSON.parse(localStorage.getItem(localStorage.getItem('NewsName')))).articles.length);
    if ((arrayLength) >=
        secondArrayLength) {
        document.querySelector('.buttom_place_main').classList.add('buttom_state_disabled')
    }
    inputFieldFlag = true;
    const newsPosition = JSON.parse(localStorage.getItem('NUMBER_POSITION'));
    newsCardList.pushCard(localStorage.getItem('NewsName'),
        (newsPosition), newsCard);
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
    const arrayUrls = JSON.parse(localStorage.getItem('NewsArray'))
    arrayUrls.forEach(element => {
        if ((document.querySelector('.' + ('index' + element['index']))).contains(event.target)) {
            window.open(element['url']);
        }
    });
})


if (JSON.parse(localStorage.getItem("NewsArray"))) {
    JSON.parse(localStorage.getItem("NewsArray")).forEach(element => {
        const temporaryArrayNews = JSON.parse(localStorage.getItem(
            localStorage.getItem('NewsName'))).articles[element['index']];
        newsCardList.startPushCard(temporaryArrayNews, element['index'], newsCard);
    });
}