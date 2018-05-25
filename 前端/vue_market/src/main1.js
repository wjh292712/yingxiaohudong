import App1 from './App1'
import Vue from 'vue'
//引入element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router'
Vue.use(ElementUI);

//引入jquery
import $ from 'jquery'
// import raffle from '@/page/raffle'
import firstpage from '@/phone/firstpage'//九宫格
import home from '@/phone/home'//首页
import homePhone from '@/phone/homePhone'//首页
import dati from '@/phone/dati'//答题页
import kanjia from '@/phone/kanjia_home'//砍价首页
import kans from '@/phone/kanjia'//砍价
Vue.use(Router)
Vue.config.productionTip = false

/* eslint-disable no-new */
let router =  new Router({

    routes: [
      {
        path:'/phone/firstpage',
        component:firstpage,
  
      },
      {
        path:'/phone/kanjia',
        component:kans,
  
      },
      {
        path:'/phone/kanjia_home',
        component:kanjia,
  
      },
      {
        path:'/phone/home',
        component:home
      },
      {
        path:'/phone/homePhone',
        component:homePhone
      },
      {
        path:'/phone/dati',
        component:dati
      }
    ]
})






new Vue({
  el: '#phone',
  router,
  components: { App1,ElementUI },
  template: '<App1/>'
})
