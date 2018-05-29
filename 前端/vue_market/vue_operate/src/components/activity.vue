<template>
  <div class="container">

    <!-- <span v-for='(item,index) in data1' :key='index'>
                                                                    {{time |formatDate(item.validityTimeStart)}}
                                                               </span> -->
    <header class="header">
      <p class="active">
        <span class="news"> 活动信息详情</span>
        <span class="temp">活动数据详情</span>
      </p>
      <span class="back">返回</span>
    </header>
    <section class="section">
      <div class="cent">
        <div class="basic">
          <span class="jiben">
            <span>基本信息</span>
          </span>
        </div>
        <div class="message">
          <div class="left">
            <p>
              <span class="grayness">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商户名称 :</span>
              <span>北京聚通达科技股份有限公司</span>
            </p>
            <p>
              <span class="grayness">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;活动名称 :</span>
              <span>活动名称</span>
            </p>
            <p>
              <span class="grayness">最大参与人数 :</span>
              <span>5万人以内</span>
            </p>
            <p>
              <span class="grayness">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;告警状态 :</span>
              <span>正常</span>
            </p>

          </div>
          <div class="right">
            <p>
              <span class="grayness">活动模板 :</span>
              <span>幸运大转盘</span>
            </p>
            <p>
              <span class="grayness">活动时间 :</span>
              <span>2018.02.01~2018.02.28</span>
            </p>
            <p>
              <span class="grayness">活动状态 :</span>
              <span>未发布</span>
            </p>
          </div>
        </div>
        <div class="send">
          <div class="draw">
            <span class="shezhi">
              <span>派奖设置</span>
            </span>
          </div>
          <div class="mode">
            <div class="left">
              <p>
                <span class="grayness">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;派奖方式 :</span>
                <span>抽奖</span>
              </p>
              <p>
                <span class="grayness">&nbsp;&nbsp;每人每日抽奖 :</span>
                <span>2次</span>
              </p>
              <p>
                <span class="grayness">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;派发规则:</span>
                <span>按奖项中奖概率派发</span>
              </p>
            </div>
            <div class="right">
              <p>
                <span class="grayness">单人总抽奖机会 :</span>
                <span>限制（每人10次）</span>
              </p>
              <p>
                <span class="grayness">每人最多中奖 :</span>
                <span>2次</span>
              </p>
            </div>
          </div>
        </div>
        <div class="award">
          <div class="received">
            <span class="prize">
              <span>奖项信息</span>
            </span>
          </div>
          <div class="theatre">
            <!-- {{time | formatDate(item.startTime)}} -->
            <!-- {{time|formatDate(timer)}} -->

            <Table border :columns="columns1" :data="data1">
            </Table>
          </div>
        </div>
        <div class="win">
          <!-- <div class="bond">
                                            <span class="jackpot">
                                              <span>中奖信息</span>
                                            </span>
                                          </div> -->
          <!-- <div class="user">
                                              <Table border :columns="columns2" :data="data2"></Table>
                                            </div> -->
        </div>

      </div>

    </section>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      rewardDate: "",
      listArray: null,
      time: null,
      timelist: null,
      data1: null,
      // list:[1,2,3,4],
      columns1: [
        {
          title: '序号',
          key: 'name'
        },
        {
          title: '奖项',
          key: 'id'
        },
        {
          title: '奖品类型',
          key: 'awardType'
        },
        {
          title: '奖品名城',
          key: 'awardName'
        },
        {
          title: '奖品来源',
          key: 'sourceAward'
        },
        {
          title: '奖品图片',
          key: 'awardImage'
        },
        {
          title: '奖品数量',
          key: 'awardNum'
        },
        {
          title: '兑奖时间',
          key: 'validityTimeStart',
          render: (h, params) => {
            var oDate = new Date(params.row.validityTimeStart);
            var oYear = oDate.getFullYear();
            console.log(params)
            var oMonth = oDate.getMonth() + 1;
            var oDay = oDate.getDate();
            var oTime = oYear + '.' + (oMonth > 10 ? oMonth : '0' + oMonth) + '.' + (oDay > 10 ? oDay : '0' + oDay);//最后拼接时间
            // return oTime;
            return h('span', oTime);
          }
        },
        {
          title: '兑奖方式',
          key: 'prizeWays'
        },
        {
          title: '中奖概率',
          key: 'address'
        },
        {
          title: '每天最多派发',
          key: 'dateMaxSend'
        }
        // render
      ],
      //第二个表格
      // columns2: [
      //   {
      //     title: '用户',
      //     key: 'name'
      //   },
      //   {
      //     title: '奖品类型',
      //     key: 'awardType'
      //   },
      //   {
      //     title: '奖品',
      //     key: 'address'
      //   },
      //   {
      //     title: '中奖时间',
      //     key: 'address'
      //   },
      //   {
      //     title: '中奖状态',
      //     key: 'address'
      //   },
      //   {
      //     title: '兑奖时间',
      //     key: 'address'
      //   },
      // ],
      //data1的注释
      data1: [
        {
          name: '1',
          age: '奖项一',
          address: '无',
          date: '364732659803274',
          validityTimeStart: "1524021303000"
        },
        {
          name: '2',
          age: '奖项二',
          address: '流量券',
          date: '2016-10-01',
          validityTimeStart: "1524021303000"
        },
        {
          name: '3',
          age: '',
          address: '流量券',
          date: '2016-10-02',
          validityTimeStart: "1524021303000"
        },
      ],

      //data2的注释
      // data2: [
      //   {
      //     name: '13287890989',
      //     age: '流量券',
      //     address: '100M流量券',
      //     date: '2016-10-03'
      //   },
      //   {
      //     name: '2',
      //     age: 24,
      //     address: '无',
      //     date: '2016-10-01'
      //   },
      // ]
    }
  },
  created() {
    const _this = this;
    // let serverURL = "http://center.marketing.yunpaas.cn"
    // console.log(this)
    // _this.$http({
    //   method: "get",
    //   url: "http://192.168.1.24:8080/activityAward/getByActivityId",
    //   data: {
    //   }
    // }, {
    //     activityId: 1
    //   }).then((response => {
    //     //  alert("666")
    //     // this.listArry.push(response.data.data)
    //     console.log(response)
    //     _this.data1 = response.data.data
    //     // console.log(_this.data1)
    //     // console.log(this.listArry)
    //   })).catch(response => {
    //     console.log(response)
    //   })
    console.log(this.time)
    var qs = require("qs");
    axios.post('http://center.marketing.yunpaas.cn/activityAward/getByActivityId', qs.stringify({
      activityId: 49
    }))
      .then(function(response) {
        _this.data1 = response.data.data;
        console.log(_this.data1)
        // console.log(response);
        // this.rewardDate=response
        // console.log('数据')

        // for (var item in _this.data1) {
        //   // _this.time.push(_this.data1[item].validityTimeStart)
        //   console.log(_this.time)
        // }
        // for(var i=0;i<_this.columns1.length;i++){
        //    console.log(_this.columns1[i].key);
        //   //  var timeArr=_this.columns1[i].key;
        //   //  console.log(timeArr.validityTimeStart)
        // }
      })
      .catch(function(error) {
        console.log(error);
      });

  },
  mouunted() {
    this.creat()
    this.filterMethod()
  },
  methods: {
    creat() {

      const _this = this
      // let serverURL = "http://center.marketing.yunpaas.cn"
      // console.log(this)
      _this.$http({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/activityAward/getByActivityId",
        data: {
        }
      }).then((response => {
        // this.listArry.push(response.data.data)
        console.log(response)
        _this.data1 = res.data.data
        console.log(_this.data1)
        // console.log(this.listArry)
      })).catch(response => {
        console.log(response)
      })
    }
  },
  filters: {
    formatDate: function(time) {
      var oDate = new Date(time),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oTime = oYear + '.' + (oMonth > 10 ? oMonth : '0' + oMonth) + '.' + (oDay > 10 ? oDay : '0' + oDay);//最后拼接时间
      return oTime;
    },



  },


}
</script>
<style>
.container {
  width: 100%;
  height: auto;
  margin-top: 1.5rem;
}

