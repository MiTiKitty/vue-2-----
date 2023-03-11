import Vue from "vue";
import Vuex from 'vuex';
import home from './home';
import search from './search';

Vue.use(Vuex)

// // state：仓库存储数据的地方
// const state = {}

// // mutations：修改state的唯一手段
// const mutations = {}

// // actions：处理action，可以书写业务逻辑，也可以异步处理
// const actions = {}

// // getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
// const getters = {}

export default new Vuex.Store({
    modules: {
        home,
        search
    }
})