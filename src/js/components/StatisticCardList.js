export default class StatisticCardList {
    constructor(container, globalcount) {
        this.container = container;
        this.globalcount = globalcount;
    }
    push(objectforload, dayweek, date, countrelactiv) {
        //debugger;
        const template = `<div class="statistic__box carousel-cell"><p class ="statistic__day"> ${date},${dayweek}</p><p class="statistic__number statistic__value"
             style="width:${countrelactiv}%"> ${countrelactiv}</p></div>`
        this.container.insertAdjacentHTML("beforeEnd", template)


    }

}