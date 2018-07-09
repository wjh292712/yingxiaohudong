<template>
<div class="main">
<div class="content">
<span class="split"></span>
<span class="set-pass-text">修改密码</span>
</div>
  <div class="input-div">
    <p class="p-input">
    <el-input v-model="history_pass" placeholder="原始密码"></el-input>
    </p>
    <p class="p-input">
          <el-input v-model="new_pass" placeholder="原始密码"></el-input>
    </p>
      <p class="p-input">
          <el-input v-model="confirm_pass" placeholder="请再次输入新密码"></el-input>
    </p>
    <p>
      <el-button class="save">主要按钮</el-button>
    </p>
  </div>
    </div>    
</template>

<script>
export default {
  data() {
    return {
      history_pass:"",
      new_pass:"",
      confirm_pass:""
    };
  }
};
</script>

<style lang="stylus" scoped>
.split {
    width: 5px;
    height: 15px;
    display: inline-block;
    background: #FC7132;
    position: relative;
    top: 25px;
    margin-left: 80px;
}
.set-pass-text{
  position relative
  top 22px
  font-weight bold
  font-size 20px
  left 10px
}
.input-div{
  margin-top 40px
  width 400px
  height 300px
  margin-left 100px
  p{
    height 60px
    .save{
      background #FC7132
      color #fff
    }
  }

}
</style>
