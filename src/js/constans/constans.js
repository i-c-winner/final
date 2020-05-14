//переменныые форм
export const INPUT_FORMA = document.forms.Search; //форма поиска
export const NEWS = INPUT_FORMA.NEWS; //поле ввода
export const BUTTOM_PLACE_HEADER = document.querySelector('.buttom_place_header') //кнопка Искать

//переменные для NEWSApi
export const PATH_GIT = '';
export const PATH_NEWS =
    'https://newsapi.org/v2/everything?language=ru&apiKey=68de62cc45bb4e77a24cd68e991d1c38&pageSize=100&q='

//даты

export let today = new Date;
export let weekDate = new Date(today - 6.048e8)
export let todayMonth = today.getMonth() + 1;
export let todayDay = today.getDate();
export let yearToday = today.getFullYear(); // почему то в таком же формате
// в этом случае возникает ошибка
export let weekYear = weekDate.getFullYear();
export let weekDay = weekDate.getDate();
export let weekMonth = weekDate.getMonth() + 1;