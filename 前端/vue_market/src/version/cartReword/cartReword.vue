<template>
  <div class="active_Info">
    <div class="active_cart" v-show="isshow">
    <div class="active_nav">
      <h3>已购奖品</h3>
    </div>
    <div class="active_inp">
      <el-input
        clearable
        placeholder="商品名称"
        v-model="goodsname" style="width:140px;margin-right: 5px">
      </el-input>
      <el-button @click="find()" class="btnsFind">查询</el-button>
    </div>
    <div class="ddd" style="text-align:center">
      <el-table
        :data="goodsList"
        style="width: 100%;font-size:inherit;text-align: center">
        <el-table-column
          label="商品名称"
          prop="goodsName"
          width="140">
        </el-table-column>
        <el-table-column
          label="规格"
          prop="specName"
        >
        </el-table-column>

        <el-table-column
          prop="typeName"
          label="类型">
        </el-table-column>
        <el-table-column
          prop="stockNum"
          label="当前库存数量">
        </el-table-column>
        <el-table-column
          label="最近一次采购时间"
        width="180">
          <template slot-scope="scope">
            {{timestampToTime(scope.row.updateDate)}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="180"
          font-size="14px">
          <template slot-scope="scope">
            <span
              class="acc"
              size="mini"
              @click="CartDetail($event,scope.row.goodsId)">
           采购明细
            </span>
            <span
              class="abb"
              size="mini"
              @click="handleEdit($event,scope.row.goodsId)">
           再次采购
            </span>
          </template>
          >
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pagesize"
          layout=" prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>
    </div>
    <div class="active_cart_detaile" v-show="isshowDetail">
    <div class="active_nav_cart">
      <span class="cart_detaile">采购明细</span>
      <span class="goOut" @click="goBack()">返回</span>
    </div>
    <div class="active_inp">
      <el-date-picker
        size="large"
        v-model="cartTime"
        type="datetime"
        placeholder="采购时间"
        style="width:250px;margin-right:5px">
      </el-date-picker>
      <el-date-picker
        size="large"
        v-model="cartendTime"
        type="datetime"
        placeholder="采购时间"
        style="width:250px;margin-right:5px">
      </el-date-picker>
      <el-button @click="findcart()" class="detailFind">查询</el-button>
    </div>
    <div class="ddd" style="text-align:center">
      <el-table
        :data="goodsDetailList"
        style="width: 100%;font-size:inherit;text-align: center">
        <el-table-column
          label="商品名称"
          prop="goods_name"
          width="140">
        </el-table-column>
        <el-table-column
          label="规格"
          prop="specName"
        >
        </el-table-column>
        <el-table-column
          prop="goods_num"
          label="采购数量">
        </el-table-column>
        <el-table-column
          prop="allprice"
          label="支付金额(元)">
        </el-table-column>
        <el-table-column
          prop="price"
          label="参考单价(元)">
        </el-table-column>
        <el-table-column
          label="采购时间"
        width="180">
          <template slot-scope="scope">
            {{timestampToTime(scope.row.create_date)}}
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          background
          @size-change="handleSizeChange1"
          @current-change="handleCurrentChange1"
          :current-page.sync="currentPage"
          :page-size="pagesize"
          layout=" prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>
    </div>
  </div>
</template>
<script>

  import Button from "iview/src/components/button/button";
  import {mapState, mapMutations, mapActions, newActiveStates} from 'vuex'

  export default {
    data() {
      return {
        goodsname: '',
        goodsList: [],//已购商品列表
        goodsDetailList:[],//商品详情列表
        goodsId:'',
        cartTime:null,//采购时间
        cartendTime:null,
        total: 100,//默认数据总数
        pagesize: 10,//每页的数据条数
        currentPage: 1,//默认开始页面
        isshow:true,
        isshowDetail:false
      }
    },
    created() {
    },
    computed: {
      ...mapState(['setting_data']),
      ...mapActions(['saveData', 'activePull', 'newActiveStates']),
    },
    mounted() {
      var token = sessionStorage.getItem('token')
      this.$axios({
        method: 'post',
        url: 'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/findPage?token=' + token,
        params: {
        }
      }).then(res => {
        let pageData = res.data.data
        let Datalist = res.data.data.list
        this.pagesize = pageData.pageSize
        this.currentPage = pageData.pageNum
        this.total = pageData.total
        this.goodsList = Datalist
      })
    },
    updated(){

    },

    methods: {

      //头部选择框
      find() {//点击查询
        var token = sessionStorage.getItem('token')
        this.$axios({
          method: 'post',
          url: 'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/findPage?token=' + token,
          headers: {'Content-Type': 'application/json'},
          params: {
            pageSize: this.pagesize,
            pageNum: this.currentPage,
            goodsName:this.goodsname
          }
        }).then(res => {
          let pageData = res.data.data
          let Datalist = res.data.data.list
          this.pagesize = pageData.pagesize
          this.currentPage = pageData.pageNum
          this.total = pageData.total
          this.goodsList = Datalist
        })
      },
      findcart(){
        var token = sessionStorage.getItem('token')
        this.$axios({
          method:'post',
          url:'http://center.marketing.yunpaas.cn/center/shopOrder/getOrderListByGoods?goodsId='+this.goodsId,
          params:{
            startDate:this.cartTime === null ? '' : this.cartTime.getTime(),
            endDate:this.cartendTime === null ? '' : this.cartendTime.getTime(),
          }
        }).then(res=>{
          console.log(res);
          let pageData = res.data.data
          let Datalist = res.data.data
          this.pagesize = pageData.pageSize
          this.currentPage = pageData.pageNum
          this.total = pageData.total
          this.goodsDetailList = Datalist

        })

      },
      goBack(){
      this.isshow=true
          this.isshowDetail=false
      },
      handleEdit(e,id){
        this.goodsId=id
      this.$router.push({path:'/indexHome/MallDesc?id='+this.goodsId})
      },
      CartDetail(e,id){
        this.goodsId=id
        this.isshow=false
        this.isshowDetail=true
        this.$axios({
          method:'post',
          url:'http://center.marketing.yunpaas.cn/center/shopOrder/getOrderListByGoods?goodsId='+this.goodsId,
          params:{

          }
        }).then(res=>{
          let pageData = res.data.data
          let Datalist = res.data.data
          this.pagesize = pageData.pageSize
          this.currentPage = pageData.pageNum
          this.total = pageData.total
          this.goodsDetailList = Datalist
        })
      },
      //日期转换
      timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y + M + D + h + m + s;
      },

      handleSizeChange: function (size) {
        this.pagesize = size;
      },
      handleCurrentChange: function (currentPage) {

        var token = sessionStorage.getItem('token')
        this.$axios({
          method: 'post',
          url: 'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/findPage?token=' + token,
          params: {
            pageSize: this.pagesize,
            pageNum: this.currentPage,
            goodsName:this.goodsname
          }
        }).then(res => {
          let pageData = res.data.data
          let Datalist = res.data.data.list
          this.pagesize = pageData.pageSize
          this.currentPage = pageData.pageNum
          this.total = pageData.total
          this.goodsList = Datalist
        })
        this.currentPage = currentPage;
      },
      handleSizeChange1: function (size) {
        this.pagesize = size;
      },
      handleCurrentChange1: function (currentPage) {

        var token = sessionStorage.getItem('token')
        this.$axios({
          method: 'post',
          url:'http://center.marketing.yunpaas.cn/center/shopOrder/getOrderListByGoods?goodsId='+this.goodsId,
          params: {
            pageSize: this.pagesize,
            pageNum: this.currentPage,
            goodsName:this.goodsname
          }
        }).then(res => {
          let pageData = res.data.data
          console.log(pageData);
          let Datalist = res.data.data
          this.pagesize = pageData.pageSize
          this.currentPage = pageData.pageNum
          this.total = pageData.total
          this.goodsDetailList = Datalist
        })
        this.currentPage = currentPage;
      }
    },

    components: {Button,},
    computed:{}
  }
