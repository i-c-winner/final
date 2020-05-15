import {
    weekDate
} from "../constans/constans";

import {
    INPUT_FORMA_MARKER
} from '../constans/constans.js'

export default class NewsApi {


    getNews(path, request,
        TODAY_DAY, TODAY_MONTH, YEAR_TODAY, WEEK_DAY, WEEK_MONTH, WEEK_YEAR) {
        return fetch(path + request + '&from=' + WEEK_YEAR + '-' + WEEK_MONTH +
                '-' + WEEK_DAY + '&to=' + YEAR_TODAY + '-' + TODAY_MONTH +
                '-' + TODAY_DAY)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(err)
                }
            })
            .catch((err) => {
                return Promise.reject(err)
            })
    }

}