<template>
  <div class="active_wrap">
    <div class="active_con">
      <div class="active_rightCon">
        <div class="active_container">
          <h3 class="active_header">活动列表</h3>

          <div class="active_mall">
            <div class="active_body" v-for="(item,index) in  titlemsg">
              <h5 class="active_title">{{item.title}}</h5>
<button class="btn_all">全部</button>
              <ul class="body_list" id="contented">
                <li class="body_list_con" v-for="lll in listdata1" v-if="index==0">
                  {{lll.name}}
                 </li>
                <li class="body_list_con" v-for="lll in listdata2" v-if="index==1">
                  {{lll.name}}
                </li>
                <li class="body_list_con" v-for="lll in listdata3" v-if="index==2">
                  {{lll.name}}
                </li>
              </ul>
            </div>
          </div>
          <div class="active_footer">
            <div class="main_list">
              <div class="main_list_box" v-for="(item,index) in mainmsg" :key="index">
                <div class="body_img">
                  <img src="../../static/mainPage/Group 17 Copy 3.png" alt="">
                </div>
                <div class="body_text">
                  <h5>{{item.title}}</h5>

                  <span class="body_text_btn" @click="target()">创建活动</span>

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
  export default ({
    data() {
      return {
        listdata1:null,
        listdata2:null,
        listdata3:null,
        titlemsg: [{
          title: "营销场景:",
          con: "全部"
        },
          {
            title: "营销场景:",
            con: "全部"
          },
          {
            title: "营销场景:",
            con: "全部"
          }],
        mainmsg: [{
          img: 1,
          title: "开心快乐砸金蛋，来来来",
        }, {
          img: 2,
          title: "I was feeling epic"
        }, {
          img: 3,
          title: "开心快乐砸金蛋，来来来",
        }, {
          img: 4,
          title: "I was feeling epic"
        }, {
          img: 5,
          title: "I was feeling epic"
        }]
      }
    },
    created() {
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/center/activityDataModel/activityType",
        data: {},
      }).then(res => {
        let _this = this
        console.log(_this.titlemsg);
        console.log(res.data.data);
        _this.listdata1 = res.data.data.ActivityCategory
        _this.listdata2 = res.data.data.ActivityScene
        _this.listdata3 = res.data.data.ActivityTopic


      })
    },
    methods: {
      target() {
        // console.log(222)
        this.$router.push({path: "/activeslide/activelist"})
      }
    }
  })
</script>
<style>
#contented{
  display: flex !important;
  justify-content: normal;
}
</style>
<style lang="scss" scoped>
  .active_wrap {
    width: 85%;
    background: #fff;
    cursor: pointer;
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
          /* 活动列表页样式 */
          .active_header {
            font-size: 0.8rem;
            line-height: 1.2rem;
            font-weight: normal;
            margin-bottom: 0.5rem;
          }
          .active_mall {
            background: #F2F2F2;
            padding: 1rem;
            width: 100%;
            margin-bottom: 1rem;

            .active_body {
              display: flex;
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
            min-width: 8rem;
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
  .btn_all{
    width: 50px;
    background: red;
    color: #fff;
    border-radius: 20px;
    text-align: center;
    font-size: 12px;
    margin-right: 20px;
  }
</style>
