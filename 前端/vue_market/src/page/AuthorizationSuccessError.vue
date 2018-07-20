<template>
<div>

<div class="main">
			
			<div class="success-div">
				<img src="@/assets/error.png" />
				<p>授权失败</p>
			</div>
				<div class="renzheng-div">
					<div class="left-div"><img src="@/assets/images/rengzheng_left.png" class="left"/>
						
					</div>
						<div class="right-div">
							<img src="@/assets/images/renzhneg_right.png"  class="right"/>
						</div>
					
				</div>
				<p class="p-bottom">住：由于微信接口问题，目前只有认证的服务号方可开通以上账号</p>
				<div class="back-div">
					<button class="back" @click="exit">返货管理平台</button>
				</div>
				
		</div> 
</div>
</template>

<script>

export default {
data(){
    return{}
},
mounted(){
    $(".header_wrap").hide()
	$(".app_left").hide()
	this.$emit("hides",false)
},
methods:{
    exit(){
        this.$router.push("mainPage")
    }
}
}
</script>

<style scoped>

.main{
    position: relative;
    top: 0
}
.success-div p{
			margin-top: 29px;
			font-size: 20px;
		}
		.success-div{
			width: 100%;
			text-align: center;
			padding-top: 40px
		}
		.success-div img{
			width: 55px;
			height: 55px;
		}
		.renzheng-div{
			margin-top: 20px;
		
			width:600px;
			position: relative;
			left: 50%;
			height: 300px;
			margin-left: -188.5px;
		}
		
		.right{
		margin-right: 30px;	
		}
		.left-div{
			float: left;
			width: 230px;
		}
		.right-div{
		float: left;
		}
		.p-bottom{
			text-align: center;
			color:#FF0404;
            height: 40px;
		}
		.back{
			width: 129px;
			height: 34px;
			border: 1px solid #9B9B9B;
			background: #fff;
			border-radius: 5px;
			margin: auto auto;
            cursor: pointer;
		}
		.back-div{
			text-align: center;
		}
</style>



// WEBPACK FOOTER //
// src/page/AuthorizationSuccessError.vue