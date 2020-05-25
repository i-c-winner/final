import {
    URL_ARRAY,
    INPUT_FORMA
} from "../constans/constans";

// import {
//     URL_ARRAY
// }
// from '../../index.js'

export default class SearchInput {


    validation(field) {
        let marker = null;
        if (
            URL_ARRAY.length === 0 || (INPUT_FORMA.news.value !== (localStorage.getItem('NewsName')))
            //(JSON.parse(localStorage.getItem('NUMBER_POSITION') < 2))

        ) {
            if ((!field.validity.tooShort || !field.validity.valueMissing)) {
                marker = true;
            } else {
                marker = false;
            }
        } else {
            marker = false;
        }
        return marker;

    }

    inputValidation(field) {
        let marker = null;
        if ((!field.validity.tooShort)) {
            marker = true;
        } else {
            marker = false;
        }
        return marker;

    }
}