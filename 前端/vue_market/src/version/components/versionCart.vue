<template>
  <div class="version_wrap">
    <div class="version_content">
      <div class="version_a">
        <h3>版本升级</h3>
      </div>
      <div class="version_Info">
        <div class="ver_title">
          <!--<p>slogan展示slogan展示slogan展示slogan展示</p>-->
        </div>
        <ul class="ver_img">
          <li class="ver_img_info" v-for="(item,index) in versionList" v-bind:class="{ active:index==selectItem}"
          @click="versionCart(item.versionInfoSpecList,index,item.logPicPath,item.detailPicPath)" :key="index">
          <div class="version_A">
          <img :src=item.logPicPath alt="">
          </div>
          </li>
        </ul>
      </div>
      <div class="version_Price">
        <div class="ver_Price_info">
          <div class="ver_Price_img">
            <img :src=imgUrl alt="">
            <!--<h1>标准版</h1>-->
          </div>
          <div class="ver_Prive_commodity">
            <p>聚通达MCM 标准版
              <a href="#goodsDetail">了解详情></a>
            </p>
            <p>价格：<span>{{oriPrice}}</span></p>
            <p>促销价: <span>{{proPrice}}</span></p>
            <p id="select">请选择：
              <span v-for="(item,index) in  versionListAll" @click="cartVers(item.oriPrice,item.salePrice,item.id,index,item.versionId)"
              v-bind:class="{ selected:index==selectItemCart}" :key="index">{{item.buyYear}}年赠{{item.giveMonth}}个月</span>

            </p>
          </div>
          <div class="version_cart">
            <span class="ver_cart" @click="cartPrice()">立即购买</span>
            <span class="pepole"><i class="iconfont icon-kefu"></i>咨询客服</span>
          </div>
          <div class="goodsDetail" id="goodsDetail">
            <i></i>
            <span>商品详情</span>
          </div>
        </div>
      </div>
      <div class="version_goodsDetail">
        <div><img :src="imgDetailUrl" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        versionList:[],
        versionListbzb: [],//标准版
        versionListzyb: [],//专业版
        versionListzxb: [],//尊享版
        versionListAll: [],
        versionId: '',//版本id
        versionYearId1: '',//购买年
        verMounth1: '',//赠送月
        versionYearId2: '',
        verMounth2: '',
        versionName: '',//每个版本名
        versionSpecId: '',//标准版内的id
        imgUrl: '',//详情图片
        oriPrice: '',
        proPrice: '',
        yearList: '',
        selectItem: 0,
        selectItemCart: 0,
        imgDetailUrl:'',//版本详情图片
      }
    },
    created() {

    },
    mounted() {

      this.$axios({
        method: "post",
        url: 'http://center.marketing.yunpaas.cn/center/versionInfo/getAllVersionInfo',
        params: {}
      }).then(res => {
        console.log(res);
        this.versionList=res.data.data
         this.versionListAll=this.versionList[0].versionInfoSpecList
         this.oriPrice = this.versionListAll[0].oriPrice
         this.proPrice = this.versionListAll[0].salePrice
         this.versionId = this.versionListAll[0].versionId
         this.imgUrl = this.versionList[0].logPicPath
         this.versionSpecId=this.versionListAll[0].id
         this.imgDetailUrl=this.versionList[0].detailPicPath
      })
    },

    methods: {

      versionCart(list,idx,urls,detailUrl) {
        const i=this.selectItemCart
         this.versionListAll = list
        this.selectItem=idx
        this.oriPrice = this.versionListAll[i].oriPrice
        this.proPrice = this.versionListAll[i].salePrice
        this.versionId = this.versionListAll[i].versionId
        this.imgUrl = urls
         this.imgDetailUrl=detailUrl
         this.versionSpecId=this.versionListAll[i].id
      },

      cartVers(olp,slp,id, idx,verId) {
        this.oriPrice=olp
        this.proPrice=slp
        this.versionSpecId=id
        this.versionId=verId
        this.selectItemCart = idx
      },
      cartPrice() {

        this.$axios({
          method: 'post',
          url: 'http://center.marketing.yunpaas.cn/center/versionInfo/getPayInfo',
          params: {
            versionId: this.versionId,
            versionSpecId: this.versionSpecId
          }
        }).then(res => {
          this.$router.push({
            path: '/indexVers/versionPrice',
            query: {versionId: this.versionId,versionSpecId:this.versionSpecId}
          })
        })
      },
    },
    components: {},
    computed: {}
  }
