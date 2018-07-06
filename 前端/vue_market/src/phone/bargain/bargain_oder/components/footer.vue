<template>
    <div class="main">
        <div class="content">
            <div class="left">
                <p class="payment">
                    应付款:<span class="payment-val">￥{{footerobj.lowPrice}}</span>
                </p>
            </div>
             <div class="right">
                 <buttom class="sub" @click="sub">提交订单</buttom>
            </div>
        </div>
    </div>
</template>
<script>
export default {
props:["footerobj"],
data(){
    return{}
},
  methods:{
        sub(){//获取支付必要的信息
        this.$emit("isemtry",this)
        
        }
    }
}
</script>

<style lang="stylus" scoped>
.content{
    border-top 1px solid #E8E8E8
    height .98rem
    position fixed
    z-index 10
    bottom 0
    width 100%
    .left{
        float left
        height 100%
        width 50%
        line-height .98rem
        background #fff
        .payment{
            margin-left .3rem
            span{
                color #ff0000
                margin-left .2rem
                font-size 18px
                font-weight bold 
            }
        }
    }
    .right{
        float left
        height 100%
        width 50%
        background #ff0000
        .sub{
            display inline-block
            text-align center
            line-height .98rem
            width 100%
            height 100%
            color #ffffff
        }
    }
}
</style>
