<template>
  <div class="base_wrap">
    <div class="base_con">
      <el-form ref="form" :model="form" label-width="100px" class="ffom">
        <el-form-item label="活动名称 :">
          <el-input v-model="formName" maxlength="10" style="width: 300px" @input='inputData' placeholder="不超过10格汉字"></el-input>

        </el-form-item>
        <el-form-item label="活动日期 :">
          <!--<el-date-picker-->
            <!--v-model="value4"-->
            <!--type="datetimerange"-->
            <!--range-separator="至"-->
            <!--start-placeholder="开始日期"-->
            <!--end-placeholder="结束日期">-->
          <!--</el-date-picker>-->
          <el-date-picker
            v-model="value1"
            :disabled="startTime1"
            type="datetime"
            class="inpu_t"
            placeholder="选择开始时间" style="width: 182px">
          </el-date-picker>
          <el-date-picker
            v-model="value2"
            :disabled="endTime"
                class="inpu_t"
            type="datetime"
            placeholder="选择结束时间" style="width: 182px">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="参与人数">
          <el-radio-group v-model="radio1">
            <el-radio label="1">显示</el-radio>
            <el-radio label="2">隐藏</el-radio>
            <div class="label_text" v-show="peopCount">在实际参与人数基础上增加
              <input class="people" v-model="addpepCount" maxlength="5" onkeyup="value=value.replace(/[^\d]/g,'')" style="display: inline-block;width: 50px;height: 20px;text-align: center"/>
              倍
            </div>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否需要关注 :">
          <el-radio-group v-model="radio2">
            <el-tooltip class="item" effect="light" content="权限不足请升级" placement="top-start">
              <el-radio label="1" checked :disabled="follow" :hover="权限不足请升级">是</el-radio>
            </el-tooltip>
            <el-radio label="2">否</el-radio>

          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动说明 :">
          <el-input style="height:3rem;" type="textarea" maxlength="500" placeholder="0/500字" v-model="form.explain"></el-input>
        </el-form-item>
        <el-form-item label="商家简介 :">
          <el-input style="height:3rem;" type="textarea" maxlength="500" placeholder="0/500字" v-model="form.intro"></el-input>
        </el-form-item>
        <el-form-item label="商家地址 :">
          <el-input style="height:3rem;" type="textarea" maxlength="50" placeholder="不超过50个汉字" v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="商家电话 :">
          <el-input style="height:3rem;" type="textarea"  placeholder="手机号、座机或400电话"  v-model="form.phone" maxlength="15" onkeyup="value=value.replace(/[^\d]/g,'')">
          </el-input>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import myactive from '@/page/myactive'
  export default ({
    props: {
      child: ""
    },
    data() {
      return {
        form: {
          delivery: false,
          type: [],
          explain: "222",//活动说明
          intro: "111",//商家简介
          address: "nih",//商家地址
          phone: "12233",//商家电话
        },
        checkBtn: false,//��ť��ʽ
        formName: "",//活动名称
        isApperant: false,//�Ƿ���ʾ
        radio1: '',//参与人数
        radio2: '',//是否需要关注
        oneRadio: null,//��ѡ��һֵ
        twoRadio: null,//��ѡ��һֵ
        base_data: '',//基础设置数据
        base_send: "",
        value1:'',
        value2:'',
        startTime1:false, //基础设置的开始时间
        startTime:false,
        endTime:false,//基础设置的结束时间
        dataStatus:0,
        follow:false,//是否关注
        peopCount:false,
        addpepCount:'',
      };

    },
    created() {
// this. partBase()
    },
    mounted() {
      // _this.$store.dispatch('saveData')
      var token = sessionStorage.getItem('token')
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/kj/activitySetup/init?token="+token,//数据初始化接口
        params: {},
      }).then(res => {
        let _this=this
        let setting_kjData=JSON.stringify(res.data.data)
        sessionStorage.setItem("Datakj",setting_kjData)
        this.startTime1=this.$route.query.startTime
        this.dataStatus=this.$route.query.dataStatus
          this.partBase()
      })

      this.timestampToTime()

    },
    computed: {
      ...mapState(['setting_kjData']),
      ...mapActions(['saveDatakj'])
    },
    updated() {

      this.saveBase()
    },
    methods: {

      // 基础设置模块
      partBase() {

        let _this = this
        let formName = ""
        if(this.dataStatus===undefined){
          let Data = sessionStorage.getItem('Datakj')
          _this.base_data = JSON.parse(Data).kjBaseSetup
        }else if (this.dataStatus==='1') {
          _this.base_data = this.$route.query.newkjData.kjBaseSetup
        }
        _this.formName = _this.base_data.activityName
        _this.$bus.emit("send_Name",_this.formName)
        _this.radio1 = _this.base_data.isShow==true?'1':'2'
        if(_this.radio1==1){
          this.peopCount=false
        }else {
          this.peopCount=true
        }
        _this.radio2 = _this.base_data.subscribe==false?'2':'1'
        _this.form.explain = _this.base_data.rule//活动说明
        _this.form.intro = _this.base_data.merchantInfo //商家简介
        _this.form.address = _this.base_data.merchantAddress //商家地址
        _this.form.phone = this.base_data.merchantTelephone  //商家电话
        if(_this.base_data.allowClickSubscribe==true){
          this.follow=false
        }else if(_this.base_data.allowClickSubscribe==false){
          this.follow=true
        }
        _this.addpepCount=_this.base_data.addDoubling
        _this.start_date = _this.base_data.startDate//日期开始时间
        _this.end_date = _this.base_data.endDate//结束时间
        _this.value1=new Date(_this.start_date)
        _this.value2=new  Date(_this.end_date)
        // console.log(_this.value4);
        return formName;
      },

      timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y + M + D + h + m + s;
      },
      timestampToDay() {

      },
      saveBase() {
        let _this = this
        // _this.$store.dispatch('saveData')
        if(this.dataStatus===undefined){
          let Data = sessionStorage.getItem('Datakj')
          _this.base_send = JSON.parse(Data).kjBaseSetup
        }else if (this.dataStatus==='1') {
          _this.base_send = this.$route.query.newkjData.kjBaseSetup
        }
        _this.base_send.activityName = _this.formName
        // this.base_data.endDate = this.value7
        _this.base_send.isShow = _this.radio1 == 1 ? true : false;
        if(_this.radio1==1){
          this.peopCount=false
        }else {
          this.peopCount=true
        }
        _this.base_send.subscribe = _this.radio2 == 1 ? true : false;
        _this.base_send.rule = _this.form.explain
        _this.base_send.merchantInfo = _this.form.intro
        _this.base_send.merchantAddress = _this.form.address
        _this.base_send.merchantTelephone = _this.form.phone
        _this.base_send.startDate = _this.value1.getTime()
        _this.base_send.endDate =  _this.value2.getTime()
         _this.$store.state.setting_kjData.kjBaseSetup = this.base_send
        _this.$bus.emit("send_base", _this.base_send)

        console.log(_this.base_send);
      },

      inputData() {
        // console.log(this.formName);
        if (!this.formName) {
          this.checkBtn = false;
        } else {
          this.checkBtn = true;
        }
      }
    }
  })
