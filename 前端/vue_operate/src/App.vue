<template>
  <div id="app">
        <router-view/>
  </div>
</template>

<script>
  import {mapState,mapMustations,mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
  },
  methods:{
    ...mapActions(['disappear'])
    
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
      

  },
  computed:{
    ...mapState(['header','nav'])
  }
}
</script>

<style lang="scss">
#app {
  background: #F2F2F2;
}

.app_down {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  .app_left {
    width: 6%;
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
