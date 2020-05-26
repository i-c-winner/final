import {
    URL_ARRAY,
    //INPUT_FORMA
} from "../constans/constans";

import {
    INPUT_FORMA
} from '../../index.js'



import {
    newsPosition
}
from '../../index.js'

export default class SearchInput {
    validation(field) {

        let isValidation = null;
        if (
            //console.log(localStorage.getItem('NewsName'))
            (URL_ARRAY.length === 0) || (INPUT_FORMA.news.value !== (localStorage.getItem('NewsName')))
        ) {
            if (field.value.length > 4) {
                isValidation = true;
            } else {
                isValidation = false;
            }
        } else {
            isValidation = false;
        }
        return isValidation;
    }

    inputValidation(field) {
        let isInputValidation = null;
        if ((!field.validity.tooShort)) {
            isInputValidation = true;
        } else {
            isInputValidation = false;
        }
        return isInputValidation;
    }
}