<template>
  <div class="setting_wrap">
    <div class="setting_con">
      <div class="setting_header clearfloat">
      </div>
      <div class="setting_title">
        <ul>
          <li class="select">基础设置</li>
          <li>奖品设置</li>
          <li>派奖设置</li>
          <li>分享设置</li>
          <li>高级设置</li>
        </ul>
        <div class="oDivs">
          <div class="content_list select">
            <setting-base></setting-base>
          </div>
          <div class="content_list">
            <reword></reword>
          </div>
          <div class="content_list">
            <award></award>
          </div>
          <div class="content_list">
            <share></share>
          </div>
          <div class="content_list">
            <advanced></advanced>
          </div>
        </div>

        <!--<el-tabs v-model="activeName2" type="card">-->

          <!--<el-tab-pane label="基础设置" name="first" style="margin-right:10px">-->
            <!--<setting-base></setting-base>-->
            <!--&lt;!&ndash;<settingbaseEdit></settingbaseEdit>&ndash;&gt;-->
          <!--</el-tab-pane>-->
          <!--<el-tab-pane label="奖品设置" name="second">-->
            <!--&lt;!&ndash;<reword></reword>&ndash;&gt;-->
              <!--<ceshi></ceshi>-->

          <!--</el-tab-pane>-->
          <!--<el-tab-pane label="派奖设置" name="third">-->
            <!--<award></award>-->
          <!--</el-tab-pane>-->
          <!--<el-tab-pane label="分享设置" name="fourth">-->
            <!--<share></share>-->
          <!--</el-tab-pane>-->
          <!--<el-tab-pane label="高级设置" name="ffifth">-->
            <!--<advanced></advanced>-->
          <!--</el-tab-pane>-->

        <!--</el-tabs>-->

      </div>
    </div>
    <div id="active_AllBtn">
      <el-button @click="goBack()">返回</el-button>
      <el-button @click="onSave()" :disabled="saveAll">保存</el-button>
    </div>
  </div>
