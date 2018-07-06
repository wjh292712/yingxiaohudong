<template>
    <div class="main">
        <div class="bottom-list">
      
      <div class="page-navbar">  
    <div class="page-title">&nbsp;</div> 
      </div> 
    <!-- navbar -->  
    <mt-navbar class="page-part" v-model="selected">  
      <mt-tab-item id="1" class="tts">帮砍记录</mt-tab-item>  
      <mt-tab-item id="2" class="tts">排行榜</mt-tab-item>  
    </mt-navbar>  
  
    <!-- tabcontainer -->  
    <mt-tab-container v-model="selected" swipeable>  
        
      <mt-tab-container-item id="1">  
          <ul class="uls">
              <li class="border-bottom title-li" >
                  <div class="title-info-1">
                      <span>已有<span class="num">{{historyList.length}}</span>位好友帮助砍价</span>
                  </div>
              </li>
              <li class="border-bottom item" v-for="(item,key) in historyList" v-if="historyList.length!=0">
                <div  class="left-img">
                <img  :src="item.wxUserLogo">
                </div>
                 <div class="right-content">
                    <p class="username">{{item.wxNickName}}</p>
                    <p class="bargain-price">
                        帮砍{{item.price}}元
                    </p>
                 </div>
              </li>
              <!-- <li v-else class="emtry">
                  <p>
                        暂无数据
                  </p>
               
              </li> -->
          </ul>
      </mt-tab-container-item>  


      <mt-tab-container-item id="2" >  
        <ul class="uls">
            <li class="border-bottom title-li">
                  <div class="title-info">
                      <span>正在砍价中的玩家排名（不含砍价完成者）</span>
                  </div>
              </li>
              <li class="border-bottom item"  v-for="(item,key) in leaderboardlist"  v-if="leaderboardlist.length!=0">
                <div  class="left-img">
                <img  :src="item.wxUserLogo">
                </div>
                 <div class="right-content">
                    <p class="bargain-price-1">
                        现价{{(item.nowPrice)}}元
                    </p>
                 </div>
              </li>
              <!-- <li v-else  class="emtry">
                  <p>
                        暂无数据
                  </p>
              </li> -->
          </ul>
      </mt-tab-container-item>  
    </mt-tab-container> 
  </div>  

         </div>
       
        
    </div>
</template>

<script>
export default {
  props: ["historyList", "leaderboardlist"],
  data() {
    return {
      selected: "1"
    };
  }
};
</script>

<style lang="stylus" scoped>
.emtry {
    height: 0.4rem;
    text-align: center;

    p {
        text-align: center;
        line-height: 0.4rem;
    }
}

.num {
    color: #ff0000;
}

.bottom-div {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 0.95rem;
    z-index: 9999;

    .btn-bottom-left {
        height: 100%;
        width: 50%;
        background: #81C9FE;
        color: #fff;
        float: left;
        border: none;
        border-radius: 0px;
    }

    .btn-bottom-right {
        width: 50%;
        height: 100%;
        background: #FF4949;
        color: #fff;
        float: left;
        border: none;
        border-radius: 0px;
    }
}

.mint-tab-container {
    background: #fff;
    min-height: 4rem;
}

.page-navbar {
    height: 0.2rem;
}

.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #ff0000;
    z-index: 99;
}

.uls {
    .title-li {
        height: 0.8rem;
        text-align: center;

        .title-info {
            width: 90%;
            height: 0.55rem;
            background: #F2F2F2;
            border-radius: 100px;
            margin: 0.3rem auto;

            span {
                display: inline-block;
                line-height: 0.55rem;
            }
        }

        .title-info-1 {
            width: 95%;
            height: 0.55rem;
            margin: 0.3rem auto;

            span {
                display: inline-block;
                line-height: 0.55rem;
            }
        }
    }

    .item {
        height: 1.6rem;
        display: flex;

        .left-img {
            height: 1.16rem;
            width: 1.16rem;
            float: left;
            background: #bebebe;
            margin-top: 0.2rem;
            margin-left: 0.3rem;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .right-content {
            flex: 1;

            .username {
                margin-left: 0.2rem;
                height: 30px;
                position: relative;
                top: 50%;
                margin-top: - 25px;
            }

            .bargain-price {
                float: right;
                margin-right: 0.2rem;
                color: #ff0000;
                height: 30px;
                position: relative;
                top: 50%;
                margin-top: - 25px;
                font-size: 0.3rem;
            }

            .bargain-price-1 {
                float: right;
                margin-right: 0.2rem;
                color: #ff0000;
                height: 30px;
                position: relative;
                top: 50%;
                margin-top: - 10px;
                font-size: 0.3rem;
            }
        }
    }
}

body, html {
    width: 100%;
    height: 100%;
}

.main {
    height: 45%;
}

.bottom-list {
    height: 100%;
}
</style>
