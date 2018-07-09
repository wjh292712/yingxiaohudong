//传播数据
<template>
  <div class="app">
    <top-views></top-views>
    <bottom-view class="buttom-view"></bottom-view>
  </div>
</template>

<script>
  import TopViews from "./components/top";
  import BottomView from "./components/bottom";
  export default {
    components: {
      TopViews,
      BottomView
    }
  };
</script>

<style lang="stylus" scoped>
  .buttom-view{
    width 90%
    margin-left auto
    margin-right auto
    margin-top 30px
  }
</style>
