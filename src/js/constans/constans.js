//переменныые форм
export const inputForma = document.forms.Search; //форма поиска
export const news = inputForma.news; //поле ввода
export const buttomPlaceHeader = document.querySelector('.buttom_place_header') //кнопка Искать

//переменные для NewsApi
export const pathGit = '';
export const pathNews = 'http://newsapi.org/v2/top-headlines?country=ru&apiKey=68de62cc45bb4e77a24cd68e991d1c38&country=ru&from=2020-05-07&to=2020-05-14&pageSize=100'