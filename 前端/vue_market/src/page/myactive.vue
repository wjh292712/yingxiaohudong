<template>
  <div class="active_Info">
    <div class="active_nav">
      <h3>我创建的活动</h3>
    </div>
    <div class="active_inp">
      <el-input
        clearable
        placeholder="活动名称"
        v-model="activename" style="width:140px;margin-right: 5px">
      </el-input>
      <el-date-picker
        size="large"
        v-model="value4"
        type="datetimerange"
        start-placeholder="活动开始时间"
        style="width:300px;margin-right:5px">
      </el-date-picker>
      <el-date-picker
        size="large"
        v-model="value5"
        type="datetimerange"
        start-placeholder="活动结束时间"
        style="width:300px;margin-right:5px">
      </el-date-picker>
      <el-autocomplete
        clearable="true"
        class="inline-input"
        v-model="activeState"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect"
        style="width:140px;margin-right:5px">
      </el-autocomplete>
      <el-button @click="find()">查询</el-button>
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

        <!--<el-table-column-->
        <!--prop="stateForMyActivity"-->
        <!--label="活动状态"-->
        <!--:filters="[{text: '全选', value: '全选'},{text: '未发布', value: '未发布'}, {text: '未开始', value: '未开始'}, {text: '进行中', value: '进行中'}, {text: '已结束', value: '已结束'}]"-->
        <!--:filter-method="filterHandler">-->
        <!--<template slot-scope="scope">-->
        <!--{{state(scope.row.stateForMyActivity)}}-->
        <!--</template>-->
        <!--</el-table-column>-->
        <el-table-column
          prop="stateForMyActivity"
          label="活动状态">
          <template slot-scope="scope">
            {{state(scope.row.stateForMyActivity)}}
          </template>
        </el-table-column>
        <el-table-column
          prop="takeNumber"
          label="参与">
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
              @click="redact($event,scope.row.activityId,scope.row.templateUuid,scope.row.stateForMyActivity)"
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
                  <i>详情</i>
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                  <i @click="copyContent($event,scope.row.activityId,scope.row.templateUuid,scope.row.stateForMyActivity)">复制</i>
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                  <i @click="del(scope.row.activityId,scope.row.templateUuid)">删除</i>
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
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pagesize"
          layout=" prev, pager, next, jumper"
          :total="total">
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
              prop="awardType.name"
              label="奖品类型">
            </el-table-column>
            <el-table-column
              prop="prizeName"
              label="奖品名称">
            </el-table-column>
            <el-table-column
              prop="prizeNum"
              label="奖品数量">
            </el-table-column>
            <!--<el-table-column-->
            <!--prop="prizeCouponCodeType"-->
            <!--label="生成券码">-->
            <!--<template slot-scope="scope">-->
            <!--{{state1(scope.row.prizeCouponCodeType)}}-->
            <!--</template>-->
            <!--</el-table-column>-->
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
  import {mapState, mapMutations, mapActions, newActiveStates} from 'vuex'

  export default {
    data() {
      return {
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
        value4: [],
        value5: [],
        statuss: 0,
        activename: '',
        activeStartDate: '',
        activeEndDate: '',
        activeState: '',
        activeFindState: '',
        states: '',
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
            label: 'ww'
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
        imgUrl: '',
        activeId: '',
        templateUuid: '',
        total: 100,//默认数据总数
        pagesize: 10,//每页的数据条数
        currentPage: 1,//默认开始页面
        input3: 'http://ninini//',
        startTime: false, //基础设置的开始时间
        endTime: false,//基础设置的结束时间
        actName: false,//基础设置活动名称
        rewordCount: false,//奖品设置奖品数量
        startPrice: false,//商品原价
        endPrice: false,//商品底价
        ticket: false,//券码
        btnsave: false,//保存
        newjggData: '',//编辑数据接口
        newkjData: '',//编辑数据接口
        newdtData: '',//编辑数据接口
        dataStatus: '',
      }
    },
    created() {
      // this.pagedata()
    },
    computed: {
      ...mapState(['setting_data']),
      ...mapActions(['saveData', 'activePull', 'newActiveStates']),
    },
    mounted() {
      this.restaurants = this.loadAll();
      let activeData = JSON.parse(sessionStorage.getItem('activData'))
      // var token = sessionStorage.getItem('token')
      // this.$axios({
      //   method: 'post',
      //   url: 'http://center.marketing.yunpaas.cn/center/activity/findMyActivity?token=' + token,
      //   params: {
      //     pagesize: this.pagesize,
      //     pageNum: this.currentPage
      //   }
      // }).then(res => {
      //   let pageData = res.data.data
      //   console.log(pageData);
      //   let Datalist = res.data.data.list
      //   this.pagesize = pageData.pagesize
      //   this.currentPage = pageData.pageNum
      //   this.total = pageData.total
      //   this.tableData = Datalist
      // })
      //this.$store.dispatch('activePull')
      this.currentPage = activeData.pageNum
      this.total = activeData.total
      this.pagesize = activeData.pageSize
      this.state()
      this.pagedata()

    },
    // updated(){
    //   let date1=this.value4[0]
    //   let date2=this.value4[1]
    //   var time1 = date1.getTime();
    //   var time2 = date2.valueOf();
    //   alert(time1)
    //   alert(time2)
    // },

    methods: {

      //头部选择框
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
          {"value": "未发布", index: "1"},
          {"value": "未开始", index: "2"},
          {"value": "进行中", index: "3"},
          {"value": "已结束", index: "4"},
          {"value": "活动关闭", index: "5"}
        ]
      },
      handleSelect(item) {
        console.log(item);
        this.activeFindState = item.index
      },

      find() {//点击查询
        var token = sessionStorage.getItem('token')
        if (this.value4 === null) {
          this.value4 = ''
        }
        if (this.value5 === null) {
          this.value5 = ''
        }
        this.$axios({
          method: 'post',
          url: 'http://center.marketing.yunpaas.cn/center/activity/findMyActivity?token=' + token,
          // url: 'http://192.168.2.112:8085/center/activity/findMyActivity?token=' + token,
          headers: {'Content-Type': 'application/json'},
          params: {
            activityName:this.activename,
            startTime1: this.value4[0] === undefined || null ? '' : this.value4[0].getTime(),
            startTime2: this.value4[1] === undefined || null ? '' : this.value4[1].getTime(),
            endTime1: this.value5[0] === undefined || null ? '' : this.value5[0].getTime(),
            endTime2: this.value5[1] === undefined || null ? '' : this.value5[1].getTime(),
            activityState: this.activeFindState,
          }
        }).then(res => {
          let pageData = res.data.data
          let Datalist = res.data.data.list
          this.pagesize = pageData.pagesize
          this.currentPage = pageData.pageNum
          this.total = pageData.total
          this.tableData = Datalist
        })


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
      state1(a) {  //奖品发布券码生成判断
        if (a === 1) {
          return a = "系统生成"
        }
        if (a === 2) {
          return a = "手动生成"
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
        if (this.templateUuid == 1) {//九宫格发布奖品
          this.$axios({
            method: 'post',
            url: 'http://center.marketing.yunpaas.cn/jgg/awardSetup/list',
            params: {
              activityId: this.activeId,
            }
          }).then(res => {
            console.log(res);
            let jggDataList = res.data.data.list
            console.log(jggDataList);
            // this.rewdata.typedata= jggDataList.jggAwardType.name
            this.rewdata = jggDataList
          })
        }
        else if (this.templateUuid == 2) {//砍价发布奖品
          this.$axios({
            method: 'post',
            url: 'http://center.marketing.yunpaas.cn/kj/goodsSetup/list',
            params: {
              activityId: this.activeId,
            }
          }).then(res => {
            let kjDataList = res.data.data.list
            console.log(kjDataList);
            this.rewdata = kjDataList
          })
        }
        else if (this.templateUuid == 3) {//答题发布奖品
          this.$axios({
            method: 'post',
            url: 'http://center.marketing.yunpaas.cn/dt/awardSetup/list',
            params: {
              activityId: this.activeId,
            }
          }).then(res => {
            let dtDataList = res.data.data.list
            console.log(dtDataList);
            this.rewdata = dtDataList
          })
        }

      },
      redact(e, index, templ, states) {
        this.activeId = index
        alert(this.activeId)
        this.templateUuid = templ
        this.states = states

        if (this.templateUuid == 1) {
          this.$axios({
            method: 'post',
            url: 'http://center.marketing.yunpaas.cn/jgg/activitySetup/getActivitySetupById',
            params: {
              activityId: this.activeId,
            }
          }).then(res => {
            console.log(res);
            let newJggData = res.data.data
            this.newjggData = newJggData
            if (this.states === 3) {

              this.$router.push({
                path: '/activeslide/activelist',
                query: {
                  startTime:true,
                  actName:true,
                  rewordCount:true,
                  ticket:true,
                  newjggData:newJggData,
                  dataStatus:'1'
                }
              })
            } else if (this.states === 4) {

              this.$router.push({
                path: '/activeslide/activelist',
                query: {
                  startTime:true,
                  actName:true,
                  rewordCount:true,
                  ticket:true,
                  btnsave:true,
                  newjggData: newJggData,
                  dataStatus: '1'
                }
              })
            }
            else {
              this.$router.push({path: '/activeslide/activelist', query: {newjggData: newJggData, dataStatus: '1'}})
            }

          })
        } else if (this.templateUuid == 2) {
          this.$axios({
            method: 'post',
            url: 'http://center.marketing.yunpaas.cn/kj/activitySetup/getActivitySetupById',
            params: {
              activityId: this.activeId,
            }
          }).then(res => {
            let newKjData = res.data.data
            this.newkjData = newKjData
            if (this.states === 3) {

              this.$router.push({
                path: '/activeslide/bargainlist',
                query: {
                  startTime:true,
                  actName:true,
                  startPrice:true,
                  endPrice:true,
                  newkjData:newKjData,
                  dataStatus: '1'
                }
              })
            } else if (this.states === 4) {

              this.$router.push({
                path: '/activeslide/bargainlist',
                query: {
                  startTime:true,
                  actName:true,
                  startPrice:true,
                  endPrice:true,
                  btnsave:true,
                  newkjData:newKjData,
                  dataStatus:'1'
                }
              })
            }
            else {
              this.$router.push({path: '/activeslide/bargainlist', query: {newkjData: newKjData, dataStatus: '1'}})
            }

          })
        } else if (this.templateUuid == 3) {
          this.$axios({
            method: 'post',
            url: 'http://center.marketing.yunpaas.cn/dt/activitySetup/getActivitySetupById',
            params: {
              activityId: this.activeId,
            }
          }).then(res => {
            let newDtData = res.data.data
            this.newdtData = newDtData
            if (this.states === 3) {

              this.$router.push({
                path: '/activeslide/answerlist',
                query: {
                  startTime:true,
                  actName:true,
                  rewordCount:true,
                  ticket:true,
                  newdtData: newDtData,
                  dataStatus: '1',
                }
              })
            } else if (this.states === 4) {

              this.$router.push({
                path: '/activeslide/answerlist',
                query: {
                  startTime:true,
                  actName:true,
                  rewordCount:true,
                  ticket:true,
                  btnsave:true,
                  newdtData:newDtData,
                  dataStatus: '1',
                }
              })
            }
            else {
              this.$router.push({path: '/activeslide/answerlist',query: {newdtData: newDtData, dataStatus: '1'}})
            }
          })


        }


      },
      copyContent(e, index, templ, states) {
        this.activeId = index
        this.templateUuid = templ
        this.states = states

        if (this.templateUuid == 1) {
          this.$axios({
            method: 'post',
            url: 'http://center.marketing.yunpaas.cn/jgg/activitySetup/copy',
            params: {
              id: this.activeId,
            }
          }).then(res => {
            console.log(res);
            let newJggData = res.data.data
            this.newjggData = newJggData
            if (this.states === 3) {

              this.$router.push({
                path: '/activeslide/activelist',
                query: {
                  startTime:false,
                  actName:false,
                  rewordCount:false,
                  ticket:false,
                  newjggData:newJggData,
                  dataStatus:'1'
                }
              })
            } else if (this.states === 4) {

              this.$router.push({
                path: '/activeslide/activelist',
                query: {
                  startTime:false,
                  actName:false,
                  rewordCount:false,
                  ticket:false,
                  btnsave:false,
                  newjggData: newJggData,
                  dataStatus: '1'
                }
              })
            }
            else {
              this.$router.push({path: '/activeslide/activelist', query: {newjggData: newJggData, dataStatus: '1'}})
            }

          })
        } else if (this.templateUuid == 2) {
          this.$axios({
            method: 'post',
            url: 'http://center.marketing.yunpaas.cn/kj/activitySetup/copy',
            params: {
              id: this.activeId,
            }
          }).then(res => {
            let newKjData = res.data.data
            this.newkjData = newKjData
            if (this.states === 3) {

              this.$router.push({
                path: '/activeslide/bargainlist',
                query: {
                  startTime:false,
                  actName:false,
                  startPrice:false,
                  endPrice:false,
                  newkjData:newKjData,
                  dataStatus: '1'
                }
              })
            } else if (this.states === 4) {

              this.$router.push({
                path: '/activeslide/bargainlist',
                query: {
                  startTime:false,
                  actName:false,
                  startPrice:false,
                  endPrice:false,
                  btnsave:false,
                  newkjData:newKjData,
                  dataStatus:'1'
                }
              })
            }
            else {
              this.$router.push({path: '/activeslide/bargainlist', query: {newkjData: newKjData, dataStatus: '1'}})
            }

          })
        } else if (this.templateUuid == 3) {
          this.$axios({
            method: 'post',
            url: 'http://center.marketing.yunpaas.cn/dt/activitySetup/copy',
            params: {
              id: this.activeId,
            }
          }).then(res => {
            let newDtData = res.data.data
            this.newdtData = newDtData
            if (this.states === 3) {

              this.$router.push({
                path: '/activeslide/answerlist',
                query: {
                  startTime:false,
                  actName:false,
                  rewordCount:false,
                  ticket:false,
                  newdtData: newDtData,
                  dataStatus: '1',
                }
              })
            } else if (this.states === 4) {

              this.$router.push({
                path: '/activeslide/answerlist',
                query: {
                  startTime:false,
                  actName:false,
                  rewordCount:false,
                  ticket:false,
                  btnsave:false,
                  newdtData:newDtData,
                  dataStatus: '1',
                }
              })
            }
            else {
              this.$router.push({path: '/activeslide/answerlist',query: {newdtData: newDtData, dataStatus: '1'}})
            }
          })


        }


      },
      show() {
        $('.publish').css({"display": "none"})
      },
      chain(url) {
        //链接活动发送
        this.input3 = url
        alert(this.input3)
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

            this.handleCurrentChange()
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
      del(ac, te) {//删除活动
        let _this = this
        this.activeId = ac
        this.templateUuid = te
        this.$axios({
          method: 'post',
          url: 'http://center.marketing.yunpaas.cn/center/activity/delete',
          params: {
            activityId: this.activeId,
            templateUuid: this.templateUuid
          },
        }).then(res => {
          this.state.activData = JSON.stringify(res.data.data)
          this.state.Datalist = JSON.stringify(res.data.data.list)//我的活动数据
          let Dlist = this.state.Datalist
          let actD = this.state.activData
          sessionStorage.setItem('Datalist', Dlist)
          sessionStorage.setItem('activData', actD)
          alert("删除成功")
          this.handleCurrentChange()
        }).catch(res => {
          console.log(res)
        })
      },
      copy() {
        var inp = document.getElementById("inp");
        inp.select();
        document.execCommand("Copy", "false", null);
        alert("复制成功")
      },

      handleSizeChange: function (size) {
        this.pagesize = size;

      },
      handleCurrentChange: function (currentPage) {

        var token = sessionStorage.getItem('token')
        this.$axios({
          method: 'post',
          url: 'http://center.marketing.yunpaas.cn/center/activity/findMyActivity?token=' + token,
          params: {
            activityName:this.activename,
            startTime1: this.value4[0] === undefined || null ? '' : this.value4[0].getTime(),
            startTime2: this.value4[1] === undefined || null ? '' : this.value4[1].getTime(),
            endTime1: this.value5[0] === undefined || null ? '' : this.value5[0].getTime(),
            endTime2: this.value5[1] === undefined || null ? '' : this.value5[1].getTime(),
            activityState: this.activeFindState,
            pagesize: this.pagesize,
            pageNum: this.currentPage
          }
        }).then(res => {
          let pageData = res.data.data
          console.log(pageData);
          let Datalist = res.data.data.list
          this.pagesize = pageData.pagesize
          this.currentPage = pageData.pageNum
          this.total = pageData.total
          this.tableData = Datalist
          console.log(this.tableData);
        })
        this.currentPage = currentPage;
      }
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
    height: 150px;
    overflow-x: auto;
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
