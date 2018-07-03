<template>
  <div class="share_wrap">
    <div class="share_con">
      <el-form ref="form" :model="form" label-width="100px">
        <!-- <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item> -->
        <el-form-item label="分享活动">
          <el-radio-group v-model="form.resource1" @change="change">
            <el-radio label="1">开启</el-radio>
            <el-radio label="2">关闭</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="微信分享图标">
          <el-radio-group v-model="form.resource2">
            <el-radio label="1">默认</el-radio>
            <el-radio label="2">自定义</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-show="shareIcon">
          <!--<el-upload-->
            <!--action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"-->
            <!--list-type="picture-card"-->
            <!--:on-preview="handlePictureCardPreview"-->
            <!--:on-success="handleAvatarSuccess"-->
            <!--:on-remove="handleRemove">-->
            <!--<i class="el-icon-plus"></i>-->
            <!--<span>上传图标</span>-->
          <!--</el-upload>-->
          <el-upload
            class="avatar-uploader"
            action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
            list-type="picture-card"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="dialogImageUrl" :src="dialogImageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon">上传图标</i>
          </el-upload>

          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="微信分享标题">
          <el-radio-group v-model="form.resource3">
            <el-radio label="1">默认</el-radio>
            <el-radio label="2">自定义</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-show="shareTitl">
          <el-input height="6rem" type="textarea" v-model="form.desc1" maxlength="50"></el-input>
        </el-form-item>

        <el-form-item label="微信分享内容">
          <el-radio-group v-model="form.resource4">
            <el-radio label="1">默认</el-radio>
            <el-radio label="2">自定义</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-show="shareContent">
          <el-input height="6rem" type="textarea" v-model="form.desc2" maxlength="500"></el-input>
        </el-form-item>
        <p>分享信息请遵守微信管理规定，禁止出现诱导分享等违规信息，后果由活动发布企业自担，部分敏感词系统会自动屏蔽。</p>

        <!--<el-form-item>-->
        <!--<el-button type="primary" @click="savedShare()">保存</el-button>-->
        <!--<el-button type='primary' @click="back()" >返回</el-button>-->
        <!--</el-form-item>-->
      </el-form>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';

  export default ({
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        shareTitl: false,
        shareIcon: false,
        shareContent: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource1: '',
          resource2: '',
          resource3: '',
          resource4: '',
          desc1: '',
          desc2: ''
        },
        share_data: '',//接口数据保存
        share_send: '',
        dataStatus: 0,
      }
    },
    created() {

      // this.savedShare()
    },
    computed: {
      ...mapState(['setting_data']),
      ...mapActions(['saveData']),
    },
    mounted() {
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/jgg/activitySetup/init",//数据初始化接口
        params: {},
      }).then(res => {
        console.log(res.data.data);
        let setting_data = JSON.stringify(res.data.data)
        sessionStorage.setItem("Data", setting_data)
        this.dataStatus = this.$route.query.dataStatus
        if (this.dataStatus === undefined) {
          this.partShare()
        } else if (this.dataStatus === '1') {
          this.partShare1()
        }
      })

    },
    updated() {

      if (this.dataStatus === undefined) {
        this.savedShare()
      } else if (this.dataStatus === '1') {
        this.savedShare1()
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        // this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleAvatarSuccess(res, file) {
        this.dialogImageUrl = file.response.data
      },

      //分享设置部分
      partShare() {
        // this.$store.dispatch('saveData')
        let Data = sessionStorage.getItem('Data')
        this.share_data = JSON.parse(Data).jggShareSetup
        this.form.resource1 = Number(this.share_data.share).toString()
        this.dialogImageUrl = this.share_data.wxShareSelfLogo
        this.form.resource2 = this.share_data.wxShareLogoType.toString()
        if (this.form.resource2 == 1) {
          this.shareIcon = false
        } else {
          this.shareIcon = true
        }
        this.form.resource3 = this.share_data.wxShareTitleType.toString()
        if (this.form.resource3 == 1) {
          this.shareTitl = false
        } else {
          this.shareTitl = true
        }
        this.form.resource4 = this.share_data.wxShareContentType.toString()
        if (this.form.resource4 == 1) {
          this.shareContent = false
        } else {
          this.shareContent = true
        }
        this.form.desc1=this.share_data.wxShareSelfTitle
        this.form.desc2=this.share_data.wxShareSelfContent


      },
      partShare1() {

        this.share_data = this.$route.query.newjggData.jggShareSetup
        this.form.resource1 = Number(this.share_data.share).toString()
        this.dialogImageUrl = this.share_data.wxShareSelfLogo
        this.form.resource2 = this.share_data.wxShareLogoType.toString()
        if (this.form.resource2 == 1) {
          this.shareIcon = false
        } else {
          this.shareIcon = true
        }
        this.form.resource3 = this.share_data.wxShareTitleType.toString()
        if (this.form.resource3 == 1) {
          this.shareTitl = false
        } else {
          this.shareTitl = true
        }
        this.form.resource4 = this.share_data.wxShareContentType.toString()
        if (this.form.resource4 == 1) {
          this.shareContent = false
        } else {
          this.shareContent = true
        }
        this.form.desc1=this.share_data.wxShareSelfTitle
        this.form.desc2=this.share_data.wxShareSelfContent
      },
      //分享保存部分
      savedShare() {
        // this.$store.dispatch('saveData')
        let Data = sessionStorage.getItem('Data')
        this.share_send = JSON.parse(Data).jggShareSetup
        this.share_send.share = this.form.resource1 == 1 ? true : false
        this.share_send.wxShareSelfLogo = this.dialogImageUrl

        this.share_send.wxShareLogoType = this.form.resource2
        if (this.form.resource2 == 1) {
          this.shareIcon = false
        } else {
          this.shareIcon = true
        }
        this.share_send.wxShareTitleType = this.form.resource3
        if (this.form.resource3 == 1) {
          this.shareTitl = false
        } else {
          this.shareTitl = true
        }
        this.share_send.wxShareContentType = this.form.resource4
        if (this.form.resource4 == 1) {
          this.shareContent = false
        } else {
          this.shareContent = true
        }
        this.share_send.wxShareSelfTitle=this.form.desc1
        this.share_data.wxShareSelfContent=this.form.desc2

        this.$store.state.setting_data.jggShareSetup = this.share_send
        this.$bus.emit("send_share", this.share_send)
      },
      savedShare1() {
        // this.$store.dispatch('saveData')

        this.share_send = this.$route.query.newjggData.jggShareSetup
        this.share_send.share = this.form.resource1 == 1 ? true : false
        this.share_send.wxShareSelfLogo = this.dialogImageUrl
        this.share_send.wxShareLogoType = this.form.resource2
        if (this.form.resource2 == 1) {
          this.shareIcon = false
        } else {
          this.shareIcon = true
        }
        this.share_send.wxShareTitleType = this.form.resource3
        if (this.form.resource3 == 1) {
          this.shareTitl = false
        } else {
          this.shareTitl = true
        }
        this.share_send.wxShareContentType = this.form.resource4
        if (this.form.resource4 == 1) {
          this.shareContent = false
        } else {
          this.shareContent = true
        }
        this.$store.state.setting_data.jggShareSetup = this.share_send
        this.$bus.emit("send_share", this.share_send)
      },
      change() {
        this.sendShare()
      },
      beforeAvatarUpload(){

      },

      // back(){
      //     this.$router.go(-1)
      // }
    }

  })
</script>

<style lang="scss" scoped>
  .share_wrap {
    width: 100%;
    font-size: .6rem;
    margin: .5rem 0;
    position: relative;
    z-index: 9;
    .share_con {
      width: 95%;
      margin: 0 auto;

    }
  }

  .el-form-item__label {
    text-align: left;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 14px;
    color: #c5c5c5;
    width: 145px;
    height: 145px;
    line-height: 145px;
    text-align: center;
    background: #f2f2f2;
  }

  .avatar {
    width: 145px;
    height: 145px;
    display: block;
  }
</style>
