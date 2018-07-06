<template>
<div class="main">
</alert-message>
    <div class="title-text">
        <span class="split"></span>
        <span class="oder-info-text">订单信息</span>
    </div>
    <div class="sp"></div>
    <div class="oderList" v-for="(item,key) in 1">
        <div class="title-info">
            <div class="t_text">
                商品名称
            </div>
              <div class="t_text">
                  单价
            </div>
              <div class="t_text">
                  数量
            </div>
        </div>
        <div class="info">
            <div class="ttle-div">
                100元流量卷
            </div>
            <div class="ttle-div">
                <span>￥10</span>
            </div>
            <div class="ttle-div">
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            <div class="bot-div">
              <p class="pps">
                优惠:<span class="offer-price">￥3000</span>
            </p>  
             <p class="pps">
                小计:<span class="offer-price">￥200</span>
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
        <div class="buy-one dvs">
            账户余额支付
        </div>
         <div class="buy-two dvs">
             <img src="@/assets/weixin.png">
                微信支付
        </div>
          <div class="buy-three dvs">
               <img src="@/assets/zhifubao.png">
                支付宝支付
        </div>
    </div>
      <div class="sp"></div>
      <div class="payment-div">
          <p class="payment-price">
              应付金额:<span class="price">￥100</span>
          </p>
      </div>
        <el-button class="payment">立即支付</el-button>

        <div class="botmm">

        </div>
</div>    
</template>

<script>
import AlertMessage from "@/components/PcAlertMessage";
export default {
    components:{
AlertMessage
    },
  data() {
    return {
      num1: 1,
      zhanghu:false
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
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
</script>

<style lang="stylus" scoped>
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
        img{
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
.payment-div{
    margin-top 10px
    height 50px
    width 90%
    .payment-price{
       line-height 50px
       .price{
           color #ff0000
           font-size 16px
           fon-weight boild 
       } 
    }
}
.payment{
    background #FC7132
    color #fff
    width 129px
}
.botmm{
    height 80px
}
</style>
