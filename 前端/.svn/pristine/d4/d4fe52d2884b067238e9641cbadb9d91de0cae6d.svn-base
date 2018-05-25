<template>
  <div class="container">
    <header class="header">
      <span class="active">活动模板详情</span>
      <span class="news">返回</span>
    </header>
    <section class="section">
      <div class="cent"  >
        <p>
          <span>活动模板ID :</span>
          <span> </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;模板名称 :</span>
          <span>{{data.name}} </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;活动类型 :</span>
          <span> {{data.categoryId}}</span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;适用主题 :</span>
          <span> {{data.topic}}</span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;适用场景 :</span>
          <span> {{data.scene}}</span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;是否收费 :</span>
          <span>{{data.isPay}} </span>
        </p>
        <p>
          <span>单价&nbsp;&nbsp;（元 ):</span>
          <span>{{data.price}} </span>
        </p>
        <p>
          <span>上下架状态 :</span>
          <span>{{data.isShelves}}  </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注 :</span>
          <span>{{data.remark}} </span>
        </p>
      </div>
      <div class="compile">
        <!-- <el-button type="primary">编辑</el-button>
             <el-button>返回</el-button> -->

        <p>
         <!-- <i-button type="primary">编辑</i-button>-->
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
      id:'1',
      listArry: [],
      isPayList:[{"id":1,name:"收费"},{"id":0,name:"免费"}],
      isShelvesList:[{"id":1,name:"上架"},{"id":0,name:"下架"}],
      data: {
        "id": 1,
        "name": "小游戏1",
        "categoryId":'',
        "isPay": 1,
        "price": 10.0,
        "isShelves": 1,
        "remark": null,
        "usetotal": 0,
        "img": "http://static.resource.youyu.weijuju.com//image/page/index/newgame/cover/dafuweng.jpg?v=106",
        "title": "九宫格子",
        "topic":'',
        "scene":'',
      }
    }
  },
  mounted() {
    this.creat()
  },
  methods: {
    creat() {
      const _this = this
      _this.$http({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/center/activityDataModel/getByid?id="+_this.id,
      }).then((response => {
          console.log(response.data.data);
          var returnData = response.data.data;
          _this.data.name=returnData.entity.name;
          _this.data.img=returnData.entity.img;
          _this.data.categoryId=returnData.entity.categoryName;
          _this.data.price=returnData.entity.price;
          _this.data.remark=returnData.entity.remark;
          _this.data.title=returnData.entity.title;
          _this.data.usetotal=returnData.entity.useTotal;
          if(returnData.entity.is_pay == _this.isPayList[0].id){
            _this.data.isPay= _this.isPayList[0].name;
          }else{
            _this.data.isPay= _this.isPayList[1].name;
          }
          if(returnData.entity.is_shelves == _this.isShelvesList[0].id){
            _this.data.isShelves=_this.isShelvesList[0].name;
          }else{
            _this.data.isShelves=_this.isShelvesList[1].name;
          }
          // 设置主题
          for(var i = 0 ;i<returnData.topicList.length;i++){
              _this.data.topic +=returnData.topicList[i].topicName+"   ";
          }
          for(var i = 0 ;i<returnData.sceneList.length;i++){
              _this.data.scene +=returnData.sceneList[i].sceneName+"   ";
          }
          
      })).catch(response => {
        console.log(response)
      })
      // let serverURL = "http://center.marketing.yunpaas.cn"
      // console.log(this)
      // this.$http({
      //   method: "get",
      //   url: "http://192.168.1.24:8080/activityDataModel/findByParams",
      //   data: {

      //   }
      // }).then((response => {
      //   this.listArry.push(response.data.data)
      //   console.log(this.listArry)
      // })).catch(response => {
      //   console.log(response)
      // })
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
