import App1 from './App1'
import Vue from 'vue'
//引入element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router'
import  VueResource  from 'vue-resource'

Vue.use(VueResource) 
Vue.use(ElementUI);
// import 'styles/reset.css'
import 'styles/border.css'
import FastClick from 'fastclick'
import 'mint-ui/lib/style.css'; 
//引入jquery
import $ from 'jquery'
// import raffle from '@/page/raffle'
import firstpage from '@/phone/turntableGame/firstpage'//九宫格
import home from '@/phone/answer/home'//答题首页
import Answer from '@/phone/answer/Answer'//答题页

import bargainHome from '@/phone/bargain/bargain_index/bargainHome'//砍价首页

import bargain from '@/phone/bargain/bargain_desc/bargain'//砍价

import oder from '@/phone/bargain/bargain_oder/oder'//立即下单

import browsing from '@/phone/turntableGame/Browsing'//预览页面

import addAddress from '@/phone/bargain/bargain_oder/addAddress'//添加地址

import oderSuccess from '@/phone/bargain/bargain_oder/oderSuccess'//已下单

import share from '@/phone/bargain/share/share'//分享页面
import ScratchPrize from '@/phone/answer/ScratchPrize'//刮奖页面
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'; 
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.use(Mint)
Vue.use(Router)
Vue.config.productionTip = false
FastClick.attach(document.body);
/* eslint-disable no-new */
let router =  new Router({

    routes: [
      {
        path:'/phone/yulan',
        component:browsing,
      },
      {
        path:'/phone/yixiadan',
        component:oderSuccess,
      },
      {
        path:'/phone/addAddress',
        component:addAddress,
      },
      {
        path:'/phone/firstpage',
        component:firstpage,
  
      },
      {
        path:'/phone/kanjia',
        component:bargain,
  
      },
      {
        path:'/phone/kanjia_home',
        component:bargainHome,
  
      },
      {
        path:'/phone/guajiang',
        component:ScratchPrize,
  
      },
      {
        path:'/phone/home',
        component:home
      },
      {
        path:'/phone/fenxiang',
        component:share
      },

      {
        path:'/phone/dati',
        component:Answer
      },
      {
        path:'/phone/xiadan',
        component:oder
      }
    ]
})






new Vue({
  el: '#phone',
  router,
  components: { App1,ElementUI,Mint },
  template: '<App1/>'
})
