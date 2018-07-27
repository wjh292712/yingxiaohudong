<template>
<div class="main">
    <div class="content" v-show="falgs">
        <div class="top">
          <div class="lefts" >
              <div class="title-text" v-if="cityData.length!=0">
                <span class="split">
                </span>
                <span class="split-text">
                    粉丝性别
                </span>
              </div>
              <div v-else class="lef">
                  <p>暂无数据</p>
              </div>
              <div id="top-left" style="width: 550px;height:350px;"></div>
       </div>   
       <span class="sps"></span>
       <div class="rights">
           <div class="title-text"  v-if="devType.length!=0">
                <span class="split">
                </span>
                <span class="split-text">
                    设备类型
                </span>
              </div>
               <div v-else class="lef">
                  <p>暂无数据</p>
              </div>
              <div id="top-right" style="width: 550px;height:350px;"></div>
       </div>
        </div>
   <div class="bottom">
         <div class="lefts">
             <div class="title-text" v-if="cityData.length!=0">
                <span class="split">
                </span>
                <span class="split-text">
                  省市分布
                </span>
              </div>
               <div v-else class="lef">
                  <p>暂无数据</p>
              </div>
              <div id="bottom-left" style="width: 550px;height:350px;"></div>
       </div>   
        <span class="sps"></span>
       <div class="rights">
           <div class="title-text" v-if="provinceData.length!=0">
                <span class="split">
                </span>
                <span class="split-text">
                    城市分布
                </span>
              </div>
                <div v-else class="lef">
                  <p>暂无数据</p>
              </div>
          <div id="bottom-right" style="width: 550px;height:350px;"></div>
       </div>
   </div>
    </div>
</div>    
</template>

<script>
import axios from "axios";
import pub from "static/public.js";
export default {
  data() {
    return {
      activityId: null,
      templateUuid: null,
      falgs: false,
      provinceData: [],
      sex: [],
      cityData: [],
      devType: [],
      sexs: [],
      cityName:[],
      provinceDataName:[]
    };
  },
  mounted() {
    this.$bus.$on("chartdata", (activityId, templateUuid) => {
      this.falgs = true;
      this.$axios({
        method: "get",
        url: pub.getFanData,
        params: {
          token: sessionStorage.getItem("token"),
          activityId: activityId,
          templateId: templateUuid
        }
      }).then(res => {
        if (res.data.status) {
          console.log(res.data.data.provinceData);
          for (let key in res.data.data.provinceData) {
            this.provinceData.push({
              value: res.data.data.provinceData[key].qty,
              name: res.data.data.provinceData[key].devProvince
            });
            this.provinceDataName.push({
              name:res.data.data.provinceData[key].devProvince
            })
          }
          this.sex = res.data.data.sex;
          for (let key in res.data.data.sex) {
            if (res.data.data.sex[key].sex == "1") {
              this.sexs[key] = "男";
            } else if (res.data.data.sex[key].sex == "0") {
              this.sexs[key] = "未知";
            } else {
              this.sexs[key] = "女";
            }
            this.sex.push({
              value: res.data.data.sex[key].qty,
              name: this.sexs[key]
            });
          }
           for (let key in res.data.data.cityData) {
              this.cityData.push({
                  value:res.data.data.cityData[key].qty,
                  name:res.data.data.cityData[key].city
              })
          this.cityName.push({
            name:res.data.data.cityData[key].city
          })
            }
          this.devType = res.data.data.devType;
          this.top_left();
          this.top_right();
          this.bottom_left();
          this.button_right();
        }
      });
    });
  },
  methods: {
    button_right() {
      let myChart = echarts.init(document.getElementById("bottom-right"));
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{d}%"
        },
        legend: {
          itemGap: 30,
          y: "top",
          orient: "horizontal",
          x: "center",
          data: this.provinceDataName
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              normal: {
                //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                color: function(params) {
                  // build a color map as your need.
                  var colorList = [
                    "#6098B3",
                    "#251EE9",
                    "#9C27B0",
                    "#15A7D8",
                    "#FFC400"
                  ];
                  return colorList[params.dataIndex];
                } //以下为是否显示，显示位置和显示格式的设置了
              }
            },
            label: {
              normal: {
                position: ["50%", "50%"],
                show: true,
                position: "outer",
                formatter: "{b}" //百分比显示
              },

              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 5,
                shadowOffsetX: 100
              }
            },
            //'河北','山东','湖南','广东','新疆'
            data: this.provinceData
          }
        ]
      };
      myChart.setOption(option);
    },
    bottom_left() {
      let myChart = echarts.init(document.getElementById("bottom-left"));
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{d}%"
        },
        legend: {
          itemGap: 30,
          icon: "circle",
          y: "top",
          orient: "horizontal",
          x: "center",
          data:this.cityName
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              normal: {
                //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                color: function(params) {
                  // build a color map as your need.
                  var colorList = [
                    "#6098B3",
                    "#251EE9",
                    "#9C27B0",
                    "#15A7D8",
                    "#FFC400"
                  ];
                  return colorList[params.dataIndex];
                } //以下为是否显示，显示位置和显示格式的设置了
              }
            },
            label: {
              normal: {
                position: ["50%", "50%"],
                show: true,
                position: "outer",
                formatter: "{b}" //百分比显示
              },

              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 5,
                shadowOffsetX: 100
              }
            },
            data: this.cityData
          }
        ]
      };
      myChart.setOption(option);
    },
    top_right() {
      let myChart = echarts.init(document.getElementById("top-right"));
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{d}%"
        },
        legend: {
          itemGap: 40,
          icon: "circle",
          y: "top",
          orient: "horizontal",
          x: "center",
          data: ["苹果", "华为", "VIVO", "OPPO", "三星"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              normal: {
                //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                color: function(params) {
                  // build a color map as your need.
                  var colorList = [
                    "#4CAF50",
                    "#2196F3",
                    "#795548",
                    "#8BC34A",
                    "#CDDC39"
                  ];
                  return colorList[params.dataIndex];
                } //以下为是否显示，显示位置和显示格式的设置了
              }
            },
            label: {
              normal: {
                position: ["50%", "50%"],
                show: true,
                position: "outer",
                formatter: "{b}" //百分比显示
              },

              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 5,
                shadowOffsetX: 100
              }
            },
            data: this.devType
          }
        ]
      };
      myChart.setOption(option);
    },
    top_left() {
      let myChart = echarts.init(document.getElementById("top-left"));
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{d}%"
        },
        legend: {
          icon: "circle",
          itemGap: 60,
          y: "top",
          orient: "horizontal",
          x: "center",
          data: ["男", "女"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              normal: {
                //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                color: function(params) {
                  // build a color map as your need.
                  var colorList = ["#E91E63", "#CDDC39"];
                  return colorList[params.dataIndex];
                } //以下为是否显示，显示位置和显示格式的设置了
              }
            },
            label: {
              normal: {
                position: ["50%", "50%"],
                show: true,
                position: "outer",
                formatter: "{b}"
              },

              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 5,
                type: "solid",
                shadowOffsetX: 100
              }
            },

            data:this.sex
          }
        ]
      };

      myChart.setOption(option);
    }
  }
};
</script>

