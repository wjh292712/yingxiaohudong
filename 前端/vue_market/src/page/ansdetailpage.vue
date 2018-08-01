<template>
  <div class="container">
    <div class="active_phoneWrap">
      <div class="active_phoneCon">
        <div class="phone_head">
          <div class="circle1">
            <span class="point3"></span>
          </div>
          <div class="circle2">
            <span class="point1"></span>
            <span class="point2"></span>
          </div>
        </div>
        <div class="phone_body">
          <div class="phone_title">
            <i class="el-icon-arrow-left"></i>
            <span class="phone_text">{{activeName}}</span>
          </div>
          <div class="nine_blog">
            <div class="title_image">
              <h3>第1题／共5题</h3>
              <span class="daticontent">世界上最大的沙漠是下面哪个沙漠？</span>
              <span class="act_img"><img src="../../static/active/shamo.png" alt=""></span>
              <div class="active_info">
                <p class="ans1">
                  <img src="../../static/active/yes.png" alt="  ">
                  <i class="fontA">A</i>
                  <span class="fontCont">撒哈拉沙漠</span>
                  <span class="active_dui"><img src="../../static/active/dui.png" alt=""></span>
                </p>
                <p class="ans2">
                  <img src="../../static/active/no.png" alt="  ">
                  <i class="fontB">B</i>
                  <span class="fontCont">撒哈拉沙漠</span>
                  <span class="active_dui"><img src="../../static/active/cuo.png" alt=""></span>
                </p>
                <p class="ans3">
                  <img src="../../static/active/yes.png" alt="  ">
                  <i class="fontC">C</i>
                  <span class="fontCont">撒哈拉沙漠</span>
                </p>

              </div>
            </div>
          </div>
          <div class="mask" >
            <!--<div class="remove">-->
            <!--<span>X</span>-->
            <!--</div>-->
            <div class="center">
              <div v-model="activeName" >

                <div class="total">
                  <div class="to_left">
                    <img src="../../static/active/dijias.png" alt="" class="images">
                    <p style="text-align:center;" class="to_left_award"><span>¥</span>100<span>话费券</span></p>
                    <p class="dateActive"> 2018.2.1~2018.2.10</p>
                  </div>
                  <div class="to_right" v-show="rewIshow">
                    <h3>立即兑换</h3>
                  </div>
                </div>
                <div class="site" v-show="siteSHow">
                  <p>
                    <b>兑奖说明:</b>
                    <span>不填写则不显示</span>
                  </p>
                  <p>
                    <b>
                      门店地址：
                    </b>
                    <span>
                      北京市朝阳区四惠东
                    </span>
                  </p>
                  <p>
                    <b>
                      客服电话：
                    </b>
                    <span>
                      1310000000
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';
  import '../plugins/sudoku/index.css'
  import '../plugins/sudoku/index.js'
  import setting from '@/page/setting'
  import activepage from '@/page/activepage'
  import settingbase from '@/page/settingbase'
  // import raffle from '@/page/raffle'
  export default ({
    data() {
      return {
        //侧边数据
        //筛选条件数据
        activeName:'',
        activeName1: '',
        centerDialogVisible: false,
        count: '900',
        dataStatus:0,
        siteSHow:true,
        rewIshow:false,
      }

    },
    created() {

    },
    mounted() {
      let _this = this
      this.$bus.on("send_name",function (data) {
        _this.activeName=data
      })
      this.$bus.on("send_radio1",function (data) {
        if(data==2){
          _this.siteSHow=false
          _this.rewIshow=true
        }else if(data==1){
          _this.siteSHow=true,
            _this.rewIshow=false
        }
      })
    },
    updated() {

    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
    },

    components: {
      // prizedraw,
      setting,
      activepage
    }
  })
