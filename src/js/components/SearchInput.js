import {
    INPUT_FORMA,
    INPUT_FORMA_MARKER
} from "../constans/constans";

import {
    MARKER
} from '../utils/utils.js';


export default class SearchInput {


    validation(field) {
        console.log(JSON.parse(localStorage.getItem('NUMBER_POSITION')), 'smotrim');
        let marker = null;
        console.log(MARKER, 'поле проверки')
        if ((MARKER !== INPUT_FORMA.news.value) && (JSON.parse(localStorage.getItem('NUMBER_POSITION') < 2))) {
            console.log(1)
            if ((!field.validity.tooShort || !field.validity.valueMissing)) {
                marker = true;
            } else {
                marker = false;
            }
        } else {
            marker = false;
        }
        console.log(marker)
        return marker;

    }
}