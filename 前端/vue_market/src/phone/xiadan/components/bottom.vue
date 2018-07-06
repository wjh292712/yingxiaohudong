<template>
    <div class="main">
          <div class="split"></div>
        <div class="content">
        <div class="title">
            <span class="distribution-type">
                配送方式:
            </span>
            <span class="distribution-val">
                商家配送
            </span>
        </div>
        <div class="ship-info-div">
            <p>
                发货说明
            </p>
        </div>
          <div class="text-arr">
              <textarea class="text-arrs"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style>
html,body{
    width: 100%;
    height: 100%;
}
</style>

<style lang="stylus" scoped>
.split{
    height .2rem
    width 100%
    background #F2F2F2
}
.main{
width 100%
height 100%
.content{
    min-height 260px
    width 100%
    background #fff
    overflow hidden
    margin-top .2rem
    .title{
        height .8rem
        border-bottom 1px solid #E8E8E8
        .distribution-type{
            margin-left .3rem
            line-height .8rem
            color #9B9B9B
        }
        .distribution-val{
            margin-left .3rem
            line-height .8rem
            color #9B9B9B
            float right
            margin-right .3rem
            color #000
        }
    }
    .ship-info-div{
      height .6rem
      margin-top .3rem
      p{
        margin-left .3rem
      }
    }
    .text-arr{
        height 100%
       .text-arrs{
           min-height 170px
           width 97%
           margin-left .3rem
           padding-bottom 1.4rem

       }

    }
}
}
</style>
