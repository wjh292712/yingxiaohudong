
<template>
        <div class="setup_wrap">
          <div class="setup_con">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="企业信息" name="first">
                <div class="message">
                  <p>
                    <span class="host">主办单位 :</span>
                    <span>
                      <el-input v-model="input" maxlength="20 " placeholder="不超过20个汉字" name="first" style="width:40%;size:30%;" ></el-input>
                    </span>
                  </p>
                  <p>
                    <span class="host">链接地址 :</span>
                    <span>
                      <el-input placeholder="请输入内容" v-model="input3" style="width:60%;height:10px">
                        <template slot="prepend">Http://</template>
                      </el-input>
                    </span>
                  </p>
                  <p class="logo">
                    <span class="host">主办单位LOGO :</span>
                    <span>
                      <el-radio-group v-model="radio2">
                        <el-radio label="1">隐藏</el-radio>
                        <el-tooltip class="item" effect="light" content="权限不足请升级" placement="top-start">
                    <el-radio label="2" :disabled="logoCamp">显示</el-radio>
            </el-tooltip>
                      </el-radio-group>
                    </span>
                    <span class="logo_up" v-show="logoShow">
                <el-upload class="avatar-uploader" action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                   <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"> 上传logo</i>
              </el-upload>
                       <span>点击图片重新上传即可更换奖品图片</span>
              </span>
                  </p>

                  <p class="imageLoad">
                    <span class="host">加载页面图片 :</span>
                    <span>
                      <el-radio-group v-model="radio3">
                        <el-radio label="0">默认</el-radio>
                        <el-tooltip class="item" effect="light" content="权限不足请升级" placement="top-start">
                     <el-radio label="1" :disabled="loadImg">自定义</el-radio>
            </el-tooltip>
                        <!-- <el-radio>上传LOGO</el-radio> -->
                      </el-radio-group>
                    </span>
                    <span class="image_up" v-show="imgLoa">
                    <el-upload class="avatar-uploader" action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg" :show-file-list="false" :on-success="handleAvatarSuccess1" :before-upload="beforeAvatarUpload">
                      <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon">上传图片</i>
                    </el-upload>
                       <span>点击图片重新上传即可更换奖品图片</span>
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
              <el-tab-pane label="安全设置" name="second">
                <div class="safety">
                  <p>
                    <span class="open">开启黑名单 :</span>
                    <span>
                      <el-radio v-model="radio4" label="1">开启</el-radio>
                      <el-radio v-model="radio4" label="2">关闭(黑名单用户将不被派奖)</el-radio>
                    </span>
                  </p>
                  <p>
                    <span class="open">红包安全机制 :</span>
                    <span>
                      <el-radio v-model="radio5" label="1">初级</el-radio>
                      <el-radio v-model="radio5" label="2">中级</el-radio>
                      <el-radio v-model="radio5" label="3">高级(不支持修改安)</el-radio>
                    </span>
                  </p>
                  <p>
                    <span class="open">验证方式 :</span>
                    <span>
                      <el-radio v-model="radio6" label="1">短信验证码</el-radio>
                      <el-radio v-model="radio6" label="2">语音验证码(账户短信余量)</el-radio>
                    </span>
                  </p>
                  <!-- <p>
                    <span class="preserve">
                      <el-button plain class="hold">保存</el-button>
                    </span>
                    <span>  <el-button plain>返回</el-button>
                    </span>
                  </p> -->
                </div>
              </el-tab-pane>
              <el-tab-pane label="其他设置" name="third">
                <div class="rests">
                  <p>
                    <span>广告:</span>
                    <span>
                      <el-radio v-model="radio7" label="1">显示</el-radio>
                      <el-radio v-model="radio7" label="2">隐藏</el-radio>
                    </span>
                  </p>
                  <p>
                    <span>轮播中奖信息 :</span>
                    <span>
                      <el-radio v-model="radio8" label="1">开启</el-radio>
                      <el-tooltip class="item" effect="light" content="权限不足请升级" placement="top-start">
               <el-radio v-model="radio8" label="2" :disabled="awardCarousel">关闭</el-radio>
            </el-tooltip>
                    </span>
                  </p>
                  <p>
                    <span>是否需要填写表单兑奖 :</span>
                    <span>
                      <el-radio v-model="radio9" label="1">否</el-radio>
                      <el-radio v-model="radio9" label="2">是</el-radio>
                    </span>
                  </p>
                  <p>
                    <span>参与地区限制 :</span>
                    <span>
                      <el-radio v-model="radio10" label="1">
                        <span @click="centerDialogVisible = true">全部</span>
                      </el-radio>
                      <el-tooltip class="item" effect="light" content="权限不足请升级" placement="top-start">
               <el-radio v-model="radio10" label="2" :disabled="advanceArea">
                          <span @click="centerDialogVisible = true">部分</span>
                        </el-radio>
            </el-tooltip>
                      <el-dialog title="表单字段" :visible.sync="centerDialogVisible" width="30%" center>

                        <!-- <h4>666</h4> -->
                        <!-- <span>需要注意的是内容是默认不居中的</span>
                                                          <span slot="footer" class="dialog-footer">
                                                            <el-button @click="centerDialogVisible = false">取 消</el-button>
                                                            <el-button plain class="saves" @click="centerDialogVisible = false">确 定</el-button>
                                                          </span> -->
                      </el-dialog>

                    </span>
                  </p>
                  <!--<p>-->
                    <!--<span class="conserve">-->
                      <!--<el-button plain class="saves" @click="saveHight()">保存</el-button>-->
                    <!--</span>-->
                  <!--</p>-->
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
            radio2: '',
            radio3: '',
            radio4: '',
            radio5: '',
            radio6: '',
            radio7: '',
            radio8: '',
            radio9: '',
            radio10: '',
            imageUrl:'',//上传logo
            imageUrl1: '',//上传图片
            centerDialogVisible: false,
            logoShow:false,
            imgLoa:false,
            company:'',//企业设置
            safety:'',//安全设置
            other:'',//其他设置
            company_send:'',//企业设置保存
            safety_send:'',//安全设置保存
            other_send:'',//其他设置保存
            dataStatus:0,
            logoCamp:false,
            loadImg:false,
            awardCarousel:false,
            advanceArea:false,
          };
        },
        created(){

        },
        mounted(){
          var token = sessionStorage.getItem('token')
          this.$axios({
            method: "post",
            url: "http://center.marketing.yunpaas.cn/jgg/activitySetup/init?token="+token,//数据初始化接口
            params: {},
          }).then(res => {
            console.log(res.data.data);
            let setting_data=JSON.stringify(res.data.data)
            sessionStorage.setItem("Data",setting_data)
            this.dataStatus=this.$route.query.dataStatus
              this.partHight()
          })
        },
        computed:{
          ...mapState(['setting_data']),
            ...mapActions(['saveData']),

        },
        updated(){
            this.saveHight()
        },
        methods: {
          partHight(){
            if(this.dataStatus===undefined){
              let Data = sessionStorage.getItem('Data')
              this.company = JSON.parse(Data).jggHighCompanySetup
              this.safety = JSON.parse(Data).jggHighSecuritySetup
              this.other = JSON.parse(Data).jggHighOtherSetup
            }else if (this.dataStatus==='1') {
              this.company = this.$route.query.newjggData.jggHighCompanySetup

              this.safety = this.$route.query.newjggData.jggHighSecuritySetup
              this.other = this.$route.query.newjggData.jggHighOtherSetup
            }
            // 企业设置
            this.input=this.company.company
            this.input3=this.company.url
            this.radio2 = Number(this.company.companyLogoType).toString()
            if(this.radio2==1){
              this.logoShow=false
            }else {
              this.logoShow=true
            }
            // console.log(this.company.companyLogoType)
            this.radio3=Number(this.company.loadImgType).toString()
            if(this.radio3==0){
              this.imgLoa=false
            }else {
              this.imgLoa=true
            }
            if(this.company.allowClickCompanyLogo==true){
              this.logoCamp=false
            } else if(this.company.allowClickCompanyLogo==false){
              this.logoCamp=true
            }
            if(this.company.allowClickLoadImg==true){
              this.loadImg=false
            } else if(this.company.allowClickLoadImg==false){
              this.loadImg=true
            }
            this.imageUrl=this.company.companyLogo
            this.imageUrl1=this.company.loadSelfImg

          // 安全设置
            this.radio5 = this.safety.redSecurityLevel.toString()
            this.radio6 = this.safety.smsCheckType.toString()
            if(!this.safety.blackUser){
              this.radio4 = "2"
            }

          // 其它设置
            if(this.other.ad){
              this.radio7 = "1"
            }
            if(this.other.carousel==false){
              this.radio8 = "1"
            }else if(this.other.carousel.carousel==true){
              this.radio8 = "2"
            }
            if(!this.other.form){
              this.radio9 = "1"
            }
            if(!this.other.area){
              this.radio10 = "1"
            }
            if(this.other.allowClickCarousel==true){
              this.awardCarousel=false
            }else if(this.other.allowClickCarousel==false){
              this.awardCarousel=true
            }
            if(this.other.allowClickArea==true){
              this.advanceArea=false
            }else if(this.other.allowClickArea==false){
              this.advanceArea=true
            }
          },
          //保存设置
          saveHight(){
            // this.$store.dispatch('saveData')

            if(this.dataStatus===undefined){
              let Data = sessionStorage.getItem('Data')
              this.company_send = JSON.parse(Data).jggHighCompanySetup
              this.safety_send = JSON.parse(Data).jggHighSecuritySetup
              this.other_send = JSON.parse(Data).jggHighOtherSetup
            }else if (this.dataStatus==='1') {
              this.company_send =this.$route.query.newjggData.jggHighCompanySetup
              this.safety_send = this.$route.query.newjggData.jggHighSecuritySetup
              this.other_send = this.$route.query.newjggData.jggHighOtherSetup
            }

            this.company_send.company= this.input
            this.company_send.url=this.input3

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
            this.$store.state.setting_data.jggHighCompanySetup = this.company_send
            this.company_send.companyLogo=this.imageUrl
            this.company_send.loadSelfImg=this.imageUrl1

          // 安全设置
            this.safety_send.redSecurityLevel = Number(this.radio5)
            this.safety_send.smsCheckType = Number(this.radio6)
            this.safety_send.blackUser = this.radio4 == 1 ? ture :false
            this.$store.state.setting_data.jggHighSecuritySetup = this.safety_send

          // 其它设置
            this.other_send.ad = this.radio7 == 1 ? true : false
            this.other_send.carousel = this.radio8 == 1 ? true : false
            this.other_send.form = this.radio9 == 1 ? false : true
            this.other_send.area = this.radio10 == 1 ? false : true
            this.$store.state.setting_data.jggHighOtherSetup=this.other_send
              this.$bus.emit("send_high",[this.company_send,this.safety_send,this.other_send])
            // console.log(this.other_send);
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
          margin-top: 2rem;
          font-size: 14px;
        }
        .message p .host {
          margin-right: 1rem;
        }
      }
      .message p .keep .save {
        margin-top: 4rem;
      }

      .safety p {
        margin-top: 2rem;
        font-size: 14px;
      }


      .safety p .hold {
        color: #fff;
        background: #409EFF;
      }

      .safety p .open {
        font-size: 14px;
      }

      .safety p .preserve .hold {
        margin-top: 5rem;
      }

      .rests p {

        margin-top: 2rem;
        font-size: 14px;
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
          /*text-align: center;*/
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
      }

      .avatar {
        width: 80px;
        height: 80px;
        display: block;
      }
      </style>
