<!-- 子页面潭州商城组件 -->

<template>
    <div class="shopping">
        <wv-header :title="title" @headerClick="onHeaderClick" :fixed="false" background-color="rgb(16, 69, 138)">
            <div class="btn-back" slot="left">
                <i class="iconfont icon-back ico-left" @click="$router.push('/')">〈</i>
            </div>
            <div class="btn-menu" slot="right">
                <i class="iconfont icon-menu ico-left" @click="$router.push('/')">...</i>
            </div>
        </wv-header>
        <section class="likeYou" >
            <ul id="likeYouList" class="aui-refresh-content">
                <li v-for="(item, index) in shopList" :key="index">
                    <router-link :to="{name:'Shop.Shopdetails', query: {id: (index + 1), title:'likeYou'}}" :title="item.des">
                        <div class="pic"><img width="100%" height="100%" :src="item.imgUrl" v-lazy="item.imgUrl"></div>
                        <p class="des" v-text="item.des"></p>
                        <div class="shopPrice clearFix">
                            <div class="left fl"><span class="symbol" v-text="item.symbol"></span><span class="price" v-text="item.price"></span></div>
                            <div class="alreadyPaid fr" v-text="item.alreadyPaid"></div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    // 局部导入aui框架(与首页ui框架样式有冲突)
    import '../../../static/aui/css/aui.2.0.css'
    import '../../../static/aui/css/aui-pull-refresh.css'
    import '../../../static/aui/script/aui-pull-refresh'

    export default {
        name: 'Shop',
        data () {
            return {
                title: "潭州网上商城",
                shopList: [
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤01", imgUrl: "http://static.oeofo.com/201610/27/131242571000812.png", symbol: "$", price: "888", alreadyPaid: "00001"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤02", imgUrl: "http://photo.l99.com/bigger/03/1391666159849_46ct5c.jpg", symbol: "$", price: "888", alreadyPaid: "00002"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤03", imgUrl: "http://photo.l99.com/bigger/01/1393226325939_t67rum.jpg", symbol: "$", price: "888", alreadyPaid: "00003"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤04", imgUrl: "http://photo.l99.com/bigger/33/1397706668825_w3xi28.jpg", symbol: "$", price: "888", alreadyPaid: "00004"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤05", imgUrl: "http://sc.jb51.net/uploads/allimg/150702/14-150F21423024Z.jpg", symbol: "$", price: "888", alreadyPaid: "00005"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤06", imgUrl: "http://photo.l99.com/bigger/00/1385016523244_3my8fh.jpg", symbol: "$", price: "888", alreadyPaid: "00006"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤01", imgUrl: "http://static.oeofo.com/201610/27/131242571000812.png", symbol: "$", price: "888", alreadyPaid: "00001"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤02", imgUrl: "http://photo.l99.com/bigger/03/1391666159849_46ct5c.jpg", symbol: "$", price: "888", alreadyPaid: "00002"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤03", imgUrl: "http://photo.l99.com/bigger/01/1393226325939_t67rum.jpg", symbol: "$", price: "888", alreadyPaid: "00003"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤04", imgUrl: "http://photo.l99.com/bigger/33/1397706668825_w3xi28.jpg", symbol: "$", price: "888", alreadyPaid: "00004"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤05", imgUrl: "http://sc.jb51.net/uploads/allimg/150702/14-150F21423024Z.jpg", symbol: "895", price: "888", alreadyPaid: "00005"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤06", imgUrl: "http://photo.l99.com/bigger/00/1385016523244_3my8fh.jpg", symbol: "$", price: "888", alreadyPaid: "00006"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤01", imgUrl: "http://static.oeofo.com/201610/27/131242571000812.png", symbol: "$", price: "888", alreadyPaid: "00001"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤02", imgUrl: "http://photo.l99.com/bigger/03/1391666159849_46ct5c.jpg", symbol: "$", price: "888", alreadyPaid: "00002"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤03", imgUrl: "http://photo.l99.com/bigger/01/1393226325939_t67rum.jpg", symbol: "$", price: "888", alreadyPaid: "00003"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤04", imgUrl: "http://photo.l99.com/bigger/33/1397706668825_w3xi28.jpg", symbol: "$", price: "888", alreadyPaid: "00004"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤05", imgUrl: "http://sc.jb51.net/uploads/allimg/150702/14-150F21423024Z.jpg", symbol: "$", price: "888", alreadyPaid: "00005"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤06", imgUrl: "http://photo.l99.com/bigger/00/1385016523244_3my8fh.jpg", symbol: "$", price: "888", alreadyPaid: "00006"},
                ]
            }
        },
        methods: {
            onHeaderClick (){

            },
        },
        created (){
            // 页面适配方法（与首页ui框架样式有冲突）
            remChange();
            window.addEventListener('resize', remChange);
            function remChange(){
                let html = document.getElementsByTagName('html')[0];
                let width = html.getBoundingClientRect().width;
                if(width >= 750){
                    width = 750;
                }
                html.style.fontSize = width / 10 + 'px';
            }

            // 请求后台商品详情数据
            let url = "https://route.showapi.com/852-1?showapi_appid=74726&showapi_sign=6a69ec9db6584ef8b3bdf810188b77a6";
            url += `&showapi_timestamp=${Date.now()}`;
            const that = this;
            this.$ajax.get(url)
                .then(res => {
                    console.log(res.data.showapi_res_body.list[0]);
                })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .ico-left{
        font-style: normal;
        font-size: 17px;
    }
    .fl{
        folat: left;
    }
    .fr{
        float: right;
    }
    @rem:750/10rem;
    .shopping{
        margin-bottom: 130/@rem;
    }
    /*likeYou*/
    .likeYou{
            overflow: hidden;
            position: relative;
            padding-top: 30/@rem;
            background: #eee;
        ul{
            display: -webkit-flex;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        ul li{
            width: 370/@rem;
            height: 528/@rem;
            background: white;
            font-size: 27/@rem !important;
            overflow: hidden;
            margin-bottom: 10/@rem;
        }
        ul li a{
            display: block;
        }
        ul li .pic{
            height: 369/@rem;
        }

        ul li .des{
            font-size: 27/@rem !important;
            padding:0 20/@rem;
            margin: 20/@rem 0;
            height: 70/@rem;
            overflow: hidden;
            text-overflow: ellipsis;
            max-height: 64/@rem;
            -webkit-line-clamp: 2;
            word-break: break-all;
            line-height: 35/@rem;
            color: rgb(51, 51, 51);
        }

        ul li .shopPrice{
            padding: 14/@rem;
            padding-bottom: 0;
        }
        ul li .left{
            color: #ff5000;
            line-height: 0;
        }
        ul li .left span{
            font-weight:bold;
            vertical-align: bottom;
        }
        ul li .symbol{
            font-size: 38/@rem;
        }
        ul li .alreadyPaid{
            color: rgb(153, 153, 153);
            line-height: 0;
        }
    }
</style>

