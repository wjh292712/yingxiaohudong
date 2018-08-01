<template>
  <div class="share_wrap">
    <div class="share_con">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="分享活动">
          <el-radio-group v-model="form.resource1" @change="change">
            <el-radio label="1">开启</el-radio>
            <el-radio label="2">关闭</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="微信分享图标">
          <el-radio-group v-model="form.resource2">
            <el-radio label="1">默认</el-radio>

            <el-tooltip class="item" effect="light" content="权限不足请升级" placement="top-start">
              <el-radio label="2" :disabled="shareLogoType">自定义</el-radio>
            </el-tooltip>

          </el-radio-group>
        </el-form-item>
        <el-form-item v-show="shareIcon">

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
          <span>点击图片重新上传即可更换奖品图片</span>
        </el-form-item>
        <el-form-item label="微信分享标题">
          <el-radio-group v-model="form.resource3">
            <el-radio label="1">默认</el-radio>
            <el-tooltip class="item" effect="light" content="权限不足请升级" placement="top-start">
              <el-radio label="2" :disabled="wxShareTitleType">自定义</el-radio>
            </el-tooltip>

          </el-radio-group>
        </el-form-item>
        <el-form-item v-show="shareTitl">
          <el-input height="6rem" type="textarea" v-model="form.desc1" maxlength="50"></el-input>
        </el-form-item>

        <el-form-item label="微信分享内容">
          <el-radio-group v-model="form.resource4">
            <el-radio label="1">默认</el-radio>
            <el-tooltip class="item" effect="light" content="权限不足请升级" placement="top-start">
              <el-radio label="2" :disabled="shareContentType">自定义</el-radio>
            </el-tooltip>

          </el-radio-group>
        </el-form-item>
        <el-form-item v-show="shareContent">
          <el-input height="6rem" type="textarea" v-model="form.desc2" maxlength="500"></el-input>
        </el-form-item>
        <p>分享信息请遵守微信管理规定，禁止出现诱导分享等违规信息，后果由活动发布企业自担，部分敏感词系统会自动屏蔽。</p>

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
        shareContentType:false,
        shareLogoType:false,
        wxShareTitleType:false,

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
      var token = sessionStorage.getItem('token')
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/jgg/activitySetup/init?token="+token,//数据初始化接口
        params: {},
      }).then(res => {
        console.log(res.data.data);
        let setting_data = JSON.stringify(res.data.data)
        sessionStorage.setItem("Data", setting_data)
        this.dataStatus = this.$route.query.dataStatus
          this.partShare()
      })

    },
    updated() {

        this.savedShare()
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
        if (this.dataStatus === undefined) {
          let Data = sessionStorage.getItem('Data')
          this.share_data = JSON.parse(Data).jggShareSetup
        } else if (this.dataStatus === '1') {
          this.share_data = this.$route.query.newjggData.jggShareSetup
        }

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
        if(this.share_data.allowClickWxShareLogo==true){
          this.shareLogoType=false
        }else if (this.share_data.allowClickWxShareLogo==false
        ){
          this.shareLogoType=true
        }
        if(this.share_data.allowClickWxShareTitle==true){
          this.wxShareTitleType=false
        }else if (this.share_data.allowClickWxShareTitle==false
        ){
          this.wxShareTitleType=true
        }
        if(this.share_data.allowClickWxShareContent==true){
          this.shareContentType=false
        }else if (this.share_data.allowClickWxShareContent==false
        ){
          this.shareContentType=true
        }

      },

      //分享保存部分
      savedShare() {
        // this.$store.dispatch('saveData')
        if (this.dataStatus === undefined) {
          let Data = sessionStorage.getItem('Data')
          this.share_send = JSON.parse(Data).jggShareSetup
        } else if (this.dataStatus === '1') {
          this.share_send = this.$route.query.newjggData.jggShareSetup
        }

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
        this.share_send.wxShareSelfContent=this.form.desc2
        if(this.share_send.allowClickWxShareLogo==true){
          this.shareLogoType=false
        }else if (this.share_send.allowClickWxShareLogo==false
        ){
          this.shareLogoType=true
        }
        if(this.share_send.allowClickWxShareTitle==true){
          this.wxShareTitleType=false
        }else if (this.share_send.allowClickWxShareTitle==false
        ){
          this.wxShareTitleType=true
        }
        if(this.share_send.allowClickWxShareContent==true){
          this.shareContentType=false
        }else if (this.share_send.allowClickWxShareContent==false
        ){
          this.shareContentType=true
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
