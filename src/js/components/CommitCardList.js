import {
    commitCard
} from '../../about/about.js'

export default class CommitCardList {
    constructor() {

    }

    pushCard(node, array) {

        node.insertAdjacentHTML("beforeEnd", commitCard.createCard(array));


    };
}