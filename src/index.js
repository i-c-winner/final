import "./style.css";
import NewsCard from './js/components/NewsCard.js'



import {
    creatNewsCard
} from './js/constans/constans.js'
const newCard = new NewsCard();
console.log(creatNewsCard)
const a = newCard.create(creatNewsCard)
console.log(typeof (a))

if (window.a !== undefined) {
    console.log('OK')
} else {
    console.log('neOK')
}

console.log(a)
console.log(NewsCard)
console.log(newCard)