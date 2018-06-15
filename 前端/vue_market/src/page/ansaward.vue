//派奖设置
<template>
  <div class="container">
    <div class="send">
      <el-form ref="form" label-width="100px">
        <p class="content1">
          <span>抽奖门槛：</span>
          游戏成绩达到
          <el-input v-model="input1" placeholder="请输入内容" class="nns" />分，极为挑战成功，获得抽奖机会。
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
            <el-radio label="1" checked>
              <span @click="Toggle()">限制</span>
            </el-radio>
            <el-radio label="0">不限制</el-radio>
          </el-radio-group>
          <span v-show="limit" class="lim">
             每人最多有 <el-input class="counts" v-model="input2"></el-input>次
          </span>
        </p>
        <p class="content4">
          <span>每人每次抽奖机会：</span>
          <el-input class="counta" v-model="input3"></el-input>次
        </p>
        <p class="content4">
          <span>每人抽奖机会：</span>

          <span>每人最多中奖 <el-input class="counta" v-model="input4 "></el-input>次</span>
        </p>
        <p class="content4">
          <span>总中奖率：</span>
          <el-input class="counta" v-model="input5"></el-input>%
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
        radio1:'',
        radio2:'',
        input1:'',//游戏成绩达到
        input2:'',//每人最多有
        input3:'',//每人每次抽奖机会
        input4:'',//每人最多中奖
        input5:'',//总中奖率
        limit:false,
        raward_data:'',//渲染接口数据
        raward_send:'',//保存后接口数据
      }
    },
    created(){
      // this.saveAward()
    },
    mounted(){
      this.partAward()
    },
    computed:{
      ...mapState(['setting_kjData']),
      ...mapActions(['saveDatakj'])
    },
    updated(){

    },
    methods: {
      partAward(){
        let Data = sessionStorage.getItem('Datakj')
        this.raward_data = JSON.parse(Data).kjBargainSetup
        this.input4=this.raward_data.holdTime // 底价保留时长
        this.input5=this.raward_data.singleUserBargainNum //每人最多参与砍价数量
        this.input6=this.raward_data.singleUserHelpNum //一人能为多少玩家助力
        this.radio1=Number(this.raward_data.topShow).toString()//用户端是否显示
      },
      saveAward(){
        let Data = sessionStorage.getItem('Datakj')
        this.raward_send = JSON.parse(Data).kjBargainSetup
        this.raward_send.holdTime= this.input4
        this.raward_send.singleUserBargainNum = this.input5
        this.raward_send.singleUserHelpNum = this.input6
        this.raward_send.topShow = this.radio1
        _this.$store.state.setting_kjData.kjBargainSetup = this.raward_send
        _this.$bus.emit("send_award", this.raward_send)
      },
      Toggle(){
        this.limit=!this.limit
      }
    }
  }
</script>
<style lang="scss" scoped>
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
