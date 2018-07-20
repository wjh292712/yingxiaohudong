<template>
  <div class="reword_wrap">
    <div class="reword_con">
      <el-form ref="form" :model="form" label-width="82px">
        <div class="reword_type">

          <el-tabs v-model="editableTabsValue" type="card" >
            <el-tab-pane
              :key="item.name"
              v-for="(item, index) in editableTabs"
              :label="item.awardName"
              :name="item.name"
            >
              <el-form-item label="奖品来源">
                <el-radio-group v-model="radio1[index]">
                  <el-radio :disabled="ticket" label="1">自家商品</el-radio>
                  <el-radio :disabled="ticket" label="2">平台奖品库</el-radio>
                </el-radio-group>
                <a href="javascript:;">去奖品商城购买</a>
              </el-form-item>
              <el-form-item label="奖品类型">
                <el-select v-model="form.region1[index]" placeholder="请选择奖品类型">
                  <el-option v-for="(items,indx) in reword_type1[index]" :label="items.name" :value="items.id"
                             :key="items.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="奖品名称">
                <el-input maxlength="15" :disabled="actName" v-model="form.name1_1[index]"
                          placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                  list-type="picture-card"
                  :on-success="handleAvatarSuccess1"
                  :before-upload="beforeAvatarUpload"
                  :on-remove="handleRemove" class="avatar-uploader">

                  <img v-if="imgData1[index]" :src="imgData1[index]" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span class="load_text">奖品图片将在九宫格中显示</span>
                <span>点击图片重新上传即可更换奖品图片</span>
              </el-form-item>

              <el-form-item label="奖品数量">
                <el-input v-model="form.name1_2[index]" :disabled="rewordCount" maxlength="15" type="text"
                          placeholder="不超过15个字"
                          onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                          onblur="this.v();"></el-input>
              </el-form-item>


              <el-form-item label="导入券码">
                <el-radio-group v-model="radio2[index]">
                  <el-radio :disabled="ticket" label="1">系统生成</el-radio>
                  <el-radio :disabled="ticket" label="2">手动导入</el-radio>
                </el-radio-group>
              </el-form-item>
              <span v-show="isshow[index].flag">
              <el-form-item label="">
                <el-input type="textarea" v-model="form.ticket1"></el-input>
              </el-form-item>
                </span>

              <el-form-item label="兑奖时间">
                <el-date-picker
                  v-model="value5[index]"
                  :disabled="startTime"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>


              <el-form-item label="兑奖方式" style="width:26rem;">
                <el-radio-group v-model="radio3[index]">
                  <el-radio label="1">公众号兑奖</el-radio>
                  <el-radio label="2">线下门店兑奖</el-radio>
                  <div class="second">
                    <el-radio label="3">联系客服兑奖</el-radio>
                    <el-radio label="4">平台提供兑奖说明</el-radio>
                  </div>
                </el-radio-group>
              </el-form-item>
              <div class="public" v-show="public[index].pub">
                <el-form-item label="公众号名称">
                  <el-input v-model="form.name1_3[index]" maxlength="15" placeholder="不超过15个字"></el-input>
                  <span>上传公众号二维码</span>

                  <el-upload
                    action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                    list-type="picture-card"
                    :on-success="handleAvatarSuccess1_1"
                    :before-upload="beforeAvatarUpload"
                    :on-remove="handleRemove" class="avatar-uploader">

                    <img v-if="dialogImageUrl[index]" :src="dialogImageUrl[index]" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                  <span>点击图片重新上传即可更换奖品图片</span>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input type="textarea" v-model="form.name1_4[index]" placehoder="0/50字" maxlength="50"></el-input>
                </el-form-item>
              </div>

              <div class="shop_info" v-show="shop_info[index].shop">
                <el-form-item label="门店地址">
                  <el-input v-model="form.address1[index]" maxlength="30" placeholder="请填写兑奖或者门店地址，不超过30个汉字"></el-input>
                </el-form-item>
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone1_1[index]" maxlength="15" placeholder="不超过15个字"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name1_4[index]" maxlenght="15" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>
              <div class="ser_info" v-show="ser_info[index].ser">
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone1_1[index]" maxlength="15" placeholder="不超过15个字"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name1_4[index]" maxlength="15" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="cddd">
            <span class="reword_num1" v-show="addRew" @click="handleTabsEdit1()">+</span>
            <span class="reword_num2" @click="del()">-</span>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import myactive from '@/page/myactive'
  import "../plugins/sudoku/jquery-1.11.0"
  import "../js/lrz"
  import "../js/exif"
  import "../js/mobileFix.mini"

  export default ({
    data() {
      return {
        editableTabsValue: '3',
        editableTabs: [
          {
            awardName: '奖品 ' + 1,
            name: '1',
          }, {
            awardName: '奖品 2',
            name: '2',
          }, {
            awardName: '奖品 3',
            name: '3',
          },
        ],
        isshow: [{flag: false}, {flag: false}, {flag: false}, {flag: false}, {flag: false}, {flag: false}, {flag: false},],
        tabIndex: 3,
        actName: false,
        startTime: false,
        rewordCount: false,
        ticket: false,//券码
        list: [],
        dialogImageUrl: [],//微信公众号
        dialogVisible: true,
        start_date1: [],
        end_date1: [],
        arrsImg1: [],
        arrsImg2: [],

        imgData1: [],//上传图片

        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },],
        fileList: [],
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value4: [new Date(2018, 10, 29, 10, 10), new Date(2018, 10, 11, 10, 10)],
        value5: [],//奖品一的时间设
        form: {
          //奖品一
          name1_1: [],//奖品名称
          name1_2: [],//奖品数量
          ticket1: [],//手动导入券码
          region1: [],//奖品类型
          name1_3: [],//公众号名称
          name1_4: [],//兑奖说明
          address1: [],//门店地址
          phone1_1: [],//门店客服电话
        },
        public: [{pub: false}, {pub: false}, {pub: false}, {pub: false}, {pub: false}, {pub: false}, {pub: false},],
        shop_info: [{shop: false}, {shop: false}, {shop: false}, {shop: false}, {shop: false}, {shop: false}, {shop: false},],
        ser_info: [{ser: false}, {ser: false}, {ser: false}, {ser: false}, {ser: false}, {ser: false}, {ser: false},],
        activeName: 'first',
        radio1: [],//奖品来源1
        radio2: [],//单选框2
        radio3: [],//单选框3
        reword_type1: [],//奖品一类型
        reword_data: [],//接口数据保存
        reword_send: [],//奖品数据回调
        reword_dataNew:[],//编辑添加数据渲染
        dataStatus: 0,
        obj: {
          activityId: null,
          awardName: "奖品一",
          exchangeAddress: null,
          exchangeDesc: null,
          exchangeEndDate: 1532501601277,
          exchangeStartDate: 1531896801277,
          exchangeTelephone: null,
          id: null,
          jggAwardTypeList: [
            {id: 1, name: "积分", seq: 1},
            {id: 2, name: "流量话费", seq: 2},
            {id: 3, name: "红包", seq: 3},
            {id: 4, name: "实物", seq: 4},
            {id: 5, name: "电子券", seq: 5},
            {id: 6, name: "视频会员", seq: 6},
            {id: 7, name: "商家自供", seq: 7}],
          jggElectricCodeList: [{
            activityId: null,
            awardId: null,
            code: null,
            enterpriseId: null,
            enterpriseUserId: null,
            id: null,
            isOut: null,
            isUse: null,
            outDate: null,
            outEnterpriseUserId: null,
            outEnterpriseUserName: null,
            version: null
          }],
          prizeCouponCodeImport: null,
          prizeCouponCodeType: 1,
          prizeCurrentNum: null,
          prizeExchangeTypeId: 4,
          prizeImg: null,
          prizeName: "天猫100积分",
          prizeNum: 1,
          prizeSource: 1,
          prizeType: 1,
          sendMaxDay: null,
          version: null,
          winRate: 10,
          wxPublicAccountImg: null,
          wxPublicAccountName: null
        },
        addRew:true,
      }
    },

    mounted() {

      var token = sessionStorage.getItem('token')
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/jgg/activitySetup/init?token=" + token,//数据初始化接口
        params: {},
      }).then(res => {
        let setting_data = JSON.stringify(res.data.data)
        sessionStorage.setItem("Data", setting_data)
        this.startTime = this.$route.query.startTime
        this.actName = this.$route.query.actName
        this.rewordCount = this.$route.query.rewordCount
        this.ticket = this.$route.query.ticket
        this.dataStatus = this.$route.query.dataStatus
        this.partReword()
      })

      this.timestampToTime()

    },
    computed: {
      ...mapState(['setting_data']),
      ...mapActions(['saveData']),
      sdata() {
        return this.setting_data
      }
    },
    updated() {

      this.saveReword()
    },
    methods: {

      handleTabsEdit1(){

        this.tabIndex = this.editableTabs.length
        let newTabName = ++this.tabIndex + '';
        if (newTabName <= 7) {
          this.editableTabs.push({
            awardName: '奖品 ' + this.tabIndex,
            name: newTabName,
          });
        } else {
          this.addRew=false;
          alert("最多添加7个奖品")

        }
        this.editableTabsValue = newTabName;
        this.reword_dataNew.push(this.obj)
      },
      del(){

        if (this.editableTabs.length<=7){
          this.addRew=true
        }
        if(this.editableTabs.length>3){
          this.editableTabs.pop()
        }else {
          alert("最少3个奖品")
        }
        this.editableTabsValue=this.editableTabs.length
      },

      //奖品设置部分的数据
      partReword() {
        if (this.dataStatus === undefined) {
          let Data = sessionStorage.getItem('Data')
          this.reword_data = JSON.parse(Data).jggAwardSetupExtendList
        } else if (this.dataStatus === '1') {
          this.reword_data = this.$route.query.newjggData.jggAwardSetupExtendList
          let a = this.reword_data.length - this.editableTabs.length
          for (var j = 0; j < a; j++) {
            this.tabIndex = this.editableTabs.length
            let newTabName = ++this.tabIndex + '';
            if (newTabName <= 7) {
              this.editableTabs.push({
                awardName: '奖品 ' + this.tabIndex,
                name: newTabName,
              });
            }
          }
        }
        //this.list = this.reword_data
        if(this.reword_data.length>=this.editableTabs.length){
          this.list = this.reword_data
        }else {
          this.reword_data=this.reword_data.push(this.obj)
          this.list=this.editableTabs
        }
        for (var i = 0; i < this.list.length; i++) {
          //  日期时间转换设置
          this.start_date1[i] = this.reword_data[i].exchangeStartDate
          this.end_date1[i] = this.reword_data[i].exchangeEndDate//结束时间
          //时间戳转换日期
          this.value5[i] = [this.timestampToTime(this.start_date1[i]), this.timestampToTime(this.end_date1[i])]
          //奖品一
          this.form.name1_1[i] = this.reword_data[i].prizeName //奖品名称
          this.form.name1_2[i] = this.reword_data[i].prizeNum //奖品数量
          this.form.name1_3[i] = this.reword_data[i].wxPublicAccountName //微信公众号名称
          this.form.name1_4[i] = this.reword_data[i].exchangeDesc //兑奖说明
          this.form.address1[i] = this.reword_data[i].exchangeAddress//门店地址
          this.form.phone1_1[i] = this.reword_data[i].exchangeTelephone //客服电话
          this.radio1[i] = this.reword_data[i].prizeSource.toString() //奖品来源
          this.radio2[i] = this.reword_data[i].prizeCouponCodeType.toString() //导入券码
          if (this.radio2[i] == 1) {
            this.isshow[i].flag = false
          } else if (this.radio2[i] == 2) {
            this.isshow[i].flag = true
          }
          this.radio3[i] = this.reword_data[i].prizeExchangeTypeId.toString() //兑奖方式

          if (this.radio3[i] == 1) {
            this.public[i].pub = true
            this.shop_info[i].shop = false
            this.ser_info[i].ser = false

          } else if (this.radio3[i] == 2) {
            this.public[i].pub = false
            this.shop_info[i].shop = true
            this.ser_info[i].ser = false

          } else if (this.radio3[i] == 3) {
            this.public[i].pub = false
            this.shop_info[i].shop = false
            this.ser_info[i].ser = true

          } else if (this.radio3[i] == 4) {
            this.public[i].pub = false
            this.shop_info[i].shop = false
            this.ser_info[i].ser = false
          }
          this.imgData1[i] = this.reword_data[i].prizeImg //上传图片
          this.reword_type1[i] = this.reword_data[i].jggAwardTypeList // 奖品类型
          this.form.region1[i] = this.reword_data[i].prizeType
          this.dialogImageUrl[i] = this.reword_data[i].wxPublicAccountImg //微信公众号图片
        }
      },

      //保存奖品数据
      saveReword() {
        if (this.dataStatus === undefined) {
          let Data = sessionStorage.getItem('Data')
          this.reword_send = JSON.parse(Data).jggAwardSetupExtendList

        } else if (this.dataStatus === '1') {
          this.reword_send = this.$route.query.newjggData.jggAwardSetupExtendList
          this.reword_send=this.reword_send.concat(this.reword_dataNew)
        }
        this.reword_send.length = this.editableTabs.length
        for (var i = 0; i < this.reword_send.length; i++) {
          //奖品一
          this.reword_send[i].prizeName = this.form.name1_1[i] //奖品名称
          this.reword_send[i].prizeNum = this.form.name1_2[i] //奖品数量
          this.reword_send[i].wxPublicAccountName = this.form.name1_3[i]  //微信公众号名称
          this.reword_send[i].exchangeDesc = this.form.name1_4[i] //兑奖说明
          this.reword_send[i].exchangeAddress = this.form.address1[i]//门店地址
          this.reword_send[i].exchangeTelephone = this.form.phone1_1[i]//客服电话
          this.reword_send[i].prizeSource = this.radio1[i]  //奖品来源
          this.reword_send[i].prizeCouponCodeType = this.radio2[i]  //导入券码
          if (this.radio2[i] == 1) {
            this.isshow[i].flag = false
          } else if (this.radio2[i] == 2) {
            this.isshow[i].flag = true
          }

          this.reword_send[i].prizeExchangeTypeId = this.radio3[i]//兑奖方式
          if (this.radio3[i] == 1) {
            this.public[i].pub = true
            this.shop_info[i].shop = false
            this.ser_info[i].ser = false

          } else if (this.radio3[i] == 2) {
            this.public[i].pub = false
            this.shop_info[i].shop = true
            this.ser_info[i].ser = false

          } else if (this.radio3[i] == 3) {
            this.public[i].pub = false
            this.shop_info[i].shop = false
            this.ser_info[i].ser = true

          } else if (this.radio3[i] == 4) {
            this.public[i].pub = false
            this.shop_info[i].shop = false
            this.ser_info[i].ser = false
          }

          this.reword_send[i].jggAwardTypeList = this.reword_type1[i] // 奖品类型
          this.reword_send[i].prizeType = this.form.region1[i]
          if (this.arrsImg2[i] !== undefined) {
            this.reword_send[i].prizeImg = this.arrsImg2[i].imgData1 //上传图片
          }
          if (this.arrsImg1[i] !== undefined) {
            this.reword_send[i].wxPublicAccountImg = this.arrsImg1[i].dialogImageUrl//微信公众号图片
          }
        }

        this.$store.state.setting_data.jggAwardSetupExtendList = this.reword_send
        this.$bus.emit("send_reword", this.reword_send)
      },
      //添加奖品
      handleAvatarSuccess1(res, file, fileList) {
        this.arrsImg2.push({
          imgData1: file.response.data
        })
      },
      handleAvatarSuccess1_1(res, file) {
        this.arrsImg1.push({
          dialogImageUrl: file.response.data
        })
      },

      handleRemove(file, fileList) {

        console.log(file, fileList);
        console.log(file.response.data);
      },
      timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y + M + D + h + m + s;
      },
      beforeAvatarUpload(file) {

      },
    }
  })
</script>

<style lang="scss" scoped>
  .reword_wrap {
    width: 100%;
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
        overflow: hidden;
        .reword_num1 {
          width: 0.8rem;
          height: 0.8rem;
          line-height: 0.8rem;
          border: solid 1px #ccc;
          margin: 0 .05rem;
          text-align: center;
          display: inline-block;
          border-radius: 4px;
          cursor: pointer;
        }
        .reword_num2 {
          width: 0.8rem;
          height: 0.8rem;
          line-height: 0.8rem;
          border: solid 1px #ccc;
          margin: 0 .05rem;
          text-align: center;
          display: inline-block;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
  }

  .cddd {
    position: absolute;
    top: 10px;
    right: 1.2rem;
  }

  .el-tabs__nav .el-tabs__item {
    padding: 0px 15px;
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
    font-size: 60px;
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

  .tabs li{
    width: 50px;
    height: 30px;
    background: #bcbec2;
    text-align: center;
    border: 1px solid #fe4d1e;
  }

</style>
<style>
  .el-tabs__item{
    padding: 0px 19px;
  }
</style>
