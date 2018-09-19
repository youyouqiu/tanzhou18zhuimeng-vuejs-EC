<!-- 首页轮播图组件 -->

<template>
    <div class="banner">
        <wv-swipe :height="130" :autoplay="4000">
            <wv-swipe-item style="background-color: #f44336">
                <img :src="bannerImg[0].src1" :alt="bannerImg[0].title1" width=100% height=100%>
            </wv-swipe-item>
            <wv-swipe-item style="background-color: #ffc107">
                <img :src="bannerImg[1].src2" :alt="bannerImg[1].title2" width=100% height=100%>
            </wv-swipe-item>
            <wv-swipe-item style="background-color: #03a9f4">
                <img :src="bannerImg[2].src3" :alt="bannerImg[2].title3" width=100% height=100%>
            </wv-swipe-item>
        </wv-swipe>
    </div>
</template>

<script>
    export default {
        name: 'Banner',
        data () {
            return {
                bannerImg: [
                    {src1: "http://s7.sinaimg.cn/mw690/006d98n9gy6VjYd2oWaf6", title1: "潭州教育"},
                    {src2: "http://n.sinaimg.cn/sinacn02/766/w1000h566/20180419/c405-fzihnep6881871.png", title2: "潭州教育"},
                    {src3: "http://s7.sinaimg.cn/mw690/00688u6Pzy74cmAK9Rs26&690", title3: "潭州教育"}
                ]
            }
        },
        created(){
            // 请求后台轮播图数据
            let url = "https://route.showapi.com/852-1?showapi_appid=74726&showapi_sign=6a69ec9db6584ef8b3bdf810188b77a6";
            url += `&showapi_timestamp=${Date.now()}`;
            const that = this;
            this.$ajax.get(url)
                .then(res => {
                    console.log("banner页：雅蠛蝶，上面的报错提示是因为ajax没有数据");
                })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

