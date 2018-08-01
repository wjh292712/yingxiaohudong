<template>
  <div class="basic_charts">
    <div class="basic_chartDay">
      <div class="basic_left">
        <i class="icon"></i>
        <span class="basic_title">{{basicData}}</span>
      </div>
      <div class="basic_Daytime">
        <div class="block">
          <el-date-picker
            v-model="date"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="getDay()"
          >
          </el-date-picker>
        </div>
        <div class="Day_time">
          <ul>
            <li v-for="(item,index) in pickerOptions2.shortcuts" class="data_Day" :key="index">
              <el-button @click="str(item.text,item.id)">{{item.text}}</el-button>
            </li>
          </ul>
          <!--<el-button class="btn_data">统计</el-button>-->
          <a href="#" class="outdata" @click="dataOut()">导出数据</a>
        </div>
        <div class="charts">
          <div id="main" :style="{width:'100%',height:'420px'}">

          </div>
          <div class="noDayData" v-show="showDayData">
            <p class="cl">暂无数据</p>
          </div>
        </div>
      </div>
      <br/>
      <div class="basic_left">
        <i class="icon"></i>
        <span class="basic_title">{{timeData}}</span>
      </div>
      <div class="basic_Daytime">
        <div class="block">
          <el-date-picker
            v-model="date1"
            type="date"
            placeholder="选择日期"
            @change="getDayTime()">
          </el-date-picker>

        </div>
        <div class="Day_time">

          <span class="date_allDay"><el-checkbox v-model="checked" @change="allDayTime()">全部日期</el-checkbox></span>
          <!--<el-button class="btn_data">统计</el-button>-->
          <a href="#" class="outdata" @click="dataOut1()">导出数据</a>
        </div>
        <div class="charts">
          <div id="mychart" :style="{width:'100%',height:'420px'}">

          </div>
          <div class="noData" v-show="showData">
            <p class="cl">暂无数据</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import pub from "static/public.js"

  export default {
    data() {
      return {
        arr:[],
        thi_s: null,
        picker: null,
        basicData: '每日趋势图',
        timeData: '每小时趋势图',
        pickerOptions2: {
          shortcuts: [{
            text: '最近三天',
            id: 3

          }, {
            text: '最近一周',
            id: 7

          }, {
            text: '最近一月',
            id: 30
          }]
        },
        value6: '',
        value7: '',
        date: [],
        date1: '',
        Datetime: [],
        checked: false,
        dateid: '',
        activityId:'',
        templateId:'',
        pageDayList: [],//每天
        joinDayList: [],
        awardDayList: [],
        shareDayList: [],

        pageList: [],//小时
        joinList: [],
        awardList: [],
        shareList: [],
        showDayData:true,
        showData:true,
      }
    },
    created() {

    },
    mounted() {
      this.$bus.$on("chartdata", (activityId, templateUuid) => {
        this.activityId=activityId
        this.templateId=templateUuid
      })

    },
    updated() {

    },
    methods: {
      getDay() {
        let thi_s = this
        var day1 = new Date(this.date[0])
        var day2 = new Date(this.date[1])
        var s1 = day1.getTime(), s2 = day2.getTime();
        var total = (s2 - s1) / 1000;
        var allDay = parseInt(total / (24 * 60 * 60));//计算整数天数
        this.dateid = allDay
        this.$axios({
          method:'post',
          url:'http://center.marketing.yunpaas.cn/center/activity/getDataByDay',
          params:{
            activityId:this.activityId,
            templateId:this.templateId,
            startTime:this.date[0].getTime(),
            endTime:this.date[1].getTime(),
          }
        }).then(res=>{
          let allList=res.data.data
          for (var key in allList) {

            thi_s.pageDayList.push(allList[key].pageNum)
            thi_s.joinDayList.push(allList[key].joinManNum)
            thi_s.awardDayList.push(allList[key].awardManNum)
            thi_s.shareDayList.push(allList[key].shareNum)
          }

          if(this.pageDayList.length!==0||this.joinDayList.length!==0||this.awardDayList.length!==0||this.shareDayList.length!==0){
            this.showDayData=false
          }
          this.getDate(this.dateid)
        })


      },
      getDayTime() {

        this.$axios({
          method: 'post',
          url: 'http://center.marketing.yunpaas.cn/center/activity/getDataByHourOnOneDay',
          params: {
            token: sessionStorage.getItem("token"),
            activityId: this.activityId,
            templateId: this.templateId,
            time:this.date1.getTime()
          }
        }).then(res => {
          console.log(res);
          this.pageList = res.data.data.pageManNumList
          this.joinList = res.data.data.joinManNumList
          this.awardList = res.data.data.awardManNumList
          this.shareList = res.data.data.shareManNumList
          this.drawLineTime()
          if( this.pageList.length!==0||this.joinList.length!==0||this.awardList.length!==0||this.shareList!==0){
            this.showData=false
          }

        })


      },
      str(val, id) {
        this.dateid = id
        let start = null;
        let end = null;
        if (val == "最近三天") {
          end = new Date();
          start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 3);

        } else if (val == "最近一周") {
          end = new Date();
          start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        } else if (val == "最近一月") {
          end = new Date();
          start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        }
        this.date = [pub.fmtDate(start), pub.fmtDate(end)]
        this.$axios({
          method:'post',
          url:'http://center.marketing.yunpaas.cn/center/activity/getDataByDay',
          params:{
            activityId:this.activityId,
            templateId:this.templateId,
            startTime:start.getTime(),
            endTime:end.getTime(),
          }
        }).then(res=>{
          let allList=res.data.data
          for (var key in allList) {
            this.pageDayList.push(allList[key].pageNum)
            this.joinDayList.push(allList[key].joinManNum)
            this.awardDayList.push(allList[key].awardManNum)
            this.shareDayList.push(allList[key].shareNum)
          }

          if(this.pageDayList.length!==0||this.joinDayList.length!==0||this.awardDayList.length!==0||this.shareDayList.length!==0){
            this.showDayData=false
          }
          this.getDate(this.dateid)
        })
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('main'))
        console.log(this.date);
        let _this = this
        // 绘制图表
        myChart.setOption({
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['浏览人数', '参与人数', '获奖人数', '分享人数']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              //saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: _this.Datetime,
            axisLabel: {
              interval: 0,
              rotate: 40,
            },

          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '浏览人数',
              type: 'line',
              stack: '总量',
              data: this.pageDayList.sort()
            },
            {
              name: '参与人数',
              type: 'line',
              stack: '总量',
              data: this.joinDayList.reverse()
            },
            {
              name: '获奖人数',
              type: 'line',
              stack: '总量',
              data: this.awardDayList.reverse()
            },
            {
              name: '分享人数',
              type: 'line',
              stack: '总量',
              data: this.shareDayList.reverse()
            }
          ]
        });
        this.pageDayList=[]
        this.joinDayList=[]
        this.awardDayList=[]
        this.shareDayList=[]
      },
      drawLineTime() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('mychart'))
        console.log(this.date);
        for (var i = 0; i < this.pageList.length; i++) {
         var cur=this.pageList[i]
          if(cur==null){
           cur=0
          }
        }
        for (var i = 0; i <this.joinList.length; i++) {
          var cur=this.joinList[i]
          if(cur==null){
            cur=0
          }
        }
       for (var i = 0; i <this.awardList.length; i++) {
          var cur=this.awardList[i]
          if(cur==null){
            cur=0
          }
        }
       for (var i = 0; i <this.shareList.length; i++) {
          var cur=this.shareList[i]
          if(cur==null){
            cur=0
          }
        }
        let _this = this
        // 绘制图表
        myChart.setOption({
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['浏览人数', '参与人数', '获奖人数', '分享人数']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              //saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
            axisLabel: {
              interval: 0,
              rotate: 40,
            },

          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '浏览人数',
              type: 'line',
              stack: '总量',
              data: this.pageList
            },
            {
              name: '参与人数',
              type: 'line',
              stack: '总量',
              data: this.joinList
            },
            {
              name: '获奖人数',
              type: 'line',
              stack: '总量',
              data: this.awardList
            },
            {
              name: '分享人数',
              type: 'line',
              stack: '总量',
              data: this.shareList
            }
          ]
        });
      },
      getDate(idx) {
        var d = new Date(this.date[1]);
        this.dateid = idx
        var i = 2;
        var ary = [];
        for (var i = 0; i < this.dateid; i++) {
          var month;
          var r = d.getDate() - 1;
          d.setDate(Math.abs(r));
          var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
          r < 0 ? month = d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth() : month = d.getMonth() + 1 < 10 ? '0' + parseInt(d.getMonth() + 1) : d.getMonth() + 1;
          var year = new Date().getFullYear();
          ary.push(month + '/' + day);
        }
        console.log(ary);
        this.Datetime = ary.reverse()
        this.drawLine()
      },
      allDayTime(){
        if(this.checked==true){
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/activity/getDataByHourOnManyDay',
            params:{
              token: sessionStorage.getItem("token"),
              activityId: this.activityId,
              templateId: this.templateId,
            }
          }).then(res=>{
            console.log(res);
            this.pageList = res.data.data.pageManNumList
            this.joinList = res.data.data.joinManNumList
            this.awardList = res.data.data.awardManNumList
            this.shareList = res.data.data.shareManNumList
            this.drawLineTime()
            if( this.pageList.length!==0||this.joinList.length!==0||this.awardList.length!==0||this.shareList!==0){
              this.showData=false
            }
          })
        }else {
          this.getDayTime()
        }
      },
      dataOut(){
        this.$axios({
          method:'get',
          url:'http://center.marketing.yunpaas.cn/center/excel/getDataByDay',
          params:{
            activityId:this.activityId,
            templateId:this.templateId,
            startTime:this.date[0].getTime(),
            endTime:this.date[1].getTime(),
          }
        }).then(res=>{
          window.location.href ='http://center.marketing.yunpaas.cn/center/excel/getDataByDay?activityId='+this.activityId+'&templateId='+this.templateId+'&startTime='+this.date[0].getTime()+'&endTime='+this.date[1].getTime()
        })
      },
      dataOut1(){
       if(this.checked==true){
         this.$axios({
           method:'post',
           url:'http://center.marketing.yunpaas.cn/center/excel/getDataByHourOnManyDay',
           params:{
             token: sessionStorage.getItem("token"),
             activityId: this.activityId,
             templateId: this.templateId,
           }
         }).then(res=>{
           window.location.href='http://center.marketing.yunpaas.cn/center/excel/getDataByHourOnManyDay?activityId='+this.activityId+'&templateId='+this.templateId
         })
       }else {
         this.$axios({
           method:'get',
           url:'http://center.marketing.yunpaas.cn/center/excel/getDataByHourOnOneDay',
           params:{
             token: sessionStorage.getItem("token"),
             activityId: this.activityId,
             templateId: this.templateId,
             time:this.date1.getTime()
           }
         }).then(res=>{
           window.location.href ='http://center.marketing.yunpaas.cn/center/excel/getDataByHourOnOneDay?activityId='+this.activityId+'&templateId='+this.templateId+'&time='+this.date1.getTime()
         })
       }
      },
    },
    components: {},
    computed: {}
  }
