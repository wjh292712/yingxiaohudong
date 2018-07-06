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
        activeName: '',
        centerDialogVisible: false,
        count: '900',
        dataStatus:0,
      }

    },
    created() {
      // console.log(222);
      // console.log(this);
      // this.$bus.$on('inputDate',(val)=>{
      //   console.log(333);
      //   console.log(val);
      //   this.activeName=val
      // })

    },
    mounted() {
      // this.updataImg()

      //let curname='';
      // let cua='';
      this.activeN()
      this.dataStatus=this.$route.query.dataStatus
      if (this.dataStatus==='1') {
        this.activeN1()
      }
      // this.$nextTick(function () {
      //   curname = settingbase.methods.partBase()
      //   // cua=settingbase.methods.inputData()
      //   console.log(curname);
      //   // console.log(cua);
      //   this.activeName=curname
      // })

    },
    updated() {
      // this.activeN()


    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      activeN() {
        let _this = this
        let Data = sessionStorage.getItem('Datadt')
        _this.base_data = JSON.parse(Data).dtBaseSetup
        _this.activeName = _this.formName = _this.base_data.activityName
      },
      activeN1() {
        let _this = this

        _this.base_data = _this.$route.query.newdtData.dtBaseSetup

        _this.activeName = _this.formName = _this.base_data.activityName
      },
      // updataImg() {
      //   this.$http({
      //     method: "post",
      //     url: "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8d8bbbd5fcf10745&redirect_uri=http://center.marketing.yunpaas.cn/jgg/activity/startDrawAward?id=1&response_type=code&scope=snsapi_userinfo&state=STATE&component_appid=wx73b4adc05b76ee6a#wechat_redirect",
      //     data: {},
      //   }).then(res => {
      //     console.log(res)
      //   }).catch(res => {
      //     console.log(res)
      //   })
      // }
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

                        .daticontent{
                          position: absolute;
                        font-family: STKaiti;
                          left: 12% ;
                          top: 20%;
                          font-size: 16px;
                       }
                        .act_img{
                          position: absolute;
                          top: 27%;
                          left: 13.5%;
                          img {
                            width: 245px;
                            height: 105px;
                          }
                        }
                        .active_info{
                          position: relative;
                          top: 50%;
                          left: 18%;
                          .ans1{
                            width: 100% ;
                            height: 100%;
                            position: relative;
                            top: 0;
                            left: 0;
                            img{
                              width: 30px;
                              height: 30px;
                              position: absolute;

                            }
                            .fontA{
                              position: absolute;
                              left: 3%;
                              top: 0%;
                              font-size: 20px;
                              color: #c83c36;
                            }
                            .fontCont{
                              position: absolute;
                              left: 10%;
                              margin-left: 10px;
                              text-align: center;
                              font-size: 20px;
                              color: #c83c36;
                            }
                            .active_dui{
                              position: absolute;
                              left: 50%;
                            }
                          }
                          .ans2{
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            top: 45px;
                            left: 0;
                            img{
                              width: 30px;
                              height: 30px;
                              position: absolute;

                            }
                            .fontB{
                              position: absolute;
                              left: 3%;
                              top: 5%;
                              font-size: 20px;
                              color: #80e599;
                            }
                            .fontCont{
                              position: absolute;
                              left: 10%;
                              margin-left: 10px;
                              text-align: center;
                              font-size: 20px;
                              color: #80e599;
                            }
                            .active_dui{
                              position: absolute;
                              left: 50%;
                            }
                          }
                          .ans3{
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 90px;
                            left: 0;
                            img{
                              width: 30px;
                              height: 30px;
                              position: absolute;

                            }
                            .fontC{
                              position: absolute;
                              left: 3%;
                              top: 5%;
                              font-size: 20px;
                              color: #c83c36;
                            }
                            .fontCont{
                              position: absolute;
                              left: 10%;
                              margin-left: 10px;
                              text-align: center;
                              font-size: 20px;
                              color: #c83c36;
                            }
                            .active_dui{
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
                      /*left: 46%;*/
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
            /*.body_img {*/
            /*border-radius: 0.3rem;*/
            /*width: 100%;*/
            /*height: 80%;*/
            /*vertical-align: top;*/
            /*img {*/
            /*border-radius: 0.15rem;*/
            /*width: 100%;*/
            /*height: 100%;*/
            /*vertical-align: top;*/
            /*}*/
            /*}*/
            /*.body_text {*/
            /*text-align: center;*/
            /*h5 {*/
            /*width: 100%;*/
            /*font-size: .7rem;*/
            /*}*/
            /*.body_text_btn {*/
            /*font-size: .5rem;*/
            /*margin: 0.25rem 0;*/
            /*width: 3.5rem;*/
            /*height: 20%;*/
            /*border-radius: 0.15rem;*/
            /*background: #FC7132;*/
            /*color: #fff;*/
            /*display: inline-block;*/
            /*}*/
            /*}*/
          }
        }
      }
    }
  }
</style>

