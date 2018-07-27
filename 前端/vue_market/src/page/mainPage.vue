<template>
  <div class="main_wrap" style="display:block">
    <div class="main_con">
      <header>
        <div class="header_con">
          <div class="header_one">
            <span class="one_text">北京聚通达科技股份有限公司</span>
            <i class="one_icon1"></i>
            <i class="one_icon2"></i>
          </div>
          <div class="header_two">
            <div class="two_con">
              <i></i>
              <marquee direction=right><span v-for="(item,index) in informmsg"  class="Notice">{{item.content}}</span>
              </marquee>
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
        // mainmsg:[{
        //     img:1,
        //     title:"开心快乐砸金蛋，来来来",
        // },{
        //     img:2,
        //     title:"I was feeling epic"
        // },{
        //     img:3,
        //     title:"开心快乐砸金蛋，来来来",
        // },{
        //     img:4,
        //     title:"I was feeling epic"
        // },{
        //     img:5,
        //     title:"I was feeling epic"
        // }],
        mainmsg: [],
        informmsg:[],
        createDate:'',
        // banner:[]
      }

    },
    created(){

    },
    computed: {
      ...mapState(['count', 'banner']),
      ...mapActions(['saveForm'])
    },
    mounted() {
        this.$emit("hides",true)
      this.inform()

      let _this=this
      this.$axios({
        method:"post",
        url:"http://center.marketing.yunpaas.cn/center/activityDataModel/list",
        params:{

        },
      }).then(res=>{
        _this.mainmsg=res.data.data.list
      })

      //测试代码
      // this.$axios.post("center/activityDataModel/list").then((res)=>{
      //     console.log(res)
      // })
    },
    methods: {
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

        // 轮播
        // this.$axios({
        //     method:"post",
        //     url:"/center/ActivityNoticeImg/list",
        //     params:{

        //     }
        // }).then(res =>{
        //     // console.log(res.data.data)
        //     this.banner = res.data.data
        // }).catch(res =>{
        //     console.log(res)
        // })

        this.$store.dispatch('saveForm')

        //通告接口

        this.$axios({
          method: "post",
          url: "http://center.marketing.yunpaas.cn/center/activityNotice/list",
          params: {}
        }).then(res => {
          // console.log(res.data.data[0])
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
        //     axios.post('http://center.marketing.yunpaas.cn/activityNotice/list', qs.stringify())
        //             .then(response => {
        //             console.log(response.data.data);
        //             })
        //             .catch(err => {
        //             console.log(err);
        //             });
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
      }
      .header_two {
        width: 100%;
        background: #FFF6E2;
        border: 1px solid #F3E6CB;
        padding: .5rem 0;
        margin-bottom: .5rem;
        text-indent: .5rem;
        .two_con {
          span {
            font-family: MicrosoftYaHei;
            font-size: 12px;
            color: #FE4D1E;
            letter-spacing: 0;

          }
        }
      }
      /*.block {*/
        /*margin-bottom: 0.5rem;*/
        /*img {*/
          /*width: 100%;*/
          /*height: 100%;*/
        /*}*/
      /*}*/
      .bannerImg{
        width: 100%;
        height: 100%;
        img{
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
        background: #fff;
        .up {
          width: 98%;
          margin: .5rem auto 0;
          padding: 1rem 0 0;
          cursor: pointer;
          h3 {
            margin-bottom: 1rem;
            border-left: 0.5rem solid #FC7132;
            text-indent: 1rem;
            font-size: .7rem;
          }
          .main_list {
            width: 100%;
            /*display: flex;*/
            /*justify-content: space-between;*/
            /*flex-wrap: wrap;*/
            .main_list_box {
              float: left;
              border-radius: 0.3rem;
              border: 0.05rem solid #ccc;
              width: 18%;
              min-width: 8rem;
              margin-right: 20px;
              margin-top: 10px;
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
  }
  .Notice{
    margin-right: 20px;
  }
</style>
