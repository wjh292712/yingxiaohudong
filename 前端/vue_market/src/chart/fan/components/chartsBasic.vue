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
          >

          </el-date-picker>
        </div>
        <div class="Day_time">
          <ul>
            <li v-for="(item,index) in pickerOptions2.shortcuts" class="data_Day" :key="index">
              <el-button @click="str(item.text)">{{item.text}}</el-button>
            </li>
          </ul>
          <el-button class="btn_data">统计</el-button>
          <a href="#" class="outdata">导出数据</a>
        </div>
        <div class="charts">
          <div id="main" :style="{width:'1100px',height:'420px'}">

          </div>
        </div>
      </div>
      <div class="basic_left">
        <i class="icon"></i>
        <span class="basic_title">{{timeData}}</span>
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
          >

          </el-date-picker>
        </div>
        <div class="Day_time">
          <ul>
            <li v-for="(item,index) in pickerOptions2.shortcuts" class="data_Day" :key="index">
              <el-button @click="str(item.text)">{{item.text}}</el-button>
            </li>
          </ul>
          <el-button class="btn_data">统计</el-button>
          <a href="#" class="outdata">导出数据</a>
        </div>
        <div class="charts">
          <div id="mychart" :style="{width:'1100px',height:'420px'}">

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
        thi_s: null,
        picker: null,
        basicData: '每日趋势图',
        timeData: '每小时趋势图',
        pickerOptions2: {
          shortcuts: [{
            text: '最近三天',

          }, {
            text: '最近一周',

          }, {
            text: '最近一月',

          }]
        },
        value6: '',
        value7: '',
        date: '',
      }
    },
    created() {

    },
    mounted() {
      this.getDate()
      this.drawLine()
      this.drawLineTime()
    },
    methods: {
      str(val) {
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
        $(".el-date-editor >.el-range-input").eq(0).val(pub.fmtDate(start))
        $(".el-date-editor >.el-range-input").eq(1).val(pub.fmtDate(end))
        //  //console.log(this.picker)
        // this.pickerOptions2.shortcuts[0].onClick(el)
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
            data: _this.date,
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
              data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 90, 230, 210]
            },
            {
              name: '参与人数',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '获奖人数',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '分享人数',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        });
      },
      drawLineTime() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('mychart'))

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
              data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 90, 230, 210]
            },
            {
              name: '参与人数',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '获奖人数',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '分享人数',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        });
      },
      getDate() {
        var d = new Date();
        var i = 2;
        var ary = [];
        for (var i = 0; i < 31; i++) {
          var month;
          var r = d.getDate() - 1;
          d.setDate(Math.abs(r));
          var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
          r < 0 ? month = d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth() : month = d.getMonth() + 1 < 10 ? '0' + parseInt(d.getMonth() + 1) : d.getMonth() + 1;
          var year = new Date().getFullYear();
          ary.push(month + '/' + day);
        }
        this.date = ary.reverse()
      }
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
</style>
