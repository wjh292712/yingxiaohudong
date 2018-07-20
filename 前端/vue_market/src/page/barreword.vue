<template>
  <div class="reword_wrap">
    <div class="reword_con">
      <el-form ref="form" :model="form" label-width="82px">
        <div class="reword_type">
          <!-- <span class="reword_num" v-for="(item,index) in reword" :key="index">{{item}}</span> -->
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <!-- 商品一 -->

            <el-tab-pane label="商品一" name="first">

              <el-form-item label="商品类型:">
                <el-select v-model="region1" placeholder="请选择">
                  <el-option
                    v-for="(item,index) in  reword_type1"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称:">
                <el-input v-model="form.name1" :disabled="actName" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="商品图片:">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess1"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span>点击图片重新上传即可更换奖品图片</span>
              </el-form-item>

              <el-form-item label="商品原价:">
                <el-input v-model="form.price1" :disabled="startPrice"   onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}$|\d{1,}]/g,'')"

                        maxlength="9"  style="width: 200px"></el-input>
                <span class="xlcontent">必须是大于0的数，支持小数点后两位</span>
              </el-form-item>
              <el-form-item label="商品底价:">
                <el-input v-model="form.priceLow1" :disabled="endPrice" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}$|\d{1,}]/g,'')"
                          style="width: 200px"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
                <span class="xlcontent">必须是大于0的数，支持小数点后两位活动发布后不允许修改</span>
              </el-form-item>
              <el-form-item label="砍价金额范围(元):" label-width="140px">
                <el-input v-model="form.input1" placeholder="请输入内容" class="nns"
                          onkeyup="value=value.replace(/[^\d]/g,'')" style="width: 200px"/>
                ——
                <el-input v-model="form.input2" placeholder="请输入内容" onkeyup="value=value.replace(/[^\d]/g,'')"
                          class="nns" style="width: 200px"/>
              </el-form-item>
              <el-form-item label="砍到底价成功概率:" label-width="140px">
                <el-input v-model="form.input3" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
                <span>%</span>
              </el-form-item>
              <el-form-item label="商品库存:">
                <el-input v-model="form.count1" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量:">
                <el-input v-model="form.countsales1" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <span class="xlcontent">展示销量 = 虚拟销量 + 实际销量</span>
              </el-form-item>
              <el-form-item label="商品详情:">
                <span class="scccc">
                  <el-upload
                    class="avatar-uploader"
                    action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess1_1"
                    :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl1_1" :src="form.imageUrl1_1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>

