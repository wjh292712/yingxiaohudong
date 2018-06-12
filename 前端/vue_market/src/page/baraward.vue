//砍价设置
<template>
  <div class="container">
    <div class="send">
      <el-form ref="form" :model="form" label-width="100px">
        <p>
          <span>砍价金额范围(元)：</span>
          <el-input v-model="input1" placeholder="请输入内容" class="nns" />
         ——
          <el-input v-model="input2" placeholder="请输入内容"  class="nns"/>
        </p>
        <p>
          <span>砍到底价成功概率：</span>
          <el-input v-model="input3" placeholder="请输入内容" class="nns" />
          <span>%</span>
        </p>
        <p>
          <span>底价保留时长：</span>
          <el-input v-model="input4" placeholder="请输入内容" class="nns" />
          <span>小时</span>
        </p>
        <p>
          <span>不同商品，每人最多参与砍价数量：</span>
          <el-input v-model="input5" placeholder="请输入内容" class="nns" />
          <span>件</span>
        </p>
        <p>
          <span>一人能为多少玩家助力：</span>
          <el-input v-model="input6" placeholder="请输入内容" class="nns" />
          <span>件</span>
        </p>
        <p>
        <!--<el-form-item label="用户端是否显示排行榜" >-->
          <span>用户端是否显示排行榜</span>
          <el-radio-group v-model="radio1">
            <el-radio label="1" checked>是</el-radio>
            <el-radio label="2">否</el-radio>

          </el-radio-group>
        <!--</el-form-item>-->
        </p>
      </el-form>
        <!--<button @click="saveAward()">保存</button>-->
      <el-button type="primary" >保存</el-button>
      <el-button type='primary' >返回</el-button>

    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    data() {
      return {
        radio1:'',
        form:'',
        input1:'',
        input2:'',
        input3:'',
        input4:'',
        input5:'',
        input6:'',
        input7:'',
      }
    },
    created(){

      // this.saveAward()
    },
    mounted(){
      this.partAward()
    },
    computed:{
      ...mapState(['setting_kjData']),
      ...mapActions(['saveDatakj'])
    },
    methods: {
      partAward(){

      }
    }
  }
</script>
<style lang="scss" scoped>
 .nns{
   width: 150px;
   height: 30px;
 }
  /*.subnnn{*/
    /*font-size: px;*/
  /*}*/
</style>
<style>
  .send .el-input__inner {
    height: 1rem;
  }
</style>
