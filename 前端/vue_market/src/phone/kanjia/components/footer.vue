<template>
<div class="main">
     <div class="bottom-div" v-if="share_flag==false">
           <button class="btn-bottom-left" @click="buy">现在购买</button>
            <button class="btn-bottom-right" @click="share">邀请好友帮砍</button>
        </div> 
        <div class="bottom-div" v-else>
              <button class="btn-bottom-left" @click="bargain">帮砍一刀</button>
            <button class="btn-bottom-right" @click="participate">我要参加</button>
        </div>
    </div>    
</template>

<script>
import axios from "axios";
import publics from "../../../../static/js/public.js";
export default {

  data() {
    return {
      dialogprice: false,
      price: 0,
      loading: null,
      share_flag:false
    };
  },
  mounted(){
     this.share_flag=false
     let urls = location.href;//获取分享唯一标识
     urls = urls.split("share=")["1"];
    if(urls){
        this.share_flag=urls
    }
  },
  methods: {
    participate(){//我要参加
      this.$emit("participate")
    },
    buy() {
      //购买
      this.$router.push({
        path: "xiadan",
        query: { id: this.$route.query.id }
      });
    },
    share() {
      //分享
    this.$router.push({
        path: "fenxiang",
        query: { id: this.$route.query.id }
      });
    },
    bargain() {
      this.loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      let thi_s = this;
      axios
        .get(
          publics.assist_bargain + "?GoodsActivityId=" + this.$route.query.id
        )
        .then(function(response) {
          if (response.data.status) {
            thi_s.loading.close(); //关闭loading
            thi_s.$emit("flagalert", response.data.data.price);
          } else {
            thi_s.loading.close(); //关闭loading
            thi_s.$toast({
              message: response.data.msg,
              duration: 3000
            });
          }
        })
        .catch(function(response) {});
    }
  }
};
</script>

<style lang="stylus" scoped>
.bottom-div {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0.95rem;
  z-index: 9999;

  .btn-bottom-left {
    height: 100%;
    width: 50%;
    background: #81C9FE;
    color: #fff;
    float: left;
    border: none;
    border-radius: 0px;
  }

  .btn-bottom-right {
    width: 50%;
    height: 100%;
    background: #FF4949;
    color: #fff;
    float: left;
    border: none;
    border-radius: 0px;
  }
}
</style>
