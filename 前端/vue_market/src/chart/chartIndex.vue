<template>
<div class="main">
<div class="leftList">
<ul class="uls">
<router-link v-for="(item,key) in menuList" :key="key" tag="li" :to="item.url">
{{item.name}}
</router-link>
</ul>
</div>
<div class="right">
<router-view></router-view>
</div>
</div>
</template>

<script>
export default {
data(){
    return{
        menuList:[
            {
                name:"基本数据",
                url:"/chartIndex/Basicdata"
            },
              {
                name:"传播分析",
                url:"/chartIndex/Spreaddata"
            },
             {
                name:"粉丝分析",
                url:"/chartIndex/Fanchart"
            }
        ]
    }
},
mounted(){
}
}
</script>

<style lang="stylus" scoped>
.main{
height 100%
background #fff
display flex
.leftList{
width 10%
height 100%
background #F2F2F2
}
.uls li{
    line-height 40px
    font-size 18px
    text-align center
    cursor pointer
}
.right{
    height 100%
    flex 1
}
}

</style>
