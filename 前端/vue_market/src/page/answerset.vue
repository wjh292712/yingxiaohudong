//右侧基础设置
<template>
  <div class="setting_wrap">
    <div class="setting_con">
      <div class="setting_header clearfloat">

      </div>
      <div class="setting_title">
        <ul>
          <li class="select">基础设置</li>
          <li>题目设置</li>
          <li>奖品设置</li>
          <li>派奖设置</li>
          <li>高级设置</li>
        </ul>
        <div class="oDivs">
          <div class="content_list select">
            <answsettingbase></answsettingbase>
          </div>
          <div class="content_list">
            <anstitle></anstitle>
          </div>
          <div class="content_list">
            <ansreword></ansreword>
          </div>
          <div class="content_list">
            <ansaward></ansaward>
          </div>
          <div class="content_list">
            <ansadvanced></ansadvanced>
          </div>
        </div>
      </div>

    </div>
    <div id="active_AllBtn">
      <el-button @click="goBack()">返回</el-button>
      <el-button @click="onSave()" :disabled="btnsave">保存</el-button>
    </div>
  </div>
</template>
<script>

  // import settingBase from '@/page/settingbase'

  import answsettingbase from '@/page/answsettingbase'
  import anstitle from '@/page/anstitle'
  import ansreword from '@/page/ansreword'
  import ansaward from '@/page/ansaward'
import ansadvanced from '@/page/ansadvanced'

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
        sendData:"",
        btnsave:false,
      }
    },
    computed:{
      ...mapState(['setting_dtData']),
      ...mapActions(['saveDatadt'])
    },
    mounted(){
      $("ul li").click(function () {
        //获取当前Li的索引
        //eq获取当前项对应的索引
        var index=$(this).index();
        $(this).addClass("select").siblings().removeClass("select").parent().siblings(".oDivs").children('.content_list').eq(index).addClass("select").siblings().removeClass("select");
      })
      // this.$store.dispatch('saveDatadt')
      var token = sessionStorage.getItem('token')
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/dt/activitySetup/init?token="+token,//数据初始化接口
        params: {},
      }).then(res => {
        let _this = this
        this.dataStatus = this.$route.query.dataStatus
        if (this.dataStatus === undefined) {
          this.sendData = res.data.data
          console.log(this.sendData);
        } else if (this.dataStatus === '1') {
          this.sendData = this.$route.query.newdtData
        }
        //基础设置返回的数据
        this.$bus.on("send_base",function(data){
          data == ''?_this.sendData.dtBaseSetup = _this.sendData.dtBaseSetup : _this.sendData.dtBaseSetup = data;
          // _this.save.high = data
          console.log(data)
        });
        //题目设置返回的数据
        this.$bus.on("send_title",function(data){
          data == '' ?_this.sendData.dtQuestionSetupExtend = _this.sendData.dtQuestionSetupExtend : _this.sendData.dtQuestionSetupExtend = data

        });
        //派奖设置返回的数据
        this.$bus.on("send_award",function(data){
          data == '' ?_this.sendData.dtAwardSendSetup = _this.sendData.dtAwardSendSetup :  _this.sendData.dtAwardSendSetup = data

        });
        //奖品设置返回的数据
        this.$bus.on("send_reword",function(data){
          data == ''?_this.sendData.dtAwardSetupExtendList = _this.sendData.dtAwardSetupExtendList : _this.sendData.dtAwardSetupExtendList = data

        });

        //高级设置返回的数据
        this.$bus.on("send_high",function(data){
          if(data == ''){
            _this.sendData.dtHighCompanySetup = _this.sendData.dtHighCompanySetup
            _this.sendData.dtShareSetup = _this.sendData.dtShareSetup
            _this.sendData.dtHighOtherSetup = _this.sendData.dtHighOtherSetup
          }else{
            _this.sendData.dtHighCompanySetup = data[0]
            _this.sendData.dtShareSetup = data[1]
            _this.sendData.dtHighOtherSetup = data[2]
          }

        })
        this.btnsave=this.$route.query.btnsave
      })

    },
    methods:{
      // ...mapMutations([setting])
      //tab切换

      //保存设置
      onSave(){
        var sendNew =JSON.stringify(this.sendData)
        console.log(sendNew);
        var token=sessionStorage.getItem('token')
        if(JSON.parse(sendNew).dtBaseSetup.activityName===""){
          alert("用户名不能为空")
          return
        }
        let _this=this;
        $.ajax({
          type:"POST",//砍价保存数据
          url:"http://center.marketing.yunpaas.cn/dt/activitySetup/save?token="+token,
          data:sendNew,
          contentType:"application/json",
          datatype:"json",
          success(data){ //保存跳转活动页面
            if(data.data==="请重新登录"){
              alert(data.data)
              _this.$router.push({path:'/login'})
            }else if(data.data==="修改成功"||data.data==="保存成功"){
              alert(data.data)
              _this.$router.push({path:'/activeslide/myactive'})
              _this.$bus.emit("send_active",1)
            }else {
              alert(data.msg)
              console.log(data.msg);
            }
          }
        })

      },
      goBack(){
        if( confirm('返回后所编辑的内容不能被保存，是否需要返回？')){
          this.$router.push({path:'/mainPage'})
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
      answsettingbase,
      anstitle,
      ansreword,
      ansaward,
      ansadvanced,
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
  .setting_title ul{
    list-style: none;
    overflow: hidden;
  }
  .setting_title ul li{
    width: 117px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    background: #353D50;
    border-radius: 4px;
    margin-right: 10px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    float: left;
  }
  .oDivs{
    margin-top: 20px;
  }
  .setting_title .oDivs .content_list{
    width: 670px;
    min-height: 700px;
    background: #FBFBFB;
    border: 1px solid #E8E8E8;
    border-radius: 13px;
    display: none;
    padding: 20px 0px 0px 20px;
  }
  .setting_title ul li.select{
    background: #3486FC;
    border-radius: 4px;
  }
  .setting_title .oDivs .content_list.select{
    display: block;
    background: #FBFBFB;
    border: 1px solid #E8E8E8;
    border-radius: 13px;
  }
</style>

