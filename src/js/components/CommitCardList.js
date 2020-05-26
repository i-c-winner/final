import {
    COMMITCARD
} from '../../about/about.js'

export default class CommitCardList {
    constructor() {

    }

    pushCard(node, array) {

        node.insertAdjacentHTML("beforeEnd", COMMITCARD.createCard(array));


    };
}