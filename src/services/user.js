import axios from 'axios'

const apiUrl = 'https://api.github.com'
// const auth = '?client_id=' + process.env.TESTE + '&client_secret=' + process.env.REACT_APP_GITHUB_SECRET
const auth = '?client_id=c25c2732505058050ffa&client_secret=14d68b85702070ee107f4ec1894c9f5c0a4f3bbb'

export default {
  getUser (query, successFn, errorFn) {
    return axios.get(apiUrl + '/users/' + encodeURIComponent(query) + auth)
      .then(response => successFn(response.data))
      .catch(error => { if (typeof errorFn === 'function') errorFn(error) })
  },
  getUserRepos (query, successFn, errorFn) {
    return axios.get(apiUrl + '/users/' + query + '/repos' + auth)
    .then(response => successFn(response.data))
    .catch(error => { if (typeof errorFn === 'function') errorFn(error) })
  },
  getUserRepoLastIssue (query, successFn, errorFn) {
    return axios.get(apiUrl + '/repos/' + query + '/issues' + auth)
    .then(response => successFn(response.data.length && response.data[0]))
    .catch(error => { if (typeof errorFn === 'function') errorFn(error) })
  }
}