</script>
<style lang="scss" scoped>
  .active_wrap {
    width: 85%;
    background: #fff;
    .active_con {
      width: 95%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .active_rightCon {
        width: 100%;
        .active_container {
          width: 95%;
          margin: 0.5rem auto;

          /* 活动首页样式 */
          .last_box {
            height: 60px;
            line-height: 60px;
            position: absolute;
            right: 0;
          }
          .el-menu--horizontal > .el-menu-item {
            color: #FC7132;
          }
          .el-menu--horizontal > .el-menu-item.is-active {
            border-bottom: #FC7132 2px solid;
          }
          .el-button--primary {
            width: 4rem;
            height: 1.5rem;
            line-height: 1.5rem;
            text-align: center;
            background: greenyellow;
            padding: 0;
            border: 1px solid greenyellow;
          }
          .active_down {
            width: 100%;
            .active_downCon {
              width: 95%;
              margin: 1rem auto;
              display: flex;
              justify-content: space-around;
              flex-wrap: nowrap;
              .active_phoneWrap {
                width: 34%;
                min-width: 13rem;
                max-height: 26rem;
                border-radius: 1.2rem;
                border: 1px solid #e8e8e8;
                .active_phoneCon {
                  width: 95%;
                  margin: 0rem auto;
                  .phone_head {

                    text-align: center;
                    .circle1 {
                      .point3 {
                        width: .5rem;
                        height: .5rem;
                        background: #D8D8D8;
                        border-radius: 50%;
                        display: inline-block;
                      }
                    }
                    .circle2 {
                      /* width:.3rem;
                                              height:.3rem;
                                              background:#D8D8D8;
                                              border-radius:50%; */
                      .point1 {
                        display: inline-block;
                        width: .3rem;
                        height: .3rem;
                        background: #D8D8D8;
                        border-radius: 50%;
                      }
                      .point2 {
                        display: inline-block;
                        width: 3.2rem;
                        height: .3rem;
                        background: #D8D8D8;
                        border-radius: 13px;
                      }
                    }
                  }
                  .phone_body {
                    border: 1px solid #E8E8E8;
                    position: relative;
                    overflow: hidden;
                    .nine_blog {
                      width: 100%;
                      height: 520px;
                      background: none;
                      margin: 0 auto;
                      .title_image {
                        background: url("../../static/active/dati_ye.png") no-repeat center;
                        height: 100%;
                        width: 100%;
                        overflow: hidden;
                        background-size: 100%;
                        position: relative;
                        h3{
                          color: #ba451a;
                          position: absolute;
                          top: 10%;
                          left: 38%;
                        }
                        .daticontent {
                          position: absolute;
                          font-family: STKaiti;
                          left: 12%;
                          top: 20%;
                          font-size: 16px;
                        }
                        .act_img {
                          position: absolute;
                          top: 27%;
                          left: 13.5%;
                          img {
                            width: 245px;
                            height: 105px;
                          }
                        }
                        .active_info {
                          position: relative;
                          top: 50%;
                          left: 18%;
                          .ans1 {
                            width: 100%;
                            height: 100%;
                            position: relative;
                            top: 0;
                            left: 0;
                            img {
                              width: 30px;
                              height: 30px;
                              position: absolute;

                            }
                            .fontA {
                              position: absolute;
                              left: 3%;
                              top: 0%;
                              font-size: 20px;
                              color: #c83c36;
                            }
                            .fontCont {
                              position: absolute;
                              left: 10%;
                              margin-left: 10px;
                              text-align: center;
                              font-size: 20px;
                              color: #c83c36;
                            }
                            .active_dui {
                              position: absolute;
                              left: 50%;
                            }
                          }
                          .ans2 {
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            top: 45px;
                            left: 0;
                            img {
                              width: 30px;
                              height: 30px;
                              position: absolute;

                            }
                            .fontB {
                              position: absolute;
                              left: 3%;
                              top: 5%;
                              font-size: 20px;
                              color: #80e599;
                            }
                            .fontCont {
                              position: absolute;
                              left: 10%;
                              margin-left: 10px;
                              text-align: center;
                              font-size: 20px;
                              color: #80e599;
                            }
                            .active_dui {
                              position: absolute;
                              left: 50%;
                            }
                          }
                          .ans3 {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 90px;
                            left: 0;
                            img {
                              width: 30px;
                              height: 30px;
                              position: absolute;

                            }
                            .fontC {
                              position: absolute;
                              left: 3%;
                              top: 5%;
                              font-size: 20px;
                              color: #c83c36;
                            }
                            .fontCont {
                              position: absolute;
                              left: 10%;
                              margin-left: 10px;
                              text-align: center;
                              font-size: 20px;
                              color: #c83c36;
                            }
                            .active_dui {
                              position: absolute;
                              left: 50%;
                            }
                          }
                        }
                      }
                    }
                    .el-icon-arrow-left {
                    }
                    .phone_title {
                      position: relative;
                      margin: .5rem 0;

                    }
                    .phone_text {
                      position: absolute;
                      left: 46%;
                      height: 1.5rem;
                      line-height: 1.5rem;
                      font-size: .7rem;
                      display: inline-block;
                      text-align: center;
                    }
                  }
                }
              }
            }
          }

          /* 活动列表页样式 */
          .active_header {
            font-size: 0.8rem;
            line-height: 1.2rem;
            font-weight: normal;
            margin-bottom: 0.5rem;
          }
          .active_mall {
            background: #F2F2F2;
            /* opacity: 0.45; */
            padding: 1rem;
            width: 100%;
            margin-bottom: 1rem;

            .active_body {
              display: flex;
              /* justify-content:space-around; */
              flex-wrap: nowrap;
              margin-bottom: 0.5rem;
              width: 95%;
              background: #F2F2F2;
              .body_list {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                width: 90%;
                .body_list_con {
                  width: 10%;
                  /* min-width:6rem; */
                  font-size: 0.6rem;
                }
              }

            }
          }
        }
      }
    }
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
    width: 90%;
    height: 55%;
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
    width: 12rem;
    height: 3rem;
    margin: 0 auto;
    /*display: flex;*/
    margin-top: 2.5rem;
  }


  .mask .center .total .to_left {
    width: 100%;
    background: #fff;
    color: #000000;
    border: 1px solid #ccc;
    border-radius: 10px;
    .images{
      width: 100%;
      height: 100%;
    }
    .to_left_award{
      position: absolute;
      top: 2.5rem;
      left: 40%;
      font-size: 20px;
      span:nth-child(1){
        font-size: 12px;
      }
      span:nth-child(2){
        font-size: 12px;
        color: #000000;
      }}
    .dateActive{
      position: absolute;
      top: 4.6rem;
      left: 35%;
      font-size: 12px;
      color: #6d6d72;
    }
  }

  .mask .center .total .to_left span {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
  }

  .mask .center .total .to_right {
    width: 100%;
    height: 1.8rem;
    line-height: 1.8rem;
    border: 1px solid #ccc;
    border-radius: 30px;
    background: #FF2F2D;
    margin-top: 20px;
    text-align: center;
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
    margin: 2rem auto;
  }

  .mask .site p {
    margin-top: 10px;
    margin-left: -20px;
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

