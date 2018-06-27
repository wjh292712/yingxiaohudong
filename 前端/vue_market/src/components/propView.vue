<template>
  
		<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="活动说明" name="first">
        <ul id="uuls">
            <li >
                <p>活动时间</p>
                <ul>
                    <li>xxxxxxx-xxxxxxxx</li>
                </ul>
            </li>
            <li>
               <p> 活动奖品</p>
                <ul>
                    <li>100元话费卷</li>
                    <li>1G流量卷</li>
                </ul>
            </li>
            <li>
               <p> 活动规则</p>
                <ul>
                    <li>xxxxxxxxx</li>
                </ul>
            </li>
            <li>
               <p> 主办单位</p>
                <ul>
                        <li>xxxxx</li>
                </ul>
            </li>
        </ul>

    </el-tab-pane>
    <el-tab-pane label="我的奖品" name="second">
        <div id="price">
            ￥<span id="spp">100</span>元话费卷
            <p>1999-01-01</p>
        </div>

    </el-tab-pane>
    
  </el-tabs>

</template>
  <script src="/static/js/mui.min.js"></script>
    <script type="text/javascript" charset="utf-8">
  
  </script>
<script>
export default {
  props:{
      taburl:{
          type:String,
          required:true
      }
  },
    data(){
        return{
            activeName:this.taburl

        }
    },



  methods: {

      first(){
           this.activeName="first"
      },
      second(){
this.activeName="second"
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    mounted(){
        alert(this.taburl)
        
    }
};

 
   
</script>

<style>
#spp{
    font-size: 22px;
    color: #000
}
#price{
    width: 98%;
    height: 100px;
    border: 1px solid #bebebe;
    text-align: center;
    padding-top: 30px
}
#uuls li {
line-height: 25px
}
#uuls li p{
    color: #000;
    font-size: 16px
}
</style>
