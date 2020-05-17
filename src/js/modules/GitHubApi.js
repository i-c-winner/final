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
                    return Promise.reject(err)
                }
            })
            .catch((err) => {
                return Promise.reject(err)
            })
    }

    setGitInfo() {

    }
}