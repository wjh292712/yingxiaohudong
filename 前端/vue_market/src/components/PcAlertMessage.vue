<template>
    <div class="main">
            <div class="mask">
               
                <div class="content">
                    <div class="title-view">
                        <span  class="title" >{{name}}</span>
                    <span class="colse" @click="close" >x</span>
                    </div>
                   
                    <slot></slot>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    props:["name"],
  data() {
    return {

    };
  },
 
  methods: {
    close() {
 
      this.$emit("close-flag", false);
    }
  }
};
</script>


<style lang="stylus" scoped>
.title{
    display inline-block
    float left
    width 93%
    padding-left 30px
    line-height 50px
    font-size 18px
    color #000
    text-align center
}
.mask {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow hidden
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);

    .title {
        height: 0.4rem;
    }

    .content {
        background: #ffffff;
        width: 450px;
        height: auto;
        margin: 2.8rem auto;
        position: relative;
        .title-view{
            height 50px
            background #F2F2F2
        }
        .colse{
            float right
            font-size 30px
            margin-right 10px
            cursor pointer
        }

    }
}

.main {
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100%;
    overflow hidden
}
</style>
