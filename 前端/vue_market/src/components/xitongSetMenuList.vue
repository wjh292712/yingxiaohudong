<template>
<div class="container">
<div id="menu_list">
<ul id="uulls">
  
        <router-link tag="li" :to="item.url" v-for="(item,key) in dataList" :key="key">
        {{item.name}}
        </router-link>
   
</ul>
</div>
<div id="right_view">
<router-view></router-view>
</div>
</div>    
</template>

<script>
export default {
data(){
    return{
        dataList:[
            {
                name:"版本升级",
                url:"#"
            },
            {
                name:"系统设置",
                url:"/xitongSetMenuList/xitongSet"
            },
            {
                name:"操作日志",
                url:"#"
            }
        ]
    }
},
mounted(){
   this.$router.push("/xitongSetMenuList/xitongSet")
}
}
</script>
<style>

body,html{
    height: 100%;
width: 100%;
}
#app{
    height: 100%;
   
}
.app_down{
    height: 100%;
}
</style>

<style scoped>

#uulls {
    padding-top:30px;
}
#uulls li{
 text-align: center;
 line-height:25px;
 cursor: pointer;

}
.container{
    height: 100%;
    margin-top:0px !important;
    
}
#menu_list{
    width: 10%;
    height: 100%;
    background: #bebebe;
    float: left;
}
#right_view{
    float: left;
    width: 90%;
    height: 100%;
}
</style>



// WEBPACK FOOTER //
// src/components/xitongSetMenuList.vue