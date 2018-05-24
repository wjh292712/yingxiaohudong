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
    import {mapState,mapMutations,mapActions} from 'vuex'

    export default({
        data(){
            return{
                activemsg:["新建活动","我的活动","已购奖品"],
                classActive:0
            }
        },
        computed:{
            ...mapState(['setting_data']),
            ...mapActions(['saveData']),
        },
        components:{
            activeList,
            activeFirst
        },
        methods:{
            changeClick(index){
                this.classActive = index
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
