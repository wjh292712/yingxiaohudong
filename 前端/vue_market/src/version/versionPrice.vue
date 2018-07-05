<template>
  <div class="verprice_wrap">
    <div class="verprice_content">
      <div class="verprice_list">

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    },
    created() {
      $(body).css("fontsize","100px")

    },
    methods: {},
    components: {},
    computed: {}
  }
</script>

<style lang="scss" scoped>
  .verprice_wrap {
    width: 100%;
    height: 100%;
    min-width: 1388px;
    position: relative;
    left: -11%;
    background: #fff;
    padding: 2rem;
    .verprice_list{
      width: 90%;
      max-width: 1287px;
      height: 64px;
      background: #c2e7b0;

    }
  }
</style>
