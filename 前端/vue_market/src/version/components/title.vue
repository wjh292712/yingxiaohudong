<template>
<div class="main">
    <div class="tops">
   <p class="p-titles">
       {{text}}
</p>
    </div>
 
    </div>    
</template>

<script>
export default {
    data(){
        return{
            text:""
        }
    },
    mounted(){
         this.$bus.on("titleName", content => {
      this.text = content;
    });
    }

};
</script>

<style lang="stylus" scoped>
.tops {
    width: 90%;
    margin-left: 118px;
    .p-titles {
        font-size: 18px;
        color: #000;
        padding-top: 20px;
    }
}
</style>
