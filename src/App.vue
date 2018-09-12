<!-- 公共入口视图 -->
<!-- 首页样式与shop页样式有冲突 -->

<!-- html部分 -->
<template>
    <div id="app">
        <Header></Header>
        <div class="Header-box">占位盒子</div>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<!-- js部分 -->
<script>
    // 导入购物监听
    import connect from '../static/js/connect.js'
    import shopTools from '../static/js/shopTools.js'

    export default {
        name: 'App',
        data(){
            return {
                title: ""
            }
        },
        created(){
            // 页面适配方法（与首页ui框架样式有冲突）
            // remChange();
            // window.addEventListener('resize', remChange);
            // function remChange(){
            //     let html = document.getElementsByTagName('html')[0];
            //     let width = html.getBoundingClientRect().width;
            //     if(width >= 750){
            //         width = 750;
            //     }
            //     html.style.fontSize = width / 10 + 'px';
            // }

            // 请求后台接口数据
            let url = "https://route.showapi.com/852-1?showapi_appid=74726&showapi_sign=6a69ec9db6584ef8b3bdf810188b77a6";
            url += `&showapi_timestamp=${Date.now()}`;
            const that = this;
            this.$ajax.get(url)
                .then(res => {
                    that.title = res.data.showapi_res_body.list[0].list[0].name;
                })
        }
    }
</script>

<!-- css部分 -->
<style scoped>
    .Header-box{
        height: 40px;
    }
</style>

