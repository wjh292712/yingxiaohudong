<template>
  <div class="container">
    <header class="header">
      <a>
        </a>
          <a>参与活动赢大奖</a>
          <a></a>
    </header>
    <section class="section">
      <div class="mask" v-show="isMask">
        <div class="remove">
          <span>X</span>
        </div>
        <div class="center">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="活动说明" name="first">
              <div class="explain">
                <p class="rule">活动时间</p>
                <p>
                  <span>9999</span>
                </p>
              </div>
              <div class="explain">
                <p class="rule"> 活动奖品</p>
                <p>
                  <span>9999</span>
                </p>
              </div>
              <div class="explain">
                <p class="rule">活动规则</p>
                <p>
                  <span>9999</span>
                </p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="我的奖品" name="second">我的奖品</el-tab-pane>
          </el-tabs>
        </div>

      </div>

      <nav class="nav">
        <img src="../assets/images/banner.jpg" alt="">
      </nav>
      <div class="cent">
        <img src="../assets/images/tell.png" alt="">

      </div>
      <div class="setting">
        <div class="setting_img">
          <img src="../assets/images/setting.png" alt="">
        </div>
        <!-- <img src="../assets/images/setting.png" alt=""> -->
        <div class="ten">
          <div class="box">
            <img style="opacity:1" class="img_bei" v-for="(item,index) in url" :src="item" alt="111" name="pic" :key="index" @click="updataImg()">
          </div>
        </div>
      </div>
      <div class="change">
        <span>
          你今天还有xxx次抽奖机会
        </span>
      </div>
      <div class="btns">
        <span>
          <button class="left_btn">活动规则</button>
        </span>
        <span>
          <button class="right_btn">我的奖品</button>
        </span>
      </div>

    </section>
  </div>
</template>
<script>
import '../plugins/sudoku/index.css';
import '../plugins/sudoku/index.js'
export default {
  data() {
    return {
      activeName: 'first',
      centerDialogVisible: false,
      isMask: true,
      url: [
        require('../assets/images/111.jpg'),
        require('../assets/images/111.jpg'),
        require('../assets/images/111.jpg'),
        require('../assets/images/111.jpg'),
        require('../assets/images/prize.jpg'),
        require('../assets/images/111.jpg'),
        require('../assets/images/111.jpg'),
        require('../assets/images/111.jpg'),
        require('../assets/images/111.jpg')
      ]

    }
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    },
  }
}
</script>

<style lange="sass" scoped>
.container {
  width: 100%;
  height: 100;
  background: #DEC;
}

.header {
  width: 100%;
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  padding: 0 0.3rem;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
}

.header a {
  color: #333;
  font-size: 16px;
  /*adding: 0 0.3rem; */
}

.section {
  width: 100%;
  background: #FFD800;
  flex: 1;
  overflow-y: scroll;
}

.section .nav {
  width: 100%;
  height: 150px;
}

.section .nav img {
  width: 100%;
  height: 100%;
}



.section .cent {
  width: 100%;
  height: 2rem;
  margin: 0 auto;
}

.section .cent img {
  width: 80%;
  height: 80%;
  /* margin: auto; */
  text-align: center;
  margin-left: 7%;
}

.section .setting {
  width: 100%;
  height: 12rem;
}

.section .setting img {
  width: 50px;
  height: 50px;
}

.section .change {
  width: 100%;
  height: 3rem;
}

.section .change span {
  width: 80%;
  height: 3rem;
  line-height: 3rem;
  margin-left: 20%;
}

.section .setting_img {
  width: 100%;
  height: 12rem;
  margin-left: 10%;
  position: relative;
}

.section .setting_img img {
  width: 80%;
  height: 100%;
}

.section .setting .ten {
  width: 100%;
  margin: .3rem auto;
  height: 10.5rem;
  background-size: 100%;
  position: absolute;
  top: 11.2rem;
}

.section .btns {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
}

.section .btns span {
  height: 3rem;
  margin-top: 1rem;
  width: 6rem;
}

.section .btns span .left_btn {
  height: 1rem;
  background: #FC5566;
  width: 6rem;
  border-radius: 1rem;
  outline: none;
  outline: none;
  border: none;
  color: #fff;
}

.section .btns span .right_btn {
  height: 1rem;
  background: #FC5566;
  width: 6rem;
  border-radius: 1rem;
  outline: none;
  border: none;
  color: #F7C727;
}

.section {
  width: 100%;
  background: #ffffff;
  flex: 1;
  overflow-y: scroll;
}

.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 90
}

.mask .center {
  width: 80%;
  height: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background: #Fff;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.mask .center .explain {
  margin-top: 10px;
  margin-left: 10px;
}

.mask .center .rule {
  color: red;
}

.mask .center .total {
  width: 9rem;
  height: 3rem;
  margin: 0 auto;
  display: flex;
  margin-top: 1.5rem;
}


.mask .center .total .to_left {
  width: 70%;
  background: #FF5210;
  color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.mask .center .total .to_left span {
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
}

.mask .center .total .to_right {
  width: 30%;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #FF2F2D;
  color: #fff;
}

.mask .center .total .to_right span {
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
}

.mask .site {
  width: 9rem;
  height: 4rem;
  margin: 0 auto;
}

.mask .site p {
  margin-top: 5px;
  margin-left: 5px;
}

.mask .remove {
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  position: absolute;
  right: 5%;
  top: 20%;
}

.mask .remove span {
  margin-left: 30%;
  color: #fff;
}
</style>
