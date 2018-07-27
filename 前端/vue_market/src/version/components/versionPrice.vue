<template>
  <div class="main">
    </alert-message>
    <div class="title-text">
      <span class="split"></span>
      <span class="oder-info-text">订单信息</span>
    </div>
    <div class="sp"></div>
    <div class="oderList">
      <div class="title-info">
        <div class="t_text">
          商品名称
        </div>
        <div class="t_text">
          单价
        </div>
        <div class="t_text">
          购买年份
        </div>
      </div>
      <div class="info">
        <div class="ttle-div">
          {{name}}
        </div>
        <div class="ttle-div">
          <span>￥{{oriPrice}}</span>
        </div>
        <div class="ttle-div">
          <!--<el-input-number v-model="num1" @change="handleChange" :min="1" :max="5" label="描述文字"></el-input-number>-->
<span>{{versionYearId}}年赠{{versionMounth}}个月</span>
          <!--<el-select v-model="num1" placeholder="请选择" style="min-width: 100px" @change="handleChange" class="selcc">-->
            <!--<el-option-->
              <!--v-for="item in yearList"-->
              <!--:key="item.id"-->
              <!--:label="item.name"-->
              <!--:value="item.id">-->
            <!--</el-option>-->
          <!--</el-select>-->
          <div class="bot-div">
            <p class="pps">
              优惠:<span class="offer-price">￥{{(proPrice)}}</span>
            </p>
            <p class="pps">
              小计:<span class="offer-price">￥{{proPrice}}</span>
            </p>
          </div>

        </div>
      </div>
    </div>
    <div class="title-text">
      <span class="split"></span>
      <span class="oder-info-text">支付方式</span>
    </div>
    <div class="sp"></div>
    <div class="buy-type">
      <!--<div class="buy-one dvs" @click="styles('3')" :class="{boxShows:style_flag=='3'}">-->
        <!--账户余额支付-->
      <!--</div>-->
      <div class="buy-two dvs" @click="styles('1')" :class="{boxShows:style_flag=='1'}">
        <img src="@/assets/weixin.png">
        微信支付
      </div>
      <div class="buy-three dvs" @click="styles('2')" :class="{boxShows:style_flag=='2'}">
        <img src="@/assets/zhifubao.png">
        支付宝支付
      </div>
    </div>
    <div class="sp"></div>
    <div class="payment-div">
      <p class="payment-price">
        应付金额:<span class="price"> {{proPrice}}</span>
      </p>
    </div>
    <el-button class="payment" @click="buy_sub">立即支付</el-button>

    <div class="botmm">

    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import pub from "static/public.js";
  import {log} from "static/public.js";
  import AlertMessage from "@/components/PcAlertMessage";

  export default {
    components: {
      AlertMessage
    },
    data() {
      return {
        list: [],
        num1: 1,
        zhanghu: false,
        style_flag: "",
        versionId: '',//版本id
        versionYearId: '',//版本年
        versionSpecId:'',//版本内id
        versionMounth:'',
        name: '',
        oriPrice: '',
        proPrice: '',
        goodsPrePrice:'',
        goodsPrice:'',
        yearId:'',
        yearList:'',
        orderId:'',//
        outTradeNo:'',
      };
    },
    mounted() {
      this.versionId = this.$route.query.versionId
      this.versionSpecId= this.$route.query.versionSpecId
      this.$axios({
        method: 'post',
        url: 'http://center.marketing.yunpaas.cn/center/versionInfo/getPayInfo',
        params: {
          versionId: this.versionId,
          versionSpecId: this.versionSpecId
        }
      }).then(res => {
        console.log(res);
        this.name=res.data.data.versionInfoSpec.name
        this.oriPrice=res.data.data.versionInfoSpec.oriPrice
        this.proPrice=res.data.data.versionInfoSpec.salePrice
        this.versionYearId=res.data.data.versionInfoSpec.buyYear
        this.versionMounth=res.data.data.versionInfoSpec.giveMonth
      })
    },

    methods: {

      styles(el) {
        this.style_flag = el
      },
      buy_sub() {

        this.$axios({
          method:'post',
          url:'http://center.marketing.yunpaas.cn/center/enterpriseRoleUp/makeOrder',
          params:{
            roleId:this.versionId,
            specId:this.versionSpecId
          }
        }).then(res=>{
          console.log(res);
          if(res.data.status==false){
            alert(res.data.msg)
          }
          this.orderId=res.data.data.orderId
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/enterpriseRoleUp/OrderPay',
            params:{
              orderId:this.orderId,
              payType:this.style_flag,
            }
          }).then(res=>{
            if (this.style_flag == '3') {
              this.$bus.$emit("zhanghu",this.orderId,this.proPrice,this.name, true)
            } else if (this.style_flag == '1') {
              this.$bus.$emit("weixin",this.orderId,this.proPrice,this.name,"http://center.marketing.yunpaas.cn/center/enterpriseRoleUp/OrderPay?orderId="+this.orderId+"&payType="+this.style_flag, true)
            }else if(this.style_flag == '2'){
              window.location.href="http://center.marketing.yunpaas.cn/center/enterpriseRoleUp/OrderPay?orderId="+this.orderId+"&payType="+this.style_flag
            } else {
              alert("请选择支付类型")
            }
          })
        })

      },
      close(msg) {//关闭自定义弹出框
        this.AlertMessage = msg;
        $("body").css("overflow", "auto");//出现弹框禁止滚动
      }
    },

    activated() {
      this.$bus.$emit("titleName", "");

    }
  };
  //  box-shadow: darkgrey 0px 0px 30px 5px ;
