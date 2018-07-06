<template>
    <div class="main">
        <div class="content">
            <div class="left">
                <p class="payment">
                    应付款:<span class="payment-val">￥100</span>
                </p>
            </div>
             <div class="right">
                 <buttom class="sub">提交订单</buttom>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style lang="stylus" scoped>
.content{
    border-top 1px solid #E8E8E8
    height .98rem
    position fixed
    z-index 10000
    bottom 0
    width 100%
    .left{
        float left
        height 100%
        width 50%
        line-height .98rem
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
