<template>
  <div class="container">
    <header class="header">
      <span class="active">活动模板详情</span>
      <span class="news">返回</span>
    </header>
    <section class="section">
      <div class="cent" v-for='(item,index) in listArry' :key="index">
        <p>
          <span>活动模板ID :</span>
          <span>{{item[index].id}}</span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;模板名称 :</span>
          <span>{{item[index].name}}</span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;活动类型 :</span>
          <span>{{item[index].categoryname}}</span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;适用主题 :</span>
          <span>{{item[index].topicname}}</span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;适用场景 :</span>
          <span>{{item[index].scenename}}</span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;是否收费 :</span>
          <span>{{item[index].is_pay}}</span>
        </p>
        <p>
          <span>单价&nbsp;&nbsp;（元 ):</span>
          <span>{{item[index].price}}元</span>
        </p>
        <p>
          <span>上下架状态 :</span>
          <span>{{item[index].is_shelves}}</span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注 :</span>
          <span>无</span>
        </p>
      </div>
      <div class="compile">
        <!-- <el-button type="primary">编辑</el-button>
             <el-button>返回</el-button> -->

        <p>
          <i-button type="primary">编辑</i-button>
          <i-button>返回</i-button>
        </p>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  data() {
    return {
      listArry: []
    }
  },
  mounted() {
    this.creat()
  },
  methods: {
    creat() {
      // let serverURL = "http://center.marketing.yunpaas.cn"
      // console.log(this)
      this.$http({
        method: "get",
        url: "http://192.168.1.24:8080/activityDataModel/findByParams",
        data: {

        }
      }).then((response => {
        this.listArry.push(response.data.data)
        console.log(this.listArry)
      })).catch(response => {
        console.log(response)
      })
    }
  }

}
</script>
<style lang="scss">
.container {
  width: 100%;
  height: auto;
  margin-top: 1.5rem;
}

.header {
  width: 90%;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
}

.header .news {
  margin-right: 1rem;
  color: #079BD3;
}

.header .active {
  font-size: 0.7rem;
}

.section {
  width: 100%;
  height: auto;
  margin-top: 1.5rem;
}

.cent {
  width: 90%; //  border:1px solid red;
  margin: 0 auto;
}

.cent p {
  margin-left: 5%;
  font-size: 0.7rem;
  margin-top: 1rem;
}

.compile {
  width: 80%;
  margin: 0 auto;
  margin-top: 1.5rem;
}
</style>
