<template>
    <div class="main">
        <div class="tops">
            <p>正在参加以下砍价活动...</p>
        </div>
        <div class="content">
        <div class="left-icon">
             <img src="@/assets/iconss.png">
        </div>
        <div class="right-content">
            <p class="title-text">
               {{topdata.name}}
            </p>
            <p class="stock">
                <span class="sold-num">已售{{topdata.sold}}件</span>
                <span class="stock-num">还剩{{topdata.stock}}件</span>
            </p>
            
            <p class="price-div">
                 <span class="low-prices">
                        ￥{{topdata.LowPrice}}
                </span>
                  <span class="prices">
                        ￥{{topdata.price}}
                </span>
            </p>
        </div>

        </div>
        <div class="schedulep-div" v-if="nowprice!=topdata.LowPrice">
            <div class="price-div">
                <p>
                    ￥{{topdata.price}}
                </p>
                <p>
                    原价
                </p>
            </div>
            <div class="schedulep">
                
                <el-progress :text-inside="true" :stroke-width="5" :percentage="topdata.progressData" status="exception"></el-progress>
            </div>
             <div class="price-div">
                     <p class="low-price">
                    ￥{{topdata.LowPrice}}
                </p>
                <p>
                    底价
                </p>
            </div>
        </div>
        <div v-else class="lowPrice-success">
            <div class="center-img-div" :style="{'background-image':'url('+img_back+')'}">
                 <p class="title-tex">
                     恭喜您，已砍到底价
                 </p>
                 <p class="price">
                    ￥{{topdata.LowPrice}}
                 </p>
                   <p class="info">
                该价格将为您保留24小时，请尽快下单购买
            </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
      props:['topdata',"nowprice"],
  data() {
    
    return {
    str:false,
     img_back:require("@/assets/dijias.png")
    };
  },
  mounted() {

  }
};
</script>

<style lang="stylus" scoped>
.schedulep >>> .el-progress-bar__outer {
    overflow: visible;
}

.schedulep >>>.el-progress-bar__innerText {
    margin: -12px 0px;
    position: absolute;
    color: #000;
    z-index: 9999;
    color: #ff0000;
}

.main {
    background: #F2F2F2;

    .schedulep-div {
        height: 1.46rem;
        width: 100%;
        background: #fff;
        display: flex;
        .price-div {
            width: 1.48rem;
            height: 0.66rem;
            position: relative;
            top: 50%;
            margin-top: -0.33rem;
            text-align: center;
            .low-price{
                color #FF4949
            }
        }

        .schedulep {
            flex: 1;
            height: 0.66rem;
            position: relative;
            top: 50%;
            margin-top: -0.33rem;
        }
    }

    .tops {
        height: 0.95rem;
        background: #fff;
            
        p {
            line-height: 0.95rem;
            margin-left: 0.2rem;
            color #000
            font-size 18px
        }
    }

    .content {
        width: 100%;
        height: 2.61rem;
        background: #FFF3F3;
        display: flex;

        .left-icon {
            width: 1.78rem;
            height: 1.78rem;
            background: #ff0000;
            margin-left: 0.32rem;
            position: relative;
            top: 50%;
            margin-top: -0.89rem;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .right-content {
            height: 1.78rem;
            flex: 1;
            position: relative;
            top: 50%;
            margin-top: -0.8rem;

            .title-text {
                margin-left: 0.37rem;
                color #000
                font-weight  bold
                font-size 22px
            }

            .stock {
                margin-top: 0.265rem;
                margin-left: 0.37rem;

                .sold-num {
                    font-size: 14px;
                    color #000
                }

                .stock-num {
                    font-size: 14px;
                    margin-left: 0.25rem;
                    color #000
                }
            }

            .price-div {
                margin-top: 0.3rem;
                margin-left: 0.37rem;

                .prices {
                     color: #9B9B9B;
                    font-size: 16px;
                    margin-left: 0.2rem;
                    text-decoration: line-through;
                }
                .low-prices {
                     color: #ff0000;
                    font-size: 20px;
                     font-weight bold 
                }
            }
        }
    }
}
.lowPrice-success{
    height 2.3rem
    background #fff
    position relative
    .center-img-div{
        width 80%
        height 60%
        position absolute
        top .2rem
        left 50%
        margin-left -40%
        background-repeat no-repeat
        background-size 100%
        .title-tex{
            position absolute
            top .55rem
            width 100%
            text-align center
            font-size 14px
            color #000
        }
           .price{
                    position absolute
                    width 100%
                    top 1rem
                    text-align center
                    color #FF4949
                    font-size 23px
                    font-weight bold 

            }
            .info{
                position absolute
                width 100%
                text-align center
                font-size 13px
                top 1.6rem
            }
    }
}
</style>
