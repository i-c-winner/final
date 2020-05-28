import {
    arrayUrls,
    inputForma
} from "../constans/constans";





import {
    newsPosition
}
from '../../index.js'

export default class SearchInput {
    validation(field) {

        let isValidation = null;
        if (
            (arrayUrls.length === 0) || (inputForma.news.value !== (localStorage.getItem('NewsName')))
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