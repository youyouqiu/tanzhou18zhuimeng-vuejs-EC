<!-- 购物车组件 -->

<template>
    <div>
        <wv-header :title="title" @headerClick="onHeaderClick" :fixed="false" background-color="rgb(16, 69, 138)">
            <div class="btn-back" slot="left">
                <i class="iconfont icon-back ico-left" @click="$router.push('/')">〈</i>
            </div>
            <div class="btn-menu" slot="right">
                <i class="iconfont icon-menu ico-left" @click="$router.push('/')">...</i>
            </div>
        </wv-header>
        <div class="shopArea mb">
            <p class="location clearFix" v-if="location">
                <span class="fl">送到地点: {{ location }}</span>
                <span class="fr">编辑地址</span>
            </p>
            <div class="shop " v-for="(item, index) in shopList" :key="index">
                <div class="shopShow">
                    <div class="pic ">
                        <img :src="item.imgUrl" width="100%" height="100%" alt="">
                    </div>
                    <div class="des ">{{ item.des }}</div>
                </div>

                <div class="buyNum ">
                    <p class=" buyfont">{{ item.symbol }}---{{ item.price }}</p>
                    <p class="addNum ">
                        <a href="javascript:;" class="reduce" @click="shopReduce(index)">-</a>
                        <a href="javascript:;" class="num" >{{ item.num }}</a>
                        <a href="javascript:;" class="add" @click="shopAdd(index)">+</a>
                    </p>
                    <a href="javascript:;" class="del" @click="del(index)">删除</a>
                </div>
            </div>
            <div class="totalPrice">
                <div class="total">
                    <p class="totalMoney">
                        <span class="font">总计:</span> <span>￥ {{totalPrice.sum}}</span>
                    </p>
                    <p class="preferential">
                        总金额￥{{totalPrice.sum}} 优惠￥0.00
                    </p>
                </div>
                <div class="goPayment">
                    <span class="font">去结算</span><span class="num">({{totalPrice.num}}件)</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // country 国家  province 省份 city 城市
    // var city = remote_ip_info['city'];
    import connect from '../../../static/js/connect.js'
    import shopTools from '../../../static/js/shopTools.js'

    export default {
        data (){
            return {
                title: "购物车结算",
                location:'',
                shopList:[]
            }
        },

        created (){
            //this.location = city;
            let shop = shopTools.getShop();
            let idArr = Object.keys(shop);
            let title = this.$route.query.title || 'likeYou';
            //console.log( title )
            idArr.forEach((item, index) => {
                let title = this.$route.query.title;
                let url = "https://route.showapi.com/852-1?showapi_appid=74726&showapi_sign=6a69ec9db6584ef8b3bdf810188b77a6";
                url += `&showapi_timestamp=${Date.now()}`;
                const that = this;
                this.$ajax.get(url)
                    .then((res)=>{
                        this.shopList.push(res.data)
                        this.shopList.forEach((item, index) => {
                            if(shop[item.id]){
                                // item.num = shop[item.id]
                                this.$set(item,'num',shop[item.id]);
                            }
                        })
                    })
            })
        },
        computed: {
            totalPrice (){ // 总价格
                let num = 0;
                let sum = 0;
                this.shopList.forEach((item)=>{
                    sum += item.num * item.price;
                    num += item.num;
                });
                return {
                    sum:sum,
                    num:num
                }
            }
        },
        methods: {
            onHeaderClick (){

            },
            shopReduce (i){ // 商品数量减少
                if(this.shopList[i].num <= 1) return
                this.shopList[i].num--;
                connet.$emit('addCart', -1);
                shopTools.addUpdate({
                    id:this.shopList[i].id,
                    num:-1
                })
            },
            shopAdd (i){ // 商品数量增加
                if(this.shopList[i].num >= 20) return
                this.shopList[i].num++;
                connet.$emit('addCart', 1);
                shopTools.addUpdate({
                    id:this.shopList[i].id,
                    num:1
                })
            },
            del (i){
                let shops = this.shopList[i];
                shopTools.delete(shops.id);
                connet.$emit('addCart', -shops.num);
                this.shopList.splice(i, 1);
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
    .shopArea{
        text-align: left;
        background: #fff;

        .location{
            font-size: 32/@rem;
            color: #ccc;
            padding: 10/@rem;
            padding: 20/@rem 55/@rem;
        }
        .shop{
            border-bottom: 1px solid #ddd;
            border-top: 1px solid #ddd;
            padding: 0 55/@rem;
            .shopShow{
                display: flex;
                justify-content: space-between;
                align-items: center;
                overflow: hidden;
                padding: 25/@rem 0;
                .pic{
                    width: 200/@rem;
                    height: 200/@rem;
                }
                .des{
                    width: 400/@rem;
                    font-size: 35/@rem;
                }
            }
            .buyNum{
                border-top: 1px solid #ddd;
                border-left: none;
                border-right: none;
                padding: 20/@rem 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
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
                .del{
                    color: skyblue;
                    font-size: 40/@rem;
                }
            }
        }
        .totalPrice{
            height: 100/@rem;
            text-align: center;
            display: flex;
            justify-content: space-between;
            margin-top: 20/@rem;
            background: rgba(255,255,255,0.7);
            box-shadow: 0 -1px 2px #d7d7d7;
            /*align-items: center;*/
            .all{
                color: #999;
                font-size: 20/@rem;
                i{
                    width: 40/@rem;
                    height: 40/@rem;
                    border-radius: 50%;
                    background: #e93b3d;
                }
                i::after{
                    content: '';
                }
            }
            .total{
                text-align: left;
                text-indent: 1em;
                p{
                    height: 50%;
                    font-size: 32/@rem ;
                    line-height: 50/@rem;
                    color: #999;
                }
                .totalMoney{
                    color: #e4393c;
                    font-weight: bold;
                    .font{
                        color: #333;
                    }
                }
                .preferential{
                    font-size: 18/@rem;
                }
            }
            .goPayment{
                width: 220/@rem;
                background: #e4393c;
                color: #fff;
                span{
                    vertical-align: middle;
                }
                .font{
                    font-size: 32/@rem;
                }
                .num{
                    font-size: 23/@rem;
                }

            }
        }
    }
</style>

