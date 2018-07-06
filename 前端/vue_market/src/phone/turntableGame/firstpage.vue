<template>
  <div class="mui-content" style="height:100%" id="lottery">
   

    <section class="section" style="height:100%">
      <nav class="nav">
        <img src="@/assets/images/banner.jpg" alt="">
      </nav>
      <div class="cent">
        <div id="cccs">
           <div id="sdiv">
       <p id="paomadeng"><span>183*******895</span>&nbsp;&nbsp;&nbsp;
       <span>137*******545</span>&nbsp;&nbsp;&nbsp;
        <span>158*******935</span>&nbsp;&nbsp;&nbsp;
         <span>176*******241</span>&nbsp;&nbsp;&nbsp;
           <span>183*******264</span>&nbsp;&nbsp;&nbsp;
       </p>
        </div>
        <img src="@/assets/images/tell.png" alt="">
       
     
        </div>
       
      </div>
      <div class="setting">
        <div class="setting_img">
          <img src="@/assets/images/setting.png" alt="" id="bg" >
        </div>
        <!-- <img src="../assets/images/setting.png" alt=""> -->
        <div class="ten">
          <div class="box">
          <div id="ddvs"> 
                <div  style="opacity:1" class="ddf mui-col-xs-3 lottery-unit"  v-for="(item,key) in url" :key="key"  :class="classArr[key]" @click="str(key)">
               <img  class="img_bei"     :src="item" alt="111" name="pic">
              </div>
          </div>
          </div>
        </div>
      </div>
     <div class="change">
        <span>
        <span v-show="status_show">您今天还有{{choujiang_num}}次抽奖机会</span><br/>
          已有{{canyu_choujiang}}人参与活动
        </span>
      </div>
      <div class="btns">
        <span>
          <button class="left_btn" @click="guize">活动规则</button>
        </span>
        <span>
          <button class="right_btn" style="margin-left:15px" @click="jiangpin">我的奖品</button>
        </span>
      </div>
       
         <el-dialog
         class="dialogs"
          title="提示"
           :visible.sync="dialogVisible"
          width="98%"
         
         >
       <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="活动说明" name="first">
        <ul id="uuls">
            <li>
                <p>活动时间</p>
                <ul>
                    <li>
                      {{activityTime}}
                    </li>
                </ul>
            </li>
            <li>
               <p> 活动奖品</p>
                <ul>
                    <li v-for="(item,key) in jiangpinArr" :key="key" v-if="item.prizeName!='谢谢惠顾'">{{item.prizeName}}</li>
                </ul>
            </li>
            <li>
               <p> 活动规则</p>
                <ul>
                    <li>{{guize_name}}</li>
                </ul>
            </li>
            <li>
               <p> 主办单位</p>
                <ul>
                    <li>{{company}}</li>
                </ul>
            </li>
        </ul>
    </el-tab-pane>
    <el-tab-pane label="我的奖品" name="second">
      <ul id="uulss">
        <li v-for="(item,key) in listItem.data" :key="key" :class="{'oderlist':key!=0}">
           <div id="price">
            ￥<span id="spp">{{item.awardName}}</span>
            <p>{{fmtDate(item.createDate)}}</p>
        </div>
        </li>
      </ul>
       

    </el-tab-pane>
    
  </el-tabs>


         </el-dialog>


          <el-dialog
          class="zhonjiang_dialog"
           :visible.sync="dialogVisible1"
            width="98%"
          >
       <zhong-pop @close="closes"></zhong-pop>
          </el-dialog>
            <el-dialog
          class="zhonjiang_dialog"
           :visible.sync="dialogVisible2"
            width="98%"
          >
       <weizhong @seldesc="descs"><p slot="jiang">{{prizeName}}</p></weizhong>
          </el-dialog>

             <el-dialog
             title="提示"
          class="huodong"
           :visible.sync="dialoghuodong"
            width="98%"
          >
         <p>{{status_name}}</p>
             </el-dialog>


              <el-dialog
           @seldesc="descs"
          class="desc"
           :visible.sync="dialogdesc"
            width="98%"
          >
          <jiangpindesc :pkname="prizeName" :activitytime="activityTime" :shuoming="duijiang_shuoming" :mendianAddress="mendian_address" :phone="kehu_phone"></jiangpindesc>
             </el-dialog>
    </section>
  </div>
</template>


<script>
var click = true;
var time_index = 0;
import publics from "static/public.js";
import "@/plugins/sudoku/jquery-1.11.0.js";
import zhongPop from "@/components/zhongjiang_prop";
import weizhong from "@/components/weizhongjiang";
import jiangpindesc from "@/components/jiangpin_desc";

