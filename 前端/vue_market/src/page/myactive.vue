<template>
  <div class="active_Info">
    <div class="active_nav">
      <h3>我创建的活动</h3>
    </div>

    <div class="active_inp">
    <el-select v-model="value4" clearable placeholder="请选择" name="province" id="province" v-on:change="choosegroup($event)" >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-select v-model="value4" filterable placeholder="请输入要查询的内容" id="select_id">
      <el-option
        v-for="item in tableData"
        :key="item.value"
        :label="item.activityName"
        :value="item.value">
      </el-option>
      <el-option
        v-for="item in tableData"
        :key="item.value"
        :label="timestampToTime(item.startDate)"
        :value="item.value">
      </el-option>
      <el-option
        v-for="item in tableData"
        :key="item.value"
        :label="timestampToTime(item.endDate)"
        :value="item.value">
      </el-option>
      <el-option
        v-for="item in tableData"
        :key="item.value"
        :label="state(item.stateForMyActivity)"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button class="btn_s">查询</el-button>
  </div>

    <div class="ddd" style="text-align: center">
      <el-table
        :data="tableData"
        style="width: 100%;font-size:inherit;text-align: center">
        <el-table-column
          prop="activityName"
          label="活动名称"
        >
        </el-table-column>
        <el-table-column
          label="活动开始时间"
          width="130">
          <template slot-scope="scope">
            {{timestampToTime(scope.row.startDate)}}
          </template>
        </el-table-column>
        <el-table-column
          label="活动结束时间"
          width="140">
          <template slot-scope="scope">
            {{timestampToTime(scope.row.endDate)}}
          </template>
        </el-table-column>

        <el-table-column
          prop="stateForMyActivity"
          label="活动状态"
          :filters="[{text: '全选', value: '全选'},{text: '未发布', value: '未发布'}, {text: '未开始', value: '未开始'}, {text: '进行中', value: '进行中'}, {text: '已结束', value: '已结束'}]"
          :filter-method="filterHandler">
          <template slot-scope="scope">
            {{state(scope.row.stateForMyActivity)}}
          </template>
        </el-table-column>
        <el-table-column
          prop="takeNumber"
          label="参与">
          <!--:filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"-->
          <!--:filter-method="filterTag"-->
          <!--filter-placement="bottom-end">-->
          <!--<template slot-scope="scope">-->
          <!--<el-tag-->
          <!--:type="scope.row.tag === '家' ? 'primary' : 'success'"-->
          <!--disable-transitions>{{scope.row.tag}}</el-tag>-->
          <!--</template>-->
        </el-table-column>
        <el-table-column
          prop="maxNumber"
          label="最大参与人数">
        </el-table-column>
        <el-table-column
          prop="sendGoods"
          label="已发放">
        </el-table-column>
        <el-table-column
          prop="goods"
          label="剩余奖品数量">
        </el-table-column>
        <!--<el-table-column-->
        <!--prop="transferNumber"-->
        <!--label="传播人数"-->
        <!--&gt;-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
        <!--prop="state"-->
        <!--label="活动状况告警"-->
        <!--width="110">-->
        <!--</el-table-column>-->
        <el-table-column
          label="操作"
          width="180"
          font-size="14px">
          <template slot-scope="scope">
            <span
              class="acc"
              size="mini"
              @click="handleEdit($event,scope.row.activityId,scope.row.templateUuid)">
           发布／
            </span>
            <span
              class="abb"
              size="mini"
            >
            编辑／
            </span>
            <el-dropdown trigger="click">
  <span class="el-dropdown-link">
    更多
    <!--<i class="el-icon-caret-bottom el-icon&#45;&#45;right"></i>-->
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="clearfix">
                  详情
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                  删除
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                  <i @click="chain(scope.row.publishUrl)">链接</i>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
          >
        </el-table-column>
        <!--<el-table-column type="selection"  :reserve-selection="true" width="55"> </el-table-column>-->
      </el-table>
      <div class="block">
        <el-pagination
          background
          :page-size="2"
          layout="prev, pager,jumper ,next"
          :total="total"
          @current-change="current_change">
        </el-pagination>
      </div>
      <div class="publish">
        <div class="nav_fa">
          <h3>发布活动</h3>
          <button class="shut" @click="show()">X</button>
        </div>
        <div class="text_content">
          <p class="text_info">请认真核对一下信息，活动发布后<i>派奖方式、奖品、生成奖品券及
            对应奖品数量</i>将不能修改。活动发布后，预览活动数据将被清空</p>
        </div>
        <div class="actie_explain">
          <p>活动最大参与人数：<i>1000</i>人 <span> (达到该人数限制后，粉丝将不能参与活动)</span></p>
          <a href="#">升级粉丝流量></a>
          <p class="text_c">活动派奖方式：抽奖派发</p>
        </div>

        <div class="formContent">
          <el-table
            :data="rewdata"
            border
            stripe
            style="width: 100%;font-size: xx-small; ">
            <el-table-column
              prop="typedata"

              label="奖品类型">
            </el-table-column>
            <el-table-column
              prop="named"
              label="奖品名称">
            </el-table-column>
            <el-table-column
              prop="count"
              label="奖品数量">
            </el-table-column>
            <el-table-column
              prop="creat"
              label="生成券码">
            </el-table-column>
          </el-table>
        </div>
        <div class="btn_all">
          <el-button type="primary" class="btn_aa" @click="goOut()">取消</el-button>

          <el-button type="primary" class="btn_aa" @click="publish()">确认发布</el-button>

        </div>
      </div>
      <div class="linkActive">
        <div class="nav_fa">
          <h3>活动链接</h3>
          <button class="shut" @click="activeShow()">X</button>
        </div>
        <div class="active_img">
          <img
            :src=imgUrl
            alt="">

        </div>
        <div>
          <button class="btn_down" @click="download">下载二维码</button>
        </div>
        <div class="active_input">
          <el-input v-model="input3" value=input3 id="inp">
            <el-button slot="append" @click="copy()">复制</el-button>
          </el-input>
          <p>复制链接，用于自定义活动菜单、自定义回复、
            社交群推广、线下活动等各种推广场景。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import Button from "iview/src/components/button/button";
  import {mapState,mapMutations,mapActions} from 'vuex'

  export default {
    data() {
      return {
        statuss:0,
        grouplist:['活动名称','活动开始时间','活动结束时间','活动状态'],
        tableData: [
          {
            activityName: '信用大转盘',
            data: '2018/05/03/00:00:03--2018/05/25/01:00:00',
            startData: '',
            endData: '',
            people: '26／1000',
            count: '26/1000',
            difpeople: '65',
            activeSate: '正常',
            // operate:['发布','编辑',]
          },],
        rewdata: [
          {typedata: '流量券', named: '100M流量充值券', count: '100', creat: '系统生成'},
          {typedata: '流量券', named: '100M流量充值券', count: '100', creat: '系统生成'},
        ],
        options: [
          {
            value: '选项1',
            label: '活动名称'
          }, {
            value: '选项2',
            label: '活动开始时间'
          }, {
            value: '选项3',
            label: '活动结束时间'
          }, {
            value: '选项4',
            label: '活动状态'
          }],
        options2: [
          {
            value: '选项1',
            label: "12"
          },
          {
            value: '选项2',
            label: '2222'
          }, {
            value: '选项3',
            label: '3333'
          }, {
            value: '选项4',
            label: '正常'
          }],
        operates: ["发布", "编辑"],
        value4: [],
        imgUrl: '',
        activeId: '',
        templateUuid:'',
        total: 0,//默认数据总数
        pagesize: 7,//每页的数据条数
        currentPage: 1,//默认开始页面
        input3: 'http://ninini//',

      }
    },
    created() {
      this.pagedata()
    },
    computed:{
      ...mapState(['setting_data']),
      ...mapActions(['saveData','activePull']),
    },
    mounted() {
let _this=this
      let activeData = sessionStorage.getItem('activData')
      console.log(activeData);
      // this.$store.dispatch('activePull')
      this.state()
      this.pagedata()
    },
    methods: {

      //头部选择框
      choosegroup(e) {
        if (e==="选项1"){


        }
      },
      //数据渲染
      created: function () {
        //加载班级的数据
        var url = '';
        //向后台获取数据
        var vm = this;
        $.getJSON(url, function (data) {
          vm.clazzInfo = data;
          vm.total = data.length;//设置数据总数目！！！
        });
      },
      current_change: function (currentPage) {
        this.currentPage = currentPage;
      },

      pagedata() {
        //输出数据
        let Data = sessionStorage.getItem('Datalist')
        this.tableData = JSON.parse(Data)
        console.log(this.tableData);
      },
//状态转换
      state(a) {
        if (a === 1) {
          return a = "未发布"
        }
        if (a === 2) {
          return a = "未开始"
        }
        if (a === 3) {
          return a = "进行中"
        }
        if (a === 4) {
          return a = "已结束"
        }
        if (a === 5) {
          return a = "活动关闭"
        }
      },

      //日期转换
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


      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      handleEdit(e, index, templ) {

        $('.publish').css({"display": "block"})
        this.activeId = index
        this.templateUuid = templ
        alert(this.templateUuid)

      },
      show() {
        $('.publish').css({"display": "none"})
      },
      chain(url) {
        //链接活动发送
        this.input3 = url
        this.imgUrl = 'http://center.marketing.yunpaas.cn/center/enterprisewx/getImg?url=' + this.input3
        console.log(this.imgUrl);

        $('.linkActive').css({"display": "block"})//弹框显示

      },
      activeShow() {
        $('.linkActive').css({"display": "none"})
      },
      publish() {//发布活动
        let _this = this
        this.$axios({
          method: 'post',
          url: 'http://center.marketing.yunpaas.cn/center/activity/publish',
          params: {
            activityId: this.activeId,
            templateUuid: this.templateUuid
          },
        }).then(res => {
          console.log(res);
          var token = sessionStorage.getItem('token')
          this.$axios({
            method: 'post',
            url: 'http://center.marketing.yunpaas.cn/center/activity/findMyActivity?token=' + token,//我的活动
            params: {}
          }).then(res => {
            this.state.activData = JSON.stringify(res.data.data)
            this.state.Datalist = JSON.stringify(res.data.data.list)//我的活动数据
            let Dlist = this.state.Datalist
            let actD = this.state.activData
            sessionStorage.setItem('Datalist', Dlist)
            sessionStorage.setItem('activData', actD)

            $('.publish').css({"display": "none"})
            this.pagedata()
          }).catch(res => {
            console.log(res)
          })
        })
      },
      goOut() {
        // this.$router.go(0)
        $('.publish').css({"display": "none"})
      },
      download() {
        console.log(this);
        window.open(this.imgUrl);//下载二维码
      },
      listdata() {

      },
      copy() {
        var inp = document.getElementById("inp");
        inp.select();
        document.execCommand("Copy", "false", null);
        alert("复制成功")
      },



    },



    components: {Button,},
    computed: {}
  }
