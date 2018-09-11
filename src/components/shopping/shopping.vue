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

    </div>
</template>

<script>
    export default {
        name: 'Shop',
        data () {
            return {
                title: "潭州网上商城"
            }
        },
        methods: {
            onHeaderClick (){

            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ico-left{
        font-style: normal;
        font-size: 17px;
    }
</style>

