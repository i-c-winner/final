//переменныые форм
export const INPUT_FORMA = document.forms.Search; //форма поиска
export let INPUT_FORMA_MARKER = '';
export const NEWS = INPUT_FORMA.NEWS; //поле ввода
export const BUTTOM_PLACE_HEADER = document.querySelector('.buttom_place_header') //кнопка Искать

//переменные для NEWSApi
export const PATH_GIT = '';
export const PATH_NEWS =
    'https://newsapi.org/v2/everything?language=ru&apiKey=68de62cc45bb4e77a24cd68e991d1c38&pageSize=100&q='

//даты

export let TODAY = new Date;
export let WEEK_DATE = new Date(TODAY - 6.048e8)
export let TODAY_MONTH = TODAY.getMonth() + 1;
export let TODAY_DAY = TODAY.getDate();
export let YEAR_TODAY = TODAY.getFullYear(); // почему то в таком же формате
//  возникает ошибка
export let WEEK_YEAR = WEEK_DATE.getFullYear();
export let WEEK_DAY = WEEK_DATE.getDate();
export let WEEK_MONTH = WEEK_DATE.getMonth() + 1;
export let NUMBER_POSITION = 0;