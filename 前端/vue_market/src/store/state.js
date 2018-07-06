

import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
// 引入axios
import axios from 'axios'
Vue.use(Vuex)
const store =new Vuex.Store({
    state:{
        count:0,
        banner:[],
        setting_msg:[],
        header:false,
        nav:false,
        user_name:"",  //用户姓名
        setting_data:[],//九宫格模块数据
      setting_kjData:[],//砍价模块数据
      setting_dtData:[],//答题模块数据
      title_data:[],
      Datalist:[],//我的活动列表数据
      activData:[]//我的活动全部数据
    },
    mutations:{
        show(state){
            state.header = true;
            state.nav = true;
        },
        hide(state){
            state.header = false;
            state.nav = false;
        }
        // setting(){
        //     this.$axios({
        //         method:"post",
        //         url:"/center/ActivityNoticeImg/list",
        //         data:{

        //         }
        //     }).then(res =>{
        //         // console.log(res.data.data)
        //         this.banner = res.data.data
        //     }).catch(res =>{
        //         console.log(res)
        //     })
        // }
    },
    actions: {
        undisappear(context){
            context.commit("show")
        },
        disappear(context){
            context.commit('hide')
        },
      //获取保存设置数据的
        saveForm(context){
            axios({
                method:"post",
                url:"http://center.marketing.yunpaas.cn/center/ActivityNoticeImg/list",
                data:{

                }
            }).then(res =>{
                 console.log(res.data.data)
                this.state.banner = res.data.data
            }).catch(res =>{
                console.log(res)
            })
        },

        // 登录部分
        userName(context){
            axios({
                method: "post",
                url: "http://center.marketing.yunpaas.cn/center/enterpriseuser/login",
                params: {
                  userName:"13521103385",
                  password:"lhw123"
                }
            }).then(res => {
                this.state.user_name = res.data.data.name
            }).catch(res => {
                console.log(res)
            })
        },

activePull(context){//我的活动请求数据
  var token=sessionStorage.getItem('token')
  axios({
    method:'post',
    url:'http://center.marketing.yunpaas.cn/center/activity/findMyActivity?token='+token,//我的活动
    params:{
      pagesize:this.pagesize,
      pageNum:this.currentPage
    }
  }).then(res=>{
    this.state.activData=JSON.stringify(res.data.data)
    this.state.Datalist  =JSON.stringify(res.data.data.list)//我的活动数据
    let Dlist=this.state.Datalist
    let actD= this.state.activData
    sessionStorage.setItem('Datalist',Dlist)
    sessionStorage.setItem('activData',actD)
  }).catch(res => {
    console.log(res)
  })
},

        //设置保存模块给后台发送保存数据
        saveData(context){  //九宫格初始化后台请求数据存储
            // var CancelToken = axios.CancelToken;
            // var source = CancelToken.source()
            axios({
                method: "post",
                url: "http://center.marketing.yunpaas.cn/jgg/activitySetup/init",//数据初始化接口
                params: {

                },
                // cancelToken: source.token
            }).then(res => {
              this.state.setting_data = res.data.data
                let strData = JSON.stringify(this.state.setting_data)//所有九宫格数据
                sessionStorage.setItem("Data",strData)//存储数据

            }).catch(res => {
                console.log(res)
            })

        },

        saveDatakj(context){//砍价初始化后台数据存储
            // var CancelToken = axios.CancelToken;
            // var source = CancelToken.source()
            axios({
                method: "post",
                url: "http://center.marketing.yunpaas.cn/kj/activitySetup/init",//数据初始化接口
                params: {

                },
                // cancelToken: source.token
            }).then(res => {
              this.state.setting_kjData = res.data.data
                let strDatakj = JSON.stringify(this.state.setting_kjData)//所有砍价数据
                sessionStorage.setItem("Datakj",strDatakj)//存储数据

            }).catch(res => {
                console.log(res)
            })

        },
        saveDatadt(context){//答题初始化后台数据存储
            // var CancelToken = axios.CancelToken;
            // var source = CancelToken.source()
            axios({
                method: "post",
                url: "http://center.marketing.yunpaas.cn/dt/activitySetup/init",//数据初始化接口
                params: {

                },
                // cancelToken: source.token
            }).then(res => {
              this.state.setting_dtData = res.data.data
                let strDatadt = JSON.stringify(this.state.setting_dtData)//所有答题数据
                sessionStorage.setItem("Datadt",strDatadt)//存储数据

            }).catch(res => {
                console.log(res)
            })


        }
//

    },
  //时间转换
  timestampToTime(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y+M+D+h+m+s;
  },
})



export default store
