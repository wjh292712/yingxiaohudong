<template>
  <div class="main_wrap" style="display:block">
    <div class="main_con">
      <header>
        <div class="header_con">
          <div class="header_one">
            <span class="one_text">北京聚通达科技股份有限公司</span>
            <span class="ver_text">{{versionContent}}</span>
            <span @click="upVerSion()" class="upVer">升级版本</span>
            <i class="one_icon1"></i>
            <i class="one_icon2"></i>
          </div>
          <div class="header_two">
            <div class="two_con">
              <i class="iconfont icon-gonggao1"></i>
                <span v-for="(item,index) in informmsg" class="Notice">
                  <a :href="item.url" target="_blank">{{item.content}}</a>
                </span>
            </div>
          </div>
          <div class="bannerImg">
            <img src="../../static/active/banner1.png" alt="">
          </div>
        </div>
      </header>
      <div class="main_body">
        <div class="up">
          <h3>推荐活动</h3>
          <div class="main_list">
            <div class="main_list_box" v-for="(item,index) in mainmsg" :key="index" @click="targetActive(item)">
              <div class="body_img">
                <img :src=item.img alt="">

              </div>
              <div class="body_text">
                <h5>{{item.title}}</h5>
                <span class="body_text_btn">创建活动</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main_body_award">
        <div class="up">
          <h3>热门奖品</h3>
          <div class="main_list">
            <div class="main_list_box" v-for="(item,index) in awardmsg" :key="index" @click="targetActive(item)">
              <div class="body_img">
                <img :src=item.homeImg alt="">
              </div>
              <div class="body_text">
                <h5>{{item.title}}</h5>
                <span class="body_text_btn">创建活动</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex'
  import axios from 'axios';
  import qs from 'qs';

  export default ({
    data() {
      return {
        mainmsg: [],
        informmsg: [],
        createDate: '',
        versionContent: '标准版',
        awardmsg: [],//热门奖品

      }

    },
    created() {

    },
    computed: {
      ...mapState(['count', 'banner']),
      ...mapActions(['saveForm'])
    },
    mounted() {
      let _this = this
      this.$emit("hides", true)
      this.inform()
      this.versionContent = sessionStorage.getItem("vsersionName")
      console.log(this.versionContent + "ddd");
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/center/activityDataModel/list",
        params: {},
      }).then(res => {
        _this.mainmsg = res.data.data.list
      })


    },
    methods: {

      upVerSion() {
        this.$router.push({path: '/indexVers/versionCart'})
      },
//跳转活动页面
      targetActive(e) {

        if (e.id === 1) {
          this.$router.push({path: "/activeslide/activelist"})
          // window.location.href="/activeslide/answerlist/#/activeslide/activelist"
        } else if (e.id === 2) {
          this.$router.push({path: '/activeslide/answerlist'})
        }
        else if (e.id === 3) {
          this.$router.push({path: '/activeslide/bargainlist'})
        }

      },

      inform() {
        // 商品列表
        this.$axios({
          method: "post",
          url: "center/activityDataModel/list",
          params: {}
        }).then(res => {
          // console.log(res.data.data)
          this.mainmsg = res.data.data.list
          console.log(this.mainmsg)
        }).catch(res => {
          console.log(res)
        })

         //热门奖品列表
        this.$axios({
          method:'get',
          url:'http://center.marketing.yunpaas.cn/center/shopGoods/getRecommendList',
          params:{}
        }).then(res=>{
          console.log(res)
          this.awardmsg=res.data.data

        }).catch(res=>{
          console.log(res)
        })


        //通告接口

        this.$axios({
          method: "post",
          url: "http://center.marketing.yunpaas.cn/center/activityNotice/list",
          params: {}
        }).then(res => {
          this.informmsg = res.data.data
          // for (var i = 0; i < this.informmsg.length; i++) {
          //   this.createDate=this.informmsg[i].createDate
          //   const a=new Date()
          //   console.log(this.createDate);
          //   console.log(a);
          //   if(this.createDate-a<0){
          //     this.informmsg.splice(i,1)
          //   }
          // }
        }).catch(res => {
          console.log(res)

        })

      }
    }
  })
</script>

