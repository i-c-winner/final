import {
    COMMITCARD
} from '../../about/about.js'

export default class CommitCardList {
    constructor(container) {
        this.container = container
    }

    pushCard(array) {
        array.forEach(element => {
            console.log(this.container, 'news')
            console.log(COMMITCARD.createCard(element))
            this.container.insertAdjacentHTML("beforeEnd", COMMITCARD.createCard(element))

        });

    }
}