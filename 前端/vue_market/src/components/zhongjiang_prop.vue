<template>
<div id="main">
  <div id="top_div">
      <p id="weizhong">
          抱歉，未中奖
      </p>
     <div id="img_div">
         <img src="../assets/images/losing.png">
     </div>
     <div id="descs">
         <p>差的是运气, 不是人品哦</p>
         <button type="button" class="mui-btn mui-btn-danger" id="zailai" @click="zailai">再来一次</button>
     </div>

  </div>
</div>    
</template>

<script>
export default {
data(){
    return{

    }
},
methods:{
    zailai(){
        this.$emit("close")
    }
}
}
</script>
<style>
.zhonjiang_dialog .el-dialog .el-dialog__header .el-dialog__headerbtn .el-dialog__close .el-icon .el-icon-close{
    color: #fff !important;
    font-size: 30px !important
}
</style>

<style scoped>
#zailai{
    width: 100%;
border-radius:30px;
background:#FF2437;
margin-top:15px;
height: 40px;
border:none;
color:#fff
}
#descs{
    text-align: center;

    position: relative;
   bottom: 115px;
}
#descs p{
color: #fff;
font-size: 16px;
}
#img_div{
    width: 331px;
    height: 331px;
   position: relative;
    left: 50%;
    margin-left: -165.5px;

}
#img_div img{
    width: 100%;
    height: 100%;
   position: relative;
   bottom: 49px;
}
#top_div{
    height: 50px;


}


#weizhong{
    color: #FFF34A;
    text-align: center
}

</style>
