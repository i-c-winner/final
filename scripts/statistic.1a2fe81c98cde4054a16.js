!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=20)}({0:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return c}));const a="https://api.github.com/repos/i-c-winner/final/commits",n="https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?language=ru&apiKey=68de62cc45bb4e77a24cd68e991d1c38&pageSize=100&q=";const o=1;localStorage.getItem("NewsName"),new Date,new Date(new Date-864e5),new Date(new Date-1728e5),new Date(new Date-2592e5),new Date(new Date-3456e5),new Date(new Date-432e6),new Date(new Date-5184e5);let c=[]},20:function(e,t,r){"use strict";r.r(t);r(3),r(0),r(6);let a=function(e,t){let r=[],a=[];return t.forEach((function(t,a){e.getDate()==new Date(t.date).getDate()&&r.push(a)})),r.forEach((function(e,r){a.push(t[e])})),a};function n(e,t){let r=null,a=[];try{a=e.split(" ")}catch{a=[]}return a.forEach(e=>{e.toLowerCase()==t.toLowerCase()&&(r+=1)}),r}document.querySelector(".header-middle__title_value").replaceWith(localStorage.getItem("NewsName"));let o=null,c=null;Object.values(newsArray)[2].forEach(e=>{NEWS_DATE.push(e.publishedAt),NEWS_TITLE.push(e.title),NEWS_NAME.push(e.source.name),NEWS_DESCRIPTION.push(e.description)}),NEWS_DATE.forEach(e=>{NEWS_WEEK_DAYS_NUMBER.push(new Date(e).getDay())}),NEWS_WEEK_DAYS_NUMBER.forEach(e=>{for(let t=0;t<7;t+=1)e===t&&NEWS_WEEK_DAYS.push(DAYS_WEEK[t])});for(let e=0;e<=99;e++){const t={daysWeek:NEWS_WEEK_DAYS[e],date:NEWS_DATE[e],name:NEWS_NAME[e],title:NEWS_TITLE[e],description:NEWS_DESCRIPTION[e]};GLOBAL_OBJECT.push(t)}let s=0,l=0,i=0,d=0;GLOBAL_OBJECT.forEach(e=>{l=n(e.description,SEARCH),d=n(e.title,SEARCH),o=o+d+l,s+=l,i+=d});new class{constructor(e){this.objectforload=e}newsInTitle(e){let t=null;return this.objectforload.forEach(r=>{t+=n(r.title,e)}),t}newsInDescription(e){let t=null;return this.objectforload.forEach(r=>{t+=n(r.description,e)}),t}dayWeek(){return this.objectforload[0].daysWeek}date(){return this.objectforload[0].date.slice(8,10)}}(a(DAY_LAST_WEEK.twodayago,GLOBAL_OBJECT));const u=new class{constructor(e,t){this.container=e,this.globalcount=t}push(e,t,r,a){const n=`<div class="statistic__box carousel-cell"><p class ="statistic__day"> ${r},${t}</p><p class="statistic__number statistic__value"\n             style="width:${a}%"> ${a}</p></div>`;this.container.insertAdjacentHTML("beforeEnd",n)}}(document.querySelector(".statistic-container"),o);for(let e in DAY_LAST_WEEK){c=0;let t=[];t=a(DAY_LAST_WEEK[e],GLOBAL_OBJECT);let r=null;t.forEach(e=>{try{c=c+n(e.title,SEARCH)+n(e.description,SEARCH)}catch{c=c}});try{r=Math.round(c*(o/100)),u.push(e,DAY_LAST_WEEK[e].getDate(),t[2].daysWeek,r)}catch{}}document.querySelector(".statistic-info__intitle").replaceWith(i),document.querySelector(".statistic-info__intext").replaceWith(s)},3:function(e,t,r){},6:function(e,t,r){"use strict";r.r(t),r.d(t,"today",(function(){return n})),r.d(t,"weekDate",(function(){return o})),r.d(t,"nodayMonth",(function(){return c})),r.d(t,"todayDay",(function(){return s})),r.d(t,"yearToday",(function(){return l})),r.d(t,"weekYear",(function(){return i})),r.d(t,"weekDay",(function(){return d})),r.d(t,"weekMonth",(function(){return u})),r.d(t,"newsArray",(function(){return _})),r.d(t,"newsApi",(function(){return m})),r.d(t,"searchInput",(function(){return f})),r.d(t,"INPUT_FORMA",(function(){return S})),r.d(t,"newsCardList",(function(){return h})),r.d(t,"cardsContainer",(function(){return g})),r.d(t,"newsCard",(function(){return y}));r(3);var a=r(0);let n=new Date,o=new Date(n-6048e5),c=n.getMonth()+1,s=n.getDate(),l=n.getFullYear(),i=o.getFullYear(),d=o.getDate(),u=o.getMonth()+1;console.log(55);const _=JSON.parse(localStorage.getItem(localStorage.getItem("NewsName"))),p=JSON.parse(localStorage.getItem("NewsArray")),m=new class{getNews(e,t,r,a,n,o,c,s){return fetch(e+t+"&from="+s+"-"+c+"-"+o+"&to="+n+"-"+a+"-"+r).then((function(e){return e.ok?e.json():Promise.reject(err)})).catch(e=>(document.querySelector(".preloader").classList.remove("preloader_state_enabled"),document.querySelector(".circle-preloader").classList.remove("circle-preloader_state_disabled"),document.querySelector(".body").classList.remove("body_preloader"),document.querySelector(".preloader__error").classList.remove("preloader_error-network"),Promise.reject(e)))}},f=new class{validation(e){let t=null;return t=(0===a.c.length||S.news.value!==localStorage.getItem("NewsName"))&&e.value.length>4,t}inputValidation(e){let t=null;return t=!e.validity.tooShort,t}},S=document.forms.Search,h=new class{constructor(e){this.container=e}pushCard(e,t){let r=0;for(let n=0;n<3;n+=1)r=t+n,this.container.insertAdjacentHTML("beforeEnd",y.create(JSON.parse(localStorage.getItem(e)).articles[r],r)),localStorage.setItem("NUMBER_POSITION",r+a.d)}renderCard(e,t){t.forEach(t=>{e.removeChild(t),document.querySelector(".buttom_place_main").classList.remove("buttom_state_disabled")})}startPushCard(e,t){this.container.insertAdjacentHTML("beforeEnd",y.startCreate(e,t))}}(document.querySelector(".cards")),g=document.querySelector(".cards"),y=new class{create(e,t){const r=` <div class=" card card_place_main index${t}">\n                <div class="main__text-box">\n\n                    <img src="${e.urlToImage}" alt="Новостное изображение"\n                        class="card__image card__image_main">\n                    <p class="card__text-date card__text-date_main">\n                        ${e.publishedAt}\n                    </p>\n                    <h2 class="card__text-title card__text-title_main ">\n                        ${e.title}\n                    </h2>\n                    <p class="card__text-paragraph card__text-paragraph_main">\n                       ${e.description}.\n                    </p>\n                </div>\n                <p class="card__text-source card__text-source_main">\n                    ${e.source.name}\n                </p>\n\n            </div>`;return a.c.push({title:e.title,url:e.url,index:t}),localStorage.setItem("NewsArray",JSON.stringify(a.c)),r}startCreate(e,t){if(0!==e){return` <div class=" card card_place_main index${t}">\n                <div class="main__text-box">\n\n                    <img src="${e.urlToImage}" alt="Новостное изображение"\n                        class="card__image card__image_main">\n                    <p class="card__text-date card__text-date_main">\n                        ${e.publishedAt}\n                    </p>\n                    <h2 class="card__text-title card__text-title_main">\n                        ${e.title}\n                    </h2>\n                    <p class="card__text-paragraph card__text-paragraph_main">\n                       ${e.description}.\n                    </p>\n                </div>\n                <p class="card__text-source card__text-source_main">\n                    ${e.source.name}\n                </p>\n\n            </div>`}}};void 0!==typeof S&&S.addEventListener("submit",(function(){event.preventDefault(),f.validation(S.news)&&(localStorage.setItem("NUMBER_POSITION",0),document.querySelector(".preloader").classList.add("preloader_state_enabled"),localStorage.clear(),a.c.length=0,document.querySelector(".body").classList.add("body_preloader"),document.querySelector(".circle-preloader").classList.add("circle-preloader_state_disabled"),h.renderCard(document.querySelector(".cards"),document.querySelectorAll(".card")),m.getNews(a.b,S.news.value,s,c,l,d,u,i).then(e=>{document.querySelector(".body").classList.remove("body_preloader"),document.querySelector(".body").classList.remove("preloader_error-network"),document.querySelector(".circle-preloader").classList.remove("circle-preloader_state_disabled"),localStorage.setItem(S.news.value,JSON.stringify(e)),localStorage.setItem("NewsName",S.news.value),h.pushCard(S.news.value,0)}).catch(e=>{console.log(e),document.querySelector(".preloader").classList.remove("preloader_state_enabled")}))})),document.querySelector(".buttom_place_main").addEventListener("click",(function(e){const t=JSON.parse(localStorage.getItem("NUMBER_POSITION"));h.pushCard(S.news.value,t),p.length+3>=news.articles.length&&document.querySelector(".buttom_place_main").classList.add("buttom_state_disabled")})),S.addEventListener("input",(function(e){S.news.value.length>3&&(document.querySelector(".buttom_place_header").classList.remove("buttom_state_activ"),document.querySelector(".error__text").classList.add("error__text_disabled")),S.news.value.length<4&&document.querySelector(".error__text").classList.remove("error__text_disabled")})),document.querySelector(".cards").addEventListener("click",e=>{a.c.forEach(t=>{document.querySelector(".index"+t.index).contains(e.target)&&window.open(t.url)})}),JSON.parse(localStorage.getItem("NewsArray")).forEach(e=>{let t=JSON.parse(localStorage.getItem(localStorage.getItem("NewsName"))).articles[e.index];h.startPushCard(t,e.index)})}});