</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess1_2"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl1_2" :src="form.imageUrl1_2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess1_3"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl1_3" :src="form.imageUrl1_3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>

              </el-form-item>


              <el-form-item label="配送方式:" style="width:26rem;">
                <el-input type="textarea" maxlength="10" placeholder="不超过10个汉字" v-model="form.deliveryType1"
                          size="mini"></el-input>
              </el-form-item>


              <el-form-item label="发货说明:">
                <el-input type="textarea" maxlength="500" placeholder="0/500字" v-model="form.deliveryInfo1"
                          size="mini"></el-input>
              </el-form-item>


            </el-tab-pane>
            <!-- 商品二 -->
            <el-tab-pane label="商品二" name="second">
              <el-form-item label="商品类型:">
                <el-select v-model="region2" placeholder="请选择">
                  <el-option
                    v-for="(item,index) in  reword_type2"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称:">
                <el-input v-model="form.name2" :disabled="actName" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="商品图片:">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess2"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span>点击图片重新上传即可更换奖品图片</span>
              </el-form-item>

              <el-form-item label="商品原价:">
                <el-input v-model="form.price2" :disabled="startPrice" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <span class="xlcontent">必须是大于0的数，支持小数点后两位</span>
              </el-form-item>
              <el-form-item label="商品底价">
                <el-input v-model="form.priceLow2" :disabled="endPrice" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
                <span class="xlcontent">必须是大于0的数，支持小数点后两位活动发布后不允许修改</span>
              </el-form-item>
              <el-form-item label="砍价金额范围(元):" label-width="140px">
                <el-input v-model="form.input2_1" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
                ——
                <el-input v-model="form.input2_2" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
              </el-form-item>
              <el-form-item label="砍到底价成功概率:" label-width="140px">
                <el-input v-model="form.input2_3" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
                <span>%</span>
              </el-form-item>
              <el-form-item label="商品库存">
                <el-input v-model="form.count2" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input v-model="form.countsales2" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <span class="xlcontent">展示销量 = 虚拟销量 + 实际销量</span>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess2_1"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl2_1" :src="form.imageUrl2_1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess2_2"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl2_2" :src="form.imageUrl2_2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess2_3"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl2_3" :src="form.imageUrl2_3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>

              </el-form-item>


              <el-form-item label="配送方式" style="width:26rem;">
                <el-input type="textarea" maxlegnth="10" placeholder="不超过10个汉字" v-model="form.deliveryType2"
                          size="mini"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" maxlength="500" placeholder="0／500字" v-model="form.deliveryInfo2"
                          size="mini"></el-input>
              </el-form-item>


            </el-tab-pane>
            <!-- 商品三 -->
            <el-tab-pane label="商品三" name="third">
              <el-form-item label="商品类型">
                <el-select v-model="region3" placeholder="请选择">
                  <el-option
                    v-for="(item,index) in  reword_type3"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name3" :disabled="actName" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="商品图片">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess3"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl3" :src="imageUrl3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span>点击图片重新上传即可更换奖品图片</span>
              </el-form-item>

              <el-form-item label="商品原价">
                <el-input v-model="form.price3" :disabled="startPrice" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <span class="xlcontent">必须是大于0的数，支持小数点后两位</span>
              </el-form-item>
              <el-form-item label="商品底价">
                <el-input v-model="form.priceLow3" :disabled="endPrice" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
                <span class="xlcontent">必须是大于0的数，支持小数点后两位活动发布后不允许修改</span>
              </el-form-item>
              <el-form-item label="砍价金额范围(元):" label-width="140px">
                <el-input v-model="form.input3_1" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
                ——
                <el-input v-model="form.input3_2" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
              </el-form-item>
              <el-form-item label="砍到底价成功概率:" label-width="140px">
                <el-input v-model="form.input3_3" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
                <span>%</span>
              </el-form-item>
              <el-form-item label="商品库存">
                <el-input v-model="form.count3" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input v-model="form.countsales3" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <span class="xlcontent">展示销量 = 虚拟销量 + 实际销量</span>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess3_1"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl3_1" :src="form.imageUrl3_1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess3_2"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl3_2" :src="form.imageUrl3_2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess3_3"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl3_3" :src="form.imageUrl3_3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>

              </el-form-item>


              <el-form-item label="配送方式" style="width:26rem;">
                <el-input type="textarea" maxlength="10" placeholder="不超过10个汉字" v-model="form.deliveryType3"
                          size="mini"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" maxlength="500" placeholder="0/500字" v-model="form.deliveryInfo3"
                          size="mini"></el-input>
              </el-form-item>


            </el-tab-pane>

            <!-- 商品四 -->
            <el-tab-pane label="商品四" name="fourth">
              <el-form-item label="商品类型">
                <el-select v-model="region4" placeholder="请选择">
                  <el-option
                    v-for="(item,index) in  reword_type4"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name4" :disabled="actName" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="商品图片">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess4"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl4" :src="imageUrl4" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span>点击图片重新上传即可更换奖品图片</span>
              </el-form-item>

              <el-form-item label="商品原价">
                <el-input v-model="form.price4" :disabled="startPrice" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <span class="xlcontent">必须是大于0的数，支持小数点后两位</span>
              </el-form-item>
              <el-form-item label="商品底价">
                <el-input v-model="form.priceLow4" :disabled="endPrice" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
                <span class="xlcontent">必须是大于0的数，支持小数点后两位活动发布后不允许修改</span>
              </el-form-item>
              <el-form-item label="砍价金额范围(元):" label-width="140px">
                <el-input v-model="form.input4_1" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
                ——
                <el-input v-model="form.input4_2" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
              </el-form-item>
              <el-form-item label="砍到底价成功概率:" label-width="140px">
                <el-input v-model="form.input4_3" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
                <span>%</span>
              </el-form-item>
              <el-form-item label="商品库存">
                <el-input v-model="form.count4" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input v-model="form.countsales4" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <span class="xlcontent">展示销量 = 虚拟销量 + 实际销量</span>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess4_1"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl4_1" :src="form.imageUrl4_1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess4_2"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl4_2" :src="form.imageUrl4_2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess4_3"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl4_3" :src="form.imageUrl4_3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>

              </el-form-item>


              <el-form-item label="配送方式" style="width:26rem;">
                <el-input type="textarea" maxlength="10" placeholder="不超过10个汉字" v-model="form.deliveryType4"
                          size="mini"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" maxlength="500" placeholder="0/500字" v-model="form.deliveryInfo4"
                          size="mini"></el-input>
              </el-form-item>


            </el-tab-pane>

            <!-- 商品五 -->
            <el-tab-pane label="商品五" name="fifth">
              <el-form-item label="商品类型">
                <el-select v-model="region5" placeholder="请选择">
                  <el-option
                    v-for="(item,index) in  reword_type5"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name5" :disabled="actName" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="商品图片">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess5"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl5" :src="imageUrl5" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span>点击图片重新上传即可更换奖品图片</span>
              </el-form-item>

              <el-form-item label="商品原价">
                <el-input v-model="form.price5" :disabled="startPrice" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <span class="xlcontent">必须是大于0的数，支持小数点后两位</span>
              </el-form-item>
              <el-form-item label="商品底价">
                <el-input v-model="form.priceLow5" :disabled="endPrice" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
                <span class="xlcontent">必须是大于0的数，支持小数点后两位活动发布后不允许修改</span>
              </el-form-item>
              <el-form-item label="砍价金额范围(元):" label-width="140px">
                <el-input v-model="form.input5_1" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
                ——
                <el-input v-model="form.input5_2" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
              </el-form-item>
              <el-form-item label="砍到底价成功概率:" label-width="140px">
                <el-input v-model="form.input5_3" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
                <span>%</span>
              </el-form-item>
              <el-form-item label="商品库存">
                <el-input v-model="form.count5" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input v-model="form.countsales5" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <span class="xlcontent">展示销量 = 虚拟销量 + 实际销量</span>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess5_1"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl5_1" :src="form.imageUrl5_1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess5_2"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl5_2" :src="form.imageUrl5_2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess5_3"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl5_3" :src="form.imageUrl5_3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>

              </el-form-item>


              <el-form-item label="配送方式" style="width:26rem;">
                <el-input type="textarea" maxlength="10" placeholder="不超过10个汉字" v-model="form.deliveryType5"
                          size="mini"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" maxlength="500" placeholder="0/500字" v-model="form.deliveryInfo5"
                          size="mini"></el-input>
              </el-form-item>


            </el-tab-pane>

            <!-- 商品六 -->
            <el-tab-pane label="商品六" name="six">
              <el-form-item label="商品类型">
                <el-select v-model="region6" placeholder="请选择">
                  <el-option
                    v-for="(item,index) in  reword_type6"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name6" :disabled="actName" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="商品图片">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess6"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl6" :src="imageUrl6" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span>点击图片重新上传即可更换奖品图片</span>
              </el-form-item>

              <el-form-item label="商品原价">
                <el-input v-model="form.price6" :disabled="startPrice" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <span class="xlcontent">必须是大于0的数，支持小数点后两位</span>
              </el-form-item>
              <el-form-item label="商品底价">
                <el-input v-model="form.priceLow6" :disabled="endPrice" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
                <span class="xlcontent">必须是大于0的数，支持小数点后两位活动发布后不允许修改</span>
              </el-form-item>
              <el-form-item label="砍价金额范围(元):" label-width="140px">
                <el-input v-model="form.input6_1" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
                ——
                <el-input v-model="form.input6_2" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
              </el-form-item>
              <el-form-item label="砍到底价成功概率:" label-width="140px">
                <el-input v-model="form.input6_3" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
                <span>%</span>
              </el-form-item>
              <el-form-item label="商品库存">
                <el-input v-model="form.count6" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input v-model="form.countsales1" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <span class="xlcontent">展示销量 = 虚拟销量 + 实际销量</span>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess6_1"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl6_1" :src="form.imageUrl6_1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess6_2"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl6_2" :src="form.imageUrl6_2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess6_3"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl6_3" :src="form.imageUrl6_3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>

              </el-form-item>


              <el-form-item label="配送方式" style="width:26rem;">
                <el-input type="textarea" maxlength="10" placeholder="不超过10个汉字" v-model="form.deliveryType6"
                          size="mini"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" maxlength="500" placeholder="0/500字" v-model="form.deliveryInfo6"
                          size="mini"></el-input>
              </el-form-item>


            </el-tab-pane>

            <!-- 商品七 -->
            <el-tab-pane label="商品七" name="seventh">
              <el-form-item label="商品类型">
                <el-select v-model="region7" placeholder="请选择">
                  <el-option
                    v-for="(item,index) in  reword_type7"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name7" :disabled="actName" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="商品图片">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess7"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl7" :src="imageUrl7" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span>点击图片重新上传即可更换奖品图片</span>
              </el-form-item>
              <el-form-item label="商品原价">
                <el-input v-model="form.price7" type="text" :disabled="startPrice"  onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')" style="width: 200px"></el-input>
                <span class="xlcontent">必须是大于0的数，支持小数点后两位</span>
              </el-form-item>
              <el-form-item label="商品底价">
                <el-input v-model="form.priceLow7" :disabled="endPrice" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
                <span class="xlcontent">必须是大于0的数，支持小数点后两位活动发布后不允许修改</span>
              </el-form-item>
              <el-form-item label="砍价金额范围(元):" label-width="140px">
                <el-input v-model="form.input7_1" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
                ——
                <el-input v-model="form.input7_2" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
              </el-form-item>
              <el-form-item label="砍到底价成功概率:" label-width="140px">
                <el-input v-model="form.input7_3" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入内容"
                          class="nns" style="width: 200px"/>
                <span>%</span>
              </el-form-item>
              <el-form-item label="商品库存">
                <el-input v-model="form.count7" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input v-model="form.countsales7" onkeyup="value=value.replace(/[^\d]/g,'')"
                          style="width: 200px"></el-input>
                <span class="xlcontent">展示销量 = 虚拟销量 + 实际销量</span>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess7_1"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl7_1" :src="form.imageUrl7_1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess7_2"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl7_2" :src="form.imageUrl7_2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="http://center.marketing.yunpaas.cn/kj/activitySetup/upActivityImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess7_3"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl7_3" :src="form.imageUrl7_3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                   <span>点击图片重新上传即可更换奖品图片</span>
