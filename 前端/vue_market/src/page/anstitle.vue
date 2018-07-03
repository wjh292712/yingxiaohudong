//题目设置
<template>
  <div class="reword_wrap">
    <div class="reword_con">
      <!--<el-form ref="form" :model="form" label-width="82px" > -->
      <el-form label-width="82px">
        <div class="reword_type">
          <el-form-item label="选择题库:">
            <el-radio-group v-model="radio1">
              <el-radio label="1">系统题库</el-radio>
              <el-radio label="2">自定义题库</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="选择题库:">
            <el-select v-model="value4" clearable placeholder="请选择">
              <el-option
                v-for="(item,index) in answerState"
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
              <el-radio label="0">
                <span @click="tilTime1()">不限</span></el-radio>
              <el-radio label="1">
                <span @click="tilTime()">自定义</span></el-radio>
            </el-radio-group>
            <span v-show="tileTime">
            <el-input size="mini" style="width: 50px"></el-input>
            分钟
              </span>
          </el-form-item>
        </div>

      </el-form>
      <div class="answ1" v-show="ok">
        <div class="title">
          <div class="ansTitle">
            <h3>编辑题库</h3>
            <!--<span class="del" @click="del()">X</span>-->
          </div>
          <div class="ansConent" :data-id=index>
            <el-form label-width="60px" :data-id=index>
              <h3>第{{count}}题</h3>
              <el-button size="mini" class="delBtn" @click="delTitle()">删除题目</el-button>
              <el-form-item label="题目:">
                <el-input size="mini" v-model="ansName">
                </el-input>
                <el-upload
                  action="http://center.marketing.yunpaas.cn/dt/activitySetup/upActivityImg"
                  list-type="picture-card"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                  :on-remove="handleRemove" class="upLoad">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="imageUrl" alt="">
                </el-dialog>
              </el-form-item>
              <p class="imgInfo"> 只能上传jpg/png文件，且不超过500kb</p>
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

          </div>
        </div>
        <div class="footerDati">
         <el-button size="mini" @click="addTitle()">新增题目</el-button>
          <span>共{{count}}题</span>
          <el-button size="mini">保存</el-button>
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
        value4: '',//题库选择
        radio1: '',//选择题库
        radio2: '',
        titleCount: '',//总题量
        radomCount: '',//随机题量
        imageUrl: '',
        ok: false,
        tileTime: false,
        dialogVisible: false,
        ansName: '',//题目
        ansCorrect: '',//正确答案
        ansError1: '',//错误答案1
        ansError2: '',//错误答案2
        count: '1',//总题数
        title_data: '',//数据渲染接口
        title_send: "",//数据保存接口
        dataStatus: 0,
        index:1,//第几题
      }
    },
    created() {

    },
    mounted() {
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/dt/activitySetup/init",//数据初始化接口
        params: {},
      }).then(res => {
        console.log(res.data.data);
        let setting_dtData = JSON.stringify(res.data.data)
        sessionStorage.setItem("Datadt", setting_dtData)
        this.restaurants = this.loadAll();
        this.dataStatus = this.$route.query.dataStatus
        if (this.dataStatus === undefined) {
          this.titleBase()
        } else if (this.dataStatus === '1') {
          this.titleBase1()
        }
      })

    },
    computed: {
      ...mapState(['setting_dtData']),
      ...mapActions(['saveDatadt'])
    },
    updated() {

      this.savaTitleBase()
      // if (this.dataStatus === undefined) {
      //   this.savaTitleBase()
      // } else if (this.dataStatus === '1') {
      //   this.savaTitleBase1()
      // }
    },
    methods: {
      titleBase() {

        let Data = JSON.parse(sessionStorage.getItem('Datadt'))
        this.title_data = Data.dtQuestionSetupExtend
        this.radio1 = Number(this.title_data.questionBank).toString()
        if (this.radio1 == 1) {
          this.ok = false;
        } else {
          this.ok = true;
        }
        this.answerState = this.title_data.dtQuestionTypeExtendList
        this.value4 = this.title_data.questionType
        this.titleCount = this.title_data.questionTotalNum
        this.radomCount = this.title_data.questionRadomNum
        this.ansName = this.title_data.dtActivityQuestionExtendList[0].dtQuestionExtend.title
        this.imageUrl = this.title_data.dtActivityQuestionExtendList[0].dtQuestionExtend.img
        var ary = this.title_data.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList
        var a = []
        for (var i = 0; i < ary.length; i++) {
          var cur = ary[i]
          if (cur.isRight === true) {
            this.ansCorrect = cur.answerContent
          } else if (cur.isRight === false) {
            a.push(cur.answerContent)
          }
          this.ansError1 = a[0]
          this.ansError2 = a[1]
        }

        this.radio2 = Number(this.title_data.answerTimeLimit).toString()
      },
      titleBase1() {
        this.title_data = this.$route.query.newdtData.dtQuestionSetupExtend
        this.radio1 = Number(this.title_data.questionBank).toString()
        if (this.radio1 == 1) {
          this.ok = false;
        } else {
          this.ok = true;
        }
        this.answerState = this.title_data.dtQuestionTypeExtendList
        this.value4 = this.title_data.questionType
        this.titleCount = this.title_data.questionTotalNum
        this.radomCount = this.title_data.questionRadomNum
        this.ansName = this.title_data.dtActivityQuestionExtendList[0].dtQuestionExtend.title
        this.imageUrl = this.title_data.dtActivityQuestionExtendList[0].dtQuestionExtend.img
        alert(this.imageUrl)
        // if (this.title_data.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[0].isRight === true) {
        //   this.ansCorrect = this.title_data.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[0].answerContent
        // } else if (this.title_data.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[0].isRight === false) {
        //   this.ansError1 = this.title_data.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[0].answerContent
        // }
        var ary = this.title_data.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList
        var a = []
        for (var i = 0; i < ary.length; i++) {
          var cur = ary[i]
          if (cur.isRight === true) {
            this.ansCorrect = cur.answerContent
          } else if (cur.isRight === false) {
            a.push(cur.answerContent)
          }
          this.ansError1 = a[0]
          this.ansError2 = a[1]
        }
        this.radio2 = Number(this.title_data.answerTimeLimit).toString()
      },
      savaTitleBase() {

        if (this.dataStatus === undefined) {
          let Data = JSON.parse(sessionStorage.getItem('Datadt'))
          this.title_send = Data.dtQuestionSetupExtend
        } else if (this.dataStatus === '1') {
          this.title_send = this.$route.query.newdtData.dtQuestionSetupExtend
        }
        this.title_send.questionBank = this.radio1
        if (this.radio1 == 1) {
          this.ok = false;
        } else {
          this.ok = true;
        }
        this.title_send.dtQuestionTypeExtendList = this.answerState
        this.title_send.questionType = this.value4
        this.title_send.questionTotalNum = this.titleCount
        this.title_send.questionRadomNum = this.radomCount
        this.title_send.answerTimeLimit = this.radio2 == 0 ? false : true
        this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.title = this.ansName
        this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.img= this.imageUrl
            this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[0].isRight = true
        this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[0].answerContent = this.ansCorrect
        this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[1].isRight = false
        this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[1].answerContent = this.ansError1
        this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[2].isRight = false
        this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[2].answerContent = this.ansError2


        // var ary=this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList
        // var a=[]
        // for (var i = 0; i < ary.length; i++) {
        //   var cur=ary[i]
        //   if(cur.isRight===true){
        //     cur.answerContent=this.ansCorrect
        //   }else if(cur.isRight===false) {
        //     a.push(cur.answerContent)
        //   }
        //   a[0]=this.ansError1
        //   a[1]=this.ansError2
        // }

        this.$store.state.setting_dtData.dtQuestionSetupExtend = this.title_send
        console.log(this.title_send);
        this.$bus.emit("send_title", this.title_send)
      },
      // savaTitleBase1() {
      //   this.title_send = this.$route.query.newdtData.dtQuestionSetupExtend
      //   this.title_send.questionBank = this.radio1
      //   if (this.radio1 == 1) {
      //     this.ok = false;
      //   } else {
      //     this.ok = true;
      //   }
      //   this.title_send.dtQuestionTypeExtendList = this.answerState
      //   this.title_send.questionType = this.value4
      //   this.title_send.questionTotalNum = this.titleCount
      //   this.title_send.questionRadomNum = this.radomCount
      //   this.title_send.answerTimeLimit = this.radio2 == 0 ? false : true
      //   this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.title = this.ansName
      //this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.img= this.imageUrl
      //   // if(this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[0].isRight===true){
      //   //   this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[0].answerContent=this.ansCorrect
      //   // }else if(this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[0].isRight===false){
      //   //   this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[1].answerContent=this.ansError1
      //   // }else if(this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[0].isRight===false) {
      //   //   this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList[1].answerContent = this.ansError2
      //   // }
      //   //
      //   var ary=this.title_send.dtActivityQuestionExtendList[0].dtQuestionExtend.dtAnswerList
      //   var a=[]
      //   for (var i = 0; i < ary.length; i++) {
      //     var cur=ary[i]
      //     if(cur.isRight===true){
      //       cur.answerContent=this.ansCorrect
      //     }else if(cur.isRight===false) {
      //       a.push(cur.answerContent)
      //     }
      //     a[0]=this.ansError1
      //     a[1]=this.ansError2
      //   }
      //   this.$store.state.setting_dtData.dtQuestionSetupExtend = this.title_send
      //   this.$bus.emit("send_title", this.title_send)
      // },

      handleAvatarSuccess(res, file) {
        console.log(file);
        console.log(res);
        // this.imageUrl = URL.createObjectURL(file.raw);
        this.imageUrl=file.response.data
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG && !isPNG) {
          this.$message.error('上传头像图片只能是 JPG /PNG 格式!');
        }
        if (!isPNG) {
          this.$message.error('上传头像图片只能是 JPG /PNG 格式!');
        }

        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG || isPNG && isLt2M;
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
      saveTitle() {
        if (this.radio1 == "2") {
          this.radio1 = "1"
        } else {
          this.ok = false
        }
      },
      tilTime1() {
        this.tileTime = false
      },
      tilTime() {
        this.tileTime = !this.tileTime
      },
      addTitle(){
        var htmlToAdd ="";
        htmlToAdd = $(".ansConent:eq()").html();
        $(".ansConent").html($(".ansConent").html()+htmlToAdd );
        var list=document.getElementsByClassName("el-form")
        var a=list.length
        console.log(a);
        this.index++;
        this.count=this.index
      },
      delTitle(){

      },
      // del() {
      //   if(this.radio1==1){
      //     this.ok = false;
      //   }else {
      //     this.ok = false;
      //   }
      // }
    }

  })
</script>
<style lang="scss" scoped>
  .reword_wrap {
    width: 100%;
    height: 600px;
    position: relative;
    z-index: 9;
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

  .callInfo {
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
    overflow-y: auto;
    z-index: 999;
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

    }
    .ansConent {
      width: 100%;
      /*height: 460px;*/
      padding: 10px 10px 0px 20px;
      background: #fff;
      background: rgba(255, 255, 255, 255);
      overflow: hidden;
.delBtn{
  margin-left: 82%;
}
      .delBtn:hover{
        color: #2b85e4;
        cursor: pointer;
      }
      .upLoad {
        .el-upload-list--picture-card {
          width: 10px !important;
          height: 10px !important;
        }
      }
      .el-icon-plus {
        font-size: 50px;
      }

    }

  }
  .answ1 .footerDati {
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin: 0 auto;
    text-align: center;
color: #2b85e4;


    .btn {
      background: #fe4d1e;
      color: #fff;
    }
  }
.imgInfo{
  margin-left: 12%;
}
</style>
