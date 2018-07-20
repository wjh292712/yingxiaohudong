<template>
    <div class="active_wrap1">
        <div class="active_con">
            <div class="active_slide">
                <ul class="slide_list">
                    <li class="list_con" v-for="(item,index) in activemsg" :class="{tab_change:index ==classActive}"  @click = "changeClick(index)">
                      <p>{{item}}</p>
                    </li>
                </ul>
            </div>
            <!-- nav部分 -->
            <router-view></router-view>
            <!-- <active-first></active-first>
            <active-list></active-list> -->
        </div>
    </div>
</template>
<script>
    import activeList from '@/page/activelist'
    import activeFirst from '@/page/activeFirst'
    import {mapState,mapMutations,mapActions,activePull} from 'vuex'

    export default({
        data(){
            return{
                activemsg:["新建活动","我的活动","已购奖品"],
                classActive:0,
            }
        },

        computed:{
            ...mapState(['setting_data']),
            ...mapActions(['saveData','activePull']),
        },
      mounted(){
        this.$store.dispatch('activePull')
      },
        components:{
            activeList,
            activeFirst
        },
        methods:{
            changeClick(index){
                this.classActive = index

              var token=sessionStorage.getItem('token')
              if(this.classActive==1){
                this.$axios({
                  method:'post',
                  url:'http://center.marketing.yunpaas.cn/center/activity/findMyActivity?token='+token,//我的活动
                  // url:'http://192.168.2.112:8085/center/activity/findMyActivity?token='+token,
                  params:{
                    pagesize:this.pagesize,
                    pageNum:this.currentPage
                  }
                }).then(res=>{
                  let _this=this
                  console.log(JSON.stringify(res.data.data));
                  // if(res.data.data==="请重新登录"){
                  //   alert(res.data.data)
                  //   _this.$router.push({path:'/login'})
                  // }
                  let activData=JSON.stringify(res.data.data)
                  let Datalist  =JSON.stringify(res.data.data.list)//我的活动数据
                  sessionStorage.setItem('Datalist',Datalist)
                  sessionStorage.setItem('activDara',activData)
                  console.log(res);
                  if(this.classActive===1){
                    this.$router.push({path:'/activeslide/myactive'})
                  }
                })
              }
              if(this.classActive===0){
                this.$router.push({path:'/activeslide/activeFirst'})
              }else if(this.classActive===2){
                this.$router.push({path:'/activeslide/cartReword'})
              }

            //    this.time = parseInt(this.num,16)
            //     console.log(this.time)
            //     this.time++
            //     console.log(this.time)
            //     var name = this.time.toString(16)
            //     console.log(name)
            //         this.num = name
            }
        }
    })
</script>
<style lang="scss">
    .active_wrap1 {
        width:100%;
        background:#fff;
        .active_con {
            width:95%;
            display:flex;
            justify-content:flex-start;
            flex-wrap:wrap;
            .active_slide {
                width:15%;
                min-height:30rem;
                background:#F2F2F2;
                font-size:0.7rem;
                text-align:center;
                    .slide_list{
                        width:100%;
                            .list_con {
                                width:100%;
                                padding:0.5rem 0;
                        }
                        .tab_change {
                                background:#fff;
                                border-bottom:#FC7132 solid 0.05rem;
                                color:#FC7132;
                            }
                    }

            }
        }
    }
  .nowpage{
    background: #c2e7b0;
  }

</style>
