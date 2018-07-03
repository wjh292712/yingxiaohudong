
  <template>
    <div class="setup_wrap">
      <div class="setup_con">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="企业信息" name="first">
            <div class="message">
              <p>
                <span class="host">主办单位</span>
                <span>
                      <el-input v-model="input" maxlength="20 " placeholder="不超过20个汉字" name="first" style="width:40%;size:30%;" ></el-input>
                    </span>
              </p>
              <p>
                <span class="host">链接地址:</span>
                <span>
                      <el-input placeholder="请输入内容" v-model="input3" style="width:60%;height:10px">
                        <template slot="prepend">Http://</template>
                      </el-input>
                    </span>
              </p>
              <p class="logo">
                <span class="host">主办单位LOGO:</span>
                <span>
                      <el-radio-group v-model="radio2">
                        <el-radio label="1">隐藏</el-radio>
                        <el-radio label="2">显示</el-radio>
                      </el-radio-group>
                    </span>
                <span class="logo_up" v-show="logoShow">
                <el-upload class="avatar-uploader" action="http://center.marketing.yunpaas.cn/dt/activitySetup/upActivityImg" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                   <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"> 上传logo</i>
              </el-upload>
              </span>
              </p>

              <p class="imageLoad">
                <span class="host">加载页面图片:</span>
                <span>
                      <el-radio-group v-model="radio3">
                        <el-radio label="0">默认</el-radio>
                        <el-radio label="1">自定义</el-radio>
                        <!-- <el-radio>上传LOGO</el-radio> -->
                      </el-radio-group>
                    </span>
                <span class="image_up" v-show="imgLoa">
                    <el-upload class="avatar-uploader" action="http://center.marketing.yunpaas.cn/dt/activitySetup/upActivityImg" :show-file-list="false" :on-success="handleAvatarSuccess1" :before-upload="beforeAvatarUpload">
                      <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon">上传图片</i>
                    </el-upload>
                  </span>
              </p>

              <!-- <p>
                <span class="keep">
                  <el-button plain class="save">保存</el-button>
                </span>
                <span>  <el-button plain>返回</el-button>
                </span>

              </p> -->
            </div>
          </el-tab-pane>

          <el-tab-pane label="分享设置" name="second">
            <div class="safety">
              <p>
                <span class="open">分享活动:</span>
                 <el-radio-group v-model="radio4">
                <el-radio  label="1">开启</el-radio>
                <el-radio  label="0">关闭</el-radio>
                 </el-radio-group>
              </p>
              <p>
                <span class="open">微信分享图标:</span>
                <span>
                        <el-radio v-model="radio5" label="1">默认</el-radio>
                        <el-radio v-model="radio5" label="2">自定义</el-radio>
                  <span v-show="wxicon" class="wxic">
  <el-upload
    class="avatar-uploader"
    action="http://center.marketing.yunpaas.cn/dt/activitySetup/upActivityImg"
    :show-file-list="false"
    :on-success="handleAvatarSuccess2"
    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon">上传图标</i>
                  </el-upload>
                    </span>
                      </span>
              </p>
              <p>
                <span class="open">微信分享标题:</span>
                <span>
                        <el-radio v-model="radio6" label="1">默认</el-radio>
                        <el-radio v-model="radio6" label="2">自定义</el-radio>
                      </span>
                <span v-show="wxTil">
                <el-input
                  type="textarea"
                  :rows="2"
                  maxlength="25"
                  placeholder="0/25字"
                  v-model="textarea">
                </el-input>
                  </span>
              </p>

              <p>
                <span class="open">微信分享内容:</span>
                <span>
                        <el-radio v-model="radio7" label="1">默认</el-radio>
                        <el-radio v-model="radio7" label="2">
                          <span @click="wxcontent()">自定义</span></el-radio>
                      </span>
                <span v-show="wxsharcontent">
                <el-input
                  type="textarea"
                  :rows="2"
                  maxlength="50"
                  placeholder="0/50字"
                  v-model="textarea">
                </el-input>
                  </span>
              </p>
              <p>分享信息请遵守微信管理规定，禁止出现诱导分享等违规信息，后果由活动发布企业自担，部分敏感词系统会自动屏蔽。</p>

            </div>
          </el-tab-pane>

          <el-tab-pane label="其他设置" name="third">
            <div class="rests">
              <p>
                <span>广告:</span>
                <span>
                        <el-radio v-model="radio8" label="1">显示</el-radio>
                        <el-radio v-model="radio8" label="2">隐藏</el-radio>
                      </span>
              </p>
              <p>
                <span>轮播中奖信息：</span>
                <span>
                        <el-radio v-model="radio9" label="1">开启</el-radio>
                        <el-radio v-model="radio9" label="2">关闭</el-radio>
                      </span>
              </p>
              <p>
                <span>是否需要填写表单兑奖:</span>
                <span>
                        <el-radio v-model="radio10" label="1">否</el-radio>
                        <el-radio v-model="radio10" label="2">是</el-radio>
                      </span>
              </p>
              <p>
                <span>参与地区限制:</span>
                <span>
                        <el-radio v-model="radio11" label="1">
                          <span @click="centerDialogVisible = true">全部</span>
                        </el-radio>
                        <el-radio v-model="radio11" label="2">
                          <span @click="centerDialogVisible = true">部分</span>
                        </el-radio>
                        <el-dialog title="表单字段" :visible.sync="centerDialogVisible" width="30%" center>

                        </el-dialog>

                      </span>
              </p>

            </div>
            <div>
              <!-- <el-button type="button" >点击打开 Dialog</el-button> -->

            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    data() {
      return {
        input:'',
        input3:'',
        activeName: 'first',
        radio: '1',
        radio2: '',//主办单位logo
        radio3: '',//加载页面图片
        radio4: '',
        radio5: '',//分享图标
        radio6: '',//分享标题
        radio7: '',//分享内容
        radio8: '',
        radio9: '',
        radio10: '',
        radio11: '',
        imageUrl: '',
        imageUrl1:'',
        imageUrl2:'',
        centerDialogVisible: false,
        imgLoa:false,
        company:'',//企业设置
        share:'',//分享设置
        other:'',//其他设置
        company_send:'',//企业设置保存
        share_send:'',//分享设置保存
        other_send:'',//其他设置保存
        textarea: '',
        wxicon:false,
        wxTil:false,
        wxsharcontent:false,
        logoShow:false,
        dataStatus:0,
      };
    },
    created(){

    },
    mounted(){

      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/dt/activitySetup/init",//数据初始化接口
        params: {},
      }).then(res => {
        console.log(res.data.data);
        let setting_dtData=JSON.stringify(res.data.data)
        sessionStorage.setItem("Datadt",setting_dtData)
        this.dataStatus=this.$route.query.dataStatus
        if(this.dataStatus===undefined){
          this.partHight()
        }else if (this.dataStatus==='1') {
          this.partHight1()
        }
      })
    },
    computed:{
      ...mapState(['setting_dtData']),
      ...mapActions(['saveDatadt'])
    },
    updated(){

      if(this.dataStatus===undefined){
        this.saveHight()
      }else if (this.dataStatus==='1') {
        this.saveHight1()
      }
    },
    methods: {


      partHight(){
        // this.$store.dispatch('saveData')
        let Data = sessionStorage.getItem('Datadt')

        // 企业设置
        this.company = JSON.parse(Data).dtHighCompanySetup
        this.input=this.company.company //主办单位
        this.input3=this.company.url   //链接地址
        this.radio2 = this.company.companyLogoType.toString()//主办单位logo
        if(this.radio2==1){
          this.logoShow=false
        }else {
          this.logoShow=true
        }
        this.radio3=this.company.loadImgType.toString()
        if(this.radio3==0){
          this.imgLoa=false
        }else {
          this.imgLoa=true
        }

        // 分享设置
        this.share = JSON.parse(Data).dtShareSetup
        this.imageUrl = this.share.wxShareSelfLogo
        this.radio4=Number(this.share.share).toString()
        this.radio5 = this.share.wxShareLogoType.toString()
        if(this.radio5==1){
          this.wxicon=false
        }else {
          this.wxicon=true
        }
        this.radio6 = this.share.wxShareTitleType.toString()
        if(this.radio6==1){
          this.wxTil=false
        }else {
          this.wxTil=true
        }
        this.radio7 = this.share.wxShareContentType.toString()
        if(this.radio7==1){
          this.wxsharcontent=false
        }else {
          this.wxsharcontent=true
        }

        // 其它设置
        this.other = JSON.parse(Data).dtHighOtherSetup
        if(this.other.ad){
          this.radio8 = "1"
        }
        if(this.other.carousel){
          this.radio9 = "1"
        }
        if(!this.other.form){
          this.radio10 = "1"
        }
        if(!this.other.area){
          this.radio11 = "1"
        }
      },
      partHight1(){
        // this.$store.dispatch('saveData')

        // 企业设置
        this.company = this.$route.query.newdtData.dtHighCompanySetup
        this.input=this.company.company //主办单位
        this.input3=this.company.url   //链接地址
        this.radio2 = this.company.companyLogoType.toString()//主办单位logo
        if(this.radio2==1){
          this.logoShow=false
        }else {
          this.logoShow=true
        }
        this.radio3=this.company.loadImgType.toString()
        if(this.radio3==0){
          this.imgLoa=false
        }else {
          this.imgLoa=true
        }
        // 分享设置
        this.share = this.$route.query.newdtData.dtShareSetup
        this.imageUrl = this.share.wxShareSelfLogo
        this.radio4=Number(this.share.share).toString()
        this.radio5 = this.share.wxShareLogoType.toString()
        if(this.radio5==1){
          this.wxicon=false
        }else {
          this.wxicon=true
        }
        this.radio6 = this.share.wxShareTitleType.toString()
        if(this.radio6==1){
          this.wxTil=false
        }else {
          this.wxTil=true
        }
        this.radio7 = this.share.wxShareContentType.toString()
        if(this.radio7==1){
          this.wxsharcontent=false
        }else {
          this.wxsharcontent=true
        }

        // 其它设置
        this.other = this.$route.query.newdtData.dtHighOtherSetup
        if(this.other.ad){
          this.radio8 = "1"
        }
        if(this.other.carousel){
          this.radio9 = "1"
        }
        if(!this.other.form){
          this.radio10 = "1"
        }
        if(!this.other.area){
          this.radio11 = "1"
        }
      },

      //保存设置
      saveHight(){
        // this.$store.dispatch('saveData')
        let Data = sessionStorage.getItem('Datadt')

        //企业保存设置
        this.company_send = JSON.parse(Data).dtHighCompanySetup
        this.company_send.company = this.input
        this.company_send.url = this.input3
        this.company_send.companyLogoType = Number(this.radio2)
        if(this.radio2==1){
          this.logoShow=false
        }else {
          this.logoShow=true
        }
        this.company_send.loadImgType = this.radio3

        if(this.radio3==0){
          this.imgLoa=false
        }else {
          this.imgLoa=true
        }
        this.$store.state.setting_dtData.dtHighCompanySetup = this.company_send

        // 分享保存设置
        this.share_send = JSON.parse(Data).dtShareSetup
        this.share_send.share =  this.radio4 == 1 ? true : false
        this.share_send.wxShareLogoType = this.radio5
        if(this.radio5==1){
          this.wxicon=false
        }else {
          this.wxicon=true
        }
        this.share_send.wxShareTitleType = this.radio6
        if(this.radio6==1){
          this.wxTil=false
        }else {
          this.wxTil=true
        }
        this.share_send.wxShareContentType = this.radio7
        if(this.radio7==1){
          this.wxsharcontent=false
        }else {
          this.wxsharcontent=true
        }
        this.$store.state.setting_dtData.dtShareSetup = this.share_send

        // 其它保存设置
        this.other_send = JSON.parse(Data).dtHighOtherSetup
        this.other_send.ad = this.radio8 == 1 ? true : false
        this.other_send.carousel = this.radio9 == 1 ? true : false
        this.other_send.form = this.radio10 == 1 ? false : true
        this.other_send.area = this.radio11 == 1 ? false : true
        this.$store.state.setting_dtData.dtHighOtherSetup =this.other_send
        this.$bus.emit("send_high",[this.company_send,this.share_send,this.other_send])
      },
      saveHight1(){
        // this.$store.dispatch('saveData')


        //企业保存设置
        this.company_send = this.$route.query.newdtData.dtHighCompanySetup
        this.company_send.company = this.input
        this.company_send.url = this.input3
        this.company_send.companyLogoType = Number(this.radio2)
        if(this.radio2==1){
          this.logoShow=false
        }else {
          this.logoShow=true
        }
        this.company_send.loadImgType = this.radio3

        if(this.radio3==0){
          this.imgLoa=false
        }else {
          this.imgLoa=true
        }
        this.$store.state.setting_dtData.dtHighCompanySetup = this.company_send

        // 分享保存设置
        this.share_send =this.$route.query.newdtData.dtShareSetup
        this.share_send.share =  this.radio4 == 1 ? true : false
        this.share_send.wxShareLogoType = this.radio5
        if(this.radio5==1){
          this.wxicon=false
        }else {
          this.wxicon=true
        }
        this.share_send.wxShareTitleType = this.radio6
        if(this.radio6==1){
          this.wxTil=false
        }else {
          this.wxTil=true
        }
        this.share_send.wxShareContentType = this.radio7
        if(this.radio7==1){
          this.wxsharcontent=false
        }else {
          this.wxsharcontent=true
        }
        this.$store.state.setting_dtData.dtShareSetup = this.share_send

        // 其它保存设置
        this.other_send = this.$route.query.newdtData.dtHighOtherSetup
        this.other_send.ad = this.radio8 == 1 ? true : false
        this.other_send.carousel = this.radio9 == 1 ? true : false
        this.other_send.form = this.radio10 == 1 ? false : true
        this.other_send.area = this.radio11 == 1 ? false : true
        this.$store.state.setting_dtData.dtHighOtherSetup =this.other_send
        this.$bus.emit("send_high",[this.company_send,this.share_send,this.other_send])
      },

      handleClick(tab, event) {
        // console.log(tab, event);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = file.response.data
      },
      handleAvatarSuccess1(res, file) {
        this.imageUrl1 = file.response.data
      },
      handleAvatarSuccess2(res, file) {
        this.imageUrl2 = file.response.data
      },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        // const isLt2M = file.size / 1024 / 1024 < 2;
        //
        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!');
        // }
        // return isJPG && isLt2M;
      },

      wxiconShow(){
       this.wxicon=!this.wxicon
      },
      wxTitle(){
        this.wxTil=!this.wxTil
      },
      wxcontent(){
        this.wxsharcontent=!this.wxsharcontent
      }
    }
  };
