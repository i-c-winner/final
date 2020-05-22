import "../style.css";

import Flickity from 'flickity'
import CommitCard from '../js/components/CommitCard.js'
import {
    GIT_PATH
} from '../js/constans/constans.js';
import GitHubApi from '../js/modules/GitHubApi.js';
const GITHUBAPI = new GitHubApi(GIT_PATH)
export const COMMITCARD = new CommitCard();
import CommitCardList from '../js/components/CommitCardList.js';
let arrayWithCommit = [];
let cellElems = [];
const COMMITCARDLIST = new CommitCardList()


GITHUBAPI.getGitInfo()
    .then((res) => {
        res.forEach(element => {
            arrayWithCommit.push(COMMITCARD.commitsObject(element));
        })
    })
    .then(() => {
        arrayWithCommit.forEach((elem) => {
            let cell = document.createElement('div');
            COMMITCARDLIST.pushCard(cell, elem);
            cellElems.push(cell);
        })
    })
    .then(function () {
        flkty.append(cellElems)
    });


const flkty = new Flickity('.main-carousel', {
    initialIndex: 4,
    cellAlign: 'left'
});