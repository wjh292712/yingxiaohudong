<template>
    <div class="active_wrap1">
        <div class="active_con">
            <div class="active_slide">
                <ul class="slide_list">
                    <li class="list_con" v-for="(item,index) in activemsg" :class="{tab_change:classActive == index}" @click = "changeClick(index)">
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
                classActive:0
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
                this.$axios({
                  method:'post',
                  url:'http://center.marketing.yunpaas.cn/center/activity/findMyActivity?token='+token,//我的活动
                  params:{

                  }
                }).then(res=>{

                  console.log(JSON.stringify(res.data.data));
                  let activData=JSON.stringify(res.data.data)
                  let Datalist  =JSON.stringify(res.data.data.list)//我的活动数据
                  sessionStorage.setItem('Datalist',Datalist)
                  sessionStorage.setItem('activDara',activData)
                  console.log(res);
                  if(index===1){
                    this.$router.push({path:'/activeslide/myactive'})
                  }else if(index===0){
                    this.$router.push({path:'/activeslide/activeFirst'})
                  }

                })

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
</style>
