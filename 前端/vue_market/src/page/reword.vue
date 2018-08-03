<template>
  <div class="reword_wrap">
    <div class="reword_con">
      <el-form ref="form" :model="form" label-width="82px">
        <div class="reword_type">
          <el-tabs tag="ul" v-model="activeName" @tab-click="handleClick" id="tablist" style="margin-bottom: 20px;margin-left: 20px">
            <!--奖品一 -->
            <el-tab-pane tag='li' label="奖品一" name="first" data-idx="0">
              <div class="title_Info">
                <i class="iconfont icon-icon"></i>
                <span>活动发布后，奖品信息不能更改；该活动建议设置7~8个奖项，未设置的奖项将由空奖替代。</span>
              </div>
              <el-form-item label="奖品来源 :">
                <el-radio-group v-model="radio1"  @change="selValue">
                  <el-radio :disabled="ticket" label="1">自家商品</el-radio>
                  <el-radio :disabled="ticket" label="2">平台奖品库</el-radio>
                </el-radio-group>
                <a href="javascript:;">去奖品商城购买</a>
              </el-form-item>
              <el-form-item label="奖品类型 :">
                <el-select
                  v-model="form.region1"
@change="selelteType"
                  placeholder="请选择奖品类型">
                  <el-option v-for="(items,index) in reword_type1" :label="items.name" :value="items.id"
                             :key="items.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="奖品内容 :" v-show="rewordConent">
                <el-select v-model="reword_region" @change="updates(reword_region)" style="width: 300px" placeholder="请选择奖品内容">
                  <el-option v-for="(item,index) in reword_content" :label="item.goods_name" :value="item"
                             :key="item.goods_id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="奖品名称 :">
                <el-input maxlength="15" style="width: 300px" :disabled="actName" v-model="form.name1_1" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                  list-type="picture-card"
                  :show-file-list="false"
                  :on-remove="handleRemove"
                  :on-success="handleAvatarSuccess1"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imgData1" :src="imgData1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span class="load_text">奖品图片将在九宫格中显示</span>
                <span>点击图片重新上传即可更换奖品图片</span>
              </el-form-item>

              <el-form-item label="奖品数量 :">
                <el-input v-model="form.name1_2" :disabled="rewordCount" maxlength="15" style="width: 300px" type="text"
                          placeholder="不超过15个字"
                          onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                          onblur="this.v();"></el-input>
              </el-form-item>
              <el-form-item label="导入券码 :">
                <el-radio-group v-model="radio2">
                  <el-radio :disabled="ticket" label="1">系统生成</el-radio>
                  <el-radio :disabled="ticket" label="2">手动导入</el-radio>
                </el-radio-group>
              </el-form-item>
              <span v-show="handShow">
              <el-form-item label="">
                <el-input type="textarea" v-model="form.ticket1"></el-input>
              </el-form-item>
                </span>

              <el-form-item label="兑奖时间 :">
                <el-date-picker
                  v-model="value5"
                  :disabled="startTime"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="兑奖方式 :" style="width:26rem;">
                <el-radio-group v-model="radio3">
                  <el-radio label="1">公众号兑奖</el-radio>
                  <el-radio label="2">线下门店兑奖</el-radio>
                  <div class="second">
                    <el-radio label="3">联系客服兑奖</el-radio>
                    <el-radio label="4">平台提供兑奖说明</el-radio>
                  </div>

                </el-radio-group>
              </el-form-item>
              <div class="public" v-show="public">
                <el-form-item label="公众号名称 :">
                  <el-input v-model="form.name1_3" maxlength="15" placeholder="不超过15个字"></el-input>
                  <span>上传公众号二维码</span>
                  <el-upload
                    class="avatar-uploader"
                    action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                    list-type="picture-card"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess1_1"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="dialogImageUrl" :src="dialogImageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input type="textarea" v-model="form.name1_4" placehoder="0/50字" maxlength="50"></el-input>
                </el-form-item>
              </div>

              <div class="shop_info" v-show="shop_info">
                <el-form-item label="门店地址 :">
                  <el-input v-model="form.address1" maxlength="30" placeholder="请填写兑奖或者门店地址，不超过30个汉字"></el-input>
                </el-form-item>
                <el-form-item label="客服电话 :">
                  <el-input v-model="form.phone1_1" maxlength="15" placeholder="不超过15个字"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input v-model="form.name1_4" maxlenght="15" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>
              <div class="ser_info" v-show="ser_info">
                <el-form-item label="客服电话 :">
                  <el-input v-model="form.phone1_1" maxlength="15" placeholder="不超过15个字"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input v-model="form.name1_4" maxlength="15" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>


            </el-tab-pane>
            <!-- 奖品二 -->
            <el-tab-pane label="奖品二" name="second" data-idx="1">
              <div class="title_Info">
                <i class="iconfont icon-icon"></i>
                <span>活动发布后，奖品信息不能更改；该活动建议设置7~8个奖项，未设置的奖项将由空奖替代。</span>
              </div>
              <el-form-item label="奖品来源 :">
                <el-radio-group v-model="radio2_1" @change="selValue1">
                  <el-radio :disabled="ticket" label="1">自家商品</el-radio>
                  <el-radio :disabled="ticket" label="2">平台奖品库</el-radio>
                </el-radio-group>
                <a href="javascript:;">去奖品商城购买</a>
              </el-form-item>
              <el-form-item label="奖品类型 :">
                <el-select v-model="form.region2"
                           @change="selelteType1" placeholder="请选择奖品类型">
                  <el-option v-for="(items,index) in reword_type2" :label="items.name" :value="items.id"
                             :key="items.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="奖品内容 :" v-show="rewordConent1">
                <el-select v-model="reword_region1" style="width: 300px" placeholder="请选择奖品内容">
                  <el-option v-for="(items,index) in reword_content1" :label="items.goods_name" :value="items.goods_id"
                             :key="items.goods_id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="奖品名称 :">
                <el-input maxlength="15" style="width: 300px" :disabled="actName" v-model="form.name2_1" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                  list-type="picture-card"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess2"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imgData2" :src="imgData2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span class="load_text">奖品图片将在九宫格中显示</span>
                <span>点击图片重新上传即可更换奖品图片</span>
                <!--<el-dialog :visible.sync="dialogVisible">-->
                <!--<img width="100%" :src="imgData2" alt="">-->
                <!--</el-dialog>-->
              </el-form-item>
              <el-form-item label="奖品数量 :">
                <el-input v-model="form.name2_2" :disabled="rewordCount" maxlength="15" style="width: 300px" type="text"
                          placeholder="不超过15个字"
                          onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                          onblur="this.v();"></el-input>
              </el-form-item>
              <el-form-item label="导入券码 :">
                <el-radio-group v-model="radio2_2">
                  <el-radio :disabled="ticket" label="1">系统生成</el-radio>
                  <el-radio :disabled="ticket" label="2">手动导入</el-radio>
                </el-radio-group>
              </el-form-item>
              <span v-show="handShow1">
              <el-form-item label="">
                <el-input type="textarea" v-model="form.ticket2"></el-input>
              </el-form-item>
              </span>
              <el-form-item label="兑奖时间">
                <el-date-picker
                  v-model="value6"

                  :disabled="startTime"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="兑奖方式 :" style="width:26rem;">
                <el-radio-group v-model="radio2_3">
                  <el-radio label="1">公众号兑奖</el-radio>
                  <el-radio label="2">线下门店兑奖</el-radio>
                  <div class="second">
                    <el-radio label="3">联系客服兑奖</el-radio>
                    <el-radio label="4">平台提供兑奖说明</el-radio>
                  </div>

                </el-radio-group>
              </el-form-item>
              <div class="public" v-show="public1">
                <el-form-item label="公众号名称 :">
                  <el-input v-model="form.name2_3" maxlength="15" placeholder="不超过15个字"></el-input>
                  <span>上传公众号二维码</span>
                  <el-upload
                    class="avatar-uploader"
                    action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                    list-type="picture-card"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess2_1"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="dialogImageUrl1" :src="dialogImageUrl1" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input type="textarea" v-model="form.name2_4"></el-input>
                </el-form-item>
              </div>

              <div class="shop_info" v-show="shop_info1">
                <el-form-item label="门店地址 :">
                  <el-input v-model="form.address2" maxlength="30" placeholder="请填写兑奖或者门店地址，不超过30个汉字"></el-input>
                </el-form-item>
                <el-form-item label="客服电话 :">
                  <el-input v-model="form.phone2_1" maxlength="15" placeholder="不超过15个字"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input v-model="form.name2_4" maxlength="500" placeholder="不超过500个字"></el-input>
                </el-form-item>
              </div>
              <div class="ser_info" v-show="ser_info1">
                <el-form-item label="客服电话 :">
                  <el-input v-model="form.phone2_1" maxlength="15"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input v-model="form.name2_4" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>

            </el-tab-pane>
            <!-- 奖品三 -->
            <el-tab-pane label="奖品三" name="third" data-idx="2">
              <div class="title_Info">
                <i class="iconfont icon-icon"></i>
                <span>活动发布后，奖品信息不能更改；该活动建议设置7~8个奖项，未设置的奖项将由空奖替代。</span>
              </div>
              <el-form-item label="奖品来源 :" >
                <el-radio-group v-model="radio3_1" @change="selValue2">
                  <el-radio :disabled="ticket" label="1">自家商品</el-radio>
                  <el-radio :disabled="ticket" label="2">平台奖品库</el-radio>
                </el-radio-group>
                <a href="javascript:;">去奖品商城购买</a>
              </el-form-item>
              <el-form-item label="奖品类型 :">
                <el-select v-model="form.region3" @change="selelteType2" placeholder="请选择奖品类型">
                  <el-option v-for="(items,index) in reword_type3" :label="items.name" :value="items.id"
                             :key="items.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="奖品内容 :" v-show="rewordConent2">
                <el-select v-model="reword_region2" style="width: 300px" placeholder="请选择奖品内容">
                  <el-option v-for="(items,index) in reword_content2" :label="items.goods_name" :value="items.goods_id"
                             :key="items.goods_id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="奖品名称 :">
                <el-input maxlength="15" :disabled="actName" style="width: 300px" v-model="form.name3_1" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                  list-type="picture-card"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess3"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imgData3" :src="imgData3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span class="load_text">奖品图片将在九宫格中显示</span>
                <span>点击图片重新上传即可更换奖品图片</span>
                <!--<el-dialog :visible.sync="dialogVisible">-->
                <!--<img width="100%" :src="imgData3" alt="">-->
                <!--</el-dialog>-->
              </el-form-item>
              <el-form-item label="奖品数量 :">
                <el-input v-model="form.name3_2" :disabled="rewordCount" maxlength="15" style="width: 300px" type="text"
                          placeholder="不超过15个字"
                          onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                          onblur="this.v();"></el-input>
              </el-form-item>
              <el-form-item label="导入券码 :">
                <el-radio-group v-model="radio3_2">
                  <el-radio :disabled="ticket" label="1">系统生成</el-radio>
                  <el-radio :disabled="ticket" label="2">手动导入</el-radio>
                </el-radio-group>
              </el-form-item>
              <span v-show="handShow2">
              <el-form-item label="">
                <el-input type="textarea" v-model="form.ticket3"></el-input>
              </el-form-item>
              </span>

              <el-form-item label="兑奖时间 :">
                <el-date-picker
                  v-model="value7"
                  :disabled="startTime"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="兑奖方式 :" style="width:26rem;">
                <el-radio-group v-model="radio3_3">
                  <el-radio label="1">公众号兑奖</el-radio>
                  <el-radio label="2">线下门店兑奖</el-radio>
                  <div class="second">
                    <el-radio label="3">联系客服兑奖</el-radio>
                    <el-radio label="4">平台提供兑奖说明</el-radio>
                  </div>

                </el-radio-group>
              </el-form-item>
              <div class="public" v-show="public2">
                <el-form-item label="公众号名称 :">
                  <el-input v-model="form.name3_3" maxlength="15" placeholder="不超过15个字"></el-input>
                  <span>上传公众号二维码</span>
                  <el-upload
                    class="avatar-uploader"
                    action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                    list-type="picture-card"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess3_1"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="dialogImageUrl2" :src="dialogImageUrl2" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>

                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input type="textarea" maxlength="500" v-model="form.name3_4"></el-input>
                </el-form-item>
              </div>

              <div class="shop_info" v-show="shop_info2">
                <el-form-item label="门店地址 :">
                  <el-input v-model="form.address3" maxlength="30" placeholder="请填写兑奖或者门店地址，不超过30个汉字"></el-input>
                </el-form-item>
                <el-form-item label="客服电话 :">
                  <el-input v-model="form.phone3_1" maxlength="15" placeholder="不超过15个字"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input v-model="form.name3_4" maxlength="500" placeholder="不超过500个字"></el-input>
                </el-form-item>
              </div>
              <div class="ser_info" v-show="ser_info2">
                <el-form-item label="客服电话 :">
                  <el-input v-model="form.phone3_1" maxlength="15" placeholder="不超过15个字"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input v-model="form.name3_4" maxlength="500" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>

            </el-tab-pane>

            <!-- 奖品四 -->
            <el-tab-pane label="奖品四" name="fourth" data-idx="3" >
              <div class="title_Info">
                <i class="iconfont icon-icon"></i>
                <span>活动发布后，奖品信息不能更改；该活动建议设置7~8个奖项，未设置的奖项将由空奖替代。</span>
              </div>
              <el-form-item label="奖品来源 :">
                <el-radio-group v-model="radio4_1" @change="selValue3">
                  <el-radio :disabled="ticket" label="1">自家商品</el-radio>
                  <el-radio :disabled="ticket" label="2">平台奖品库</el-radio>
                </el-radio-group>
                <a href="javascript:;">去奖品商城购买</a>
              </el-form-item>
              <el-form-item label="奖品类型 :">
                <el-select v-model="form.region4" @change="selelteType3" placeholder="请选择奖品类型">
                  <el-option v-for="(items,index) in reword_type4" :label="items.name" :value="items.id"
                             :key="items.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="奖品内容 :" v-show="rewordConent3">
                <el-select v-model="reword_region3" style="width: 300px" placeholder="请选择奖品内容">
                  <el-option v-for="(items,index) in reword_content3" :label="items.goods_name" :value="items.goods_id"
                             :key="items.goods_id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="奖品名称 :">
                <el-input maxlength="15" :disabled="actName" style="width: 300px" v-model="form.name4_1" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                  list-type="picture-card"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess4"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imgData4" :src="imgData4" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span class="load_text">奖品图片将在九宫格中显示</span>
                <span>点击图片重新上传即可更换奖品图片</span>
                <!--<el-dialog :visible.sync="dialogVisible">-->
                <!--<img width="100%" :src="imgData4" alt="">-->
                <!--</el-dialog>-->

              </el-form-item>
              <el-form-item label="奖品数量 :">
                <el-input v-model="form.name4_2" :disabled="rewordCount" maxlength="15" style="width: 300px" type="text"
                          placeholder="不超过15个字"
                          onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                          onblur="this.v();"></el-input>
              </el-form-item>
              <el-form-item label="导入券码 :">
                <el-radio-group v-model="radio4_2">
                  <el-radio :disabled="ticket" label="1">系统生成</el-radio>
                  <el-radio :disabled="ticket" label="2">手动导入</el-radio>
                </el-radio-group>
              </el-form-item>
              <span v-show="handShow3">
              <el-form-item label="">
                <el-input type="textarea" v-model="form.ticket4"></el-input>
              </el-form-item>
              </span>

              <el-form-item label="兑奖时间 :">
                <el-date-picker
                  v-model="value8"
                  :disabled="startTime"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="兑奖方式 :" style="width:26rem;">
                <el-radio-group v-model="radio4_3">
                  <el-radio label="1">公众号兑奖</el-radio>
                  <el-radio label="2">线下门店兑奖</el-radio>
                  <div class="second">
                    <el-radio label="3">联系客服兑奖</el-radio>
                    <el-radio label="4">平台提供兑奖说明</el-radio>
                  </div>

                </el-radio-group>
              </el-form-item>
              <div class="public" v-show="public3">
                <el-form-item label="公众号名称 :">
                  <el-input v-model="form.name4_3" maxlength="15" placeholder="不超过15个字"></el-input>
                  <span>上传公众号二维码</span>
                  <el-upload
                    class="avatar-uploader"
                    action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                    list-type="picture-card"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess4_1"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="dialogImageUrl3" :src="dialogImageUrl3" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input type="textarea" maxlength="500" v-model="form.name4_4"></el-input>
                </el-form-item>
              </div>

              <div class="shop_info" v-show="shop_info3">
                <el-form-item label="门店地址 :">
                  <el-input v-model="form.address4" maxlength="30" placeholder="请填写兑奖或者门店地址，不超过30个汉字"></el-input>
                </el-form-item>
                <el-form-item label="客服电话 :">
                  <el-input v-model="form.phone4_1" maxlength="15" placeholder="不超过15个字"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input v-model="form.name4_4" maxlength="500" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>
              <div class="ser_info" v-show="ser_info3">
                <el-form-item label="客服电话 :">
                  <el-input v-model="form.phone4_1" maxlength="15"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input v-model="form.name4_4" maxlength="500" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>

            </el-tab-pane>

            <!-- 奖品五 -->
            <el-tab-pane label="奖品五" name="fifth" data-idx="4" >
              <div class="title_Info">
                <i class="iconfont icon-icon"></i>
                <span>活动发布后，奖品信息不能更改；该活动建议设置7~8个奖项，未设置的奖项将由空奖替代。</span>
              </div>
              <el-form-item label="奖品来源 :">
                <el-radio-group v-model="radio5_1" @change="selValue4">
                  <el-radio :disabled="ticket" label="1">自家商品</el-radio>
                  <el-radio :disabled="ticket" label="2">平台奖品库</el-radio>
                </el-radio-group>
                <a href="javascript:;">去奖品商城购买</a>
              </el-form-item>
              <el-form-item label="奖品类型 :">
                <el-select v-model="form.region5" @change="selelteType4" placeholder="请选择奖品类型">
                  <el-option v-for="(items,index) in reword_type5" :label="items.name" :value="items.id"
                             :key="items.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="奖品内容 :" v-show="rewordConent4">
                <el-select v-model="reword_region4" style="width: 300px" placeholder="请选择奖品内容">
                  <el-option v-for="(items,index) in reword_content4" :label="items.goods_name" :value="items.goods_id"
                             :key="items.goods_id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="奖品名称 :">
                <el-input maxlength="15" :disabled="actName" style="width: 300px" v-model="form.name5_1" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                  list-type="picture-card"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess5"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imgData5" :src="imgData5" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span class="load_text">奖品图片将在九宫格中显示</span>
                <span>点击图片重新上传即可更换奖品图片</span>
                <!--<el-dialog :visible.sync="dialogVisible">-->
                <!--<img width="100%" :src="imgData5" alt="">-->
                <!--</el-dialog>-->

              </el-form-item>
              <el-form-item label="奖品数量 :">
                <el-input v-model="form.name5_2" :disabled="rewordCount" maxlength="15" style="width: 300px" type="text"
                          placeholder="不超过15个字"
                          onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                          onblur="this.v();"></el-input>
              </el-form-item>
              <el-form-item label="导入券码 :">
                <el-radio-group v-model="radio5_2">
                  <el-radio :disabled="ticket" label="1">系统生成</el-radio>
                  <el-radio :disabled="ticket" label="2">手动导入</el-radio>
                </el-radio-group>
              </el-form-item>
              <span v-show="handShow4">
              <el-form-item label="">
                <el-input type="textarea" v-model="form.ticket5"></el-input>
              </el-form-item>
              </span>

              <el-form-item label="兑奖时间 :">
                <el-date-picker
                  v-model="value9"
                  :disabled="startTime"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="兑奖方式 :" style="width:26rem;">
                <el-radio-group v-model="radio5_3">
                  <el-radio label="1">公众号兑奖</el-radio>
                  <el-radio label="2">线下门店兑奖</el-radio>
                  <div class="second">
                    <el-radio label="3">联系客服兑奖</el-radio>
                    <el-radio label="4">平台提供兑奖说明</el-radio>
                  </div>

                </el-radio-group>
              </el-form-item>
              <div class="public" v-show="public4">
                <el-form-item label="公众号名称 :">
                  <el-input v-model="form.name5_3" maxlength="15" placeholder="不超过15个字"></el-input>
                  <span>上传公众号二维码</span>
                  <el-upload
                    class="avatar-uploader"
                    action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                    list-type="picture-card"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess5_1"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="dialogImageUrl4" :src="dialogImageUrl4" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>

                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input type="textarea" v-model="form.name5_4"></el-input>
                </el-form-item>
              </div>

              <div class="shop_info" v-show="shop_info4">
                <el-form-item label="门店地址 :">
                  <el-input v-model="form.address5" maxlength="30" placeholder="请填写兑奖或者门店地址，不超过30个汉字"></el-input>
                </el-form-item>
                <el-form-item label="客服电话 :">
                  <el-input v-model="form.phone5_1" maxlength="15"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input v-model="form.name5_4" maxlength="500" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>
              <div class="ser_info" v-show="ser_info4">
                <el-form-item label="客服电话 :">
                  <el-input v-model="form.phone5_1" maxlength="15"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input v-model="form.name5_4" maxlength="500" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>

            </el-tab-pane>

            <!-- 奖品六 -->
            <el-tab-pane label="奖品六" name="sixth" data-idx="5" >
              <div class="title_Info">
                <i class="iconfont icon-icon"></i>
                <span>活动发布后，奖品信息不能更改；该活动建议设置7~8个奖项，未设置的奖项将由空奖替代。</span>
              </div>
              <el-form-item label="奖品来源 :">
                <el-radio-group v-model="radio6_1" @change="selValue5">
                  <el-radio :disabled="ticket" label="1">自家商品</el-radio>
                  <el-radio :disabled="ticket" label="2">平台奖品库</el-radio>
                </el-radio-group>
                <a href="javascript:;">去奖品商城购买</a>
              </el-form-item>
              <el-form-item label="奖品类型 :">
                <el-select v-model="form.region6" @change="selelteType5" placeholder="请选择奖品类型">
                  <el-option v-for="(items,index) in reword_type6" :label="items.name" :value="items.id"
                             :key="items.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="奖品内容 :" v-show="rewordConent5">
                <el-select v-model="reword_region5" style="width: 300px" placeholder="请选择奖品内容">
                  <el-option v-for="(items,index) in reword_content5" :label="items.goods_name" :value="items.goods_id"
                             :key="items.goods_id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="奖品名称 :">
                <el-input maxlength="15" :disabled="actName" style="width: 300px" v-model="form.name6_1" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                  list-type="picture-card"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess6"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imgData6" :src="imgData6" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span class="load_text">奖品图片将在九宫格中显示</span>
                <span>点击图片重新上传即可更换奖品图片</span>
                <!--<el-dialog :visible.sync="dialogVisible">-->
                <!--<img width="100%" :src="imgData6" alt="">-->
                <!--</el-dialog>-->

              </el-form-item>
              <el-form-item label="奖品数量 :">
                <el-input v-model="form.name6_2" :disabled="rewordCount" maxlength="15" style="width: 300px" type="text"
                          placeholder="不超过15个字"
                          onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                          onblur="this.v();"></el-input>
              </el-form-item>
              <el-form-item label="导入券码 :">
                <el-radio-group v-model="radio6_2">
                  <el-radio :disabled="ticket" label="1">系统生成</el-radio>
                  <el-radio :disabled="ticket" label="2">手动导入</el-radio>
                </el-radio-group>
              </el-form-item>
              <span v-show="handShow5">
              <el-form-item label="">
                <el-input type="textarea" v-model="form.ticket6"></el-input>
              </el-form-item>
              </span>

              <el-form-item label="兑奖时间 :">
                <el-date-picker
                  v-model="value10"
                  :disabled="startTime"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="兑奖方式 :" style="width:26rem;">
                <el-radio-group v-model="radio3">
                  <el-radio label="1">公众号兑奖</el-radio>
                  <el-radio label="2">线下门店兑奖</el-radio>
                  <div class="second">
                    <el-radio label="3">联系客服兑奖</el-radio>
                    <el-radio label="4">平台提供兑奖说明</el-radio>
                  </div>

                </el-radio-group>
              </el-form-item>
              <div class="public" v-show="public5">
                <el-form-item label="公众号名称 :">
                  <el-input v-model="form.name6_3" maxlength="15" placeholder="不超过15个字"></el-input>
                  <span>上传公众号二维码</span>
                  <el-upload
                    class="avatar-uploader"
                    action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                    list-type="picture-card"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess6_1"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="dialogImageUrl5" :src="dialogImageUrl5" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>

                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input type="textarea" v-model="form.name6_4"></el-input>
                </el-form-item>
              </div>

              <div class="shop_info" v-show="shop_info5">
                <el-form-item label="门店地址 :">
                  <el-input v-model="form.address6" maxlength="30" placeholder="请填写兑奖或者门店地址，不超过30个汉字"></el-input>
                </el-form-item>
                <el-form-item label="客服电话 :">
                  <el-input v-model="form.phone6_1" maxlength="15"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input v-model="form.name6_4" maxlength="500" placeholder="不超过500个字"></el-input>
                </el-form-item>
              </div>
              <div class="ser_info" v-show="ser_info5">
                <el-form-item label="客服电话 :">
                  <el-input v-model="form.phone6_1" maxlength="15"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input v-model="form.name6_4" maxlength="500" placeholder="不超过500个字"></el-input>
                </el-form-item>
              </div>

            </el-tab-pane>

            <!-- 奖品七 -->
            <el-tab-pane label="奖品七" name="seventh" data-idx="6" >
              <div class="title_Info">
                <i class="iconfont icon-icon"></i>
                <span>活动发布后，奖品信息不能更改；该活动建议设置7~8个奖项，未设置的奖项将由空奖替代。</span>
              </div>
              <el-form-item label="奖品来源 :">
                <el-radio-group v-model="radio7_1" @change="selValue6">
                  <el-radio :disabled="ticket" label="1">自家商品</el-radio>
                  <el-radio :disabled="ticket" label="2">平台奖品库</el-radio>
                </el-radio-group>
                <a href="javascript:;">去奖品商城购买</a>
              </el-form-item>
              <el-form-item label="奖品类型 :">
                <el-select v-model="form.region7" @change="selelteType6" placeholder="请选择奖品类型">
                  <el-option v-for="(items,index) in reword_type7" :label="items.name" :value="items.id"
                             :key="items.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="奖品内容 :" v-show="rewordConent6">
                <el-select v-model="reword_region6" style="width: 300px" placeholder="请选择奖品内容">
                  <el-option v-for="(items,index) in reword_content6" :label="items.goods_name" :value="items.goods_id"
                             :key="items.goods_id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="奖品名称 :">
                <el-input maxlength="15" :disabled="actName" style="width: 300px" v-model="form.name7_1" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                  list-type="picture-card"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess7"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imgData7" :src="imgData7" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span class="load_text">奖品图片将在九宫格中显示</span>
                <span>点击图片重新上传即可更换奖品图片</span>
                <!--<el-dialog :visible.sync="dialogVisible">-->
                <!--<img width="100%" :src="imgData7" alt="">-->
                <!--</el-dialog>-->
              </el-form-item>
              <el-form-item label="奖品数量 :">
                <el-input v-model="form.name7_2" :disabled="rewordCount" maxlength="15" style="width: 300px" type="text"
                          placeholder="不超过15个字"
                          onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                          onblur="this.v();"></el-input>
              </el-form-item>
              <el-form-item label="导入券码 :">
                <el-radio-group v-model="radio7_2">
                  <el-radio :disabled="ticket" label="1">系统生成</el-radio>
                  <el-radio :disabled="ticket" label="2">手动导入</el-radio>
                </el-radio-group>
              </el-form-item>
              <span v-show="handShow6">
              <el-form-item label="">
                <el-input type="textarea" v-model="form.ticket7"></el-input>
              </el-form-item>
              </span>

              <el-form-item label="兑奖时间 :">
                <el-date-picker
                  v-model="value11"
                  :disabled="startTime"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="兑奖方式 :" style="width:26rem;">
                <el-radio-group v-model="radio7_3">
                  <el-radio label="1">公众号兑奖</el-radio>
                  <el-radio label="2">线下门店兑奖</el-radio>
                  <div class="second">
                    <el-radio label="3">联系客服兑奖</el-radio>
                    <el-radio label="4">平台提供兑奖说明</el-radio>
                  </div>

                </el-radio-group>
              </el-form-item>
              <div class="public" v-show="public6">
                <el-form-item label="公众号名称 :">
                  <el-input v-model="form.name7_3" maxlength="15" placeholder="不超过15个字"></el-input>
                  <span>上传公众号二维码</span>
                  <el-upload
                    class="avatar-uploader"
                    action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                    list-type="picture-card"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess7_1"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="dialogImageUrl6" :src="dialogImageUrl6" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input type="textarea" maxlength="500" v-model="form.name7_4"></el-input>
                </el-form-item>
              </div>

              <div class="shop_info" v-show="shop_info6">
                <el-form-item label="门店地址 :">
                  <el-input v-model="form.address7" maxlength="30" placeholder="请填写兑奖或者门店地址，不超过30个汉字"></el-input>
                </el-form-item>
                <el-form-item label="客服电话 :">
                  <el-input v-model="form.phone7_1" maxlength="15"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input v-model="form.name7_4" maxlength="500" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>
              <div class="ser_info" v-show="ser_info6">
                <el-form-item label="客服电话 :">
                  <el-input v-model="form.phone7_1" maxlength="15"
                            onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
                            onblur="this.v();" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明 :">
                  <el-input v-model="form.name7_4" maxlength="500" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>

            </el-tab-pane>

          </el-tabs>
          <!--<div class="cddd">-->
          <!--<span class="reword_num" @click="addgift()" v-show="addcart">+</span>-->
          <!--<span class="reword_num" @click="reducegift()" v-show="reduceCart">-</span>-->
          <!--</div>-->
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import myactive from '@/page/myactive'
  import "../plugins/sudoku/jquery-1.11.0"
  import "../js/lrz"
  import "../js/exif"
  import "../js/mobileFix.mini"

  export default ({
    data() {
      return {
        actName: false,
        startTime: false,
        rewordCount: false,
        ticket: false,//券码
        list: [],
        dialogImageUrl: '',//微信公众号
        dialogImageUrl1: '',
        dialogImageUrl2: '',
        dialogImageUrl3: '',
        dialogImageUrl4: '',
        dialogImageUrl5: '',
        dialogImageUrl6: '',//微信公众号

        dialogVisible: true,
        reword: "",
        start_date1: "",
        end_date1: "",
        start_date2: "",
        end_date2: "",
        start_date3: "",
        end_date3: "",
        start_date4: "",
        end_date4: "",
        start_date5: "",
        end_date5: "",
        start_date6: "",
        end_date6: "",
        start_date7: "",
        end_date7: "",

        imgData1: '',//上传图片
        imgData2: '',
        imgData3: '',
        imgData4: '',
        imgData5: '',
        imgData6: '',
        imgData7: '',
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },],
        // fileList:[],
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value4: [new Date(2018, 10, 29, 10, 10), new Date(2018, 10, 11, 10, 10)],
        value5: '',//奖品一的时间设
        value6: '',//奖品二的时间设置
        value7: '',//奖品三的时间设置
        value8: '',//奖品四的时间设置
        value9: '',//奖品五的时间设置
        value10: '',//奖品六的时间设置
        value11: '',//奖品七的时间设置
        value12: '',//奖品八的时间设置
        form: {
          //奖品一
          name1_1: '',//奖品名称
          name1_2: '',//奖品数量
          ticket1: '',//手动导入券码
          region1: '',//奖品类型
          name1_3: '',//公众号名称
          name1_4: '',//兑奖说明
          address1: '',//门店地址
          phone1_1: '',//门店客服电话

          //奖品二
          name2_1: '',//奖品名称
          name2_2: '',//奖品数量
          ticket2: '',//手动导入券码
          region2: '',//奖品类型

          name2_3: '',//公众号名称
          name2_4: '',//兑奖说明

          address2: '',//门店地址
          phone2_1: '',//门店客服电话
          //奖品三
          name3_1: '',//奖品名称
          name3_2: '',//奖品数量
          ticket3: '',//手动导入券码
          region3: '',//奖品类型

          name3_3: '',//公众号名称
          name3_4: '',//公众号兑奖说明

          address3: '',//门店地址
          phone3_1: '',//门店客服电话

          //奖品四
          name4_1: '',//奖品名称
          name4_2: '',//奖品数量
          ticket4: '',//手动导入券码
          region4: '',//奖品类型

          name4_3: '',//公众号名称
          name4_4: '',//公众号兑奖说明

          address4: '',//门店地址
          phone4_1: '',//门店客服电话
          //奖品五
          name5_1: '',//奖品名称
          name5_2: '',//奖品数量
          ticket5: '',//手动导入券码
          region5: '',//奖品类型

          name5_3: '',//公众号名称
          name5_4: '',//公众号兑奖说明

          address5: '',//门店地址
          phone5_1: '',//门店客服电话            //奖品六
          name6_1: '',//奖品名称
          name6_2: '',//奖品数量
          ticket6: '',//手动导入券码
          region6: '',//奖品类型

          name6_3: '',//公众号名称
          name6_4: '',//公众号兑奖说明

          address6: '',//门店地址
          phone6_1: '',//门店客服电话          //奖品七
          name7_1: '',//奖品名称
          name7_2: '',//奖品数量
          ticket7: '',//手动导入券码
          region7: '',//奖品类型

          name7_3: '',//公众号名称
          name7_4: '',//公众号兑奖说明

          address7: '',//门店地址
          phone7_1: '',//门店客服电话


        },
        handShow: false,
        handShow1: false,
        handShow2: false,
        handShow3: false,
        handShow4: false,
        handShow5: false,
        handShow6: false,

        public: false,
        public1: false,
        public2: false,
        public3: false,
        public4: false,
        public5: false,
        public6: false,

        shop_info:false,
        shop_info1:false,
        shop_info2:false,
        shop_info3:false,
        shop_info4:false,
        shop_info5:false,
        shop_info6:false,

        ser_info: false,
        ser_info1: false,
        ser_info2: false,
        ser_info3: false,
        ser_info4: false,
        ser_info5: false,
        ser_info6: false,


        activeName: 'first',
        radio1: '',//奖品来源1
        radio2: '',//单选框2
        radio3: '',//单选框3
        //奖品二
        radio2_1: '',//奖品来源1
        radio2_2: '',//单选框2
        radio2_3: '',//单选框3
        //奖品三
        radio3_1: '',//单选框1
        radio3_2: '',//单选框2
        radio3_3: '',//单选框3
        //奖品四
        radio4_1: '',//单选框1
        radio4_2: '',//单选框2
        radio4_3: '',//单选框3
        //奖品五
        radio5_1: '',//单选框1
        radio5_2: '',//单选框2
        radio5_3: '',//单选框3
        //奖品六
        radio6_1: '',//单选框1
        radio6_2: '',//单选框2
        radio6_3: '',//单选框3
        //奖品七
        radio7_1: '',//单选框1
        radio7_2: '',//单选框2
        radio7_3: '',//单选框3
        //奖品八
        radio8_1: '',//单选框1
        radio8_2: '',//单选框2
        radio8_3: '',//单选框3


        reword_type1: '',//奖品一类型
        reword_type2: '',//奖品二类型
        reword_type3: '',//奖品三类型
        reword_type4: '',//奖品四类型
        reword_type5: '',//奖品五类型
        reword_type6: '',//奖品六类型
        reword_type7: '',//奖品七类型
        reword_type8: '',//奖品八类型

        rewordConent:false,//奖品内容
        rewordConent1:false,
        rewordConent2:false,
        rewordConent3:false,
        rewordConent4:false,
        rewordConent5:false,
        rewordConent6:false,
        reword_content:'',//奖品内容列表
        reword_content1:'',
        reword_content2:'',
        reword_content3:'',
        reword_content4:'',
        reword_content5:'',
        reword_content6:'',
        reword_region:'',
        reword_region1:'',
        reword_region2:'',
        reword_region3:'',
        reword_region4:'',
        reword_region5:'',
        reword_region6:'',
        reword_specId:'',

        reword_data: '',//接口数据保存
        reword_send: '',//奖品数据回调
        dataStatus: 0,

      }
    },
    created() {

    },
    mounted() {
 let _this=this
      var token = sessionStorage.getItem('token')
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/jgg/activitySetup/init?token=" + token,//数据初始化接口
        params: {},
      }).then(res => {
        let setting_data = JSON.stringify(res.data.data)
        sessionStorage.setItem("Data", setting_data)
        this.startTime = this.$route.query.startTime
        this.actName = this.$route.query.actName
        this.rewordCount = this.$route.query.rewordCount
        this.ticket = this.$route.query.ticket
        this.dataStatus = this.$route.query.dataStatus
        this.partReword()
      })
      if (this.dataStatus === undefined) {
        let Data = sessionStorage.getItem('Data')
        this.reword_send = JSON.parse(Data).jggAwardSetupExtendList
      } else if (this.dataStatus === '1') {
        this.reword_send = this.$route.query.newjggData.jggAwardSetupExtendList
      }
      this.$bus.on("send_rate",function (data,idx) {
        _this.reword_send[idx].winRate=data
      })

      this.timestampToTime()

    },
    computed: {
      ...mapState(['setting_data']),
      ...mapActions(['saveData']),
      sdata() {
        return this.setting_data
      }
    },
    updated() {
      this.saveReword()
    },
    methods: {
      updates(val){
        alert(val)
      },
      selC(val){
        alert(val)
      },
      selelteType(val){
        if(this.radio1==2){
          var token = sessionStorage.getItem('token')
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/getGoodsByType?token='+token,
            params:{
              typeId:val
            }
          }).then(res=>{
            this.reword_content=res.data.data
          })
        }
      },
      selelteType1(val){
        if(this.radio2_1==2){
          var token = sessionStorage.getItem('token')
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/getGoodsByType?token='+token,
            params:{
              typeId:this.form.region2
            }
          }).then(res=>{
            this.reword_content1=res.data.data
          })
        }
      },
      selelteType2(val){
        if(this.radio3_1==2){
          var token = sessionStorage.getItem('token')
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/getGoodsByType?token='+token,
            params:{
              typeId:this.form.region3
            }
          }).then(res=>{
            this.reword_content2=res.data.data
          })
        }
      },
      selelteType3(val){
        if(this.radio4_1==2){
          var token = sessionStorage.getItem('token')
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/getGoodsByType?token='+token,
            params:{
              typeId:this.form.region4
            }
          }).then(res=>{
            this.reword_content3=res.data.data
          })
        }
      },
      selelteType4(val){
        if(this.radio5_1==2){
          var token = sessionStorage.getItem('token')
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/getGoodsByType?token='+token,
            params:{
              typeId:this.form.region5
            }
          }).then(res=>{
            this.reword_content4=res.data.data
          })
        }
      },
      selelteType5(val){
        if(this.radio6_1==2){
          var token = sessionStorage.getItem('token')
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/getGoodsByType?token='+token,
            params:{
              typeId:this.form.region6
            }
          }).then(res=>{
            this.reword_content5=res.data.data
          })
        }
      },
      selelteType6(val){
        if(this.radio7_1==2){
          var token = sessionStorage.getItem('token')
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/getGoodsByType?token='+token,
            params:{
              typeId:this.form.region7
            }
          }).then(res=>{
            this.reword_content6=res.data.data
          })
        }
      },
      selValue(){
        if(this.radio1==2){
          var token = sessionStorage.getItem('token')
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/getGoodsByType?token='+token,
            params:{
              typeId:this.form.region1
            }
          }).then(res=>{
            this.reword_content=res.data.data
          })
        }
      },
      selValue1(){
        if(this.radio2_1==2){
          var token = sessionStorage.getItem('token')
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/getGoodsByType?token='+token,
            params:{
              typeId:this.form.region2
            }
          }).then(res=>{
            this.reword_content1=res.data.data
          })
        }
      },
      selValue2(){
        if(this.radio3_1==2){
          var token = sessionStorage.getItem('token')
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/getGoodsByType?token='+token,
            params:{
              typeId:this.form.region3
            }
          }).then(res=>{
            this.reword_content2=res.data.data
          })
        }
      },
      selValue3(){
        if(this.radio4_1==2){
          var token = sessionStorage.getItem('token')
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/getGoodsByType?token='+token,
            params:{
              typeId:this.form.region4
            }
          }).then(res=>{
            this.reword_content3=res.data.data
          })
        }
      },
      selValue4(){
        if(this.radio5_1==2){
          var token = sessionStorage.getItem('token')
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/getGoodsByType?token='+token,
            params:{
              typeId:this.form.region5
            }
          }).then(res=>{
            this.reword_content4=res.data.data
          })
        }
      },
      selValue5(){
        if(this.radio6_1==2){
          var token = sessionStorage.getItem('token')
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/getGoodsByType?token='+token,
            params:{
              typeId:this.form.region6
            }
          }).then(res=>{
            this.reword_content5=res.data.data
          })
        }
      },
      selValue6(){
        if(this.radio7_1==2){
          var token = sessionStorage.getItem('token')
          this.$axios({
            method:'post',
            url:'http://center.marketing.yunpaas.cn/center/enterpriseGoodsStock/getGoodsByType?token='+token,
            params:{
              typeId:this.form.region7
            }
          }).then(res=>{
            this.reword_content6=res.data.data
          })
        }
      },
      handlePictureCardPreview(file) {
        this.imgData1 = file.url;
        this.dialogVisible = true;
      },
      handleAvatarSuccess1_1(res, file) {
        this.dialogImageUrl = file.response.data
      },
      handleAvatarSuccess2_1(res, file) {
        this.dialogImageUrl1 = file.response.data
      },
      handleAvatarSuccess3_1(res, file) {
        this.dialogImageUrl2 = file.response.data
      },
      handleAvatarSuccess4_1(res, file) {
        this.dialogImageUrl3 = file.response.data
      },
      handleAvatarSuccess5_1(res, file) {
        this.dialogImageUrl4 = file.response.data
      },
      handleAvatarSuccess6_1(res, file) {
        this.dialogImageUrl5 = file.response.data
      },
      handleAvatarSuccess7_1(res, file) {
        this.dialogImageUrl6 = file.response.data
      },
      handleAvatarSuccess1(res, file, fileList) {
        this.imgData1 = file.response.data
      },
      handleAvatarSuccess2(res, file, fileList) {
        this.imgData2 = file.response.data
      },
      handleAvatarSuccess3(res, file, fileList) {
        this.imgData3 = file.response.data
      },
      handleAvatarSuccess4(res, file, fileList) {
        this.imgData4 = file.response.data
        // this.imageUrl = URL.createObjectURL(file.raw);

      },
      handleAvatarSuccess5(res, file, fileList) {
        this.imgData5 = file.response.data
        // this.imageUrl = URL.createObjectURL(file.raw);
        this.saveReword()
      },
      handleAvatarSuccess6(res, file, fileList) {
        this.imgData6 = file.response.data
        // this.imageUrl = URL.createObjectURL(file.raw);
        this.saveReword()
      },
      handleAvatarSuccess7(res, file, fileList) {
        this.imgData7 = file.response.data
        // this.imageUrl = URL.createObjectURL(file.raw);
        this.saveReword()
      },
      handleRemove(file, fileList) {

        console.log(file, fileList);
        console.log(file.response.data);
      },

      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        // const isPNG=file.type==='image/png';
        // const isLt100kb = file.size / 1024 < 0.1;
        //
        // if (!isJPG&&!isPNG) {
        //   this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
        // }
        // if (!isLt100kb) {
        //   this.$message.error('上传头像图片大小不能超过 100kb!');
        // }
        // return isJPG  ||isPNG && isLt100kb ;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      //日期时间设置

      timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y + M + D + h + m + s;
      },

      //奖金设置部分的数据
      partReword() {

        if (this.dataStatus === undefined) {
          let Data = sessionStorage.getItem('Data')
          this.reword_data = JSON.parse(Data).jggAwardSetupExtendList
        } else if (this.dataStatus === '1') {
          this.reword_data = this.$route.query.newjggData.jggAwardSetupExtendList

        }

        this.list = this.reword_data

        console.log(this.reword_data)
        //  日期时间转换设置
        this.start_date1 = this.reword_data[0].exchangeStartDate
        this.end_date1 = this.reword_data[0].exchangeEndDate//结束时间
        let str1 = this.start_date1
        let strend1 = this.end_date1
        //时间戳转换日期
        let newStr1 = this.timestampToTime(str1)
        strend1 = this.timestampToTime(strend1)
        this.value5 = [newStr1, strend1]


        this.start_date2 = this.reword_data[1].exchangeStartDate
        this.end_date2 = this.reword_data[1].exchangeEndDate//结束时间
        let str2 = this.start_date2
        let strend2 = this.end_date2
        //时间戳转换日期
        let newStr2 = this.timestampToTime(str2)
        strend2 = this.timestampToTime(strend2)
        this.value6 = [newStr2, strend2]


        this.start_date3 = this.reword_data[2].exchangeStartDate
        this.end_date3 = this.reword_data[2].exchangeEndDate//结束时间
        let str3 = this.start_date3
        let strend3 = this.end_date3
        //时间戳转换日期
        let newStr3 = this.timestampToTime(str3)
        strend3 = this.timestampToTime(strend3)
        this.value7 = [newStr3, strend3]


        this.start_date4 = this.reword_data[3].exchangeStartDate
        this.end_date4 = this.reword_data[3].exchangeEndDate//结束时间
        let str4 = this.start_date4
        let strend4 = this.end_date4
        //时间戳转换日期
        let newStr4 = this.timestampToTime(str4)
        strend4 = this.timestampToTime(strend4)
        this.value8 = [newStr4, strend4]


        this.start_date5 = this.reword_data[4].exchangeStartDate
        this.end_date5 = this.reword_data[4].exchangeEndDate//结束时间
        let str5 = this.start_date5
        let strend5 = this.end_date5
        //时间戳转换日期
        let newStr5 = this.timestampToTime(str5)
        strend5 = this.timestampToTime(strend5)
        this.value9 = [newStr5, strend5]


        this.start_date6 = this.reword_data[5].exchangeStartDate
        this.end_date6 = this.reword_data[5].exchangeEndDate//结束时间
        let str6 = this.start_date6
        let strend6 = this.end_date6
        //时间戳转换日期
        let newStr6 = this.timestampToTime(str6)
        strend6 = this.timestampToTime(strend6)
        this.value10 = [newStr6, strend6]

        this.start_date7 = this.reword_data[6].exchangeStartDate
        this.end_date7 = this.reword_data[6].exchangeEndDate//结束时间
        let str7 = this.start_date7
        let strend7 = this.end_date7
        //时间戳转换日期
        let newStr7 = this.timestampToTime(str7)
        strend7 = this.timestampToTime(strend7)
        this.value11 = [newStr7, strend7]

        //奖品一
        this.form.name1_1 = this.reword_data[0].prizeName //奖品名称
        this.form.name1_2 = this.reword_data[0].prizeNum //奖品数量
        this.form.name1_3 = this.reword_data[0].wxPublicAccountName //微信公众号名称
        this.form.name1_4 = this.reword_data[0].exchangeDesc //兑奖说明
        this.form.address1 = this.reword_data[0].exchangeAddress//门店地址
        this.form.phone1_1 = this.reword_data[0].exchangeTelephone //客服电话
        this.radio1 = this.reword_data[0].prizeSource.toString() //奖品来源
        this.radio2 = this.reword_data[0].prizeCouponCodeType.toString() //导入券码
        this.imgData1 = this.reword_data[0].prizeImg //上传图片
        //this.reword_type1 = this.reword_data[0].jggAwardTypeList // 奖品类型
        this.form.region1 = this.reword_data[0].prizeType
        this.reword_region=this.reword_data[0].goodsId//奖品内容
        this.reword_specId=this.reword_data[0].specId//内容id
        this.dialogImageUrl = this.reword_data[0].wxPublicAccountImg //微信公众号图片
        if(this.radio1==1){
          this.reword_type1 = this.reword_data[0].jggAwardTypeList
          this.rewordConent=false
        }else if(this.radio1==2) {
          this.reword_type1=this.reword_data[0].shopGoodsTypeList
          this.rewordConent=true
          this.selValue()
        }


        if (this.radio2 == 1) {
          this.handShow = false
        } else if (this.radio2 == 2) {
          this.handShow = true
        }
        this.radio3 = this.reword_data[0].prizeExchangeTypeId.toString() //兑奖方式

        if(this.radio3==1){
            this.public=true,
            this.shop_info=false
            this.ser_info=false

        }else if(this.radio3==2){
          this.public=false,
            this.shop_info=true
          this.ser_info=false

        }else if(this.radio3==3){
          this.public=false,
            this.shop_info=false
          this.ser_info=true

        }else if(this.radio3==4){
          this.public=false,
            this.shop_info=false
          this.ser_info=false
        }


        //奖品二
        this.form.name2_1 = this.reword_data[1].prizeName //奖品名称
        this.form.name2_2 = this.reword_data[1].prizeNum //奖品数量
        this.form.name2_3 = this.reword_data[1].wxPublicAccountName //微信公众号名称
        this.form.name2_4 = this.reword_data[1].exchangeDesc //兑奖说明
        this.form.address2 = this.reword_data[1].exchangeAddress//门店地址
        this.form.phone2_1 = this.reword_data[1].exchangeTelephone //客服电话
        this.radio2_1 = this.reword_data[1].prizeSource.toString() //奖品来源
        this.radio2_2 = this.reword_data[1].prizeCouponCodeType.toString() //导入券码
        this.imgData2 = this.reword_data[1].prizeImg //上传图片
        this.reword_type2 = this.reword_data[1].jggAwardTypeList // 奖品类型
        this.form.region2 = this.reword_data[1].prizeType
        this.reword_region1=this.reword_data[1].goodsId//奖品内容
        this.dialogImageUrl1 = this.reword_data[1].wxPublicAccountImg //微信公众号图片
        if(this.radio2_1==1){
          this.reword_type2 = this.reword_data[1].jggAwardTypeList
          this.rewordConent1=false
        }else if(this.radio2_1==2) {
          this.reword_type2=this.reword_data[1].shopGoodsTypeList
          this.rewordConent1=true
          this.selValue1()
        }
        if (this.radio2_2 == 1) {
          this.handShow1 = false
        } else if (this.radio2_2 == 2) {
          this.handShow1 = true
        }
        this.radio2_3 = this.reword_data[1].prizeExchangeTypeId.toString() //兑奖方式

        if(this.radio2_3==1){
          this.public1=true,
            this.shop_info1=false
          this.ser_info1=false

        }else if(this.radio2_3==2){
          this.public1=false,
            this.shop_info1=true
          this.ser_info1=false

        }else if(this.radio2_3==3){
          this.public1=false,
            this.shop_info1=false
          this.ser_info1=true

        }else if(this.radio2_3==4){
          this.public1=false,
            this.shop_info1=false
          this.ser_info1=false
        }



        //奖品三

        this.form.name3_1 = this.reword_data[2].prizeName //奖品名称
        this.form.name3_2 = this.reword_data[2].prizeNum //奖品数量
        this.form.name3_3 = this.reword_data[2].wxPublicAccountName //微信公众号名称
        this.imgData3 = this.reword_data[2].prizeImg //上传图片
        this.reword_type3 = this.reword_data[2].jggAwardTypeList // 奖品类型
        this.form.region3 = this.reword_data[2].prizeType
        this.reword_region2=this.reword_data[2].goodsId//奖品内容
        this.dialogImageUrl2 = this.reword_data[2].wxPublicAccountImg //微信公众号图片
        this.form.name3_4 = this.reword_data[2].exchangeDesc //兑奖说明
        this.form.address3 = this.reword_data[2].exchangeAddress//门店地址
        this.form.phone3_1 = this.reword_data[2].exchangeTelephone //客服电话
        this.radio3_1 = this.reword_data[2].prizeSource.toString() //奖品来源
        this.radio3_2 = this.reword_data[2].prizeCouponCodeType.toString() //导入券码
        if(this.radio3_1==1){
          this.reword_type3 = this.reword_data[2].jggAwardTypeList
          this.rewordConent2=false
        }else if(this.radio3_1==2) {
          this.reword_type3=this.reword_data[2].shopGoodsTypeList
          this.rewordConent2=true
          this.selValue2()
        }
        if (this.radio3_2 == 1) {
          this.handShow2 = false
        } else if (this.radio3_2 == 2) {
          this.handShow2 = true
        }
        this.radio3_3 = this.reword_data[2].prizeExchangeTypeId.toString() //兑奖方式

        if(this.radio3_3==1){
          this.public2=true,
            this.shop_info2=false
          this.ser_info2=false

        }else if(this.radio3_3==2){
          this.public2=false,
            this.shop_info2=true
          this.ser_info2=false

        }else if(this.radio3_3==3){
          this.public2=false,
            this.shop_info2=false
          this.ser_info2=true

        }else if(this.radio3_3==4){
          this.public2=false,
            this.shop_info2=false
          this.ser_info2=false
        }


        //奖品四
        this.form.name4_1 = this.reword_data[3].prizeName //奖品名称
        this.form.name4_2 = this.reword_data[3].prizeNum //奖品数量
        this.form.name4_3 = this.reword_data[3].wxPublicAccountName //微信公众号名称
        this.imgData4 = this.reword_data[3].prizeImg //上传图片
        this.reword_type4 = this.reword_data[3].jggAwardTypeList // 奖品类型
        this.form.region4 = this.reword_data[3].prizeType
        this.reword_region3=this.reword_data[3].goodsId//奖品内容
        this.dialogImageUrl3 = this.reword_data[3].wxPublicAccountImg //微信公众号图片
        this.form.name4_4 = this.reword_data[3].exchangeDesc //兑奖说明
        this.form.address4 = this.reword_data[3].exchangeAddress//门店地址
        this.form.phone4_1 = this.reword_data[3].exchangeTelephone //客服电话
        this.radio4_1 = this.reword_data[3].prizeSource.toString() //奖品来源
        this.radio4_2 = this.reword_data[3].prizeCouponCodeType.toString() //导入券码
        if(this.radio4_1==1){
          this.reword_type4 = this.reword_data[3].jggAwardTypeList
          this.rewordConent3=false
        }else if(this.radio4_1==2) {
          this.reword_type4=this.reword_data[3].shopGoodsTypeList
          this.rewordConent3=true
          this.selValue3()
        }
        if (this.radio4_2 == 1) {
          this.handShow3 = false
        } else if (this.radio4_2 == 2) {
          this.handShow3 = true
        }
        this.radio4_3 = this.reword_data[3].prizeExchangeTypeId.toString() //兑奖方式
        if(this.radio4_3==1){
          this.public3=true,
            this.shop_info3=false
          this.ser_info3=false

        }else if(this.radio4_3==2){
          this.public3=false,
            this.shop_info3=true
          this.ser_info3=false

        }else if(this.radio4_3==3){
          this.public3=false,
            this.shop_info3=false
          this.ser_info3=true

        }else if(this.radio4_3==4){
          this.public3=false,
            this.shop_info3=false
          this.ser_info3=false
        }


        //奖品五
        this.form.name5_1 = this.reword_data[4].prizeName //奖品名称
        this.form.name5_2 = this.reword_data[4].prizeNum //奖品数量
        this.form.name5_3 = this.reword_data[4].wxPublicAccountName //微信公众号名称
        this.imgData5 = this.reword_data[4].prizeImg //上传图片
        this.reword_type5 = this.reword_data[4].jggAwardTypeList // 奖品类型
        this.form.region5 = this.reword_data[4].prizeType
        this.reword_region4=this.reword_data[4].goodsId//奖品内容
        this.dialogImageUrl4 = this.reword_data[4].wxPublicAccountImg //微信公众号图片
        this.form.name5_4 = this.reword_data[4].exchangeDesc //兑奖说明
        this.form.address5 = this.reword_data[4].exchangeAddress//门店地址
        this.form.phone5_1 = this.reword_data[4].exchangeTelephone //客服电话
        this.radio5_1 = this.reword_data[4].prizeSource.toString() //奖品来源
        this.radio5_2 = this.reword_data[4].prizeCouponCodeType.toString() //导入券码
        if(this.radio5_1==1){
          this.reword_type5 = this.reword_data[4].jggAwardTypeList
          this.rewordConent4=false
        }else if(this.radio5_1==2) {
          this.reword_type5=this.reword_data[4].shopGoodsTypeList
          this.rewordConent4=true
          this.selValue4()
        }
        if (this.radio5_2 == 1) {
          this.handShow4 = false
        } else if (this.radio5_2 == 2) {
          this.handShow4 = true
        }
        this.radio5_3 = this.reword_data[4].prizeExchangeTypeId.toString() //兑奖方式

        if(this.radio5_3==1){
          this.public4=true,
            this.shop_info4=false
          this.ser_info4=false

        }else if(this.radio5_3==2){
          this.public4=false,
            this.shop_info4=true
          this.ser_info4=false

        }else if(this.radio5_3==3){
          this.public4=false,
            this.shop_info4=false
          this.ser_info4=true

        }else if(this.radio5_3==4){
          this.public4=false,
            this.shop_info4=false
          this.ser_info4=false
        }



        //奖品六
        this.form.name6_1 = this.reword_data[5].prizeName //奖品名称
        this.form.name6_2 = this.reword_data[5].prizeNum //奖品数量
        this.form.name6_3 = this.reword_data[5].wxPublicAccountName //微信公众号名称
        this.imgData6 = this.reword_data[5].prizeImg //上传图片
        this.reword_type6 = this.reword_data[5].jggAwardTypeList // 奖品类型
        this.form.region6 = this.reword_data[5].prizeType
        this.reword_region5=this.reword_data[5].goodsId//奖品内容
        this.dialogImageUrl5 = this.reword_data[5].wxPublicAccountImg //微信公众号图片
        this.form.name6_4 = this.reword_data[5].exchangeDesc //兑奖说明
        this.form.address6 = this.reword_data[5].exchangeAddress//门店地址
        this.form.phone6_1 = this.reword_data[5].exchangeTelephone //客服电话
        this.radio6_1 = this.reword_data[5].prizeSource.toString() //奖品来源
        this.radio6_2 = this.reword_data[5].prizeCouponCodeType.toString() //导入券码
        if(this.radio6_1==1){
          this.reword_type6 = this.reword_data[5].jggAwardTypeList
          this.rewordConent5=false
        }else if(this.radio6_1==2) {
          this.reword_type6=this.reword_data[5].shopGoodsTypeList
          this.rewordConent5=true
          this.selValue5()
        }
        if (this.radio6_2 == 1) {
          this.handShow5 = false
        } else if (this.radio6_2 == 2) {
          this.handShow5 = true
        }
        this.radio6_3 = this.reword_data[5].prizeExchangeTypeId.toString() //兑奖方式

        if(this.radio6_3==1){
          this.public5=true,
            this.shop_info5=false
          this.ser_info5=false

        }else if(this.radio6_3==2){
          this.public5=false,
            this.shop_info5=true
          this.ser_info5=false

        }else if(this.radio6_3==3){
          this.public5=false,
            this.shop_info5=false
          this.ser_info5=true

        }else if(this.radio6_3==4){
          this.public5=false,
            this.shop_info5=false
          this.ser_info5=false
        }



        //奖品七
        this.form.name7_1 = this.reword_data[6].prizeName //奖品名称
        this.form.name7_2 = this.reword_data[6].prizeNum //奖品数量
        this.form.name7_3 = this.reword_data[6].wxPublicAccountName //微信公众号名称
        this.imgData7 = this.reword_data[6].prizeImg //上传图片
        this.reword_type7 = this.reword_data[6].jggAwardTypeList // 奖品类型
        this.form.region7 = this.reword_data[6].prizeType
        this.reword_region6=this.reword_data[6].goodsId//奖品内容
        this.dialogImageUrl6 = this.reword_data[6].wxPublicAccountImg //微信公众号图片
        this.form.name7_4 = this.reword_data[6].exchangeDesc //兑奖说明
        this.form.address7 = this.reword_data[6].exchangeAddress//门店地址
        this.form.phone7_1 = this.reword_data[6].exchangeTelephone //客服电话
        this.radio7_1 = this.reword_data[6].prizeSource.toString() //奖品来源
        this.radio7_2 = this.reword_data[6].prizeCouponCodeType.toString() //导入券码
        if(this.radio7_1==1){
          this.reword_type7 = this.reword_data[6].jggAwardTypeList
          this.rewordConent6=false
        }else if(this.radio7_1==2) {
          this.reword_type7=this.reword_data[6].shopGoodsTypeList
          this.rewordConent6=true
          this.selValue6()
        }
        if (this.radio7_2 == 1) {
          this.handShow6 = false
        } else if (this.radio7_2 == 2) {
          this.handShow6 = true
        }
        this.radio7_3 = this.reword_data[6].prizeExchangeTypeId.toString() //兑奖方式

        if(this.radio7_3==1){
          this.public5=true,
            this.shop_info5=false
          this.ser_info5=false

        }else if(this.radio7_3==2){
          this.public6=false,
            this.shop_info6=true
          this.ser_info6=false

        }else if(this.radio7_3==3){
          this.public6=false,
            this.shop_info6=false
          this.ser_info6=true

        }else if(this.radio7_3==4){
          this.public6=false,
            this.shop_info6=false
          this.ser_info6=false
        }


      },

      //保存奖品数据
      saveReword() {
        if (this.dataStatus === undefined) {
          let Data = sessionStorage.getItem('Data')
          this.reword_send = JSON.parse(Data).jggAwardSetupExtendList
        } else if (this.dataStatus === '1') {
          this.reword_send = this.$route.query.newjggData.jggAwardSetupExtendList
        }
        //奖品一

        this.reword_send[0].prizeName = this.form.name1_1 //奖品名称
        this.reword_send[0].prizeNum = this.form.name1_2 //奖品数量
        this.reword_send[0].goodsId=this.reword_region//商品内容
        this.reword_send[0].wxPublicAccountName = this.form.name1_3  //微信公众号名称
        this.reword_send[0].exchangeDesc = this.form.name1_4 //兑奖说明
        this.reword_send[0].exchangeAddress = this.form.address1//门店地址
        this.reword_send[0].exchangeTelephone = this.form.phone1_1//客服电话
        this.reword_send[0].prizeSource = this.radio1  //奖品来源

        if(this.radio1==1){
          this.reword_type1=this.reword_data[0].jggAwardTypeList
          this.rewordConent=false
        }else if(this.radio1==2){
          this.reword_type1=this.reword_data[0].shopGoodsTypeList
          this.rewordConent=true
        }
        this.$bus.emit("send_radio1",this.radio1)
        this.reword_send[0].prizeCouponCodeType = this.radio2  //导入券码

        if (this.radio2 == 1) {
          this.handShow = false
        } else if (this.radio2 == 2) {
          this.handShow = true
        }

        this.reword_send[0].prizeExchangeTypeId = this.radio3//兑奖方式

        if(this.radio3==1){
          this.public=true,
            this.shop_info=false
          this.ser_info=false

        }else if(this.radio3==2){
          this.public=false,
            this.shop_info=true
          this.ser_info=false

        }else if(this.radio3==3){
          this.public=false,
            this.shop_info=false
          this.ser_info=true

        }else if(this.radio3==4){
          this.public=false,
            this.shop_info=false
          this.ser_info=false
        }

        this.reword_send[0].prizeImg = this.imgData1 //上传图片
        //this.reword_send[0].jggAwardTypeList = this.reword_type1 // 奖品类型
        this.reword_send[0].prizeType = this.form.region1
        this.reword_send[0].wxPublicAccountImg = this.dialogImageUrl//微信公众号图片

        //奖品二
        this.reword_send[1].prizeName = this.form.name2_1 //奖品名称
        this.reword_send[1].prizeNum = this.form.name2_2 //奖品数量
        this.reword_send[1].goodsId=this.reword_region1//商品内容
        this.reword_send[1].wxPublicAccountName = this.form.name2_3  //微信公众号名称
        this.reword_send[1].exchangeDesc = this.form.name2_4 //兑奖说明
        this.reword_send[1].exchangeAddress = this.form.address2//门店地址
        this.reword_send[1].exchangeTelephone = this.form.phone2_1//客服电话
        this.reword_send[1].prizeSource = this.radio2_1  //奖品来源
        this.reword_send[1].prizeCouponCodeType = this.radio2_2  //导入券码
        if(this.radio2_1==1){
          this.reword_type2=this.reword_data[1].jggAwardTypeList
          this.rewordConent1=false
        }else if(this.radio2_1==2){
          this.reword_type2=this.reword_data[1].shopGoodsTypeList
          this.rewordConent1=true
        }
        if (this.radio2_2 == 1) {
          this.handShow1 = false
        } else if (this.radio2_2 == 2) {
          this.handShow1 = true
        }
        this.reword_send[1].prizeExchangeTypeId = this.radio2_3//兑奖方式

        if(this.radio2_3==1){
          this.public1=true,
            this.shop_info1=false
          this.ser_info1=false

        }else if(this.radio2_3==2){
          this.public1=false,
            this.shop_info1=true
          this.ser_info1=false

        }else if(this.radio2_3==3){
          this.public1=false,
            this.shop_info1=false
          this.ser_info1=true

        }else if(this.radio2_3==4){
          this.public1=false,
            this.shop_info1=false
          this.ser_info1=false
        }

        this.reword_send[1].prizeImg = this.imgData2 //上传图片
        //this.reword_send[1].jggAwardTypeList = this.reword_type2 // 奖品类型
        this.reword_send[1].prizeType = this.form.region2
        this.reword_send[1].wxPublicAccountImg = this.dialogImageUrl1//微信公众号图片

        //奖品三
        this.reword_send[2].prizeName = this.form.name3_1 //奖品名称
        this.reword_send[2].prizeNum = this.form.name3_2 //奖品数量
        this.reword_send[2].goodsId=this.reword_region2//商品内容
        this.reword_send[2].wxPublicAccountName = this.form.name3_3  //微信公众号名称
        this.reword_send[2].exchangeDesc = this.form.name3_4 //兑奖说明
        this.reword_send[2].exchangeAddress = this.form.address3//门店地址
        this.reword_send[2].exchangeTelephone = this.form.phone3_1//客服电话
        this.reword_send[2].prizeSource = this.radio3_1  //奖品来源
        this.reword_send[2].prizeCouponCodeType = this.radio3_2  //导入券码
        if(this.radio3_1==1){
          this.reword_type3=this.reword_data[2].jggAwardTypeList
          this.rewordConent2=false
        }else if(this.radio3_1==2){
          this.reword_type3=this.reword_data[2].shopGoodsTypeList
          this.rewordConent2=true
        }
        if (this.radio3_2 == 1) {
          this.handShow2 = false
        } else if (this.radio3_2 == 2) {
          this.handShow2 = true
        }
        this.reword_send[2].prizeExchangeTypeId = this.radio3_3//兑奖方式

        if(this.radio3_3==1){
          this.public2=true,
            this.shop_info2=false
          this.ser_info2=false

        }else if(this.radio3_3==2){
          this.public2=false,
            this.shop_info2=true
          this.ser_info2=false

        }else if(this.radio3_3==3){
          this.public2=false,
            this.shop_info2=false
          this.ser_info2=true

        }else if(this.radio3_3==4){
          this.public2=false,
            this.shop_info2=false
          this.ser_info2=false
        }

        this.reword_send[2].prizeImg = this.imgData3 //上传图片
        this.reword_send[2].jggAwardTypeList = this.reword_type3 // 奖品类型
        this.reword_send[2].prizeType = this.form.region3
        this.reword_send[2].wxPublicAccountImg = this.dialogImageUrl2//微信公众号图片

        //奖品四
        this.reword_send[3].prizeName = this.form.name4_1 //奖品名称
        this.reword_send[3].prizeNum = this.form.name4_2 //奖品数量
        this.reword_send[3].goodsId=this.reword_region3//商品内容
        this.reword_send[3].wxPublicAccountName = this.form.name4_3  //微信公众号名称
        this.reword_send[3].exchangeDesc = this.form.name4_4 //兑奖说明
        this.reword_send[3].exchangeAddress = this.form.address4//门店地址
        this.reword_send[3].exchangeTelephone = this.form.phone4_1//客服电话
        this.reword_send[3].prizeSource = this.radio4_1  //奖品来源
        this.reword_send[3].prizeCouponCodeType = this.radio4_2  //导入券码
        if(this.radio4_1==1){
          this.reword_type4=this.reword_data[3].jggAwardTypeList
          this.rewordConent3=false
        }else if(this.radio4_1==2){
          this.reword_type4=this.reword_data[3].shopGoodsTypeList
          this.rewordConent3=true
        }
        if (this.radio4_2 == 1) {
          this.handShow3 = false
        } else if (this.radio4_2 == 2) {
          this.handShow3 = true
        }
        this.reword_send[3].prizeExchangeTypeId = this.radio4_3//兑奖方式

        if(this.radio4_3==1){
          this.public3=true,
            this.shop_info3=false
          this.ser_info3=false

        }else if(this.radio4_3==2){
          this.public3=false,
            this.shop_info3=true
          this.ser_info3=false

        }else if(this.radio4_3==3){
          this.public3=false,
            this.shop_info3=false
          this.ser_info3=true

        }else if(this.radio4_3==4){
          this.public3=false,
            this.shop_info3=false
          this.ser_info3=false
        }

        this.reword_send[3].prizeImg = this.imgData4 //上传图片
        //this.reword_send[3].jggAwardTypeList = this.reword_type4 // 奖品类型
        this.reword_send[3].prizeType = this.form.region4
        this.reword_send[3].wxPublicAccountImg = this.dialogImageUrl3//微信公众号图片

        //奖品五
        this.reword_send[4].prizeName = this.form.name5_1 //奖品名称
        this.reword_send[4].prizeNum = this.form.name5_2 //奖品数量
        this.reword_send[4].goodsId=this.reword_region4//商品内容
        this.reword_send[4].wxPublicAccountName = this.form.name5_3  //微信公众号名称
        this.reword_send[4].exchangeDesc = this.form.name5_4 //兑奖说明
        this.reword_send[4].exchangeAddress = this.form.address5//门店地址
        this.reword_send[4].exchangeTelephone = this.form.phone5_1//客服电话
        this.reword_send[4].prizeSource = this.radio5_1  //奖品来源
        this.reword_send[4].prizeCouponCodeType = this.radio5_2  //导入券码
        if(this.radio5_1==1){
          this.reword_type5=this.reword_data[4].jggAwardTypeList
          this.rewordConent4=false
        }else if(this.radio5_1==2){
          this.reword_type5=this.reword_data[4].shopGoodsTypeList
          this.rewordConent4=true
        }
        if (this.radio5_2 == 1) {
          this.handShow4 = false
        } else if (this.radio5_2 == 2) {
          this.handShow4 = true
        }
        this.reword_send[4].prizeExchangeTypeId = this.radio5_3//兑奖方式

        if(this.radio5_3==1){
          this.public4=true,
            this.shop_info4=false
          this.ser_info4=false

        }else if(this.radio5_3==2){
          this.public4=false,
            this.shop_info4=true
          this.ser_info4=false

        }else if(this.radio5_3==3){
          this.public4=false,
            this.shop_info4=false
          this.ser_info4=true

        }else if(this.radio5_3==4){
          this.public4=false,
            this.shop_info4=false
          this.ser_info4=false
        }


        this.reword_send[4].prizeImg = this.imgData5 //上传图片
        //this.reword_send[4].jggAwardTypeList = this.reword_type5 // 奖品类型
        this.reword_send[4].prizeType = this.form.region5
        this.reword_send[4].wxPublicAccountImg = this.dialogImageUrl4//微信公众号图片


        //奖品六
        this.reword_send[5].prizeName = this.form.name6_1 //奖品名称
        this.reword_send[5].prizeNum = this.form.name6_2 //奖品数量
        this.reword_send[5].goodsId=this.reword_region5//商品内容
        this.reword_send[5].wxPublicAccountName = this.form.name6_3  //微信公众号名称
        this.reword_send[5].exchangeDesc = this.form.name6_4 //兑奖说明
        this.reword_send[5].exchangeAddress = this.form.address6//门店地址
        this.reword_send[5].exchangeTelephone = this.form.phone6_1//客服电话
        this.reword_send[5].prizeSource = this.radio6_1  //奖品来源
        this.reword_send[5].prizeCouponCodeType = this.radio6_2  //导入券码
        if(this.radio6_1==1){
          this.reword_type6=this.reword_data[5].jggAwardTypeList
          this.rewordConent5=false
        }else if(this.radio6_1==2){
          this.reword_type6=this.reword_data[5].shopGoodsTypeList
          this.rewordConent5=true
        }
        if (this.radio6_2 == 1) {
          this.handShow5 = false
        } else if (this.radio6_2 == 2) {
          this.handShow5 = true
        }
        this.reword_send[5].prizeExchangeTypeId = this.radio6_3//兑奖方式

        if(this.radio6_3==1){
          this.public5=true,
            this.shop_info5=false
          this.ser_info5=false

        }else if(this.radio6_3==2){
          this.public5=false,
            this.shop_info5=true
          this.ser_info5=false

        }else if(this.radio6_3==3){
          this.public5=false,
            this.shop_info5=false
          this.ser_info5=true

        }else if(this.radio6_3==4){
          this.public5=false,
            this.shop_info5=false
          this.ser_info5=false
        }


        this.reword_send[5].prizeImg = this.imgData6 //上传图片
        this.reword_send[5].prizeType = this.form.region6
        this.reword_send[5].wxPublicAccountImg = this.dialogImageUrl5//微信公众号图片


        //奖品七
        this.reword_send[6].prizeName = this.form.name7_1 //奖品名称
        this.reword_send[6].prizeNum = this.form.name7_2 //奖品数量
        this.reword_send[6].goodsId=this.reword_region6//商品内容
        this.reword_send[6].wxPublicAccountName = this.form.name7_3  //微信公众号名称
        this.reword_send[6].exchangeDesc = this.form.name7_4 //兑奖说明
        this.reword_send[6].exchangeAddress = this.form.address7//门店地址
        this.reword_send[6].exchangeTelephone = this.form.phone7_1//客服电话
        this.reword_send[6].prizeSource = this.radio7_1  //奖品来源
        this.reword_send[6].prizeCouponCodeType = this.radio7_2  //导入券码
        if(this.radio7_1==1){
          this.reword_type7=this.reword_data[6].jggAwardTypeList
          this.rewordConent6=false
        }else if(this.radio7_1==2){
          this.reword_type7=this.reword_data[6].shopGoodsTypeList
          this.rewordConent6=true
        }
        if (this.radio7_2 == 1) {
          this.handShow6 = false
        } else if (this.radio7_2 == 2) {
          this.handShow6 = true
        }
        this.reword_send[6].prizeExchangeTypeId = this.radio7_3//兑奖方式

        if(this.radio7_3==1){
          this.public6=true,
            this.shop_info6=false
          this.ser_info6=false

        }else if(this.radio7_3==2){
          this.public6=false,
            this.shop_info6=true
          this.ser_info6=false

        }else if(this.radio7_3==3){
          this.public6=false,
            this.shop_info6=false
          this.ser_info6=true

        }else if(this.radio7_3==4){
          this.public6=false,
            this.shop_info6=false
          this.ser_info6=false
        }

        this.reword_send[6].prizeImg = this.imgData7 //上传图片
        this.reword_send[6].prizeType = this.form.region7
        this.reword_send[6].wxPublicAccountImg = this.dialogImageUrl6//微信公众号图片



        this.$store.state.setting_data.jggAwardSetupExtendList = this.reword_send
        this.$bus.emit("send_reword", this.reword_send)
      },

      onSubmit() {
        console.log('submit!');
      },

      back() {
        this.$router.go(-1)
      },

    }

  })
