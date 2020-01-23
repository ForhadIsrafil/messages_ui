import axios from 'axios';
// import { baseURL } from '../Constant';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

class BaseAPI {
    constructor() {
        this.requestHeaders = {
            'X-Requested-With': "XMLHttpRequest"
        }
    }



    callAPI = (url, method = "get", payload = {}, headers = {}) => {
        let apiUrl = url;
        if (method === "get") {
            let promise = new Promise((resolve, reject) => {
                axios.get(apiUrl, headers).then((res) => resolve(res.data)).catch(reject);
            });
            return promise;
        }
        else if (method === "post"){
            let promise = new Promise((resolve, reject) => {
                axios.post(apiUrl, payload, headers).then((res) => resolve(res)).catch(reject);
            });
            return promise;
        }

        else if (method === "put"){
            let promise = new Promise((resolve, reject) => {
                axios.put(apiUrl, payload, headers).then((res) => resolve(res)).catch(reject);
            });
            return promise;
        }
    }

}

export default BaseAPI;
