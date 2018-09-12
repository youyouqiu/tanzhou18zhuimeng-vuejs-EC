<!-- 潭州教师介绍页面组件 -->

<template>
    <div class="teacher">
        <wv-header :title="title" @headerClick="onHeaderClick" :fixed="false" background-color="rgb(16, 69, 138)">
            <div class="btn-back" slot="left">
                <i class="iconfont icon-back ico-left" @click="$router.push('/')">〈</i>
            </div>
            <div class="btn-menu" slot="right">
                <i class="iconfont icon-menu ico-left" @click="$router.push('/')">...</i>
            </div>
        </wv-header>
        <wv-tabs swipe-threshold:4 @click="tabActive">
            <wv-tab v-for="(value, index) in tablesTeacher" :key="index" :title="value">
                {{ index + 1 }}---{{ value }}
            </wv-tab>
            <ul class="tabCon showon">
                <li v-for="(value, index) in manTeacher" :key="index">{{ value.name }}--{{ value.sex }}--{{ value.age }}</li>
            </ul>
            <ul class="tabCon show">
                <li v-for="(value, index) in womanTeacher" :key="index">{{ value.name }}--{{ value.sex }}--{{ value.age }}</li>
            </ul>
            <ul class="tabCon show">
                <li v-for="(value, index) in renyaoTeacher" :key="index">{{ value.name }}--{{ value.sex }}--{{ value.age }}</li>
            </ul>
            <ul class="tabCon show">
                <li v-for="(value, index) in publicityTeacher" :key="index">{{ value.name }}--{{ value.sex }}--{{ value.age }}</li>
            </ul>
            <ul class="tabCon show">
                <li v-for="(value, index) in xinaiTeacher" :key="index">{{ value.name }}--{{ value.sex }}--{{ value.age }}</li>
            </ul>
            <ul class="tabCon show">
                <li v-for="(value, index) in serviceTeacher" :key="index">{{ value.name }}--{{ value.sex }}--{{ value.age }}</li>
            </ul>
        </wv-tabs>
    </div>
</template>

<script>
    export default {
        name: 'Teacher',
        data () {
            return {
                title: "潭州金牌教师",
                tablesTeacher: [
                    "男老师",
                    "女老师",
                    "人妖老师",
                    "公课老师",
                    "心艾联盟",
                    "客服老师"
                ], 
                manTeacher: [
                    {name: "假装接口数据", sex: "男", age: 18},
                    {name: "风屿老师", sex: "男", age: 18},
                    {name: "风屿老师", sex: "男", age: 18}
                ],
                womanTeacher: [
                    {name: "假装接口数据", sex: "女", age: 18},
                    {name: "朱雀老师", sex: "女", age: 18},
                    {name: "朱雀老师", sex: "女", age: 18}
                ],
                renyaoTeacher: [
                    {name: "假装接口数据", sex: "人妖", age: 18},
                    {name: "追梦老师", sex: "人妖", age: 18},
                    {name: "追梦老师", sex: "人妖", age: 18}
                ],
                publicityTeacher: [
                    {name: "假装接口数据", sex: "男", age: 18},
                    {name: "小龙老师", sex: "男", age: 18},
                    {name: "小龙老师", sex: "男", age: 18}
                ],
                xinaiTeacher: [
                    {name: "假装接口数据", sex: "女", age: 18},
                    {name: "心艾一号", sex: "女", age: 18},
                    {name: "心艾二号", sex: "女", age: 18},
                ],
                serviceTeacher: [
                    {name: "假装接口数据", sex: "女", age: 18},
                    {name: "客服老师", sex: "女", age: 18},
                    {name: "客服老师", sex: "女", age: 18},
                ]
            }
        },
        methods: {
            onHeaderClick (){

            },
            tabActive (){
                const wvTab = document.getElementsByClassName('wv-tab');
                const tabCon = document.getElementsByClassName('tabCon');
                
                for(let i  = 0; i < wvTab.length; i++){
                    wvTab[i].index = i;
                    wvTab[i].onclick = function (){
                        
                        for(let i = 0; i < wvTab.length; i++){
                            //wvTab[i].className = '';
                            tabCon[i].style.display = 'none';
                        }

                        tabCon[this.index].style.display = 'block';
                    }
                } 
            }
        },
        created(){
            // 请求后台教师数据
            let url = "https://route.showapi.com/852-1?showapi_appid=74726&showapi_sign=6a69ec9db6584ef8b3bdf810188b77a6";
            url += `&showapi_timestamp=${Date.now()}`;
            const that = this;
            this.$ajax.get(url)
                .then(res => {
                    that.res.data;
                })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ico-left{
        font-style: normal;
        font-size: 17px;
    }
    .showon{
        display: block;
    }
    .show{
        display: none;
    }
</style>