.header {
  width: 90%;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
}

.header .news {
  margin-right: 1rem;
  color: #079BD3;
}

.header .active {
  font-size: 0.8rem;
}

.header .back {
  margin-right: 1.5rem;
  font-size: 0.8rem;
}

.section {
  width: 100%;
  height: auto;
  margin-top: 1.5rem;
}

.cent {
  width: 90%;
  margin: 0 auto;
  font-size: 0.5rem;
}

.active .temp {
  margin-right: 1.5rem;
}

.active .news {
  color: #000;
}

.cent .basic .jiben {
  border-left: 2px solid #414141;
}

.cent .basic .jiben span {
  margin-left: 0.5rem;
  font-size: 0.7rem;
  color: #333;
}

.cent .message {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* border: 1px solid #ccc; */
}

.cent .message .left {
  width: 50%;
  /* background: #f4f4f4; */
}

.cent .message .left p {
  margin-left: 8%;
  font-size: 0.5rem;
  margin-top: 1rem;
}

.cent .message .right {
  width: 50%;
}

.cent .message .right p {
  margin-left: 8%;
  font-size: 0.5rem;
  margin-top: 1rem;
}

.cent .send {
  margin-top: 1.5rem;
}

.cent .send .shezhi {
  border-left: 2px solid #414141;
}

.cent .send .shezhi span {
  margin-left: 0.5rem;
  font-size: 0.7rem;
  color: #333;
}

.cent .mode {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* border: 1px solid #ccc; */
}

.cent .mode .left {
  width: 50%;
  /* background: #f4f4f4; */
}

.cent .mode .left p {
  margin-left: 8%;
  font-size: 0.5rem;
  margin-top: 1rem;
}

.cent .mode .right {
  width: 50%;
}

.cent .mode .right p {
  margin-left: 8%;
  font-size: 0.5rem;
  margin-top: 1rem;
}

.cent .award {
  margin-top: 1.5rem;
}

















































































































































































































































/* .cent .award  span {

} */

.cent .award {
  margin-top: 1.5rem;
}

.cent .received .prize {
  border-left: 2px solid #414141;
}

.cent .received .prize span {
  margin-left: 0.5rem;
  font-size: 0.7rem;
  color: #333;
}


.cent .win {
  margin-top: 1.5rem;
}

.cent .bond .jackpot {
  border-left: 2px solid #414141;
}

.cent .bond .jackpot span {
  margin-left: 0.5rem;
  font-size: 0.7rem;
  color: #333;
}

.grayness {
  color: #949494;
}
</style>
