<template>
  <div class="basic_charts">
    <div class="basic_chartDay">
      <div class="spe_con">
      <div class="basic_left">
        <i class="icon"></i>
        <span class="basic_title">{{basicData}}</span>
      </div>
      <div class="basic_Daytime">
        <div class="charts">
          <div id="mainsp" :style="{width:'1100px',height:'420px'}">

          </div>
        </div>
      </div>
      </div>
      <div class="visita">
      <div class="basic_left1">
        <i class="icon"></i>
        <span class="basic_title">访问来源</span>
      </div>
      <div class="basic_Daytime">
        <div class="charts">
          <div id="mychartsp" :style="{width:'500px',height:'420px'}">

          </div>
        </div>
      </div>
      </div>
      <div class="shareGo">
      <div class="basic_left2">
        <i class="icon"></i>
        <span class="basic_title">分享去向</span>
      </div>
      <div class="basic_Daytime">
        <div class="charts">
          <div id="mychartdp" :style="{width:'500px',height:'420px'}">

          </div>
        </div>
      </div>
      </div>
      <div class="detonate">
        <div class="basic_left3">
          <i class="icon"></i>
          <span class="basic_title">引爆点</span>
        </div>
        <div class="table-view">
          <el-table
            :data="tableData"
            style="width: 100%;text-align: center">
            <el-table-column
              prop="name"
              label="综合排名"
              width="100"
             >
            </el-table-column>
            <el-table-column
              prop="date"
              label="昵称"
              width="140"
             >
            </el-table-column>
            <el-table-column
              prop="status"
              label="地区"
              width="140">
            </el-table-column>
            <el-table-column
              prop="number"
              label="下级浏览次数"
              width="140">
            </el-table-column>
            <el-table-column
              prop="shuliang"
              label="下级参与次数"
              width="140">
            </el-table-column>
            <el-table-column
              prop="chuanbo_num"
              label="下级分享次数"
              width="140">
            </el-table-column>
            <el-table-column
              prop="active_caveat"
              label="综合指数"
              width="180">
            </el-table-column>
          </el-table>
        </div>
        <div>

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
        basicData: '传播层级',
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
      this.drawLineTime1()
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
        let myChart = this.$echarts.init(document.getElementById('mainsp'))

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
            data: ['浏览人数', '参与人数', '分享人数']
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
            data:["第一层","第二层","第三层","第四层","第五层","第六层","第七层","第八层",],
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
        let myChart = this.$echarts.init(document.getElementById('mychartsp'))

        console.log(this.date);
        let _this = this
        // 绘制图表
        myChart.setOption({
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data:['浏览人数','参与人数','分享人数']
          },

          xAxis : [
            {
              type : 'category',
              data : ['朋友圈','好友及群聊','图文消息','二维码','其他来源']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'浏览人数',
              type:'bar',
              data:[120,140,160,200,220]
            },
            {
              name:'参与人数',
              type:'bar',
              data:[120,130,150,180,250]
            },
            {
              name:'分享人数',
              type:'bar',
              data:[120,160,170,180,420,]
            },]
        });
      },
      drawLineTime1() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('mychartdp'))

        console.log(this.date);
        let _this = this
        // 绘制图表
        myChart.setOption({
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data:['浏览人数','参与人数','分享人数']
          },

          xAxis : [
            {
              type : 'category',
              data : ['朋友圈','好友及群聊']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'浏览人数',
              type:'bar',
              data:[120,140]
            },
            {
              name:'参与人数',
              type:'bar',
              data:[120,130]
            },
            {
              name:'分享人数',
              type:'bar',
              data:[120,160]
            },]
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
 .detonate{
   .table-view >>> .el-table th{
     background:#FBFBFB
   }
 }
  .basic_charts {
    width: 100%;
    margin-top: 20px;
    .basic_chartDay {
      overflow: hidden;
      .spe_con{
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
      .visita{
        float: left;
        margin-top: 40px;
        .basic_left1 {
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
      .shareGo{
        float: left;
        margin-top: 40px;
        .basic_left2 {
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
      .detonate{
        float: left;
        .basic_left3 {
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
        .table-view{
          margin-top :30px;
          width :95%;
          margin: 30px auto;
          height: 40px;
          table{
          width: 100%;
        }
        }
      }
    }

  }
</style>
<style>
  .el-table th{
    text-align: center;
  }
</style>