</script>
<style lang="scss">
  /* .base_wrap {
      width: 100%;
      margin: 1rem 0;
      .label_text {
          font-size: .7rem;
          .people {
              display: inline-block;
              border: 1px solid #000;
              background: #fff;
              color: #000;
              width: 2rem;
              text-align: center;
              margin: 0 .5rem;
          }
      }
  } */

  .newactive {
    background-color: blue !important;
    z-index: 999;
  }
</style>
<style scoped>

</style>

<style>
.inpu_t input{
width: 100% !important;
padding-right: 0px !important;
}
  .base_wrap {
    background: #fbfbfb;
    height: 100%;
    position: relative;
    z-index: 9;
  }

  .el-radio-group {
    display: inline-block;
    line-height: 2rem;
    vertical-align: middle;
    font-size: small;
  }

  .label_text {
    width: 200px;
    height: 80px;
  }

  .el-input__inner {
    width: 80%;
  }

  .el-textarea__inner {
    width: 80%;
    /*height: 130px;*/
  }

  .el-form-item__label {
    text-align: left;
  }

  .el-radio__input.is-checked .el-radio__inner {
    border-color: #fc7132;
    background: #fc7132;
  }

  .el-radio__input.is-checked + .el-radio__label {
    color: #fc7132;
  }

  .btn_click {
    position: absolute;
    bottom: -50px;
    margin-left: -60px;
  }
</style>
