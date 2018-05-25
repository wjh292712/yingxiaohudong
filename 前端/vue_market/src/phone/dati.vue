<template>
    <div class="mui-content">
        <div id="baks">
              <div id="ttle">
                  <p class="ppp">
                      <span class="ts">第一题</span> / 共<span id="nn">5</span>题
                  </p>
            </div>  
            <div class="titles">
                    <p class="ps">世界上最大的沙漠是下面那个沙漠?</p>
            </div>
            <div class="imgg">
                <img src="../assets/imgs.png">
            </div>
            <div class="kuang">
                    <ul id="us">
                        <li v-for="(item,key) in list" :key="key">
                            <div class="zimus">
                                <span class="zimuss">{{item.zimu}}</span>
                            </div>
                             <span class="name">{{item.name}}</span>
                             <span class="ck">
                                 <input type="radio" class="cck" :id="key" name="str">
                                 <label :for="key"><img  class="statuss" ></label>
                             </span>
                        </li>
                    </ul>
            </div>
        </div>

     <el-dialog
        id="pops"
           :visible.sync="dialogVisible"
          width="98%"
         >
        <div id="dds">

        </div>
             
              <div id="ttxx" >
            <p id="tex">
            本次游戏成绩:<span id="fenshu">100分</span>
            
            </p> 
            <p id="zuijia">
                历史最佳成绩:<span id="zuijias">80分</span>
            </p>
             <div class="bottom_but">
                    <img src="../assets/zaiwan.png" @click="zaiwan">
                      <img src="../assets/liji.png" class="right_but" @click="choujiang">
                 </div>
              </div>
        
         </el-dialog>
    </div>
</template>

<script>

import '../plugins/sudoku/jquery-1.11.0.js';

export default {
  data() {
    return {
        dialogVisible:false,
      arrImg: {
        cuo: require("../assets/cuo.png"),
        dui: require("../assets/dui.png")
      },

      list: [
        {
          zimu: "A",
          name: "撒哈拉沙漠",
          status: "init"
        },
        {
          zimu: "B",
          name: "撒哈拉沙漠",
          status: "init"
        },
        {
          zimu: "C",
          name: "撒哈拉沙漠",
          status: "init"
        }
      ]
    };
  },
  mounted() {
    let thi_s = this;
    $(".cck").change(function() {
      let index = $(".cck").index(this);
      if ($(this).prop("checked")) {
        $(".statuss")
          .eq(index)
          .attr("src", thi_s.arrImg["dui"]);
        $(".statuss")
          .eq(index)
          .show();
        $(".cck")
          .eq(index)
          .hide();
        $(".name")
          .eq(index)
          .css("opacity", 1);
        $(".zimuss")
          .eq(index)
          .css("opacity", 1);
        $(".zimus")
          .eq(index)
          .css("opacity", 1);
        $(".name")
          .eq(index)
          .css("color", "#c83c36");
        thi_s.dialogVisible=true
      }
    });
  },
  methods:{
      zaiwan(){
        this.dialogVisible=false;  
      },
      choujiang(){
        this.$router.push({path:"/phone/firstpage"})
      }
  }
};
</script>
<style>
#fenshu{
    color: #ff0000 
}
.el-dialog__body{
    height: 100%
}
#ddvs{
    position: relative;
    width: 90%;
    height: 70px;

    top: 30px;
}
.bottom_but{
    width: 100%;
    height: 100px;
    position: absolute;
  bottom: 20%;
  padding-top: 16px;
  text-align: center;

}
.bottom_but img{
    width: 130px;
    height: 50px;
    
}
.right_but{
    margin-left: 15px;
}
#tex{
    position: absolute;
    width: 160px;
    left: 50%;
    margin-left: -80px;
color: #330000;
    height: 80px;
    top: 30%;
     padding-top: 15px;
     text-align: center;
}   
#zuijias{
    color: #ff0000;
    
}
#zuijia{
     position: absolute;
    width: 160px;
    left: 50%;
    margin-left: -80px;
    color: #330000;
    height: 80px;
    top: 35%;
     padding-top: 15px;
     text-align: center;
}
#stu{
    width: 100%;
    position: relative;

}
#ttxx{
width: 350px;
    height: 100%;
    position: relative;
    bottom: 0px;
    background-image: url(../assets/chenggong.png);
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: 1000;
    left: 50%;
    margin-left: -180px
}

#pops .el-icon-close{
display: none;
}
#pops .el-dialog__wrapper{
    overflow: hidden;
}
#pops{
    width: 90%;
    height: 500px !important;
    background: none !important;
    -webkit-box-shadow:none !important;
    position: absolute;
    left: 50%;
    margin-left: -42%;
}
#pops .el-dialog .el-dialog__body{
padding: 0px 0px;
}
#pops .el-dialog{
  height: 100%;
  width: 100% !important;
  background: none 
}
</style>

<style scoped>

/* <img src="../assets/yes.png" class="imggs"> */

.statuss {
  width: 30px;
  height: 30px;
}
.cck {
}
.ck {
  float: right;
  margin-right: 20%;
}
.name {
  font-family: MyNewFont;
  opacity: 0.8;
  color: #e29996;
}
.statuss {
  display: none;
}
.zimus {
  font-family: MyNewFont;
  font-size: 16px;
  display: inline-block;
  width: 45px;
  height: 45px;
  background-image: url("../assets/yes.png");
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: center;
  opacity: 0.6;
}
.kuang {
  width: 70%;
  height: 180px;
  position: absolute;
  top: 49%;
  left: 50%;
  margin-left: -35%;
  padding-top: 15px;
}
.imgg img {
  width: 100%;
  height: 100%;
}
.imgg {
  width: 70%;
  height: 100px;
  position: absolute;
  top: 32%;
  text-align: center;
  left: 50%;
  margin-left: -35%;
}
.ps {
  color: #000;
  font-family: MyNewFont;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
}
.titles {
  width: 100%;
  height: 50px;
  position: absolute;
  top: 23%;
}

#nn {
  position: relative;
  bottom: 3px;
}
.ppp {
  color: #c83c36;
  font-weight: bold;
  font-family: MyNewFont;
  font-size: 18px;
}
@font-face {
  font-family: "MyNewFont"; /*字体名称*/
  src: url("../font/方正卡通简体.ttf"); /*字体源文件*/
}
ul {
  margin: 0px 0px;
  padding: 0px 0px;
  list-style: none;
}

#us li {
  line-height: 35px;
  height: 60px;
}
p {
  margin: 0px 0px;
  padding: 0px 0px;
}
#ttle {
  width: 100%;
  height: 60px;
  position: absolute;
  top: 12%;
  line-height: 60px;
  text-align: center;
}
#baks {
  background-image: url("../assets/dati_ye.png");
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: 100%;
  position: relative;
}
.mui-content {
  width: 100%;
  height: 100%;
}
</style>
