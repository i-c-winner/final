export default class NewsApi {


    getNews(path) {
        console.log(path)
        return fetch(path)
            .then(function (response) {
                if (response.ok) {
                    console.log(55)
                    return response.json();
                } else {
                    return Promise.reject(err)
                }
            })
            .catch((err) => {
                console.log(565)
                return Promise.reject(err)
            })
    }

}