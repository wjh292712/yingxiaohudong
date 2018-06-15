<template>
  <div class="reword_wrap">
    <div class="reword_con">
      <!--<el-form ref="form" :model="form" label-width="82px" > -->
        <el-form label-width="82px" >
        <div class="reword_type">
              <el-form-item label="选择题库:">
                <el-radio-group v-model="radio1">
                  <el-radio label="1">系统题库</el-radio>
                  <el-radio label="2">自定义题库</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="选择题库:">
                <el-autocomplete
                  clearable="true"
                  class="inline-input"
                  v-model="answerState"
                  :fetch-suggestions="querySearch"
                  placeholder="请选择题库内容"
                  @select="handleSelect"
                  style="width:200px;margin-right:10px">
                </el-autocomplete>
           <i>总题量1000</i>
              </el-form-item>
          <el-form-item label="本次游戏所需题量:" label-width="130px">
<el-input></el-input>
            <i>该题量不能超过题库总题量</i>
          </el-form-item>
            <el-form-item label="每次随机出题数量:" label-width="130px">
<el-input></el-input>
            <i>随机出题数量不超过本次游戏总题量</i>
          </el-form-item>
          <el-form-item label="每局答题时间:" label-width="100px">
            <el-radio-group v-model="radio2">
              <el-radio label="1">不限</el-radio>
              <el-radio label="2">自定义</el-radio>
            </el-radio-group >
              <el-input size="mini" style="width: 50px" ></el-input>分钟
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  export default({
    data(){
      return {
        answerState:'',
        radio1:'',
        radio2:'',
      }
    },
    created(){

      // this.saveReword()
    },
    mounted(){
      this.restaurants = this.loadAll();
      // this.$store.dispatch("saveData")
      this.partReword()
    },
    computed:{
      ...mapState(['setting_data']),
      ...mapActions(['saveData']),
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
          {"value": "历史题材" ,index:"1"},
          {"value": "地理知识",index:"2"},

        ]
      },
      handleSelect(item) {
        console.log(item);
        // this.answerState=item.index
      },
      //奖金设置部分的数据
      // partReword(){
      //   let Data = sessionStorage.getItem('Data')
      //
      // },
      //保存奖品数据
      // saveReword(){
      //   // this.$store.dispatch("saveData")
      //   let Data = sessionStorage.getItem('Data')
      //
      //   this.$bus.emit("send_reword",this.reword_send)
      // },

    }

  })
</script>

<style lang="scss" scoped>
  .reword_wrap {
    width:100%;
    .reword_con {

      /* .el-upload--picture-card{
          float:left;
      } */
      .load_text {
        display:block;
        float:left;
        color:red;
      }
      .second {
        .el-radio:nth-of-type(2) {
          margin-left:16px;
        }
      }
      .reword_type {
        width:95%;
        margin:0 auto .5rem;
        .reword_num {
          width:3rem;
          height:1.4rem;
          line-height:1.4rem;
          border:solid 1px #ccc;
          margin:0 .1rem;
          text-align:center;
          display:inline-block;
          border-radius:4px;
          cursor: pointer;
        }
      }
    }
  }

</style>
