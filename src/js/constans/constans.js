//переменныые форм

//переменные для NEWSApi
export const GIT_PATH = 'https://api.github.com/repos/i-c-winner/final/commits';
export const PATH_NEWS =
    'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?language=ru&apiKey=68de62cc45bb4e77a24cd68e991d1c38&pageSize=100&q='

export const DAYS_WEEK = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
export const COEFFICIENT_NEWS = 1; // поправка 
//на сдвиг при формаировании карточек
export const QUANTITY_CARDS = 3;
const MSECOND_IN_DAY = 8.64e+7; //кол-во милисекундв в сутках
export let proverka = 'проверим';


export const search = localStorage.getItem('NewsName');
export const newsArray = [];
export const inputForma = document.forms.Search;
export const dayLastWeek = {
    today: new Date(),
    yestoday: new Date(new Date - MSECOND_IN_DAY),
    twoDayAgo: new Date(new Date - MSECOND_IN_DAY * 2),
    tryDayAgo: new Date(new Date - MSECOND_IN_DAY * 3),
    forDayAgo: new Date(new Date - MSECOND_IN_DAY * 4),
    fiveDayAgo: new Date(new Date - MSECOND_IN_DAY * 5),
    sixDayAgo: new Date(new Date - MSECOND_IN_DAY * 6),
}
const dayWeek = null;
const searchInText = null;
const searchInTitle = null;
export {
    dayWeek,
    searchInTitle,
    searchInText
};

export const newsDate = [];
export const newsTitle = [];
export const newsName = [];
export const newsDescription = [];
export const newsWeekDaysNumber = [];
export const newsWeekDays = [];
export const globalObject = [];
export const objectForLoad = [];
export const arrayUrls = [];