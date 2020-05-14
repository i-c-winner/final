import {
    INPUT_FORMA,
} from '../constans/constans.js';

import {
    todayDay,
    weekDay,
    todayMonth,
    weekMonth,
    yearToday,
    weekYear
} from '../constans/constans.js'
import {
    PATH_NEWS
} from '../constans/constans.js';
import {
    searchInput,
    newsApi
} from '../../index.js'



/**
 * Функция формирования запроса 
 * @param{data} объект для слушателя
 * @returns {void} записывает в локальное хранилище ответ на запрос
 */
export default function requestForStorage(data) {
    data.addEventListener('submit', function (event) {
        event.preventDefault();
        if (searchInput.validation(INPUT_FORMA.news)) {
            newsApi.getNews(PATH_NEWS, INPUT_FORMA.news.value, todayDay,
                    todayMonth, yearToday, weekDay, weekMonth, weekYear)
                .then((res) => {
                    localStorage.setItem(INPUT_FORMA.news.value, JSON.stringify(res));
                })
        }
    })
};