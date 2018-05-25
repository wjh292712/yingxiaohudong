<template>
  <div class="container">
    <header class="header">
      <span>
        </span>
          <span>参与活动赢大奖</span>
    </header>
    <section class="section">
      <button class="btn" @click="updataImg()">
        开始抽奖2
      </button>
    </section>
    <footer class="footer">

    </footer>
  </div>
</template>
<script>export default ({
  data() {
    return {

      info: ""
    }

  },
  created() {

  },
  mounted() {
    this.updataImg()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    updataImg() {
      const _this = this;
      this.$http({
        method: "post",
        url: "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8d8bbbd5fcf10745&redirect_uri=http:%2f%2fcenter.marketing.yunpaas.cn/jgg/activity/getMyAwardList?id=1&response_type=code&scope=snsapi_userinfo&state=STATE&component_appid=wx73b4adc05b76ee6a#wechat_redirect",
        data: {

        },
      }).then(res => {
        // this.updataImg = res.data.data;
        // console.log(this.updataImg);
        console.log(res);
        alert(res.data)


      }).catch(res => {
        console.log(res)
      })
    }
  },

  // created() {
  //   const _this = this;
  //   this.$axios.post("student/my/base").then(res => {
  //     _this.info = res.data.value;
  //     console.log(_this.info);
  //     userInfo.saveInfo(_this.info);
  //   });
  // },
  components: {
  }
})
</script>
<style>

</style>
