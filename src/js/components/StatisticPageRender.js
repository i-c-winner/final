export default class statisticPageRender {
    constructor(container, day, weekday, value) {
        this.container = container;
        this.day = day;
        this.weekday = weekday;
        this.value = value;
    }

    render() {
        console.log('render')
        const template = `
        <div class = "statistic__box">
            <p class = "statistic__day"> ${this.day}, ${this.weekday} </p> <p class
             = "statistic__number statistic__value"> ${this.value} </p>
              </div>
        `
        return template;
    }


}