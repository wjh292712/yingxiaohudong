
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
//引入axios
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = apiConfig.baseUrl
//
import apiConfig from '../config/api.config'
Vue.use(apiConfig)

// 引入vue-bus
import vueBus from 'vue-bus'
Vue.use(vueBus)

// 引入vuex
import store from '@/store/state'

// 引入代理
import doAction from "@/js/doAction"

//引入jquery
import   '@/plugins/sudoku/jquery-1.11.0.js'
//引入cookie
import  "@/js/jquery.cookie.js"
import {addCookie, getCookie, delCookie} from '@/js/cookie';
// import "@/plugins/sudoku/jquery.cookie.js"
Vue.prototype.$cookieStore = {
  addCookie,
  getCookie,
  delCookie
}

Vue.config.productionTip = false

/* eslint-disable no-new */
//防止横向越权

router.beforeEach(function(to, from, next) {

  if(to.meta.requireAuth==true){
       if($.cookie("users")!=undefined){
      next()
    }else{

      next({path:'/'})
    }
    }else{
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})






