<template>
<ul class="h45">
<li class="left" >
<p class="row-box">
<select id="workergroupid" v-on:change="choosegroup($event.target)" class="form-control w200">
<option value="">请选择字段</option>
<option v-for="item in grouplist" v-bind:value="item.group_id">{{ item }}</option>
</select>
</p>
</li>
<li class="left">
<p class="row-box">
<select id="workerroleid" name="workerroleida"  class="form-control w200" >
<option>请选择要查询的内容</option>
<option v-for="roleitem in tableData" v-bind:value="roleitem.role_id">{{roleitem.activityName}}
{{roleitem.endData}}
</option>
<option v-for="roleitem in tableData" v-bind:value="roleitem.role_id">
{{timestampToTime(roleitem.startDate)}}
</option>
<option v-for="roleitem in tableData" v-bind:value="roleitem.role_id">
{{timestampToTime(roleitem.endDate)}}
</option>
<option v-for="roleitem in tableData" v-bind:value="roleitem.role_id">
{{state(roleitem.stateForMyActivity)}}
</option>
</select>
</p>
</li>
</ul>
</template>
<!--<div class="active_inp">-->
<!--<el-select v-model="value4" clearable placeholder="请选择" name="province" id="province" v-on:change="choosegroup($event)" >-->
<!--<el-option-->
<!--v-for="item in options"-->
<!--:key="item.value"-->
<!--:label="item.label"-->
<!--:value="item.value">-->
<!--</el-option>-->
<!--</el-select>-->
<!---->
<!--<el-select v-model='value5' clearable placeholder="请输入要查询的内容" id="select_id">-->
<!--<el-option-->
<!--v-for="item in tableData"-->
<!--:key="item.value"-->
<!--:label="item.activityName"-->
<!--:value="item.value">-->
<!--</el-option>-->
<!--<el-option-->
<!--v-for="item in tableData"-->
<!--:key="item.value"-->
<!--:label="timestampToTime(item.startDate)"-->
<!--:value="item.value">-->
<!--</el-option>-->
<!--<el-option-->
<!--v-for="item in tableData"-->
<!--:key="item.value"-->
<!--:label="timestampToTime(item.endDate)"-->
<!--:value="item.value">-->
<!--</el-option>-->
<!--<el-option-->
<!--v-for="item in tableData"-->
<!--:key="item.value"-->
<!--:label="state(item.stateForMyActivity)"-->
<!--:value="item.value">-->
<!--</el-option>-->
<!--</el-select>-->
<!--<el-button class="btn_s">查询</el-button>-->
<!--</div>-->
<script>
  export default {
    data(){
      return{
        groupid:"",
        grouplist:['活动名称','活动开始时间','活动结束时间','活动状态'],
        pidlist:[],
        rolelist:[]
      }
    },
    methods:{
      choosegroup(obj){

        var that=this;
        this.groupid=obj.value;
        /*this.$options.methods.chooserole(this.groupid);
        this.$options.methods.choosepid(this.groupid);*/
        //this.$options.methods.choosepid(this.groupid);
        //console.log(this.pidlist);
        //
        // var sendData = {};
        // var jsonData = {};
        // sendData.url ="www.baidu.com";
        // jsonData.token = "1111111111111111";
        // jsonData.phone = "111111111111";
        // jsonData.group_id=this.groupid;
        // sendData.data = jsonData;
        $.ajax({
          url:"http://www.baidu.com/abc.php",
          data:sendData,
          dataType:"Json",
          success:function(re){
            if(re.status==1){
              var abc=re.data;
              for(var $i=0;$i<abc.length;$i++){
                that.rolelist.push(abc[$i]);
              }
            }else{
              layer.msg(re.msg);
            }
          }
        });
        if(obj.value){

          var vm=this;
          var sendData = {};
          var jsonData = {};
          sendData.url ="www.baidu.com";
          jsonData.token = "1111111111111111";
          jsonData.phone = "111111111111";
          jsonData.group_id=this.groupid;
          sendData.data = jsonData;
          $.ajax({
            url:"http://www.baidu.com/abc.php",
            data:sendData,
            dataType:"Json",
            success:function(re){
              if(re.status==1){
                var abc=re.data;
                for(var $i=0;$i<abc.length;$i++){
                  vm.pidlist.push(abc[$i]);
                }
              }else{
                layer.msg(re.msg);
              }
            }
          });
        }else{
          console.log("错误");
        }




      },
    },}
</script>

<style>

</style>

