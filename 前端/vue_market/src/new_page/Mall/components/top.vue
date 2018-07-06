<template>
<div class="main">
<div class="top">
<div class="mall-type-div">
<label class="all-type-label">选择分类:</label>
<div class="all-type">
 <el-checkbox-group v-model="checkboxGroup1">
      <el-checkbox-button v-for="mall in cities" :label="mall" :key="mall">{{mall}}</el-checkbox-button>
    </el-checkbox-group>
</div>

</div>
<div class="select-div">
<label>筛选项：</label>
<div class="checkbox-div">
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="聚通达自营"></el-checkbox>
    <el-checkbox label="有库存"></el-checkbox>
  </el-checkbox-group>
  <div class="form-input-div">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
       <el-button class="sel">查找</el-button>
  </div>
</div>
</div>

</div>
</div>    
</template>

<script>
  const checkList = ['聚通达自营', '有库存'];
const  mall_type=[
            '全部',
            '视频会员',
            '流量话费',
            '打车劵',
            '餐饮劵1',
            '餐饮劵2',
            '视频会员1',
            '视频会员2',
             '视频会员3',
            '流量话费1',
            '打车劵1',
            '餐饮劵3'

        ]
export default {
data(){
    return{
        
        checkboxGroup1:['全部'],
        checkedCities:'',
         cities:mall_type,
        checkList: ['']
    }
},
methods:{
    handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
}
}
</script>
<style>

</style>

<style lang="stylus" scoped>

label{
    float left
}
.checkbox-div{
    float left
    width 80%
    .form-input-div{
        float right 
        width 300px
        height 40px
        .el-input{
            width 72%
            float left
        }
        .el-button{
            background #FC7132
            float right
            text-align center
            color #fff
        }
    }
    .el-checkbox-group{
        float left
    }
}
.main{
    .top{
    height 200px
    width 90%

    .mall-type-div{
        padding-top 30px
        font-size 16px
        min-width 100%
        .all-type{

        }
        .all-type{
            width 40%
            float left
            line-height 48px
            position relative
            bottom 10px
            min-width 700px
        }
        .all-type-label{
            float left
        }
    }
    }
}
.all-type >>> .el-checkbox-button__inner{
border none 
background none
margin-left 20px
padding 7px 10px
}
.all-type >>> .el-checkbox-button.is-checked .el-checkbox-button__inner{
    background #EE6723
    border-radius 30px
}
.select-div{
clear both
font-size 16px
min-width 1100px
}
</style>
