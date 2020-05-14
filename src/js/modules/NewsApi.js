import {
    weekDate
} from "../constans/constans";

export default class NewsApi {


    getNews(path, request,
        todayDay, todayMonth, yearToday, weekDay, weekMonth, weekYear) {
        return fetch(path + request + '&from=' + weekYear + '-' + weekMonth +
                '-' + weekDay + '&to=' + yearToday + '-' + todayMonth +
                '-' + todayDay)
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