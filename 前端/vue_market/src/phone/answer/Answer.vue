<template>
    <div class="mui-content">
        <div id="baks" :style="{'background-image':'url('+background_img+')'}">
              <div id="ttle">
                  <p class="ppp">
                      <span class="ts">第一题</span> / 共<span id="nn">{{nums}}</span>题
                  </p>
            </div>  
            <div class="titles mui-col-xs-8">
                    <p class="ps mui-col-xs-9">{{title}}</p>
                      <div class="imgg">
                <img src="@/assets/imgs.png" class="mui-col-xs-8">
                 <div class="kuang">
                    <ul id="us">
                        <li v-for="(item,key) in list" :key="key" >
                            <div class="zimus"  :style="{'background-image':'url('+success+')'}">
                                <span class="zimuss">{{item.zimu}}</span>
                            </div>
                             <span class="name">{{item.name}}</span>
                             <span class="ck">
                                 <input type="radio" class="cck" :id="item.id" name="str" :value="item.id" v-model="id">
                                 <!-- <label :for="item.id">
                                   <span v-if="status_flags[0]==true">
                                  <img  class="statuss" :src="arrImg['dui']">
                                   </span>
                                 <span v-else>
                               <img  class="statuss" :src="arrImg['cuo']">
                                 </span>
                                   
                                   
                                   </label> -->
                             </span>
                        </li>
                    </ul>
            </div>
            </div>
            
            </div>
          
           
        </div>

     <el-dialog
        id="pops"
           :visible.sync="dialogVisible"
          width="98%"
         >
        <div id="dds">

        </div>
               <!-- background-image: url(../assets/chenggong.png); -->
              <div id="ttxx1" :style="{'background-image':'url('+failure_img+')'}">
            <p id="tex">
            本次游戏成绩:<span id="fenshu">{{fenshu}}分</span>
            </p> 
            <p id="zuijia">
                历史最佳成绩:<span id="zuijias">{{histroy}}分</span>
            </p>
             <div class="bottom_but">
                    <img src="@/assets/zaiwan.png" @click="zaiwan">
                      <img src="@/assets/liji.png" class="right_but" @click="choujiang">
                 </div>
              </div>
        
         </el-dialog>

           <el-dialog
        id="pops"
           :visible.sync="dialogVisible1"
          width="98%"
         >
        <div id="dds">

        </div>
             
              <div id="ttxx" :style="{'background-image':'url('+success_img+')'}">
            <p id="tex">
            本次游戏成绩:<span id="fenshu">{{fenshu}}分</span>
            
            </p> 
            <p id="zuijia">
                历史最佳成绩:<span id="zuijias">{{histroy}}分</span>
            </p>
             <div class="bottom_but">
                    <img src="@/assets/zaiwan.png" @click="zaiwan">
                      <img src="@/assets/liji.png" class="right_but" @click="choujiang">
                 </div>
              </div>
        
         </el-dialog>
    </div>
</template>