<style lang="stylus" scoped>
.lef{
         position relative
         top 50%
         font-size 20px
        }
.main {
  height: 100%;
  width: 100%;

  .content {
    height: 850px;
    width: 100%;

    .top {
      height: 48%;
      width: 100%;

      .lefts {
        width: 49.9%;
        float: left;
        height: 100%;
        text-align: center;
        .title-text {
          height: 70px;
          text-align: left;

          .split {
            width: 5px;
            height: 15px;
            display: inline-block;
            background: #FC7132;
            position: relative;
            top: 20px;
          }

          .split-text {
            margin-left: 3px;
            position: relative;
            top: 18px;
            color: #00;
            font-weight: bold;
          }
        }
      }

      .rights {
        width: 50%;
        float: left;
        height: 100%;
        text-align: center;

        .title-text {
          height: 70px;
          text-align: left;

          .split {
            width: 5px;
            height: 15px;
            display: inline-block;
            background: #FC7132;
            position: relative;
            top: 20px;
          }

          .split-text {
            margin-left: 3px;
            position: relative;
            top: 18px;
            color: #00;
            font-weight: bold;
          }
        }
      }
    }

    .bottom {
      height: 45%;
      width: 100%;

      .lefts {
        width: 49.9%;
        height: 100%;
        float: left;
        text-align: center;

        .title-text {
          height: 70px;
          text-align: left;

          .split {
            width: 5px;
            height: 15px;
            display: inline-block;
            background: #FC7132;
            position: relative;
            top: 20px;
          }

          .split-text {
            margin-left: 3px;
            position: relative;
            top: 18px;
            color: #00;
            font-weight: bold;
          }
        }
      }

      .rights {
        width: 50%;
        height: 100%;
        float: left;
        text-align: center;

        .title-text {
          height: 70px;
          text-align: left;

          .split {
            width: 5px;
            height: 15px;
            display: inline-block;
            background: #FC7132;
            position: relative;
            top: 20px;
          }

          .split-text {
            margin-left: 3px;
            position: relative;
            top: 18px;
            color: #00;
            font-weight: bold;
          }
        }
      }
    }
  }
}

.sps {
  height: 60%;
  width: 1px;
  display: inline-block;
  background: #f2f2f2;
  float: left;
  position: relative;
  top: 80px;
}
</style>
