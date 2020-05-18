//import STATISTIC_PAGE from '../../statistic/statistic.js'

/**
 * Определяет количес с днями недели всех новостей
 * @param {news} news - объект новостей
 * @param {week} week -массив с днями недели
 */
export default function quantityWeekDaysInNews(news, day, statisticpage) {
    let marker = null;
    console.log(day)
    news.forEach(element => {
        if (statisticpage.getWeekDayFromDate(day) == statisticpage.getWeekDayFromDate(new Date(element.publishedAt))) {
            marker = marker + 1
        }

    })
    return marker;
}