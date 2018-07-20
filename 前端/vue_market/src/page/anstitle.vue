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
              <a class="ans_title" @click="ansTitl()">编辑题库</a>
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
            <span class="del" @click="del()">X</span>
          </div>
          <div class="ansConent">
            <el-form label-width="60px" class="ans_title" v-for="(item,indx) in listCount" :key="indx">
              <h3 v-model="count">第{{indx+1}}题</h3>
              <button size="mini" class="delBtn" @click="delTitle(indx+1)">删除题目</button>
              <el-form-item label="题目:">
                <el-input size="mini" v-model="ansName[indx]">
                </el-input>
                <el-upload
                  action="http://center.marketing.yunpaas.cn/dt/activitySetup/upActivityImg"
                  list-type="picture-card"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                  :on-remove="handleRemove" class="avatar-uploader">

                  <img v-if="imageUrl[indx]" :src="imageUrl[indx]" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <!--<el-dialog :visible.sync="dialogVisibl">-->
                  <!--<img width="100%" :src="imageUrl[indx]" alt="">-->
                <!--</el-dialog>-->
                <span>点击图片重新上传即可更换奖品图片</span>
              </el-form-item>
              <p class="imgInfo"> 只能上传jpg/png文件，且不超过500kb</p>
              <el-form-item label="正确答案:" label-width="80px">
                <el-input size="mini" v-model="ansCorrect[indx]">
                </el-input>
              </el-form-item>
              <el-form-item label="错误答案:" label-width="80px">
                <el-input size="mini" v-model="ansError1[indx]">
                </el-input>
              </el-form-item>
              <el-form-item label="错误答案:" label-width="80px">
                <el-input size="mini" v-model="ansError2[indx]">
                </el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="footerDati">
          <el-button size="mini" @click="addTitle()">新增题目</el-button>
          <span>共{{count}}题</span>
          <el-button size="mini" @click="saveTitle()">保存</el-button>
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
        arrs: [],
        answerState: '',//题库内容
        value4: '',//题库选择
        radio1: '',//选择题库
        radio2: '',
        titleCount: '',//总题量
        radomCount: '',//随机题量
        imageUrl: [],
        ok: false,
        tileTime: false,
        dialogVisible: false,
        ansName: [],//题目
        ansCorrect: [],//正确答案
        ansError1: [],//错误答案1
        ansError2: [],//错误答案2
        count: '1',//总题数
        title_data: '',//数据渲染接口
        title_send: "",//数据保存接口
        index: 1,
        dataStatus: 0,
        listCount: [1,],
        Arry: [],
        indx: 0,
        obj: {
          activityId: null,
          createDate: null,
          dtQuestionExtend: {
            createDate: null,
            dtAnswerList: [
              {
                answerContent: null,
                createDate: null,
                id: null,
                isRight: null,
                questionId: null,
              },
              {
                answerContent: null,
                createDate: null,
                id: null,
                isRight: null,
                questionId: null,
              },
              {
                answerContent: null,
                createDate: null,
                id: null,
                isRight: null,
                questionId: null,
              }],
            enterpriseId: null,
            enterpriseUserId: null,
            id: null,
            img: null,
            isSystemQuestion: null,
            isUse: null,
            rightIdList: null,
            title: null,
            type: null,
          },
          id: null,
          questionId: null,
        },
      }
    },
    created() {

    },
    mounted() {
      var token = sessionStorage.getItem('token')
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/dt/activitySetup/init?token="+token,//数据初始化接口
        params: {},
      }).then(res => {
        console.log(res.data.data);
        let setting_dtData = JSON.stringify(res.data.data)
        sessionStorage.setItem("Datadt", setting_dtData)
        this.restaurants = this.loadAll();
        this.dataStatus = this.$route.query.dataStatus
        this.titleBase()

      })
    },
    computed: {
      ...mapState(['setting_dtData']),
      ...mapActions(['saveDatadt'])
    },
    updated() {
      this.savaTitleBase()
    },
    methods: {
      titleBase() {
        let _this = this
        if (this.dataStatus === undefined) {
          let Data = JSON.parse(sessionStorage.getItem('Datadt'))
          this.title_data = Data.dtQuestionSetupExtend
        } else if (this.dataStatus === '1') {
          this.title_data = _this.$route.query.newdtData
            .dtQuestionSetupExtend
        }
        this.listCount = this.title_data.dtActivityQuestionExtendList;
        this.count=this.listCount.length
        this.radio1 = Number(this.title_data.questionBank).toString()
        // if (this.radio1 == 1) {
        //   this.ok = false;
        // } else {
        //   this.ok = true;
        // }
        this.answerState = this.title_data.dtQuestionTypeExtendList
        this.value4 = this.title_data.questionType
        this.titleCount = this.title_data.questionTotalNum
        this.radomCount = this.title_data.questionRadomNum

        for (var i = 0; i < this.title_data.dtActivityQuestionExtendList.length; i++) {
          this.ansName[i] = this.title_data.dtActivityQuestionExtendList[i].dtQuestionExtend.title
          this.imageUrl[i] = this.title_data.dtActivityQuestionExtendList[i].dtQuestionExtend.img
          if (this.title_data.dtActivityQuestionExtendList[i].dtQuestionExtend.dtAnswerList[0].isRight == true) {
            this.ansCorrect[i] = this.title_data.dtActivityQuestionExtendList[i].dtQuestionExtend.dtAnswerList[0].answerContent
          }
          if (this.title_data.dtActivityQuestionExtendList[i].dtQuestionExtend.dtAnswerList[1].isRight == false) {
            this.ansError1[i] = this.title_data.dtActivityQuestionExtendList[i].dtQuestionExtend.dtAnswerList[1].answerContent

          }
          if (this.title_data.dtActivityQuestionExtendList[i].dtQuestionExtend.dtAnswerList[2].isRight == false) {
            this.ansError2[i] = this.title_data.dtActivityQuestionExtendList[i].dtQuestionExtend.dtAnswerList[2].answerContent
          }
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
        // if (this.radio1 == 1) {
        //   this.ok = false;
        // } else {
        //   this.ok = true;
        // }
        this.title_send.dtQuestionTypeExtendList = this.answerState
        this.title_send.questionType = this.value4
        this.title_send.questionTotalNum = this.titleCount
        this.title_send.questionRadomNum = this.radomCount
        this.title_send.answerTimeLimit = this.radio2 == 0 ? false : true

        this.title_send.dtActivityQuestionExtendList = this.title_send.dtActivityQuestionExtendList.concat(this.Arry);
        for (var i = 0; i < this.listCount.length; i++) {
          this.title_send.dtActivityQuestionExtendList[i].dtQuestionExtend.title = this.ansName[i]
          this.title_send.dtActivityQuestionExtendList[i].dtQuestionExtend.img = this.arrs[i].imageUrl
          this.title_send.dtActivityQuestionExtendList[i].dtQuestionExtend.dtAnswerList[0].isRight = true
          this.title_send.dtActivityQuestionExtendList[i].dtQuestionExtend.dtAnswerList[0].answerContent = this.ansCorrect[i]
          this.title_send.dtActivityQuestionExtendList[i].dtQuestionExtend.dtAnswerList[1].isRight = false
          this.title_send.dtActivityQuestionExtendList[i].dtQuestionExtend.dtAnswerList[1].answerContent = this.ansError1[i]
          this.title_send.dtActivityQuestionExtendList[i].dtQuestionExtend.dtAnswerList[2].isRight = false
          this.title_send.dtActivityQuestionExtendList[i].dtQuestionExtend.dtAnswerList[2].answerContent = this.ansError2[i]
          console.log(this.title_send.dtActivityQuestionExtendList);
        }


        this.$store.state.setting_dtData.dtQuestionSetupExtend = this.title_send
        console.log(this.title_send);
        this.$bus.emit("send_title", this.title_send)
      },


      handleAvatarSuccess(res, file) {
        this.arrs.push({
          imageUrl: file.response.data
        })

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

      },

      tilTime1() {
        this.tileTime = false
      },
      tilTime() {
        this.tileTime = !this.tileTime
      },
      ansTitl(){
        this.ok=true
      },
      del(){
        this.ok=false
      },
      addTitle() {
        this.index++;
        //let i = this.indx++
        this.listCount.push(this.index)
        this.count = this.listCount.length
        if (this.dataStatus === undefined) {
          let Data = JSON.parse(sessionStorage.getItem('Datadt'))
          this.title_send = Data.dtQuestionSetupExtend
        } else if (this.dataStatus === '1') {
          this.title_send = this.$route.query.newdtData.dtQuestionSetupExtend
        }
        if (this.title_send.dtActivityQuestionExtendList.length < this.listCount.length) {
          this.Arry.push(this.obj)
        }
      },
      delTitle(idx) {
        $("p").detach(".hello");
        this.listCount.length
        if (this.listCount.length >= 2) {
          this.listCount.splice(idx - 1, 1)
          this.count = this.listCount.length
        } else {
          alert("最少保留一题")
        }


      },
      saveTitle() {

      },
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
  .ans_title{
    margin-left: 20px;
    text-decoration: underline;
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
      .del{
        position: absolute;
        top: 0;
        right: 10px;
        font-size: 20px;
      }

    }
    .el-form {
      width: 100%;
      /*height: 460px;*/
      padding: 10px 10px 0px 20px;
      background: #fff;
      background: rgba(255, 255, 255, 255);
      overflow: hidden;
      .delBtn {
        margin-left: 82%;
      }
      .delBtn:hover {
        color: #2b85e4;
        cursor: pointer;
      }
      .avatar-upLoad {
        .el-upload-list--picture-card {
          width: 10px !important;
          height: 10px !important;
        }
      }
      .el-icon-plus {
        font-size: 50px;
      }

    }
    .ansConent {
      width: 100%;
      /*height: 460px;*/
      padding: 10px 10px 0px 20px;
      background: #fff;
      background: rgba(255, 255, 255, 255);
      overflow: hidden;
      .delBtn {
        margin-left: 82%;
      }
      .delBtn:hover {
        color: #2b85e4;
        cursor: pointer;
      }
      .avatar-upLoad {
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

  .imgInfo {
    margin-left: 12%;
  }

  .avatar {
    width: 143px;
    height: 143px;
    display: block;
    position: absolute;
    top: 43px;
    left: 2px;
    border-radius: 5px;
  }
</style>
