<template>
    <div class="container">
      <!-- <header class="header">
                                <span>聚通达</span>
                             </header> -->
      <section class="section">
        <div class="wrapper">
          <div class="left">
            <span>立足企业营销场景，提升营销活动效率</span>
          </div>
          <div class="right">
            <div class="inps">
                <h3 class="title">
                    系统检测到您当前的账号归属多个企业，请选择登录
                </h3>
                <div class="company">
                <div class="company_con">
                    <i></i>
                    <span>北京聚通达科技股份有限公司</span>
                </div>
                <div class="company_con">
                    <i></i>
                    <span>北京聚通达科技股份有限公司</span>
                </div>
                <div class="company_con">
                    <i></i>
                    <span>北京聚通达科技股份有限公司</span>
                </div>
                <div class="company_con">
                        <i></i>
                        <span>北京聚通达科技股份有限公司</span>
                    </div>
                <div class="company_con">
                    <i></i>
                    <span>北京聚通达科技股份有限公司</span>
                </div>
                <div class="company_con">
                    <i></i>
                    <span>北京聚通达科技股份有限公司</span>
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>

<script>
    export default({

    })
</script>

<style scss="lang" scoped>
.section {
  width: 100%;
  height: 100%;
  position:absolute;
  left:0;
  top:0;
}

.wrapper {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #f4f4f4;
}

.wrapper .left {
  width: 50%;
  height: 25rem;
  line-height: 25rem;
  text-align: center;
}

.wrapper .left span {
  font-size: 1rem;
}

.wrapper .right {
  width: 50%;
  position: relative;
}

.inps {
  width: 70%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background: #fff;
}

.inps form {
  margin-left: 2.5rem;
  border-bottom: 1px solid #ccc;
  width: 80%;
  margin-top: 1.5rem;
}

.inps form label {
  margin-left: 1rem;
  font-size: 1rem;
}

.inps .ipt {
  border-bottom: 1px solid #ccc;
  padding: 0.15rem;
  margin-top: 1.5rem;
  width: 75%;
  margin-left: 3.5rem;
}

.inps .ipt input {
  width: 100%;
  height: 100%;
  border: 0px;
  outline: none;
  cursor: pointer;
  padding: 0.4rem;
}

.cents {
  width: 75%;
  margin-top: 0.5rem;
  margin-left: 3.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.45rem;
}

.btns {
  width: 75%;
  height: auto;
  margin-top: 0.5rem;
  margin-left: 3.5rem;
}

.btns .btn {
  width: 100%;
  margin: 0 auto;
  height: 2rem;
  background: #079BD3;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1rem;
}

.sign {
  width: 100%;
  height: 1rem;
  text-align: center;
  outline: none;
  color: #079BD3;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.sign a {
  text-decoration: none;
  color: #079BD3;
  font-size: 0.75rem;
}
/* <!-- 右边部分 --> */
.right .inps {
    text-align:center;
}
.right .inps .title {
    font-size:.75rem;
    width:100%;
    font-weight:normal;
    line-height:4rem;
    border-bottom:solid 1px #ccc;
}
.right .inps .company {
    width:100%;
    height:12rem;
    overflow:hidden;
    overflow-y: scroll;
}
.right .inps .company .company_con {
    font-size:.7rem;
    width:85%;
    margin:0 auto;
    border-bottom:solid 1px #ccc;
    line-height: 3rem;
}
</style>
