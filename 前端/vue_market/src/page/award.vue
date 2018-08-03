<template>
  <div class="container">
    <div class="send">
      <el-form ref="form" :model="form" label-width="100px">
        <!--<p>-->
          <!--<span>派奖方式：</span>-->
          <!--<span>-->
          <!--<el-radio v-model="radio" label="1">抽奖</el-radio>-->
          <!--<span class="active">活动发布后，派奖方式不能更改</span>-->
        <!--</span>-->
        <!--</p>-->
        <p class="award_p">
          <span>单人总抽奖机会 : </span>
          <span>
          <el-radio v-model="radio1" label="1">限制</el-radio>
          <el-radio v-model="radio1" label="2">不限制</el-radio>
          <span class="more" v-show="limitCount" >每人最多有
            <span>
              <el-input class="ipt" v-model="input1" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" onblur="this.v();" maxlength="3">
              </el-input>
            </span>
            <span>次</span>
          </span>
        </span>
        </p>
        <p>
          <span>每人每日抽奖机会 : </span>
          <span>
          <el-input class="every" v-model="input2" onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" maxlength="3">
          </el-input>
          <span class="time">次</span>
        </span>
        </p>
        <p>
          <span>每人中奖机会 : </span>
          <span>每人最多中奖</span>
          <span>
          <el-input class="everys" v-model="input3" onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" maxlength="3">
          </el-input>
          <span class="times">次</span>
        </span>
        </p>
        <p>
          <span>派发规则 :</span>
          <span>
          <el-radio v-model="radio2" label="1">按奖项中奖概率派发</el-radio>
          <el-radio v-model="radio2" label="2">奖项均匀派发</el-radio>
        </span>
          <br>
          <span style="margin-left:4rem;color:#ccc;">所有奖项中奖概率加起来不能超过100% </span>
        </p>
        <div class=" homo">
          <ul>
            <li v-for="(item,index) in award_dataList">
              <p>
                <span>{{item.awardName}}</span>
                <span>10元话费券
            <el-input class="every" v-model="item.winRate" onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" maxlength="3">
            </el-input>
            <span>%</span>
          </span>
                <span style="margin-left:2rem">每天最多派发</span>
                <span>
            <el-input class="every" v-model="item.sendMaxDay" onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" maxlength="3" placeholder="选填">
            </el-input>
          </span>
              </p>
            </li>
          </ul>
        </div>
      </el-form>

    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';

  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource1: '',
          resource2: '',
          resource3: '',
          resource4: '',
          desc: ''
        },
        limitCount:false,
        radio: '1',
        radio1: '',
        radio2: '',
        input1: '',//抽奖次数
        input2: '',
        input3: '',
        datalist:'',
        award_data: "",//接口数据
        award_send: "",
        award_dataList:'',//派奖概率接口
        award_sendList:'',//派奖概率接口
        dataStatus:0,
      }
    },
    created() {

      // this.saveAward()
    },
    mounted() {
      var token = sessionStorage.getItem('token')
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/jgg/activitySetup/init?token="+token ,//数据初始化接口
        params: {},
      }).then(res => {
        this.datalist=res.data.data
        // let setting_data=JSON.stringify(res.data.data)
        // sessionStorage.setItem("Data",setting_data)
        this.dataStatus=this.$route.query.dataStatus
          this.partAward()
      })

    },
    computed: {
      ...mapState(['setting_data']),
      ...mapActions(['saveData']),
    },
    updated(){
        this.saveAward()
    },
    methods: {
      //派奖设置
      partAward() {
        if(this.dataStatus===undefined){

          this.award_data = this.datalist.jggAwardSendSetup
          this.award_dataList=this.datalist.jggAwardSetupExtendList
        }else if (this.dataStatus==='1') {
          this.award_data = this.$route.query.newjggData.jggAwardSendSetup
          this.award_dataList=this.$route.query.newjggData.jggAwardSetupExtendList
        }

        if (!this.award_data.singleTotalDrawLimit) {
          this.radio1 = '2'
        }
        this.radio1=this.award_data.singleTotalDrawLimit==false?'2':'1'
        if(this.radio1==1){
          this.limitCount=true
        }else {
          this.limitCount=false
        }
        this.input1=this.award_data.singleDrawCount
        this.input2 = this.award_data.singleDayDrawCount
        this.input3 = this.award_data.singleWinCount
        this.radio2 = this.award_data.sendRule==1?'1':'2'
      },

      //派奖保存
      saveAward() {

        if(this.dataStatus===undefined){

          this.award_send =this.datalist.jggAwardSendSetup
          this.award_sendList=this.datalist.jggAwardSetupExtendList
        }else if (this.dataStatus==='1') {
          this.award_send = this.$route.query.newjggData.jggAwardSendSetup
          this.award_sendList=this.$route.query.newjggData.jggAwardSetupExtendList
        }

        this.award_send.singleTotalDrawLimit = this.radio1 == 1 ? true : false
        if(this.radio1==1){
          this.limitCount=true
        }else {
          this.limitCount=false
        }
        this.award_send.singleDayDrawCount = this.input2
        this.award_send.singleWinCount = this.input3
        this.award_send.sendRule = this.radio2
        this.$store.state.setting_data.jggAwardSendSetup = this.award_send
        this.$store.state.setting_data.jggAwardSetupExtendList = this.award_sendList
        this.$bus.emit("send_award", this.award_send)
        // console.log(this.$store.state.setting_data.jggAwardSendSetup)
      },

      back(){
        this.$router.go(-1)
      },

    }
  }
</script>
<style lang="scss" scoped>
  .container {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 9;
  }

  .send {
    width: 100%;
  }

  .send p {
    font-size: 14px;
    margin-top: 2rem;
  }
  .send .award_p{
    margin-top: 0;
  }
  p .more span .ipt {
    width: 3rem;
    height: 10px;
  }

  p .more span {
    margin-left: 2rem;
  }

  p span .every {
    width: 4rem;
  }

  p span .time {
    margin-left: 1rem;
  }

  p span .everys {
    width: 3rem;
  }

  p span .times {
    margin-left: 1rem;
  }

  // .send p .active {
  //   color: red;
  //   margin-left: 1rem;
  // }
  .homo {
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 50px;
  }
</style>
<style>
  .send .el-input__inner {
    height: 1rem;
  }
</style>
