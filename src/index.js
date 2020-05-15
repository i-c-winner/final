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
export let NUMBER_POSITION = 0;


// переменные формы
import {
    INPUT_FORMA,
} from './js/constans/constans.js';
import {
    BUTTOM_PLACE_HEADER
} from './js/constans/constans.js';

//переменные API
import {
    PATH_NEWS,
    PATH_GIT,
    INPUT_FORMA_MARKER,
} from './js/constans/constans.js';
import NewsApi from './js/modules/NEWSApi.js';
export const newsApi = new NewsApi();
import search from './js/utils/utils.js'
import SearchInput from './js/components/SearchInput.js';
export const searchInput = new SearchInput();

//отправка запроса и запись в локальное хранилище
localStorage.setItem('NUMBER_POSITION', JSON.parse(0))


//формирование карточек новостей
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from "./js/components/NewsCardList";
export const newsCardList = new NewsCardList(document.querySelector('.cards'));
export const cardsContainer = document.querySelector('.cards');
export const newsCard = new NewsCard();
import {
    requestForStorage,
    moreShow
} from './js/utils/utils.js'


INPUT_FORMA.addEventListener('submit', function () {
    localStorage.clear();
    event.preventDefault();
    if (searchInput.validation(INPUT_FORMA.news)) {
        newsCardList.renderCard(document.querySelector('.cards'), document.querySelectorAll('.card'))
        newsApi.getNews(PATH_NEWS, INPUT_FORMA.news.value, todayDay,
                nodayMonth, yearToday, weekDay, weekMonth, weekYear)
            .then((res) => {
                localStorage.setItem(INPUT_FORMA.news.value, JSON.stringify(res));
                newsCardList.pushCard(INPUT_FORMA.news.value, 0);
            })
    }
})


/**
 * Функция обработки кнопки еще.
 * @param{buttom} что слуашаем
 * @param {localStorageParam} значение поля ввода
 * @param{number} позиция в массиве новостей из Локал стораж * 
 * @return {void} 
 */

document.querySelector('.buttom_place_main').addEventListener('click', function (event) {
    console.log(JSON.parse(localStorage.getItem('NUMBER_POSITION')), 'nomer')
    newsCardList.pushCard(INPUT_FORMA.news.value, JSON.parse(localStorage.getItem('NUMBER_POSITION')));


})






// console.log(NUMBER_POSITION, 'номер в хранилище')

// requestForStorage(INPUT_FORMA, document.querySelector('.cards'));
// moreShow(document.querySelector('.buttom_place_main'), INPUT_FORMA.news.value);