<template>
  <div class="container">
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
            <div class="title">
            <p>系统检测到您当前的账号归属多个企业</p>
              <p>请选择登录</p>
            </div>
            <div class="company">
              <ul class="company_con">
                <li v-for="(item,index) in list" :key="index" @click="loginHome(item.id,item.userId)" class="company_con_content">
                  <i></i>
                  {{item.companyName}}
                </li>
              </ul>

            </div>
          </div>
        </div>
        <p class="title_info_content">-北京聚通达科技股份有限公司提供技术支持-</p>
      </div>
    </section>
  </div>
</template>

<script>
  export default ({
    data() {
      return {
        list:[],
        userName: null,
        userPwd: null,
        companyId: '',
        userId: '',
        Active:0,
      }
    },

    mounted() {
      this.list=JSON.parse(sessionStorage.getItem("dataList"))
      this.userName = sessionStorage.getItem('userName')
      this.userPwd = sessionStorage.getItem('userPwd')

    },
    methods: {
      loginHome(id,userId) {
        this.companyId=id
        this.userId=userId
        this.$axios({
          method:'post',
          url:'http://center.marketing.yunpaas.cn/center/enterpriseuser/login_step2',
          params:{
            userId:this.userId,
            companyId:this.companyId,
            userName:this.userName,
            password:this.userPwd
          }
        }).then(res=>{
          console.log(res);
          const token = res.data.data.user.token;
          const versionName=res.data.data.enterpriseRole
          sessionStorage.setItem("token", token); //存储token
          sessionStorage.setItem("vsersionName",versionName)
          this.$router.push({path: "/mainPage"})
        })
      },

      function () {
        axios({
          method: "get",
          url: ''
        })
      }

    },
    components: {}
  })

</script>

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
    background: url("../../static/active/bg.png") no-repeat center center;
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

  /* <!-- 右边部分 --> */
  .right .inps {
    text-align: center;
  }

  .right .inps .title {
    font-size: .75rem;
    width: 90%;
    height: 3rem;
    line-height: 1rem;
    font-weight: normal;
    border-bottom: 1px solid  #ccc;
    margin: 0 auto;
    p:nth-child(1){
      margin-top: 20px;
    }
  }

  .right .inps .company {
    width: 100%;
    height: 12rem;
    overflow: hidden;
    overflow-y: auto;
  }

  .right .inps .company .company_con {
    font-size: .7rem;
    width: 90%;
    margin: 0 auto;
    border-bottom: solid 1px #ccc;
    line-height: 2rem;
  }

  .company_con li {
    border-bottom: 1px solid #f0f2f5;
  }
  .company_con_content:hover{
    background: #fc7132;
  }
  .title_info_content{
    position: absolute;
    left: 42%;
    bottom: 5%;
    color: #fff;
    font-size: 12px;
  }
</style>
