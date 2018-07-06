<template>
    <div class="apps">
        <top-view class="top"></top-view>
        <center-view class="center-view"></center-view>
        <bottom-view class="bottom-view"></bottom-view>
        <footer-view class="footer-view"></footer-view>
    </div>
</template>

<script>
import TopView from "./components/top"
import CenterView from "./components/CenterView"
import BottomView from "./components/bottom"
import FooterView from "./components/footer"
import axios from "axios";
import publics from "../../../static/js/public.js";
export default {
    components:{
        TopView,
        CenterView,
        BottomView,
        FooterView
    },
data(){
    return{
        
    }
},
mounted(){
    $("body").css("background","#ffffff")
    $("html").css("background","#ffffff")
}
}
</script>

<style lang="stylus" scoped>

.top{
    height 30%
}
.center-view{
    height 30%
}
.bottom-view{
      overflow: auto;
      height 40%
    padding-bottom .98rem
}
</style>
