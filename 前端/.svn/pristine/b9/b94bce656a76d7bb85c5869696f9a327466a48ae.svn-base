<template>
<div class="mui-content">
<div id="banners" class="mui-col-xs-12">
<img src="../assets/bannner.png">
</div>
<div id="ppp" class="mui-col-xs-12 mui-text-center">
<div id="daojishi" >
<p id="jishi_text">
    <span id="ssp">活动倒计时</span>
    <span class="kk">
        05
    </span>
    天
     <span class="kk">
         38
    </span>
    时
     <span class="kk">
         40
    </span>
    分
     <span class="kk str">
         19
    </span>
    
</p>
<div id="left_p" class="mui-col-xs-6 mui-text-center">
<img src="../assets/guize.png">
<span class="ttex">活动规则</span>
</div>
<div id="right_p" class="mui-col-xs-6 mui-text-center">
    <img src="../assets/lianxi.png">
    <span class="ttex">联系商家</span>
</div>
</div>
</div>
<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<a class="mui-control-item" href="#item1mobile">
				全部商品
			</a>
					<a class="mui-control-item" href="#item2mobile">
				我参与的
			</a>
				
				</div>
				<div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-6"></div>
				<div class="mui-slider-group">
					<div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
						<div id="scroll1" class="mui-scroll-wrapper">
							<div class="mui-scroll">
								<ul class="mui-table-view">
									<li class="mui-table-view-cell" v-for="(item,key) in list" :key="key">
										  <img class="mui-media-object mui-pull-left left_icon" src="../assets/iconss.png">
									
										 <div class="mui-media-body">
              					 {{item.name}}
                			<p class='mui-ellipsis shouchu'>已售出{{item.shouchu}}件</p>
           					 </div>
									</li>
									
								</ul>
							</div>
						</div>
					</div>
					<div id="item2mobile" class="mui-slider-item mui-control-content">
						<div id="scroll2" class="mui-scroll-wrapper">
							<div class="mui-scroll">
								<div class="mui-loading">
									<div class="mui-spinner">
									</div>
								</div>
							</div>
						</div>

					</div>
					
				</div>
			</div>

		
		

			

</div>    
</template>

<script>


import Vue from 'vue'
import '../plugins/sudoku/jquery-1.11.0.js';
// import '../plugins/sudoku/mui.min.js';
export default {
data(){
    return{
		str:"zzzzz",
		list:[
			{
				name:'贝多芬香水啊啊啊啊啊啊啊啊啊啊啊啊',
				shouchu:10,
				shengyu:10,
				price:900,
				pce:900
			},
			{
				name:'贝多芬香水啊啊啊啊啊啊啊啊啊啊啊啊',
				shouchu:10,
				shengyu:10,
				price:900,
				pce:900
			},
			{
				name:'贝多芬香水啊啊啊啊啊啊啊啊啊啊啊啊',
				shouchu:10,
				shengyu:10,
				price:900,
				pce:900
			},
			{
				name:'贝多芬香水啊啊啊啊啊啊啊啊啊啊啊啊',
				shouchu:10,
				shengyu:10,
				price:900,
				pce:900
			}
		]
    }
},
mounted(){
  this.$nextTick(function(){
     
  })
}
}
$(document).ready(function(){
    mui.init()
            mui.init({
				swipeBack: false
			});
			(function($) {
				$('.mui-scroll-wrapper').scroll({
					indicators: true //是否显示滚动条
				});
				// var html2 = '<ul class="mui-table-view"><li class="mui-table-view-cell">第二个选项卡子项-1</li><li class="mui-table-view-cell">第二个选项卡子项-2</li><li class="mui-table-view-cell">第二个选项卡子项-3</li><li class="mui-table-view-cell">第二个选项卡子项-4</li><li class="mui-table-view-cell">第二个选项卡子项-5</li></ul>';
				// var html3 = '<ul class="mui-table-view"><li class="mui-table-view-cell">第三个选项卡子项-1</li><li class="mui-table-view-cell">第三个选项卡子项-2</li><li class="mui-table-view-cell">第三个选项卡子项-3</li><li class="mui-table-view-cell">第三个选项卡子项-4</li><li class="mui-table-view-cell">第三个选项卡子项-5</li></ul>';
				// var item2 = document.getElementById('item1mobile');
				// var item3 = document.getElementById('item2mobile');
				// document.getElementById('slider').addEventListener('slide', function(e) {
				// 	if (e.detail.slideNumber === 1) {
				// 		if (item2.querySelector('.mui-loading')) {
				// 			setTimeout(function() {
				// 				item2.querySelector('.mui-scroll').innerHTML = html2;
				// 			}, 500);
				// 		}
				// 	} else if (e.detail.slideNumber === 2) {
				// 		if (item3.querySelector('.mui-loading')) {
				// 			setTimeout(function() {
				// 				item3.querySelector('.mui-scroll').innerHTML = html3;
				// 			}, 500);
				// 		}
				// 	}
				// });
				var sliderSegmentedControl = document.getElementById('sliderSegmentedControl');
				$('.mui-input-group').on('change', 'input', function() {
					if (this.checked) {
						sliderSegmentedControl.className = 'mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-segmented-control-' + this.value;
						//force repaint
						sliderProgressBar.setAttribute('style', sliderProgressBar.getAttribute('style'));
					}
				});
			})(mui);


})
</script>

<style>
.shouchu{
	font-size: 14px;
color: #000;
margin-left: 5px;

}
.names{
	float: left;
	color: #000
}
	.mui-control-content {
				background-color: white;
				min-height: 215px;
			}
			.mui-control-content .mui-loading {
                margin-top: 50px;
              
			}
			.left_icon{
	width: 80px !important;
	height: 80px !important;
}
.mui-table-view-cell{
	line-height: 30px;
}
</style>

<style scoped>

.mui-table-view .mui-media-object{
	max-width: none;
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
    color:#ff0000;
}
#sliderProgressBar{
    background:#ff0000
}
.mui-active{
    line-height:50px;

}
#sliderSegmentedControl{
    background:#fff;
    margin-top:15px;
    height: 50px;
}
.ttex{
    font-size: 14px;
    color: #ff4949
}
#ppp{
background:#fff;
height: 100px;
}
#left_p img{
    width: 15px;
    height: 15px;
    position: relative;
    top: 3px;
}
#right_p img{
     width: 15px;
    height: 15px;
    position: relative;
    top: 3px;
}
#left_p{
    float: left;
    height: 30px;
    line-height: 45px;
    
}
#right_p{
    float: left;
        height: 30px;
         line-height: 45px
}
.str{
    opacity: 0.5;
    padding: 1.5px !important
}
#ssp{
display: inline-block;
width: 80px;
}
.kk{
padding: 1px;

text-align: center;
background: #000;
position: relative;

color: #fff
}
#jishi_text{
    font-size: 14px;
    margin-left: 25px;
  padding-top: 10px;
}
#daojishi{
    height: 80px;
    width: 95%;
    background-image: url("../assets/bj.png");
    background-repeat: no-repeat;
    background-size: 100%;
    float: none;
  position: absolute;
left: 50%;
margin-left:-47.5%;
    top:15px;

}
#banners{
height: 160px
}
#banners img{
    width: 100%;
    height: 100%;
}
</style>
