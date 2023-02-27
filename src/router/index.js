// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {}, () => {});
    }
}

VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => {}, () => {});
    }
}

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: '/home',
            component: Home,
            name: 'home',
            meta: {
                showFooter: true
            }
        },
        {
            // path: '/search/:keyword?'  加上占位，表示需要指定params参数，加上问号表示可传可不传，也不能传空串
            path: '/search',
            component: Search,
            name: 'search',
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            component: Login,
            name: 'login'
        },
        {
            path: '/register',
            component: Register,
            name: 'register'

        },
        // 设置重定向到首页
        {
            path: '/*',
            redirect: '/home'
        }
    ]
})