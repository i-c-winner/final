import {
    INPUT_FORMA,
} from '../constans/constans.js';

import {
    TODAY_DAY,
    WEEK_DAY,
    TODAY_MONTH,
    WEEK_MONTH,
    YEAR_TODAY,
    WEEK_YEAR,
    PATH_NEWS,
    NUMBER_POSITION,
} from '../constans/constans.js';
import {
    searchInput,
    newsApi,
    newsCardList
} from '../../index.js'
import {
    INPUT_FORMA_MARKER
} from '../constans/constans.js'
export let MARKER = null;


/**
 * Функция формирования запроса 
 * @param{data} объект для слушателя
 * @returns {void} записывает в локальное хранилище ответ на запрос
 */
export default function requestForStorage(data) {
    data.addEventListener('submit', function (event) {
        localStorage.clear();
        event.preventDefault();
        if (searchInput.validation(INPUT_FORMA.news)) {
            newsApi.getNews(PATH_NEWS, INPUT_FORMA.news.value, TODAY_DAY,
                    TODAY_MONTH, YEAR_TODAY, WEEK_DAY, WEEK_MONTH, WEEK_YEAR)
                .then((res) => {
                    localStorage.setItem(INPUT_FORMA.news.value, JSON.stringify(res));
                    newsCardList.pushCard(INPUT_FORMA.news.value, 0);
                    localStorage.setItem('NUMBER_POSITION', '2');
                })
        }
        MARKER = INPUT_FORMA.news.value;
        console.log(MARKER, 'маркер после отработки сабмита')
    })

};