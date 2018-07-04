import Vue from 'vue'
import Router from 'vue-router'
import HellofWorld from '@/components/HelloWorld'
import navleft from '@/views/navleft'
import mainPage from '@/page/mainPage'

//活动
import activeFirst from '@/page/activeFirst'
import activelist from '@/page/activelist'
import activeslide from '@/page/activeslide'
import company from '@/components/company'

//我的活动详情页
import myactive from '@/page/myactive'
import myActiveDatail from '@/page/myActiveDatail'

//砍价活动
import bargainlist from '@/page/bargainlist'
import bargainset from '@/page/bargainset'
import barsettingbase from '@/page/barsettingbase'
import barreword from '@/page/barreword'
import baraward from '@/page/baraward'
import baradvanced from '@/page/baradvanced'

//答题活动
import answerlist from '@/page/answerlist'
import answerset from '@/page/answerset'
import anspage from '@/page/anspage'
import answsettingbase from '@/page/answsettingbase'//基础设置
import anstitle from '@/page/anstitle' //题目设置
import ansaward from '@/page/ansaward' //派奖设置
import ansreword from '@/page/ansreword'//奖品设置
import ansadvanced from '@/page/ansadvanced'//高级设置

import xitongSet from '@/page/xitongSet'//系统设置
// 运营端
import login from '@/components/login'
import details from '@/components/details'
import active from '@/components/active'
import dialog from '@/components/dialog'
import dialogs from '@/components/dialogs'
// import confirm from '@/components/confirm'
import add from '@/components/add'
import compile from '@/components/compile'
import activity from '@/components/activity'
// 客户端
 import setting from '@/page/setting'
import settingbase from '@/page/settingbase'
import settingbaseEdit from '@/page/settingbaseEdit'
import reword from '@/page/reword'
import share from '@/page/share'
import advanced from '@/page/advanced'
import award from '@/page/award'

//shouye
import activepage from '@/page/activepage'
import barpage from  '@/page/barpage'
import barplainpage from '@/page/barplainpage'
import bardraw from '@/page/bardraw'


import explainpage from '@/page/explainpage'
import draw from '@/page/draw'
import detailpage from '@/page/detailpage'
import winning from '@/page/winning'
import losing from '@/page/losing'
import shouye from '@/page/shouye'
import choujiang from '@/page/choujiang'
import shiwan from '@/page/shiwan'

import notwin from '@/page/notwin'
import drawwin from '@/page/drawwin'
import cash from '@/page/cash'
import trophy from '@/page/trophy'
import testimonial from '@/page/testimonial'
import xitongSetMenuList from '@/components/xitongSetMenuList'
import shouquanSuccess from '@/page/shouquanSuccess'

import versionCart from '@/version/versionCart'

// import raffle from '@/page/raffle'
Vue.use(Router)

