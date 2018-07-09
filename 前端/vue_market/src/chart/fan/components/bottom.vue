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
    <el-tab-pane label="粉丝分析" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
        </div>
    </div>
</template>

<script>
  import Basiclist from './basicList'
  import chartsSpread from './chartsSpread'
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
  components:{
    Basiclist,
    chartsSpread
  }
}
</script>

<style lang="stylus" scoped>

</style>
