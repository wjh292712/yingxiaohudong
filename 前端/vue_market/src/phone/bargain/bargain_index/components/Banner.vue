<template>
<div class="main">
    <div class="topBanner">
        <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for="(item,key) in listImg" :key="key"> <img :src="item.imgurl"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    </div>
</div>    
</template>
<script>
export default {
  data() {
    return {
      listImg: [
        {
          id: 1,
          imgurl: require("@/assets/images/bannner.png")
        },
        {
          id: 2,
          imgurl: require("@/assets/images/timg.jpg")
        }
      ],
      swiperOption: {
        pagination: ".swiper-pagination",
        autoplay: 5000,
        loop: true
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.topBanner>>> .swiper-pagination-bullet-active {
    background: #fff;
}

.topBanner {
    width: 100%;
    height: 3.24rem;
    background: #ff0000;

    img {
        width: 100%;
        height: 100%;
    }
}

.swiper-container {
    height: 100%;
}

.main {
    position: relative;
    top: 0;
}
</style>
