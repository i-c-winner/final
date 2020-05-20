import "../style.css";
import CommitCard from '../js/components/CommitCard.js'
import {
    GIT_PATH
} from '../js/constans/constans.js';
import GitHubApi from '../js/modules/GitHubApi.js';
const GITHUBAPI = new GitHubApi(GIT_PATH)
export const COMMITCARD = new CommitCard();
import CommitCardList from '../js/components/CommitCardList.js';
const COMMITCARDLIST = new CommitCardList(document.querySelector('.main-carousel'))

GITHUBAPI.getGitInfo()
    .then((res) => {
        COMMITCARDLIST.pushCard(res)
    });

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,



});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
    // options
});