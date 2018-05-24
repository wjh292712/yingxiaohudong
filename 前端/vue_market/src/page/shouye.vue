<template>
  <div class="container">
    <header class="header">
      <span>
        </span>
          <span>参与活动赢大奖</span>
    </header>
    <section class="section">
      <button class="btn" @click="updataImg()">
        开始抽奖
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
        console.log(res);
        alert(res.data.data.prizeName)


      }).catch(res => {
        console.log(res)
      })
    }
  },

  components: {
  }
})
</script>
</script>
<style>

</style>
