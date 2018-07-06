<template>
  <div class="container">
    <header class="header">
      <a>
        </a>
          <a>参与活动赢大奖</a>
          <a></a>
    </header>

    <section class="section">
      <div class="cent">
        <span>恭喜获得</span>
      </div>
      <div class="imgcent">
        <div class="imgcenter">
          <img src="../assets/images/win-1.jpg" alt="">
        </div>
      </div>
      <div class="fontcent">
        <span>差的是运气,不是人品哦</span>
      </div>
      <div class="btncent">
        <span>
          <button class="once">查看奖品详情</button>
        </span>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  data() {
    return {

    }
  }
}
</script>

<style lange="sass" scoped>
container {
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
  background: #ffffff;
  flex: 1;
  overflow-y: scroll;
}

.section .cent {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
}

.section .cent span {
  display: inline-block;
  color: red;
  font-size: 16px;
  height: 3rem;
}

.section .imgcent {
  width: 100%;
  height: 10rem;
  position: relative;
}

.section .imgcent .imgcenter {
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  /* background: #f00; */
}

.section .imgcent .imgcenter img {
  width: 100%;
  height: 100%;
}

.section .fontcent {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
}

.section .fontcent span {
  display: inline-block;
  color: #333;
  font-size: 16px;
  height: 3rem;
}

.section .btncent {
  width: 100%;
  height: 4rem;
  text-align: center;
  margin-top: 2rem;
}

.section .btncent span {
  display: inline-block;
  color: #333;
  font-size: 16px;
  height: 4rem;
}

.section .btncent span button {
  width: 10rem;
  border-radius: 20px;
  height: 2rem;
  border: 0;
  outline: none;
  background: #FF2437;
  color: #fff;
}
</style>
