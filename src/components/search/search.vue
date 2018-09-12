<!-- 首页搜索框组件 -->

<template>
    <div class="search">
        <wv-search-bar 
            :autofocus="false"
            v-model="value" 
            :result="filterResult"
            @input="oninput"
            @search="onSearch"
            @cancel="onCancel"
            ref="aaa"
        />
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data () {
            return {
                value: '',
                defaultResult: []
            }
        },

        computed: {
            filterResult () {
                return this.defaultResult
            }
        },

        methods: {
            oninput (){
                let textipt = this.value;
                console.log(textipt);
            },
            onSearch (value) {
                // 自定义搜索处理
                console.log(value)
            },

            onCancel () {
                // 自定义取消事件处理
            },
        },

        created(){
            // 请求后台搜索导航数据
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
<style scoped>

</style>

