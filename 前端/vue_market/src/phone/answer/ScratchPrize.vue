<template>
   <div class="mui-content main_box" :style="{'background-image':'url('+background_img+')'}" >
       <div class="bodys">
   <div class="box">
	
	<div class="content">
		<div id="mask_img_bg" class="mui-text-center"><p id="ttle">{{text}}</p></div>
		<img id="redux" src="@/assets/mask-img.jpg" />
	</div>
</div>
       </div>
       <p id="gua_text">
           <span>刮一刮，开奖</span>
       </p>
       </div> 
</template>

<script>
import "@/plugins/sudoku/jquery.eraser.js";
export default {
data(){
    return{
        background_img:require("@/assets/bks.png"),
        text:""
    }
   
},
mounted(){
    let tt = this
    $("html").css("font-size","21.4375px")
    if(sessionStorage.getItem("tts")=="1"){
        sessionStorage.setItem("tts","2")
        location.reload();
    }
  let text =this.$route.query.tex
$(window).load(function  () {
        
   	$('#redux').eraser( {
			size: 20,   //设置橡皮擦大小
			completeRatio: .6, //设置擦除面积比例
			completeFunction: showResetButton   //大于擦除面积比例触发函数
		});
		function showResetButton(){
			$(".main_box .show,.main_box .mask").fadeIn(300)
		}
		$(".main_box .mask,.main_box .show .close,.main_box .show .btn").click(function  () {
			$(".main_box .show,.main_box .mask").fadeOut(300)
        })
        tt.text = text
    })
}
}
	
</script>
<style>
#gua_text{
  font-family: MyNewFont;
  font-size: 40px;
  position: relative;
  bottom:5rem;
  text-align:center;
  color:#ba451a
}
@font-face {
  font-family: "MyNewFont"; /*字体名称*/
  src:  url("../../font/方正卡通简体.ttf"); /*字体源文件*/
}
</style>


<style scoped>

body,html{
    width: 100%;
    height: 100%;
  
}
#ttle{
    position: absolute;
    width: 80%;
    top:46px;
    font-size:20px;
    left: 50%;
    margin-left:-40%

}
.bodys{
    background-size: 100%;
    height: 100%;
    position: relative;
    text-align: center
}
.center_div img{
    width: 100%;
    height: 100%;
}
.center_div{
    width: 100%;
    height: 9.14rem;
    background: #bebebe;
    position: absolute;
    top:9.9rem;
   
}

</style>
