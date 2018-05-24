<template>
    <div class="header_wrap">
        <div class="header_con">
          <div class="header_left">
            <i class="header_iCon"></i>
            <i class="line"></i>
            <span class="left_text">营销互动平台</span>
          </div>
          <div v-if="" class="header_right">
            <!-- <div class="right_list">
              <i class="right_icon icon1"></i>
              <span>消息</span>
            </div> 
            <i class="line"></i>-->
            <div class="right_list">
              <i class="right_icon icon2"></i>
              <span>帮助</span>
            </div>
            <i class="line"></i>
            <div class="right_list">
                <i class="right_icon icon3"></i>
              <el-menu :default-active="activeIndex" class="el-menu-demo border_none1"  mode="horizontal" @select="handleSelect" >
                <el-submenu index="2" > 
                  <template slot="title" class="border_none ">{{name}}</template>
                  <el-menu-item index="2-1">系统设置</el-menu-item>
                  <el-menu-item index="2-1">退出</el-menu-item>
                </el-submenu>
              </el-menu>
            </div>
          </div>
        </div>
    </div>
</template>  
<script>
  import {mapState,mapMutations,mapActions} from 'vuex'
   export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        show:true,
        name:''
      };
    },
    mounted(){
      this.$bus.on('name',content =>{
        console.log(content)
        this.name = content
      })
    },
    methods: {
      handleSelect(key, keyPath) {
          console.log(key, keyPath);
      }
      
    },
    computed:{
      ...mapState(['user_name'])
    }
  }
</script>
<style lang="scss">
  @mixin same_corner {
              height:1.35rem;
              line-height:1.35rem;
              text-align:center;
              font-family: MicrosoftYaHei;
              font-size: .7rem;
  }
 .header_wrap {
   width:100%;
   background:#fff;
   border-bottom:1px solid #ccc;
   .line {
     width:0.05rem;
     height:.5rem;
     display:inline-block;
     vertical-align:top;
     background:#ccc;
     margin:0.4rem .5rem 0;
   }
   .header_con {
     width:98%;
     padding: .5rem 0;
     display:flex;
     justify-content:space-between;
     .header_left {
       .header_iCon {
         width:3.75rem;
         height:1.35rem;
         display:inline-block;
         background:url(../../static\firstimage\logo去.png);
         background-size:100%;
         vertical-align:top;
       }
       .left_text {
              display:inline-block;
              text-color: #353D50;
              letter-spacing: 0;
              @include same_corner;
            }
     }
     .header_right {
      font-size: 14px;
      color: #4A4A4A;
      display:flex;
      justify-content:space-between;


      .right_list {
        border:none;
        color: #4A4A4A;
        @include same_corner;
        position:relative;
        
        .el-menu-demo {
          height:100%;
          line-height:100%;
          color:#4A4A4A;
          border:none;
          display:inline-block;
          padding:0 1rem 0 0;
          .el-submenu__title{
            height:1.35rem;
            line-height:1.35rem;
            padding:0 0 0 1rem;
            color:#4A4A4A;
          }
        }


            .icon1 {
              background:url(../../static\firstimage\消息.png);
            }
            .icon2 {
              background:url(../../static\firstimage\帮助.png)
            }
            .icon3 {
              background:url(../../static\firstimage\用户名.png);
              position:absolute;
              left:0;
              top:28%;
              z-index:333;
            }
          .right_icon {
            width:.7rem;
            height:.7rem;
            background-size:100%;
            display:inline-block;
            vertical-align:middle;
          }

        .border_none1 {
          height:1.35rem;
          line-height:1.35rem;
          border:none;
          color:#4A4A4A;
          display:inline-block;
          padding:0;
        }
        .border_none {
          height:1.35rem;
          line-height:1.35rem;
          color:#4A4A4A;
          border:none;
          display:inline-block;
          padding:0 2rem 0 0;
        }
      }
     }
   }
 }
</style>

