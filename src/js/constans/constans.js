//переменныые форм

//переменные для NEWSApi
export const GIT_PATH = 'https://api.github.com/repos/i-c-winner/final/commits';
export const PATH_NEWS =
    'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?language=ru&apiKey=68de62cc45bb4e77a24cd68e991d1c38&pageSize=100&q='

export let DAYS_WEEK = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
export const coefficientNews = 1; // поправка на сдвиг номера новостей
export const SEARCH = localStorage.getItem('NewsName')
//export const INPUT_FORMA = document.forms.Search; //форма поиска


//export const SEARCH_ARRAY = (JSON.parse(localStorage.getItem(localStorage.key(1))).articles);

export const DAY_LAST_WEEK = {
    today: new Date(),
    yestoday: new Date(new Date - 8.64e7),
    twodayago: new Date(new Date - 8.64e7 * 2),
    trydayago: new Date(new Date - 8.64e7 * 3),
    fordayago: new Date(new Date - 8.64e7 * 4),
    fivedayago: new Date(new Date - 8.64e7 * 5),
    sixdayago: new Date(new Date - 8.64e7 * 6),
}
const DAY_WEEK = null;
const SEARCH_IN_TEXT = null;
const SEARCH_IN_TITLE = null;
export {
    DAY_WEEK,
    SEARCH_IN_TITLE,
    SEARCH_IN_TEXT
};

export const NEWS_DATE = [];
export const NEWS_TITLE = [];
export const NEWS_NAME = [];
export const NEWS_DESCRIPTION = [];
export const NEWS_WEEK_DAYS_NUMBER = [];
export const NEWS_WEEK_DAYS = [];
export const GLOBAL_OBJECT = [];
export const OBJECT_FOR_LOAD = [];

export let URL_ARRAY = [];
export let URL_INDEX = 0;