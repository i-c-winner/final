import {
    COMMITCARD
} from '../../about/about.js'

export default class CommitCardList {
    constructor(container) {
        this.container = container
    }

    pushCard(array) {
        array.forEach(element => {
            this.container.insertAdjacentHTML("beforeEnd", COMMITCARD.createCard(element))
        });

    }
}