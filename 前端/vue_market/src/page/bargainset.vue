//右侧基础设置
<template>
  <div class="setting_wrap">
    <div class="setting_con">
      <div class="setting_header clearfloat">
        <!-- <div class="setting_button" @click="target()">基础设置</div> -->
        <!-- <div class="setting_button" @click="changeActive(index)" :class="{active_button:classActive == index}"  v-for="(item,index) in settingmsg" :key = "index" type="primary" plain>{{item}}</div> -->
      </div>
      <div class="setting_title">
        <el-tabs v-model="activeName2" @tab-click="tabChange(name)">
          <!-- <el-tab-pane label="基础设置" name="first"><router-view></router-view></el-tab-pane>
          <el-tab-pane label="奖品设置" name="second"><router-view></router-view></el-tab-pane>
          <el-tab-pane label="派奖设置" name="third"><router-view></router-view></el-tab-pane>
          <el-tab-pane label="分享设置" name="fourth"><router-view></router-view></el-tab-pane>
          <el-tab-pane label="高级设置" name="ffifth"><router-view></router-view></el-tab-pane> -->


          <el-tab-pane label="基础设置" name="first">
            <barsettingbase></barsettingbase>
          </el-tab-pane>
          <el-tab-pane label="商品设置" name="second">

            <barreword></barreword>
          </el-tab-pane>
          <el-tab-pane label="砍价设置" name="third">

            <baraward></baraward>
          </el-tab-pane>
          <!--<el-tab-pane label="分享设置" name="fourth"><share></share></el-tab-pane>-->
          <el-tab-pane label="高级设置" name="ffifth">
<baradvanced></baradvanced>

          </el-tab-pane>

        </el-tabs>

      </div>
    </div>
    <div id="active_AllBtn">
      <el-button @click="goBack()">返回</el-button>
      <el-button @click="onSave()">保存</el-button>
    </div>
  </div>
</template>
<script>

  // import settingBase from '@/page/settingbase'
  import barsettingbase from '@/page/barsettingbase'
  import barreword from '@/page/barreword'
  import baraward from '@/page/baraward'
  import baradvanced from '@/page/baradvanced'
  // import reword from '@/page/reword'
  import share from '@/page/share'
  import advanced from '@/page/advanced'
  // import award from '@/page/award'

  import qs from 'qs';
  import {mapState, mapMutations, mapActions} from 'vuex';
  export default  ({
    data(){
      return {
        settingmsg:["基础设置","商品设置","砍价设置","高级设置"],
        classActive:0,
        activeName2: 'first',
        msg:"this is parent data",
        save:{
          share:"",
          reword:"",
          award:"",
          high:""
        },
        sendData:""
      }
    },
    computed:{
      ...mapState(['setting_kjData']),
      ...mapActions(['saveDatakj'])
    },
    mounted(){
      this.$store.dispatch('saveDatakj')
      let Data = sessionStorage.getItem('Datakj')
      this.sendData = JSON.parse(Data)
      var _this = this
      //分享部分返回的数据
      this.$bus.on("send_share",function(data){
        data == '' ?_this.sendData.kjShareSetup = _this.sendData.kjShareSetup : _this.sendData.kjShareSetup = data

        // console.log(data)
      })
      //奖金设置返回的数据
      this.$bus.on("send_reword",function(data){
        data == ''?_this.sendData.kjAwardSetupExtendList = _this.sendData.kjAwardSetupExtendList : _this.sendData.kjAwardSetupExtendList = data

        // console.log(data)
      })
      //派奖设置返回的数据
      this.$bus.on("send_award",function(data){
        data == '' ?_this.sendData.kjAwardSendSetup = _this.sendData.kjAwardSendSetup :  _this.sendData.kjAwardSendSetup = data

        // console.log(data)
      })
      //高级设置返回的数据
      this.$bus.on("send_high",function(data){
        if(data == ''){
          _this.sendData.kjHighCompanySetup = _this.sendData.kjHighCompanySetup
          _this.sendData.kjHighSecuritySetup = _this.sendData.kjHighSecuritySetup
          _this.sendData.kjHighOtherSetup = _this.sendData.kjHighOtherSetup
        }else{
          _this.sendData.kjHighCompanySetup = data[0]
          _this.sendData.kjHighSecuritySetup = data[1]
          _this.sendData.kjHighOtherSetup = data[2]
        }

        // console.log(data)
      })
      //基础设置返回的数据
      this.$bus.on("send_base",function(data){
        data == ''?_this.sendData.kjBaseSetup = _this.sendData.kjBaseSetup : _this.sendData.kjBaseSetup = data
        // _this.save.high = data
        console.log(data)
      })


      // this.onSave()
      // this.setting()
      // this.$store.dispatch('setting_msg')
    },
    methods:{
      // ...mapMutations([setting])
      //tab切换

      tabChange(tab,event){
        this.activeName2 = name
        console.log(tab,event)
      },
      //保存设置
      onSave(){
        var sendNew =JSON.stringify(this.sendData)
        console.log(sendNew)
        $.ajax({
          type:"POST",//砍价保存数据
          url:"http://center.marketing.yunpaas.cn/kj/activitySetup/save",
          data:sendNew,
          contentType:"application/json",
          datatype:"json",
          success(data){
            console.log(data)
          }
        })

      },
      goBack(){
        if( confirm('返回后所编辑的内容不能被保存，是否需要返回？')){
          this.$router.push({path:'/activeslide/activeFirst'})
        }
      },

      changeActive(index){
        this.classActive = index
        this.target()
      },

      target(){
        // this.$router.push({path:'/setting/settingbase'})
        console.log(store.state.count)
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
      barsettingbase,
      barreword,
      baraward,
      baradvanced,

    }
  })
</script>
<style lang="scss" scoped>
  .setting_wrap {
    width:100%;
    .setting_con {
      width:100%;
      min-width:22.8rem;
      .setting_header {
        box-sizing: border-box;
        position:relative;

        .setting_button {
          float:left;
          width: 4rem;
          margin: 0 .25rem;
          height: 1.5rem;
          line-height: 1.5rem;
          text-align: center;
          background:#353D50;
          border:solid 1px #353D50;
          color:#fff;
          font-size: 14px;
          border-radius: 4px;
        }
        .active_button {
          background: #409EFF;
          border:solid 1px #409EFF;
        }
      }
    }
  }
  #active_AllBtn{
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: #929292;
    opacity: 0.8;
    height: 50px;
    line-height: 50px;
    text-align: center;
    z-index: 99999;
    left: 0;

  }
</style>

