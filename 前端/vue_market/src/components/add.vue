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
            <i-input :value.sync="value" style="width: 150px"></i-input>
          </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;活动类型:</span>
          <span>
            <i-select :model.sync="model1" style="width:150px">
              <i-option v-for="(item,index) in cityList" :key=index :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;适用主题:</span>
          <span>
            <i-select :model.sync="model1" style="width:150px">
              <i-option v-for="(item,index) in cityList" :key=index :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;适用场景:</span>
          <span>
            <i-select :model.sync="model1" style="width:150px">
              <i-option v-for="(item,index) in cityList" :key=index :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是否收费:</span>
          <span>
            <i-select :model.sync="model1" style="width:150px">
              <i-option v-for="(item,index) in cityList" :key=index :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;单价（元） :</span>
          <span>
            <i-input :value.sync="value" style="width: 150px"></i-input>
          </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;上下架状态:</span>
          <span>
            <i-select :model.sync="model1" style="width:150px">
              <i-option v-for="(item,index) in cityList" :key=index :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注:</span>
          <span style="margin-top:30px">
            <i-input type="textarea" :rows="4" style="width:250px"></i-input>
          </span>
        </p>
      </div>
      <div class="save">
        <p>
          <i-button type="primary">保存</i-button>
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
      model1: ''
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
