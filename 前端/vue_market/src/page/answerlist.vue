<template>
  <div class="active_wrap">
    <div class="active_con">
      <div class="active_rightCon">
        <div class="active_container">
          <div class="pic_view">
            <div class="nav_pic">
                <span v-for="(item,index) in tabs"
                      :key="index"
                      :class="num==index?'dora':''"
                      @click="tab(index)">{{item}}</span>
            </div>
            <el-tabs v-model="activeName">

              <div class="pic_ture">
                <div class="sett">
                  <answerset></answerset>
                </div>
                <div v-show="num==0">
                  <div class="active_down">
                    <div class="active_downCon">
                      <anspage></anspage>
                    </div>
                  </div>
                </div>
                <div v-show="num==1">
                  <!--游戏过程-->
                  <div class="active_down">
                    <div class="active_downCon">
                      <ansactive></ansactive>

                    </div>
                  </div>

                </div>
                <div v-show="num==2">
                  <!--挑战成功-->
                  <div class="active_down">
                    <div class="active_downCon">
                      <ansactivewin></ansactivewin>

                    </div>
                  </div>
                </div>
                <div v-show="num==3">
                  <!--挑战失败-->
                  <div class="active_down">
                    <div class="active_downCon">
                      <ansactiveno></ansactiveno>

                    </div>
                  </div>

                </div>
                <div v-show="num==4">
                  <!--游戏说明-->
                  <div class="active_down">
                    <div class="active_downCon">

                      <ansplainpage></ansplainpage>

                    </div>
                  </div>

                </div>
                <div v-show="num==5">
                  <!--抽奖页面-->
                  <div class="active_down">
                    <div class="active_downCon">
                      <ansdraw></ansdraw>
                    </div>
                  </div>
                </div>
                <div v-show="num==6">
                  <!--中奖页-->
                  <div class="active_down">
                    <div class="active_downCon">
                      <answinning></answinning>
                    </div>
                  </div>
                </div>
                <div v-show="num==7">
                  <!--未中奖页-->
                  <div class="active_down">
                    <div class="active_downCon">
                      <anslosing></anslosing>
                    </div>
                  </div>
                </div>
                <div v-show="num==8">
                  <!--我的奖品-->
                  <div class="active_down">
                    <div class="active_downCon">

                    <ansactivedraw></ansactivedraw>
                    </div>
                  </div>
                </div>
                <div v-show="num==9">
                  <!--奖品详情-->
                  <div class="active_down">
                    <div class="active_downCon">
                      <ansdetailpage></ansdetailpage>
                    </div>
                  </div>
                </div>
              </div>

            </el-tabs>
            <div class="view_vie"></div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

  // import setting from '@/page/setting'
  import answerset from '@/page/answerset'
  import anspage from '@/page/anspage'
  import ansactive from '@/page/ansactive'
  import ansactivewin from '@/page/ansactivewin'
  import ansactiveno from '@/page/ansactiveno'
  import ansplainpage from '@/page/ansplainpage'
  import ansdraw from '@/page/ansdraw'
  import ansactivedraw from '@/page/ansactivedraw'
  import ansdetailpage from '@/page/ansdetailpage'
  import answinning from '@/page/answinning'
  import anslosing from '@/page/anslosing'

  import detailpage from '@/page/detailpage'
  import losing from '@/page/losing'
  import winning from '@/page/winning'
  // import raffle from '@/page/raffle'

  // import {mapState, mapMutations, mapActions} from 'vuex';

  export default ({
    data() {
      return {
        //侧边数据
        //筛选条件数据
        activeName: 'first',
        centerDialogVisible: false,
        //tabs
        tabs: ["活动首页", "游戏过程", "挑战成功", "挑战失败", "游戏说明", "抽奖页面", "中奖页", "未中奖页", "我的奖品", "奖品详情",],
        num: 0
      }
    },
    computed: {
      // ...mapState(['setting_dtData']),
      // ...mapActions(['saveDatadt'])
    },
    mounted() {
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/dt/activitySetup/init",//数据初始化接口
        params: {},
      }).then(res => {

      })
    },
    methods: {
      tab(index) {
        this.num = index;
      }
    },
    components: {
      // setting,
      answerset,
      anspage,
      ansactive,
      ansactivewin,
      ansactiveno,
      ansplainpage,
      ansdraw,
      ansactivedraw,
      ansdetailpage,
      anslosing,
      answinning
    }
  })
</script>


<style lang="scss">
  .pic_ture {
    position: relative;
  }

  .sett {
    width: 65%;
    height: 100%;
    position: absolute;
    right: 0;
    margin-bottom: 4rem;
    margin-left: 40%;
    overflow: auto;
  }

  .dora {
    border-bottom: 2px solid #fd4689;
  }

  .container {
    width: 100%;
    height: auto;
    background: #fff;
  }

  .pic_view {
    width: 112%;
    height: auto;
    position: relative;
  }

  .nav_pic {
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    /* box-shadow: 0 2px 9px 0 #eeeeee; */
    border-bottom: 2px solid #f0f0f0;
    display: flex;
    justify-content: flex-start;
    padding: 0 10px;
    font-size: 14px;
    color: #000;
  }

  .nav_pic > span {
    margin-right: 30px;
  }

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
            width: 6rem;
            height: 1.5rem;
            line-height: 1.5rem;
            text-align: center;
            background: #fc7132;
            padding: 0;
            border: 1px solid #fc7132;
          }
          .el-button--primary:hover {
            background: #fbfbfb;
            color: #4a4a4a;
            border: 1px solid #9b9b9b;
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
                min-height: 31rem;
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
                    .el-icon-arrow-left {
                    }
                    .phone_title {
                      position: relative;
                      margin: .5rem 0;
                    }
                    .phone_text {
                      position: absolute;
left: 41%;
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
                /*justify-content: space-around;*/
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
          /*justify-content: space-between;*/
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

