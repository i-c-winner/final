import "../style.css";
import {
    NEWS,
    DAYS_WEEK,
    dayLastWeek,
    dayWeek,
    searchInTitle,
    globalObject,
    searchInText,
    newsDate,
    newsTitle,
    newsName,
    newsDescription,
    newsWeekDaysNumber,
    newsWeekDays,
    objectForLoad,
    search,
} from '../js/constans/constans.js';

import {
    newsArray,
    inputForma,
} from '../js/constans/constans.js'




document.querySelector('.header-middle__title_value').replaceWith(
    localStorage.getItem("NewsName"));

let GLOBAL_COUNT = null;
let COUNT = null;
import {
    getInfoForLoad
} from '../js/utils/statistic/getInfoForLoad.js';

import StatisticCardList from '../js/components/StatisticCardList.js';
import StatisticCard from '../js/components/StatisticCard.js';
import separatorAndCount from '../js/utils/statistic/separatorAndCount.js';

//Получаем массивы значений из новостей
const TEMPORARY_NEWS = (Object.values(JSON.parse(
    localStorage.getItem(localStorage.getItem('NewsName'))))[2]);
TEMPORARY_NEWS.forEach(element => {
    newsDate.push(element.publishedAt);
    newsTitle.push(element.title);
    newsName.push(element.source.name);
    newsDescription.push(element.description);
});

newsDate.forEach(element => {
    newsWeekDaysNumber.push(new Date(element).getDay())
});

//Возвращаем массив дней недели- (Пн там или Ср)
newsWeekDaysNumber.forEach((element) => {
    for (let i = 0; i < 7; i += 1) {
        if (element === i) {
            newsWeekDays.push(DAYS_WEEK[i])
        }

    }
})

//собираем глобальный объект с нужной информаццией
for (let i = 0; i <= 99; i++) {

    const dataForDay = {
        daysWeek: newsWeekDays[i],
        date: newsDate[i],
        name: newsName[i],
        title: newsTitle[i],
        description: newsDescription[i]
    }
    globalObject.push(dataForDay)


}


let GLOBAL_COUNT_IN_DESCRIPTION = 0;
let COUNT_IN_DESCRIPTION = 0;
let GLOBAL_COUNT_IN_TITLE = 0;
let COUNT_IN_TITLE = 0;
globalObject.forEach(element => {
    COUNT_IN_DESCRIPTION = separatorAndCount(element.description, search);
    COUNT_IN_TITLE = separatorAndCount(element.title, search);

    GLOBAL_COUNT = GLOBAL_COUNT + COUNT_IN_TITLE +
        COUNT_IN_DESCRIPTION;

    GLOBAL_COUNT_IN_DESCRIPTION = GLOBAL_COUNT_IN_DESCRIPTION + COUNT_IN_DESCRIPTION;
    GLOBAL_COUNT_IN_TITLE = GLOBAL_COUNT_IN_TITLE + COUNT_IN_TITLE;
});


const STATISTIC_CARD = new StatisticCard(getInfoForLoad(dayLastWeek.twoDayAgo, globalObject))
const STATISTIC_CARD_LIST = new StatisticCardList(document.querySelector('.statistic-container'),
    GLOBAL_COUNT)

//Загрузка статистики

for (let element in dayLastWeek) {
    COUNT = 0;
    let temporaryArrayForThisBlock = [];

    temporaryArrayForThisBlock =
        getInfoForLoad(dayLastWeek[element], globalObject);


    let countrelactiv = null;
    temporaryArrayForThisBlock.forEach((element) => {

        try { //если в какой то день нет новостей
            COUNT = COUNT + separatorAndCount(element.title, search) +
                separatorAndCount(element.description, search);
        } catch {
            COUNT = COUNT;
        }
    });

    try {
        countrelactiv = Math.round(COUNT * (GLOBAL_COUNT / 100));
        STATISTIC_CARD_LIST.push(element, dayLastWeek[element].getDate(),
            temporaryArrayForThisBlock[2].daysWeek,
            countrelactiv);
    } catch {

    }

};

document.querySelector('.statistic-info__intitle').replaceWith(GLOBAL_COUNT_IN_TITLE);
document.querySelector('.statistic-info__intext').replaceWith(GLOBAL_COUNT_IN_DESCRIPTION);