<style lang="scss">
  .main_wrap {
    width: 100%;
    /*cursor: pointer;*/
    .main_con {
      width: 97%;
      margin: 1.5% auto 0;
      .header_one {
        width: 100%;
        background: #fff;
        border-radius: 3px;
        padding: 1rem 0;
        margin: 0 auto .5rem;
        text-indent: .5rem;
        .one_text {
          font-size: .7rem;
        }
        .ver_text {
          margin-left: 20px;
          font-size: .7rem;
          color: #FC7132;
        }
        .upVer {
          margin-left: 20px;
          font-size: .7rem;
          color: #2b85e4;
          text-decoration: underline;
        }
      }
      .header_two {
        width: 100%;
        background: #FFF6E2;
        border: 1px solid #F3E6CB;
        padding: .5rem 0;
        margin-bottom: .5rem;
        /*text-indent: .5rem;*/
        .two_con {
          i{
            color: #FE4D1E;
            font-size: 16px;
            margin-left: 10px;
          }
          span {
            a{
              font-family: MicrosoftYaHei;
              font-size: 12px;
              color: #FE4D1E;
              letter-spacing: 0;
            }
          }
        }
      }

      .bannerImg {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
      }
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }
      .main_body {
        width: 100%;
        min-height: 400px;
        background: #fff;
        .up {
          width: 98%;
          margin: .5rem auto 0;
          padding: 1rem 0 0;
          cursor: pointer;
          h3 {
            margin-bottom: 10px;
            border-left: 0.5rem solid #FC7132;
            text-indent: 1rem;
            font-size: .7rem;
          }
          .main_list {
            width: 100%;
            padding-left: 20px;
            .main_list_box {
              float: left;
              border-radius: 0.3rem;
              border: 0.05rem solid #ccc;
              width: 18%;
              min-width: 8rem;
              margin-right: 24px;
              margin-top: 10px;
              .body_img {
                border-radius: 0.3rem;
                width: 100%;
                height: 80%;
                vertical-align: top;
                img {
                  border-radius: 0.15rem;
                  width: 100%;
                  height: 219px;
                  vertical-align: top;
                }
              }
              .body_text {
                text-align: center;
                margin-top: 10px;
                padding-bottom: 10px;
                h5 {
                  width: 100%;
                  font-size: 14px;
                }
                .body_text_btn {
                  margin: 0.25rem 0;
                  width: 97px;
                  height: 34px;
                  line-height: 34px;
                  border-radius: 0.15rem;
                  background: #FC7132;
                  display: inline-block;
                  font-family: MicrosoftYaHei;
                  font-size: 14px;
                  color: #FFFFFF;
                  letter-spacing: 0;
                }
              }
            }
          }

        }
      }
      .main_body_award {
        width: 100%;
        min-height: 400px;
        background: #fff;
        .up {
          width: 98%;
          margin: .5rem auto 0;
          padding: 1rem 0 0;
          cursor: pointer;
          h3 {
            margin-bottom: 10px;
            border-left: 0.5rem solid #FC7132;
            text-indent: 1rem;
            font-size: .7rem;
          }
          .main_list {
            width: 100%;
            padding-left: 20px;
            .main_list_box {
              float: left;
              border-radius: 0.3rem;
              border: 0.05rem solid #ccc;
              width: 18%;
              min-width: 8rem;
              margin-right: 24px;
              margin-top: 10px;
              .body_img {
                border-radius: 0.3rem;
                width: 100%;
                height: 80%;
                vertical-align: top;
                img {
                  border-radius: 0.15rem;
                  width: 100%;
                  height: 219px;
                  vertical-align: top;
                }
              }
              .body_text {
                text-align: center;
                margin-top: 10px;
                padding-bottom: 10px;
                h5 {
                  width: 100%;
                  font-size: 14px;
                }
                .body_text_btn {
                  margin: 0.25rem 0;
                  width: 97px;
                  height: 34px;
                  line-height: 34px;
                  border-radius: 0.15rem;
                  background: #FC7132;
                  display: inline-block;
                  font-family: MicrosoftYaHei;
                  font-size: 14px;
                  color: #FFFFFF;
                  letter-spacing: 0;
                }
              }
            }
          }

        }
      }
    }
  }

  .Notice {
    margin-right: 20px;
  }
</style>
