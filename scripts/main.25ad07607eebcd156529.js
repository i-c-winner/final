!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=19)}({0:function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"e",(function(){return l})),r.d(t,"p",(function(){return s})),r.d(t,"i",(function(){return d})),r.d(t,"g",(function(){return i})),r.d(t,"j",(function(){return u})),r.d(t,"m",(function(){return _})),r.d(t,"l",(function(){return m})),r.d(t,"k",(function(){return p})),r.d(t,"o",(function(){return g})),r.d(t,"n",(function(){return y})),r.d(t,"h",(function(){return S})),r.d(t,"f",(function(){return f}));const a="https://api.github.com/repos/i-c-winner/final/commits",n="https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?language=ru&apiKey=68de62cc45bb4e77a24cd68e991d1c38&pageSize=100&q=",o=["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],c=1,l=3,s=localStorage.getItem("NewsName"),d=document.forms.Search,i={today:new Date,yestoday:new Date(new Date-864e5),twoDayAgo:new Date(new Date-1728e5),tryDayAgo:new Date(new Date-2592e5),forDayAgo:new Date(new Date-3456e5),fiveDayAgo:new Date(new Date-432e6),sixDayAgo:new Date(new Date-5184e5)},u=[],_=[],m=[],p=[],g=[],y=[],S=[],f=[]},19:function(e,t,r){"use strict";r.r(t),r.d(t,"today",(function(){return n})),r.d(t,"weekDate",(function(){return o})),r.d(t,"nodayMonth",(function(){return c})),r.d(t,"todayDay",(function(){return l})),r.d(t,"yearToday",(function(){return s})),r.d(t,"weekYear",(function(){return d})),r.d(t,"weekDay",(function(){return i})),r.d(t,"weekMonth",(function(){return u}));r(3);var a=r(0);const n=new Date,o=new Date(n-6048e5),c=n.getMonth()+1,l=n.getDate(),s=n.getFullYear(),d=o.getFullYear(),i=o.getDate(),u=o.getMonth()+1;let _=!0;const m=new class{getNews(e,t,r,a,n,o,c,l){return fetch(e+t+"&from="+l+"-"+c+"-"+o+"&to="+n+"-"+a+"-"+r).then((function(e){return e.ok?e.json():Promise.reject(err)})).catch(e=>(document.querySelector(".preloader").classList.remove("preloader_state_enabled"),document.querySelector(".circle-preloader").classList.remove("circle-preloader_state_disabled"),document.querySelector(".body").classList.remove("body_preloader"),document.querySelector(".preloader__error").classList.remove("preloader_error-network"),Promise.reject(e)))}},p=new class{validation(e){let t=null;return t=(0===a.f.length||a.i.news.value!==localStorage.getItem("NewsName"))&&e.value.length>4,t}inputValidation(e){let t=null;return t=!e.validity.tooShort,t}},g=new class{constructor(e){this.container=e}pushCard(e,t,r){let n=0;for(let o=0;o<3;o+=1)n=t+o,this.container.insertAdjacentHTML("beforeEnd",r.create(JSON.parse(localStorage.getItem(e)).articles[n],n)),localStorage.setItem("NUMBER_POSITION",n+a.a)}renderCard(e,t){t.forEach(t=>{e.removeChild(t),document.querySelector(".buttom_place_main").classList.remove("buttom_state_disabled")})}startPushCard(e,t,r){this.container.insertAdjacentHTML("beforeEnd",r.startCreate(e,t))}}(document.querySelector(".cards")),y=(document.querySelector(".cards"),new class{create(e,t){const r=` <div class=" card card_place_main index${t}">\n                <div class="main__text-box">\n\n                    <img src="${e.urlToImage}" alt="Новостное изображение"\n                        class="card__image card__image_main">\n                    <p class="card__text-date card__text-date_main">\n                        ${e.publishedAt}\n                    </p>\n                    <h2 class="card__text-title card__text-title_main ">\n                        ${e.title}\n                    </h2>\n                    <p class="card__text-paragraph card__text-paragraph_main">\n                       ${e.description}.\n                    </p>\n                </div>\n                <p class="card__text-source card__text-source_main">\n                    ${e.source.name}\n                </p>\n\n            </div>`;let a=[];return JSON.parse(localStorage.getItem("NewsArray"))&&(a=JSON.parse(localStorage.getItem("NewsArray"))),a.push({title:e.title,url:e.url,index:t}),localStorage.setItem("NewsArray",JSON.stringify(a)),r}startCreate(e,t){if(0!==e){return` <div class=" card card_place_main index${t}">\n                <div class="main__text-box">\n\n                    <img src="${e.urlToImage}" alt="Новостное изображение"\n                        class="card__image card__image_main">\n                    <p class="card__text-date card__text-date_main">\n                        ${e.publishedAt}\n                    </p>\n                    <h2 class="card__text-title card__text-title_main">\n                        ${e.title}\n                    </h2>\n                    <p class="card__text-paragraph card__text-paragraph_main">\n                       ${e.description}.\n                    </p>\n                </div>\n                <p class="card__text-source card__text-source_main">\n                    ${e.source.name}\n                </p>\n\n            </div>`}}});a.i.news.value.length<4?(document.querySelector(".buttom_place_header").classList.remove("buttom_state_activ"),document.querySelector(".error__text").classList.add("error__text_disabled")):(document.querySelector(".buttom_place_header").classList.add("buttom_state_activ"),document.querySelector(".error__text").classList.remove("error__text_disabled")),a.i.news.value=localStorage.getItem("NewsName"),document.forms.Search.addEventListener("submit",(function(){event.preventDefault(),p.validation(a.i.news)&&(document.querySelector(".buttom_place_header").classList.remove("buttom_state_activ"),document.querySelector(".error__text").classList.add("error__text_disabled"),_=!0,localStorage.setItem("NUMBER_POSITION",0),document.querySelector(".preloader").classList.add("preloader_state_enabled"),localStorage.clear(),a.f.length=0,document.querySelector(".body").classList.add("body_preloader"),document.querySelector(".circle-preloader").classList.add("circle-preloader_state_disabled"),g.renderCard(document.querySelector(".cards"),document.querySelectorAll(".card")),m.getNews(a.d,a.i.news.value,l,c,s,i,u,d).then(e=>{document.querySelector(".body").classList.remove("body_preloader"),document.querySelector(".body").classList.remove("preloader_error-network"),document.querySelector(".circle-preloader").classList.remove("circle-preloader_state_disabled"),localStorage.setItem(a.i.news.value,JSON.stringify(e)),localStorage.setItem("NewsName",a.i.news.value),g.pushCard(a.i.news.value,0,y)}).catch(e=>{console.log(e),document.querySelector(".preloader").classList.remove("preloader_state_enabled")}))})),document.querySelector(".buttom_place_main").addEventListener("click",(function(e){JSON.parse(localStorage.getItem("NewsArray")).length+a.e>=JSON.parse(localStorage.getItem(localStorage.getItem("NewsName"))).articles.length&&(console.log(JSON.parse(localStorage.getItem(localStorage.getItem("NewsName"))).articles.length),document.querySelector(".buttom_place_main").classList.add("buttom_state_disabled")),_=!0;const t=JSON.parse(localStorage.getItem("NUMBER_POSITION"));g.pushCard(localStorage.getItem("NewsName"),t,y)})),a.i.addEventListener("input",(function(e){a.i.news.value.length>3&&(document.querySelector(".buttom_place_header").classList.remove("buttom_state_activ"),document.querySelector(".error__text").classList.add("error__text_disabled")),a.i.news.value.length<4&&document.querySelector(".error__text").classList.remove("error__text_disabled")})),a.i.addEventListener("click",(function(){_&&(a.i.news.value="",_=!1),document.querySelector(".buttom_place_header").classList.add("buttom_state_activ"),document.querySelector(".error__text").classList.remove("error__text_disabled")})),document.querySelector(".cards").addEventListener("click",e=>{JSON.parse(localStorage.getItem("NewsArray")).forEach(t=>{document.querySelector(".index"+t.index).contains(e.target)&&window.open(t.url)})}),JSON.parse(localStorage.getItem("NewsArray")).forEach(e=>{const t=JSON.parse(localStorage.getItem(localStorage.getItem("NewsName"))).articles[e.index];g.startPushCard(t,e.index,y)})},3:function(e,t,r){}});