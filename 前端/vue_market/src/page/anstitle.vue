//题目设置
<template>
  <div class="reword_wrap">
    <div class="reword_con">
      <!--<el-form ref="form" :model="form" label-width="82px" > -->
      <el-form label-width="82px" >
        <div class="reword_type">
          <el-form-item label="选择题库:">
            <el-radio-group v-model="radio1">
              <el-radio label="1">系统题库</el-radio>
              <el-radio label="2">
                <span class="ans1" @click="Toggle()">自定义题库</span>
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="选择题库:">
            <el-select v-model="value4" clearable placeholder="请选择">
              <el-option
                v-for="item in answerState"
                :key="item.id"
                :label="item.typeName"
                :value="item.id">
              </el-option>
            </el-select>
            <i>总题量1000</i>
          </el-form-item>
          <el-form-item label="本次游戏所需题量:" label-width="130px">
            <el-input v-model="titleCount"></el-input>
            <span class="callInfo">该题量不能超过题库总题量</span>
          </el-form-item>
          <el-form-item label="每次随机出题数量:" label-width="130px">
            <el-input v-model="radomCount"></el-input>
            <span class="callInfo">随机出题数量不超过本次游戏总题量</span>
          </el-form-item>
          <el-form-item label="每局答题时间:" label-width="100px">
            <el-radio-group v-model="radio2">
              <el-radio label="0">不限</el-radio>
              <el-radio label="1">自定义</el-radio>
            </el-radio-group>
            <el-input size="mini" style="width: 50px"></el-input>
            分钟
          </el-form-item>
        </div>

      </el-form>
      <div class="answ1" v-show="ok">
        <div class="ansTitle">
          <h3>编辑题库</h3>
          <span class="del" @click="del()">X</span>
        </div>
        <div class="ansConent">
          <el-form label-width="60px">
            <el-form-item label="题目:">
              <el-input size="mini" v-model="ansName">
              </el-input>
              <el-upload
                action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                list-type="picture-card"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :on-remove="handleRemove" class="upLoad">
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <p> 只能上传jpg/png文件，且不超过500kb</p>
            <el-form-item label="正确答案:" label-width="80px">
              <el-input size="mini" v-model="ansCorrect">
              </el-input>
            </el-form-item>
            <el-form-item label="错误答案:" label-width="80px">
              <el-input size="mini" v-model="ansError1">
              </el-input>
            </el-form-item>
            <el-form-item label="错误答案:" label-width="80px">
              <el-input size="mini" v-model="ansError2">
              </el-input>
            </el-form-item>
          </el-form>
          <div class="acsFooter">
            <span>上一题</span>
            <span>下一题</span>
            <span>共{{count}}题</span>
            <el-button size="mini" class="btn">保存</el-button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';

  export default ({
    data() {
      return {
        answerState: '',//题库内容
        value4:'',//题库选择
        radio1: '',//选择题库
        radio2: '',
        titleCount:'',//总题量
        radomCount:'',//随机题量
        ok: false,
        ansName: '',//题目
        ansCorrect: '',//正确答案
        ansError1: '',//错误答案1
        ansError2: '',//错误答案2
        count: '12',//总题数
        title_data:'',//数据接口
        title_send:"",
      }
    },
    created() {

      // this.saveReword()
    },
    mounted() {
      this.restaurants = this.loadAll();
      //this.partReword()
      this.titlebase()
    },
    computed: {
      ...mapState(['setting_dtData']),
      ...mapActions(['saveDatadt'])
    },
    methods: {
      titlebase() {
        let Data = JSON.parse(sessionStorage.getItem('Datadt'))
        this.title_data = Data.dtQuestionSetupExtend
        console.log(this.title_data);
        this.radio1=  Number(this.title_data.questionType).toString()
        this.answerState=this.title_data.dtQuestionTypeExtendList
        this.titleCount=this.title_data.questionTotalNum
        this.radomCount=this.title_data.questionRadomNum
        this.radio2= Number(this.title_data.answerTimeLimit).toString()
      },

      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
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
          {"value": "历史题材", index: "1"},
          {"value": "地理知识", index: "2"},

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
      Toggle() {
        this.ok = !this.ok;
      },
      del() {
        this.ok = !this.ok;
      }
    }

  })
</script>
<style lang="scss" scoped>
  .reword_wrap {
    width: 100%;
    height: 600px;
    .reword_con {
      /* .el-upload--picture-card{
          float:left;
      } */
      .load_text {
        display: block;
        float: left;
        color: red;
      }
      .second {
        .el-radio:nth-of-type(2) {
          margin-left: 16px;
        }
      }
      .reword_type {
        width: 95%;
        margin: 0 auto .5rem;
        position: relative;
        /*.reword_num {*/
        /*width: 3rem;*/
        /*height: 1.4rem;*/
        /*line-height: 1.4rem;*/
        /*border: solid 1px #ccc;*/
        /*margin: 0 .1rem;*/
        /*text-align: center;*/
        /*display: inline-block;*/
        /*border-radius: 4px;*/
        /*cursor: pointer;*/
        /*}*/
      }
    }
  }
.callInfo{
  color: #929292;
}
  .answ1 {
    width: 530px;
    height: 510px;
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 888;
    border: 1px solid #c0c4cc;
    .ansTitle {
      width: 100%;
      height: 45px;
      background: #f2f2f2;
      line-height: 45px;
      text-align: center;
      position: relative;
      h3 {
        color: #010101;
      }
      .del {
        position: absolute;
        top: 0;
        right: 20px;
        font-size: 20px;

      }
    }
    .ansConent {
      width: 100%;
      height: 460px;
      padding: 10px;
      background: #fff;
      background: rgba(255, 255, 255, 255);

      .upLoad {
        .el-upload-list--picture-card {
          width: 10px !important;
          height: 10px !important;
        }
      }
      .el-icon-plus {
        font-size: 50px;
      }
      .acsFooter {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 0 20px;
        text-align: left;
        span:nth-child(1) {
          display: inline-block;
          margin-right: 30px;
          color: #fe4d1e;
        }
        span:nth-child(2) {
          margin-right: 100px;
          color: #fe4d1e;
        }
        span:nth-child(3) {
          margin-right: 150px;
        }
        .btn {
          background: #fe4d1e;
          color: #fff;
        }
      }
    }
  }

</style>
