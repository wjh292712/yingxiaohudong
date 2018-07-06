<template>
    <div class="main">
        <div class="top">
        <div class="add-address">
            <div class="address-div">
           <span class="icon">
            +
           </span>
            <p class="address" style="margin-left:.2rem">
                添加地址
            </p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.top{
    background #ffffff
    height 2.2rem
    position relative
    top 0
.add-address{
    width 90%
    height 1.8rem
    background #FBFAFA 
    position relative
    left 50%
    margin-left -45%
    text-align center
    top .2rem
    .address-div{
    width 1.7rem
    height .3rem
    position absolute
    left 50%
    top 50%
    margin-left -.75rem
    margin-top -.15rem
    .address{
        float left
    }
    .icon{
       display inline-block
       width  .36rem
       height .36rem
       border-radius 50%
       background #8CDE56
       text-align center
       font-size 20px
       line-height .36rem
       color #ffffff
       font-font-weight bold
       float left
       position relative
       bottom .05rem
    }
    }
}
}
</style>
