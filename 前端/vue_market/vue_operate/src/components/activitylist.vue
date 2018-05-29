<template>
  <div class="container">
    <header class="header">
      <span class="active">活动模板列表</span>
      <span class="news">返回</span>
    </header>
    <section class="section">
      <div class="moban">

        <i-input size="large" class="name" v-model="templateName" placeholder="模板名称"></i-input>
        <i-select :model.sync="model3" size="large" style="width:100px" v-model="cate" placeholder="活动类型">
          <i-option v-for="(item,index) in cateList" :key=index :value="item.id">{{ item.name }} </i-option>
        </i-select>
        <i-select :model.sync="model3" size="large" style="width:100px" v-model="topic" placeholder="适用主题">
          <i-option v-for="(item,index) in topicList" :key=index :value="item.id">{{ item.name }}</i-option>
        </i-select>
        <i-select :model.sync="model3" size="large" style="width:100px" v-model="scene" placeholder="适用场景">
          <i-option v-for="(item,index) in sceneList" :key=index :value="item.id">{{ item.name }}</i-option>
        </i-select>
        <i-select :model.sync="model3" size="large" style="width:100px" v-model="updwon" placeholder="上下架状态" >
          <i-option v-for="(item,index) in shelvesList" :key=index :value="item.id">{{ item.name }}</i-option>
        </i-select>
        <i-button type="primary" @click="queryList">查询</i-button>
      </div>
      <div class="batch">
        <el-button class="up" size="small" @click="centerDialogVisible = true">批量上下架</el-button>
        <el-dialog title="批量上下架" :visible.sync="centerDialogVisible" width="30%" center>
          <span>上下架状态:</span>
          <el-select  v-model="updown_oper">
            <el-option v-for="item in optionList" :value="item.id" :label="item.name" :key="item.id"> </el-option>
          </el-select>

          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="batchUpDown()">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      <div class="tabs">
        <i-table border :columns="columns4" :data="data1" @on-selection-change="sel"></i-table>
      </div>
      <!-- <div>封装弹框</div> -->
      <div class="dialog">

        <!-- <dialog v-if="ascny"></dialog> -->
      </div>
    </section>
  </div>
</template>
<script>
// import dialog from './dialog.vue'
import qs from 'query-string'
export default {
  data() {
    return {
      //复选框data数据
      selarr:[],
      status: '',
      cate:'0',
      scene:'0',
      topic:'0',
      templateName:'',
      centerDialogVisible: false,

      cateList:[],
      sceneList:[],
      topicList:[],
      shelvesList:[

        {id:'1',name:"上架"},
        {id:'0',name:"下架"}
      ],
      optionList:[

        {id:'1',name:"上架"},
        {id:'0',name:"下架"}
      ],
      updwon:'',
      updown_oper:'',
      listArray: [],
      model2: '',
      model3: '',
      model4: '',
      columns4: [
        // {
        //   type: 'selection',
        //   width: 60,
        //   align: 'center'
        // },
        {
          type: 'selection',
          width: 60,
        },
        {
          title: '活动模板ID',
          key: 'id'
        },
        {
          title: '模板名称',
          key: 'name'
        },
        {
          title: '活动类型',
          key: 'categoryname'
        },
        {
          title: '适用主题',
          key: 'topicname'
        },
        {
          title: '适用场景',
          key: 'scenename'
        },
        {
          title: '是否收费',
          key: 'is_pay'
        },
        {
          title: '单价(元)',
          key: ' price'
        },
        {
          title: '上下架',
          key: 'is_shelves'
        },
        {
          title: '累计使用量',
          key: ' useTotal'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '编辑')
            ]);
          }
        }

      ],
      data1: [

      ],

    }

  },
  // components: {
  //   dialog,
  // },

  mounted() {
    this.creat()
    this.mapList()

  },
  methods: {
    sel(index){
      let _this = this
      _this.selarr = []
      index.map(function(val){

        _this.selarr.push(val.id)
        console.log(_this.selarr)
      })
    },
    creat() {
      const _this = this
      _this.$http({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/back/activity/model/findByParams",
        data: {
        }
      }).then((response => {
        console.log(response.data.data)
        _this.data1 = response.data.data
        _this.data1.map(function(value,index){
          console.log(value.is_pay)
          if(value.is_pay == 1){
             value.is_pay ="是"
          }else{
            value.is_pay ="否"
          }

          if(value.is_shelves==1){
            value.is_shelves="是"
          }else{
            value.is_shelves="否"
          }
        })
      })).catch(response => {
        console.log(response)
      })
    },

    mapList(){
      const _this = this
      _this.$http({
        method: "post",
        url: "http://center.marketing.yunpaas.cn//back/activity/model/map",
        data: {
        }
      }).then((response => {
        console.log(response.data.data)
        _this.cateList = response.data.data.cateList
        _this.topicList = response.data.data.topicList
        _this.sceneList = response.data.data.sceneList
      })).catch(response => {
        console.log(response)
      })
    },
    queryList(){
      const _this = this

      _this.$http({
        method: "POST",
        url: "http://center.marketing.yunpaas.cn/back/activity/model/findByParams",

        data: qs.stringify({
          "topicId":_this.topic,
          "sceneId":_this.scene,
          "categoryId":_this.cate,
          "name":_this.templateName,
          "isShelves":_this.updwon
        })
      }).then((response => {
        console.log(response.data.data)
        _this.data1 = response.data.data
        _this.data1.map(function(value,index){
          console.log(value.is_pay)
          if(value.is_pay == 1){
            value.is_pay ="是"
          }else{
            value.is_pay ="否"
          }

          if(value.is_shelves==1){
            value.is_shelves="是"
          }else{
            value.is_shelves="否"
          }
        })
      })).catch(response => {
        console.log(response)
      })
    },
    batchUpDown(){
      const _this = this
      // alert(this.selarr+" "+this.updown_oper)
      var  url=""
      if(_this.updown_oper==0&&_this.selarr.length>0){
        url="http://center.marketing.yunpaas.cn/back/activity/model/downShelves"
      }else if (_this.updown_oper==1&&_this.selarr.length>0){
        url="http://center.marketing.yunpaas.cn/back/activity/model/upShelves"
      }else{
        alert("请选择")
        return
      }
      _this.$http({
        method: "POST",
        url: url,

        data:qs.stringify({"ids": this.selarr})
      }).then((response => {
        window.location.reload(true)

      })).catch(response => {
        console.log(response)
      })
      this.centerDialogVisible = false

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
  /* line-height: 3rem; */
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
}

.header .news {
  margin-right: 1rem;
  color: #079BD3;
  margin-top: 35px;
}

.header .active {
  font-size: 0.8rem;
  margin-top: 30px;
}

.section {
  width: 100%;
  height: auto;
}

.section .moban {
  width: 90%;
  margin: 0 auto;
  margin-top: 1.5rem;
}

.section .moban .name {
  width: 18%;
}

.section .batch {
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
}

.section .batch .up {
  width: 18%;
}

.tabs {
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
}
</style>
