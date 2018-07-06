<template>
    <div class="main">
        <div class="split"></div>
        <div class="main-child">
        <div class="content">
            <div class="img-icon">
                <img :src="centerobj.icon">
            </div>
            <div class="left-text">
                <p class="title-name">
                {{centerobj.name}}
                </p>
                <p class="price-text">
                    <span class="lowprice">
                        ￥{{centerobj.lowPrice}}
                    </span>
                    <span class="price">
                            ￥{{centerobj.price}}
                    </span> 
                </p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
props:["centerobj"]
}
</script>

<style lang="stylus" scoped>
.split{
    height .2rem
    width 100%
    background #F2F2F2
}
.main-child{
height 2.2rem
background #ffffff
width 100%
margin-top .2rem
.content{
    height 1.8rem
    width 100%
    background #FFF3F3
    display flex
    position relative
    top .15rem
    .img-icon{
        width 1.2rem
        height 1.2rem
        background #ff0000
        position relative
        top 50%
        margin-top -.6rem
        margin-left .3rem
        img{
            width 100%
            height 100%
        }
    }
    .left-text{
        flex 1
        height 1.2rem
        position relative
        top 50%
        margin-top -.6rem
        .title-name{
            color #000
            font-size 18px
            margin-left .2rem
            margin-top .1rem
        }
        .price-text{
            margin-top .35rem
            margin-left .2rem
            .lowprice{
                   color #FF4949
            font-size 16px
            font-weight bold
            }
            .price{
                margin-left .1rem
                font-size 14px
                color #9B9B9B
                text-decoration: line-through;
            }
        }
    }
}
}
</style>
