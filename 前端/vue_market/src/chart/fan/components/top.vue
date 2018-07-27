<template>
<div class="main">
<div class="content">
<div class="title-text">
<p>
    活动数据
</p>
</div>
<div class="sp"></div>
<div class="caveat-div">
    <p class="pps">
     本页面统计数据并非实时数据，1小时统计一次，会有一定误差，请了解
    </p>
</div>
<div class="serch-div">
<el-input v-model="serchInput" placeholder="活动名称"></el-input>
<el-button class="serch" @click="serch">搜索</el-button>
</div>
<div class="table-view">
 <el-table
      :data="tableData"
      style="width: 100%"
       @current-change="handleCurrentChange"
        highlight-current-row
      >
      <el-table-column
        prop="activityName"
        label="活动名称"
        width="180">
      </el-table-column>
      <el-table-column
        label="活动时间"
        width="300">
          <template slot-scope="scope">
              {{startData(scope.row.startDate)}}--{{endData(scope.row.endDate)}}
          </template>
      </el-table-column>
      <el-table-column
        width="80"
        label="活动状态">
      <template slot-scope="scope">
         <span v-if="scope.row.activityState==0">
             删除
         </span>
         <span v-else-if="scope.row.activityState==1">
             未发布
         </span>
         <span v-else-if="scope.row.activityState==2">
             已发布
         </span>
         <span v-else>
             关闭
         </span>
     </template>

      </el-table-column>
       <el-table-column
        prop="maxNum"
        width="190"
        label="参与/最大参与人数"
        >
  <template slot-scope="scope">

  </template>
      </el-table-column>
       <el-table-column
        width="190"
        label="已发放/剩余奖品数量">
         <template slot-scope="scope">

         </template>
      </el-table-column>
       <el-table-column
        width="80"
        label="传播人数">
      </el-table-column>
       <el-table-column
        prop="is_alarm"
        label="活动状况告警">
          <template slot-scope="scope">
              <span v-if="scope.row.scope==0">
                  不告警
              </span>
              <span v-else>
                  告警
              </span>
          </template>
      </el-table-column>
    </el-table>
</div>
<div class="split-div">

</div>

</div>
</div>
</template>

<script>
import axios from "axios";
import pub from "static/public.js";
export default {
  name: "TopViews",
  data() {
    return {
      serchInput: "",
      currentRow: null,
      tableData: []
    };
  },
  methods: {
    startData(time) {
      console.log(time);
      return pub.fmtDate(time);
    },
    endData(time) {
      return pub.fmtDate(time);
    },
    handleCurrentChange(val) {
        this.$bus.$emit("chartdata", val.activityId,val.templateUuid);
        this.currentRow = val;
    },
    serch() {
      this.$axios({
        method: "get",
        url: pub.chartData,
        params: {
          token: sessionStorage.getItem("token"),
          activityName: this.serchInput
        }
      }).then(res => {
        if (res.data.status) {
          this.tableData = res.data.data.list;
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.table-view >>> .el-table th {
    background: #FBFBFB;
}

.table-view >>> .el-table tr td {
    text-align: center;
    cursor: pointer;
}

.serch-div >>> .el-input {
    width: 220px;
    float: left;
}

.main {
    width: 100%;

    .content {
        width: 100%;

        .title-text {
            height: 50px;
            width: 100%;

            p {
                line-height: 50px;
                padding-left: 30px;
                font-size: 18px;
            }
        }

        .sp {
            width: 95%;
            height: 1px;
            background: #E8E8E8;
            margin: auto auto;
        }
    }

    .caveat-div {
        height: 28px;
        margin-top: 30px;
        margin-left: 30px;
        background: #FFD470;
        border: 1px solid #FFD470;
        width: 480px;

        p {
            line-height: 28px;
            color: #FF5500;
            font-size: 12px;
        }
    }

    .serch-div {
        height: 50px;
        width: 300px;
        margin-top: 30px;
        margin-left: 30px;

        .serch {
            float: right;
            background: #FC7132;
            color: #fff;
        }
    }
}

.table-view {
    margin-top: 30px;
    width: 95%;
    margin: 30px auto;
    height: 100%;
    overflow-x: auto;

    table {
        width: 100%;

        tr {
            td {
                text-align: center;
            }
        }
    }
}

.split-div {
    height: 15px;
    width: 100%;
    clear: both;
    background: #f2f2f2;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
}
</style>