import Vue from "vue";
var bus = new Vue();
var thi_s = null;
export default {
  components: { zhongPop, weizhong,jiangpindesc },
  data() {
    return {
      activeName: "first",
      dialoghuodong: false,
      dialogdesc:false,
      prizeName: "",
      duijiang_shuoming:"",
      mendian_address:"",
      kehu_phone:"",
      arrDatas: [],
      listItem: [],
      jiangpinArr: [],
      status_name: "",
      status_flag: false,
      taburl: "",
      company: "",
      status_show:true,
      guize_name: "",
      choujiang_num: "",
      canyu_choujiang: "",
      activityTime: "",
      haha: "",
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      url: [],
      imgsArr: [0, 1, 2, 3, 5, 6, 7],
      classArr: {
        0: "lottery-unit-0",
        1: "lottery-unit-1",
        2: "lottery-unit-2",
        3: "lottery-unit-3",
        5: "lottery-unit-5",
        6: "lottery-unit-6",
        7: "lottery-unit-7",
        8: "lottery-unit-8"
      }
    };
  },
  created(){
publics.loadings(this)
  $("html").css("font-size","16px")
  $("body").css("font-size","16px")

},
  methods: {
     descs(){
       this.dialogVisible2=false
      this.dialogdesc=true;
    },
    guize() {
      this.guize_jiangpin("first")
    },

    guize_jiangpin(tag){
  let url = window.location.href;
      url = url.split("?")[1];
      this.$http
        .get(publics.turntable_Prize_Url + "?id=" + url.split("activityId=")[1])
        .then(data => {
          this.listItem = data.data;
        });
      this.dialogVisible = true;
      this.activeName = tag;
    },
    jiangpin() {
    this.guize_jiangpin("second")
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    closes() {
      this.dialogVisible1 = false;
       this.roll_ajax()
        lottery.init("lottery");
          lottery.speed = 100;
          roll(); //转圈过程不响应click事件，会将click置为false
    },
    str(index) {
      if (click) {
        if (index == 4) {
          this.roll_ajax()
          if (this.status_flag) {
            this.dialoghuodong = true;
            return;
          }
          lottery.init("lottery");
          lottery.speed = 100;
          roll(); //转圈过程不响应click事件，会将click置为false
        }
      }
    },
    //开始转动并调用转动带来的数据
    roll_ajax(){
      let  thi_s =this
   $.ajax({
            url:
              publics.startDrawAward_url+"?id=" +
              sessionStorage.getItem("acid"),
            type: "get",
            async: false,
            success: function(data) {
              if (data.status == false) {
                thi_s.status_name = data.msg;
                thi_s.status_flag = true;

                return;
              }

              lottery.id = data.data.id;
              var aar = thi_s.arrDatas;
              thi_s.duijiang_shuoming=data.data.exchangeDesc
              thi_s.mendian_address=data.data.exchangeAddress;
              thi_s.kehu_phone=data.data.exchangeTelephone
      
              lottery.prizeName = data.data.prizeName;
              if (data.data.id == -1) {
              }
              var indexs = aar.indexOf(data.data.id);

              if (indexs > 2) {
                lottery.prize = parseInt(indexs) + 1;
              } else {
                lottery.prize = parseInt(indexs);
              }

              //静态演示，随机产生一个奖品序号，实际需请求接口产生
            }
          });
    },
    fmtDate(obj) {
      var date = new Date(obj);
      var y = 1900 + date.getYear();
      var m = "0" + (date.getMonth() + 1);
      var d = "0" + date.getDate();
      var h = date.getHours();
      var t = date.getMinutes();
      var s = date.getSeconds();

      return (
        y +
        "-" +
        m.substring(m.length - 2, m.length) +
        "-" +
        d.substring(d.length - 2, d.length)
      );
    }
  },

  mounted() {
    setInterval(function() {
      time_index++;
      if (time_index == 150) {
        time_index = 0;
      }
      $("#paomadeng").css("left", time_index);
      // $("#paomadeng").css("left",time_index)
    }, 50);

    thi_s = this;
    let url = window.location.href;
    url = url.split("?")[1];
    sessionStorage.setItem("acid", url.split("activityId=")[1]);
    this.$http.get(publics.turntable_Url + "?" + url).then(data => {
       publics.close_loadings()
      console.log(data);
      if(data.data.status==false){
          this.dialoghuodong = true;
        this.status_flag = true;
          this.status_name = data.data.msg;
          return
      }
       
      let datas = data.data.data.jggActivitySetup;//活动基本信息
      let choujiang_data = data.data.data;
      let arrData = datas.jggAwardSetupExtendList;
      let status_show = datas.shows;
      this.choujiang_num =
        choujiang_data.myDrawCount < 0 ? 0 : choujiang_data.myDrawCount;//我的抽奖次数

      this.canyu_choujiang = choujiang_data.allDrawCount;//抽奖人数
      this.activityTime =
        this.fmtDate(datas.startDate) + "-" + this.fmtDate(datas.endDate);

      var d1 = new Date(this.fmtDate(datas.endDate));
      var d2 = new Date().getTime();
      d2 = this.fmtDate(d2);

      var t1 = new Date(d1);
      var t2 = new Date(d2);

      if (Date.parse(t2) - Date.parse(t1) > 0) {
        this.dialoghuodong = true;
        this.status_flag = true;
        this.status_name = "该活动已结束";
      }

      this.jiangpinArr = arrData;
      this.guize_name = data.data.data.activityName;
      this.company = datas.jggHighCompanySetup.company;
      this.url.push(arrData[0].prizeImg);
      this.url.push(arrData[1].prizeImg);
      this.url.push(arrData[2].prizeImg);
      this.url.push(arrData[3].prizeImg);
      this.url.push(require("@/assets/images/prize.jpg"));
      this.url.push(arrData[4].prizeImg);
      this.url.push(arrData[5].prizeImg);
      this.url.push(arrData[6].prizeImg);
      this.url.push(arrData[7].prizeImg);

      for (let key in arrData) {
        this.arrDatas.push(arrData[key].id);
      }
    });
  }
};
import "static_css/index.css";
var $lottery = null;
var $units = null;
var lottery = {
  index: -1, //当前转动到哪个位置，起点位置
  count: 0, //总共有多少个位置
  timer: 0, //setTimeout的ID，用clearTimeout清除
  speed: 20, //初始转动速度
  times: 0, //转动次数
  cycle: 50, //转动基本次数：即至少需要转动多少次再进入抽奖环节
  prize: -1, //中奖位置
  statuss: "",
  id: "",

  prizeName: "",
  init: function(id) {
    if ($("#" + id).find(".lottery-unit").length > 0) {
      $lottery = $("#" + id);
      $units = $lottery.find(".lottery-unit");
      this.obj = $lottery;
      this.count = $units.length;
      click = false;
      $lottery.find(".lottery-unit-" + this.index).addClass("active");
    }
  },
  roll: function() {
    var index = this.index;
    var count = this.count;
    var lottery = this.obj;

    $(lottery)
      .find(".lottery-unit-" + index)
      .removeClass("active");
    index += 1;
    if (index > count - 1) {
      index = 0;
    }
    $(lottery)
      .find(".lottery-unit-" + index)
      .addClass("active");
    this.index = index;
    return false;
  },
  stop: function(index) {
    this.prize = index;

    return false;
  }
};

function roll() {
  lottery.times += 1;
  lottery.roll(); //转动过程调用的是lottery的roll方法，这里是第一次调用初始化
  if (lottery.times > lottery.cycle + 10 && lottery.prize == lottery.index) {
    clearTimeout(lottery.timer);
    lottery.prize = -1;
    lottery.times = 0;
    click = true;

    if (lottery.id < 0) {
      thi_s.dialogVisible1 = true; ////未中奖
    } else {
      thi_s.prizeName = lottery.prizeName;
      thi_s.dialogVisible2 = true; //中奖
    }
  } else {
    if (lottery.times < lottery.cycle) {
      lottery.speed -= 10;
    } else if (lottery.times == lottery.cycle) {
    } else {
      if (
        lottery.times > lottery.cycle + 10 &&
        ((lottery.prize == 0 && lottery.index == 7) ||
          lottery.prize == lottery.index + 1)
      ) {
        lottery.speed += 110;
      } else {
        lottery.speed += 20;
      }
    }
    if (lottery.speed < 40) {
      lottery.speed = 40;
    }
    lottery.timer = setTimeout(roll, lottery.speed); //循环调用
  }
  return false;
}
</script>
<style>
.desc .el-dialog__header .el-dialog__headerbtn .el-icon-close{
  position: absolute;
  right: -11px;
  font-size: 30px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 50%;
  bottom: 35px;
}
.desc .el-dialog{
  border-radius: 20px;
  width: 86% !important;
}
.desc .el-dialog .el-dialog__body{
  padding: 3px 20px !important;

}
#paomadeng span {
  margin-left: 15px;
}
#paomadeng span:first-child {
  float: left;
  margin-left: 0px;
}
#paomadeng {
  position: relative;
}
.active {
  background: #ff0000;
}
.active img {
  opacity: 0.5 !important;
}
#sdiv {
  width: 64%;
  position: absolute;
  left: 71px;
  height: 25px;
  overflow: hidden;
}
.active {
  background: #ff0000;
}
.active img {
  opacity: 0.5 !important;
}
.el-message-box {
  width: 98% !important;
}
.el-message-box {
  height: 300px;
}
#cccs {
  position: relative;
}
body,
html {
  height: 100%;
  width: 100%;
}
.dialogs .el-dialog__body .el-tabs__content {
  max-height: 220px;
  overflow: auto;
}
.dialogs .el-dialog__body {
  background: #fff !important;
  padding: 30px 20px !important;
}
.section {
  overflow-x: hidden;
}

