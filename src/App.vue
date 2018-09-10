<!-- 公共模块 -->

<!-- html部分 -->
<template>
    <div id="app">
        <img src="./assets/logo.png">
        <router-view/>
    </div>
</template>

<!-- js部分 -->
<script>
    export default {
    name: 'App'
    }
</script>

<!-- css部分 -->
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

