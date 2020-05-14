export default class SearchInput {


    validation(field) {
        if (field.validity.tooShort || field.validity.valueMissing) {

            return false;
        } else {

            return true;
        }
    }
}