</script>

<style lang="scss" scoped>
  .version_wrap {
    width: 90%;
    height: 100%;
    /*height: 2200px;*/
    /*min-width: 1309px;*/
    background: #fff;
    /*position: relative;*/
    // left: -11%;
    .version_content {
      width: 100%;
      padding: 2rem 2rem 1rem 2rem;
      .version_a {
        width: 100%;
        height: 30px;
        border-bottom: 1px solid #E8E8E8;
      }
      .version_Info {
        width: 100%;
        border-bottom: 1px solid #E8E8E8;
        .ver_title {
          text-align: center;
          margin-top: 33px;
          font-family: MicrosoftYaHei;
          font-size: 24px;
          color: #4A4A4A;
          letter-spacing: 0;
        }
        .ver_img {
          margin-top: 42px;
          overflow: hidden;

          .ver_img_info {
            width: 300px;
            height: 241px;
            float: left;
            background: #FFFFFF;
            /*border: 1px solid #FC7132;*/
            /*box-shadow: 0 0 15px 0 rgba(255, 102, 8, 0.22);*/
            margin-right: 20px;

            .version_A {
              width: 100%;
              height: 100%;
              text-align: center;
              background-image: linear-gradient(-224deg, #F5F5F5 0%, #E1DFDF 100%);
              border: 10px solid #FFFFFF;
              img {
                width: 100%;
                height: 100%;
              }
              p:nth-child(1) {
                margin-top: 26px;
                font-family: MicrosoftYaHei-Bold;
                font-size: 24px;
                color: #4A4A4A;
                letter-spacing: 0;
              }
              p:nth-child(2) {

                font-family: MicrosoftYaHei;
                font-size: 18px;
                color: #FF0000;
                letter-spacing: 0;
              }
              .version_b {
                width: 126px;
                height: 104px;
                text-align: center;
                margin: 0 auto;
                font-family: MicrosoftYaHei;
                font-size: 14px;
                color: #4A4A4A;
                letter-spacing: 0;
                line-height: 26px;
                padding-top: 20px;
                span {
                  display: block;
                }
              }
            }
            .version_B {
              width: 100%;
              height: 100%;
              text-align: center;
              background-image: linear-gradient(-224deg, #C8CCE0 0%, #A7A8BC 98%, #A8AAC7 100%);
              border: 10px solid #FFFFFF;
              p:nth-child(1) {
                margin-top: 26px;
                font-family: MicrosoftYaHei-Bold;
                font-size: 24px;
                color: #fff;
                letter-spacing: 0;
              }
              p:nth-child(2) {

                font-family: MicrosoftYaHei;
                font-size: 18px;
                color: #fff;
                letter-spacing: 0;
              }
              .version_b {
                width: 126px;
                height: 104px;
                text-align: center;
                margin: 0 auto;
                font-family: MicrosoftYaHei;
                font-size: 14px;
                color: #fff;
                letter-spacing: 0;
                line-height: 26px;
                padding-top: 20px;
                span {
                  display: block;
                }
              }
            }
            .version_C {
              width: 100%;
              height: 100%;
              text-align: center;
              background-image: linear-gradient(-224deg, #ECD19E 0%, #D7B375 100%);
              border: 10px solid #FFFFFF;
              p:nth-child(1) {
                margin-top: 26px;
                font-family: MicrosoftYaHei-Bold;
                font-size: 24px;
                color: #fff;
                letter-spacing: 0;
              }
              p:nth-child(2) {

                font-family: MicrosoftYaHei;
                font-size: 18px;
                color: #fff;
                letter-spacing: 0;
              }
              .version_b {
                width: 126px;
                height: 104px;
                text-align: center;
                margin: 0 auto;
                font-family: MicrosoftYaHei;
                font-size: 14px;
                color: #fff;
                letter-spacing: 0;
                line-height: 26px;
                padding-top: 20px;
                span {
                  display: block;
                }
              }
            }
          }

          .active {
            border: 1px solid #FC7132;
            box-shadow: 0 0 15px 0 rgba(255, 102, 8, 0.22);
          }
        }
      }
      .version_Price {
        width: 100%;
        height: 350px;
        border-bottom: 1px solid #E8E8E8;
        background: #fff;
        padding-top: 51px;
        .ver_Price_info {
          width: 100%;
          height: 100%;
          overflow: hidden;
          .ver_Price_img {
            width: 155px;
            height: 139px;
            line-height: 139px;
            background-image: linear-gradient(-224deg, #F4F4F4 0%, #E1DFDF 100%);
            text-align: center;
            float: left;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .ver_Prive_commodity {
            width: 806px;
            height: 139px;
            padding-left: 180px;
            p:nth-child(1) {
              font-family: MicrosoftYaHei;
              font-size: 18px;
              color: #4A4A4A;
              letter-spacing: 0;
              a {
                margin-left: 89px;
                text-decoration: underline;
              }
            }
            p:nth-child(2) {
              margin-top: 12px;
              font-family: MicrosoftYaHei;
              font-size: 12px;
              color: #9B9B9B;
              letter-spacing: 0;
              span {
                font-family: MicrosoftYaHei;
                font-size: 14px;
                color: #000000;
                letter-spacing: 0;
                line-height: 16px;
                text-decoration: line-through
              }
            }
            p:nth-child(3) {
              font-family: MicrosoftYaHei;
              font-size: 12px;
              color: #9B9B9B;
              letter-spacing: 0;
              span {
                font-family: MicrosoftYaHei;
                font-size: 28px;
                color: red;
                letter-spacing: 0;
              }
            }
            p:nth-child(4) {
              margin-top: 10px;
              overflow: hidden;
              font-family: MicrosoftYaHei;
              font-size: 12px;
              color: #9B9B9B;
              letter-spacing: 0;
              span {
                display: inline-block;
                width: 80px;
                height: 28px;
                line-height: 28px;
                border: 1px solid #9B9B9B;
                border-radius: 2px;
                text-align: center;
                font-family: MicrosoftYaHei;
                font-size: 14px;
                color: #9B9B9B;
                letter-spacing: 0;
                margin-right: 9px;
              }
              .selected {
                font-family: MicrosoftYaHei;
                font-size: 14px;
                color: #FF822E;
                letter-spacing: 0;
                border: 1px solid #FF822E;
                border-radius: 2px;
              }
            }
          }
          .version_cart {

            .ver_cart {
              display: inline-block;
              width: 146px;
              height: 47px;
              line-height: 47px;
              background: #FC7132;
              font-family: MicrosoftYaHei;
              font-size: 16px;
              color: #FFFFFF;
              letter-spacing: 0;
              text-align: center;
              margin-top: 30px;
              margin-left: 180px;
            }
            .pepole {
              display: inline-block;
              margin-left: 30px;
              font-family: MicrosoftYaHei;
              font-size: 14px;
              color: #000000;
              letter-spacing: 0;
              i {
                margin-right: 10px;
              }
            }
          }
          .goodsDetail {
            width: 100%;
            height: 79px;
            line-height: 79px;
            i {
              display: inline-block;
              width: 4px;
              height: 16px;
              line-height: 16px;
              background: #FC7132;
            }
            span {
              display: inline-block;
              font-family: MicrosoftYaHei;
              font-size: 16px;
              color: #000000;
              letter-spacing: 0;
              margin-left: 13px;
            }
          }
        }
      }
      .version_goodsDetail {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