</script>

<style lang="scss" scoped>
  .reword_wrap {
    width: 100%;
    position: relative;
    z-index: 9;
    .reword_con {

      /* .el-upload--picture-card{
          float:left;
      } */
      .load_text {
        display: block;
        float: left;
        color: red;
      }

      .second {
        .el-radio:nth-of-type(2) {
          margin-left: 16px;
        }
      }
      .reword_type {
        width: 95%;

        /*.reword_num {*/
          /*width: 0.8rem;*/
          /*height: 0.8rem;*/
          /*line-height: 0.8rem;*/
          /*border: solid 1px #ccc;*/
          /*margin: 0 .1rem;*/
          /*text-align: center;*/
          /*display: inline-block;*/
          /*border-radius: 4px;*/
          /*cursor: pointer;*/
        /*}*/
      }
    }
  }
  .el-form-item__label{
    text-align: left;
  }
  .cddd {
    position: absolute;
    top: 10px;
    right: 1.2rem;
  }

  .el-tabs__nav .el-tabs__item {
    padding: 0px 15px;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 60px;
    color: #c5c5c5;
    width: 145px;
    height: 145px;
    line-height: 145px;
    text-align: center;
    background: #f2f2f2;
  }

  .avatar {
    width: 145px;
    height: 145px;
    display: block;
  }
  .title_Info{
    width: 550px;
    height: 28px;
    line-height: 28px;
    background: #fdf6ec;
    border-radius: 2px;
    i{
      color: #FC7132;
      margin-left: 5px;
      margin-right: 5px;
    }
    span{
      opacity: 1;
      font-family: MicrosoftYaHei;
      font-size: 12px;
      color: #FF5500;
      letter-spacing: 0;
    }
  }
</style>
