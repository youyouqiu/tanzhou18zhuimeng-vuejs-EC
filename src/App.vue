<!-- 公共入口视图 -->

<!-- html部分 -->
<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<!-- js部分 -->
<script>
    export default {
        name: 'App'
    }
</script>

<!-- css部分 -->
<style scoped>
    
</style>

