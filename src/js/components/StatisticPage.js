import {
    week
} from '../constans/constans.js'
export default class StatisticPage {
    constructor(containerWithHews) {

        this.containerWithHews = containerWithHews;
    }
    getDayFromDate(date) {
        const DAY = date.getDate();
        return DAY
    }

    getWeekDayFromDate(date) {
        let marker = null
        const WEEKDAY = date.getDay()
        week.forEach(function (element, i) {

            if (i == WEEKDAY) {
                marker = element;
                return (marker);
            }
            return marker;
        });
        return (marker);
    }

    getMonthFromDate(date) {
        return (date.getMonth() + 1)
    }

    getYearFromDate(date) {
        return (date.getFullYear())
    }
}