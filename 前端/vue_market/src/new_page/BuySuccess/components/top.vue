<template>
<div class="main">
<div class="content">
    <p class="p-img">
<img src="@/assets/images/Shape.png">
    </p>
    <p class="p-text">
        提交成功
    </p>
    <div class="bottom-div-view">
        <div class="but-content">
        <el-button class="left-but but">返回奖品商城</el-button>
           <el-button class="right-but but">创建活动</el-button>
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
.content{
    width 90%
    text-align center
    .p-img{
        margin-top 30px
    }
    .p-text{
        text-align center
        margin-top 15px
        font-size 18px
        color #000
    }
    .bottom-div-view{
        margin-top 44px
        height 50px
        text-align center
        position relative
        .left-but{
            background #FC7132
            color #fff
        }
        .but{
            width 129px
            float left
        }
        .but-content{
            width 300px
            left 50%
            position relative
            margin-left -130px
        }
    }
}
</style>
