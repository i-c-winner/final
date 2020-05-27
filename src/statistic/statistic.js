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

let globalCount = null;
let count = null;
import {
    getInfoForLoad
} from '../js/utils/statistic/getInfoForLoad.js';

import StatisticCardList from '../js/components/StatisticCardList.js';
import StatisticCard from '../js/components/StatisticCard.js';
import separatorAndCount from '../js/utils/statistic/separatorAndCount.js';

//Получаем массивы значений из новостей
const temporaryNews = (Object.values(JSON.parse(
    localStorage.getItem(localStorage.getItem('NewsName'))))[2]);
temporaryNews.forEach(element => {
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


let globalCountInDescription = 0;
let countInDescription = 0;
let globalCountInTitle = 0;
let countInTitle = 0;
globalObject.forEach(element => {
    countInDescription = separatorAndCount(element.description, search);
    countInTitle = separatorAndCount(element.title, search);

    globalCount = globalCount + countInTitle +
        countInDescription;

    globalCountInDescription = globalCountInDescription + countInDescription;
    globalCountInTitle = globalCountInTitle + countInTitle;
});


const statisticCard = new StatisticCard(getInfoForLoad(dayLastWeek.twoDayAgo, globalObject))
const statisticCardList = new StatisticCardList(document.querySelector('.statistic-container'),
    globalCount)

//Загрузка статистики

for (let element in dayLastWeek) {
    count = 0;
    const temporaryArrayForThisBlock =
        getInfoForLoad(dayLastWeek[element], globalObject);


    let countrelactiv = null;
    temporaryArrayForThisBlock.forEach((element) => {

        try { //если в какой то день нет новостей
            count = count + separatorAndCount(element.title, search) +
                separatorAndCount(element.description, search);
        } catch {
            count = count;
        }
    });

    try {
        countrelactiv = Math.round(count * (globalCount / 100));
        statisticCardList.push(element, dayLastWeek[element].getDate(),
            temporaryArrayForThisBlock[2].daysWeek,
            countrelactiv);
    } catch {

    }

};

document.querySelector('.statistic-info__intitle').replaceWith(globalCountInTitle);
document.querySelector('.statistic-info__intext').replaceWith(globalCountInDescription);