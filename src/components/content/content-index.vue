<!-- 首页内容组件 -->

<template>
    <div class="content">
        <wv-grid>
            <wv-grid-item :to="{name:'TZ'}">
                <div class="weui-grid__icon">
                    <svg class="icon weui-tabbar__icon" aria-hidden="true">
                        <use xlink:href="#icon-shouye"></use>
                    </svg>
                </div>
                <p class="weui-grid__label">
                    <span slot="label">潭州官网</span>
                </p>
            </wv-grid-item>
            <wv-grid-item :to="{name: 'Teacher'}">
                <div class="weui-grid__icon">
                    <svg class="icon weui-tabbar__icon" aria-hidden="true">
                        <use xlink:href="#icon-huiyuan"></use>
                    </svg>
                </div>
                <p class="weui-grid__label">
                    <span slot="label">潭州导师</span>
                </p>
            </wv-grid-item>
            <wv-grid-item to="/">
                <div class="weui-grid__icon">
                    <svg class="icon weui-tabbar__icon" aria-hidden="true">
                        <use xlink:href="#icon-liuyan3"></use>
                    </svg>
                </div>
                <p class="weui-grid__label">
                    <span slot="label">学习规划</span>
                </p>
            </wv-grid-item>
            <wv-grid-item to="/">
                <div class="weui-grid__icon">
                    <svg class="icon weui-tabbar__icon" aria-hidden="true">
                        <use xlink:href="#icon-fenxiang"></use>
                    </svg>
                </div>
                <p class="weui-grid__label">
                    <span slot="label">助学活动</span>
                </p>
            </wv-grid-item>
            <wv-grid-item to="/">
                <div class="weui-grid__icon">
                    <svg class="icon weui-tabbar__icon" aria-hidden="true">
                        <use xlink:href="#icon-qing"></use>
                    </svg>
                </div>
                <p class="weui-grid__label">
                    <span slot="label">潭州哲学</span>
                </p>
            </wv-grid-item>
            <wv-grid-item to="/">
                <div class="weui-grid__icon">
                    <svg class="icon weui-tabbar__icon" aria-hidden="true">
                        <use xlink:href="#icon-lianxiren"></use>
                    </svg>
                </div>
                <p class="weui-grid__label">
                    <span slot="label">师兄事迹</span>
                </p>
            </wv-grid-item>
            <wv-grid-item :to="{name: 'Shop'}">
                <div class="weui-grid__icon">
                    <svg class="icon weui-tabbar__icon" aria-hidden="true">
                        <use xlink:href="#icon-iconsp1"></use>
                    </svg>
                </div>
                <p class="weui-grid__label">
                    <span slot="label">潭州商城</span>
                </p>
            </wv-grid-item>
            <wv-grid-item to="/">
                <div class="weui-grid__icon">
                    <svg class="icon weui-tabbar__icon" aria-hidden="true">
                        <use xlink:href="#icon-lianxiwomen3"></use>
                    </svg>
                </div>
                <p class="weui-grid__label">
                    <span slot="label">新闻联播</span>
                </p>
            </wv-grid-item>
            <wv-grid-item to="/">
                <div class="weui-grid__icon">
                    <svg class="icon weui-tabbar__icon" aria-hidden="true">
                        <use xlink:href="#icon-plus-share"></use>
                    </svg>
                </div>
                <p class="weui-grid__label">
                    <span slot="label">自定义（假的）</span>
                </p>
            </wv-grid-item>
        </wv-grid>
    </div>
</template>

<script>
    export default {
        name: 'Content',
        data () {
            return {
                thumbSmall: "123"
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .icon {
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>

