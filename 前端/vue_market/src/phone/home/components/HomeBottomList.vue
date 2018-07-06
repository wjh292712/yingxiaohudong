<template>
<div class="main">
    <div class="bottom-list">
      
      <div class="page-navbar">  
    <div class="page-title">&nbsp;</div>  
    <!-- navbar -->  
    <mt-navbar class="page-part" v-model="selected">  
      <mt-tab-item id="1" class="tts">全部商品</mt-tab-item>  
      <mt-tab-item id="2" class="tts">我参与的</mt-tab-item>  
    </mt-navbar>  
  
    <!-- tabcontainer -->  
    <mt-tab-container v-model="selected" swipeable>  
        
      <mt-tab-container-item id="1" v-if="list.length!=0">  
        <ul>
        <li v-for="(item,key) in list" class="mt1 border-bottom" @click="bargain(item.id)">
          
      <span class="left-img" slot="icon">
        <img :src="item.goods_img">
     </span>
     <div class="right-content" slot="title">
      <span class="tit-name">{{item.goods_name}}</span>
      <div class="stock">
        <p class="sold">已售{{item.goods_sales_num}}件<span class="balance">还剩{{item.goods_stock_num}}件</span></p>
      </div>
      <div class="price-div">
          <span class="low-price">
            底价￥{{item.goods_cost_price}}
          </span>
          <span class="price">
            原价 ￥{{item.goods_market_price}}
          </span>
            <span class="bargain-btn-span" slot="icon">
        <mt-button type="default" class="btns">马上砍</mt-button>
      </span>
      </div>
     </div>
          
        </li>
      
        </ul>
      </mt-tab-container-item>  
        <mt-tab-container-item id="1" class="emtry" v-else>
 <p style="text-align:center;margin-top:.4rem">{{emtry_text}}</p>
        </mt-tab-container-item>

      <mt-tab-container-item id="2" v-if="participatelists!=null">  
        <ul>
        <li v-for="(item,key) in participatelists"  class="mt2 border-bottom" @click="bargainDesc(item.id)">
         <span class="left-img" slot="icon">
        <img :src="item.wx_user_logo">
     </span>
      <div class="right-content" slot="title" style="margin-top:.3rem">
   <span class="tit-name">{{item.goods_name}}</span>
   <div class="price-div">
          <span class="low-price">
            底价 ￥{{item.goods_cost_price}}
          </span>
          <span class="price">
            原价 ￥{{item.goods_market_price}}
          </span>
      </div>
       <div class="stock-1">
        <p class="sold">已售{{item.goods_sales_num}}件<span class="balance">还剩{{item.goods_stock_num}}件</span></p>
      </div>
       <span class="bargain-btn-span-desc" slot="icon">
        <mt-button type="default" class="btns-desc">砍价详情</mt-button>
      </span>
        <div class="bargain-info" slot="title">
       <span class="yiyou">已有<span class="nums">{{item.help_count}}</span>人帮砍，当前价格<span class="prices">{{item.now_price}}</span>元</span>
      </div>
      </div>
   
          </li>  
          </ul>
      </mt-tab-container-item>  
      <mt-tab-container-item id="2" class="emtry" v-else>  
 <p style="text-align:center;margin-top:.4rem">{{emtry_text}}</p>
      </mt-tab-container-item>
    </mt-tab-container>  
  </div>  
         </div>
    </div>  

</template>