<script>
import publics from "static/public.js";
export default {
  data() {
    return {
      background_img:require("@/assets/dati_ye.png"),
      success:require("@/assets/yes.png"),
      success_img:require('@/assets/chenggong.png'),
      failure_img:require("@/assets/shibai.png"),
      fenshu: 0,
      dialogVisible1: false,
      histroy: 0,
      dialogVisible: false,
      num: 0,
      index: 0,
      text:"",
      dataArr: [],
      id: 0,
      ids: [],
      status_flags: [],
      nums: 0,
      tag: 0,
      lis: [],
      arrs: [],
      title: "",
      main_id: [],
      arrImg: {
        cuo: require("@/assets/cuo.png"),
        dui: require("@/assets/dui.png")
      },

      list: []
    };
  },
created(){
publics.loadings(this)
},
  watch: {
    //监听属性
    id: {
      handler: function(val, oldval) {
        this.index++;
      if(this.dataArr[this.index-1].dtAnswerList[this.index-1].isRight){
        this.status_flags.push(true)
      }else{
         this.status_flags.push(false)
      }

        this.ids.push(val);

        this.arrs.push({
          id: this.main_id[this.index - 1],
          rightIdList: [this.ids[this.index - 1]]
        });

        if (this.index == this.dataArr.length) {
          publics.loadings(this)
          this.$http
            .post(
              publics.submit_answer+"?activityId=" +this.$route.query.activityId,this.arrs
            )
            .then(function(res) {
              if (!res.data.data.isWin) {
                this.fenshu = res.data.data.score;
                this.histroy = res.data.data.maxScore;
                this.dialogVisible = true;
                publics.close_loadings()
              } else {
                this.fenshu = res.data.data.score;
                this.histroy = res.data.data.maxScore;
                this.dialogVisible1 = true;
                 publics.close_loadings()
              }
            });
        } else {
          let thi_s =this
          setTimeout(function(){
          thi_s.list.length = 0;
          let strs = ["a", "b", "c", "d"];
          thi_s.tag += 1;
          let ls = thi_s.dataArr[thi_s.tag].dtAnswerList;
          thi_s.title = thi_s.dataArr[thi_s.tag].title;
          for (let i = 0; i < ls.length; i++) {
            thi_s.list.push({
              id: ls[i].id,
              name: ls[i].answerContent,
              zimu: strs[i]
            });
          }
          },1000)
         
        }
      },
      deep: true
    }
  },
  mounted() {
    let thi_s = this;
    this.timu();
  },
  methods: {
    timu() {
      this.list.length = 0;
      let strs = ["a", "b", "c", "d"];
      let activityId = this.$route.query.activityId;
      this.$http.get(publics.answer + "?id=" + activityId).then(data => {
          publics.close_loadings()
        if(data.data.status){
            this.nums = data.data.data.length;
        this.num = this.nums;
        this.title = data.data.data[0].title;
        this.dataArr = data.data.data;
        let ti = data.data.data[0].dtAnswerList;
        for (let i = 0; i < data.data.data.length; i++) {
          this.main_id.push(data.data.data[i].id);
        }
        for (let item in ti) {
          this.list.push({
            id: ti[item].id,
            name: ti[item].answerContent,
            zimu: strs[item]
          });
        }
        }else{
      publics.toast(this,data.data.msg)
        }
      
       
      });
    },
    zaiwan() {
      this.dialogVisible = false;
    },
    choujiang() {
      publics.loadings(this)
      let thi_ss=this
          sessionStorage.setItem("tts","1")
            this.$http.get(publics.lottery+"?activityId=1").then(data => {
              if(data.data.status){
                  publics.close_loadings()
              this.$router.push({ path: "guajiang",query:{tex:data.data.data.awardName}});
              }else{
                   publics.toast(this,data.data.msg)
              }
            
    })
 
  
    }
  }
};
</script>
<style>
#fenshu {
  color: #ff0000;
}
.el-dialog__body {
  height: 100%;
}
#ddvs {
  position: relative;
  width: 90%;
  height: 70px;

  top: 30px;
}
.bottom_but {
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 20%;
  padding-top: 16px;
  text-align: center;
}
.bottom_but img {
  width: 130px;
  height: 50px;
}
.right_but {
  margin-left: 15px;
}
#tex {
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
#zuijias {
  color: #ff0000;
}
#zuijia {
  position: absolute;
  width: 160px;
  left: 50%;
  margin-left: -80px;
  color: #330000;
  height: 80px;
  top: 40%;
  padding-top: 15px;
  text-align: center;
}
#stu {
  width: 100%;
  position: relative;
}
#ttxx {
  width: 350px;
  height: 100%;
  position: relative;
  bottom: 0px;
  background-repeat: no-repeat;
  background-size: 100%;

  z-index: 1000;
  left: 50%;
  margin-left: -180px;
}
#ttxx1 {
  width: 350px;
  height: 100%;
  position: relative;

  bottom: 0px;

  background-repeat: no-repeat;
  background-size: 100%;
  z-index: 1000;
  left: 50%;
  margin-left: -180px;
}
#pops .el-icon-close {
  display: none;
}
#pops .el-dialog__wrapper {
  overflow: hidden;
}
#pops {
  width: 90%;
  height: 430px !important;
  background: none !important;
  -webkit-box-shadow: none !important;
  position: absolute;
  left: 50%;
  margin-left: -42%;
  overflow: hidden;
}
#pops .el-dialog .el-dialog__body {
  padding: 0px 0px;
}
#pops .el-dialog {
  height: 100%;
  width: 100% !important;
  background: none;
}
</style>

<style scoped>
/* <img src="../assets/yes.png" class="imggs"> */

.statuss {
  width: 30px;
  height: 30px;
}
.cck {
  position: relative;
  z-index: 10;
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

.zimus {
  font-family: MyNewFont;
  font-size: 16px;
  display: inline-block;
  width: 45px;
  height: 45px;

  background-repeat: no-repeat;
  background-size: 100%;
  text-align: center;
  opacity: 0.6;
}
.kuang {
  width: 100%;
  height: 180px;
  position: absolute;
  top: 98%;
  padding-top: 20px;
}
.imgg img {
  margin: auto;
  height: 100%;
}
.imgg {
  width: 100%;
  height: 100px;
  position: absolute;
  text-align: center;
  margin-top: 25px;
}
.ps {
  color: #000;
  font-family: MyNewFont;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  margin: auto auto;
  top: 25px;
}
.titles {
  width: 100%;
  position: relative;
  top: 23%;
}

#nn {
  position: relative;
}
.ppp {
  color: #c83c36;
  font-weight: bold;
  font-family: MyNewFont;
  font-size: 18px;
}
@font-face {
  font-family: "MyNewFont"; /*字体名称*/
  src: url("../../font/方正卡通简体.ttf"); /*字体源文件*/
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
  margin-top: 15px;
}
#baks {
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
