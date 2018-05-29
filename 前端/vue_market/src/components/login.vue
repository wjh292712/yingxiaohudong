<template>
  <div class="container">
    <!-- <header class="header">
                              <span>聚通达</span>
                           </header> -->
    <section class="section">
      <div class="wrapper">
        <div class="left">
          <span>立足企业营销场景，提升营销活动效率</span>
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
             <span><input type="checkbox">记住账号</span>
             <span>忘记密码</span>
           </div>
           <div class="btns">
             <button class="btn"@click="login()" >立即登录</button>
           </div>
           <div class="sign">
             <a href="">  没有账号 现在注册</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import {mapState,mapMutations,mapActions} from 'vuex'
export default ({
  data(){
    return{
        username:"",
        userName:null,
        userPwd:null,
    }
  },
  methods:{
    ...mapActions(["undisapear"]),
    ...mapActions({login:'undisapear'}),
    ...mapMutations(['show']),
    time(){
      console.log(111)
    },
    login(){
      sessionStorage.setItem('userName',this.userName)
      sessionStorage.setItem('userPwd',this.userPwd)
      sessionStorage.setItem('companyId',this.companyId)
      sessionStorage.setItem('userId',this.userId)

      sessionStorage.getItem('userName',this.userName)
      console.log(this.userName)
      console.log(this.userPwd)
      var _this = this

      this.$axios({
                    method: "post",
                    url: "http://center.marketing.yunpaas.cn/center/enterpriseuser/login_step1?",
                    params: {
                      userName:this.userName,
                      password:this.userPwd
                    }
                }).then(res => {
        console.log(res);

        console.log(res.data);
        if(res.data.status===true){

          // this.username = res.data.data.name
          // this.$bus.emit('name',this.username)
          this.$store.dispatch('undisappear')
          // this.$store.commit('show'),
          if(res.data.code===200){

            this.$router.push({path:"/mainPage"})//跳转主页
          }else if(res.data.code===201){

            this.$router.push({path:'/company'})//跳转企业
          }

}else{

          alert("用户名或密码错误")
}
        //商户选择
                }).catch(res => {
                    console.log(res)
                })
    }
  },
  computed:{
    // ...mapActions(["undisapear"])
  }
});
</script>
<style lang="scss" scoped>
.section {
  width: 100%;
  height: 100%;
  position:absolute;
  left:0;
  top:0;
}

.wrapper {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #f4f4f4;
}

.wrapper .left {
  width: 50%;
  height: 25rem;
  line-height: 25rem;
  text-align: center;
}

.wrapper .left span {
  font-size: 1rem;
}

.wrapper .right {
  width: 50%;
  position: relative;
}

.inps {
  width: 70%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background: #fff;
}

.inps form {
  margin-left: 2.5rem;
  border-bottom: 1px solid #ccc;
  width: 80%;
  margin-top: 1.5rem;
}

.inps form label {
  margin-left: 1rem;
  font-size: 1rem;
}

.inps .ipt {
  border-bottom: 1px solid #ccc;
  padding: 0.15rem;
  margin-top: 1.5rem;
  width: 75%;
  margin-left: 3.5rem;
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
  margin-left: 3.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.45rem;
}

.btns {
  width: 75%;
  height: auto;
  margin-top: 0.5rem;
  margin-left: 3.5rem;
}

.btns .btn {
  width: 100%;
  margin: 0 auto;
  height: 2rem;
  background: #079BD3;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1rem;
}

.sign {
  width: 100%;
  height: 1rem;
  text-align: center;
  outline: none;
  color: #079BD3;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.sign a {
  text-decoration: none;
  color: #079BD3;
  font-size: 0.75rem;
}
</style>
