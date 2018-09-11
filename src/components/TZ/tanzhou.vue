<!-- 子页面潭州教育组件 -->

<template>
    <div class="tanzhou">
        <wv-header :title="title" @headerClick="onHeaderClick" :fixed="false" background-color="rgb(16, 69, 138)">
            <div class="btn-back" slot="left">
                <i class="iconfont icon-back ico-left" @click="$router.push('/')">〈</i>
            </div>
            <div class="btn-menu" slot="right">
                <i class="iconfont icon-menu ico-left" @click="$router.push('/')">...</i>
            </div>
        </wv-header>
        <div class="tzImg">
            <img src="../../../static/images/TZlogo.png" alt="潭州logo">
        </div>
        <wv-button type="primary" @click="see('https://www.shiguangkey.com/')">页面主要操作 Normal</wv-button>
        <wv-button type="warn" disabled>页面主要操作 Normal</wv-button>
    </div>
</template>

<script>
    export default {
        name: 'TZ',
        data () {
            return {
                title: "潭州教育首页"
            }
        },
        methods: {
            onHeaderClick (){

            },
            see (e){
                window.location.href = e;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tzImg{
        width:130px;
        height:34px;
        margin:38px auto;
    }
    .ico-left{
        font-style: normal;
        font-size: 17px;
    }
</style>

