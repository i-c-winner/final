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
                document.querySelector('.preloader').classList.remove('preloader_state_enabled');
                document.querySelector('.circle-preloader').classList.remove('circle-preloader_state_disabled');
                document.querySelector('.body').classList.remove('body_preloader');
                document.querySelector('.preloader__error').classList.remove('preloader_error-network');
                return Promise.reject(err)
            })
    }

}