.zhonjiang_dialog .el-dialog__body {
  padding: 30px 20px !important;
}
.dialogs .el-dialog__header .el-dialog__headerbtn .el-icon-close {
  display: block !important ;
}
.oderlist {
  margin-top: 10px;
}
.zhonjiang_dialog .el-dialog__header .el-dialog__headerbtn {
  border: 1px solid #fff;
  border-radius: 50%;

  z-index: 9999;
}
.zhonjiang_dialog .el-dialog__header .el-dialog__headerbtn .el-icon-close {
  display: block !important ;
  color: #fff !important;
  font-size: 30px;
}
.zhonjiang_dialog .el-dialog {
  background: none !important;
  -webkit-box-shadow: none !important;
}
</style>

<style  scoped>
.ddf {
  float: left;
  height: 45%;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
body {
  height: 100%;
  width: 100%;
}
.section {
  height: 100% !important;
}

container {
  width: 100% !important;
  height: 100;
  background: #dec;
}
#bg {
  position: relative;
}

.header {
  width: 100%;
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  padding: 0 0.3rem;
  font-size: 16px;
}

.header a {
  color: #333;
  font-size: 16px;
  /*adding: 0 0.3rem; */
}

.section {
  width: 100%;
  height: 100% !important;
  background: #ffd800;
  flex: 1;
  overflow-y: scroll;
}

