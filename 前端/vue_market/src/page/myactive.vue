<template>
  <div class="active_Info">
<div>
  <h3>我创建的活动</h3>
</div>

  <el-row class="demo-autocomplete">
  <el-col :span="12">
    <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="请选择字段"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
  </el-row>


  <el-table
    :data="tableData"
    border
    style="width: 100%;">
    <el-table-column
      prop="name"
      label="活动名称"
      width="255">
    </el-table-column>
    <el-table-column
      prop="data"
      label="活动时间"
      width="255">
    </el-table-column>
    <el-table-column
      prop="state"
      label="活动状态"
      width="255">
    </el-table-column>
    <!--<el-table-column-->
      <!--prop="address"-->
      <!--label="参与/最大参与人数">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
      <!--prop="address"-->
      <!--label="已发放/剩余奖品数量">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
      <!--prop="address"-->
      <!--label="传播人数">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
      <!--prop="address"-->
      <!--label="活动状况告警">-->
    <!--</el-table-column>-->
    <el-table-column
      prop="handle"
      label="操作"
      width="255">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          删除
        </el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          编辑
        </el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          发布
        </el-button>
      </template>
    </el-table-column>

  </el-table>
  </div>
</template>


<script>

    export default {
        data() {
            return {
              tableData: [{
                name: '九宫格',
                data: '2018／05／31',
                state: '未发布',
                // handle:['发布','编辑']
              },],
              restaurants: [],
              state1: '',
            }
        },
        created() {

        },
      mounted(){
        this.restaurants = this.loadAll();
      },
        methods: {
          querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
          },
          createFilter(queryString) {
            return (restaurant) => {
              return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
          },
          loadAll() {
            return [
              { "value": "活动名称" },
              { "value": "活动开始时间" },
              { "value": "活动结束时间" },
              { "value": "活动状态" },
            ];
          },
          handleSelect(item) {
            console.log(item);
          }

        },
        components: {},
        computed: {}
    }
</script>

<style scoped>
  .active_Info{
    width: 85%;
    margin: 0 auto;
    padding: 30px;

  }
  el-table th> .cell{
    position: relative;
    word-wrap: normal;
    text-overflow: ellipsis;
    vertical-align: middle;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
  }
  .el-table tr {

    text-align: center;
    background-color: #fff;
  }
</style>
