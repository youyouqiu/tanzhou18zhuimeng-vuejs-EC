<!-- 商品详情页组件 -->

<template>
    <div class="mb">
        <wv-header :title="title" @headerClick="onHeaderClick" :fixed="false" background-color="rgb(16, 69, 138)">
            <div class="btn-back" slot="left">
                <i class="iconfont icon-back ico-left" @click="$router.push('/')">〈</i>
            </div>
            <div class="btn-menu" slot="right">
                <i class="iconfont icon-menu ico-left" @click="$router.push('/')">...</i>
            </div>
        </wv-header>
        <div class="shopdedatils" v-if="newsDetails">
            <img :src="newsDetails.imgUrl" width="80%">
            <h3 v-text="newsDetails.des"></h3>
            <p class="money">
                <span class="symbol" v-text="newsDetails.symbol"></span>
                <span class="price" v-text="newsDetails.price"></span>
            </p>
            <p class="courier">快递：包邮<span class="fr" v-text="newsDetails.alreadyPaid"></span></p>
            <div class="buyNum clearFix">
                <p class="fl buyfont">购买数量</p>
                <p class="addNum fr">
                    <a href="javascript:;" class="reduce" @click="shopReduce">-</a>
                    <a href="javascript:;" class="num">{{ num }}</a>
                    <a href="javascript:;" class="add" @click="shopAdd">+</a>
                </p>
            </div>
            <div class="buy">
                <a href="javascript:;" class="addCart" @click="addCart">加入购物车</a>
                <router-link :to="{name:'shopcart', query: {title: 'likeYou'}}" class="nowBuy" @click="nowBuy">立即购买</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    // 导入商品购买局部js 
    import connect from '../../../static/js/connect.js'
    import shopTools from '../../../static/js/shopTools.js'
    
    export default {
        data (){
            return {
                title: "商品详情",
                newsDetails: {},
                num: 0,
                index: 0,
                shoplist: [
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤01", imgUrl: "http://static.oeofo.com/201610/27/131242571000812.png", symbol: "$", price: "888", alreadyPaid: "00001"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤02", imgUrl: "http://photo.l99.com/bigger/03/1391666159849_46ct5c.jpg", symbol: "$", price: "888", alreadyPaid: "00002"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤03", imgUrl: "http://photo.l99.com/bigger/01/1393226325939_t67rum.jpg", symbol: "$", price: "888", alreadyPaid: "00003"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤04", imgUrl: "http://photo.l99.com/bigger/33/1397706668825_w3xi28.jpg", symbol: "$", price: "888", alreadyPaid: "00004"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤05", imgUrl: "http://sc.jb51.net/uploads/allimg/150702/14-150F21423024Z.jpg", symbol: "$", price: "888", alreadyPaid: "00005"},
                    {des: "【今日上新】日本-船新脱下来的热气腾腾花内裤06", imgUrl: "http://photo.l99.com/bigger/00/1385016523244_3my8fh.jpg", symbol: "$", price: "888", alreadyPaid: "00006"}
                ]  
            }
        },
        computed:{
            cartCount (){
                //return this.$store.state.num
            }
        },
        created (){
            let index = this.$route.query.id;
            if(index){
                let title = this.$route.query.title;
                let url = "https://route.showapi.com/852-1?showapi_appid=74726&showapi_sign=6a69ec9db6584ef8b3bdf810188b77a6";
                url += `&showapi_timestamp=${Date.now()}`;
                const that = this;
                this.$ajax.get(url)
                    .then((res)=>{
                        res.data['id'] = index; // 根据id 把商品加入 到购物车，
                        that.newsDetails = res.data;
                        console.log("shopping详情页：雅蠛蝶，上面的报错提示是因为ajax没有数据")
                    })
            }
        },
        methods:{
            onHeaderClick (){

            },
            addCart (){ // 加入购物车
                connect.$emit('addCart', this.num);
                shopTools.addUpdate({
                    id:this.newsDetails.id,
                    num:this.num
                })
            },
            nowBuy (){ // 立即购买

            },
            shopReduce (){ // 商品数量减少
                //this.$store.commit('reduceCartCount')

                if(this.num<=0) return
                this.num--
            },
            shopAdd (){ // 商品数量增加
                //this.$store.commit('addCartCount')
                //this.$store.commit()
                if( this.num >= 20 ) return
                this.num++
            }
        }
    }
</script>

<style scoped lang="less">
    .ico-left{
        font-style: normal;
        font-size: 17px;
    }
    @rem:750/10rem;
    .mb{
        margin-bottom: 130/@rem;
    }
    .shopdedatils{
        padding: 22/@rem;
        position: relative;
        text-align: left;
        background: white;
        img{
            display: block;
            margin: auto;
        }
        h3{
            font-size: 33/@rem;
        }
        .money{
            color: red;
            .symbol{
                font-size: 22/@rem;
            }
            .price{
                font-size: 32/@rem;
            }
        }
        .courier{
            font-size: 25/@rem;
            color: #999;
        }
        .buyNum{
            border: 1px solid #e7e7e7;
            border-left: none;
            border-right: none;

            padding: 20/@rem;
            .buyfont{
                font-size: 40/@rem;
            }
            .addNum{
                font-size: 40/@rem;
                a{
                    width: 60/@rem;
                    height: 60/@rem;
                    background: #f1f1f1;
                    display: inline-block;
                    color: #878787;
                    text-align: center;
                }
                a:active{
                    background: #ddd;
                }
            }
        }
        .buy{
            display: flex;
            height: 96/@rem;
            text-align: center;
            line-height: 96/@rem;
            a{
                flex: 1;
                color: white;
                font-size: 31/@rem;
            }
            .addCart{
                background: #ff9402;
            }
            .nowBuy{
                background: #ff5000;
            }
        }
    }
</style>
