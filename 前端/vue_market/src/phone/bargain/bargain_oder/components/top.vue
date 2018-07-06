<template>
    <div class="main">
        <div class="top">
            <div class="add-address" v-if="topobj.flag_address==false" @click="add()">
                <div class="address-div">
                    <span class="icon">
                        +
                    </span>
                    <p class="address" style="margin-left:.2rem">
                        添加地址
                    </p>
                </div>
            </div>
            <div v-else class="user-address-info" @click="edit(topobj.receive_user,topobj.receive_phone,topobj.receive_address,topobj.receive_remark,dataid)">
                <div class="user-info-div">
                    <p class="username-phone">
                        {{topobj.receive_user}}
                       
                        <span class="phone">{{topobj.receive_phone}}</span>
                          
                    </p>
                    <p class="address-info">
                        <span>{{topobj.receive_address}}</span><span>{{topobj.receive_remark}}</span>
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: ["topobj","dataid"],
    data(){
        return{

        }
    },
    methods:{
        add(){
        this.$router.push({ path: "/phone/addAddress", query: { index: 1 } });
        },
    edit(receive_user,receive_phone,receive_address,receive_remark,id){
          this.$router.push({
        path: "/phone/addAddress",
        query: {
          index: 2,
          user: receive_user,
          phone: receive_phone,
          address: receive_address,
          desc: receive_remark,
          id: id
        }
      }); 
    }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.top{
    background #ffffff
    height 2.2rem
    position relative
    top 0
    .user-address-info{
        height 1.8rem
        width 80%
        background #fff
        border: 1px dashed #bebebe;
        overflow hidden
        position absolute
        left 50%
        top .2rem
        margin-left -40%;
        .user-info-div{
         max-height 1.8rem 
         margin-top .4rem
         .username-phone{
          width 90%   
          ellipsis(); 
          text-align center
          position relative
          left 50%
          margin-left -45%
          .phone{
           margin-left .06rem   
          }   
         }  
         .address-info{
         text-align center
         margin-top .1rem
         width 90%   
         ellipsisTwo();
         position relative
         left 50%
         margin-left -45%
         line-height 23px     
         } 
        }
    }
.add-address{
    width 90%
    height 1.8rem
    background #FBFAFA 
    position relative
    left 50%
    margin-left -45%
    text-align center
    top .2rem
    .address-div{
    width 1.7rem
    height .3rem
    position absolute
    left 50%
    top 50%
    margin-left -.75rem
    margin-top -.15rem
    .address{
        float left
    }
    .icon{
       display inline-block
       width  .36rem
       height .36rem
       border-radius 50%
       background #8CDE56
       text-align center
       font-size 20px
       line-height .36rem
       color #ffffff
       font-font-weight bold
       float left
       position relative
       bottom .05rem
    }
    }
}
}
</style>