</span>

              </el-form-item>


              <el-form-item label="配送方式" style="width:26rem;">
                <el-input type="textarea" maxlength="10" placeholder="不超过10个汉字" v-model="form.deliveryType7"
                          size="mini"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" maxlenght="500" placeholder="0/500字" v-model="form.deliveryInfo7"
                          size="mini"></el-input>
              </el-form-item>


            </el-tab-pane>

          </el-tabs>
          <!--<div class="cddd">-->
          <!--<span class="reword_num" @click="addgift()">+</span>-->
          <!--<span class="reword_num" @click="reducegift()">-</span>-->
          <!--</div>-->
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';

  export default ({
    data() {
      return {
        //dialogImageUrl: '',
        actName: false,//商品名称
        startPrice: false,//商品原价
        endPrice: false,//商品底价
        dataStatus: 0,
        imageUrl1: '',//商品图片
        imageUrl2: '',//商品图片
        imageUrl3: '',
        imageUrl4: '',
        imageUrl5: '',
        imageUrl6: '',
        imageUrl7: '',

        dialogVisible: false,
        reword: "",
        region1: '',
        region2: '',
        region3: '',
        region4: '',
        region5: '',
        region6: '',
        region7: '',
        reword_type1: [],//商品一类型
        reword_type2: [],//商品二类型
        reword_type3: [],//商品三类型
        reword_type4: [],//商品四类型
        reword_type5: [],//商品五类型
        reword_type6: [],//商品六类型
        reword_type7: [],//商品七类型
        reword_type8: [],//商品八类型
        form: {
          //商品一
          name1: '',//商品名称
          price1: '',//商品原价
          priceLow1: '',//商品底价
          count1: '',//商品库存
          countsales1: '',//虚拟销量
          imageUrl1_1: '',//商品详情1
          imageUrl1_2: '',//商品详情2
          imageUrl1_3: '',//商品详情3
          deliveryType1: '',//配送方式
          deliveryInfo1: '',//发货说明
          input1: '',//商品底价范围
          input2: '',//商品底价范围
          input3: '',//砍价概率

          // 商品二
          name2: '',//商品名称
          price2: '',//商品原价
          priceLow2: '',//商品底价
          count2: '',//商品库存
          countsales2: '',//虚拟销量
          imageUrl2_1: '',//商品详情1
          imageUrl2_2: '',//商品详情2
          imageUrl2_3: '',//商品详情3
          deliveryType2: '',//配送方式
          deliveryInfo2: '',//发货说明
          input2_1: '',//商品底价范围
          input2_2: '',//商品底价范围
          input2_3: '',//砍价概率

          // 商品三
          name3: '',//商品名称
          price3: '',//商品原价
          priceLow3: '',//商品底价
          count3: '',//商品库存
          countsales3: '',//虚拟销量
          imageUrl3_1: '',//商品详情1
          imageUrl3_2: '',//商品详情2
          imageUrl3_3: '',//商品详情3
          deliveryType3: '',//配送方式
          deliveryInfo3: '',//发货说明
          input3_1: '',//商品底价范围
          input3_2: '',//商品底价范围
          input3_3: '',//砍价概率

          // 商品四
          name4: '',//商品名称
          price4: '',//商品原价
          priceLow4: '',//商品底价
          count4: '',//商品库存
          countsales4: '',//虚拟销量
          imageUrl4_1: '',//商品详情1
          imageUrl4_2: '',//商品详情2
          imageUrl4_3: '',//商品详情3
          deliveryType4: '',//配送方式
          deliveryInfo4: '',//发货说明
          input4_1: '',//商品底价范围
          input4_2: '',//商品底价范围
          input4_3: '',//砍价概率

          // 商品五
          name5: '',//商品名称
          price5: '',//商品原价
          priceLow5: '',//商品底价
          count5: '',//商品库存
          countsales5: '',//虚拟销量
          imageUrl5_1: '',//商品详情1
          imageUrl5_2: '',//商品详情2
          imageUrl5_3: '',//商品详情3
          deliveryType5: '',//配送方式
          deliveryInfo5: '',//发货说明
          input5_1: '',//商品底价范围
          input5_2: '',//商品底价范围
          input5_3: '',//砍价概率

          // 商品六
          name6: '',//商品名称
          price6: '',//商品原价
          priceLow6: '',//商品底价
          count6: '',//商品库存
          countsales6: '',//虚拟销量
          imageUrl6_1: '',//商品详情1
          imageUrl6_2: '',//商品详情2
          imageUrl6_3: '',//商品详情3
          deliveryType6: '',//配送方式
          deliveryInfo6: '',//发货说明
          input6_1: '',//商品底价范围
          input6_2: '',//商品底价范围
          input6_3: '',//砍价概率

          // 商品七
          name7: '',//商品名称
          price7: '',//商品原价
          priceLow7: '',//商品底价
          count7: '',//商品库存
          countsales7: '',//虚拟销量
          imageUrl7_1: '',//商品详情1
          imageUrl7_2: '',//商品详情2
          imageUrl7_3: '',//商品详情3
          deliveryType7: '',//配送方式
          deliveryInfo7: '',//发货说明
          input7_1: '',//商品底价范围
          input7_2: '',//商品底价范围
          input7_3: '',//砍价概率

          // 商品八
          // name8: '',//商品名称
          // price8: '',//商品原价
          // priceLow8: '',//商品底价
          // count8: '',//商品库存
          // countsales8: '',//虚拟销量
          // imageUrl8_1: '',//商品详情1
          // imageUrl8_2: '',//商品详情2
          // imageUrl8_3: '',//商品详情3
          // deliveryType8: '',//配送方式
          // deliveryInfo8: '',//发货说明

        },
        activeName: 'first',
        reword_data: '',//接口数据保存
        reword_send: ''//奖品数据回调
      }
    },
    created() {

      // this.saveReword()
    },
    mounted() {
      // this.$store.dispatch("saveData")
      var token = sessionStorage.getItem('token')
      this.$axios({
        method: "post",
        url: "http://center.marketing.yunpaas.cn/kj/activitySetup/init?token="+token,//数据初始化接口
        params: {},
      }).then(res => {

        let setting_kjData = JSON.stringify(res.data.data)
        sessionStorage.setItem("Datakj", setting_kjData)
        this.actName = this.$route.query.actName
        this.startPrice = this.$route.query.startPrice
        this.endPrice = this.$route.query.endPrice
        this.dataStatus = this.$route.query.dataStatus
        if (this.dataStatus === undefined) {
          this.partReword()
        } else if (this.dataStatus === '1') {
          this.partReword1()
        }
      })

    },
    computed: {
      ...mapState(['setting_kjData']),
      ...mapActions(['saveDatakj']),
      sdata() {
        return this.setting_kjData
      }
    },
    updated() {
      this.saveReword()
      if (this.dataStatus === undefined) {
        this.saveReword()
      } else if (this.dataStatus === '1') {
        this.saveReword1()
      }
    },
    methods: {
      handlePictureCardPreview(file) {
        //this.imgData1 = file.url;
        this.dialogVisible = true;
      },
      handleAvatarSuccess1(res, file) {
        this.imageUrl1 = file.response.data

      },
      handleAvatarSuccess2(res, file) {
        this.imageUrl2 = file.response.data
      },
      handleAvatarSuccess3(res, file) {
        this.imageUrl3 = file.response.data
      },
      handleAvatarSuccess4(res, file) {
        this.imageUrl4 = file.response.data
      },
      handleAvatarSuccess5(res, file) {
        this.imageUrl5 = file.response.data
      },
      handleAvatarSuccess6(res, file) {
        this.imageUrl6 = file.response.data
      },
      handleAvatarSuccess7(res, file) {
        this.imageUrl7 = file.response.data
      },


      handleAvatarSuccess1_1(res, file) {
        this.form.imageUrl1_1 = file.response.data

      }, handleAvatarSuccess1_2(res, file) {
        this.form.imageUrl1_2 = file.response.data

      }, handleAvatarSuccess1_3(res, file) {
        this.form.imageUrl1_3 = file.response.data

      }, handleAvatarSuccess2_1(res, file) {
        this.form.imageUrl2_1 = file.response.data

      }, handleAvatarSuccess2_2(res, file) {
        this.form.imageUrl2_2 = file.response.data

      }, handleAvatarSuccess2_3(res, file) {
        this.form.imageUrl2_3 = file.response.data

      }, handleAvatarSuccess3_1(res, file) {
        this.form.imageUrl3_1 = file.response.data

      }, handleAvatarSuccess3_2(res, file) {
        this.form.imageUrl3_2 = file.response.data
      }, handleAvatarSuccess3_3(res, file) {
        this.form.imageUrl3_3 = file.response.data

      }, handleAvatarSuccess4_1(res, file) {
        this.form.imageUrl4_1 = file.response.data

      }, handleAvatarSuccess4_2(res, file) {
        this.form.imageUrl4_2 = file.response.data

      }, handleAvatarSuccess4_3(res, file) {
        this.form.imageUrl4_3 = file.response.data

      }, handleAvatarSuccess5_1(res, file) {
        this.form.imageUrl5_1 = file.response.data

      }, handleAvatarSuccess5_2(res, file) {
        this.form.imageUrl5_2 = file.response.data

      }, handleAvatarSuccess5_3(res, file) {
        this.form.imageUrl5_3 = file.response.data

      }, handleAvatarSuccess6_1(res, file) {
        this.form.imageUrl6_1 = file.response.data
      }, handleAvatarSuccess6_2(res, file) {
        this.form.imageUrl6_2 = file.response.data

      }, handleAvatarSuccess6_3(res, file) {
        this.form.imageUrl6_3 = file.response.data

      }, handleAvatarSuccess7_1(res, file) {
        this.form.imageUrl7_1 = file.response.data

      }, handleAvatarSuccess7_2(res, file) {
        this.form.imageUrl7_2 = file.response.data

      }, handleAvatarSuccess7_3(res, file) {
        this.form.imageUrl7_3 = file.response.data

      },


      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        // const isLt2M = file.size / 1024 / 1024 < 2;
        //
        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!');
        // }
        // return isJPG && isLt2M;
      },


      handleClick(tab, event) {
        console.log(tab, event);
      },

      //奖金设置部分的数据
      partReword() {
        let Data = sessionStorage.getItem('Datakj')
        this.reword_data = JSON.parse(Data).kjGoodsSetupExtendList
        console.log(this.reword_data)//奖品数据
        //商品一
        this.reword_type1 = this.reword_data[0].kjGoodsTypeList//商品类型
        this.region1 = this.reword_data[0].goodsType
        this.form.name1 = this.reword_data[0].goodsName//商品名称
        this.form.price1 = this.reword_data[0].goodsMarketPrice//商品原价
        this.form.priceLow1 = this.reword_data[0].goodsCostPrice//商品底价
        this.form.input1 = this.reword_data[0].hiPrice
        this.form.input2 = this.reword_data[0].lowPrice
        this.form.input3 = this.reword_data[0].probability
        this.form.count1 = this.reword_data[0].goodsStockNum//商品库存
        this.form.countsales1 = this.reword_data[0].goodsSalesNum//虚拟销量
        this.imageUrl1 = this.reword_data[0].goodsImg
        this.form.imageUrl1_1 = this.reword_data[0].goodsImg1//商品详情图片1
        this.form.imageUrl1_2 = this.reword_data[0].goodsImg2//商品详情图片2
        this.form.imageUrl1_3 = this.reword_data[0].goodsImg3//商品详情图片3
        this.form.deliveryType1 = this.reword_data[0].deliveryType//配送方式
        this.form.deliveryInfo1 = this.reword_data[0].deliveryInfo//发货说明

        // 商品二
        this.reword_type2 = this.reword_data[1].kjGoodsTypeList//商品类型
        this.region2 = this.reword_data[1].goodsType
        this.form.name2 = this.reword_data[1].goodsName//商品名称
        this.form.price2 = this.reword_data[1].goodsMarketPrice//商品原价
        this.form.priceLow2 = this.reword_data[1].goodsCostPrice//商品底价
        this.form.input2_1 = this.reword_data[1].hiPrice
        this.form.input2_2 = this.reword_data[1].lowPrice
        this.form.input2_3 = this.reword_data[1].probability
        this.form.count2 = this.reword_data[1].goodsStockNum//商品库存
        this.form.countsales2 = this.reword_data[1].goodsSalesNum//虚拟销量
        this.imageUrl2 = this.reword_data[1].goodsImg
        this.form.imageUrl2_1 = this.reword_data[1].goodsImg1//商品详情图片1
        this.form.imageUrl2_2 = this.reword_data[1].goodsImg2//商品详情图片2
        this.form.imageUrl2_3 = this.reword_data[1].goodsImg3//商品详情图片3
        this.form.deliveryType2 = this.reword_data[1].deliveryType//配送方式
        this.form.deliveryInfo2 = this.reword_data[1].deliveryInfo//发货说明        // 商品三
        this.reword_type3 = this.reword_data[2].kjGoodsTypeList//商品类型
        this.region3 = this.reword_data[2].goodsType
        this.form.name3 = this.reword_data[2].goodsName//商品名称
        this.form.price3 = this.reword_data[2].goodsMarketPrice//商品原价
        this.form.priceLow3 = this.reword_data[2].goodsCostPrice//商品底价
        this.form.input3_1 = this.reword_data[2].hiPrice
        this.form.input3_2 = this.reword_data[2].lowPrice
        this.form.input3_3 = this.reword_data[2].probability
        this.form.count3 = this.reword_data[2].goodsStockNum//商品库存
        this.form.countsales3 = this.reword_data[2].goodsSalesNum//虚拟销量
        this.imageUrl3 = this.reword_data[2].goodsImg
        this.form.imageUrl3_1 = this.reword_data[2].goodsImg1//商品详情图片1
        this.form.imageUrl3_2 = this.reword_data[2].goodsImg2//商品详情图片2
        this.form.imageUrl3_3 = this.reword_data[2].goodsImg3//商品详情图片3
        this.form.deliveryType3 = this.reword_data[2].deliveryType//配送方式
        this.form.deliveryInfo3 = this.reword_data[2].deliveryInfo//发货说明
        // 商品四
        this.reword_type4 = this.reword_data[3].kjGoodsTypeList//商品类型
        this.region4 = this.reword_data[3].goodsType
        this.form.name4 = this.reword_data[3].goodsName//商品名称
        this.form.price4 = this.reword_data[3].goodsMarketPrice//商品原价
        this.form.priceLow4 = this.reword_data[3].goodsCostPrice//商品底价
        this.form.input4_1 = this.reword_data[3].hiPrice
        this.form.input4_2 = this.reword_data[3].lowPrice
        this.form.input4_3 = this.reword_data[3].probability
        this.form.count4 = this.reword_data[3].goodsStockNum//商品库存
        this.form.countsales4 = this.reword_data[3].goodsSalesNum//虚拟销量
        this.imageUrl4 = this.reword_data[3].goodsImg
        this.form.imageUrl4_1 = this.reword_data[3].goodsImg1//商品详情图片1
        this.form.imageUrl4_2 = this.reword_data[3].goodsImg2//商品详情图片2
        this.form.imageUrl4_3 = this.reword_data[3].goodsImg3//商品详情图片3
        this.form.deliveryType4 = this.reword_data[3].deliveryType//配送方式
        this.form.deliveryInfo4 = this.reword_data[3].deliveryInfo//发货说明
        // 商品五
        this.reword_type5 = this.reword_data[4].kjGoodsTypeList//商品类型
        this.form.name5 = this.reword_data[4].goodsName//商品名称
        this.region5 = this.reword_data[4].goodsType
        this.form.price5 = this.reword_data[4].goodsMarketPrice//商品原价
        this.form.priceLow5 = this.reword_data[4].goodsCostPrice//商品底价
        this.form.input5_1 = this.reword_data[4].hiPrice
        this.form.input5_2 = this.reword_data[4].lowPrice
        this.form.input5_3 = this.reword_data[4].probability
        this.form.count5 = this.reword_data[4].goodsStockNum//商品库存
        this.form.countsales5 = this.reword_data[4].goodsSalesNum//虚拟销量
        this.imageUrl5 = this.reword_data[4].goodsImg
        this.form.imageUrl5_1 = this.reword_data[4].goodsImg1//商品详情图片1
        this.form.imageUrl5_2 = this.reword_data[4].goodsImg2//商品详情图片2
        this.form.imageUrl5_3 = this.reword_data[4].goodsImg3//商品详情图片3
        this.form.deliveryType5 = this.reword_data[4].deliveryType//配送方式
        this.form.deliveryInfo5 = this.reword_data[4].deliveryInfo//发货说明         // 商品六
        this.reword_type6 = this.reword_data[5].kjGoodsTypeList//商品类型
        this.region6 = this.reword_data[5].goodsType
        this.form.name6 = this.reword_data[5].goodsName//商品名称
        this.form.price6 = this.reword_data[5].goodsMarketPrice//商品原价
        this.form.priceLow6 = this.reword_data[5].goodsCostPrice//商品底价
        this.form.input6_1 = this.reword_data[5].hiPrice
        this.form.input6_2 = this.reword_data[5].lowPrice
        this.form.input6_3 = this.reword_data[5].probability
        this.form.count6 = this.reword_data[5].goodsStockNum//商品库存
        this.form.countsales6 = this.reword_data[5].goodsSalesNum//虚拟销量
        this.imageUrl6 = this.reword_data[5].goodsImg
        this.form.imageUrl6_1 = this.reword_data[5].goodsImg1//商品详情图片1
        this.form.imageUrl6_2 = this.reword_data[5].goodsImg2//商品详情图片2
        this.form.imageUrl6_3 = this.reword_data[5].goodsImg3//商品详情图片3
        this.form.deliveryType6 = this.reword_data[5].deliveryType//配送方式
        this.form.deliveryInfo6 = this.reword_data[5].deliveryInfo//发货说明         // 商品七
        this.reword_type7 = this.reword_data[6].kjGoodsTypeList//商品类型
        this.region7 = this.reword_data[6].goodsType
        this.form.name7 = this.reword_data[6].goodsName//商品名称
        this.form.price7 = this.reword_data[6].goodsMarketPrice//商品原价
        this.form.priceLow7 = this.reword_data[6].goodsCostPrice//商品底价
        this.form.input7_1 = this.reword_data[6].hiPrice
        this.form.input7_2 = this.reword_data[6].lowPrice
        this.form.input7_3 = this.reword_data[6].probability
        this.form.count7 = this.reword_data[6].goodsStockNum//商品库存
        this.form.countsales7 = this.reword_data[6].goodsSalesNum//虚拟销量
        this.imageUrl7 = this.reword_data[6].goodsImg
        this.form.imageUrl7_1 = this.reword_data[6].goodsImg1//商品详情图片1
        this.form.imageUrl7_2 = this.reword_data[6].goodsImg2//商品详情图片2
        this.form.imageUrl7_3 = this.reword_data[6].goodsImg3//商品详情图片3
        this.form.deliveryType7 = this.reword_data[6].deliveryType//配送方式
        this.form.deliveryInfo7 = this.reword_data[6].deliveryInfo//发货说明

      },
      partReword1() {

        this.reword_data = this.$route.query.newkjData.kjGoodsSetupExtendList
        // console.log(this.reword_data)//奖品数据
        //商品一
        this.reword_type1 = this.reword_data[0].kjGoodsTypeList//商品类型
        this.region1 = this.reword_data[0].goodsType
        this.form.name1 = this.reword_data[0].goodsName//商品名称
        this.form.price1 = this.reword_data[0].goodsMarketPrice//商品原价
        this.form.priceLow1 = this.reword_data[0].goodsCostPrice//商品底价
        this.form.input1 = this.reword_data[0].hiPrice
        this.form.input2 = this.reword_data[0].lowPrice
        this.form.input3 = this.reword_data[0].probability
        this.form.count1 = this.reword_data[0].goodsStockNum//商品库存
        this.form.countsales1 = this.reword_data[0].goodsSalesNum//虚拟销量
        this.imageUrl1 = this.reword_data[0].goodsImg
        this.form.imageUrl1_1 = this.reword_data[0].goodsImg1//商品详情图片1
        this.form.imageUrl1_2 = this.reword_data[0].goodsImg2//商品详情图片2
        this.form.imageUrl1_3 = this.reword_data[0].goodsImg3//商品详情图片3
        this.form.deliveryType1 = this.reword_data[0].deliveryType//配送方式
        this.form.deliveryInfo1 = this.reword_data[0].deliveryInfo//发货说明

        // 商品二
        this.reword_type2 = this.reword_data[1].kjGoodsTypeList//商品类型
        this.region2 = this.reword_data[1].goodsType
        this.form.name2 = this.reword_data[1].goodsName//商品名称
        this.form.price2 = this.reword_data[1].goodsMarketPrice//商品原价
        this.form.priceLow2 = this.reword_data[1].goodsCostPrice//商品底价
        this.form.input2_1 = this.reword_data[1].hiPrice
        this.form.input2_2 = this.reword_data[1].lowPrice
        this.form.input2_3 = this.reword_data[1].probability
        this.form.count2 = this.reword_data[1].goodsStockNum//商品库存
        this.form.countsales2 = this.reword_data[1].goodsSalesNum//虚拟销量
        this.imageUrl2 = this.reword_data[1].goodsImg
        this.form.imageUrl2_1 = this.reword_data[1].goodsImg1//商品详情图片1
        this.form.imageUrl2_2 = this.reword_data[1].goodsImg2//商品详情图片2
        this.form.imageUrl2_3 = this.reword_data[1].goodsImg3//商品详情图片3
        this.form.deliveryType2 = this.reword_data[1].deliveryType//配送方式
        this.form.deliveryInfo2 = this.reword_data[1].deliveryInfo//发货说明        // 商品三
        this.reword_type3 = this.reword_data[2].kjGoodsTypeList//商品类型
        this.region3 = this.reword_data[2].goodsType
        this.form.name3 = this.reword_data[2].goodsName//商品名称
        this.form.price3 = this.reword_data[2].goodsMarketPrice//商品原价
        this.form.priceLow3 = this.reword_data[2].goodsCostPrice//商品底价
        this.form.input3_1 = this.reword_data[2].hiPrice
        this.form.input3_2 = this.reword_data[2].lowPrice
        this.form.input3_3 = this.reword_data[2].probability
        this.form.count3 = this.reword_data[2].goodsStockNum//商品库存
        this.form.countsales3 = this.reword_data[2].goodsSalesNum//虚拟销量
        this.imageUrl3 = this.reword_data[2].goodsImg
        this.form.imageUrl3_1 = this.reword_data[2].goodsImg1//商品详情图片1
        this.form.imageUrl3_2 = this.reword_data[2].goodsImg2//商品详情图片2
        this.form.imageUrl3_3 = this.reword_data[2].goodsImg3//商品详情图片3
        this.form.deliveryType3 = this.reword_data[2].deliveryType//配送方式
        this.form.deliveryInfo3 = this.reword_data[2].deliveryInfo//发货说明
        // 商品四
        this.reword_type4 = this.reword_data[3].kjGoodsTypeList//商品类型
        this.region4 = this.reword_data[3].goodsType
        this.form.name4 = this.reword_data[3].goodsName//商品名称
        this.form.price4 = this.reword_data[3].goodsMarketPrice//商品原价
        this.form.priceLow4 = this.reword_data[3].goodsCostPrice//商品底价
        this.form.input4_1 = this.reword_data[3].hiPrice
        this.form.input4_2 = this.reword_data[3].lowPrice
        this.form.input4_3 = this.reword_data[3].probability
        this.form.count4 = this.reword_data[3].goodsStockNum//商品库存
        this.form.countsales4 = this.reword_data[3].goodsSalesNum//虚拟销量
        this.imageUrl4 = this.reword_data[3].goodsImg
        this.form.imageUrl4_1 = this.reword_data[3].goodsImg1//商品详情图片1
        this.form.imageUrl4_2 = this.reword_data[3].goodsImg2//商品详情图片2
        this.form.imageUrl4_3 = this.reword_data[3].goodsImg3//商品详情图片3
        this.form.deliveryType4 = this.reword_data[3].deliveryType//配送方式
        this.form.deliveryInfo4 = this.reword_data[3].deliveryInfo//发货说明
        // 商品五
        this.reword_type5 = this.reword_data[4].kjGoodsTypeList//商品类型
        this.region5 = this.reword_data[4].goodsType
        this.form.name5 = this.reword_data[4].goodsName//商品名称
        this.form.price5 = this.reword_data[4].goodsMarketPrice//商品原价
        this.form.priceLow5 = this.reword_data[4].goodsCostPrice//商品底价
        this.form.input5_1 = this.reword_data[4].hiPrice
        this.form.input5_2 = this.reword_data[4].lowPrice
        this.form.input5_3 = this.reword_data[4].probability
        this.form.count5 = this.reword_data[4].goodsStockNum//商品库存
        this.form.countsales5 = this.reword_data[4].goodsSalesNum//虚拟销量
        this.imageUrl5 = this.reword_data[4].goodsImg
        this.form.imageUrl5_1 = this.reword_data[4].goodsImg1//商品详情图片1
        this.form.imageUrl5_2 = this.reword_data[4].goodsImg2//商品详情图片2
        this.form.imageUrl5_3 = this.reword_data[4].goodsImg3//商品详情图片3
        this.form.deliveryType5 = this.reword_data[4].deliveryType//配送方式
        this.form.deliveryInfo5 = this.reword_data[4].deliveryInfo//发货说明         // 商品六
        this.reword_type6 = this.reword_data[5].kjGoodsTypeList//商品类型
        this.region6 = this.reword_data[5].goodsType
        this.form.name6 = this.reword_data[5].goodsName//商品名称
        this.form.price6 = this.reword_data[5].goodsMarketPrice//商品原价
        this.form.priceLow6 = this.reword_data[5].goodsCostPrice//商品底价
        this.form.input6_1 = this.reword_data[5].hiPrice
        this.form.input6_2 = this.reword_data[5].lowPrice
        this.form.input6_3 = this.reword_data[5].probability
        this.form.count6 = this.reword_data[5].goodsStockNum//商品库存
        this.form.countsales6 = this.reword_data[5].goodsSalesNum//虚拟销量
        this.imageUrl6 = this.reword_data[5].goodsImg
        this.form.imageUrl6_1 = this.reword_data[5].goodsImg1//商品详情图片1
        this.form.imageUrl6_2 = this.reword_data[5].goodsImg2//商品详情图片2
        this.form.imageUrl6_3 = this.reword_data[5].goodsImg3//商品详情图片3
        this.form.deliveryType6 = this.reword_data[5].deliveryType//配送方式
        this.form.deliveryInfo6 = this.reword_data[5].deliveryInfo//发货说明         // 商品七
        this.reword_type7 = this.reword_data[6].kjGoodsTypeList//商品类型
        this.region7 = this.reword_data[6].goodsType
        this.form.name7 = this.reword_data[6].goodsName//商品名称
        this.form.price7 = this.reword_data[6].goodsMarketPrice//商品原价
        this.form.priceLow7 = this.reword_data[6].goodsCostPrice//商品底价
        this.form.input7_1 = this.reword_data[6].hiPrice
        this.form.input7_2 = this.reword_data[6].lowPrice
        this.form.input7_3 = this.reword_data[6].probability
        this.form.count7 = this.reword_data[6].goodsStockNum//商品库存
        this.form.countsales7 = this.reword_data[6].goodsSalesNum//虚拟销量
        this.imageUrl7 = this.reword_data[6].goodsImg
        this.form.imageUrl7_1 = this.reword_data[6].goodsImg1//商品详情图片1
        this.form.imageUrl7_2 = this.reword_data[6].goodsImg2//商品详情图片2
        this.form.imageUrl7_3 = this.reword_data[6].goodsImg3//商品详情图片3
        this.form.deliveryType7 = this.reword_data[6].deliveryType//配送方式
        this.form.deliveryInfo7 = this.reword_data[6].deliveryInfo//发货说明

      },
      //保存奖品数据
      saveReword() {
        // this.$store.dispatch("saveData")
        let Data = sessionStorage.getItem('Datakj')
        this.reword_send = JSON.parse(Data).kjGoodsSetupExtendList
        //商品一
        this.reword_send[0].kjGoodsTypeList = this.reword_type1//商品类型
        this.reword_send[0].goodsType = this.region1
        this.reword_send[0].goodsName = this.form.name1 //商品名称
        this.reword_send[0].goodsMarketPrice = this.form.price1//商品原价
        this.reword_send[0].goodsCostPrice = this.form.priceLow1 //商品底价
        this.reword_send[0].hiPrice = this.form.input1
        this.reword_send[0].lowPrice = this.form.input2
        this.reword_send[0].probability = this.form.input3
        this.reword_send[0].goodsStockNum = this.form.count1//商品库存
        this.reword_send[0].goodsSalesNum = this.form.countsales1//虚拟销量
        this.reword_send[0].goodsImg = this.imageUrl1
        this.reword_send[0].goodsImg1 = this.form.imageUrl1_1//商品详情图片1
        this.reword_send[0].goodsImg2 = this.form.imageUrl1_2//商品详情图片2
        this.reword_send[0].goodsImg3 = this.form.imageUrl1_3//商品详情图片3
        this.reword_send[0].deliveryType = this.form.deliveryType1//配送方式
        this.reword_send[0].deliveryInfo = this.form.deliveryInfo1//发货说明
        // 商品二
        this.reword_send[1].kjGoodsTypeList = this.reword_type2
        this.reword_send[1].goodsType = this.region2
        this.reword_send[1].goodsName = this.form.name2
        this.reword_send[1].goodsMarketPrice = this.form.price2
        this.reword_send[1].goodsCostPrice = this.form.priceLow2
        this.reword_send[1].hiPrice = this.form.input2_1
        this.reword_send[1].lowPrice = this.form.input2_2
        this.reword_send[1].probability = this.form.input2_3
        this.reword_send[1].goodsStockNum = this.form.count2
        this.reword_send[1].goodsSalesNum = this.form.countsales2
        this.reword_send[1].goodsImg = this.imageUrl2
        this.reword_send[1].goodsImg1 = this.form.imageUrl2_1
        this.reword_send[1].goodsImg2 = this.form.imageUrl2_2
        this.reword_send[1].goodsImg3 = this.form.imageUrl2_3
        this.reword_send[1].deliveryType = this.form.deliveryType2
        this.reword_send[1].deliveryInfo = this.form.deliveryInfo2

        //商品三
        this.reword_send[2].kjGoodsTypeList = this.reword_type3
        this.reword_send[2].goodsType = this.region3
        this.reword_send[2].goodsName = this.form.name3
        this.reword_send[2].goodsMarketPrice = this.form.price3
        this.reword_send[2].goodsCostPrice = this.form.priceLow3
        this.reword_send[2].hiPrice = this.form.input3_1
        this.reword_send[2].lowPrice = this.form.input3_2
        this.reword_send[2].probability = this.form.input3_3
        this.reword_send[2].goodsStockNum = this.form.count3
        this.reword_send[2].goodsSalesNum = this.form.countsales3
        this.reword_send[2].goodsImg = this.imageUrl3
        this.reword_send[2].goodsImg1 = this.form.imageUrl3_1
        this.reword_send[2].goodsImg2 = this.form.imageUrl3_2
        this.reword_send[2].goodsImg3 = this.form.imageUrl3_3
        this.reword_send[2].deliveryType = this.form.deliveryType3
        this.reword_send[2].deliveryInfo = this.form.deliveryInfo3

        //商品四
        this.reword_send[3].kjGoodsTypeList = this.reword_type4
        this.reword_send[3].goodsType = this.region4
        this.reword_send[3].goodsName = this.form.name4
        this.reword_send[3].goodsMarketPrice = this.form.price4
        this.reword_send[3].goodsCostPrice = this.form.priceLow4
        this.reword_send[3].hiPrice = this.form.input4_1
        this.reword_send[3].lowPrice = this.form.input4_2
        this.reword_send[3].probability = this.form.input4_3
        this.reword_send[3].goodsStockNum = this.form.count4
        this.reword_send[3].goodsSalesNum = this.form.countsales4
        this.reword_send[3].goodsImg = this.imageUrl4
        this.reword_send[3].goodsImg1 = this.form.imageUrl4_1
        this.reword_send[3].goodsImg2 = this.form.imageUrl4_2
        this.reword_send[3].goodsImg3 = this.form.imageUrl4_3
        this.reword_send[3].deliveryType = this.form.deliveryType4
        this.reword_send[3].deliveryInfo = this.form.deliveryInfo4

        //商品五
        this.reword_send[4].kjGoodsTypeList = this.reword_type5
        this.reword_send[4].goodsType = this.region5
        this.reword_send[4].goodsName = this.form.name5
        this.reword_send[4].goodsMarketPrice = this.form.price5
        this.reword_send[4].goodsCostPrice = this.form.priceLow5
        this.reword_send[4].hiPrice = this.form.input5_1
        this.reword_send[4].lowPrice = this.form.input5_2
        this.reword_send[4].probability = this.form.input5_3
        this.reword_send[4].goodsStockNum = this.form.count5
        this.reword_send[4].goodsSalesNum = this.form.countsales5
        this.reword_send[4].goodsImg = this.imageUrl5
        this.reword_send[4].goodsImg1 = this.form.imageUrl5_1
        this.reword_send[4].goodsImg2 = this.form.imageUrl5_2
        this.reword_send[4].goodsImg3 = this.form.imageUrl5_3
        this.reword_send[4].deliveryType = this.form.deliveryType5
        this.reword_send[4].deliveryInfo = this.form.deliveryInfo5

        //商品六
        this.reword_send[5].kjGoodsTypeList = this.reword_type6
        this.reword_send[5].goodsType = this.region6
        this.reword_send[5].goodsName = this.form.name6
        this.reword_send[5].goodsMarketPrice = this.form.price6
        this.reword_send[5].goodsCostPrice = this.form.priceLow6
        this.reword_send[5].hiPrice = this.form.input6_1
        this.reword_send[5].lowPrice = this.form.input6_2
        this.reword_send[5].probability = this.form.input6_3
        this.reword_send[5].goodsStockNum = this.form.count6
        this.reword_send[5].goodsSalesNum = this.form.countsales6
        this.reword_send[5].goodsImg = this.imageUrl6
        this.reword_send[5].goodsImg1 = this.form.imageUrl6_1
        this.reword_send[5].goodsImg2 = this.form.imageUrl6_2
        this.reword_send[5].goodsImg3 = this.form.imageUrl6_3
        this.reword_send[5].deliveryType = this.form.deliveryType6
        this.reword_send[5].deliveryInfo = this.form.deliveryInfo6

        //商品七
        this.reword_send[6].kjGoodsTypeList = this.reword_type7
        this.reword_send[6].goodsType = this.region7
        this.reword_send[6].goodsName = this.form.name7
        this.reword_send[6].goodsMarketPrice = this.form.price7
        this.reword_send[6].goodsCostPrice = this.form.priceLow7
        this.reword_send[6].hiPrice = this.form.input7_1
        this.reword_send[6].lowPrice = this.form.input7_2
        this.reword_send[6].probability = this.form.input7_3
        this.reword_send[6].goodsStockNum = this.form.count7
        this.reword_send[6].goodsSalesNum = this.form.countsales7
        this.reword_send[6].goodsImg = this.imageUrl7
        this.reword_send[6].goodsImg1 = this.form.imageUrl7_1
        this.reword_send[6].goodsImg2 = this.form.imageUrl7_2
        this.reword_send[6].goodsImg3 = this.form.imageUrl7_3
        this.reword_send[6].deliveryType = this.form.deliveryType7
        this.reword_send[6].deliveryInfo = this.form.deliveryInfo7
        this.$store.state.setting_kjData.kjGoodsSetupExtendList = this.reword_send
        this.$bus.emit("send_reword", this.reword_send)
        console.log(this.reword_send)
      },
      saveReword1() {
        // this.$store.dispatch("saveData")

        this.reword_send = this.$route.query.newkjData.kjGoodsSetupExtendList
        //商品一
        this.reword_send[0].kjGoodsTypeList = this.reword_type1//商品类型
        this.reword_send[0].goodsType = this.region1
        this.reword_send[0].goodsName = this.form.name1 //商品名称
        this.reword_send[0].goodsMarketPrice = this.form.price1//商品原价
        this.reword_send[0].goodsCostPrice = this.form.priceLow1 //商品底价
        this.reword_send[0].hiPrice = this.form.input1
        this.reword_send[0].lowPrice = this.form.input2
        this.reword_send[0].probability = this.form.input3
        this.reword_send[0].goodsStockNum = this.form.count1//商品库存
        this.reword_send[0].goodsSalesNum = this.form.countsales1//虚拟销量
        this.reword_send[0].goodsImg1 = this.form.imageUrl1_1//商品详情图片1
        this.reword_send[0].goodsImg2 = this.form.imageUrl1_2//商品详情图片2
        this.reword_send[0].goodsImg3 = this.form.imageUrl1_3//商品详情图片3
        this.reword_send[0].deliveryType = this.form.deliveryType1//配送方式
        this.reword_send[0].deliveryInfo = this.form.deliveryInfo1//发货说明
        // 商品二
        this.reword_send[1].kjGoodsTypeList = this.reword_type2
        this.reword_send[1].goodsType = this.region2
        this.reword_send[1].goodsName = this.form.name2
        this.reword_send[1].goodsMarketPrice = this.form.price2
        this.reword_send[1].goodsCostPrice = this.form.priceLow2
        this.reword_send[1].hiPrice = this.form.input2_1
        this.reword_send[1].lowPrice = this.form.input2_2
        this.reword_send[1].probability = this.form.input2_3
        this.reword_send[1].goodsStockNum = this.form.count2
        this.reword_send[1].goodsSalesNum = this.form.countsales2
        this.reword_send[1].goodsImg1 = this.form.imageUrl2_1
        this.reword_send[1].goodsImg2 = this.form.imageUrl2_2
        this.reword_send[1].goodsImg3 = this.form.imageUrl2_3
        this.reword_send[1].deliveryType = this.form.deliveryType2
        this.reword_send[1].deliveryInfo = this.form.deliveryInfo2

        //商品三
        this.reword_send[2].kjGoodsTypeList = this.reword_type3
        this.reword_send[2].goodsType = this.region3
        this.reword_send[2].goodsName = this.form.name3
        this.reword_send[2].goodsMarketPrice = this.form.price3
        this.reword_send[2].goodsCostPrice = this.form.priceLow3
        this.reword_send[2].hiPrice = this.form.input3_1
        this.reword_send[2].lowPrice = this.form.input3_2
        this.reword_send[2].probability = this.form.input3_3
        this.reword_send[2].goodsStockNum = this.form.count3
        this.reword_send[2].goodsSalesNum = this.form.countsales3
        this.reword_send[2].goodsImg1 = this.form.imageUrl3_1
        this.reword_send[2].goodsImg2 = this.form.imageUrl3_2
        this.reword_send[2].goodsImg3 = this.form.imageUrl3_3
        this.reword_send[2].deliveryType = this.form.deliveryType3
        this.reword_send[2].deliveryInfo = this.form.deliveryInfo3

        //商品四
        this.reword_send[3].kjGoodsTypeList = this.reword_type4
        this.reword_send[3].goodsType = this.region4
        this.reword_send[3].goodsName = this.form.name4
        this.reword_send[3].goodsMarketPrice = this.form.price4
        this.reword_send[3].goodsCostPrice = this.form.priceLow4
        this.reword_send[3].hiPrice = this.form.input4_1
        this.reword_send[3].lowPrice = this.form.input4_2
        this.reword_send[3].probability = this.form.input4_3
        this.reword_send[3].goodsStockNum = this.form.count4
        this.reword_send[3].goodsSalesNum = this.form.countsales4
        this.reword_send[3].goodsImg1 = this.form.imageUrl4_1
        this.reword_send[3].goodsImg2 = this.form.imageUrl4_2
        this.reword_send[3].goodsImg3 = this.form.imageUrl4_3
        this.reword_send[3].deliveryType = this.form.deliveryType4
        this.reword_send[3].deliveryInfo = this.form.deliveryInfo4

        //商品五
        this.reword_send[4].kjGoodsTypeList = this.reword_type5
        this.reword_send[4].goodsType = this.region5
        this.reword_send[4].goodsName = this.form.name5
        this.reword_send[4].goodsMarketPrice = this.form.price5
        this.reword_send[4].goodsCostPrice = this.form.priceLow5
        this.reword_send[4].hiPrice = this.form.input5_1
        this.reword_send[4].lowPrice = this.form.input5_2
        this.reword_send[4].probability = this.form.input5_3
        this.reword_send[4].goodsStockNum = this.form.count5
        this.reword_send[4].goodsSalesNum = this.form.countsales5
        this.reword_send[4].goodsImg1 = this.form.imageUrl5_1
        this.reword_send[4].goodsImg2 = this.form.imageUrl5_2
        this.reword_send[4].goodsImg3 = this.form.imageUrl5_3
        this.reword_send[4].deliveryType = this.form.deliveryType5
        this.reword_send[4].deliveryInfo = this.form.deliveryInfo5

        //商品六
        this.reword_send[5].kjGoodsTypeList = this.reword_type6
        this.reword_send[5].goodsType = this.region6
        this.reword_send[5].goodsName = this.form.name6
        this.reword_send[5].goodsMarketPrice = this.form.price6
        this.reword_send[5].goodsCostPrice = this.form.priceLow6
        this.reword_send[5].hiPrice = this.form.input6_1
        this.reword_send[5].lowPrice = this.form.input6_2
        this.reword_send[5].probability = this.form.input6_3
        this.reword_send[5].goodsStockNum = this.form.count6
        this.reword_send[5].goodsSalesNum = this.form.countsales6
        this.reword_send[5].goodsImg1 = this.form.imageUrl6_1
        this.reword_send[5].goodsImg2 = this.form.imageUrl6_2
        this.reword_send[5].goodsImg3 = this.form.imageUrl6_3
        this.reword_send[5].deliveryType = this.form.deliveryType6
        this.reword_send[5].deliveryInfo = this.form.deliveryInfo6

        //商品七
        this.reword_send[6].kjGoodsTypeList = this.reword_type7
        this.reword_send[6].goodsType = this.region7
        this.reword_send[6].goodsName = this.form.name7
        this.reword_send[6].goodsMarketPrice = this.form.price7
        this.reword_send[6].goodsCostPrice = this.form.priceLow7
        this.reword_send[6].hiPrice = this.form.input7_1
        this.reword_send[6].lowPrice = this.form.input7_2
        this.reword_send[6].probability = this.form.input7_3
        this.reword_send[6].goodsStockNum = this.form.count7
        this.reword_send[6].goodsSalesNum = this.form.countsales7
        this.reword_send[6].goodsImg1 = this.form.imageUrl7_1
        this.reword_send[6].goodsImg2 = this.form.imageUrl7_2
        this.reword_send[6].goodsImg3 = this.form.imageUrl7_3
        this.reword_send[6].deliveryType = this.form.deliveryType7
        this.reword_send[6].deliveryInfo = this.form.deliveryInfo7
        this.$store.state.setting_kjData.kjGoodsSetupExtendList = this.reword_send
        this.$bus.emit("send_reword", this.reword_send)
        console.log(this.reword_send)
      },
      //添加奖品
      addgift() {
        if (this.reword.length == 7) {
          this.reword.push('奖金八')
        } else {
          alert("最多添加8个奖品")
        }

      },
      //删除奖品
      reducegift() {
        if (this.reword.length == 8) {
          this.reword.splice(7, 1)
        } else {
          alert("至少添加7个奖品")
        }
      },
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
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
        margin: 0 auto .5rem;
        .reword_num {
          right: 2rem;
          top: 0;
          width: 1rem;
          height: 1rem;
          line-height: 1rem;
          border: solid 1px #ccc;
          margin: 0 .1rem;
          text-align: center;
          display: inline-block;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
  }

  .cddd {
    position: absolute;
    top: 10px;
    right: 1rem;
  }

  .scccc {
    display: inline-block;
    float: left;
    padding: 10px;
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
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
    background: #f2f2f2;
  }

  .avatar {
    width: 150px;
    height: 150px;
    display: block;
  }

  .xlcontent {
    display: inline-block;
    color: #a1a1a1;
  }
</style>
