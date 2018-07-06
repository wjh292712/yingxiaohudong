
//(2018-6-28)韩瑞丰构建此文件结构
const bargainHome_url ="http://center.marketing.yunpaas.cn/kj/runingGoodsActivity/initActivity"//全部商品
const participateList_Url="http://center.marketing.yunpaas.cn/kj/runingGoodsActivity/getMyActivity"//我参与的
const bargainUrl ="http://center.marketing.yunpaas.cn/kj/runingGoodsActivity/createActivityGoods"//砍价
const bargainInitUrl="http://center.marketing.yunpaas.cn/kj/runingGoodsActivity/getRunInfoById"//砍价页面初始化
const leaderboard  ="http://center.marketing.yunpaas.cn/kj/runingGoodsActivity/getKjSort"//排行榜url
const assist_bargain= "http://center.marketing.yunpaas.cn/kj/runingPlayHelp/getToHelp"
const participateUrl ="http://center.marketing.yunpaas.cn/kj/runingGoodsActivity/createActivityGoods"
const  order_initUrl = "http://center.marketing.yunpaas.cn/kj/runingGoodsActivity/getOrderInfo"//下单初始化接口
const  payment_preUrl =  "http://center.marketing.yunpaas.cn/kj/payAward/payAwardOrder"//支付前需要的接口
const weixinInfoUrl = "http://center.marketing.yunpaas.cn/kj/payAward/HFiveBuy"//微信支付接口相关
const oderinfo ="http://center.marketing.yunpaas.cn/kj/payAward/getOrderByid"//获取支付订单信息
const add_address ="http://center.marketing.yunpaas.cn/kj/userAddress/create"//添加地址相关���息
const update_addrsss ="http://center.marketing.yunpaas.cn/kj/userAddress/update"//修改地址相关信息
const answer ="http://center.marketing.yunpaas.cn/dt/play/getStartAnswer"//题目相关
const submit_answer ="http://center.marketing.yunpaas.cn/dt/play/checkQuestion"//提交答案
const lottery = "http://center.marketing.yunpaas.cn/dt/play/startDrawAward"//抽奖

//答题首页相关
const answer_initActivity = "http://center.marketing.yunpaas.cn/dt/play/initActivity"
const getMyAward = "http://center.marketing.yunpaas.cn/dt/play/getMyAward"

//九宫格相关
const turntable_Url ="http://center.marketing.yunpaas.cn/jgg/activity/getActivityById"//九宫格初始化
const turntable_Prize_Url="http://center.marketing.yunpaas.cn/jgg/activity/getMyAwardList"//九宫格奖品信息
const startDrawAward_url ="http://center.marketing.yunpaas.cn/jgg/activity/startDrawAward"


//九宫格预览相关
const browsing_initUrl = "http://center.marketing.yunpaas.cn/jgg/activity/getActivityByIdTest"//九宫格浏览数据初始接口
const lottery_url = "http://center.marketing.yunpaas.cn/jgg/activity/startPreview"//立即抽奖


const mallHomeList="http://center.marketing.yunpaas.cn/center/shopGoods/getGoodsList"//商城首页列表
const mallDescInit="http://center.marketing.yunpaas.cn/center/shopGoods/getGoodsById"//商城详情
var loading=null
import axios from "axios";//用于http请求
function formatDateTime(inputTime) {//日期格式化方法年月日时分秒
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    var h = date.getHours();
    h = h < 10 ? "0" + h : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
  }
  function fmtDate(obj) {//日期格式化方法年月日
    var date = new Date(obj);
    var y = 1900 + date.getYear();
    var m = "0" + (date.getMonth() + 1);
    var d = "0" + date.getDate();
    var h = date.getHours();
    var t = date.getMinutes();
    var s = date.getSeconds();

    return (
      y +
      "-" +
      m.substring(m.length - 2, m.length) +
      "-" +
      d.substring(d.length - 2, d.length)
    );
}
function loadings(el){//加载loading
loading = el.$loading({
 lock: true,
 text: "Loading",
 spinner: "el-icon-loading",
 background: "rgba(0, 0, 0, 0.7)"
});
  }
  function close_loadings(){
    loading.close(); //关闭loading
  }

  function toast(el,msg){//toast显示
    el.$toast({
      message:msg,
      duration: 3000
  });
  }
  export function log(msg){//日志输出
  console.log(msg)
}

function reset(){//防止其他页面冲突，单独引用此方法

  $("html").css("font-size","50px")
  $("body").css("font-size",".28em")
  $("body").css("line-height","1")
}
function mall_styles_update(){
  $(".header_left").css("margin-left", "118px");
  $(".header_right").css("margin-right", "200px");
}

function mall_styles_noupdate(){
  $(".header_right").css("margin-right", "0px");
    $(".header_left").css("margin-left", "0px");
}
export default{
    bargainHome_url,
    formatDateTime,
    participateList_Url,
    fmtDate,
    bargainUrl,
    bargainInitUrl,
    leaderboard,
    assist_bargain,
    participateUrl,
    order_initUrl,
    payment_preUrl,
    weixinInfoUrl,
    loadings,
    close_loadings,
    toast,
    oderinfo,
    add_address,
    update_addrsss,
    answer,
    submit_answer,
    lottery,
    answer_initActivity,
    getMyAward,
    turntable_Url,
    turntable_Prize_Url,
    startDrawAward_url,
    browsing_initUrl,
    lottery_url,
    reset,
    mall_styles_update,
    mall_styles_noupdate,
    mallHomeList,
    mallDescInit
}


//////////////////
// WEBPACK FOOTER
// ./static/js/public.js
// module id = null
// module chunks = 


//////////////////
// WEBPACK FOOTER
// ./static/js/public.js
// module id = null
// module chunks = 