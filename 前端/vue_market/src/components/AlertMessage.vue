<template>
    <div class="main">
            <div class="mask">
               
                <div class="content">
                      <span class="colse" @click="close" >x</span>
                    <slot></slot>
                </div>
            </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close-flag", false);
    }
  }
};
</script>

<style lang="stylus" scoped>
.mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);

    .title {
        height: 0.4rem;
    }

    .content {
        background: #ffffff;
        width: 90%;
        height: auto;
       
        margin: 2.8rem auto;
        position: relative;

        .colse {
            font-size: 0.7rem;
            color: #ffff;
            position: absolute;
            top: -1rem;
            right: 0;
            width: 0.7rem;
            height: 0.7rem;
            text-align: center;
            border: 1px solid #fff;
            border-radius: 50%;
            line-height: 0.6rem;
        }
    }
}

.main {
    position: fixed;
    z-index: 99999;
    width: 100%;
    height: 100%;
}
</style>



// WEBPACK FOOTER //
// src/components/AlertMessage.vue