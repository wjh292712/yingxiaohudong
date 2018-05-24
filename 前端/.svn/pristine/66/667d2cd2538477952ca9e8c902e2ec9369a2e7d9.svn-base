<template>
  <div class="container">
    <header class="header">
      <span class="active">新增活动模板</span>
      <span class="news">返回</span>
    </header>
    <section class="section">
      <div class="cent">
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;模板名称:</span>
          <span>
            <i-input :value.sync="value" style="width: 150px" v-model="activityEntity.name"></i-input>
          </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;活动类型:</span>
          <span>
            <i-select :model.sync="model1" style="width:150px"  v-model="activityEntity.categoryId" >
              <i-option v-for="(item,index) in activityTypeList" :key=index :value="item.id">{{ item.name }}</i-option>
            </i-select>
          </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;适用主题:</span>
          <span>
            <i-select :model.sync="model1" style="width:150px" v-model="topicIds">
              <i-option v-for="(item,index) in activityTopicList" :key=index :value="item.id">{{ item.name }}</i-option>
            </i-select>
          </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;适用场景:</span>
          <span>
            <i-select :model.sync="model1" style="width:150px" v-model="sceneIds">
              <i-option v-for="(item,index) in activitySceneList" :key=index :value="item.id">{{ item.name }}</i-option>
            </i-select>
          </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是否收费:</span>
          <span>
            <i-select :model.sync="model1" style="width:150px" v-model="activityEntity.isPay">
              <i-option v-for="(item,index) in isPayList" :key=index :value="item.id">{{ item.name }}</i-option>
            </i-select>
          </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;单价（元） :</span>
          <span>
            <i-input :value.sync="value" style="width: 150px" v-model="activityEntity.price"></i-input>
          </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;上下架状态:</span>
          <span>
            <i-select :model.sync="model1" style="width:150px" v-model="activityEntity.isShelves">
              <i-option v-for="(item,index) in isShelvesList" :key=index :value="item.id">{{ item.name }}</i-option>
            </i-select>
          </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注:</span>
          <span style="margin-top:30px">
            <i-input type="textarea" :rows="4" style="width:250px" v-model="activityEntity.remark"></i-input>
          </span>
        </p>
      </div>
      <div class="save">
        <p>
          <i-button type="primary"  @click="saveActivity">保存</i-button>
          <i-button>取消</i-button>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      activityTypeList:'',    // 类型
      activityTopicList:'',       // 主题
      topicIds:'',
      activitySceneList:'',       // 场景
      sceneIds:'',
      isPayList:[{"id":1,name:"收费"},{"id":0,name:"免费"}],
      isShelvesList:[{"id":1,name:"上架"},{"id":0,name:"下架"}],
      model1: '',
      activityEntity:{
        "id": '',
        "name": "小游戏1",
        "categoryId": '',
        "isPay": '',
        "price": 10.0,
        "isShelves": '',
        "remark": null,
        "usetotal": '',
        "img": "默认图片",
        "title": "九宫格子"
      }
    }
  },
  mounted() {
     //获取活动类型
    this.getActivityType()
 
  },
  methods:{
    //获取活动类型
    getActivityType(){
      const _this = this
      _this.$http({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/center/activityDataModel/activityType"
      }).then((response => {
          console.log(response.data.data);
             //设置值
          _this.activityTypeList=response.data.data.ActivityCategory;
          _this.activityTopicList=response.data.data.ActivityTopic;
          _this.activitySceneList=response.data.data.ActivityScene;
      })).catch(response => {
        console.log(response)
      })
    },
    saveActivity(){
      const _this = this
      var parms = {"entity":_this.activityEntity,"topicIds": _this.topicIds  ,"sceneIds": _this.sceneIds }
      
      _this.$http({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/center/activityDataModel/create",
        data:parms
      }).then((response => {
        alert("保存完成");
      })).catch(response => {
        console.log(response)
      })
    }
 
  }
}
</script>
<style>
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
  font-size: 0.8rem;
}

.section {
  width: 90%;
  height: auto;
  margin: 0 auto;
  font-size: 0.5rem;
}

.cent {
  width: 90%;
  margin: 0 auto;
  font-size: 0.7rem;
}

.cent p {
  margin-left: 5%;
  font-size: 0.5rem;
  margin-top: 1rem;
}

.save {
  width: 80%;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-left: 2rem;
}

.save p {
  margin-left: 22%;
}
</style>
