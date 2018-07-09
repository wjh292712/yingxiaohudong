<template>
<div class="main">
    
  <alert-message name="账户余额支付" v-if="zanghu_flag" @close-flag="close">
    <div class="contents">
      <p class="p-tit">
        购买商品：聚通达MCM 系统  标准版
      </p>
      <p class="yingfu">
        <label>应付金额：</label>
        <span>xxxxx元</span>
      </p>
      <p class="zhifu_pass">
         <label>支付密码：</label>
         <span>
<el-input v-model="pass" placeholder="请输入密码" type="password"></el-input>
         </span>
         <p class="text-right">
错误提示信息显示在这里
         </p>
      </p>
      <div class="bottom-view">
    <el-button class="sub">确定</el-button>
    <el-button class="exit">取消</el-button>
      </div>
    </div>
</alert-message>
<alert-message name="微信支付" v-if="weixin_flag"  @close-flag="close">
<div class="content_weixin">
<p class="p-content">
  <label>购买商品:</label>
  <span class="buy-mall-name">聚通达MCM 系统  标准版</span>
</p>
<p class="p-content">
  <label>应付金额:</label>
  <span class="buy-price-key">xxxx<span class="buy-price-val">元</span></span>
</p>
<p class="p-content">
    <label>收款方:</label>
    <span class="receipt-name">北京聚通达科技股份有限公司</span>
</p>
<div class="erwei-div">
<img src="@/assets/erwei.png">
</div>
<p class="bottom-text">
  使用【微信扫一扫】即可付款
</p>

</div>

</alert-message>
    <div>
      <tiel-view></tiel-view>
    </div>
    <div class="switch-div">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

</div>    
</template>

<script>
import BottomView from "./BuySuccess/components/bottom";
import AlertMessage from "@/components/PcAlertMessage";
import pub from "static/public.js";
import TielView from "./components/title";
export default {
  data(){
    return{
      pass:"",
      zanghu_flag:false,
      weixin_flag:false,
    }
  },
components:{
  AlertMessage,
     TielView,

},
methods:{
zhanghu(){
this.zanghu_flag=true
},
close(){
this.zanghu_flag=false
this.weixin_flag=false

},
weixin(){
this.weixin_flag=true
}
},

  created() {
    // pub.loadings(this);
    this.$emit("mallflag", false);
  },
  mounted(){
       this.$emit("mallflag", false);
         pub.mall_styles_update();

         this.$bus.on("zhanghu", content => {
            this.zanghu_flag=content
         })
         
          this.$bus.on("weixin", content => {
            this.weixin_flag=content
         })
  },
   destroyed() {
    this.$emit("mallflag", true);
    pub.mall_styles_noupdate();
  }
}
</script>

<style lang="stylus" scoped>
.main{
  position relative
  height 100%
}
.bottom-text{
  text-align center
  margin-top 15px
  color #7ED321 
}
.erwei-div{
  width 176px
  height 176px
  position relative
  left 50%
  margin-left -88px
  margin-top 15px 
  background #bebebe
  img{
    width 100%
    height 100%
  }
}
.receipt-name{
margin-left 25px
}
.buy-mall-name{
  margin-left 10px
}
.buy-price-key{
  color #ff0000
  margin-left 13px
}
.buy-price-val{
  color #000
}
.sub{
  background #FC7132
  color #fff
}
.bottom-view{
  width 100%
  height 40px
  margin-top 30px
  text-align right 
  padding-right 20px
}
.text-right{
  width 380px
  text-align center
  margin-top 15px
  color #ff0000
}
.zhifu_pass >>> .el-input{
  width 200px
}
.switch-div{
  margin-left 118px
  height 100%
}
.contents{
  width 100%
  height 240px
  background #fff
  .p-tit{
    margin-top 20px
    margin-left 20px
    font-size 18px
  }
  .yingfu{
    margin-left 25px
    margin-top 10px
    font-size 18px
  }
  .zhifu_pass{
    font-size 18px
    margin-left 25px
    margin-top 10px
  }
}
.content_weixin{
  width 100%
  height 380px
  background #fff
  padding-top 10px
}
.p-content{
  margin-left 50px
  margin-top 10px
}
.bottom-view{
    width 100%
    margin-left 0px
}
</style>
