// 配置文件

// 导入模块
import Vue from 'vue';
import App from './App';
import router from './router/router.js';
import Vuex from "vuex"; // 数据管理

// 注册组件
Vue.use(Vuex);

// 实例化Vuex
let store = new Vuex.Store({
    state: {
        num: 0
    },
    mutations: {
        addCartCount (state){
            state.num++;
        },
        reduceCartCount (state){
            state.num--;
        }
    }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

