import {
    newsCardList,
    newsCard,
    URL_ARRAY
} from '../../index.js';
import {
    INPUT_FORMA,
<<<<<<< HEAD
=======

} from '../constans/constans.js'

import {
    URL_ARRAY
>>>>>>> javascript
} from '../constans/constans.js'

export default class NewsCardList {
    constructor(container) {
        this.container = container
    }

    pushCard(localStorageParam, position) {
        for (let i = 0; i < 3; i += 1) {
            let marker = position + i;
            this.container.insertAdjacentHTML("beforeEnd",
                newsCard.create((JSON.parse(localStorage.getItem(localStorageParam))).articles[marker], marker));
        };

        localStorage.setItem('NUMBER_POSITION', ((JSON.parse(localStorage.getItem('NUMBER_POSITION')) + 3)));

    }

    renderCard(parent, child) {

<<<<<<< HEAD
        let URL_ARRAY = [];
        child.forEach(element => {

            parent.removeChild(element)
=======
        child.forEach(element => {
            parent.removeChild(element);
            document.querySelector('.buttom_place_main').classList.remove('buttom_state_disabled');

>>>>>>> javascript
        });

    }

    startPushCard(localStorageParam, position) {
        this.container.insertAdjacentHTML("beforeEnd",
            newsCard.startCreate(localStorageParam, position))

    }


}