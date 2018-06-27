<template>
<div class="container">
    <iframe :src="url"></iframe>
</div>    
</template>

<script>
export default {
data(){
    return{
        url:""
    }
},
created(){
    this.url = this.$route.query.url
    console.log( this.url)
}
}
</script>

<style>
iframe{
    width: 100%;
      height: 100%;
}
.container{
    height: 100%;
    margin-top: 0px
}
</style>



// WEBPACK FOOTER //
// src/page/shouquanSuccess.vue