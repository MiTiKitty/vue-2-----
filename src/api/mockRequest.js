import axios from "axios";
import nProgress from "nprogress";
import 'nprogress/nprogress.css'

const mockRequests = axios.create({
    baseURL: '/mock',
    timeout: 5000,
})

mockRequests.interceptors.request.use((config) => {
    nProgress.start()
    return config;
})

mockRequests.interceptors.response.use((rep) => {
    nProgress.done()
    return rep.data;
}, (err) => {
    nProgress.done()
    return Promise.reject(new Error('fail' + err))
})

export default mockRequests;