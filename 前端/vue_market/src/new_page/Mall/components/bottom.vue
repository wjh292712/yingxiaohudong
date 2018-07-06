<template>
<div class="main">
<div class="content">
<ul class="uls">
<li v-for="(item,key) in imgList" @click="desc(item.id)">
<div class="top-div">
<img :src="item.imgUrl">
</div>
<p class="footer-text-desc">
 {{item.desc}}
</p>
<p class="price-divs">
<span class="low-price">￥{{item.lowprice}}</span>
<span class="price">￥{{item.price}}</span>
</p>
</li>
</ul>
</div>
    <div class="footer-page">
        <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
    </div>
</div>    
</template>

<script>
export default {
    props:["imgList"],
data(){
    return{
    }
},
methods:{
    desc(id){
        this.$router.push({path:"MallDesc",query:{id:id}})
    }
}
}
</script>

<style lang="stylus" scoped>
.main{
width 90%

}
.uls{

  padding-left 0px
}
.uls li{
    width 202px
    height 239px
    border 1px solid #bebebe
    float left
    cursor pointer
    margin-top 20px;
    margin-left 40px
    .top-div{
    width 100%
    text-align center
    }
        .price-divs{
            width 90%
            position relative
            left 50%
            margin-left -40%
            margin-top 5px
            .low-price{
            color #ff0000
            font-size 16px
            }
            .price{
            text-decoration: line-through;
            font-size 16px
            margin-left 15px
            }
        }
        .footer-text-desc{
            width 90%
            position relative
            left 50%
            margin-left -40%
        }
    
}
.footer-page{
    height 140px
    clear both
    text-align right
    .el-pagination{
    padding-top 80px
    padding-right 50px
    } 
}
</style>