</script>

<style lang="scss" scoped>
  .setup_wrap {
    width: 100%;
    position: relative;
    z-index: 9;
    .setup_con {
      .el-menu-demo {}
    }
    .message p {
      margin-top: 1rem;
      font-size: 0.5rem;
    }
    .message p .host {
      margin-right: 1rem;
    }
  }
  .message p .keep .save {
    margin-top: 4rem;
  }

  .message p .avatar-uploader-icon[data-v-67a687b9] {
    font-size: .4rem;
    color: #8c939d;
    width: 5rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    border: 1px solid #d9d9d9;
  }

  .message p .avatar-uploader {
    margin-left: 2rem;
  }

  .message p .save {
    color: #fff;
    background: #409EFF;
  }

  /* .message p .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
   border-radius: 6px;
   cursor: pointer;
   position: relative;
   overflow: hidden;
 } */
  /*.message p .avatar-uploader .el-upload:hover {*/
    /*border-color: #409EFF;*/
  /*}*/

  /*.message p .avatar-uploader-icon {*/
    /*font-size: 14px;*/
    /*color: #8c939d;*/
    /*width: 178px;*/
    /*height: 178px;*/
    /*line-height: 178px;*/
    /*text-align: center;*/
    /*background: #f2f2f2;*/
    /*position: relative;*/
  /*}*/
  /*.avatar-uploader-more{*/
    /*display: inline-block;*/
    /*font-size: 15px;*/
    /*width: 100px;*/
    /*height: 30px;*/
    /*line-height: 30px;*/
    /*background: #fbfbfb;*/
    /*text-align: center;*/
    /*border: 1px solid #9b9b9b;*/
    /*color: #4a4a4a;*/
    /*border-radius:3px;*/
  /*}*/
  /*.avatar-uploader-more:hover{*/
    /*border: 1px solid #fc7132;*/
    /*color: #fcb190;*/
  /*}*/



  /*.pic_in{*/
    /*position: absolute;*/
    /*left: 14%;*/
    /*bottom: 6%;*/
    /*font-size: 20px;*/
  /*}*/

  /*.avatar {*/
    /*width: 178px;*/
    /*height: 178px;*/
    /*display: block;*/
  /*}*/

  .safety p {
    margin-top: 1rem;
    font-size: 0.5rem;
  }


  .safety p .hold {
    color: #fff;
    background: #409EFF;
  }

  .safety p .open {
    font-size: 0.4rem;
  }

  .wxic{
    margin-left: 20px;
  }
  .safety p .preserve .hold {
    margin-top: 5rem;
  }

  .rests p {

    margin-top: 1rem;
    font-size: 0.5rem;
  }

  .rests p .saves {
    color: #fff;
    background: #409EFF;
  }

  .rests p .conserve .saves {
    margin-top: 4rem;
  }
  .logo{
    .logo_up{
      display: block;
      color: blue;
      font-size: 14px;
      margin-left:120px;
      margin-top: 10px;
    }
  }
  .imageLoad{
    .image_up{
      display: block;
      color: blue;
      font-size: 14px;
      margin-left:120px;
      margin-top: 10px;
    }
  }
  .wxic{
    display: block;
    color: blue;
    font-size: 14px;
    margin-left:120px;
    margin-top: 10px;
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
    width: 85px;
    height: 85px;
    line-height: 85px;
    text-align: center;
    background: #f2f2f2;
    border: 1px dashed #2b85e4;
    /*margin-left: 150px;*/
    margin-top: 10px;
  }

  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
</style>