export default new Router({

  routes: [
    // 活动端
    {
      path: '/',
      redirect: "/login"
      // children:[{
      //   path:"/activeslide",
      //   component:activeslide,
      // }]
    },
    {
      path:'/shouquanSuccess',
      component:shouquanSuccess
    },
    {
      path: '/xitongSetMenuList',
      component:xitongSetMenuList,
      children:[
        {
          path: 'xitongSet',
          component:xitongSet
        },{
        path:'versionCart',
          component:versionCart
        }
      ]
    },
    {
      path:'/company',
      name:'company',
      component:company
    },
    {
      path: "/navleft",
      component: navleft,
      children: [{
        path: "/navleft/mainPage",
        component: mainPage
      }]

    },
    //活动列表
    {
      path: "/activeslide",
      component: activeslide,
      children: [{
        path: "/activeslide/activeFirst",
        component: activeFirst,
      },
      {
        path: "/activeslide/activelist",
        component: activelist,
      },
      // {
      //       path: "/activeslide/setting",
      //       component: resolve => void(require(['@/page/setting'],resolve)),
        //     children:[
        //       {
        //         path: "/activeslide/setting/share",
        //         component:  resolve => void(require(['@/page/share'],resolve))
        // },

        //       {
        //         path: "/activeslide/setting/settingbase",
        //         component: resolve => void(require(['@/page/settingbase'],resolve)),
        //     },

        //     ]
          // },
    ]
    },
    //砍价活动

    {
      path: "/activeslide",
      component: activeslide,
      children: [{
        path: "/activeslide/activeFirst",
        component: activeFirst,
      },
        {
          path: "/activeslide/bargainlist",
          component: bargainlist,
        }]
    },

    //砍价商户设置
    {
      path: "/bargainset",
      component: resolve => void(require(['@/page/bargainset'],resolve)),
      children: [
        {
          path: "/bargainset/barsettingbase",
          component: barsettingbase
        },
        {
          path: "/bargainset/barreword",//商品设置
          component: barreword
        },

        {
          path: "/bargainset/baraward ",
          component: baraward
        },

        {
          path: "/bargainset/baradvanced",
          component: baradvanced
        },
        {
          path:'/bargainset/barpage',
          component:barpage
        },
        {
          path:'/bargainset/barplainpage',
          component:barplainpage
        },
        {
          path:'/bargainset/bardraw',
          component:bardraw
        },
      ]
    },


    //答题活动
    {
      path: "/activeslide",
      component: activeslide,
      children: [{
        path: "/activeslide/activeFirst",
        component: activeFirst,
      },
        {
          path: "/activeslide/answerlist",
          component:answerlist,
        }]
    },
    //答题右侧商户设置

    {
      path: "/answerset",
      component: resolve => void(require(['@/page/answerset'],resolve)),
      children: [
        {
          path: "/answerset/answsettingbase",//基础设置
          component: answsettingbase
        },
        {
          path: "/answerset/anstitle",//题目设置
          component: anstitle
        },

        {
          path: "/answerset/ansaward ",//派奖设置
          component: ansaward
        },

        {
          path: "/answerset/ansreword",
          component: ansreword
        },
        {
          path: "/answerset/ansadvanced",//高级设置
          component: ansadvanced
        },

        {path:'/answerset/anspage',
        component:anspage
        },

      ]
    },


//九宫格商户设置
    {
      path: "/setting",
      component: resolve => void(require(['@/page/setting'],resolve)),
      children: [
        {
          path: "/setting/settingbase",
          component: settingbase
        },
        // {
        //   path: "/setting/settingbaseEdit",
        //   component: settingbaseEdit
        // },
        {
          path: "/setting/share",
          component: share
        },
        {
          path: "/setting/reword",
          component: reword
        },
        {
          path: "/setting/advanced",
          component: advanced
        },
        {
          path: "/setting/award ",
          component: award
        },
        {
          path: "/setting/activepage",
          component: activepage
        },
        {
          path: "/setting/explainpage",
          component: explainpage
        },
        {
          path: "/setting/draw",
          component: draw
        },
        {
          path: "/setting/detailpage",
          component: detailpage
        },
        {
          path: "/setting/losing",
          component: losing
        },
        {
          path: "/setting/winning",
          component: winning
        }
      ]
    },
    {
      path: "/mainPage",
      name:"mainPage",
      component: mainPage
    },
    // {
    //   path:"/activeFirst",
    //   component:activeFirst
    // },
    // {
    //   path: "/activelist",
    //   component: activelist
    // },
    // {
    //   path: "/raffle",
    //   component: raffle
    // },

    //我的活动页面
    {
      path: "/activeslide",
      component: activeslide,
      children: [{
        path: "activeFirst",
        component: activeFirst,
      },
        {
          path: "myactive",
          component: myactive,
        },{
        path:'myActiveDatail',
          component:myActiveDatail
        }]
    },



    // 运营端
    {
      path: '/login',
      name: 'login',
      component: login,
      // children:[{
      //   path:'/login/company',component:company
      // }]
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/shouye',
      name: 'shouye',
      component: shouye
    },

    {
      path: '/notwin',
      name: 'notwin',
      component: notwin
    },
    {
      path: '/drawwin',
      name: 'drawwin',
      component: drawwin
    },
    {
      path: '/cash',
      name: 'cash',
      component: cash
    },
    {
      path: '/trophy',
      name: 'trophy',
      component: trophy
    },
    {
      path: '/testimonial',
      name: 'testimonial',
      component: testimonial
    },
    {
      path: '/shiwan',
      name: 'shiwan',
      component: shiwan
    },
    {
      path: '/choujiang',
      name: 'choujiang',
      component: choujiang
    },
    {
      path: '/active',
      name: 'active',
      component: active
    },
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
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/compile',
      name: 'compile',
      component: compile
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    }

  ]
})
