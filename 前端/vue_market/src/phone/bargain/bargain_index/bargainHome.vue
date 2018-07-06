<template>
    <div id="apps">
         <alert-message  v-if="alert_active"  @close-flag="close" >
             <div class="content-alert">
             <p class="p-text">
                 {{status_name}}
             </p>
            </div>
         </alert-message>
           <alert-message v-if="alert_flag" @close-flag="close" >
                   <div class="page-navbar">
    <div class="page-title">&nbsp;</div>  
    <!-- navbar -->  
    <mt-navbar class="page-part" v-model="selected" >  
      <mt-tab-item id="1" class="tts">活动说明</mt-tab-item>  
      <mt-tab-item id="2" class="tts">商家简介</mt-tab-item>  
    </mt-navbar>  
  

    <mt-tab-container v-model="selected" swipeable>  
      <mt-tab-container-item id="1">  
          <div class="con">
      <ul class="active-info">
          <li>
              活动时间
              <p class="active-times">{{active_time()}}</p>
          </li>
          <li>
              活动奖品
              <ul class="active-prize">
                  <li v-for="(item,key) in prize_List" :key="key">{{item.goods_name}}</li>
              </ul>
          </li>
            <li>
                  活动规则
                <p class="active-rule">
                    {{active_rule}}
                </p>
            </li>
            <li>
                主办单位
                <p class="host-company">{{company}}</p>
            </li>
      </ul>
          </div>
      </mt-tab-container-item>
       <mt-tab-container-item id="2">
            <div  class="con">
                    <ul class="business-ul">
                        <li>
                            商家简介
                            <p class="merchant_info">{{merchant_info}}</p>
                        </li>
                        <li>
                            商家地址
                            <p class="merchant_address">{{merchant_address}}</p>
                        </li>
                        <li>
                            联系电话
                            <p class="merchant_telephone">{{merchant_telephone}}</p>
                        </li>
                    </ul>
            </div>

           </mt-tab-container-item>  
      </mt-tab-container>
                   </div>
                
            </alert-message>
     <hea-ders></hea-ders>
    <div class="time-main">
                <div class="time-content">
                            <img src="@/assets/images/bj.png">
                            <div class="countdown-div">
                                <span class="activy-time">活动倒计时:</span>
                                <p class="time-date" style="margin-left:.2rem">{{day}}</p>
                                 <span class="tex-time"> 天</span>
                               
                                  <p class="time-date">{{Hour}}</p>
                                  <span class="tex-time">时</span>
                                   <p class="time-date"> {{Minute}}</p>
                                   <span class="tex-time">分</span>
                                   <p class="time-date"> {{Second}}</p>
                            </div>
                            <div class="active-rule">
                                    <p class="active-rule-left">
                                        <span class="img-rule">
                                            <img src="@/assets/images/guize.png">
                                            
                                        </span>
                                        <span class="rule-text" @click="rules">活动规则</span>
                                    </p>
                                    <p class="active-rule-right">
                                    <span class="img-rule">
                                          <img src="@/assets/images/lianxi.png">
                                    </span>
                                      <span class="rule-text" @click="contact_business">联系商家</span>
                                    </p>
                            </div>
                </div>

            </div>
         
     <bottom-list :list="allList" :participatelists="participateList"></bottom-list>
    </div>

</template>


<script>

