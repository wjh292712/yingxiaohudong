<template>
<div class="mui-content">
         <div id="ttls">
            <p>正在参加以下砍价活动......</p>
        </div>
           <div id="bbs" class="mui-col-xs-12">
            <div id="imgg_div">
                    <img :src="objects.imgUrl">
            </div>
            <div id="right_div">
                <p id="names">{{objects.name}}</p>
                <p id="yishou">已售{{objects.shengyu}}件
                    <span id="haisheng">还剩{{objects.shengyu}}</span>
                </p>
                <p id="price">￥{{objects.price}}
                    <span id="sp">￥{{objects.pce}}</span>
                </p>
            </div>
           </div>
           <div id="ccdiv">
             <div id="center_boder" class="mui-col-xs-10 mui-text-center">
                  <p>已购买该商品</p>
                  <p>价格:<span id="jiage">￥{{objects.xiaofei}}</span></p>
                  <p>
                    时间:{{time}}
                  </p>
             </div>
           </div>
           <div id="shouhuo_div">
            <p id="shou_text">收货信息</p>
           </div>
           <div>

         <div class="mui-row r_div" >
        <label class="lbs">收货人:</label>
        <span class="sps">
            {{objects.shouhuoren}}
        </span>
        <span id="phones">
            {{objects.phone}}
        </span>
    </div>

     <div class="mui-row r_div"  >
        <label class="lbs">收货地址:</label>
        <span class="sps">
            {{objects.address}}
        </span>
       
    </div>
    <div class="mui-row r_div"  >
        <label class="lbs">配送方式:</label> 
         <span class="sps">
            {{objects.peisaong_type}}
        </span>
    </div>
 <div class="mui-row r1_div"  >
     <p>发货说明：</p>
     <p id="shuoming">
       {{objects.shuoming}}
     </p>
 </div>
           </div>
    </div>    
</template>

<script>
import publics from "static/public.js";
export default {
  data() {
    return {
      objects: {
        name: "",
        shouhuoren:"",
        address:"",
        shouchu: 0,
        peisaong_type:"",
        shengyu: 0,
        price: "",
        phone:"",
        xiaofei:0,
        shuoming:"",
        time:'',
        pce: "",
        imgUrl:""
      },
        time:""
    }
  },
  methods:{

  },
  created(){
  publics.loadings(this)//加载loading
  },
  mounted(){
    let orderid = this.$route.query.orderId;
    this.$http.get(publics.oderinfo,{params:{orderId:orderid}}).then(function(res) {
     publics.close_loadings()//关闭loading
      if(res.data.status){
          let dds =res.data.data;
      this.objects.price=dds.goods_cost_price
      this.objects.pce = dds.price
      this.objects.shouhuoren=dds.receive_user
      this.objects.phone = dds.receive_phone
      this.objects.time = dds.create_time
      this.objects.peisaong_type=dds.delivery_type
      this.objects.shuoming=dds.delivery_info
      this.objects.address=dds.receive_address
      this.objects.xiaofei=dds.now_price
      this.objects.name=dds.goods_name
      this.objects.imgUrl=dds.goods_img
      this.time =  publics.formatDateTime(this.objects.time)
      }else{
      publics.toast(this,res.data.msg)
      }
      
    })
}
}
</script>

<style scoped>
#center_boder{
  border: 1px solid #bebebe;
  margin: auto auto;
  padding-top: 15px;
  padding-bottom: 15px;
}
#jiage{
  font-size: 16px;
  color: #ff0000
}
#center_boder p{
  color: #000
}
#shuoming{
    margin-top: 10px;
    width: 98%;
    padding: 0px 10px;
}
.r1_div{
    margin-top: 15px;
}
.r1_div p{
    padding-left: 15px;
    font-size: 16px;
}
#phones{
    float: right;
    margin-right: 10px;
      color: #4A4A4A
}
.sps{
    font-size: 16px;
    color: #4A4A4A
}
.lbs{
    font-size: 16px;
    color: #9B9B9B
}
.r_div{
    margin-top: 10px;
    padding-left: 15px;
}

#shou_text {
  margin-left: 15px;
  line-height: 50px;
}
#shouhuo_div {
  height: 50px;
  background: #f2f2f2;
}
#ccdiv img {
  width: 100%;
  height: 100px;
}
#ccdiv {
  height: 107px;
  margin-top: 10px;
}
#imgg_div {
  width: 100px;
  height: 100px;
  background: #bebebe;
  position: absolute;
  top: 50%;
  margin-top: -50px;
  margin-left: 15px;
  float: left;
}
#ttls {
  height: 50px;
  line-height: 50px;
  padding-left: 15px;
  color: #000;
}
#price {
  font-size: 18px;
  color: #ff0000;
}
#sp {
  color: #bebebe;
  font-size: 14px;
  text-decoration: line-through;
}
#bbs {
  height: 150px;
  background: #fff3f3;
  position: relative;
}
#yishou {
  color: #000;
  margin-top: 10px;
  height: 40px;
}
#haisheng {
  color: #000;
  margin-left: 15px;
}
#names {
  color: #000;
}
#right_div {
  float: left;
  height: 100px;
  position: absolute;
  left: 115px;
  top: 50%;
  padding-left: 10px;
  margin-top: -50px;
}

#ttls p {
  line-height: 50px;
  padding-left: 15px;
}
#imgg_div img {
  width: 100%;
  height: 100%;
}
</style>
