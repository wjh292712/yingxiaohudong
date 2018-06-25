<template>
  <div class="container">
    <header class="header">
      <span>
        </span>
          <span>参与活动赢大奖</span>
    </header>
    <section class="section">
      <button class="btn" @click="updataImg()">
        开始抽奖3
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
        url: "http://center.marketing.yunpaas.cn/jgg/activity/trialDrawAward?id=1",
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
</script>
<style>

</style>
