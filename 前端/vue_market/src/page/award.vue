<template>
  <div class="container">
    <div class="send">
      <el-form ref="form" :model="form" label-width="100px">
        <p>
          <span>派奖方式：</span>
          <span>
          <el-radio v-model="radio" label="1">抽奖</el-radio>
          <span class="active">活动发布后，派奖方式不能更改</span>
        </span>
        </p>
        <p>
          <span>单人总抽奖机会 : </span>
          <span>
          <el-radio v-model="radio1" label="1">限制</el-radio>
          <el-radio v-model="radio1" label="2">不限制</el-radio>
          <span class="more">每人最多有
            <span>
              <el-input class="ipt" v-model="input1">
              </el-input>
            </span>
            <span>次</span>
          </span>
        </span>
        </p>
        <!-- <el-form-item label="单人总抽奖机会">
            <el-radio-group v-model="form.resource1">
              <el-radio label="1"></el-radio>
              <el-radio label="2">关闭</el-radio>
            </el-radio-group>
          </el-form-item> -->
        <p>
          <span>每人每日抽奖机会 : </span>
          <span>
          <el-input class="every" v-model="input2">
          </el-input>
          <span class="time">次</span>
        </span>
        </p>
        <p>
          <span>每人中奖机会 : </span>
          <span>每人最多中奖</span>
          <span>
          <el-input class="everys" v-model="input3">
          </el-input>
          <span class="times">次</span>
        </span>
        </p>
        <p>
          <span>派发规则:</span>
          <span>
          <el-radio v-model="radio2" label="1">按奖项中奖概率派发</el-radio>
          <el-radio v-model="radio2" label="2">奖项均匀派发</el-radio>
        </span>
          <br>
          <span style="margin-left:4rem;color:#ccc;">所有奖项中奖概率加起来不能超过100% </span>
        </p>
        <div class=" homo">
          <p>
            <span>奖项1</span>
            <span>10元话费券
            <el-input class="every" v-model="input4">
            </el-input>
            <span>%</span>
          </span>
            <span style="margin-left:2rem">每天最多派发</span>
            <span>
            <el-input class="every" v-model="input5">
            </el-input>
          </span>
          </p>
          <p>
            <span>奖项2</span>
            <span>10元话费券
            <el-input class="every" v-model="input6">
            </el-input>
            <span>%</span>
          </span>
            <span style="margin-left:2rem">每天最多派发</span>
            <span>
            <el-input class="every" v-model="input7">
            </el-input>
          </span>
          <p>
            <span>奖项3</span>
            <span>10元话费券
              <el-input class="every" v-model="input8">
              </el-input>
              <span>%</span>
            </span>
            <span style="margin-left:2rem">每天最多派发</span>
            <span>
              <el-input class="every" v-model="input9">
              </el-input>
            </span>
          </p>
          <p>
            <span>奖项4</span>
            <span>10元话费券
              <el-input class="every" v-model="input10">
              </el-input>
              <span>%</span>
            </span>
            <span style="margin-left:2rem">每天最多派发</span>
            <span>
              <el-input class="every" v-model="input11">
              </el-input>
            </span>
          </p>
          <p>
            <span>奖项5</span>
            <span>10元话费券
              <el-input class="every" v-model="input12">
              </el-input>
              <span>%</span>
            </span>
            <span style="margin-left:2rem">每天最多派发</span>
            <span>
              <el-input class="every" v-model="input13">
              </el-input>
            </span>
          </p>
          <p>
            <span>奖项6</span>
            <span>10元话费券
              <el-input class="every" v-model="input14">
              </el-input>
              <span>%</span>
            </span>
            <span style="margin-left:2rem">每天最多派发</span>
            <span>
              <el-input class="every" v-model="input15">
              </el-input>
            </span>
          </p>
          <p>
            <span>奖项7</span>
            <span>10元话费券
              <el-input class="every" v-model="input16">
              </el-input>
              <span>%</span>
            </span>
            <span style="margin-left:2rem">每天最多派发</span>
            <span>
              <el-input class="every" v-model="input17">
              </el-input>
            </span>
          </p>
          <!--<p>-->
            <!--<span>奖项8</span>-->
            <!--<span>10元话费券-->
              <!--<el-input class="every" v-model="input18">-->
              <!--</el-input>-->
              <!--<span>%</span>-->
            <!--</span>-->
            <!--<span style="margin-left:2rem">每天最多派发</span>-->
            <!--<span>-->
              <!--<el-input class="every" v-model="input19">-->
              <!--</el-input>-->
            <!--</span>-->
          <!--</p>-->

        </div>
      </el-form>
      <el-button type="primary" @click="saveAward()">保存</el-button>
      <el-button type='primary'@click="back()">返回</el-button>
      <!--<button @click="saveAward()">保存</button>-->
      <!-- <button @click="partAward()">开始</button> -->
    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';

  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource1: '',
          resource2: '',
          resource3: '',
          resource4: '',
          desc: ''
        },
        radio: '1',
        radio1: '',
        radio2: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        input10: '',
        input11: '',
        input12: '',
        input13: '',
        input14: '',
        input15: '',
        input16: '',
        input17: '',
        input18: '',
        input19: '',
        award_data: "",//接口数据
        award_send: ""
      }
    },
    created() {

      // this.saveAward()
    },
    mounted() {
      this.partAward()
    },
    computed: {
      ...mapState(['setting_data']),
      ...mapActions(['saveData']),
    },
    methods: {

      //派奖设置
      partAward() {
        // this.$store.dispatch('saveData')
        let Data = sessionStorage.getItem('Data')
        this.award_data = JSON.parse(Data).jggAwardSendSetup
        if (!this.award_data.singleTotalDrawLimit) {
          this.radio1 = '2'
        }
        this.input2 = this.award_data.singleDayDrawCount
        this.input3 = this.award_data.singleWinCount
        this.radio2 = this.award_data.sendRule.toString()
      },
      //派奖保存
      saveAward() {
        // this.$store.dispatch('saveData')
        let Data = sessionStorage.getItem('Data')
        this.award_send = JSON.parse(Data).jggAwardSendSetup
        this.award_send.singleTotalDrawLimit = this.radio1 == 1 ? true : false
        this.award_send.singleDayDrawCount = this.input2
        this.award_send.singleWinCount = this.input3
        this.award_send.sendRule = this.radio2 == 1 ? true : false
        this.$store.state.setting_data.jggAwardSendSetup = this.award_send
        this.$bus.emit("send_award", this.award_send)
        // console.log(this.$store.state.setting_data.jggAwardSendSetup)
      },
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    width: 100%;
    height: auto;
  }

  .send {
    width: 100%;
  }

  .send p {
    font-size: 0.7rem;
    margin-top: 1rem;
  }

  p .more span .ipt {
    width: 3rem;
    height: 10px;
  }

  p .more span {
    margin-left: 2rem;
  }

  p span .every {
    width: 3rem;
  }

  p span .time {
    margin-left: 1rem;
  }

  p span .everys {
    width: 3rem;
  }

  p span .times {
    margin-left: 1rem;
  }

  // .send p .active {
  //   color: red;
  //   margin-left: 1rem;
  // }
  .homo {
    margin-left: 2rem;
    margin-top: 1rem;
  }
</style>
<style>
  .send .el-input__inner {
    height: 1rem;
  }
</style>
