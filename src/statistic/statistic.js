import "../style.css";


import statisticPage from '../js/components/StatisticPage.js';
const STATISTIC_PAGE = new statisticPage(JSON.parse(localStorage.getItem(((localStorage.getItem('NewsName'))))))
const NEWS_CONTAINER = JSON.parse(localStorage.getItem(((localStorage.getItem('NewsName')))))

import {
    SEARCH_ARRAY,
    week,
    DAY_LAST_WEEK,
    INPUT_FORMA
} from '../js/constans/constans.js'


import searchCount from '../js/utils/statistic/searchCount.js'

import statisticPageRender from '../js/components/StatisticPageRender.js';
import quantityWeekDaysInNews from '../js/components/quantityWeekDaysInNews.js'
document.querySelector('.header-middle__title_value').replaceWith(localStorage.getItem('NewsName'));

for (let key in DAY_LAST_WEEK) {
    const STATISTIC_PAGE_RENDER = new statisticPageRender(document.querySelector('.statistic-container'),
        STATISTIC_PAGE.getDayFromDate(DAY_LAST_WEEK[key]),
        STATISTIC_PAGE.getWeekDayFromDate(DAY_LAST_WEEK[key]),
        quantityWeekDaysInNews((NEWS_CONTAINER.articles),
            DAY_LAST_WEEK[key], STATISTIC_PAGE))
    document.querySelector('.statistic-container').
    insertAdjacentHTML("beforeEnd", STATISTIC_PAGE_RENDER.render());
}