</script>
<style lang="stylus" scoped>
  .main{
    padding-left 30px
  }
  .boxShows {
    box-shadow: #2d8cf0 0px 0px 10px 5px
  }

  .buy-type {
    height: 90px;
    width: 90%;
    padding-top: 15px;

    .dvs {
      width: 120px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      float left

      img {
        position relative
        top 5px
      }
    }

    .buy-one {
      border: 1px solid #FC7132;
      color: #FC7132;

    }

    .buy-two {
      border: 1px solid #7ED321;
      color #7ED321
      margin-left 10px
    }

    .buy-three {
      border: 1px solid #34B6FC;
      margin-left 10px
      color #34B6FC
    }
  }

  .title-text {
    height: 50px;
    clear: both;

    .split {
      width: 5px;
      height: 15px;
      display: inline-block;
      background: #FC7132;
      position: relative;
      top: 15px;
    }

    .oder-info-text {
      margin-left: 10px;
      position: relative;
      top: 12px;
      color: #000;
      font-size: 16px;
    }
  }

  .oderList {
    min-height: 150px;
    border: 1px solid #bebebe;
    margin-top: 10px;
    width: 90%;

    .title-info {
      height: 30px;
      background: #E8E8E8;
      width: 100%;

      .t_text {
        width: 30%;
        height: 100%;
        line-height 30px
        float: left;
        text-align: center;
      }
    }

    .info {
      width: 100%;
      height: 120px;
      position: relative;

      .ttle-div {
        width: 30%;
        height: 100%;
        text-align: center;
        float: left;
        margin-top: 10px;

        .el-input-number {
          width: 126px;
        }

        span {
          color: #ff0000;
        }

        .offer-price {
          color: #ff0000;
        }

        .bot-div {
          margin-top: 20px;
          text-align: center;
          width: 100%;
          .pps{
            font-size 14px
          }

          p {
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }

  .sp {
    width: 90%;
    clear: both;
    background-color: #E8E8E8;
    height 1px
  }

  .payment-div {
    margin-top 10px
    height 50px
    width 90%
    .payment-price {
      line-height 50px
      font-size:14px
      .price {
        color #ff0000
        font-size 18px
        fon-weight boild
      }
    }
  }

  .payment {
    background #FC7132
    color #fff
    width 129px
  }

  .botmm {
    height 80px
  }

</style>