</script>

<style lang="scss" scoped>
  .basic_charts {
    width: 100%;
    margin-top: 20px;
    .basic_chartDay {
      .basic_left {
        .icon {
          display: inline-block;
          width: 4px;
          height: 15px;
          background: #FC7132;
        }
        .basic_title {
          font-family: MicrosoftYaHei;
          font-size: 18px;
          color: #000000;
          letter-spacing: 0;
          margin-left: 20px;
        }
      }
      .basic_Daytime {
        margin-top: 39px;
        .block {
          float: left;
          height: 28px;
          margin-left: 20px;
        }
        .Day_time {
          overflow: hidden;
          .date_allDay {
            margin-left: 20px;
          }
          ul {
            margin-left: 27px;
            .data_Day {
              float: left;
              background: #FFFFFF;
              margin-right: 10px;
              span {
                display: block;
                width: 78px;
                height: 28px;
                line-height: 28px;
                font-family: MicrosoftYaHei;
                font-size: 14px;
                color: #000000;
                letter-spacing: 0;
                border: 1px solid #E8E8E8;
                border-radius: 3px;
                text-align: center;
              }
            }
          }
          .btn_data {
            margin-left: 26px;
            height: 38px;
          }
          .outdata {
            text-decoration: underline;
            margin-left: 33px;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            color: #3486FC;
            letter-spacing: 0;
          }
        }
        .charts {
          margin-top: 45px;
        }
      }
    }

  }
  .noDayData{
    position: absolute;
    left: 45%;
    top: 43%;
    font-size: 20px;
  }
  .noData{
    position: absolute;
    left: 45%;
    top: 80%;
    font-size: 20px;
  }
</style>
