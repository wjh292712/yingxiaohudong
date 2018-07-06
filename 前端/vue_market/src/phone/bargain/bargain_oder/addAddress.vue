<template>
<div class="mui-content">
    <div id="mains">
  <div class="mui-input-row a_input">
        <label>收货人:</label>
    <input type="text" class="mui-input-clear" placeholder="请填写" id="shouhuo" v-model="shouhuoren">
    </div>
 <div class="mui-input-row a_input" >
        <label style="float:left">联系手机:</label>
    <input type="text" class="mui-input-clear" placeholder="请填写" id="phone" v-model="phone" onkeyup="value=value.replace(/[^\d]/g,'')">
    </div>

    <div class="mui-input-row a_input" >
        <label >收货地址:</label>
    <div id="shouhuo_address" class="mui-col-xs-7" @click="pop">
        <p id="address_val">{{address}}</p>
    </div>
    </div>

    </div>
    <div id="arr_div">
        <textarea placeholder="请填写详细地址,不少于8个字" id="tex_arr" v-model="desc"></textarea>
    </div>
    <div class="mui-col-xs-12" id="botm">
        <button type="button" class="mui-btn mui-col-xs-6" id="bak" @click="baks">返回</button>
         <button type="button" class="mui-btn mui-col-xs-6" id="seave" @click="seave">保存</button>
    </div>
</div>    
</template>

<script>
import "static_css/mui.picker.css";
import "static_css/mui.poppicker.css";
import "static/mui.picker.min.js";
import "static/mui.poppicker.js";
import dd3 from "static/city.data-3.js";
import publics from "static/public.js";
var thi_s = null;
export default {
  data() {
    return {
    
      city: "请选择 >",

      shouhuoren: "",
      phone: "",
      address: "请选择 >",
      desc: "",
      id: 0
    };
  },
  mounted() {
    thi_s = this;
    this.shouhuoren = this.$route.query.user;
    this.phone = this.$route.query.phone;
    this.address = this.$route.query.address;
    this.desc = this.$route.query.desc;
  },
  methods: {
    baks() {
      this.$router.back(-1);
    },
    seave() {
        publics.loadings(this)//加载loading
      if (this.shouhuoren == "") {
         publics.close_loadings()//关闭loading
         publics.toast(this,"请填写收货人")
        return;
      }

      if (this.phone == "") {
         publics.close_loadings()//关闭loading
           publics.toast(this,"请填写手机号")
        return;
      }
      if (!this.isPoneAvailable(this.phone)) {
         publics.close_loadings()//关闭loading
          publics.toast(this,"请填写有效手机号格式")

        return;
      }
      if (this.address == "请选择 >") {
         publics.close_loadings()//关闭loading
          publics.toast(this,"请填写地址")
        return;
      }

      if (this.desc == "") {
         publics.close_loadings()//关闭loading
          publics.toast(this,"请填写详细地址")
        return;
      }
      if (this.desc.length < 8) {
         publics.close_loadings()//关闭loading
          publics.toast(this,"详细地址不允许少于8个字")
        return;
      }

      if (this.$route.query.index == 1) {
        this.$http
          .post(
           publics.add_address,
            {
              receiveUser: this.shouhuoren,
              receivePhone: this.phone,
              receiveAddress: this.address,
              receiveRemark: this.desc
            },
            { emulateJSON: true }
          )
          .then(function(res) {
           
            if (res.data.status) {
              publics.close_loadings()//关闭loading
              publics.toast(this,res.data.msg)
              this.$router.back(-1);
            }
          });
      } else {
        
        this.$http
          .post(
            publics.update_addrsss,
            {
              receiveUser: this.shouhuoren,
              receivePhone: this.phone,
              receiveAddress: this.address,
              receiveRemark: this.desc,
              id: this.$route.query.id
            },
            { emulateJSON: true }
          )
          .then(function(res) {
              publics.close_loadings()//关闭loading
             publics.toast(this,res.data.msg)
            this.$router.back(-1);
          });
      }

      //   this.$router.back(-1)
    },
    isPoneAvailable(str) {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(str)) {
        return false;
      } else {
        return true;
      }
    },
    pop() {
      (function($, doc) {
        $.init();
        $.ready(function() {
          var _getParam = function(obj, param) {
            return obj[param] || "";
          };

          //					//级联示例
          var cityPicker3 = new $.PopPicker({
            layer: 3
          });
          cityPicker3.setData(dd3.cityData3);
          cityPicker3.show(function(items) {
            thi_s.address =
              _getParam(items[0], "text") +
              " " +
              _getParam(items[1], "text") +
              " " +
              _getParam(items[2], "text");
          });
        });
      })(mui, document);
    }
  }
};
</script>

<style scoped>
.ui-alert {
  text-align: center;
  padding: 20px 10px;
  font-size: 16px;
}
#bak {
  background: #81c9fe;
  color: #fff;
  float: left;
  height: 50px;
  border: none;
  border-radius: none;
}
#seave {
  background: #8cde56;
  color: #fff;
  float: left;
  height: 50px;
  border: none;
  border-radius: none;
}
#botm {
  position: fixed;
  bottom: 0px;
}

textarea {
  border: none;
}
#arr_div {
  min-height: 150px;
  background: #fff;
}
#mains {
  background: #fff;
}
#tex_arr {
  height: 130px;
}
.mui-content {
  background: #f2f2f2;
}
#shouhuo {
  text-align: right;
}
.a_input {
  margin-top: 10px;
  border-bottom: 1px solid #e8e8e8;
}
#phone {
  text-align: right;
}
#shouhuo_address {
  text-align: right;
  float: right;
  padding-right: 6px;
}
#address_val {
  font-size: 16px;
  margin-top: 8px;
}
</style>
