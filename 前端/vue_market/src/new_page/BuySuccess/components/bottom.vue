<template>
    <div class="mains">
        <div class="contents">
            <div class="div-tit">
            <span class="split"></span>
            <span class="recommend-text-tit">推荐购买奖品</span>
            </div>
            <div class="bottom-list">
                <ul class="ul-arr">
                    <li v-for="(item,key) in 4">
                        <div class="img-div">
                        <img src="@/assets/phone.png">
                        </div>
                         <p class="mall-desc-text">
                             Apple苹果 iPhoneX (A1865)
                            手机 深空灰色 全网通 256GB<br/>
                          <span class="price-div">
                            <span class="lowprice">￥100</span>
                            <span class="price">￥1000</span>    
                        </span>
                        </p>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data(){
    return{

    }
}
}
</script>

<style lang="stylus" scoped>

.mains{
    width 90%
    .contents{
        height 450px
        width 100%
        background #F2F2F2 
        .div-tit{
            height 60px
           .split{
              width: 5px;
              height: 15px;
              display: inline-block;
              background: #FC7132;
              position: relative;
              top: 25px;
              margin-left 80px
           }
           .recommend-text-tit{
               position relative
               top 23px
           }
        }
        .bottom-list{
            width 100%
            height 50px
            position relative
            left 50%
            margin-left -40%
            .ul-arr{
             width 100%   
            }
            .ul-arr li{
              width 202px
              height 315px
              margin-left 40px
              float left
              text-align center
              position relative
              border 1px solid #E8E8E8
              .img-div{
                  width 197px
                  height 200px
                  position absolute
                  left 50%
                  margin-left -97.5px
                  background #fff
                  img{
                      margin-top 20px
                  }
              }
              .mall-desc-text{
                 width 197px
                 position absolute
                 top 220px
                 left 50%
                 margin-left -97.5px

              }
              .price-div{
                  width 188px
                  position absolute
                  height 40px
                  left 50%
                  margin-left -94px
                  text-align left
                  .lowprice{
                      margin-left 15px
                      line-height 40px
                      color #ff0000
                      font-size 16px
                  } 
                  .price{
                      margin-left 15px
                      font-size 16px
                      text-decoration: line-through;
                  }
              }
            }
            .ul-arr li:first-child{
                margin-left 0px
            }
        }
    }
}
</style>
