//派奖设置
<template>
  <div class="container">
    <div class="send">
      <el-form ref="form" label-width="100px">
        <p class="content1">
          <span>抽奖门槛：</span>
          游戏成绩达到
          <el-input v-model="input1" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" onblur="this.v();" placeholder="请输入内容" class="nns" />分，极为挑战成功，获得抽奖机会。
          <span class="ansInfo1">游戏成绩最高为100分</span>
        </p>
        <p class="content2">
          <span>派奖方式：</span>
          <el-radio-group v-model="radio1">
            <el-radio label="1" checked>抽奖</el-radio>
          </el-radio-group>
          <span class="ansInfo2">活动发布后，派奖方式不能更改</span>
        </p>
        <p class="content3">
          <span>单人总抽奖机会：</span>
          <el-radio-group v-model="radio2">
            <el-radio label="1" checked>限制</el-radio>
            <el-radio label="0">不限制</el-radio>
          </el-radio-group>
          <span v-show="limit" class="lim">
             每人最多有 <el-input class="counts" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" onblur="this.v();" v-model="input2"></el-input>次
          </span>
        </p>
        <p class="content4">
          <span>每人每日抽奖机会：</span>
          <el-input class="counta" v-model="input3" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" onblur="this.v();"></el-input>次
        </p>
        <p class="content4">
          <span>每人中奖机会：</span>

          <span>每人最多中奖 <el-input class="counta" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" onblur="this.v();" v-model="input4 "></el-input>次</span>
        </p>
        <p class="content4">
          <span>总中奖率：</span>
          <el-input class="counta" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" onblur="this.v();" v-model="input5"></el-input>%
        </p>
      </el-form>

    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    data() {
      return {
        radio1:'',//派奖方式
        radio2:'',
        input1:'',//游戏成绩达到
        input2:'',//每人最多有
        input3:'',//每人每日抽奖机会
        input4:'',//每人最多中奖
        input5:'',//总中奖率
        limit:false,
        raward_data:'',//渲染接口数据
        raward_send:'',//保存后接口数据
        dataStatus:0,
      }
    },
    created(){
      // this.saveAward()
    },
    mounted(){
      var token = sessionStorage.getItem('token')
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/dt/activitySetup/init?token="+token,//数据初始化接口
        params: {},
      }).then(res => {
        let setting_dtData=JSON.stringify(res.data.data)
        sessionStorage.setItem("Datadt",setting_dtData)
        this.dataStatus=this.$route.query.dataStatus
        if(this.dataStatus===undefined){
          this.partAward()
        }else if (this.dataStatus==='1') {
          this.partAward1()
        }
      })

    },
    computed:{
      ...mapState(['setting_dtData']),
      ...mapActions(['saveDatadt'])
    },
    updated(){

      if(this.dataStatus===undefined){
        this.saveAward()
      }else if (this.dataStatus==='1') {
        this.saveAward1()
      }
    },
    methods: {
      partAward(){
        let Data = sessionStorage.getItem('Datadt')
        this.raward_data = JSON.parse(Data).dtAwardSendSetup
        this.input1=this.raward_data.winScore
        this.radio1=Number(this.raward_data.sendType).toString()
        this.radio2=Number(this.raward_data.singleTotalDrawLimit).toString()
        if(this.radio2==0){
          this.limit=false
        }else {
          this.limit=true
        }

        this.input2=this.raward_data.singleDrawCount
        this.input3=this.raward_data.singleDayDrawCount
        this.input4=this.raward_data.singleWinTotalCount
        this.input5=this.raward_data.probability

      },
      partAward1(){

        this.raward_data = this.$route.query.newdtData.dtAwardSendSetup
        this.input1=this.raward_data.winScore
        this.radio1=Number(this.raward_data.sendType).toString()
        this.radio2=Number(this.raward_data.singleTotalDrawLimit).toString()
        if(this.radio2==0){
          this.limit=false
        }else {
          this.limit=true
        }
        this.input2=this.raward_data.singleDrawCount
        this.input3=this.raward_data.singleDayDrawCount
        this.input4=this.raward_data.singleWinTotalCount
        this.input5=this.raward_data.probability

      },
      saveAward(){
        let Data = sessionStorage.getItem('Datadt')
        this.raward_send = JSON.parse(Data).dtAwardSendSetup
       this.raward_send.winScore= this.input1
     this.raward_send.sendType= this.radio1
      this.raward_send.singleTotalDrawLimit=this.radio2==0?false:true
        if(this.radio2==0){
          this.limit=false
        }else {
          this.limit=true
        }
        this.raward_send.singleDrawCount=this.input2
       this.raward_send.singleDayDrawCount= this.input3
        this.raward_send.singleWinTotalCount=this.input4
       this.raward_send.probability= this.input5
        this.$store.state.setting_kjData.dtAwardSendSetup = this.raward_send
        this.$bus.emit("send_award", this.raward_send)
      },
      saveAward1(){

        this.raward_send = this.$route.query.newdtData.dtAwardSendSetup
       this.raward_send.winScore= this.input1
     this.raward_send.sendType= this.radio1
      this.raward_send.singleTotalDrawLimit=this.radio2==0?false:true
        if(this.radio2==0){
          this.limit=false
        }else {
          this.limit=true
        }
        this.raward_send.singleDrawCount=this.input2
       this.raward_send.singleDayDrawCount= this.input3
        this.raward_send.singleWinTotalCount=this.input4
       this.raward_send.probability= this.input5
        this.$store.state.setting_kjData.dtAwardSendSetup = this.raward_send
        this.$bus.emit("send_award", this.raward_send)
      },
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    position: relative;
    z-index: 9;
  }
  .send{
    margin-top: 20px;
   p{
     font-size: 14px;
     margin-top: 20px;
     color:#565656;
   }}
  .nns{
    width: 130px;
    height: 30px;
  }
  .content1{
    font-size: 14px;
    color:#565656;
    .ansInfo1{
      font-size: 12px;
      color: #a1a1a1;
    }
  }
  .content2 {
    font-size: 14px;
    color: #565656;
    .ansInfo2 {
      font-size: 12px;
      color: #a1a1a1;
      margin-left: 50px;
    }
  }
  .content3{
    .lim{
      margin-left: 30px;
      .counts{
        width: 80px;
        height: 40px;
      }
    }
  }
  .content4{
    .counta{
      width: 80px;
      height: 40px;
    }
  }
</style>
<style>
  .send .el-input__inner {
    height: 1rem;
  }
</style>
