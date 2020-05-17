import "../style.css";
import CommitCard from '../js/components/CommitCard.js'
import {
    GIT_PATH
} from '../js/constans/constans.js';
import GitHubApi from '../js/modules/GitHubApi.js';
const GITHUBAPI = new GitHubApi(GIT_PATH)
export const COMMITCARD = new CommitCard();
import CommitCardList from '../js/components/CommitCardList.js';
const COMMITCARDLIST = new CommitCardList(document.querySelector('.commits__box'))

GITHUBAPI.getGitInfo()
    .then((res) => {
        COMMITCARDLIST.pushCard(res)
    });