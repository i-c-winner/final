export default class SearchInput {


    validation(field) {
        let marker = null;
        if ((JSON.parse(localStorage.getItem('NUMBER_POSITION') < 2))) {
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