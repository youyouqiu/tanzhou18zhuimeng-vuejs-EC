<!-- 公共底部组件 -->

<template>
    <div class="footer">
        <wv-tabbar>
            <wv-tabbar-item to="/" is-on>
                <span slot="icon" style="display: inline-block; position: relative;">
                    <svg class="icon weui-tabbar__icon" aria-hidden="true">
                        <use xlink:href="#icon-shouye"></use>
                    </svg>
                    <wv-badge style="position: absolute;top: -2px;right: -13px;">8</wv-badge>
                </span>
                    首页
            </wv-tabbar-item>
            <wv-tabbar-item to="/">
                <span slot="icon" style="display: inline-block; position: relative;">
                    <svg class="icon weui-tabbar__icon" aria-hidden="true">
                            <use xlink:href="#icon-news_icon"></use>
                    </svg>
                    <wv-badge style="position: absolute;top: -2px;right: -13px;">8</wv-badge>
                </span>   
                    新闻
            </wv-tabbar-item>
            <wv-tabbar-item to="/">
                <span slot="icon" style="display: inline-block; position: relative;">
                    <svg class="icon weui-tabbar__icon" aria-hidden="true">
                        <use xlink:href="#icon-gouwuche"></use>
                    </svg>
                    <wv-badge is-dot style="position: absolute;top: 0;right: -6px;">8</wv-badge>
                </span>
                    商城
            </wv-tabbar-item>
            <wv-tabbar-item to="/">
                <span slot="icon" style="display: inline-block; position: relative;">
                    <svg class="icon weui-tabbar__icon" aria-hidden="true">
                            <use xlink:href="#icon-tubiaozhizuomobanyihuifu-"></use>
                    </svg>
                    <wv-badge is-dot style="position: absolute;top: 0;right: -6px;">8</wv-badge>
                </span>    
                    我的
            </wv-tabbar-item>
        </wv-tabbar>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data () {
            return {
                
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

