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
            <span class="phone_text">参与赢大奖</span>
          </div>
          <div class="nine_blog">
            <div class="title_image"></div>
            <div class="inform">轮播通知</div>

            <div class="ten">
              <div class="box">
                <img style="opacity:1" v-for="(item,index) in url" :src="item" alt="111" name="pic" :key="index" @click="updataImg()">
              </div>
            </div>
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
import axios from 'axios';
import qs from 'qs';
import '../plugins/sudoku/index.css'
import '../plugins/sudoku/index.js'
import setting from '@/page/setting'
import activepage from '@/page/activepage'
// import raffle from '@/page/raffle'
export default ({
  data() {
    return {
      //侧边数据
      //筛选条件数据
      activeName: 'first',
      centerDialogVisible: false,

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
  created() {

  },
  mounted() {
    // this.updataImg()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    updataImg() {
      this.$http({
        method: "post",
        url: "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8d8bbbd5fcf10745&redirect_uri=http://center.marketing.yunpaas.cn/jgg/activity/startDrawAward?id=1&response_type=code&scope=snsapi_userinfo&state=STATE&component_appid=wx73b4adc05b76ee6a#wechat_redirect",
        data: {

        },
      }).then(res => {
        console.log(res)
      }).catch(res => {
        console.log(res)
      })
    }
  },

  // created() {
  //   const _this = this;
  //   this.$axios.post("student/my/base").then(res => {
  //     _this.info = res.data.value;
  //     console.log(_this.info);
  //     userInfo.saveInfo(_this.info);
  //   });
  // },
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
                    .ten {
                      width: 90%;
                      margin: .5rem auto;
                      height: 10.5rem;
                      background-size: 100%;
                      position:relative;
                    }
                    .inform {
                      width: 85%;
                      margin: 0rem auto;
                      height: 1.17rem;
                      background: url(../../static\active\通知.png) no-repeat;
                      background-size: 100%;
                      font-size: .6rem;
                      text-indent: 2rem;
                      line-height: .8rem;
                      color: #cf3b1e;
                    }
                    .title_image {
                      width: 100%;
                      height: 6.25rem;
                      background: url(../../static\active\banner.jpg) no-repeat;
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
                    left: 40%;
                    height: 1.5rem;
                    line-height: 1.5rem;
                    font-size: .7rem;
                    display: inline-block;
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
</style>

