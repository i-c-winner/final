import {
    INPUT_FORMA
} from '../constans/constans.js'

export default class NEWSCard {


    create(data) {
        const template = ` <div class=" card card_place_main">
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
};