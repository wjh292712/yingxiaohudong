<template>
  <div class="active_wrap">
    <div class="active_con">
      <div class="active_rightCon">
        <div class="active_container">
          <h3 class="active_header">活动列表</h3>
          <div class="active_mall">
            <div class="active_body">
              <h5 class="active_title">活动类型</h5>
              <button class="btn_all" @click="getAllData1()">全部</button>
              <ul class="body_list">
                <li class="body_list_con1" v-for="gameName1 in listdata1" :class="{active:activeName1==gameName1}"
                    @click="selected1(gameName1,gameName1.id)">
                  {{gameName1.name}}
                </li>
              </ul>
            </div>
            <div class="active_body">
              <h5 class="active_title">营销场景</h5>
              <button class="btn_all" @click="getAllData2()">全部</button>
              <ul class="body_list">
                <li class="body_list_con2" v-for="gameName2 in listdata2" :class="{active:activeName2==gameName2}"
                    @click="selected2(gameName2,gameName2.id)">
                  {{gameName2.name}}
                </li>
              </ul>
            </div>
            <div class="active_body">
              <h5 class="active_title">活动主题</h5>
              <button class="btn_all" @click="getAllData3()">全部</button>
              <ul class="body_list">
                <li class="body_list_con3" v-for="gameName3 in listdata3" :class="{active:activeName3==gameName3}"
                    @click="selected3(gameName3,gameName3.id)">
                  {{gameName3.name}}
                </li>
              </ul>
            </div>
          </div>
          <div class="active_footer">
            <div class="main_list">
              <div class="main_list_box" v-for="(item,index) in mainmsg " :key="index">
                <div class="body_img">
                  <!--<img src="../../static/mainPage/Group 17 Copy 3.png" alt="">-->
                  <img :src=item.img alt="">
                </div>
                <div class="body_text">
                  <h5>{{item.title}}</h5>
                  <span class="body_text_btn" @click="target(index)">创建活动</span>
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
        listdata1: null,
        listdata2: null,
        listdata3: null,
        titlemsg: [
          {
            title: "活动类型:",
            con: "全部"
          },
          {
            title: "营销场景:",
            con: "全部"
          },
          {
            title: "活动主题:",
            con: "全部"
          }],
        mainmsg: [
          {
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
          }],
        categoryId: [],
        sceneId: [],
        topicId: [],
        activeName1: '',
        activeName2: '',
        activeName3: '',
        newObj: {},
        newObj1: {},
        imageList: '',
      }
    },
    created() {
      let _this = this
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/center/activityDataModel/activityType",
        data: {},
      }).then(res => {
        let _this = this
        console.log(res);
        console.log(res.data.data);
        _this.listdata1 = res.data.data.ActivityCategory
        _this.listdata2 = res.data.data.ActivityScene
        _this.listdata3 = res.data.data.ActivityTopic
        var ary1 = []
        var newAry1 = []
        ary1.push(...this.listdata1)
        for (var i = 0; i < ary1.length; i++) {
          var cur = ary1[i].id;
          newAry1.push(cur)
        }
        var ary2 = []
        var newAry2 = []
        ary2.push(...this.listdata2)
        for (var i = 0; i < ary2.length; i++) {
          var cur = ary2[i].id;
          newAry2.push(cur)
        }
        var ary3 = []
        var newAry3 = []
        ary3.push(...this.listdata3)
        for (var i = 0; i < ary3.length; i++) {
          var cur = ary3[i].id;
          newAry3.push(cur)
        }
        var obj = {}
        obj.categoryId = newAry1
        obj.sceneId = newAry2
        obj.topicId = newAry3
        this.newObj = JSON.stringify(obj)
        this.categoryId = JSON.stringify(newAry1);
        this.sceneId = JSON.stringify(newAry2);
        this.topicId = JSON.stringify(newAry3);
        this.categoryId = newAry1;
        this.sceneId = newAry2;
        this.topicId = newAry3;
        this.newObj1 = this.newObj
      })
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/center/activityDataModel/list",
        params: {},
      }).then(res => {
        console.log(res);
        _this.mainmsg = res.data.data.list
      })
    },
    mounted() {

    },
    methods: {
      target(index) {
        if(index===0){
          this.$router.push({path: "/activeslide/activelist"})
        }else if(index===1){
          this.$router.push({path: "/activeslide/answerlist"})
        }else if(index===2){
          this.$router.push({path: "/activeslide/bargainlist"})
        }

      },
      getAllData1() {
        $(".body_list_con1").addClass("active")
        $(".body_list_con2").removeClass("active")
        $(".body_list_con3").removeClass("active")
        let _this = this
        console.log(this.newObj1);
        $.ajax({
          type: "POST",
          url: "http://center.marketing.yunpaas.cn/center/activityDataModel/getActivityByParams",
          data: this.newObj1,
          contentType: "application/json",
          // datatype:"json",
          success(data) {//保存跳转活动页面
            _this.mainmsg = data.data
          }
        })

      },
      getAllData2() {
        $(".body_list_con2").addClass("active")
        $(".body_list_con1").removeClass("active")
        $(".body_list_con3").removeClass("active")
        console.log(this.newObj1);
        let _this = this
        $.ajax({
          type: "POST",
          url: "http://center.marketing.yunpaas.cn/center/activityDataModel/getActivityByParams",
          data: this.newObj1,
          contentType: "application/json",
          // datatype:"json",
          success(data) {//保存跳转活动页面
            console.log(data);
            _this.mainmsg = data.data
          }
        })
      },
      getAllData3() {
        $(".body_list_con3").addClass("active")
        $(".body_list_con1").removeClass("active")
        $(".body_list_con2").removeClass("active")
        console.log(this.newObj1);
        let _this = this
        $.ajax({
          type: "POST",
          url: "http://center.marketing.yunpaas.cn/center/activityDataModel/getActivityByParams",
          data: this.newObj1,
          contentType: "application/json",
          // datatype:"json",
          success(data) {//保存跳转活动页面
            console.log(data);
            _this.mainmsg = data.data
          }
        })
      },

      selected1: function (gameName, id) {
        this.activeName1 = gameName
        $(".body_list_con1").removeClass("active")
        this.activeName1 = gameName
        var ary1 = []
        ary1.push(id)
        this.newObj = JSON.parse(this.newObj)
        this.newObj.categoryId = ary1
        this.newObj = JSON.stringify(this.newObj)
        console.log(this.newObj)
        let _this = this
        $.ajax({
          type: "POST",
          url: "http://center.marketing.yunpaas.cn/center/activityDataModel/getActivityByParams",
          data: this.newObj,
          contentType: "application/json",
          // datatype:"json",
          success(data) {//保存跳转活动页面
            console.log(data);
            _this.mainmsg = data.data
          }
        })

      },
      selected2: function (gameName, id) {
        $(".body_list_con2").removeClass("active")
        this.activeName2 = gameName
        var ary2 = []
        ary2.push(id)
        this.newObj = JSON.parse(this.newObj)
        this.newObj.sceneId = ary2
        this.newObj = JSON.stringify(this.newObj)
        console.log(this.newObj)
        let _this = this
        $.ajax({
          type: "POST",
          url: "http://center.marketing.yunpaas.cn/center/activityDataModel/getActivityByParams",
          data: this.newObj,
          contentType: "application/json",
          // datatype:"json",
          success(data) {//保存跳转活动页面
            console.log(data);
            _this.mainmsg = data.data
          }
        })
      },
      selected3: function (gameName, id) {
        $(".body_list_con3").removeClass("active")
        this.activeName3 = gameName
        var ary3 = []
        ary3.push(id)
        this.newObj = JSON.parse(this.newObj)
        this.newObj.topicId = ary3
        this.newObj = JSON.stringify(this.newObj)
        console.log(this.newObj)
        let _this = this
        $.ajax({
          type: "POST",
          url: "http://center.marketing.yunpaas.cn/center/activityDataModel/getActivityByParams",
          data: this.newObj,
          contentType: "application/json",
          // datatype:"json",
          success(data) {//保存跳转活动页面
            console.log(data);
            _this.mainmsg = data.data
          }
        })
      },
    }
  })
</script>
<style>
  .contented {
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
                /*display: flex;*/
                /*justify-content: space-around;*/
                /*flex-wrap: wrap;*/
                /*float: left;*/
                width: 90%;
                .body_list_con1 {
                  float: left;
                  width: 10%;
                  font-size: 0.6rem;
                  text-align: left;
                }
                .body_list_con2 {
                  float: left;
                  width: 10%;
                  font-size: 0.6rem;
                  text-align: left;
                }
                .body_list_con3 {
                  float: left;
                  width: 10%;
                  font-size: 0.6rem;
                  text-align: left;
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

  .btn_all {
    width: 50px;
    background: red;
    color: #fff;
    border-radius: 20px;
    text-align: center;
    font-size: 12px;
    margin-right: 20px;
  }

  .active {
    color: blue;
  }
</style>
