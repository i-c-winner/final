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
                document.querySelector('.preloader').classList.remove('preloader_state_enabled');
                document.querySelector('.circle-preloader').classList.remove('circle-preloader_state_disabled');
                document.querySelector('.body').classList.remove('body_preloader');
                document.querySelector('.preloader__error').classList.remove('preloader_error-network');
                return Promise.reject(err)
            })
    }

}