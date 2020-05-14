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
    PATH_NEWS
} from './js/constans/constans.js';
import {
    PATH_GIT
} from './js/constans/constans.js';
import NewsApi from './js/modules/NEWSApi.js';
export const newsApi = new NewsApi();
import search from './js/utils/utils.js'
import SearchInput from './js/components/SearchInput.js';
export const searchInput = new SearchInput();

//формирование запроса и работа с ним



//отправка запроса и запись в локальное хранилище
import requestForStorage from './js/utils/utils.js'


requestForStorage(INPUT_FORMA);