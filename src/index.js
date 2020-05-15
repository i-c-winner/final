import "./style.css";


// переменные формы
import {
    INPUT_FORMA,
    todayYear,
    today
} from './js/constans/constans.js';
import {
    BUTTOM_PLACE_HEADER
} from './js/constans/constans.js';

//переменные API
import {
    PATH_NEWS,
    NUMBER_POSITION,
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
import requestForStorage from './js/utils/utils.js'

//формирование карточек новостей
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from "./js/components/NewsCardList";
export const newsCardList = new NewsCardList(document.querySelector('.cards'));
//export const cardsContainer = document.querySelector('.cards');
export const newsCard = new NewsCard();



requestForStorage(INPUT_FORMA);