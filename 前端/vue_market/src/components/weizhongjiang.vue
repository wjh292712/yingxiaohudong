<template>
<div id="main">
  <div id="top_div">
      <p id="weizhong">
          恭喜获得
      </p>
     <div id="img_div">
         <img src="../assets/images/win-1.png">
     </div>
     <div id="descs">
         <p><slot name="jiang"></slot></p>
         <button type="button" class="mui-btn mui-btn-danger" id="sel" @click="sel">查看奖品详情</button>
     </div>

  </div>
</div>    
</template>

<script>
import Vue from 'vue'
export default {
    props:["name"],
data(){
    return{

    }
},
methods:{
    sel(){
    
        this.$emit("seldesc")
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
#sel{
    width: 100%;
border-radius:30px;
background:#FF2437;
margin-top:15px;
height: 40px;
border:none;
color:#fff;
}
#descs{
    text-align: center;

    position: relative;
   bottom: 77px;
}
#descs p{
color: #fff;
font-size: 16px;
}
#img_div{
    width: 314px;
    height: 260px;
   position: relative;
    left: 50%;
    margin-left: -146px

}
#img_div img{
    width: 100%;
    height: 100%;
  
}
#top_div{
    height: 50px;


}


#weizhong{
    color: #FFF34A;
    text-align: center
}

</style>
