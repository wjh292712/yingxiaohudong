<template>
  <div class="main">
    <div class="content">
      <div class="basic_data">
        <div class="basic_left">
          <i class="icon"></i>
          <span class="basic_title">{{basicData}}</span>
        </div>
        <div class="basicconent">
          <ul class="basic_con">
            <!--<li v-for="(item,index) in basicList" class="list_info" :key="index">-->
              <!--<span>{{item.name}}</span>-->
              <!--<span>{{item.people}}</span>-->
              <!--<span>{{item.pepinfo}}</span>-->
              <!--<span>{{item.rewordData}}</span>-->
              <!--<span>{{item.rewordPrice}}</span>-->
            <!--</li>-->
            <li class="list_info">
              <span>累计浏览人数</span>
              <span>1788554</span>
              <span>浏览次数8776次</span>
            </li>
            <li class="list_info">
              <span>累计参与人数</span>
              <span>8989</span>
              <span>参与转化率：56%</span>
            </li>
            <li class="list_info">
              <span>累计分享人数</span>
              <span>7182</span>
              <span>分享次数8778次</span>
            </li>
            <li class="list_info4">
              <span>累计获奖人数</span>
              <span>5680</span>
              <span>发放奖品8978个</span>
              <span>中奖率:80%</span>
              <span>奖品总金额：xxx元</span>
            </li>
          </ul>
        </div>
      </div>
      <charts/>
    </div>
  </div>
</template>

<script>
  // import "@/js/echarts.min.js"
  import charts from './chartsBasic'
  export default {
    data() {
      return {
        basicData: '基础数据',
        basicList: [
          {
            name: "本月退款",
            people: "1788554",
            pepinfo: "浏览次数8776次"
          }, {
            name: "累计参与人数",
            people: "1788554",
            pepinfo: "浏览次数8776次"
          }, {
            name: "累计分享人数",
            people: "1788554",
            pepinfo: "浏览次数8776次"
          }, {
            name: "累计获奖人数",
            people: "1788554",
            pepinfo: "浏览次数8776次",
            rewordData: '累计中奖概率',
            rewordPrice: '奖品总金额1000元',
          },
        ]
      }
    },
    methods:{

    },
    components:{
      charts
    }
  }
</script>

<style lang="scss" scoped>
  .basic_data {

    width: 100%;
    margin-top: 20px;
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
    .basicconent {
      width: 100%;
      height: 248px;
      .basic_con {
        padding: 22px 0px 50px 20px;
        overflow: hidden;
        .list_info {
          width: 242px;
          height: 173px;
          background: #FFFFFF;
          border: 1px solid #E8E8E8;
          float: left;
          margin-right: 20px;
          padding-left: 40px;
          span:nth-child(1) {
            display: block;
            font-family: MicrosoftYaHei;
            font-size: 18px;
            color: #000000;
            letter-spacing: 0;
            margin-top: 29px;
          }
          span:nth-child(2) {
            display: block;
            font-family: MicrosoftYaHei;
            font-size: 28px;
            color: #FE4D1E;
            letter-spacing: 0;
            margin-top: 19px;
          }
          span:nth-child(3) {
            display: block;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            color: #9B9B9B;
            letter-spacing: 0;
            margin-top: 14px;
          }
          span:nth-child(4) {
            display: block;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            color: #9B9B9B;
            letter-spacing: 0;
          }
          span:nth-child(5) {
            display: block;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            color: #9B9B9B;
            letter-spacing: 0;
          }
        }
        .list_info4 {
          width: 242px;
          height: 173px;
          background: #FFFFFF;
          border: 1px solid #E8E8E8;
          float: left;
          margin-right: 20px;
          padding-left: 40px;
          span:nth-child(1) {
            display: block;
            font-family: MicrosoftYaHei;
            font-size: 18px;
            color: #000000;
            letter-spacing: 0;
            margin-top: 20px;
          }
          span:nth-child(2) {
            display: block;
            font-family: MicrosoftYaHei;
            font-size: 28px;
            color: #FE4D1E;
            letter-spacing: 0;
            margin-top: 6px;
          }
          span:nth-child(3) {
            display: block;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            color: #9B9B9B;
            letter-spacing: 0;
            margin-top: 5px;
          }
          span:nth-child(4) {
            display: block;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            color: #9B9B9B;
            letter-spacing: 0;
          }
          span:nth-child(5) {
            display: block;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            color: #9B9B9B;
            letter-spacing: 0;
          }
        }
      }
    }

  }
</style>
