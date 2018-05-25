import Vue from 'vue'
import Router from 'vue-router'
import helloworld from '@/components/helloworld.vue'


// 运营端
import details from '@/components/details'
import activitylist from '@/components/activitylist'
import dialog from '@/components/dialog'
import dialogs from '@/components/dialogs'
// import confirm from '@/components/confirm'
import addactivity from '@/components/addactivity'
import activity from '@/components/activity'
// 客户端


//shouye

Vue.use(Router)

export default new Router({
  routes: [
    // 活动端
    {
      path: '/',
      name: 'activitylist',
      component: activitylist,
    },
    
    //活动列表
    
    // 运营端
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/activitylist',
      name: 'activitylist',
      component: activitylist
    },
    // {
    //   path: '/firstpage',
    //   name: 'firstpage',
    //   component: firstpage
    // },
    // {
    //   path: '/notwin',
    //   name: 'notwin',
    //   component: notwin
    // },
    // {
    //   path: '/drawwin',
    //   name: 'drawwin',
    //   component: drawwin
    // },
    // {
    //   path: '/cash',
    //   name: 'cash',
    //   component: cash
    // },
    // {
    //   path: '/trophy',
    //   name: 'trophy',
    //   component: trophy
    // },
    // {
    //   path: '/testimonial',
    //   name: 'testimonial',
    //   component: testimonial
    // },
    // {
    //   path: '/shiwan',
    //   name: 'shiwan',
    //   component: shiwan
    // },
    // {
    //   path: '/choujiang',
    //   name: 'choujiang',
    //   component: choujiang
    // },
    {
      path: '/dialog',
      name: 'dialog',
      component: dialog
    },
    {
      path: '/dialogs',
      name: 'dialogs',
      component: dialogs
    },
    {
      path: '/addactivity',
      name: 'addactivity',
      component: addactivity
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    }

  ]
})
