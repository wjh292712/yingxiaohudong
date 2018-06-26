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
                            <el-radio label="1" >开启</el-radio>
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
                        <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                            <span>上传图标</span>
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
                          <el-input height="6rem" type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>

                        <el-form-item label="微信分享内容">
                                <el-radio-group v-model="form.resource4">
                                        <el-radio label="1">默认</el-radio>
                                        <el-radio label="2">自定义</el-radio>
                                </el-radio-group>
                        </el-form-item>
                        <el-form-item v-show="shareContent">
                                <el-input height="6rem" type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>


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
    export default({
        data(){
            return {
                dialogImageUrl: '',
                dialogVisible: false,
              shareTitl:false,
              shareIcon:false,
              shareContent:false,
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
                        desc: ''
                        },
                share_data:'',//接口数据保存
                share_send:'',
              dataStatus:0,
            }
        },
        created(){

            // this.savedShare()
        },
        computed:{
            ...mapState(['setting_data']),
            ...mapActions(['saveData']),
        },
        mounted(){
            this.partShare()
          this.dataStatus=this.$route.query.dataStatus
          if (this.dataStatus==='1') {
            this.partShare1()
          }
        },
      updated(){

        if(this.dataStatus===undefined){
          this.savedShare()
        }else if (this.dataStatus==='1') {
          this.savedShare1()
        }
      },
        methods:{
            onSubmit() {
                    console.log('submit!');
                },
                handleRemove(file, fileList) {
                    console.log(file, fileList);
                    },
                handlePictureCardPreview(file) {
                    this.dialogImageUrl = file.url;
                    this.dialogVisible = true;
                },

                     //分享设置部分
                    partShare(){
                        // this.$store.dispatch('saveData')
                        let Data = sessionStorage.getItem('Data')
                        this.share_data = JSON.parse(Data).jggShareSetup
                        this.form.resource1 = Number(this.share_data.share).toString()
                        this.form.resource2 = this.share_data.wxShareLogoType.toString()
                      if(this.form.resource2==1){
                        this.shareIcon=false
                      }else {
                        this.shareIcon=true
                      }
                        this.form.resource3 = this.share_data.wxShareTitleType.toString()
                      if(this.form.resource3==1){
                        this.shareTitl=false
                      }else {
                        this.shareTitl=true
                      }
                        this.form.resource4 = this.share_data.wxShareContentType.toString()
                      if(this.form.resource4==1){
                        this.shareContent=false
                      }else {
                        this.shareContent=true
                      }
                    },
          partShare1(){

                        this.share_data = this.$route.query.newjggData.jggShareSetup
                        this.form.resource1 = Number(this.share_data.share).toString()
                        this.form.resource2 = this.share_data.wxShareLogoType.toString()
            if(this.form.resource2==1){
              this.shareIcon=false
            }else {
              this.shareIcon=true
            }
                        this.form.resource3 = this.share_data.wxShareTitleType.toString()
            if(this.form.resource3==1){
              this.shareTitl=false
            }else {
              this.shareTitl=true
            }
                        this.form.resource4 = this.share_data.wxShareContentType.toString()
            if(this.form.resource4==1){
              this.shareContent=false
            }else {
              this.shareContent=true
            }
                    },
                    //分享保存部分
                    savedShare(){
                        // this.$store.dispatch('saveData')
                        let Data = sessionStorage.getItem('Data')
                        this.share_send = JSON.parse(Data).jggShareSetup
                        this.share_send.share = this.form.resource1 == 1 ? true : false
                        this.share_send.wxShareLogoType = this.form.resource2
                      if(this.form.resource2==1){
                        this.shareIcon=false
                      }else {
                        this.shareIcon=true
                      }
                      this.share_send.wxShareTitleType = this.form.resource3
                      if(this.form.resource3==1){
                        this.shareTitl=false
                      }else {
                        this.shareTitl=true
                      }
                      this.share_send.wxShareContentType = this.form.resource4
                      if(this.form.resource4==1){
                        this.shareContent=false
                      }else {
                        this.shareContent=true
                      }
                        this.$store.state.setting_data.jggShareSetup = this.share_send
                        this.$bus.emit("send_share",this.share_send)
                    },
          savedShare1(){
                        // this.$store.dispatch('saveData')

                        this.share_send = this.$route.query.newjggData.jggShareSetup
                        this.share_send.share = this.form.resource1 == 1 ? true : false
                        this.share_send.wxShareLogoType = this.form.resource2
            if(this.form.resource2==1){
              this.shareIcon=false
            }else {
              this.shareIcon=true
            }
                      this.share_send.wxShareTitleType = this.form.resource3
            if(this.form.resource3==1){
              this.shareTitl=false
            }else {
              this.shareTitl=true
            }
            this.share_send.wxShareContentType = this.form.resource4
            if(this.form.resource4==1){
              this.shareContent=false
            }else {
              this.shareContent=true
            }
                        this.$store.state.setting_data.jggShareSetup = this.share_send
                        this.$bus.emit("send_share",this.share_send)
                    },
                    change(){
                        this.sendShare()
                    },

          // back(){
          //     this.$router.go(-1)
          // }
                }

    })
</script>

<style lang="scss" scoped>
    .share_wrap {
        width:100%;
        font-size:.6rem;
        margin:.5rem 0;
      position: relative;
      z-index: 9;
        .share_con {
            width:95%;
            margin:0 auto;

        }
    }
    .el-form-item__label{
      text-align: left;
    }
</style>
