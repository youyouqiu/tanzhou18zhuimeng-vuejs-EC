// 路由配置文件

// 导入模块
import Vue from 'vue';
import Router from 'vue-router'; // 路由
import Index from '@/components/index'; // 首页
import Axios from "axios"; // 数据请求
import VueLazyLoad from "vue-lazyload"; // 懒加载
import MintUI from "mint-ui"; // mint-ui
import 'mint-ui/lib/style.css'; // mint-ui样式表
import WeVue from "we-vue"; // we-vue
import 'we-vue/lib/style.css' // we-vue样式表
import Header from "../components/common/header"; // 公共头部
import Footer from "../components/common/footer" // 公共底部
import TZ from "../components/TZ/tanzhou" // 潭州官网
import Teacher from "../components/teacher/teacher" // 教师页面
import Shop from "../components/shopping/shopping" // 商城页面
import Shopdetails from "../components/shopping/shopdetails" // 商城页面
import Shopcart from "../components/shopping/shopcart" // 商城页面

// 注册公共全局组件
Vue.component("Header", Header);
Vue.component("Footer", Footer);

// 注册组件
Vue.use(MintUI);
Vue.use(WeVue);
Vue.use(Router);

// 懒加载配置
Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1
});

Vue.prototype.$ajax = Axios;
Vue.prototype.dataURl = (file, title, id) => {
    id = (id === undefined) ? "" : id;
    return file + "?title=" + title + id;
} // 封装路由拼接方法

// 后台数据接口
Axios.defaults.baseURL = "";

// 路由定义
export default new Router({
    routes: [
        {
            path: "/",
            redirect: {name: "Index"}
        },
        {
            path: '/ ',
            name: 'Index',
            component: Index
        },
        {
            path: "/tanzhou",
            name: "TZ",
            component: TZ
        },
        {
            path: "/teacher",
            name: "Teacher",
            component: Teacher
        },
        {
            path: "/shopping",
            name: "Shop",
            component: Shop
        },
        {
            name: 'Shop.Shopdetails',
            path: '/shop/shopdetails',
            component: Shopdetails
        },
        {
            name: 'Shop.Shopcart',
            path: '/shop/shopcart',
            component: Shopcart
        },
    ]
})

