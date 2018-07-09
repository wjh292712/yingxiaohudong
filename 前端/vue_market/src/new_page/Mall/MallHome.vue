<template>
<div class="main">
<top-view></top-view>
<hr/>
<bottom-view :imgList="list"></bottom-view>
</div>    
</template>

<script>
import axios from "axios";
import pub from "static/public.js";
import TopView from "./components/top";

import BottomView from "./components/bottom";
import app from "@/App";
export default {
  components: {
    TopView,
    BottomView,
  },
  data() {
    return {
        list:[]
    };
  },
  activated(){
  this.$bus.$emit("titleName","奖品商城")
  },
  mounted() {
      let thi_s =this
    axios.get(pub.mallHomeList).then(function(response) {
      if (response.data.status) {
          for(let key in response.data.data.list)
            thi_s.list.push({
            imgUrl:response.data.data.list[key].homeImg,
            desc:response.data.data.list[key].name,
            lowprice:response.data.data.list[key].salePrice,
             price:response.data.data.list[key].oriPrice, 
             id:response.data.data.list[key].id

        })
        pub.close_loadings(); //关闭loading
      }
    });
  },
};
</script>

<style lang="stylus" scoped>
hr {
    clear: both;
    margin-top: 40px;
    width 90%
    background-color: #E8E8E8;
}
</style>
