//переменныые форм
export const INPUT_FORMA = document.forms.Search; //форма поиска
//переменные для NEWSApi
export const GIT_PATH = 'https://api.github.com/repos/i-c-winner/final/commits';
export const PATH_NEWS =
    'https://newsapi.org/v2/everything?language=ru&apiKey=68de62cc45bb4e77a24cd68e991d1c38&pageSize=100&q='

export let week = ["Вс", "ПН", "Вт", "Ср", "Чт", "Пт", "Сб"];
//export const SEARCH_ARRAY = (JSON.parse(localStorage.getItem(localStorage.key(1))).articles);

export const DAY_LAST_WEEK = {
    today: new Date(),
    eystoday: new Date(new Date - 8.64e7),
    twodayago: new Date(new Date - 8.64e7 * 2),
    thrydayago: new Date(new Date - 8.64e7 * 3),
    fordayago: new Date(new Date - 8.64e7 * 4),
    fivedayago: new Date(new Date - 8.64e7 * 5),
    sixdayago: new Date(new Date - 8.64e7 * 6),
}