</template>
<script>

  import settingBase from '@/page/settingbase'
  import settingbaseEdit from '@/page/settingbaseEdit'
  import ceshi from '@/page/1111'
  import reword from '@/page/reword'
  import share from '@/page/share'
  import advanced from '@/page/advanced'
  import award from '@/page/award'

  import qs from 'qs';
  import {mapState, mapMutations, mapActions} from 'vuex';

  export default ({
    data() {
      return {
        settingmsg: ["基础设置", "奖品设置", "派奖设置", "分享设置", "高级设置"],            //flag:true,
        classActive: 0,
        activeName2: 'first',
        msg: "this is parent data",
        saveAll: false,
        save: {
          share: "",
          reword: "",
          award: "",
          high: ""
        },
        sendData: "",
        classActive:1
      }
    },
    created() {

    },
    computed: {
      ...mapState(['setting_data']),
      ...mapActions(['saveData'])
    },
    mounted() {

      $("ul li").click(function () {
        //获取当前Li的索引
        //eq获取当前项对应的索引
        var index=$(this).index();
        $(this).addClass("select").siblings().removeClass("select").parent().siblings(".oDivs").children('.content_list').eq(index).addClass("select").siblings().removeClass("select");
      })

      var token = sessionStorage.getItem('token')
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/jgg/activitySetup/init?token=" + token,//数据初始化接口
        params: {},
      }).then(res => {
        let _this = this
        this.dataStatus = this.$route.query.dataStatus
        if (this.dataStatus === undefined) {
          let setting_data = JSON.stringify(res.data.data)
          sessionStorage.setItem("Data", setting_data)
          // this.$store.dispatch('saveData')
          let Data = sessionStorage.getItem('Data')
          this.sendData = JSON.parse(Data)
        } else if (this.dataStatus === '1') {
          this.sendData = _this.$route.query.newjggData
        }

        //分享部分返回的数据
        this.$bus.on("send_share", function (data) {
          data == '' ? _this.sendData.jggShareSetup = _this.sendData.jggShareSetup : _this.sendData.jggShareSetup = data
          // this.onSave();
          // console.log(data)
        })
        //奖品设置返回的数据
        this.$bus.on("send_reword", function (data) {
          data == '' ? _this.sendData.jggAwardSetupExtendList = _this.sendData.jggAwardSetupExtendList : _this.sendData.jggAwardSetupExtendList = data
        })
        //派奖设置返回的数据
        this.$bus.on("send_award", function (data) {
          data == '' ? _this.sendData.jggAwardSendSetup = _this.sendData.jggAwardSendSetup : _this.sendData.jggAwardSendSetup = data

          // console.log(data)
        })
        //高级设置返回的数据
        this.$bus.on("send_high", function (data) {
          if (data == '') {
            _this.sendData.jggHighCompanySetup = _this.sendData.jggHighCompanySetup
            _this.sendData.jggHighSecuritySetup = _this.sendData.jggHighSecuritySetup
            _this.sendData.jggHighOtherSetup = _this.sendData.jggHighOtherSetup
          } else {
            _this.sendData.jggHighCompanySetup = data[0]
            _this.sendData.jggHighSecuritySetup = data[1]
            _this.sendData.jggHighOtherSetup = data[2]
          }
          // th_is.onSave()
          console.log(JSON.stringify(data) + "2111");
          //console.log(data+"2323232222")
        })
        //基础设置返回的数据
        this.$bus.on("send_base", function (data) {
          data == '' ? _this.sendData.jggBaseSetup = _this.sendData.jggBaseSetup : _this.sendData.jggBaseSetup = data
          // _this.save.high = data
          console.log(data)
          // thi_s.flag=false;
        })

      })


      // this.onSave()
      // this.setting()
      // this.$store.dispatch('setting_msg')
    },
    // watch:{//  监听是否执行保存
    //   flag:function (a,b) {
    //     // _this.flag=true
    //     this.onSave()
    //
    //
    //   },
    //     deep:true
    //
    //
    // },
    updated() {
      // this.onSave()

    },
    methods: {
      // ...mapMutations([setting])
      //tab切换

      // tabChange(tab,event){
      //     // this.activeName2 = name
      //     // console.log(tab,event)
      // },
      //保存设置
      onSave() {//所有的数据设置保存大保存
        console.log('发送保存数据');
        var sendNew = JSON.stringify(this.sendData)
        console.log(sendNew)
        var token = sessionStorage.getItem('token')
        if (JSON.parse(sendNew).jggBaseSetup.activityName === "") {
          alert("用户名不能为空")
          return
        }
        let _this = this;
        $.ajax({
          type: "POST",
          url: "http://center.marketing.yunpaas.cn/jgg/activitySetup/save?token=" + token,
           //url:"http://192.168.2.112:8080/jgg/activitySetup/save?token="+token,
          data: sendNew,
          contentType: "application/json",
          datatype: "json",
          success(data) {//保存跳转活动页面
            if (data.data === "请重新登录") {
              alert(data.data)
              _this.$router.push({path: '/login'})
            } else if (data.data === "修改成功" || data.data === "保存成功") {
              alert(data.data)
              _this.$router.push({path: '/activeslide/myactive'})
              _this.$bus.emit("send_active",1)
            } else {
              alert(data.msg)
            }

          }
        })


      },
      goBack() {
        if (confirm('返回后所编辑的内容不能被保存，是否需要返回？')) {
          this.$router.push({path: '/mainPage'})
        }
      },

      changeActive(index) {
        this.classActive = index

      },

      target() {
        // this.$router.push({path:'/setting/settingbase'})
        console.log(store.state.count)
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      settingBase,
      settingbaseEdit,
      reword,
      ceshi,
      share,
      advanced,
      award
    }
  })
</script>
<style lang="scss" scoped>
  .setting_wrap {
    width: 100%;
    .setting_con {
      width: 100%;
      min-width: 22.8rem;
      .setting_header {
        box-sizing: border-box;
        position: relative;

        .setting_button {
          float: left;
          width: 4rem;
          margin: 0 .25rem;
          height: 1.5rem;
          line-height: 1.5rem;
          text-align: center;
          background: #353D50;
          border: solid 1px #353D50;
          color: #fff;
          font-size: 14px;
          border-radius: 4px;
        }
        .active_button {
          background: #409EFF;
          border: solid 1px #409EFF;
        }
      }
    }
  }

  #active_AllBtn {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: #929292;
    opacity: 0.8;
    height: 50px;
    line-height: 50px;
    text-align: center;
    z-index: 9999;
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
    min-height: 545px;
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

