<template>
<div class="main">
<top-view></top-view>
<bottom-view class="bottom-view"></bottom-view>
</div>    
</template>

<script>
import TopView from "./components/top"
import BottomView from "./components/bottom"
export default {
components:{
   TopView,
    BottomView
}
}
</script>

<style lang="stylus" scoped>
.bottom-view{
    position absolute
    bottom 0px
}
</style>
