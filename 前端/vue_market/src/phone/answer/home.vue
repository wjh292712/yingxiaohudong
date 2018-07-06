<template>
    <div id="mains">
        <div id="bak_img" :style="{'background-image':'url('+background_img+')'}">
            <p class="pps" v-if="shows">
                已有<span id="num">{{renshu}}</span>人参与挑战
            </p>
            <div id="but_div" @click="datis">
                    <img src="@/assets/dati.png"  >
            </div>
            <div id="ddvss">
                <span id="shuoming" @click="shuoming">游戏说明</span>
                <span id="split"></span>
                 <span id="jiangpin" @click="jiang">我的奖品</span>
            </div>
        </div>
         <el-dialog
         class="dialogs"
          title="提示"
           :visible.sync="dialogVisible"
          width="98%"
         >
           <el-tabs v-model="activeName2" >
    <el-tab-pane label="游戏说明" name="first">
                <ul id="uss">
                        <li>
                            <label>活动时间:</label>
                            <span id="times">{{fmtDate(startTime)}}--{{fmtDate(endTime)}}</span>
                        </li>
                        <li>
                            <label>游戏说明</label>
                            <span id="shuo">{{shuo}}</span>
                        </li>
                </ul>
    </el-tab-pane>
    <el-tab-pane label="我的奖品" name="second">
         <ul id="uulss">
        <li v-for="(item,key) in lists" :key="key" :class="{'oderlist':key!=0}">
           <div id="price">
            ￥<span id="spp">{{item.award_name}}</span>
            <p>{{fmtDate(item.win_time)}}</p>
        </div>
        </li>
      </ul>

    </el-tab-pane>
  </el-tabs>
         </el-dialog>
    </div>
</template>

<script>
import publics from "static/public.js";
export default {
  data() {
    return {
      background_img:require("@/assets/home.png"),
      dialogVisible: false,
      activeName2: "first",
      startTime:"",
      endTime:"",
      shuo:"",
      renshu:"",
      shows:true,
      lists:[]
    };
  },
  created(){
publics.loadings(this)
  },
  mounted() {
    let uul = location.href;
    uul = uul.split("activityId=")["1"];
    this.$http
      .get(publics.answer_initActivity+"?id=" + uul)
      .then(function(res) {
      let str  = res.data.data.baseSetup;
      let AllCount  = res.data.data.AllCount
      let add_doubling =  res.data.data.baseSetup.add_doubling
      this.renshu = (AllCount*add_doubling)

    this.shows = res.data.data.baseSetup.shows
        this.startTime = str.start_date
        this.endTime = str.end_date
        this.shuo=str.rule
           publics.close_loadings()
      });

     this.$http
      .get(publics.getMyAward+"?activityId="+uul).then(function(res) {
           let aars = res.data.data
            this.lists = aars
   publics.close_loadings()

      })


  },
  methods: {
    shuoming_jiangpin(name) {
      this.dialogVisible = true;
      this.activeName2 = name;
    },
    jiang(){
   this.shuoming_jiangpin("second");
    },
    shuoming() {
      this.shuoming_jiangpin("first");
    },
    datis() {
      let url = location.href;
      url = url.split("activityId=")[1];

      this.$router.push({ path: "/phone/dati", query: { activityId: url } });
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
  }
};
</script>
<style>
.dialogs .el-dialog__body .el-tabs__content {
  max-height: 220px;
  overflow: auto;
}
</style>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
}
#jiangpin {
  color: #613605;
  margin-left: 20px;
}

#split {
  height: 20px;
  width: 3px;
  display: inline-block;
  background: #613605;
  position: relative;
  top: 5px;
  margin-left: 20px;
}
#shuoming {
  color: #613605;
  margin: auto auto;
}
.oderlist {
  margin-top: 10px;
}
#price {
  width: 98%;
  height: 100px;
  border: 1px solid #bebebe;
  text-align: center;
  padding-top: 30px;
}
#ddvss {
  position: absolute;
  width: 200px;
  left: 50%;
  top: 20px;
  margin-left: -100px;
  height: 50px;
  text-align: center;
}
#but_div img {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99999;
}
#but_div {
  width: 150px;
  height: 50px;
  position: absolute;
  bottom: 9%;
  left: 50%;
  margin-left: -75px;
}
#bak_img {
  width: 100%;
  height: 100%;
  background-size: 100%;
}
#bak_img {
  background-repeat: no-repeat;
  position: relative;
}
.pps {
  text-align: center;
  position: absolute;
  bottom: 18%;
  width: 200px;
  left: 50%;
  margin-left: -100px;
  color: #000;
}
#mains {
  width: 100%;
  height: 100%;
}
#num {
  color: #ff0000;
}
</style>
