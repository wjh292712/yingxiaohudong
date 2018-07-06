<template>
    <div class="main">
        <div class="ttle">
         <span class="split"></span><p class="mall-title-text">商品详情</p>
        </div>
        <hr/>
        <div class="img-background-img">
            <img src="@/assets/bakground.png">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.ttle{
    height 50px
    .split{
    display inline-block
    float left
    width 5px
    height 20px
    background #FC7132
    margin-top 20px
}
.mall-title-text{
    margin-left 20px
    float left
    margin-top 20px
}
}
hr{
    width 90%
}
.img-background-img{
    width 90%
    margin-top 20px
    img{
        width 100%
        height 100%
    }
}
</style>
