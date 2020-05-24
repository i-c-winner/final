import {
    newsCardList,
    newsCard,
} from '../../index.js';
import {
    INPUT_FORMA,
    URL_ARRAY,
} from '../constans/constans.js'

export default class NewsCardList {
    constructor(container) {
        this.container = container
    }

    pushCard(localStorageParam, position) {
        for (let i = 0; i < 3; i += 1) {
            let marker = position + i;
            console.log('marker:', marker)
            this.container.insertAdjacentHTML("beforeEnd",
                newsCard.create((JSON.parse(localStorage.getItem(localStorageParam))).articles[marker], marker));
        };

        localStorage.setItem('NUMBER_POSITION', ((JSON.parse(localStorage.getItem('NUMBER_POSITION')) + 3)));

    }

    renderCard(parent, child) {
        child.forEach(element => {
            console.log(URL_ARRAY, 'это тут урл')
            parent.removeChild(element);
            document.querySelector('.buttom_place_main').classList.remove('buttom_state_disabled');
        });
    }



}