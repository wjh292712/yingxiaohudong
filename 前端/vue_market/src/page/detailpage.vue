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
          <div class="mask" v-show="isMask">
            <!--<div class="remove">-->
            <!--<span>X</span>-->
            <!--</div>-->
            <div class="center">
              <div v-model="activeName">

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
          <div class="phone_title">
            <i class="el-icon-arrow-left"></i>
            <span class="phone_text">{{activeName1}}</span>
          </div>
          <div class="nine_blog">
            <div class="title_image"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  // import setting from '@/page/setting'
  // import activepage from '@/page/activepage'
  // import from '../js/index.js'
  // import from '../js/index.css'
  export default ({
    data() {
      return {
        //侧边数据
        //筛选条件数据
        activeName: 'second',
        centerDialogVisible: false,
        isMask: true,
        activeName1: '',
        dataStatus: 0,
        siteSHow: true,
        rewIshow: false,
      }

    },
    mounted() {
      let _this = this
      this.$bus.on("send_Name", function (data) {
        _this.activeName1 = data
      })
      this.$bus.on("send_radio1", function (data) {
        if (data == 2) {
          _this.siteSHow = false
          _this.rewIshow = true
        } else if (data == 1) {
          _this.siteSHow = true,
            _this.rewIshow = false
        }
      })

    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },

    },
    components: {
      // prizedraw
      // setting,
      // activepage
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
                width: 31%;
                min-width: 13rem;
                min-height: 600px;
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
                    position: relative;
                    height: 521px;
                    border: 1px solid #E8E8E8;
                    .nine_blog {
                      width: 100%;
                      .btn {
                        padding: 0rem 0 .5rem 0;
                        position: relative;
                        .el-dialog__wrapper {
                          position: absolute;
                        }
                        .el-row {
                          text-align: center;
                          .el-button {
                            background: #FC5566;
                            color: #fff;
                            border: none;
                            width: 5rem;
                          }
                          .el-button:hover {
                            color: #F7E713;
                          }
                        }
                      }
                      .title_image {
                        width: 100%;
                        height: 485px;
                        background: url(../../static/active/jgg.png) no-repeat ;
                        background-size: 100%;
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
                      left: 44%;
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
              .active_title {
                width: 10%;
                font-size: 0.7rem;
                font-weight: normal;
                color: #000000;
                cursor: pointer;
              }
            }
          }
        }
      }
      .active_footer {
        padding: 1rem 1rem 0;
        border-top: 1px solid #ccc;
        width: 100%;
        .main_list {
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .main_list_box {
            border-radius: 0.3rem;
            border: 0.05rem solid #ccc;
            width: 18%;
            min-width: 7.75rem;
            .body_img {
              border-radius: 0.3rem;
              width: 100%;
              height: 80%;
              vertical-align: top;
              img {
                border-radius: 0.15rem;
                width: 100%;
                height: 100%;
                vertical-align: top;
              }
            }
            .body_text {
              text-align: center;
              h5 {
                width: 100%;
                font-size: .7rem;
              }
              .body_text_btn {
                font-size: .5rem;
                margin: 0.25rem 0;
                width: 3.5rem;
                height: 20%;
                border-radius: 0.15rem;
                background: #FC7132;
                color: #fff;
                display: inline-block;
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
    .images {
      width: 100%;
      height: 100%;
    }
    .to_left_award {
      position: absolute;
      top: 2.5rem;
      left: 40%;
      font-size: 20px;
      span:nth-child(1) {
        font-size: 12px;
      }
      span:nth-child(2) {
        font-size: 12px;
        color: #000000;
      }
    }
    .dateActive {
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

