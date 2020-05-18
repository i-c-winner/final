import "../style.css";


import statisticPage from '../js/components/StatisticPage.js';
const STATISTIC_PAGE = new statisticPage(JSON.parse(localStorage.getItem(((localStorage.getItem('NewsName'))))))

import {
    SEARCH_ARRAY,
    week,
    DAY_LAST_WEEK,
    INPUT_FORMA
} from '../js/constans/constans.js'

import statisticPageRender from '../js/components/StatisticPageRender.js';
import quantityWeekDaysInNews from '../js/components/quantityWeekDaysInNews.js'

for (let key in DAY_LAST_WEEK) {
    const STATISTIC_PAGE_RENDER = new statisticPageRender(document.querySelector('.statistic-container'),
        STATISTIC_PAGE.getDayFromDate(DAY_LAST_WEEK[key]),
        STATISTIC_PAGE.getWeekDayFromDate(DAY_LAST_WEEK[key]),
        quantityWeekDaysInNews((JSON.parse(localStorage.getItem(((localStorage.getItem('NewsName'))))).articles),
            DAY_LAST_WEEK[key], STATISTIC_PAGE))
    console.log(STATISTIC_PAGE_RENDER)
    document.querySelector('.statistic-container').
    insertAdjacentHTML("beforeEnd", STATISTIC_PAGE_RENDER.render());
}