import "../style.css";

import Flickity from 'flickity'
import CommitCard from '../js/components/CommitCard.js'
import {
    GIT_PATH
} from '../js/constans/constans.js';
import GitHubApi from '../js/modules/GitHubApi.js';
const gitHubApi = new GitHubApi(GIT_PATH)
export const commitCard = new CommitCard();
import CommitCardList from '../js/components/CommitCardList.js';
const arrayWithCommits = [];
const cellElems = [];
const commitCardList = new CommitCardList()


gitHubApi.getGitInfo()
    .then((res) => {
        s
        res.forEach(element => {
            arrayWithCommits.push(commitCard.commitsObject(element));
        })
    })
    .then(() => {
        arrayWithCommits.forEach((elem) => {
            const cell = document.createElement('div');
            commitCardList.pushCard(cell, elem);
            cellElems.push(cell);
        })
    })
    .then(function () {
        flkty.append(cellElems)
    })
    .catch((err) => {
        console.log(err)
    })


const flkty = new Flickity('.main-carousel', {
    initialIndex: 4,
    cellAlign: 'left'
});