import axios from "axios";
import publics from "static/public.js";
import HeaDers from "./components/Banner";
import BottomList from "./components/HomeBottomList";
import AlertMessage from "@/components/AlertMessage";
import {log} from "static/public.js";
export default {
  components: {
    AlertMessage,
    HeaDers,
    BottomList
  },
  data() {
    return {
        status_name:"",
       alert_active:false,//活动是否结束变量
      merchant_telephone: "", //商家电话
      merchant_address: "", //商家地址
      merchant_info: "", //商家简介
      prize_List: [], //活动奖品
      selected: "1",
      timer: null, //定时器变量
      alert_flag: false,
      allList: [], //全部商品列表
      participateList: [], //我参加的活动列表
      startDate: "", //开始时间
      endDate: "", //结束时间
      day: 0, //日
      Hour: 0, //小时
      Minute: 0, //分钟
      Second: 0, //秒
      time1: null,
      active_rule: "", //活动规则
      company: "", //主办单位
     
    };
  },
  created() {//loading动画
     publics.loadings(this)//加载loading
      publics.reset()
     
  },
  mounted() {
  
    let thi_s = this;
    let url = window.location.href;
    url = url.split("?")[1];

    axios
      .get(publics.bargainHome_url + "?id=" + url.split("activityId=")[1])
      .then(function(response) {
        //全部商品
        thi_s.allList = response.data.data.kjGoodsSetupList; //全部商品列表
        thi_s.startDate = response.data.data.SystemDate; //开始时间
        thi_s.endDate = response.data.data.KjBaseSetup.end_date; //结束时间
        var targetDate = publics.formatDateTime(thi_s.endDate); // 目标日期（活动截止时间）
        thi_s.prize_List = response.data.data.kjGoodsSetupList;
        thi_s.active_rule = response.data.data.KjBaseSetup.rule;
        thi_s.company = response.data.data.KjHighCompanySetup.company;
        thi_s.merchant_telephone =
          response.data.data.KjBaseSetup.merchant_telephone;
        thi_s.merchant_address =
          response.data.data.KjBaseSetup.merchant_address;
        thi_s.merchant_info = response.data.data.KjBaseSetup.merchant_info;
        targetDate = targetDate.replace(/-/g, ":").replace(" ", ":");
        targetDate = targetDate.split(":");
        thi_s.time1 = new Date(
          targetDate[0],
          targetDate[1] - 1,
          targetDate[2],
          targetDate[3],
          targetDate[4],
          targetDate[5]
        );

        //我参与的
        axios
          .get(
            publics.participateList_Url +
              "?activityId=" +
              url.split("activityId=")[1]
          )
          .then(function(response) {
               if(response.data.status){
            thi_s.participateList = response.data.data;
              }else{
                publics.toast(thi_s,response.data.msg)

              }
            publics.close_loadings(); //关闭loading
          })
          .catch(function(response) {
           
            publics.close_loadings(); //关闭loading
          });

        this.timer = window.setInterval(function() {//时间定时器
          thi_s.startDate += 1000;
          thi_s.RefreshTime(thi_s.startDate, thi_s.time1);
        }, 1000);
      })
  },
  methods: {
    active_time() {//返回活动时间范围
      return (
        publics.fmtDate(this.startDate) + "--" + publics.fmtDate(this.endDate)
      );
    },
    close(msg) {//关闭自定义弹出框
      this.alert_flag = msg;
        $("body").css("overflow", "auro");//出现弹框禁止滚动
    },
    rules() {//弹出活动规则项
      this.selected = "1";
      this.alert_flag = true;
        $("body").css("overflow", "hidden");//出现弹框禁止滚动
    },
    contact_business() {//弹出商家简介项
      this.selected = "2";
      this.alert_flag = true;
         $("body").css("overflow", "hidden");//出现弹框禁止滚动
    },
    RefreshTime(startDate, targetDate) {
      // 获取本地当前时间，截止时间 - 当前时间 = 倒计时时间
      var Today = new Date(startDate);

      var endDate = new Date(targetDate);

      var leftTime = endDate.getTime() - Today.getTime();
      var leftSecond = parseInt(leftTime / 1000);
      var Day = Math.floor(leftSecond / (60 * 60 * 24));
      var Hour = Math.floor((leftSecond - Day * 24 * 60 * 60) / 3600);
      var Minute = Math.floor(
        (leftSecond - Day * 24 * 60 * 60 - Hour * 3600) / 60
      );
      var Second = Math.floor(
        leftSecond - Day * 24 * 60 * 60 - Hour * 3600 - Minute * 60
      );

      if (Day < 0) {
        clearInterval(this.timer); // 清除定时器
        //活动已结束
        this.status_name = "该活动已结束";
        this.alert_active = true;
        return;
      }

      // 写入容器
      this.day = Day;
      this.Hour = Hour;
      this.Minute = Minute;
      this.Second = Second;
    }
  }
};
</script>

<style lang="stylus" scoped>

.content-alert{
height 2rem
line-height 2rem
text-align center   
.p-text{
font-size:18px
color #000

}
}

.con {
    margin-top: 0.3rem;
    max-height: 5.1rem;
    overflow: auto;

    .active-info {
        margin: 10px 40px;
        padding: 10px;

        li {
            list-style-type: square;
            line-height: 20px;
            font-size: 16px;
            color: #000;
            font-weight: bold;

            .active-times {
                font-size: 14px;
                font-weight: normal;
            }

            .active-prize li {
                list-style-type: none;
                font-weight: normal;
                font-size: 14px;
            }

            .active-rule {
                list-style-type: none;
                font-weight: normal;
                font-size: 14px;
            }

            .host-company {
                list-style-type: none;
                font-weight: normal;
                font-size: 14px;
            }
        }
    }

    .business-ul {
        margin: 10px 40px;
        padding: 10px;

        li {
            list-style-type: square;
            line-height: 20px;
            font-size: 16px;
            color: #000;
            font-weight: bold;
        }

        p {
            list-style-type: none;
            font-weight: normal;
            font-size: 14px;
        }
    }
}

.time-main {
    height: 2.2rem;
    width: 100%;
    background: #fff;
    text-align: center;
    position: relative;

    .time-content {
        width: 88%;
        height: 1.66rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -44%;
        margin-top: -0.83rem;

        img {
            width: 100%;
            height: 100%;
        }

        .active-rule {
            width: 5.7rem;
            height: 0.7rem;
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -2.85rem;

            .active-rule-right {
                float: right;

                .img-rule {
                    width: 20px;
                    height: 20px;
                    top: 50%;
                    margin-top: -10px;
                    position: absolute;
                    right: 1.8rem;
                }

                .rule-text {
                    position: absolute;
                    right: 0.5rem;
                    line-height: 0.7rem;
                }
            }

            .active-rule-left {
                float: left;

                .rule-text {
                    display: inline-block;
                    position: absolute;
                    left: 1rem;
                    line-height: 0.7rem;
                }

                .img-rule {
                    display: inline-block;
                    position: absolute;
                    left: 0.5rem;
                    width: 20px;
                    height: 20px;
                    top: 50%;
                    margin-top: -10px;

                    .img-rule img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

        .countdown-div {
            position: absolute;
            left: 0;
            width: 5.7rem;
            height: 0.66rem;
            top: 0.3rem;
            left: 50%;
            top: 50%;
            margin-top: -0.53rem;
            margin-left: -2.85rem;

            .activy-time {
                line-height: 0.66rem;
                display: inline-block;
                float: left;
                margin-left: 0.5rem;
                font-weight: bold;
            }

            .time-date {
                display: inline-block;
                padding: 0.05rem 0.1rem;
                margin-top: 0.1rem;
                top: 0.1rem;
                float: left;
                color: #fff;
                background: #000;
            }

            .tex-time {
                float: left;
                display: inline-block;
                line-height: 0.6rem;
                width: 0.5rem;
                color: #bebebe;
            }
        }
    }
}
</style>
