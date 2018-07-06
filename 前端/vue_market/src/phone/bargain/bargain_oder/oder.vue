<template>
    <div class="apps">
        <top-view class="top" :topobj="top_obj" :dataid="id"></top-view>
        <center-view class="center-view" :centerobj="center_obj"></center-view>
        <bottom-view class="bottom-view" :bottomobj="bottom_obj"></bottom-view>
        <footer-view class="footer-view" :footerobj="footer_obj"  @isemtry="isemtry"></footer-view>
    </div>
</template>

<script>
import TopView from "./components/top"
import CenterView from "./components/CenterView"
import BottomView from "./components/bottom"
import FooterView from "./components/footer"
import axios from "axios";
import publics from "static/public.js";
export default {
    components: {
        TopView,
        CenterView,
        BottomView,
        FooterView
    },
    data() {
        return {
            weixinInfo_res:null,
             id:0,
            center_obj:{//中间区域数据
                name:"",//商品名称
                price:"",//原价
                lowPrice:"",//底价
                icon:""//商品图片
            },
            top_obj:{//头部区域数据
            flag_address:true,
            receive_user:"",//姓名
            receive_phone:"",//手机
            receive_remark:"",//详细地址
            receive_address:""//城市
            },
            bottom_obj:{//底部区域
                 delivery_type:"",//配送方式
                delivery_info:"",//发货说明
              
            },
            footer_obj:{//尾部footer
                lowPrice:"",//底价
            }
        }
    },
created(){
            publics.reset()
},
    methods:{
        isemtry(){
            var params = new URLSearchParams();
            let thi_s =this
            if(!this.top_obj.flag_address){
               publics.toast(thi_s,"请添加地址")
            return;
            }       
        params.append("GoodsActivityId", thi_s.$route.query.id)
         params.append("AddressId", thi_s.id)
          axios.post(
            publics.payment_preUrl,params).then(function(response) {
               
                if (response.data.status) {
                thi_s.weixinInfo(response.data.data);
                }else{
               publics.toast(thi_s,response.data.msg)
               
                }

            })
        },
         weixinInfo(id) {
        //微信支付
        let thi_s = this;
          axios.get(
            publics.weixinInfoUrl +"?orderId=" +id)
            .then(function(response) {
               thi_s.weixinInfo_res = response
             if (response.data.status) {
               WeixinJSBridge.invoke(
              "getBrandWCPayRequest",
              {
                appId:     thi_s.weixinInfo_res.data.data.appId,
                timeStamp: thi_s.weixinInfo_res.data.data.timeStamp,
                nonceStr:  thi_s.weixinInfo_res.data.data.nonceStr,
                package:  thi_s.weixinInfo_res.data.data.prepayId,
                signType: thi_s.weixinInfo_res.data.data.signType,
                paySign:  thi_s.weixinInfo_res.data.data.paySign
              },
              function(res) {
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                  //  location.href="支付成功返回商家自定义页面";
                  publics.toast(thi_s,"支付成功")
                  thi_s.$router.push({
                    path: "yixiadan",
                    query: { orderId: id }
                  });
                } else {
                  //这里支付失败和支付取消统一处理
                  // mui.toast(res.err_msg);
                     publics.close_loadings()
                    //   publics.toast(thi_s,res.err_msg)
                  //location.href="支付失败返回商家自定义页面";
                }
              }
            );

             }else{
             
            publics.toast(thi_s,response.data.msg)
             }

            })


         },



    },
    mounted() {
        
        let thi_s = this
     
        axios.get(
            publics.order_initUrl +
            "?goodsActivityId=" +
             this.$route.query.id)
            .then(function(response) {
                 
                let data = response.data.data;
                thi_s.center_obj.name=data.goods_name;
                thi_s.center_obj.price = data.price;
                thi_s.center_obj.lowPrice = data.now_price;
                thi_s.center_obj.icon = data.goods_img;
                thi_s.footer_obj.lowPrice = data.now_price;

                 thi_s.bottom_obj.delivery_type = data.delivery_type;
                thi_s.bottom_obj.delivery_info = data.delivery_info;
                    
                let address = data.address;    
                 if (address.length > 0) {
                thi_s.top_obj.flag_address = true;
                 thi_s.id = address[address.length - 1].id;
                 thi_s.top_obj.receive_user = address[address.length - 1].receive_user;
                 thi_s.top_obj.receive_phone = address[address.length - 1].receive_phone;
                 thi_s.top_obj.receive_remark = address[address.length - 1].receive_remark;
                 thi_s.top_obj.receive_address = address[address.length - 1].receive_address;
               
                } else {
             
                thi_s.top_obj.flag_address = false;
                
                }    
             })
    }
}
</script>

<style lang="stylus" scoped>

.top{
    height 30%
}
.center-view{
    height 30%
}
.bottom-view{
      overflow: auto;
      height 40%
    padding-bottom .98rem
}
</style>
