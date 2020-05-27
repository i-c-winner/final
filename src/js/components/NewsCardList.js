import {
    newsCardList,
    newsCard,
    newsPosition,
} from '../../index.js';
import {
    INPUT_FORMA,
    coefficientNews
} from '../constans/constans.js'

// import {
//     URL_ARRAY
// } from '../constans/constans.js'

export default class NewsCardList {
    constructor(container) {
        this.container = container
    }

    pushCard(localStorageParam, position) {
        let indexForThisBlock = 0;
        for (let i = 0; i < 3; i += 1) {
            indexForThisBlock = position + i;
            this.container.insertAdjacentHTML("beforeEnd",
                newsCard.create((JSON.parse(localStorage.getItem(localStorageParam))).articles[
                    indexForThisBlock], indexForThisBlock));

            localStorage.setItem('NUMBER_POSITION', (indexForThisBlock + coefficientNews));

        };



    }

    renderCard(parent, child) {

        child.forEach(element => {
            parent.removeChild(element);
            document.querySelector('.buttom_place_main').classList.remove('buttom_state_disabled');

        });

    }

    startPushCard(localStorageParam, position) {
        this.container.insertAdjacentHTML("beforeEnd",
            newsCard.startCreate(localStorageParam, position))

    }


}