import axios from 'axios'

export function callToRestApi(user) {

    const url = 'http://localhost:8080/spring_curd_ope/rest/validateUser'
    axios.get(url)
        .then(res => res)
        .catch(error => console.info('error'))
}

export const STATUS_OK = '200'