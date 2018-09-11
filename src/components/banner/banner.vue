<!-- 首页轮播图组件 -->

<template>
    <div class="banner">
        <wv-swipe :height="130" :autoplay="4000">
            <wv-swipe-item style="background-color: #f44336">
                <img :src="bannerImg" :alt="bannerImg" width=100% height=100%>
            </wv-swipe-item>
            <wv-swipe-item style="background-color: #ffc107">
                <img :src="bannerImg" :alt="bannerImg" width=100% height=100%>
            </wv-swipe-item>
            <wv-swipe-item style="background-color: #03a9f4">
                <img :src="bannerImg" :alt="bannerImg" width=100% height=100%>
            </wv-swipe-item>
        </wv-swipe>
    </div>
</template>

<script>
    export default {
        name: 'Banner',
        data () {
            return {
                bannerImg: ""
            }
        },
        created(){
            // 请求后台轮播图数据
            let url = "https://route.showapi.com/852-1?showapi_appid=74726&showapi_sign=6a69ec9db6584ef8b3bdf810188b77a6";
            url += `&showapi_timestamp=${Date.now()}`;
            const that = this;
            this.$ajax.get(url)
                .then(res => {
                    that.bannerImg = res.data.showapi_res_body.list[0];
                })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

