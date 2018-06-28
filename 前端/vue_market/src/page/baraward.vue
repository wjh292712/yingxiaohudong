//砍价设置
<template>
  <div class="container">
    <div class="send">
      <el-form ref="form" label-width="100px">
        <!--<p>-->
          <!--<span>砍价金额范围(元)：</span>-->
          <!--<el-input v-model="input1" placeholder="请输入内容" class="nns" />-->
         <!--——-->
          <!--<el-input v-model="input2" placeholder="请输入内容"  class="nns"/>-->
        <!--</p>-->
        <!--<p>-->
          <!--<span>砍到底价成功概率：</span>-->
          <!--<el-input v-model="input3" placeholder="请输入内容" class="nns" />-->
          <!--<span>%</span>-->
        <!--</p>-->
        <p>
          <span>底价保留时长：</span>
          <el-input v-model="input4" placeholder="请输入内容" class="nns" />
          <span>小时</span>
        </p>
        <!--<p>-->
          <!--<span>不同商品，每人最多参与砍价数量：</span>-->
          <!--<el-input v-model="input5" placeholder="请输入内容" class="nns" />-->
          <!--<span>件</span>-->
        <!--</p>-->
        <p>
          <span>每人可为其他玩家帮砍：</span>
          <el-input v-model="input6" placeholder="请输入内容" class="nns" />
          <span>次</span>
        </p>
        <p>
        <!--<el-form-item label="用户端是否显示排行榜" >-->
          <span>用户端是否显示排行榜</span>
          <el-radio-group v-model="radio1">
            <el-radio label="1" checked>是</el-radio>
            <el-radio label="0">否</el-radio>

          </el-radio-group>
        <!--</el-form-item>-->
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
        // input1:'',
        // input2:'',
        // input3:'',
        input4:'',
        input5:'',
        input6:'',
        input7:'',
        raward_data:'',//渲染接口数据
        raward_send:'',//保存后接口数据
        dataStatus:0,
      }
    },
    created(){
      // this.saveAward()
    },
    mounted(){
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/kj/activitySetup/init",//数据初始化接口
        params: {},
      }).then(res => {
        let _this=this
        let setting_kjData=JSON.stringify(res.data.data)
        sessionStorage.setItem("Datakj",setting_kjData)
        this.dataStatus=this.$route.query.dataStatus
        if(this.dataStatus===undefined){
          this.partAward()
        }else if (this.dataStatus==='1') {
          this.partAward1()
        }
      })

    },
    computed:{
      ...mapState(['setting_kjData']),
      ...mapActions(['saveDatakj'])
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
        let Data = sessionStorage.getItem('Datakj')
        this.raward_data = JSON.parse(Data).kjBargainSetup
        this.input4=this.raward_data.holdTime // 底价保留时长
        this.input5=this.raward_data.singleUserBargainNum //每人最多参与砍价数量
        this.input6=this.raward_data.singleUserHelpNum //一人能为多少玩家助力
        this.radio1=Number(this.raward_data.topShow).toString()//用户端是否显示
      },
      partAward1(){
        this.raward_data = this.$route.query.newkjData.kjBargainSetup
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
      saveAward1(){
        this.raward_send = this.$route.query.newkjData.kjBargainSetup
        this.raward_send.holdTime= this.input4
        this.raward_send.singleUserBargainNum = this.input5
        this.raward_send.singleUserHelpNum = this.input6
        this.raward_send.topShow = this.radio1
        _this.$store.state.setting_kjData.kjBargainSetup = this.raward_send
        _this.$bus.emit("send_award", this.raward_send)
      }
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
      margin-top: 10px;
    }}
 .nns{
   width: 150px;
   height: 30px;
 }
  /*.subnnn{*/
    /*font-size: px;*/
  /*}*/
</style>
<style>
  .send .el-input__inner {
    height: 1rem;
  }
</style>
