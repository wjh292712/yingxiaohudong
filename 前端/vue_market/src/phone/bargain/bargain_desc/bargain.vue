<template>
<div class="main" style="height:100%">
  <div class="main-content">
    <top :topdata="top_obj" :nowprice="nowPrice" ></top>
    <bottom-list :historyList="bargain_historyList" :leaderboardlist="leaderboardList" ></bottom-list>
  </div>
    <footers class="footer" @flagalert="flagAlert" @participate="participate"></footers>
     <el-dialog
        id="pops"
           :visible.sync="dialogprice"
          width="98%"
           @close="closes"
         >
          <div id="dialog_div">
              <img src="@/assets/successPrice.png">
              <p id="ppr">恭喜您，成功砍掉!</p>
              <div id="ddp">
                  <p id="pprice">￥{{price}}</p>
              </div>
            
          </div>
         </el-dialog>
    </div>    
</template>

<script>

import axios from "axios";
import publics from "static/public.js";
import top from "./components/top"; //头部组件
import BottomList from "./components/BottomList"; //底部列表组件
import footers from "./components/footer"; //底部列表组件
export default {
  components: {
    top,
    BottomList,
    footers
  },
  data() {
    return {
      dialogprice: false,
      price: 0, //砍掉的价格
      top_obj: {
        name: "",
        sold: 0, //售出
        stock: 0, //库存
        price: 0, //原价
        LowPrice: 0, //低价
        sum: 0,
        progressData: 0, //进度值
       
      },
      nowPrice: 1,
      bargain_historyList: [], //帮砍记录列表
      goods_id: 0,
      activeId: 0,
      leaderboardList: [], //排行列表
      loading: null
    };
  },
  created() {
  publics.loadings(this)//加载loading
     publics.reset()
  },
  mounted() {
    this.data();
  },
  methods: {
    participate() {
    publics.loadings(this)//加载loading
            publics.close_loadings(); //关闭loading
            this.$router.push({
              path: "kanjia_home",
              query: {
                activityId: this.activeId
              }
            });
    },
    data() {//初始化数据
      this.sum = 0;
      let thi_s = this;
      axios.get(publics.bargainInitUrl + "?id=" + this.$route.query.id).then(function(response) {
          thi_s.goods_id = response.data.data.kjGoodsSetup.id;
          thi_s.activeId = response.data.data.kjGoodsSetup.activityId;
          thi_s.top_obj.name = response.data.data.kjGoodsSetup.goodsName;
          thi_s.top_obj.sold = response.data.data.kjGoodsSetup.goodsSalesNum;
          thi_s.top_obj.stock = response.data.data.kjGoodsSetup.goodsStockNum;
          thi_s.top_obj.price =
            response.data.data.kjGoodsSetup.goodsMarketPrice;
          thi_s.top_obj.LowPrice =
            response.data.data.kjGoodsSetup.goodsCostPrice;
          thi_s.bargain_historyList = response.data.data.KjRuningPlayHelpList;
          thi_s.nowPrice = response.data.data.KjRuningGoodsActivity.nowPrice;
             $(".el-progress-bar__innerText").text("￥" + thi_s.nowPrice);
          for (let key in thi_s.bargain_historyList) {
            thi_s.sum += thi_s.bargain_historyList[key].price;
          }
          let nums = thi_s.sum / (thi_s.top_obj.price - thi_s.top_obj.LowPrice);
          let sum = nums * 100;
          thi_s.top_obj.progressData = sum;
       

          axios
            .get(
              publics.leaderboard +
                "?activityId=" +
                thi_s.activeId +
                "&goodsId=" +
                thi_s.goods_id
            )
            .then(function(response) {
              if (response.data.status) {
                thi_s.leaderboardList = response.data.data;
                 publics.close_loadings(); //关闭loading
              }
            })
            .catch(function(response) {
               publics.close_loadings(); //关闭loading
            });
        })
        .catch(function(response) {
           publics.close_loadings(); //关闭loading
        });
    },
    flagAlert(msg) {
      this.price = msg;
      this.dialogprice = true;
    },
    closes() {
      publics.loadings(this)//加载loading
      this.data();
    }
  }
};
</script>
<style scoped>
#ppr {
  position: absolute;
  top: 117px;
  left: 43px;
  color: #fff;
}
.el-dialog__body {
  background: none;
}

#pprice {
  position: absolute;
  color: #fff;
  font-size: 20px;
  width: 80%;
  left: 50%;
  margin-left: -40%;
}
#ddp {
  width: 159px;
  top: 140px;
  left: 19px;
  position: absolute;
  text-align: center;
}

#pops .el-dialog__wrapper {
  overflow: hidden;
}
#pops {
  width: 90%;
  height: 430px !important;
  background: none !important;
  -webkit-box-shadow: none !important;
  position: absolute;
  left: 50%;
  margin-left: -42%;
  overflow: hidden;
}
#pops .el-dialog .el-dialog__body {
  padding: 0px 0px;
}
#pops .el-dialog {
  height: 100%;
  width: 100% !important;
  background: none;
}
#dialog_div {
  width: 200px;
  height: 235px;
  margin: auto auto;
  position: relative;
}
#dialog_div img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
}
</style>
<style>
#pops .el-icon-close {
  display: block;
  position: absolute;
  right: 11px;
  font-size: 30px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 50%;
  bottom: -6px;
}
#pops .el-dialog {
  background: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-box-sizing: none;
  z-index: 9999;
}
</style>

<style lang="stylus" scoped>
.main-content {
  overflow: auto;
  padding-bottom: 0.95rem;
}

.footer {
  position: absolute;
  height: 0.95rem;
  width: 100%;
  bottom: 0;
}
</style>
