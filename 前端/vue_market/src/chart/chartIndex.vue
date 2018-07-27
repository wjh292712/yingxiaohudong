<template>
<div class="main">
<div class="leftList">
<ul class="uls">
<li v-for="(item,key) in menuList" :key="key" >
  <p class="p-item"  @click.stop="switchView(key)" >
    {{item.name}}
  </p>
</li>
</ul>
</div>
<div class="right">
<router-view></router-view>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      active:[true,false,false],
      menuList: [
        {
          name: "基本数据",
          url: "/chartIndex/Basicdata"
        },
        {
          name: "传播分析",
          url: "/chartIndex/Spreaddata"
        },
        {
          name: "粉丝分析",
          url: "/chartIndex/Fanchart"
        }
      ]
    };
  },
  mounted() {
    this.$router.push("/chartIndex/Basicdata")
     $(".p-item").eq(0).addClass("actives")
  },
  methods:{
    switchView(index){
        this.$router.push(this.menuList[index].url)
       $(".p-item").removeClass("actives")
     $(".p-item").eq(index).addClass("actives")
    }
  }
};
</script>

<style lang="stylus" scoped>
.main {
    height: 100%;
    background: #fff;
    display: flex;

    .leftList {
        width: 10%;
        height: 100%;
        background: #F2F2F2;
    }
    .uls li {
        line-height: 40px;
        font-size: 18px;
        text-align: center;
        cursor: pointer;
        p{
          width 100%
          height 50px
          line-height 50px
        }
        .actives{
          background #ffffff
          border-bottom 1px solid #ff0000
        }
    }

    .right {
        height: 100%;
        flex: 1;
        overflow: auto;
    }
}
</style>
