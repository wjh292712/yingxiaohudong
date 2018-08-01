<template>
  <div class="container">
    <!-- <header class="header">
                              <span>聚通达</span>
                           </header> -->
    <section class="section">
      <div class="wrapper">
        <div class="left">
          <div class="left_content">
          <span class="titleInfo">
            立足企业<i>营销场景</i>
          </span>
          <span class="titleInfo">
           <i>提升</i>营销活动效率
          </span>
          </div>
        </div>
        <div class="right">
          <div class="inps">
           <form action="">
               <label for="">登录</label>
           </form>
           <div class="ipt">
             <label for=""><input type="text" placeholder="请输入用户名/手机号" value="lihongwei" v-model='userName'></label>
           </div>
           <div class="ipt">
             <label for=""><input type="password" placeholder="请输入密码" value="lhw123" v-model='userPwd'></label>
           </div>
           <div class="cents">
             <span><input type="checkbox" id="ccks">记住账号</span>
             <span>忘记密码</span>
           </div>
           <div class="btns">
             <button class="btn"@click="login()" >立即登录</button>
           </div>
           <div class="sign">
             <a href="http://admin.rmw001.cn/register/skipRegister" target="_blank">免费申请注册</a>
            </div>
          </div>
        </div>
        <p class="title_info_content">-北京聚通达科技股份有限公司提供技术支持-</p>
      </div>
    </section>
  </div>
</template>
<script>
import "@/js/jquery.cookie.js";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      userName: null,
      userPwd: null,
      companyId:'',
      userId:'',
      dataList:[],
      versionName:'',
    };
  },
  methods: {
    ...mapActions(["undisapear"]),
    ...mapActions({ login: "undisapear" }),
    ...mapMutations(["show"]),
    time() {
      console.log(111);
    },
    login() {
      sessionStorage.setItem("userName", this.userName);
      sessionStorage.setItem("userPwd", this.userPwd);
      sessionStorage.setItem("companyId", this.companyId);
      sessionStorage.getItem("userName", this.userName);
      console.log(this.userName);
      console.log(this.userPwd);

      this.$axios({
        method: "post",
        url:
          "http://center.marketing.yunpaas.cn/center/enterpriseuser/login_step1?",
        params: {
          userName: this.userName,
          password: this.userPwd
        }
      }).then(res => {
        let _this=this
          if (res.data.status === true) {
            this.dataList=JSON.stringify(res.data.data)
            sessionStorage.setItem("dataList",this.dataList)
            if (res.data.code === 200) {
              const token = res.data.data.user.token;
              const id = res.data.data.user.id;
              const versionName=res.data.data.enterpriseRole
              sessionStorage.setItem("token", token); //存储token
              sessionStorage.setItem("id", id); //存储id
              sessionStorage.setItem("vsersionName",versionName)
              this.$emit("hides", true);
              $.cookie("users", JSON.stringify(res.data.data), { expires: 1 });
              this.$router.push({ path: "/mainPage",query:{versionName:this.versionName}}); //跳转主页
            } else if (res.data.code === 201) {
              _this.$router.push({ path: "/company" });
              //_this.$router.push({path:"/mainPage"})
            }
          } else {
            alert(res.data.msg);
          }
          //商户选择
        })
        .catch(res => {
          console.log(res);
        });
    }
  },
  computed: {
    // ...mapActions(["undisapear"])
  },

  mounted() {
    this.$emit("hides", false);
  }
};
</script>
<style scoped>
#ccks {
  position: relative;
  top: 2px;
}
</style>

<style lang="scss" scoped>

.section {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #f4f4f4;
  background:url("../../static/active/bg.png") no-repeat center center ;
  background-size: cover;
  position: relative;
}
.wrapper .left {
  width: 50%;
  .left_content{
    position: absolute;
    left: 28.5%;
    top: 39%;
    .titleInfo{
      display: block;
      font-size: 35px;
      color: white;
      i{
        font-style: normal;
        color:#fc7132;
      }
    }
  }
}


.wrapper .right {
  width: 50%;
  position: relative;
}

.inps {
  width: 55%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate3d(-50%, -50%, 0);
  background: #fff;
}
input[type="color"],
input[type="date"],
input[type="datetime-local"],
input[type="datetime"],
input[type="email"],
input[type="month"],
input[type="number"],
input[type="password"],
input[type="search"],
input[type="tel"],
input[type="text"],
input[type="time"],
input[type="url"],
input[type="week"],
select,
textarea {
  margin-bottom: 0px;
}
.inps form {
  margin-left: 1.8rem;
  border-bottom: 1px solid #ccc;
  width: 80%;
  margin-top: 1.5rem;
  text-align: center;
}

.inps form label {
  margin-left: 1rem;
  font-size: 1rem;
}

.inps .ipt {
  border-bottom: 1px solid #ccc;
  padding: 0.15rem;
  margin-top: 1.5rem;
  width: 80%;
  margin-left: 1.8rem;
}

.inps .ipt input {
  width: 100%;
  height: 100%;
  border: 0px;
  outline: none;
  cursor: pointer;
  padding: 0.4rem;
}

.cents {
  width: 75%;
  margin-top: 0.5rem;
  margin-left: 1.8rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.45rem;
}

.btns {
  width: 75%;
  height: auto;
  margin-top: 0.5rem;
  margin-left: 2.4rem;
}

.btns .btn {
  width: 100%;
  margin: 0 auto;
  height: 2rem;
  background: #fc7132;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1rem;
}

.sign {
  width: 75%;
  height: 1rem;
  text-align: center;
  outline: none;
  color: #fc7132;
  text-decoration: underline;
  margin-top: 1rem;
  position: relative;
  left: 45%;
  margin-left: -32.5%;
  margin-bottom: 0.5rem;
}

.sign a {
  text-decoration: none;
  color: #fc7132;
  font-size: 0.75rem;
}
  .title_info_content{
    position: absolute;
    left: 42%;
    bottom: 5%;
    color: #fff;
    font-size: 12px;
  }
</style>
