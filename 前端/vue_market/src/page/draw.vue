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
              <el-tabs v-model="activeName" >
                  <div class="indoContent">
                    <span>活动说明</span>
                    <span>我的奖品</span>
                  </div>
                  <div class="total">
                    <div class="to_left">
                      <span>100元</span>

                    </div>
                    <div class="to_right">
                      <h6 style="margin-top:20px;text-align:center;">话费券</h6>
                      <h6> 2018.2.1~2018.2.10</h6>
                    </div>
                  </div>
                  <div class=" copy">
                    <div class="co_left">
                      <span>100元</span>

                    </div>
                    <div class="co_right">
                      <h6 style="margin-top:20px;text-align:center;">话费券</h6>
                      <h6> 2018.2.1~2018.2.10</h6>
                    </div>
                  </div>
              </el-tabs>
            </div>
          </div>
          <div class="phone_title">

            <i class="el-icon-arrow-left"></i>
            <span class="phone_text">{{activeName1}}</span>
          </div>
          <div class="nine_blog">
            <div class="title_image"></div>
            <div class="inform">轮播通知</div>
            <div class="nine">

            </div>
            <!-- <div class="ten">

                                                                                                                                                                                                                                                                                                                                </div> -->
            <div class="confirm_text">
              <h5>您今天还有xxxx次抽奖机会</h5>
              <h5>已经中奖人数xxx</h5>
            </div>
            <div class="btn">
              <el-row>

                <el-button size="mini" round @click="centerDialogVisible = true">活动规则</el-button>
                <el-button size="mini" round>我的奖品</el-button>
              </el-row>
            </div>
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
      activeName1: '',
      centerDialogVisible: false,
      isMask: true,
      dataStatus:0,
      activeStartDate:'999',
      activeEndDate:'999',
      activerewordList1:'999',
      activerewordList2:'999',
      activerewordList3:'999',
      activerewordList4:'999',
      activerewordList5:'999',
      activerewordList6:'999',
      activerewordList7:'999',
      activeInfo:'活动规则介绍',
    }

  },
  mounted() {
    let _this=this
    this.$bus.on("send_Name",function (data) {
      _this.activeName1=data
    })
    this.activeN()
    this.dataStatus=this.$route.query.dataStatus
    if (this.dataStatus==='1') {
      this.activeN1()
    }

  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    activeN(){
      let _this = this
      let Data = sessionStorage.getItem('Data')
      _this.base_data = JSON.parse(Data).jggBaseSetup
      _this.reword_data = JSON.parse(Data).jggAwardSetupExtendList
      _this.activeName1 = _this.formName=_this.base_data.activityName
      _this.activeStartDate=_this.timestampToTime(_this.base_data.startDate)
      _this.activeEndDate=_this.timestampToTime(_this.base_data.endDate)
      _this.activerewordList1=_this.reword_data[0].prizeName
      _this.activerewordList2=_this.reword_data[1].prizeName
      _this.activerewordList3=_this.reword_data[2].prizeName
      _this.activerewordList4=_this.reword_data[3].prizeName
      _this.activerewordList5=_this.reword_data[4].prizeName
      _this.activerewordList6=_this.reword_data[5].prizeName
      _this.activerewordList7=_this.reword_data[6].prizeName
      _this.activeInfo=_this.base_data.rule
    },
    activeN1(){
      let _this = this
      _this.base_data = _this.$route.query.newjggData.jggBaseSetup
      _this.reword_data = _this.$route.query.newjggData.jggAwardSetupExtendList
      _this.activeName1 = _this.formName=_this.base_data.activityName
      _this.activeStartDate=_this.timestampToTime(_this.base_data.startDate)
      _this.activeEndDate=_this.timestampToTime(_this.base_data.endDate)
      _this.activerewordList1=_this.reword_data[0].prizeName
      _this.activerewordList2=_this.reword_data[1].prizeName
      _this.activerewordList3=_this.reword_data[2].prizeName
      _this.activerewordList4=_this.reword_data[3].prizeName
      _this.activerewordList5=_this.reword_data[4].prizeName
      _this.activerewordList6=_this.reword_data[5].prizeName
      _this.activerewordList7=_this.reword_data[6].prizeName
      _this.activeInfo=_this.base_data.rule
    },
    timestampToTime(timestamp) {
      var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      var D = date.getDate() + ' ';
      var h = date.getHours() + ':';
      var m = date.getMinutes() + ':';
      var s = date.getSeconds();
      return Y+M+D+h+m+s;
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
        .el-menu--horizontal>.el-menu-item {
          color: #FC7132;
        }
        .el-menu--horizontal>.el-menu-item.is-active {
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
              max-height: 31rem;
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
                  border: 1px solid #E8E8E8;
                  .nine_blog {
                    background: #Ffd800;
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
                    .confirm_text {
                      text-align: center;
                      width: 90%;
                      margin: 0 auto;
                      padding: .5rem 0;
                      font-size: .7rem;
                      font-weight: normal;
                      color: #cf3b1e;
                    }
                    .nine {
                      width: 90%;
                      margin: .5rem auto;
                      height: 13rem;
                      background: url(../../static/active/九宫格1.jpg) no-repeat;
                      background-size: 100%;
                    }
                    .ten {
                      width: 90%;
                      margin: .5rem auto;
                      height: 13rem;
                      background-size: 100%; // border: 1px solid #ccc;
                    }
                    .inform {
                      width: 85%;
                      margin: 0rem auto;
                      height: 1.17rem;
                      background: url(../../static/active/通知.png) no-repeat;
                      background-size: 100%;
                      font-size: .6rem;
                      text-indent: 2rem;
                      line-height: 1.17rem;
                      color: #cf3b1e;
                    }
                    .title_image {
                      width: 100%;
                      height: 6.25rem;
                      background: url(../../static/active/banner.jpg) no-repeat;
                      background-size: 100%;
                    }
                  }
                  .el-icon-arrow-left {}
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
  min-height: 55%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background: #Fff;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.indoContent{
  text-align: center;
  width: 90%;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  letter-spacing: 0;
  border-bottom: 1px solid #E8E8E8;
  span:nth-child(2){
    display: inline-block;
    color: #FF2437;
    height: 40px;
    border-bottom: 1px solid #FF2437;
    margin-left: 30px;
  }

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
  height: 4rem;
  margin: 1.3rem auto;
  display: flex;
  text-align: center;
}


.mask .center .total .to_left {
  width: 30%;
  background: #FF5210;
  color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.mask .center .total .to_left span {
  width: 3rem;
  height: 4rem;
  line-height: 4rem;
}

.mask .center .total .to_right {
  width: 70%;
  border: 1px solid #ccc;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #FF2F2D;
  color: #fff;
}

///
.mask .center .copy {
  width: 12rem;
  height: 4rem;
  margin: 0 auto;
  display: flex;
  margin-top: 10px;
  text-align: center;
}


.mask .center .copy .co_left {
  width: 30%;
  background: #D7D7D7;
  color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.mask .center .copy .co_left span {
  width: 3rem;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
}

.mask .center .copy .co_right {
  width: 70%;
  border: 1px solid #ccc;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #C2C0C0;
  color: #fff;
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

