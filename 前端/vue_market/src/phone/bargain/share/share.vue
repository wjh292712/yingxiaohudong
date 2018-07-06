<template>
<div class="mui-content">
    
    <div id="dvs">
                <h3 id="h3">长按以下二维码可分享</h3>
            <iframe id="ffm" :src="url">

            </iframe>
    </div>
</div>    
</template>

<script>
export default {
  data() {
    return {
      url:
        "http://center.marketing.yunpaas.cn//kj/runingPlayHelp/MakeImg?goodsActivityId=" +
        this.$route.query.id
    };
  },
  mounted() {
          sessionStorage.setItem("tag", 10);
  }
};
</script>

<style scoped>
#dvs {
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
}
#h3{
    margin-top: 15px;
}
#ffm {
  width: 80%;
  height: 70%;
  border: none;
position: absolute;
left: 50%;
margin-left: -30%;
margin-top: 50px
}
</style>
