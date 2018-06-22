<template>
  <div class="base_wrap">
    <div class="base_con">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="formName" @input='inputData' maxlength="10" placeholder="不超过10个汉字"></el-input>
          <!-- <div>{{setting_data}}</div> -->
        </el-form-item>
        <el-form-item label="活动日期">
          <!--<el-date-picker-->
            <!--v-model="value4"-->
            <!--type="datetimerange"-->
            <!--:disabled="ok"-->
            <!--range-separator="至"-->
            <!--start-placeholder="开始日期"-->
            <!--end-placeholder="结束日期" style="width:400px">-->
          <!--</el-date-picker >-->

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
        <el-form-item label="参与人数">
          <el-radio-group v-model="radio1">
            <el-radio label="1">隐藏</el-radio>
            <el-radio label="2">
              <span @click="pepshow()">显示</span></el-radio>
          </el-radio-group>
          <div class="label_text" v-show="pepcount">在实际参与人数基础上增加
            <input class="people" v-model="addpepCount" style="display: inline-block;width: 50px;height: 20px;text-align: center"/>
            倍
            <span>(该数据只用于显示，不计入统计)</span>
          </div>
        </el-form-item>
        <el-form-item label="是否关注">
          <el-radio-group v-model="radio2">
            <el-radio label="1" checked>是</el-radio>
            <el-radio label="2">否</el-radio>

          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动规则">
          <el-input style="height:6rem;" type="textarea" maxlength="500" v-model="form.desc" placeholder="请输入活动规则0／500字"></el-input>
        </el-form-item>
        <el-form-item>
          <!--<div class="btn_click">-->
            <!--<el-button type="primary" @click="saveBase()">保存</el-button>-->
            <!--<el-button type='primary' @click="back()">返回</el-button>-->
          <!--</div>-->

        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions,timestampToTime} from 'vuex';
  import myactive from '@/page/myactive'
  export default ({
    props: {
      child: ""
    },
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          resource1: '',
          desc: '',
        },
        checkBtn: false,//��ť��ʽ
        formName: "",//������//活动名称
        isApperant: false,//�Ƿ���ʾ
        radio1: '',//��ѡ��һ
        radio2: '',//��ѡ���
        oneRadio: null,//��ѡ��һֵ
        twoRadio: null,//��ѡ��һֵ
        base_data: '',//基础设置数据
        base_data1:'',
        base_send: "",
        start_date: '',
        end_date: "",
        addpepCount:'',
        pepcount:false,//参与人数倍数
        ok:false,
        dataStatus:0,
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
        value4: [new Date(2018, 10, 29, 10, 10), new Date(2018, 10, 11, 10, 10)],
        value5: '',
        value1:'',
        value2:'',
        startTime:false, //基础设置的开始时间
        endTime:false,//基础设置的结束时间
      };

    },
    created() {
    },
    mounted() {
      //alert(123)
      // _this.$store.dispatch('saveData')
      this.partBase()

      this.timestampToTime()
      this.startTime=this.$route.query.startTime
      this.dataStatus=this.$route.query.dataStatus
      if (this.dataStatus==='1') {
        this.partBase1()
      }
    },
    updated(){
      if(this.dataStatus===undefined){
        this.saveBase()
      }else if (this.dataStatus==='1') {
        this.saveBase1()
      }
      // this.base_data=this.$route.newjggData.dtBaseSetup

    },
    computed: {
      ...mapState(['setting_data']),
      ...mapActions(['saveData']),
    },
    methods: {

      // 基础设置模块
      partBase() {
        let _this = this
        let formName=""
        alert(this.dataStatus+"wo")
          let Data = sessionStorage.getItem('Data')
          console.log(Data);
          _this.base_data = JSON.parse(Data).jggBaseSetup
        // _this.$store.dispatch('saveData')
        // let Data = sessionStorage.getItem('Data')

        console.log(_this.base_data);
        _this.formName = _this.base_data.activityName
        formName = _this.base_data.activityName
        _this.form.desc=_this.base_data.rule
        _this.addpepCount=_this.base_data.addNum

        _this.start_date = _this.base_data.startDate//日期开始时间
        _this.end_date=_this.base_data.endDate//结束时间
        let str = _this.start_date
        let strend=_this.end_date


        //时间戳转换日期
      let newStr= _this.timestampToTime(str)
         strend=_this.timestampToTime(strend)
        _this.value4=[newStr,strend]
        _this.value1=newStr
        _this.value2=strend

        // console.log(_this.value4);

        _this.radio1 = Number(_this.base_data.shows).toString(),
          _this.radio2 = Number(_this.base_data.subscribe).toString()

      },

      partBase1() {
        let _this = this
        let formName=""
          _this.base_data=_this.$route.query.newjggData.jggBaseSetup
        // _this.$store.dispatch('saveData')
        // let Data = sessionStorage.getItem('Data')

        console.log(_this.base_data);
        _this.formName = _this.base_data.activityName
        formName = _this.base_data.activityName
        _this.form.desc=_this.base_data.rule
        _this.addpepCount=_this.base_data.addNum

        _this.start_date = _this.base_data.startDate//日期开始时间
        _this.end_date=_this.base_data.endDate//结束时间
        let str = _this.start_date
        let strend=_this.end_date

        //时间戳转换日期
        let newStr= _this.timestampToTime(str)
        strend=_this.timestampToTime(strend)
        _this.value4=[newStr,strend]
        _this.value1=newStr
        _this.value2=strend

        // console.log(_this.value4);

        _this.radio1 = Number(_this.base_data.shows).toString(),
          _this.radio2 = Number(_this.base_data.subscribe).toString()

      },
      timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y+M+D+h+m+s;
      },
      timestampToDay(){

      },
      saveBase() {
        let _this = this
        // _this.$store.dispatch('saveData')
        let Data = sessionStorage.getItem('Data')
        _this.base_send = JSON.parse(Data).jggBaseSetup
        _this.base_send.activityName = _this.formName
        _this.base_send.rule=_this.form.desc
        _this.base_send.addNum =_this.addpepCount
        // this.base_data.endDate = this.value7
        _this.base_send.shows = _this.radio1 == 1 ? true : false;
        _this.base_send.subscribe = _this.radio2 == 1 ? true : false;
        // this.$store.state.setting_data.jggBaseSetup = this.base_send
        _this.$bus.emit("send_base", _this.base_send)

      },
      saveBase1() {
        let _this = this
        // _this.$store.dispatch('saveData')

        _this.base_send = _this.$route.query.newjggData.jggBaseSetup
        _this.base_send.activityName = _this.formName
        _this.base_send.rule=_this.form.desc
        _this.base_send.addNum =_this.addpepCount
        // this.base_data.endDate = this.value7
        _this.base_send.shows = _this.radio1 == 1 ? true : false;
        _this.base_send.subscribe = _this.radio2 == 1 ? true : false;
        // this.$store.state.setting_data.jggBaseSetup = this.base_send
        _this.$bus.emit("send_base", _this.base_send)

      },
      onSubmit() {
        alert(this.activeTime.getTime());
        // this.activeTime = this.activeTime.getTime();
        // this.activeHour = this.activeHour.getTime();
        this.oneRadio = this.radio1;
        this.twoRadio = this.radio2;

        alert(this.oneRadio)
        alert(this.twoRadio)
        if (this.formName != '') {
          //   if(){

          //   }
        } else {
          alert('活动名称，不能为空哦！')

        }
      },
      inputData() {
        // console.log(this.formName);
        // if (!this.formName) {
        //   this.checkBtn = false;
        // } else {
        //   this.checkBtn = true;

      },
      back(){
        this.$router.go(-1)
      },
      pepshow(){
        this.pepcount=!this.pepcount
      }
    }
  })


</script>
<style lang="scss">
  .base_wrap {
    width: 100%;
    margin: 1rem 0;
    background: #fbfbfb;
    padding: 15px;
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
  }

  .newactive {
    background-color: blue !important;
    z-index: 999;
  }

  .el-radio__input.is-checked .el-radio__inner {
    border-color: #fc7132;
    background: #fc7132;
  }

  .el-radio__input.is-checked + .el-radio__label {
    color: #fc7132;
  }

  .el-input__inner {
    width: 80%;
  }

  .el-textarea__inner {
    width: 80%;
    /*height: 130px;*/
  }

  .btn_click {
    position: absolute;
    bottom: -50px;
    margin-left: -60px;
  }
</style>
