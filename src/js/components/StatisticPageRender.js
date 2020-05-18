export default class statisticPageRender {
    constructor(container, day, weekday, value) {
        this.container = container;
        this.day = day;
        this.weekday = weekday;
        this.value = value;
    }

    render() {
        if (this.value == null) {
            this.value = 0;

        }
        const template = `
        <div class = "statistic__box">
            <p class = "statistic__day"> ${this.day}, ${this.weekday} </p> <p class
             = "statistic__number statistic__value" style="width:${this.value}%"> ${this.value} </p>
              </div>
        `
        return template;
    }


}