<script>
import axios from "axios";
import publics from "../../../../static/js/public.js";
export default {
  props: ["list", "participatelists"],
  data() {
    return {
      selected: "1",
      emtry_text: "",
      loading: null
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.emtry_text = "暂无数据";
    });
  },
  methods: {
    bargainDesc(id) {
        let url = window.location.href;
      url = url.split("?")[1];
      this.$router.push({
        path: "kanjia",
        query: {
          id: id,
          activeId: url.split("activityId=")[1],
        }
      });
    },
    bargain(id) {
      this.loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      let thi_s = this;
      let url = window.location.href;
      url = url.split("?")[1];
      axios
        .get(
          publics.bargainUrl +
            "?activityId=" +
            url.split("activityId=")[1] +
            "&goodId=" +
            id
        )
        .then(function(response) {
          if (response.data.status) {
            thi_s.loading.close(); //关闭loading
            thi_s.$router.push({
              path: "kanjia",
              query: {
                id: response.data.data,
                activeId: url.split("activityId=")[1],
                tag: 1
              }
            });
          } else {
            thi_s.$toast({
              message: response.data.msg,
              duration: 3000
            });
            thi_s.loading.close(); //关闭loading
          }
        })
        .catch(function(response) {
          // thi_s.loading.close();//关闭loading
        });
    }
  }
};
</script>
<style>
.mint-tab-item-label {
  font-size: 16px;
}
</style>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.mint-button--default {
  -webkit-box-shadow: none;
  box-shadow: none;
}

..mint-cell-title {
  display: flex;
}

.bargain-info {
  width: 93%;
  height: 0.55rem;
  background: #F2F2F2;
  position: absolute;
  bottom: 0.3rem;
  border-radius: 100px;
  text-align: center;
  line-height: 0.55rem;
  font-size: 14px;
  left: 50%;
  margin-left: -46.5%;

  .prices {
    color: #ff0000;
  }

  .yiyou {
    color: #9B9B9B;
  }

  .nums {
    color: #000;
  }
}

.mt1 {
  height: 2rem;
  display: flex;
}

.mt2 {
  height: 2.9rem;
  display: flex;
}

.right-content {
  margin-top: 0.2rem;
  flex: 1;
  float: left;
  ellipsis();

  .tit-name {
    margin-left: 0.2rem;
    font-size: 18px;
    font-font-weight: bold;
  }

  .bargain-btn-span {
    float: right;
    position: relative;
    bottom: 0.1rem;
    right: 0.2rem;

    .btns {
      border-radius: 40px;
      background: #8CDE56;
      width: 1.38rem;
      height: 0.6rem;
      color: #fff;
      font-size: 12px;
    }
  }

  .bargain-btn-span-desc {
    float: right;
    position: relative;
    bottom: 0.1rem;
    right: 0.2rem;

    .btns-desc {
      border: 1px solid #8CDE56;
      width: 1.54rem;
      height: 0.554rem;
      color: #8CDE56;
      font-size: 12px;
      border-radius: 100px;
    }
  }

  .price-div {
    margin-top: 0.2rem;
    margin-left: 0.1rem;

    .low-price {
      color: #ff0000;
      font-size: 15px;
    }

    .price {
      display: inline-block;
      width: 30%;
      ellipsis();
      font-size: 12px;
      color: #bebebe;
      position: relative;
      top: 0.03rem;
      text-decoration: line-through;
    }
  }

  .stock-1 {
    margin-left: 0.2rem;
    margin-top: 0.2rem;
    float: left;
  }

  .stock {
    margin-left: 0.2rem;
    margin-top: 0.3rem;

    .sold {
      ellipsis();
      width: 95%;
    }
  }

  .balance {
    margin-left: 0.2rem;
  }
}

.left-img {
  height: 1.46rem;
  width: 1.53rem;
  float: left;
  background: #bebebe;
  margin-top: 0.2rem;
  margin-left: 0.3rem;

  img {
    width: 100%;
    height: 100%;
  }
}

.mint-tab-item-label {
  font-size: 20px;
}

.mint-navbar .mint-tab-item.is-selected {
  color: #ff0000;
}

.main {
  margin-top: 0.2rem;

  .bottom-list {
    background: #fff;
  }
}

.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #ff0000;
  z-index: 99;
}

.mint-tab-container-item {
  min-height: 4rem;
}

a {
  color: #000;
}
</style>
