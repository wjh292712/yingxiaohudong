//右侧基础设置
<template>
  <div class="setting_wrap">
    <div class="setting_con">
      <div class="setting_header clearfloat">

      </div>
      <div class="setting_title">
        <el-tabs v-model="activeName2" @tab-click="tabChange(name,label)">



          <el-tab-pane label="基础设置" name="first">
       <answsettingbase></answsettingbase>
          </el-tab-pane>
          <el-tab-pane label="题目设置" name="second">
            <anstitle></anstitle>

          </el-tab-pane>
          <el-tab-pane label="派奖设置" name="third">

            <ansaward></ansaward>
          </el-tab-pane>
          <el-tab-pane label="奖品设置" name="fourth">
            <ansreword></ansreword>
          </el-tab-pane>
          <el-tab-pane label="高级设置" name="fifth">
            <baradvanced></baradvanced>

          </el-tab-pane>

        </el-tabs>

      </div>
    </div>

  </div>
</template>
<script>

  // import settingBase from '@/page/settingbase'

  import answsettingbase from '@/page/answsettingbase'
  import anstitle from '@/page/anstitle'
  import ansreword from '@/page/ansreword'
  import ansaward from '@/page/ansaward'

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
        settingmsg:["基础设置","奖品设置","派奖设置","分享设置","高级设置"],
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
      ...mapState(['setting_data']),
      ...mapActions(['saveData'])
    },
    mounted(){
      this.$store.dispatch('saveData')
      let Data = sessionStorage.getItem('Data')
      this.sendData = JSON.parse(Data)
      var _this = this
      //分享部分返回的数据
      this.$bus.on("send_share",function(data){
        data == '' ?_this.sendData.jggShareSetup = _this.sendData.jggShareSetup : _this.sendData.jggShareSetup = data

        // console.log(data)
      })
      //奖金设置返回的数据
      this.$bus.on("send_reword",function(data){
        data == ''?_this.sendData.jggAwardSetupExtendList = _this.sendData.jggAwardSetupExtendList : _this.sendData.jggAwardSetupExtendList = data

        // console.log(data)
      })
      //派奖设置返回的数据
      this.$bus.on("send_award",function(data){
        data == '' ?_this.sendData.jggAwardSendSetup = _this.sendData.jggAwardSendSetup :  _this.sendData.jggAwardSendSetup = data

        // console.log(data)
      })
      //高级设置返回的数据
      this.$bus.on("send_high",function(data){
        if(data == ''){
          _this.sendData.jggHighCompanySetup = _this.sendData.jggHighCompanySetup
          _this.sendData.jggHighSecuritySetup = _this.sendData.jggHighSecuritySetup
          _this.sendData.jggHighOtherSetup = _this.sendData.jggHighOtherSetup
        }else{
          _this.sendData.jggHighCompanySetup = data[0]
          _this.sendData.jggHighSecuritySetup = data[1]
          _this.sendData.jggHighOtherSetup = data[2]
        }

        // console.log(data)
      })
      //基础设置返回的数据
      this.$bus.on("send_base",function(data){
        data == ''?_this.sendData.jggBaseSetup = _this.sendData.jggBaseSetup : _this.sendData.jggBaseSetup = data
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
          type:"POST",
          url:"http://center.marketing.yunpaas.cn/jgg/activitySetup/save",
          data:sendNew,
          contentType:"application/json",
          datatype:"json",
          success(data){
            console.log(data)
          }
        })
        // this.$axios({
        //     method:'post',
        //     url:"http://192.168.2.170:8080/jgg/activitySetup/save",
        //     headers: {'Content-Type': 'application/json'},
        //     params:sendNew
        // }).then(res => {
        //     console.log(res)
        // }).catch( res => {

        // })


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
      answsettingbase,
      anstitle,
      ansreword,
      ansaward,
      baradvanced,
      share,
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
</style>

