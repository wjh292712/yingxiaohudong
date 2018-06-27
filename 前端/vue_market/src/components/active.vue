<template>
  <div class="container">
    <header class="header">
      <span class="active">活动模板详情</span>
      <span class="news">返回</span>
    </header>
    <section class="section">
      <div class="moban">
        <i-input size="large" class="name" placeholder="模板名称"></i-input>
        <i-select :model.sync="model3" style="width:100px">
          <i-option v-for="(item,index) in cityList" :key=index :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <i-select :model.sync="model4" size="large" style="width:100px">
          <i-option v-for="(item,index) in cityList" :key=index :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <i-select :model.sync="model3" style="width:100px">
          <i-option v-for="(item,index) in cityList" :key=index :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <i-select :model.sync="model4" size="large" style="width:100px">
          <i-option v-for="(item,index) in cityList" :key=index :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <i-button type="primary">查询</i-button>
      </div>
      <div class="batch">
        <el-button class="up" size="small" @click="centerDialogVisible = true">批量上下架</el-button>
        <el-dialog title="批量上下架" :visible.sync="centerDialogVisible" width="30%" center>
          <span>上下架状态:</span>
          <el-select v-model="status">
            <el-option v-for="item in options" :value="item.value" :label="item.name" :key="item.value"> </el-option>
          </el-select>

          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      <div class="tabs">
        <i-table border :columns="columns4" :data="data1"></i-table>
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
export default {
  data() {
    return {
      status: '',
      centerDialogVisible: false,
      options: [
        { name: '上架', value: '5' },
        { name: '下架', value: '2' }
      ],
      // ascny: false,
      listArray: [],
      cityList: [
        {
          value: 'beijing',
          label: '北京市'
        },
        {
          value: 'shanghai',
          label: '上海市'
        },
        {
          value: 'shenzhen',
          label: '深圳市'
        },
        {
          value: 'hangzhou',
          label: '杭州市'
        },
        {
          value: 'nanjing',
          label: '南京市'
        },
        {
          value: 'chongqing',
          label: '重庆市'
        }
      ],
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

      ],
      data1: [
        // {
        //   id: 111,
        //   name: '春节大转盘',
        //   categoryname: '抽奖',
        //   topicname: '',
        //   scenename: '',
        //   is_pay: '',
        //   price: '',
        //   is_shelves: '',
        //   useTotal: '',

        // }
        // {
        //   id: 'YH8871',
        //   age: '春节大转盘',
        //   mold: '抽奖',
        //   theme: '',
        //   scene: '',
        //   charge: '',
        //   price: '',
        //   putaway: '',
        //   amount: '',
        //   compile: '编辑'
        // },
        // {
        //   id: 'YH8871',
        //   age: '春节大转盘',
        //   mold: '抽奖',
        //   theme: '',
        //   scene: '',
        //   charge: '',
        //   price: '',
        //   putaway: '',
        //   amount: '',
        //   compile: '编辑'
        // },
        // {
        //   id: 'YH8871',
        //   age: '春节大转盘',
        //   mold: '抽奖',
        //   theme: '',
        //   scene: '',
        //   charge: '',
        //   price: '',
        //   putaway: '',
        //   amount: '',
        //   compile: '编辑'
        // }
      ],

    }

  },
  // components: {
  //   dialog,
  // },
  created() {
    const _this = this
    // let serverURL = "http://center.marketing.yunpaas.cn"
    // console.log(this)
    _this.$http({
      method: "post",
      url: "http://center.marketing.yunpaas.cn/activityDataModel/findByParams",
      data: {
      }
    }).then((response => {

      // this.listArry.push(response.data.data)
      console.log(response)
      _this.data1 = response.data.data
      console.log(_this.data1)
      // console.log(this.listArry)
    })).catch(response => {
      console.log(response)
    })

  },
  mouunted() {
    this.creat()
  },
  methods: {
    creat() {
      const _this = this
      // let serverURL = "http://center.marketing.yunpaas.cn"
      // console.log(this)
      _this.$http({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/activityDataModel/findByParams",
        data: {
        }
      }).then((response => {
        // alert(1)
        // this.listArry.push(response.data.data)
        console.log(response)
        _this.data1 = res.data.data
        // console.log(this.listArry)
      })).catch(response => {
        console.log(response)
      })
    }
  },

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
