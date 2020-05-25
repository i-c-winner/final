export default class GitHubApi {
    constructor(path) {
        this.path = path;
    }
    getGitInfo() {
        return fetch(this.path)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log(response)
                    // console.log(response, 'ошибка')
                    return Promise.reject(err)
                }
            })
            .catch((err) => {
                console.log('privet')
                console.log(err, 'obi')
                return Promise.reject(err)
            })
    }

    setGitInfo() {

    }
}