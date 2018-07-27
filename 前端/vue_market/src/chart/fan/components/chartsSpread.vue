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
          <div id="mainsp" :style="{width:'1000px',height:'420px'}">
          </div>
          <div class="mainData" v-show="showmainData">
            <p class="cl">暂无数据</p>
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
          <div class="spData" v-show="showspData">
            <p class="cl">暂无数据</p>
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
          <div class="dpData" v-show="showdpData">
            <p class="cl">暂无数据</p>
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
              prop="coming"
              label="综合排名"
              width="100"
             >
            </el-table-column>
            <el-table-column
              label="昵称"
              width="140"
             >
              <template slot-scope="scope">
                <img :src="scope.row.head_img" alt="" class="images">
                <span>{{scope.row.nick_name}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="province"
              label="地区"
              width="140">
            </el-table-column>
            <el-table-column
              prop="page_man_num"
              label="下级浏览次数"
              width="140">
            </el-table-column>
            <el-table-column
              prop="join_man_num"
              label="下级参与次数"
              width="140">
            </el-table-column>
            <el-table-column
              prop="share_man_num"
              label="下级分享次数"
              width="140">
            </el-table-column>
            <el-table-column
              prop="score"
              label="综合指数"
              width="180">
            </el-table-column>
          </el-table>
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
        tableData:[],
        date: '',
        activityId:'',
        templateId:'',
        pageNum:[],
        joinNum:[],
        shareNum:[],
        showmainData:true,
        showspData:true,
        showdpData:true,

      }
    },
    created() {

    },
    mounted() {
let _this=this
      this.$bus.$on("chartdata", (activityId, templateUuid) => {
        this.falgs = true;
        this.$axios({
          method: "get",
          url:'http://center.marketing.yunpaas.cn/center/activity/shareData',
          params: {
            token: sessionStorage.getItem("token"),
            activityId: activityId,
            templateId: templateUuid
          }
        }).then(res => {
          console.log(res);
          this.pageNum=res.data.data.page_man_num
            this.joinNum=res.data.data.join_man_num
            this.shareNum=res.data.data.share_man_num
          if(this.pageNum.length!==0||this.joinNum.length!==0||this.shareNum.length!==0){
            this.showmainData=false
            this.drawLine()
          }else {
            this.showmainData=true
            this.drawLine()
          }
        });

        _this.$axios({
          method:'get',
          url:'http://center.marketing.yunpaas.cn/center/activity/OrderData',
          // url:'http://center.marketing.yunpaas.cn/center/activity/OrderData?activityId=73&templateId=2',
          params:{
            token: sessionStorage.getItem("token"),
            activityId:activityId,
            templateId:templateUuid
          }
        }).then(res=>{
          this.tableData=res.data.data

        })

      });

    },
    methods: {

      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('mainsp'))
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
              data: this.pageNum
            },
            {
              name: '参与人数',
              type: 'line',
              stack: '总量',
              data: this.joinNum
            },

            {
              name: '分享人数',
              type: 'line',
              stack: '总量',
              data: this.shareNum
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
          width :100%;
          margin: 30px auto;
          table{
          width: 100%;
        }
        }
      }
    }

  }
  .images{
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
 .mainData{
   position: absolute;
   left: 45%;
   top: 20%;
   font-size: 20px;
 }
 .spData{
   position: absolute;
   left: 20%;
   top: 60%;
   font-size: 20px;
 }
 .dpData{
   position: absolute;
   left:70%;
   top: 60%;
   font-size: 20px;
 }
</style>
<style>
  .el-table th{
    text-align: center;
  }
</style>
