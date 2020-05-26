import "../style.css";
import {
    //NEWS,
    DAYS_WEEK,
    DAY_LAST_WEEK,
    DAY_WEEK,
    SEARCH_IN_TITLE,

    SEARCH_IN_TEXT,
    NEWS_DATE,
    NEWS_TITLE,
    NEWS_NAME,
    NEWS_DESCRIPTION,
    NEWS_WEEK_DAYS_NUMBER,
    NEWS_WEEK_DAYS,
    OBJECT_FOR_LOAD,
    //SEARCH,
} from '../js/constans/constans.js';
debugger;
import {
    newsArray,
    //     INPUT_FORMA
} from "../index.js"
// console.log(INPUT_FORMA)


document.querySelector('.header-middle__title_value').replaceWith(
    localStorage.getItem("NewsName"));

let GLOBAL_COUNT = null;
let COUNT = null;
import {
    getInfoForLoad
} from '../js/utils/statistic/getInfoForLoad.js';

import StatisticCardList from '../js/components/StatisticCardList.js';


import StatisticCard from '../js/components/StatisticCard.js'

import separatorAndCount from '../js/utils/statistic/separatorAndCount.js'

//Получаем массивы значений из новостей
const TEMPORARY_NEWS = (Object.values(newsArray)[2]);
TEMPORARY_NEWS.forEach(element => {
    NEWS_DATE.push(element.publishedAt);
    NEWS_TITLE.push(element.title);
    NEWS_NAME.push(element.source.name);
    NEWS_DESCRIPTION.push(element.description);
});

NEWS_DATE.forEach(element => {
    NEWS_WEEK_DAYS_NUMBER.push(new Date(element).getDay())
});

//Возвращаем массив дней недели- (Пн там или Ср)
NEWS_WEEK_DAYS_NUMBER.forEach((element) => {
    for (let i = 0; i < 7; i += 1) {
        if (element === i) {
            NEWS_WEEK_DAYS.push(DAYS_WEEK[i])
        }

    }
})

//собираем глобальный объект с нужной информаццией
for (let i = 0; i <= 99; i++) {

    const dataForDay = {
        daysWeek: NEWS_WEEK_DAYS[i],
        date: NEWS_DATE[i],
        name: NEWS_NAME[i],
        title: NEWS_TITLE[i],
        description: NEWS_DESCRIPTION[i]
    }
    GLOBAL_OBJECT.push(dataForDay)


}


let GLOBAL_COUNT_IN_DESCRIPTION = 0;
let COUNT_IN_DESCRIPTION = 0;
let GLOBAL_COUNT_IN_TITLE = 0;
let COUNT_IN_TITLE = 0;
GLOBAL_OBJECT.forEach(element => {
    COUNT_IN_DESCRIPTION = separatorAndCount(element.description, SEARCH);
    COUNT_IN_TITLE = separatorAndCount(element.title, SEARCH);

    GLOBAL_COUNT = GLOBAL_COUNT + COUNT_IN_TITLE +
        COUNT_IN_DESCRIPTION;

    GLOBAL_COUNT_IN_DESCRIPTION = GLOBAL_COUNT_IN_DESCRIPTION + COUNT_IN_DESCRIPTION;
    GLOBAL_COUNT_IN_TITLE = GLOBAL_COUNT_IN_TITLE + COUNT_IN_TITLE;
});


const STATISTIC_CARD = new StatisticCard(getInfoForLoad(DAY_LAST_WEEK.twodayago, GLOBAL_OBJECT))
const STATISTIC_CARD_LIST = new StatisticCardList(document.querySelector('.statistic-container'),
    GLOBAL_COUNT)

//Загрузка статистики

for (let element in DAY_LAST_WEEK) {
    COUNT = 0;
    let temporaryArrayForThisBlock = [];

    temporaryArrayForThisBlock =
        getInfoForLoad(DAY_LAST_WEEK[element], GLOBAL_OBJECT);


    let countrelactiv = null;
    temporaryArrayForThisBlock.forEach((element) => {

        try { //если в какой то день нет новостей
            COUNT = COUNT + separatorAndCount(element.title, SEARCH) +
                separatorAndCount(element.description, SEARCH);
        } catch {
            COUNT = COUNT;

        }
    });



    try {


        countrelactiv = Math.round(COUNT * (GLOBAL_COUNT / 100));
        STATISTIC_CARD_LIST.push(element, DAY_LAST_WEEK[element].getDate(),
            temporaryArrayForThisBlock[2].daysWeek,
            countrelactiv);
    } catch {

    }

};

document.querySelector('.statistic-info__intitle').replaceWith(GLOBAL_COUNT_IN_TITLE);
document.querySelector('.statistic-info__intext').replaceWith(GLOBAL_COUNT_IN_DESCRIPTION);