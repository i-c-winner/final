import "./style.css";
import NewsCard from './js/components/NewsCard.js'

// переменные формы
import {
    inputForma
} from './js/constans/constans.js';
import {
    buttomPlaceHeader
} from './js/constans/constans.js';

//переменные API
import {
    pathNews
} from './js/constans/constans.js';
import {
    pathgit
} from './js/constans/constans.js';
import NewsApi from './js/modules/NewsApi.js';
const newsApi = new NewsApi();
console.log(newsApi.getNews)
import search from './js/utils/utils.js'
import SearchInput from './js/components/SearchInput.js';
const searchInput = new SearchInput();
console.log(newsApi.getNews(pathNews)
    .then((res) => {
        console.log(res)
    })
)