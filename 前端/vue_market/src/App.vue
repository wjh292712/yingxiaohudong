<template>
  <div id="app">
    <Header v-if="hides"></Header>
    <div class="app_down">
      <div class="app_left" v-if="hides">
        <nav-left ></nav-left>
      </div>
      <div class="app_right">
        <router-view @hides="hde"  @mallflag="malls"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapMustations,mapActions} from 'vuex'
import Header from '@/views/header.vue'
import navLeft from '@/views/navleft.vue'
export default {
  name: 'App',
  components: {
    Header,
    navLeft,

  },
data(){
return{
   hides:true,
   mall_flag:true
}
},
  methods:{
    ...mapActions(['disappear']),
    hde(el){
     
      this.hides=el
    },
  malls(el){
    this.mall_flag=el
  },
  str(flag){
      this.hides=flag
  }
  },
  // watch:{
  //   $route(to,from){
  //     let _this = this
  //     // console.log(to.name)
  //     if(to.name=!"login"){
  //       _this.$store.dispatch('disappear')
  //     }
  //   }
  // },
  mounted(){

if(!this.mall_flag){
   $(".app_left").hide()
  $("#app").css("background","#ffffff")
  $(".app_down").css("width","100%")
    $(".app_down").css("height","100%")
    $(".app_right").css("width","100%")
}else{
   $(".app_left").show()
}
  },
  updated(){
 
if(!this.mall_flag){
  $(".app_left").hide()
  $("#app").css("background","#ffffff")
  $(".app_down").css("width","100%")
    $(".app_down").css("height","100%")
    $(".app_right").css("width","100%")
}else{
   $(".app_left").show()
}

  },
  computed:{
    ...mapState(['header','nav'])
  }
}
</script>

<style lang="scss">
.header_wrap{
  height: 8% !important;
}
body,html{
    height: 100%;
    width: 100%;
    min-width: 1200px;
    background: #fff;
    overflow: auto
}
#app {
  background: #F2F2F2;
  height: 100%;
}

.app_down {
  width: 100%;
  height: 92%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  .app_left {
    width: 6%
  }
  .app_right {
    width: 94%;
  }
}

.clearfloat:after,
.clearfloat:before {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0
}

.float {
  float: left
}

* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 20px;
  background: #F2F2F2;
}

ul,
li {
  list-style: none;
}
</style>
//11
