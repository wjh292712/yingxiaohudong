<template>
    <div class="main">
        <div class="content">
            <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="基本数据" name="first">
      <Basiclist/>
    </el-tab-pane>
    <el-tab-pane label="传播分析" name="second">
      <chartsSpread/>
    </el-tab-pane>
    <el-tab-pane label="粉丝分析" name="third">
<fan-view></fan-view>
    </el-tab-pane>
 
  </el-tabs>
        </div>
    </div>
</template>

<script>
  import Basiclist from './basicList'
  import chartsSpread from './chartsSpread'
  import    FanView from "./charts"
export default {
name:"BottomView",
data(){
    return{
         activeName: 'first'
    }
},
methods:{
    handleClick(tab, event) {
        console.log(tab, event);
      }
},
mounted(){
this.$bus.on("name",content=>{
    this.activeName=content

})
},
  components:{
    Basiclist,
    chartsSpread,
    FanView
  }
}
</script>

<style lang="stylus" scoped>

</style>
