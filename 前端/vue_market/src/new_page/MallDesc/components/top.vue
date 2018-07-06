<template>
<div class="main">
<div class="content">
  <div class="d-left">
<div class="left-div">
  <div class="div-img">
<img :src="imgUrl">
  </div>
</div>
<div class="left-icon" @click="righttSwitch">
<span class="el-icon-arrow-left arrow" ></span>
</div>
<div class="footer-img-switch">
<ul class="uls-arr">
  <li v-for="(item,key) in list_img">
    <img :src="item.url" @click="imgs(item.url)">
  </li>
</ul>
</div>
<div class="right-icon" @click="leftSwitch">
<span class="el-icon-arrow-right arrow"></span>
</div>
</div>
<div class="right-div">
<p class="p-title">{{name}}</p>
<div class="desc-div">
  <p>
    {{remark}}
  </p>
</div>
<div class="prices-div">
<p>优惠价：  <span class="price">￥{{offer_price}}</span></p>
</div>
<div class="price-dvs">
<p>
  原价：<span class="price-val">[￥{{oriPrice}}]</span>
</p>
</div>
<div class="buy-div">
  <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
 <el-button class="buy-button" @click="buy">立即购买</el-button>
</div>
<div class="notes">
温馨提示：如需开具发票，请联系客服。400-618-8080
</div>
</div>
</div>
</div>    
</template>

<script>
import axios from "axios";
import pub from "static/public.js";
export default {
  data() {
    return {
      num1: 1,
      left_switch: 0,
      right_switch: 0,
      i: 0,
      imgUrl:"",
      name:"",//商品名称
      desc:"",//详情描述
      offer_price:"",//售价
      oriPrice:"",//原价
      list_img: [
      
      ]
    };
  },
  methods: {
    imgs(url){
      this.imgUrl=url
    },
    handleChange(value) {
      console.log(value);
    },
    leftSwitch() {
     if(this.i<(this.list_img.length-2)){
        this.i++;
          this.left_switch += 60;
      this.right_switch = this.left_switch;
       $(".uls-arr").css("right", this.left_switch + "px");
     }
    },
    righttSwitch() {
      if(this.i>0){
        this.i--;
        this.right_switch -= 60;
      this.left_switch = this.right_switch;
      $(".uls-arr").css("right", this.right_switch + "px");
      }
    },
    buy(){
      this.$router.push("OderInfo")
    }
  },
  created() {
    // pub.loadings(this);
    this.$emit("mallflag", false);
  },
  activated() {
    this.$bus.$emit("titleName", "奖品商城>商品详情");
  },
  mounted() {
    let thi_s = this
       let id = this.$route.id
    this.$emit("mallflag", false);
    pub.mall_styles_update();

     axios.get(pub.mallDescInit+"?goodsId"+id).then(function(response) {
       thi_s.imgUrl = response.data.data.homeImg
       thi_s.name=response.data.data.name
       thi_s.desc = response.data.data.remark
       thi_s.offer_price = response.data.data.salePrice
      thi_s.oriPrice = response.data.data.oriPrice
      let list = response.data.data.shopGoodsPictureList
      for(let i in list){
         thi_s.list_img.push({
        url:list[i].picturePath,
        id:list[i].id

      })
      }
     
     })

  },
  destroyed() {
    this.$emit("mallflag", true);
    pub.mall_styles_noupdate();
  }
};
</script>

<style lang="stylus" scoped>
.buy-div .el-input-number {
  width: 129px;
  height: 47px;
}

.content {
  height: 450px;
  width: 90%;
  padding-top: 30px;
  display: flex;

  .d-left {
    height: 100%;
  }

  .left-div {
    width: 300px;
    height: 332px;
    border: 1px solid #bebebe;
    text-align: center;
    position: relative;

    .div-img {
      width: 80%;
      height: 80%;
      position: absolute;
      left: 50%;
      margin-left: -40%;
      top: 50%;
      margin-top: -40%;

      img {
        width: 90%;
        height: 90%;
      }
    }
  }

  .footer-img-switch {
    width: 240px;
    height: 60px;
    margin-top: 10px;
    float: left;
    overflow: hidden;

    .uls-arr {
      height: 100%;
      margin-top: 5px;
      width: 600px;
      overflow: hidden;
      position: relative;

      li {
        width: 50px;
        height: 50px;
        border: 1px solid #bebebe;
        float: left;
        margin-left: 10px;
        cursor pointer
        img {
          width: 95%;
          height: 95%;
        }
      }
    }
  }

  .left-icon {
    float: left;
    width: 30px;
    height: 60px;
    margin-top: 10px;
    cursor: pointer;

    .arrow {
      font-size: 30px;
      line-height: 60px;
    }
  }

  .right-icon {
    float: left;
    width: 30px;
    height: 60px;
    margin-top: 10px;
    cursor: pointer;

    .arrow {
      font-size: 30px;
      line-height: 60px;
    }
  }

  .right-div {
    float: left;
    width: 200px;
    height: 332px;
    flex: 1;

    .p-title {
      margin-left: 20px;
      font-size: 18px;
    }

    .desc-div {
      width: 585px;
      height: 93px;
      background: #F2F2F2;
      margin-left: 20px;
      margin-top: 10px;

      p {
        width: 372px;
        margin-left: 10px;
        padding-top: 10px;
      }
    }

    .prices-div {
      width: 119px;
      height: 40px;
      margin-left: 20px;
      margin-top: 15px;

      .price {
        color: #ff0000;
        font-size: 20px;
        line-height: 40px;
      }
    }

    .price-dvs {
      margin-top: 10px;
      margin-left: 20px;

      span {
        text-decoration: line-through;
      }
    }

    .buy-div {
      margin-left: 20px;
      margin-top: 20px;

      .buy-button {
        background: #FC7132;
        color: #fff;
        height: 40px;
        margin-left: 20px;
      }
    }
  }
}

.notes {
  margin-top: 20px;
  margin-left: 20px;
}
</style>
