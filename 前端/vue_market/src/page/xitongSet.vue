<template>
<div class="container">
<div class="ttle">
    <p>| 当前版本</p>
</div>
<div class="ddvvs">
    <p class="p_one">
        <label>当前版本:</label>
<span>免费版</span>
    </p>
<p class="p_two">
  <label>到期时间:</label>
<span>无</span>
<span id="ssp">
<span><a href="javascript:void(0)" @click="versionGo()">立即升级&nbsp;&nbsp;&nbsp;&nbsp;</a></span>
<span><a  href="javascript:void(0)">了解更多</a></span>
</span>
</p>
</div>
<hr class="split_hr" />
<div class="ttle">
    <p>| 微信公众号授权</p>
</div>
<div class="ddvvs">
    <p class="p_one">
        <label>授权状态:</label>
<span>已授权</span>
    </p>
    <div class="bks">

         <p id="logo_p">
        Logo
    </p>
    </div>
    <div id="rrt">
         <p class="names">趣充</p>
<p id="kkk"><span id="nns">服务号</span><span id="renzheng">已认证</span></p>

<el-button type="primary" id="shouquan_btn">授权其他公众号</el-button>
    </div>
<el-button type="primary" id="jiechu_btn">解除授权</el-button>

</div>
</div>
</template>

<script>
export default {
  data(){
    return{}
  },
  methods:{
    versionGo(){
      this.$router.push({path:"/xitongSetMenuList/versionCart"})
      this.$axios({
        method:"post",
        url:'',
        params:{

        }
      }).then(res =>{

      })
    }
  }

}
</script>

<style scoped>
#renzheng{
    margin-left: 10px;
}
#shouquan_btn{
    margin-top: 50px;
}
#rrt{
      float: left;
    margin-left: 15px;
    position: relative;
   margin-top: 7px
}
#jiechu_btn{
    float: left;
    margin-left: 10%;
}
#kkk{
    clear: both;
    color: #bebebe
}
.names{

    font-size: 14px;
}
.container{
    padding-left: 3%
}
#ssp{
    margin-left: 10%
}
#logo_p{
    width: 50px;
    height: 30px;
    border: 1px solid #bebebe;
    float: right;
    line-height: 30px;
    text-align: center;
}
.bks{
width: 125px;
height: 50px;
margin-left: 40px;
float: left;
margin-top: 10px;
}
.split_hr{
    height:2px;
    border:none;
    border-top:2px dotted #bebebe;
    margin-top: 25px;
}
.ttle{
    height: 50px;
}
.ttle p{
    line-height: 50px;
    font-size: 20px
}
.ddvvs .p_one{
margin-left: 40px;
margin-top: 10px;
font-size: 16px;
width: 125px;

}
.ddvvs .p_two{
margin-left: 40px;
margin-top: 10px;
font-size: 16px
}
</style>
