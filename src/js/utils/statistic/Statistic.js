export default class Statistic {
    constructor(dateToday, GETTIME) {
        this.daysMarker = null;
        this.dateToday = dateToday;
        this.GETTIME = GETTIME;
    }
    day() {
        return this.GETTIME.day(this.dateToday)
    }

    weekDay() {
        return this.GETTIME.weekDay(this.dateToday)
    }
    newsValue(weekdays) {

        weekdays.forEach(element => {
            if (element == this.dateToday) {
                this.daysMarker = +1;
            }
        });
        return this.daysMarker
    }
}