</script>

<style  scoped>
  .active_Info {
    width: 85%;
    margin: 0 auto;
    /*padding: 30px;*/
    padding-left: 30px;
    position: relative;
    cursor: pointer;

  }

  .active_nav {
    width: 104%;
    height: 57px;
    line-height: 57px;
    border-bottom: 2px solid #E8E8E8;
  }

  .active_inp {
    margin-top: 20px;
  }

  .active_inp .btn_s {
    background: #FC7132;
    color: #fff;
  }

  .active_Info > ul {
    margin-top: 30px;
  }

  .active_Info > ul > li {
    float: left;
    margin-left: 50px;
  }

  .acc {
    color: #2b85e4;
    margin-right: 5px;
  }
  .acc:hover {
    color:red;
  }

  .abb {
    color: #2b85e4;
margin-left: 5px;
  }
  .abb:hover {
    color: red;

  }

  .text_info i {
    color: #FC7132;
  }

  .actie_explain > p {
    margin-left: 30px;
  }

  .actie_explain > a {
    padding-left: 160px;
  }

  .actie_explain > p > i, span {
    font-family: MicrosoftYaHei;
    color: red;
    letter-spacing: 0;
    line-height: 31px;
  }

  .active_img img {
    width: 176px;
    height: 176px;
    margin-top: 8px;
  }

  .active_input > p {
    margin-top: 20px;
  }

  .active_cart_detaile .active_nav_cart {
      width: 104%;
      height: 57px;
      line-height: 57px;
      border-bottom: 2px solid #E8E8E8;
    }
  .cart_detaile{
    font-size: 18px;
    color: #4a4a4a;
  }
  .active_nav_cart .goOut{
    display: inline-block;
    font-size: 14px;
    color: #4a4a4a;
    margin-left: 20px;

  }
  .active_nav_cart .goOut:hover{
    color: #2b85e4;
    text-decoration: underline;
  }
.btnsFind{
  background: #FC7132;
  color: white;
}
  .detailFind{
    background: #FC7132;
    color: #fff;
  }

</style>
<style>
  .el-input-group__append {
    border-left: 0;
    background: #FC7132;
    color: #fff;
  }
  .el-table th{
    text-align: center;
  }
</style>
