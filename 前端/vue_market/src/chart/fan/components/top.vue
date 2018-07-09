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
     本页面统计数据并非实时数据，10分钟统计一次，会有一定误差，请了解
    </p>
</div>
<div class="serch-div">
<el-input v-model="serchInput" placeholder="活动名称"></el-input>
<el-button class="serch">搜索</el-button>
</div>
<div class="table-view">
 <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="活动名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="活动时间"
        width="300">
      </el-table-column>
      <el-table-column
        prop="status"
        width="80"
        label="活动状态">
      </el-table-column>
       <el-table-column
        prop="number"
        width="190"
        label="参与/最大参与人数">
      </el-table-column>
       <el-table-column
        prop="shuliang"
        width="190"
        label="已发放/剩余奖品数量">
      </el-table-column>
       <el-table-column
        prop="chuanbo_num"
        width="80"
        label="传播人数">
      </el-table-column>
       <el-table-column
        prop="active_caveat"
        label="活动状况告警">
      </el-table-column>
    </el-table>
</div>
<div class="split-div">

</div>

</div>
</div>    
</template>

<script>
export default {
    name:"TopViews",
data(){
    return{
serchInput:"",

 tableData: [{
            name: '信用大转盘',
            date: '2018-01-01 00:00:00~2018-01-31 11:59:59',
            status:"未发布",
            number:"26/1000",
            shuliang:"26/1000",
            chuanbo_num:65,
            active_caveat:"正常"
          }]
    }
}
}
</script>

<style lang="stylus" scoped>
.table-view >>> .el-table th{
    background #FBFBFB
}
.serch-div >>> .el-input{
    width 220px
    float left
}
.main{
    width 100%
    .content{
     width 100%
    .title-text{
    height 50px
    width 100%
    p{
      line-height 50px
      padding-left 30px
      font-size 18px  
      }   
    }
    .sp{
        width 95%
        height 1px
        background #E8E8E8
        margin auto auto
    }   
    }
    .caveat-div{
        height 28px
        margin-top 30px
        margin-left 30px
        background #FFD470
        border 1px solid #FFD470 
        width 480px
        p{
            line-height 28px
            color #FF5500
            font-size 12px
        }
    }
    .serch-div{
            height 50px
            width 300px
            margin-top 30px
            margin-left 30px

            .serch{
            float right
            background #FC7132
            color #fff
            }
        }
}
.table-view{
    margin-top 30px
    width 95%
    margin 30px auto 
    height 40px
    table{
        width 100%
    }
}
.split-div{
    height 15px
    width 100%
    clear both
    background #f2f2f2
    width 95%
    margin-left auto
    margin-right auto
    margin-top 70px
}
</style>
