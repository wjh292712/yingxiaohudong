<template>
    <div class="mui-content">
        <div id="ttls" class="mui-col-xs-11">
            <p id="pp">
               {{pkname}}
            </p>
            <p id="time_date">
                   {{activitytime}}
            </p>
        </div>
        <button type="button" class="mui-btn mui-btn-danger mui-col-xs-11" id="duihuan">立即兑换</button>
        <div id="list_desc">
               <ul>
                   <li>
                       <label>兑奖说明:</label>
                       <span>{{shuoming==null?"暂无数据":shuoming}}</span>
                   </li>
                    <li>
                       <label>门店地址:</label>
                       <span>{{mendianAddress==null?"暂无数据":mendianAddress}}</span>
                   </li>
                    <li>
                       <label>客服电话:</label>
                       <span>{{phone==null?"暂无数据":phone}}</span>
                   </li>
               </ul>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    props:[
        "pkname",
        "activitytime",
        "shuoming",
        "mendianAddress",
        "phone"
    ],
data(){
    return{

    }
}
}
</script>

<style scoped>
#time_date{
    font-size: 12px;
    font-size: 16px
}
#list_desc ul li{
    line-height: 25px
}
#list_desc{
    padding: 10px;
    margin-left: 10px;
    margin-bottom: 20px
}
#duihuan{
    background: #FF2437;

    height: 42px;
    border-radius: 100px;
    margin-left: 10px;
    margin-right: auto;
    margin-top: 30px
}
#huafei{
    font-size: 30px;
    color: #000;

}
#pp{
    margin-top: 30px;
    font-size: 20px;
    color: #000
}
#ttls{
    height: 110px;
    background: #fff;
    border: 1px solid #e8e8e8;
    text-align: center;
    margin: auto auto;
}
</style>
