import seaparatorAndCount from '../utils/statistic/separatorAndCount.js'
import separatorAndCount from '../utils/statistic/separatorAndCount.js';

export default class StatisticCard {
    constructor(objectforload) {
        this.objectforload = objectforload;
    }
    newsInTitle(news) {
        let count = null;
        this.objectforload.forEach(element => {
            count = count + separatorAndCount(element.title, news)
        });
        return count;
    }
    newsInDescription(news) {
        let count = null;
        this.objectforload.forEach(element => {
            count = count + separatorAndCount(element.description, news)
        });
        return count;
    }

    dayWeek() {
        return this.objectforload[0].daysWeek
    }
    date() {
        return this.objectforload[0].date.slice(8, 10);
    }
}