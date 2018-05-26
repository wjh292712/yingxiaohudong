<template>
  <div class="base_wrap">
    <div class="base_con">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="活动名称">
          <el-input v-model="formName"  @input='inputData'></el-input>
          <!-- <div>{{setting_data}}</div> -->
        </el-form-item>
        <el-form-item label="活动日期">
          <!--<el-date-picker-->
            <!--v-model="value7"-->
            <!--type="daterange"-->
            <!--align="right"-->
            <!--unlink-panels-->
            <!--range-separator="至"-->
            <!--start-placeholder="开始日期"-->
            <!--end-placeholder="结束日期"-->
            <!--:picker-options="pickerOptions2">-->

          <!--</el-date-picker>-->
          <el-date-picker
            v-model="value4"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="参与人数">
          <el-radio-group v-model="radio1">
            <el-radio label="1" >显示</el-radio>
            <el-radio label="2">隐藏</el-radio>
            <div class="label_text">在实际参与人数基础上增加
              <input class="people" style="display: inline-block;width: 50px;height: 20px;text-align: center"/>{{setting_data.addNum}}
              倍
            </div>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否需要关注" >
          <el-radio-group v-model="radio2">
            <el-radio label="1" checked>是</el-radio>
            <el-radio label="2">否</el-radio>

          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动说明">
          <el-input style="height:6rem;" type="textarea" v-model="form.desc.explain"></el-input>
        </el-form-item>
        <el-form-item label="商家简介">
          <el-input style="height:6rem;" type="textarea" v-model="form.desc.intro"></el-input>
        </el-form-item>
        <el-form-item label="商家地址">
          <el-input style="height:3rem;" type="textarea" v-model="form.desc.address"></el-input>
        </el-form-item>
        <el-form-item label="商家电话">
          <el-input style="height:3rem;" type="textarea" v-model="form.desc.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <!--<el-button type="primary" @click="saveBase()" :class='checkBtn==true?"newactive":""'>保存</el-button>-->
          <div class="btn_click">
          <el-button type="primary" @click="onSave()">保存</el-button>
          <el-button type='primary' @click="name()">返回</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
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
          desc:{
            explain:"222",intro:"111",address:"nih",phone:"12233"
          }

        },
        checkBtn: false,//��ť��ʽ
        formName:"砍价活动" ,//������
        isApperant: false,//�Ƿ���ʾ
        radio1: '',//��ѡ��һ
        radio2: '',//��ѡ���
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
        value5: ''
      };



    },
    created(){
    },
    mounted(){
      //  alert(123)
      var _this = this
      // _this.$store.dispatch('saveData')
      _this.partBase()


    },
    computed:{
      ...mapState(['setting_data']),
      ...mapActions(['saveData']),
    },
    methods: {

      // 基础设置模块
      partBase(){
        let _this = this
        // _this.$store.dispatch('saveData')
        let Data = sessionStorage.getItem('Data')
        _this.base_data = JSON.parse(Data).jggBaseSetup
        // console.log(_this.base_data.activityName)
        _this.formName = _this.base_data.activityName
        _this.value7 = _this.base_data.endDate
        _this.radio1 = Number(_this.base_data.shows).toString(),
          _this.radio2 = Number(_this.base_data.subscribe).toString()
      },
      saveBase(){
        let _this = this
        // _this.$store.dispatch('saveData')
        let Data = sessionStorage.getItem('Data')
        _this.base_send = JSON.parse(Data).jggBaseSetup
        _this.base_send.activityName = _this.formName
        // this.base_data.endDate = this.value7
        _this.base_send.shows = _this.radio1 == 1 ? true : false;
        _this.base_send.subscribe = _this.radio2 == 1 ? true : false;
        // this.$store.state.setting_data.jggBaseSetup = this.base_send
        _this.$bus.emit("send_base",_this.base_send)
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
    background-color: blue!important;
    z-index: 999;
  }
</style>
<style>
  .base_wrap{
    background: #fbfbfb;
    padding: 30px;
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
    bottom: -70px;
    margin-left: -60px;
  }
</style>