</script>

<style scoped>
  .active_Info {
    width: 85%;
    margin: 0 auto;
    /*padding: 30px;*/
    padding-left: 30px;
    position: relative;
    cursor: pointer;

  }

  .active_nav {
    width: 104%;
    height: 57px;
    line-height: 57px;
    border-bottom: 2px solid #E8E8E8;
  }

  .active_inp {
    margin-top: 20px;
  }

  .active_inp .btn_s {
    background: #FC7132;
    color: #fff;
  }

  .active_Info > ul {
    margin-top: 30px;
  }

  .active_Info > ul > li {
    float: left;
    margin-left: 50px;
  }

  .acc {
    color: greenyellow;
  }

  .abb {
    color: orange;
  }

  .el-dropdown-link {
    color: #2b85e4;
  }

  .publish {
    width: 529px;
    height: 485px;
    background: #FFFFFF;
    box-shadow: 0 6px 12px 0 rgba(0, 35, 85, 0.17);
    border-radius: 2px;
    position: absolute;
    top: 10%;
    left: 20%;
    display: none;
    z-index: 888;
  }

  .linkActive {
    width: 529px;
    height: 379px;
    background: #FFFFFF;
    box-shadow: 0 6px 12px 0 rgba(0, 35, 85, 0.17);
    border-radius: 2px;
    position: absolute;
    top: 10%;
    left: 10%;
    display: none;
    z-index: 888;
  }

  .nav_fa {
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background: #F2F2F2;
    position: relative;
  }

  .nav_fa .shut {
    width: 24px;
    height: 24px;
    line-height: 24px;
    font-size: 16px;
    text-align: center;
    border: none;
    color: #4A4A4A;
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
  }

  .text_content {
    margin-top: 25px;
  }

  .text_info {
    width: 348px;
    height: 20px;
    line-height: 40px;
    text-align: center;
    font-family: MicrosoftYaHei;
    font-size: 12px;
    color: #4A4A4A;
    letter-spacing: 0;
    line-height: 20px;
    margin: 0 auto;
  }

  .text_info i {
    color: #FC7132;
  }

  .actie_explain {
    margin-top: 19px;
    font-size: 12px;
    text-align: left;
  }

  .actie_explain > p {
    margin-left: 30px;
  }

  .actie_explain .text_c {
    font-size: 14px;
    margin-top: 20px;
  }

  .actie_explain > a {
    padding-left: 160px;
  }

  .actie_explain > p > i, span {
    font-family: MicrosoftYaHei;
    color: red;
    letter-spacing: 0;
    line-height: 31px;
  }

  .formContent {
    margin-top: 20px;
    padding: 0 30px;
  }

  .btn_all {
    margin-top: 30px;
  }

  .btn_aa {
    float: right;
    width: 96px;
    height: 34px;
    background: #fe4d1e;
    color: #fff;
    border: none;
    margin-right: 30px;
  }

  .btn_aa:hover {
    background: #F2F2F2;
    color: #9B9B9B;
  }

  .active_img {
    margin-top: 27px;
    margin-left: 34px;
    width: 192px;
    height: 192px;
    line-height: 192px;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
  }

  .active_img img {
    width: 176px;
    height: 176px;
    margin-top: 8px;
  }

  .btn_down {
    width: 190px;
    height: 34px;
    line-height: 34px;
    background: #FC7132;
    border-radius: 3px;
    color: #fff;
    margin-top: 20px;
    float: left;
    margin-left: 34px;
  }

  .active_input {
    width: 249px;
    height: 38px;
    float: right;
    margin-right: 34px;
    margin-top: -190px;
  }

  .active_input > p {
    margin-top: 20px;
  }

</style>
<style>
  .el-input-group__append {
    border-left: 0;
    background: #FC7132;
    color: #fff;
  }
</style>
