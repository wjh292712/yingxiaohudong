<template>
  <div class="base_wrap">
    <div class="base_con">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="活动名称:">
          <el-input v-model="formName" @input='inputData'></el-input>
        </el-form-item>
        <el-form-item label="活动日期:">
          <!--<el-date-picker-->
            <!--v-model="value4"-->
            <!--type="datetimerange"-->
            <!--range-separator="至"-->
            <!--start-placeholder="开始日期"-->
            <!--end-placeholder="结束日期">-->
          <!--</el-date-picker>-->
          <el-date-picker
            v-model="value1"
            :disabled="startTime"
            type="datetime"
            placeholder="选择开始时间" style="width: 250px">
          </el-date-picker>
          <el-date-picker
            v-model="value2"
            :disabled="endTime"
            type="datetime"
            placeholder="选择结束时间" style="width: 250px">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="参与人数:">
          <el-radio-group v-model="radio1">
            <el-radio label="1" >隐藏</el-radio>
            <el-radio label="2">
              <span @click="pepshow()">显示</span></el-radio>
            <div class="label_text" v-show="pep">在实际参与人数基础上增加
              <input class="people" v-model="addCount" style="display: inline-block;width: 50px;height: 20px;text-align: center"/>
              倍
            </div>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否需要关注:" >
          <el-radio-group v-model="radio2">
            <el-radio label="1" checked>是</el-radio>
            <el-radio label="2">否</el-radio>

          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动说明:">
          <el-input style="height:6rem;" type="textarea" placeholder="请输入活动规则0/500字" v-model="form.explain" ></el-input>
        </el-form-item>

        <el-form-item>

          <!--<div class="btn_click">-->
            <!--<el-button type="primary" @click="onSave()">保存</el-button>-->
            <!--<el-button type='primary' @click="name()">返回</el-button>-->
          <!--</div>-->
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
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          resource1: '',
          explain:"222",//活动说明
        },
        addCount:'',
        pep:false,
        checkBtn: false,//��ť��ʽ
        formName:"答题活动" ,//活动名称
        isApperant: false,//�Ƿ���ʾ
        radio1: '',//参与人数
        radio2: '',//是否需要关注
        oneRadio: null,//��ѡ��һֵ
        twoRadio: null,//��ѡ��һֵ
        base_data:'',//基础设置数据
        base_send:"",
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: '',
        value1:'',
        value2:'',
        startTime:false, //基础设置的开始时间
        endTime:false,//基础设置的结束时间
        actName:false,
      };

    },
    created(){
    },
    mounted(){
      // _this.$store.dispatch('saveData')
      this.partBase()
      // this.$bus.on("ss",function (states) {
      //   alert(states)
      //   console.log(states);
      // })

      // this.nextTick(function () {
      //   this.startTime=myactive.data().startTime
      //   alert(this.startTime+"答题基础设置")
      // })
    },
    computed:{
      ...mapState(['setting_dtData']),
      ...mapActions(['saveDatadt','newActiveStates'])
    },
    updated(){
      this.saveBase()
    },
    watch:{
      startTime:function (a,b) {
this.startTime=true
      },
      deep: true
    },
    methods: {

      // 基础设置模块
      partBase(){
        let _this = this
         _this.$store.dispatch('saveDatadt')
        let Data = sessionStorage.getItem('Datadt')
        console.log(Data);
        _this.base_data = JSON.parse(Data).dtBaseSetup
        _this.formName = _this.base_data.activityName //活动名称
        _this.radio1 = Number(_this.base_data.shows).toString(), //参与人数
          _this.addCount=_this.base_data.addDoubling//增加人数倍数
          _this.radio2 = Number(_this.base_data.subscribe).toString()//是否需要关注
        _this.start_date = _this.base_data.startDate//开始时间
        _this.end_date = _this.base_data.endDate//结束时间
        _this.form.explain=_this.base_data.rule//活动规则
        let str = _this.start_date
        let strend = _this.end_date
        //时间戳转换日期
        let newStr = _this.timestampToTime(str)
        strend = _this.timestampToTime(strend)
        _this.value4 = [newStr, strend]
        _this.value1=newStr
        _this.value2=strend
      },
      getter(){

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
      saveBase(){
        let _this = this
        // _this.$store.dispatch('saveData')
        let Data = sessionStorage.getItem('Datadt')
        _this.base_send = JSON.parse(Data).dtBaseSetup
        _this.base_send.activityName = _this.formName
        _this.base_send.addDoubling= _this.addCount
        _this.base_send.shows = _this.radio1 == 1 ? true : false;
        _this.base_send.subscribe = _this.radio2 == 1 ? true : false;
        _this.base_send.startDate= _this.start_date
        _this.base_send.endDate=_this.end_date
        _this.base_send.rule= _this.form.explain
        if (this.formName != '') {
          this.$store.state.setting_dtData.dtBaseSetup = this.base_send
          _this.$bus.emit("send_base",_this.base_send)

        } else {
          alert('活动名称，不能为空哦！')

        }
      },

      onSubmit() {
        // alert(this.activeTime.getTime());
        // this.activeTime = this.activeTime.getTime();
        // this.activeHour = this.activeHour.getTime();
        this.oneRadio = this.radio1;
        this.twoRadio = this.radio2;

      },
      inputData() {
        // console.log(this.formName);
        if (!this.formName) {
          this.checkBtn = false;
        } else {
          this.checkBtn = true;
        }
      },
      pepshow(){
        this.pep=!this.pep
      },
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
    background-color: blue!important;
    z-index: 999;
  }
</style>
<style>
  .base_wrap{
    /*background: #fbfbfb;*/
    padding: 15px;
    height: 100%;
    position: relative;
  }
  .el-radio-group {
    display: inline-block;
    line-height: 2rem;
    vertical-align: middle;
    font-size: small;
  }
  .label_text{
    width: 200px;
    height: 80px;
  }
  .el-input__inner{
    width: 80%;
  }
  .el-textarea__inner{
    width: 80%;
    /*height: 130px;*/
  }
  .el-form-item__label{
    text-align: left;
  }

  .el-radio__input.is-checked .el-radio__inner {
    border-color: #fc7132;
    background: #fc7132;
  }
  .el-radio__input.is-checked+.el-radio__label {
    color: #fc7132;
  }
  .btn_click{
    position: absolute;
    bottom: -50px;
    margin-left: -60px;
  }
</style>
