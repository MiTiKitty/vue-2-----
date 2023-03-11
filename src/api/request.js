// 对于axios进行二次封装
import axios from "axios";
// 引入进度条
import nProgress from "nprogress";
// 引入进度条的样式
import 'nprogress/nprogress.css'

// 1、利用axios对象的create方法，创建一个axios实例
const requests = axios.create({
    // 发请求时，路径上都带上/api
    baseURL: '/api',
    // 请求超时的时间
    timeout: 5000,
})

// 请求拦截器：在发送请求之前，请求拦截器都可以检测到，可以在请求发出去之前做一些事情

requests.interceptors.request.use((config) => {
    // config 配置对象，包含请求头header
    // 进度条开始
    nProgress.start()
    return config;
})

requests.interceptors.response.use((rep) => {
    // 成功的响应回调函数
    // 进度条结束
    nProgress.done()
    return rep.data;
}, (err) => {
    // 响应失败的回调函数
    // 进度条结束
    nProgress.done()
    return Promise.reject(new Error('fail' + err))
})

// 对外暴露
export default requests;