<template>
  <div class="container">
    <div class="active_phoneWrap" id="active_phon">
      <div class="active_phoneCon">
        <div class="phone_head">
          <div class="circle1">
            <span class="point3"></span>
          </div>
          <div class="circle2">
            <span class="point1"></span>
            <span class="point2"></span>
          </div>
        </div>
        <div class="phone_body">
          <header class="i-header">
            <span>
              < </span>
                <span class="title">{{activeName1}}</span>

          </header>
          <section class="section">
            <div class="congratulation">
              <span>抱歉未中奖</span>
            </div>
            <div class="center">

            </div>
            <div class="ticket">
              <span>100元话费充值券</span>
            </div>
            <div class="details">
              <p>
                <button class="btn">
                  再来一次
                </button>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName1: '',
      dataStatus:0,
    }
  },
  mounted() {

    this.activeN()
    this.dataStatus=this.$route.query.dataStatus
    if (this.dataStatus==='1') {
      this.activeN1()
    }

  },
  methods:{
    activeN(){
      let _this = this
      let Data = sessionStorage.getItem('Data')
      _this.base_data = JSON.parse(Data).jggBaseSetup
      _this.activeName1 = _this.formName=_this.base_data.activityName
    },
    activeN1(){
      let _this = this
      _this.base_data = _this.$route.query.newjggData.jggBaseSetup
      _this.activeName1 = _this.formName=_this.base_data.activityName
    },
  }

}
</script>
<style lang="scss" scoped>
  #active_phon{
    min-height: 26rem;
  }
.container {
  width: 100%;
  height: auto;
}

.i-header {
  display: flex;
  height: 2rem;
  line-height: 2rem;
  padding: 0 10px;
  font-size: 0.7rem;
  border-bottom: 1px solid #ccc;
}

.i-header .title {
  text-align: center;
  line-height: 2rem;
  flex: 1;
}

.section {
  width: 100%;
  height: 400px;
}

.section .congratulation {
  height: 2rem;
  margin-top: 1rem;
}

.section .congratulation span {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  margin-left: 40%;
  font-size: 0.8rem;
  color: #ff2437;
}

.section .center {
  width: 100%;
  height: 8rem;
  background: url(../assets/images/losing.jpg) no-repeat;
  background-size: 100%;
}

.section .ticket {
  width: 100%;
  height: 3rem;
}

.section .ticket span {
  width: 100%;
  height: 2rem;
  line-height: 4rem;
  margin-left: 25%;
  font-size: 0.8rem;
}

.section .details {
  width: 100%;
  height: 2rem;
  margin-top: 1rem;
}

.section .details p {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
}

.section .details p .btn {
  width: 8rem;
  height: 2rem;
  background: #FF2437;
  border: 0;
  color: #fff;
  border-radius: 10px;
  outline: none;
}

.active_wrap {
  width: 85%;
  background: #fff;
  /* .active_con {
    width: 95%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  } */
}
</style>
