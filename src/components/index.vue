<!-- 首页组件 -->

<template>
    <div class="index">
        <Banner></Banner>
        <Search></Search>
        <Content></Content>
    </div>
</template>

<script>
    // 导入局部组件
    import Banner from "./banner/banner"
    import Content from "./content/content-index"
    import Search from "./search/search"

    export default {
        name: 'Index',
        data () {
            return {
                
            }
        },
        components: {
            Banner,
            Content,
            Search
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>

