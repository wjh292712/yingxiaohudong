<template>
  <div class="base_wrap">
    <div class="base_con">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="活动名称">
          <el-input v-model="formName" @input='inputData'></el-input>

        </el-form-item>
        <el-form-item label="活动日期">
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
            <el-radio label="1">显示</el-radio>
            <el-radio label="2">隐藏</el-radio>
            <div class="label_text">在实际参与人数基础上增加
              <input class="people" style="display: inline-block;width: 50px;height: 20px;text-align: center"/>{{setting_kjData.addNum}}
              倍
            </div>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否需要关注">
          <el-radio-group v-model="radio2">
            <el-radio label="1" checked>是</el-radio>
            <el-radio label="2">否</el-radio>

          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动说明">
          <el-input style="height:3rem;" type="textarea" v-model="form.explain"></el-input>
        </el-form-item>
        <el-form-item label="商家简介">
          <el-input style="height:3rem;" type="textarea" v-model="form.intro"></el-input>
        </el-form-item>
        <el-form-item label="商家地址">
          <el-input style="height:3rem;" type="textarea" v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="商家电话">
          <el-input style="height:3rem;" type="textarea" v-model="form.phone" maxlength="11" onkeyup="value=value.replace(/[^\d]/g,'')">
          </el-input>
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
        value4: [new Date(2018, 10, 10, 10, 20, 30), new Date(2018, 10, 11, 10, 10, 26)],
        value5: ''
      };

    },
    created() {

    },
    mounted() {
      //  alert(123)
      var _this = this
      // _this.$store.dispatch('saveData')
      _this.partBase()
      _this.timestampToTime()

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
        // _this.$store.dispatch('saveData')
        // let Data = sessionStorage.getItem('Data')
        let Data = sessionStorage.getItem('Datakj')
        _this.base_data = JSON.parse(Data).kjBaseSetup
        console.log(_this.base_data);
        _this.formName = _this.base_data.activityName
        formName = _this.base_data.activityName
        _this.radio1 = Number(_this.base_data.isShow).toString(),
          _this.radio2 = Number(_this.base_data.subscribe).toString()
        _this.form.explain = _this.base_data.rule//活动说明
        _this.form.intro = _this.base_data.merchantInfo //商家简介
        _this.form.address = _this.base_data.merchantAddress //商家地址
        _this.form.phone = this.base_data.merchantTelephone  //商家电话

        _this.start_date = _this.base_data.startDate//日期开始时间
        _this.end_date = _this.base_data.endDate//结束时间
        let str = _this.start_date
        let strend = _this.end_date
        //时间戳转换日期
        let newStr = _this.timestampToTime(str)
        strend = _this.timestampToTime(strend)
        _this.value4 = [newStr, strend]
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
        let Data = sessionStorage.getItem('Datakj')
        _this.base_send = JSON.parse(Data).kjBaseSetup
        _this.base_send.activityName = _this.formName
        // this.base_data.endDate = this.value7
        _this.base_send.isShow = _this.radio1 == 1 ? true : false;
        _this.base_send.subscribe = _this.radio2 == 1 ? true : false;
        _this.base_send.rule = _this.form.explain
        _this.base_send.merchantInfo = _this.form.intro
        _this.base_send.merchantAddress = _this.form.address
        _this.base_send.merchantTelephone = _this.form.phone
        _this.base_send.startDate = _this.start_date
        _this.base_send.endDate =  _this.end_date
         _this.$store.state.setting_kjData.kjBaseSetup = this.base_send
        _this.$bus.emit("send_base", _this.base_send)
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
<style>
  .base_wrap {
    background: #fbfbfb;
    padding: 20px;
    height: 100%;
    position: relative;
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
