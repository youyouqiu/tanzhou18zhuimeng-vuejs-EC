// 配置文件

// 导入模块
import Vue from 'vue';
import App from './App';
import router from './router/router.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})

