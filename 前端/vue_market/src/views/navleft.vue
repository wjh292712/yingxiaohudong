<template>
  <div class="nav_bigWrap clearfloat">
    <div class="nav_wrap float">
        <div class="nav_con">
          <ul class="nav_list" >
            <li v-for="(item,index) in nav" :class="{active:classActive == index}" @click = "changeClick(index)">
              <i class="nav_icon " :class="{icon1:index == 0,icon2:index == 1,icon3:index == 2,icon4:index == 3,icon5:index == 4}"></i>
              <span class="nav_text">{{item.text}}</span>
            </li>
          </ul>
        </div>
    </div>
    <div class="nav_tab float">
        <!-- <main-page></main-page> -->
        <!-- <active-slide></active-slide> -->
    </div>
  </div>
</template>
<script>
  import mainPage from "@/page/mainPage"
  import activeSlide from "@/page/activeslide"
      export default ({
        data(){
          return{
            nav:[{text:"首页"},
            {text:"活动"},
            {text:"修改密码"},
            // {text:"核销"},
            {text:"数据"},
            {text:"商城"}],
            classActive:0,
            icon:0,
            slideRouter:["/mainPage","/activeslide/activeFirst","/personal","/chartIndex","/indexHome/MallHome"],
            ascny:true
          }
        },
      
        methods:{
          changeClick(index){
        
              //  this.$emit("hides", false);        
          
             this.classActive = index
            this.$router.push({path:this.slideRouter[index]})
          }
     
        },
        
        components:{
          mainPage,
          activeSlide
        }
      })
</script>
<style lang="scss">
  .nav_bigWrap {
    width:100%;
    height:100%;
    .nav_tab {
    width:94%;
  }
  .nav_wrap {
    width:100%;
    height:100%;
    min-height:26rem;
    background: #353D50;

    .nav_con {
      width:100%;
      background: #353D50;
      font-size: .6rem;
      color: #FFFFFF;
      letter-spacing: 0;
      .nav_list {
        li {
          padding:0.1% 0.1% 0 0.1%;
          height:3.9rem;
          width:100%;
          text-align:center;
          cursor:pointer;
        }
        .active {
          background:#FC7132;
        }
        .nav_text {
          display:block;
          vertical-align: middle;
        }
        .nav_icon {
          margin:.5rem auto;
          width:0.95rem;
          height:0.85rem;
          display:block;
          background-size:100%;
        }

        .icon1 {
          background:url(../../static\firstimage\首页.png)
        }
        .icon2 {
          background:url(../../static\firstimage\活动.png)
        }
        .icon3 {
          background:url(../../static\firstimage\核销.png)
        }
        .icon4 {
          background:url(../../static\firstimage\数据.png)
        }
        .icon5 {
          background:url(../../static\firstimage\商城.png)
        }
      }
    }
  }
  }

</style>
