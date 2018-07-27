<template>
  <div class="person_wrap" >
    <div id="perwrap"></div>
    <div class="main_Phone">
      <div class="content">
        <span class="split"></span>
        <span class="set-pass-text">绑定手机</span>
      </div>
      <div class="input-telPhone">
        <p>当前绑定手机号：{{telPhone}}</p>
        <el-button class="saves" @click="subPhone()">重新绑定</el-button>
      </div>
    </div>
    <div class="main">
      <div class="content">
        <span class="split"></span>
        <span class="set-pass-text">修改密码</span>
      </div>
      <div class="input-div">
        <p class="p-input">
          <el-input v-model="history_pass" placeholder="原始密码"></el-input>
        </p>
        <p class="p-input">
          <el-input v-model="new_pass" placeholder="新密码"></el-input>
        </p>
        <p class="p-input">
          <el-input v-model="confirm_pass" placeholder="请再次输入新密码"></el-input>
        </p>
        <p>
          <el-button class="saves" @click="sub">保存</el-button>
        </p>
      </div>
    </div>
    <div class="phone_content" v-show="ishow">
    <div class="tlephone">
      <div class="tlePhone_title">
        <span>绑定手机号</span>
        <span class="close_phone" @click="goBack()">X</span>
      </div>
      <div>
      <p class="p-input">
        <el-input v-model="oldPhone" placeholder="原绑定手机号"></el-input>
      </p>
      <p class="p-input_code">
        <el-input v-model="phoneCode" placeholder="短信验证码" class="code_phone_info"></el-input>
        <button class="getCode" @click="">获取验证码</button>
      </p>
      </div>
      <div class="btnS">
        <button class="btn1" @click="confirm()">确定</button>
        <button class="btn2" @click="cancel()">取消</button>
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
        history_pass: "",
        new_pass: "",
        confirm_pass: "",
        telPhone: '13331086792',
        oldPhone: '',
        phoneCode: '',
        ishow: false,
      };
    },
    methods: {
      subPhone() {
        this.ishow = true
        $("#perwrap").css("display", 'block')

      },
      sub() {
        let user = $.parseJSON($.cookie("users"));
        if (this.history_pass == "") {
          alert("请输入原始密码");
          return;
        }

        if (this.new_pass == "") {
          alert("请输入新密码");
          return;
        }
        if (this.new_pass != this.confirm_pass) {
          alert("两次密码不一致");
          return;
        }
        let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;

        if (reg.test(this.new_pass)) {
          this.$axios({
            method: "post",
            url: pub.updatePass,
            data: {
              loginUserId: user.id,
              oldPassword: this.history_pass,
              newPassword: this.new_pass
            }
          }).then(res => {
            if (res.data.status == 200) {
              alert("修改成功")
            }
          });
        } else {
          alert("您设定的密码超长度应该在6-16个字符之间! 并且包含数字和字母");
        }
      },
      goBack() {
        this.ishow = false
        $("#perwrap").css("display", 'none')
      },
      confirm(){

      },
      cancel(){
        this.ishow = false
        $("#perwrap").css("display", 'none')
      },
    },
  }

</script>

<style lang="stylus" scoped>
  .person_wrap{
    background #fff
    width: 100%
    height: 100%
  }
  #perwrap{
    position:absolute;
    top:0;
    left:0;
    z-index:2;
    width:100%;
    height:100%;
    background-color:#000;
    opacity:0.3;
    display:none;
  }
  .main_Phone{
     width: 96%
     border-bottom 1px solid #E8E8E8
     margin-left 30px
   }
  .main{
    width: 96%
    margin-left 30px
  }
  .split {
    width: 5px;
    height: 15px;
    display: inline-block;
    background: #FC7132;
    position: relative;
    top: 25px;
    /*margin-left: 30px;*/
  }

  .set-pass-text {
    position: relative;
    top: 22px;
    font-weight: bold;
    font-size: 20px;
    left: 10px;
  }



  .input-telPhone {
    margin-top 50px
    width: 400px
    height: 100px
    margin-left 100px
    p {
      font-size: 14px
    }
    .saves {
      background: #FC7132;
      color: #fff;
      margin-top: 10px
    }
  }

  .input-div {
    margin-top: 40px;
    width: 300px;
    height: 300px;
    margin-left: 100px;

    p {
      height: 60px;

      .saves {
        background: #FC7132;
        color: #fff;
      }
    }
  }

  .tlephone {
    width: 348px;
    height: 256px;
    margin 0 auto
    position: absolute
    left: 42%
    top: 20%
    background: #FFFFFF;
    box-shadow: 0 6px 12px 0 rgba(0,35,85,0.17);
    border-radius: 2px;
    z-index 10
  }
  .tlePhone_title {
    width: 100%
    height: 40px
    line-height: 40px
    text-align:center
    background: #F2F2F2;
    position: relative
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #4A4A4A;
    letter-spacing: 0;
    span{
      display inline-block

    }
    .close_phone{
      display: block
      width: 20px
      height: 20px
      position: absolute
      right: 5%
      top: 0
      font-size:14px
    }
  }
  .p-input{
    width: 280px
    height: 34px
    margin 0 auto
    margin-top 16px
  }

  .p-input_code{
    width: 280px
    height: 34px
    margin 0 auto
    margin-top 16px
    }
  .code_phone_info{
    width: 185px
    height: 34px
    margin-top 19px

  }
  .getCode{
    background: #F2F2F2;
    border: 1px solid #E8E8E8;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #4A4A4A;
    letter-spacing: 0;
    width: 84px
    height: 34px
    margin-left 5px
  }
  .btnS{
    margin-top: 50px
    text-align center
    .btn1{
      width: 64px
      height: 34px
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 0;
      background: #FC7132;
      border-radius: 3px;
      margin-right 10px
    }
    .btn2{
      width: 64px
      height: 34px
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #9B9B9B;
      letter-spacing: 0;
      background: #F2F2F2;
      border-radius: 3px;
      margin-left 10px
    }
  }
</style>
