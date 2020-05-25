import {
    INPUT_FORMA,
    URL_ARRAY,
    URL_NUMBER,
<<<<<<< HEAD
    URL_INDEX
=======
    urlIndex,
>>>>>>> javascript
} from '../constans/constans.js'

export default class NEWSCard {


<<<<<<< HEAD
    create(data) {
        const template = ` <div class=" card card_place_main ">
=======
    create(data, position) {
        const template = ` <div class=" card card_place_main index${position}">
>>>>>>> javascript
                <div class="main__text-box">

                    <img src="${data.urlToImage}" alt="Новостное изображение"
                        class="card__image card__image_main">
                    <p class="card__text-date card__text-date_main">
                        ${data.publishedAt}
                    </p>
                    <h2 class="card__text-title card__text-title_main ">
                        ${data.title}
                    </h2>
                    <p class="card__text-paragraph card__text-paragraph_main">
                       ${data.description}.
                    </p>
                </div>
                <p class="card__text-source card__text-source_main">
                    ${data.source.name}
                </p>

            </div>`
        URL_ARRAY.push({
<<<<<<< HEAD
            URL_INDEX: data.source.url,
            "index": URL_INDEX
        });
        URL_ARRAY["index"] = URL_ARRAY["index"]++;
        return template;
=======
            title: data.title,
            url: data.url,
            index: position,
        });
        localStorage.setItem('NewsArray', JSON.stringify(URL_ARRAY));
        return template;
    }
    startCreate(data, position) {
        console.log(data, position)
        if (data !== 0) {
            // console.log(data, 'ошибка')

            const template = ` <div class=" card card_place_main index${position}">
                <div class="main__text-box">

                    <img src="${data.urlToImage}" alt="Новостное изображение"
                        class="card__image card__image_main">
                    <p class="card__text-date card__text-date_main">
                        ${data.publishedAt}
                    </p>
                    <h2 class="card__text-title card__text-title_main">
                        ${data.title}
                    </h2>
                    <p class="card__text-paragraph card__text-paragraph_main">
                       ${data.description}.
                    </p>
                </div>
                <p class="card__text-source card__text-source_main">
                    ${data.source.name}
                </p>

            </div>`
            return template;
        }

>>>>>>> javascript
    }


};