.section .nav {
  width: 100%;
  height: 120px;
}

.section .nav img {
  width: 100%;
  height: 100%;
}

.section .cent {
  width: 100%;
  height: 2rem;
  margin: 0 auto;
}
.mui-col-xs-3 {
  width: 26% !important;
}
#ddvs {
  width: 98%;
  height: 80%;
  position: absolute;
  left: 50%;
  margin-left: -53%;

  top: 25px;
}
.section .cent img {
  width: 80%;
  height: 80%;
  /* margin: auto; */
  text-align: center;
  margin-left: 10%;
}

.section .setting {
  width: 100%;
  height: 12rem;
  position: relative;
}

.section .setting img {
}

.section .change {
  width: 100%;
  height: 3rem;
  text-align: center;
  margin-top:100px;

}

.section .change span {
  height: 3rem;
  margin-top: 10px;
  color: #8a6322;
    font-size:14px;
}

.section .setting_img {
  width: 100%;
  height: 18rem;
  margin-left: 2%;
  position: relative;
}

.section .setting_img img {
  width: 95%;
  height: 100%;
}

.section .setting .ten {
  width: 100%;
  margin-left: 19%;
  height: 10.5rem;
  background-size: 100%;
  position: absolute;
  top: 0px;
}

.section .btns {
  width: 100%;
  height: 3rem;
  text-align: center;
  justify-content: space-between;

}

.section .btns span {
  height: 3rem;
  margin-top: 1rem;
  width: 6rem;
}

.section .btns span .left_btn {
  height: 2rem;
  background: #fc5566;
  width: 6rem;
  border-radius: 1rem;
  outline: none;
  outline: none;
  border: none;
  color: #fff;
}

.section .btns span .right_btn {
  height: 2rem;
  background: #fc5566;
  width: 6rem;
  border-radius: 1rem;
  outline: none;
  border: none;
  color: #f7c727;
}
</style>
<style scoped>
#spp {
  font-size: 22px;
  color: #000;
}
#price {
  width: 98%;
  height: 100px;
  border: 1px solid #bebebe;
  text-align: center;
  padding-top: 30px;
}
#uuls li {
  line-height: 25px;
}
#uuls li p {
  color: #000;
  font-size: 16px;
}
</style>



