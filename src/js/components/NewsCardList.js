import {
    newsCardList,
    newsCard,
} from '../../index.js';
import {
    INPUT_FORMA,
    NUMBER_POSITION,
} from '../constans/constans.js'

export default class NewsCardList {
    constructor(container) {
        this.container = container
    }

    pushCard(localStorageParam, position) {
        for (let i = 0; i < 3; i += 1) {
            this.container.insertAdjacentHTML("beforeEnd",
                newsCard.create((JSON.parse(localStorage.getItem(localStorageParam))).articles[position + i]));
        }
        localStorage.setItem('NUMBER_POSITION', ((JSON.parse(localStorage.getItem('NUMBER_POSITION')) + 3)));

    }

    renderCard(parent, child) {
        child.forEach(element => {
            parent.removeChild(element)
        });
    }

}