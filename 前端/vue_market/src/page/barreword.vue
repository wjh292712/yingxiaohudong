<template>
  <div class="reword_wrap">
    <div class="reword_con">
      <el-form ref="form" :model="form" label-width="82px">
        <div class="reword_type">
          <!-- <span class="reword_num" v-for="(item,index) in reword" :key="index">{{item}}</span> -->
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <!-- 商品一 -->

            <el-tab-pane label="商品一" name="first">

              <el-form-item label="商品类型">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in  reword_type1"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name1"  :disabled="actName" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="商品图片">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>

              <el-form-item label="商品原价">
                <el-input v-model="form.price1" :disabled="startPrice" placeholder="必须是大于0的数，支持小数点后两位"></el-input>
              </el-form-item>
              <el-form-item label="商品底价">
                <el-input v-model="form.priceLow1" :disabled="endPrice" placeholder="必须是大于0的数，支持小数点后两位活动发布后不允许修改" onkeyup="value=value.replace(/[^\d]/g,'')"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="商品库存">
                <el-input type="textarea" v-model="form.count1" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input type="textarea" v-model="form.countsales1" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl1_1" :src="form.imageUrl1_1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl1_2" :src="iform.imageUrl1_2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl1_3" :src="form.imageUrl1_3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>

              </el-form-item>


              <el-form-item label="配送方式" style="width:26rem;">
                <el-input type="textarea" v-model="form.deliveryType1" size="mini"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" v-model="form.deliveryInfo1" size="mini"></el-input>
              </el-form-item>


            </el-tab-pane>
            <!-- 商品二 -->
            <el-tab-pane label="商品二" name="second">
              <el-form-item label="商品类型">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in  reword_type2"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name2"  :disabled="actName"  placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="商品图片">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>

              <el-form-item label="商品原价">
                <el-input v-model="form.price2" :disabled="startPrice" placeholder="必须是大于0的数，支持小数点后两位" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="商品底价">
                <el-input v-model="form.priceLow2" :disabled="endPrice" placeholder="必须是大于0的数，支持小数点后两位活动发布后不允许修改" size="mini"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="商品库存">
                <el-input type="textarea" v-model="form.count2" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input type="textarea" v-model="form.countsales2" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl2_1" :src="form.imageUrl2_1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl2_2" :src="iform.imageUrl2_2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl2_3" :src="form.imageUrl2_3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>

              </el-form-item>


              <el-form-item label="配送方式" style="width:26rem;">
                <el-input type="textarea" v-model="form.deliveryType2" size="mini"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" v-model="form.deliveryInfo2" size="mini"></el-input>
              </el-form-item>



            </el-tab-pane>
            <!-- 商品三 -->
            <el-tab-pane label="商品三" name="third">
              <el-form-item label="商品类型">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in  reword_type3"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name3"  :disabled="actName"  placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="商品图片">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>

              <el-form-item label="商品原价">
                <el-input v-model="form.price3" :disabled="startPrice" placeholder="必须是大于0的数，支持小数点后两位" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="商品底价">
                <el-input v-model="form.priceLow3" :disabled="endPrice" placeholder="必须是大于0的数，支持小数点后两位活动发布后不允许修改" size="mini"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="商品库存">
                <el-input type="textarea" v-model="form.count3" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input type="textarea" v-model="form.countsales3" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl3_1" :src="form.imageUrl3_1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl3_2" :src="iform.imageUrl3_2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl3_3" :src="form.imageUrl3_3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>

              </el-form-item>


              <el-form-item label="配送方式" style="width:26rem;">
                <el-input type="textarea" v-model="form.deliveryType3" size="mini"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" v-model="form.deliveryInfo3" size="mini"></el-input>
              </el-form-item>




            </el-tab-pane>

            <!-- 商品四 -->
            <el-tab-pane label="商品四" name="fourth">
              <el-form-item label="商品类型">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in  reword_type4"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name4"  :disabled="actName"  placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="商品图片">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>

              <el-form-item label="商品原价">
                <el-input v-model="form.price4" :disabled="startPrice" placeholder="必须是大于0的数，支持小数点后两位" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="商品底价">
                <el-input v-model="form.priceLow4" :disabled="endPrice" placeholder="必须是大于0的数，支持小数点后两位活动发布后不允许修改" size="mini"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="商品库存">
                <el-input type="textarea" v-model="form.count4" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input type="textarea" v-model="form.countsales4" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl4_1" :src="form.imageUrl4_1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl4_2" :src="iform.imageUrl4_2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl4_3" :src="form.imageUrl4_3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>

              </el-form-item>


              <el-form-item label="配送方式" style="width:26rem;">
                <el-input type="textarea" v-model="form.deliveryType4" size="mini"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" v-model="form.deliveryInfo4" size="mini"></el-input>
              </el-form-item>



            </el-tab-pane>

            <!-- 商品五 -->
            <el-tab-pane label="商品五" name="fifth">
              <el-form-item label="商品类型">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in  reword_type5"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name5"  :disabled="actName"  placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="商品图片">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>

              <el-form-item label="商品原价">
                <el-input v-model="form.price5" :disabled="startPrice" placeholder="必须是大于0的数，支持小数点后两位" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="商品底价">
                <el-input v-model="form.priceLow5" :disabled="endPrice" placeholder="必须是大于0的数，支持小数点后两位活动发布后不允许修改" size="mini"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="商品库存">
                <el-input type="textarea" v-model="form.count5" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input type="textarea" v-model="form.countsales5" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl5_1" :src="form.imageUrl5_1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl5_2" :src="iform.imageUrl5_2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl5_3" :src="form.imageUrl5_3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>

              </el-form-item>


              <el-form-item label="配送方式" style="width:26rem;">
                <el-input type="textarea" v-model="form.deliveryType5" size="mini"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" v-model="form.deliveryInfo5" size="mini"></el-input>
              </el-form-item>


            </el-tab-pane>

            <!-- 商品六 -->
            <el-tab-pane label="商品六" name="six">
              <el-form-item label="商品类型">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in  reword_type6"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name6"  :disabled="actName"  placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="商品图片">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>

              <el-form-item label="商品原价">
                <el-input v-model="form.price6" :disabled="startPrice" placeholder="必须是大于0的数，支持小数点后两位" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="商品底价">
                <el-input v-model="form.priceLow6" :disabled="endPrice" placeholder="必须是大于0的数，支持小数点后两位活动发布后不允许修改" size="mini"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="商品库存">
                <el-input type="textarea" v-model="form.count6" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input type="textarea" v-model="form.countsales1" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl6_1" :src="form.imageUrl6_1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl6_2" :src="iform.imageUrl6_2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl6_3" :src="form.imageUrl6_3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>

              </el-form-item>


              <el-form-item label="配送方式" style="width:26rem;">
                <el-input type="textarea" v-model="form.deliveryType6" size="mini"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" v-model="form.deliveryInfo6" size="mini"></el-input>
              </el-form-item>



            </el-tab-pane>

            <!-- 商品七 -->
            <el-tab-pane label="商品七" name="seventh">
              <el-form-item label="商品类型">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in  reword_type7"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name7"  :disabled="actName"  placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="商品图片">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>

              <el-form-item label="商品原价">
                <el-input v-model="form.price7" :disabled="startPrice" placeholder="必须是大于0的数，支持小数点后两位" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="商品底价">
                <el-input v-model="form.priceLow7" :disabled="endPrice" placeholder="必须是大于0的数，支持小数点后两位活动发布后不允许修改" size="mini"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="商品库存">
                <el-input type="textarea" v-model="form.count7" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input type="textarea" v-model="form.countsales7" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl7_1" :src="form.imageUrl7_1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl7_2" :src="iform.imageUrl7_2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="form.imageUrl7_3" :src="form.imageUrl7_3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>

              </el-form-item>


              <el-form-item label="配送方式" style="width:26rem;">
                <el-input type="textarea" v-model="form.deliveryType7" size="mini"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" v-model="form.deliveryInfo7" size="mini"></el-input>
              </el-form-item>



            </el-tab-pane>

          </el-tabs>
          <div class="cddd">
            <span class="reword_num" @click="addgift()">+</span>
            <span class="reword_num" @click="reducegift()">-</span>
          </div>
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
         actName:false,//商品名称
         startPrice:false,//商品原价
         endPrice:false,//商品底价
        imageUrl: '',
        dialogVisible: false,
        reword: "",
        value: '',
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
      this.partReword()

      this.actName=this.$route.query.actName
      this.startPrice=this.$route.query.startPrice
      this.endPrice=this.$route.query.endPrice

    },
    computed: {
      ...mapState(['setting_kjData']),
      ...mapActions(['saveDatakj']),
      sdata() {
        return this.setting_kjData
      }
    },
    updated(){
      this.saveReword()
    },
    methods: {

      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
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
        this.form.name1 = this.reword_data[0].goodsName//商品名称
        this.form.price1 = this.reword_data[0].goodsMarketPrice//商品原价
        this.form.priceLow1 = this.reword_data[0].goodsCostPrice//商品底价
        this.form.count1 = this.reword_data[0].goodsStockNum//商品库存
        this.form.countsales1 = this.reword_data[0].goodsSalesNum//虚拟销量
        this.form.imageUrl1_1 = this.reword_data[0].goodsImg1//商品详情图片1
        this.form.imageUrl1_2 = this.reword_data[0].goodsImg2//商品详情图片2
        this.form.imageUrl1_3 = this.reword_data[0].goodsImg3//商品详情图片3
        this.form.deliveryType1 = this.reword_data[0].deliveryType//配送方式
        this.form.deliveryInfo1 = this.reword_data[0].deliveryInfo//发货说明

        // 商品二
        this.reword_type2 = this.reword_data[1].kjGoodsTypeList//商品类型
        this.form.name2 = this.reword_data[1].goodsName//商品名称
        this.form.price2 = this.reword_data[1].goodsMarketPrice//商品原价
        this.form.priceLow2 = this.reword_data[1].goodsCostPrice//商品底价
        this.form.count2 = this.reword_data[1].goodsStockNum//商品库存
        this.form.countsales2 = this.reword_data[1].goodsSalesNum//虚拟销量
        this.form.imageUrl2_1 = this.reword_data[1].goodsImg1//商品详情图片1
        this.form.imageUrl2_2 = this.reword_data[1].goodsImg2//商品详情图片2
        this.form.imageUrl2_3 = this.reword_data[1].goodsImg3//商品详情图片3
        this.form.deliveryType2 = this.reword_data[1].deliveryType//配送方式
        this.form.deliveryInfo2 = this.reword_data[1].deliveryInfo//发货说明        // 商品三
        this.reword_type3 = this.reword_data[2].kjGoodsTypeList//商品类型
        this.form.name3 = this.reword_data[2].goodsName//商品名称
        this.form.price3 = this.reword_data[2].goodsMarketPrice//商品原价
        this.form.priceLow3 = this.reword_data[2].goodsCostPrice//商品底价
        this.form.count3 = this.reword_data[2].goodsStockNum//商品库存
        this.form.countsales3 = this.reword_data[2].goodsSalesNum//虚拟销量
        this.form.imageUrl3_1 = this.reword_data[2].goodsImg1//商品详情图片1
        this.form.imageUrl3_2 = this.reword_data[2].goodsImg2//商品详情图片2
        this.form.imageUrl3_3 = this.reword_data[2].goodsImg3//商品详情图片3
        this.form.deliveryType3 = this.reword_data[2].deliveryType//配送方式
        this.form.deliveryInfo3 = this.reword_data[2].deliveryInfo//发货说明
         // 商品四
        this.reword_type4 = this.reword_data[3].kjGoodsTypeList//商品类型
        this.form.name4 = this.reword_data[3].goodsName//商品名称
        this.form.price4 = this.reword_data[3].goodsMarketPrice//商品原价
        this.form.priceLow4 = this.reword_data[3].goodsCostPrice//商品底价
        this.form.count4 = this.reword_data[3].goodsStockNum//商品库存
        this.form.countsales4 = this.reword_data[3].goodsSalesNum//虚拟销量
        this.form.imageUrl4_1 = this.reword_data[3].goodsImg1//商品详情图片1
        this.form.imageUrl4_2 = this.reword_data[3].goodsImg2//商品详情图片2
        this.form.imageUrl4_3 = this.reword_data[3].goodsImg3//商品详情图片3
        this.form.deliveryType4 = this.reword_data[3].deliveryType//配送方式
        this.form.deliveryInfo4 = this.reword_data[3].deliveryInfo//发货说明
         // 商品五
        this.reword_type5 = this.reword_data[4].kjGoodsTypeList//商品类型
        this.form.name5 = this.reword_data[4].goodsName//商品名称
        this.form.price5 = this.reword_data[4].goodsMarketPrice//商品原价
        this.form.priceLow5 = this.reword_data[4].goodsCostPrice//商品底价
        this.form.count5 = this.reword_data[4].goodsStockNum//商品库存
        this.form.countsales5 = this.reword_data[4].goodsSalesNum//虚拟销量
        this.form.imageUrl5_1 = this.reword_data[4].goodsImg1//商品详情图片1
        this.form.imageUrl5_2 = this.reword_data[4].goodsImg2//商品详情图片2
        this.form.imageUrl5_3 = this.reword_data[4].goodsImg3//商品详情图片3
        this.form.deliveryType5 = this.reword_data[4].deliveryType//配送方式
        this.form.deliveryInfo5 = this.reword_data[4].deliveryInfo//发货说明         // 商品六
        this.reword_type6 = this.reword_data[5].kjGoodsTypeList//商品类型
        this.form.name6 = this.reword_data[5].goodsName//商品名称
        this.form.price6 = this.reword_data[5].goodsMarketPrice//商品原价
        this.form.priceLow6 = this.reword_data[5].goodsCostPrice//商品底价
        this.form.count6 = this.reword_data[5].goodsStockNum//商品库存
        this.form.countsales6 = this.reword_data[5].goodsSalesNum//虚拟销量
        this.form.imageUrl6_1 = this.reword_data[5].goodsImg1//商品详情图片1
        this.form.imageUrl6_2 = this.reword_data[5].goodsImg2//商品详情图片2
        this.form.imageUrl6_3 = this.reword_data[5].goodsImg3//商品详情图片3
        this.form.deliveryType6 = this.reword_data[5].deliveryType//配送方式
        this.form.deliveryInfo6 = this.reword_data[5].deliveryInfo//发货说明         // 商品七
        this.reword_type7 = this.reword_data[6].kjGoodsTypeList//商品类型
        this.form.name7 = this.reword_data[6].goodsName//商品名称
        this.form.price7 = this.reword_data[6].goodsMarketPrice//商品原价
        this.form.priceLow7 = this.reword_data[6].goodsCostPrice//商品底价
        this.form.count7 = this.reword_data[6].goodsStockNum//商品库存
        this.form.countsales7 = this.reword_data[6].goodsSalesNum//虚拟销量
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
        this.reword_send[0].goodsName = this.form.name1 //商品名称
        this.reword_send[0].goodsMarketPrice = this.form.price1//商品原价
        this.reword_send[0].goodsCostPrice = this.form.priceLow1 //商品底价
        this.reword_send[0].goodsStockNum = this.form.count1//商品库存
        this.reword_send[0].goodsSalesNum = this.form.countsales1//虚拟销量
        this.reword_send[0].goodsImg1 = this.form.imageUrl1_1//商品详情图片1
        this.reword_send[0].goodsImg2 = this.form.imageUrl1_2//商品详情图片2
        this.reword_send[0].goodsImg3 = this.form.imageUrl1_3//商品详情图片3
        this.reword_send[0].deliveryType = this.form.deliveryType1//配送方式
        this.reword_send[0].deliveryInfo = this.form.deliveryInfo1//发货说明
        // 商品二
        this.reword_send[1].kjGoodsTypeList = this.reword_type2
        this.reword_send[1].goodsName = this.form.name2
        this.reword_send[1].goodsMarketPrice = this.form.price2
        this.reword_send[1].goodsCostPrice = this.form.priceLow2
        this.reword_send[1].goodsStockNum = this.form.count2
        this.reword_send[1].goodsSalesNum = this.form.countsales2
        this.reword_send[1].goodsImg1 = this.form.imageUrl2_1
        this.reword_send[1].goodsImg2 = this.form.imageUrl2_2
        this.reword_send[1].goodsImg3 = this.form.imageUrl2_3
        this.reword_send[1].deliveryType = this.form.deliveryType2
        this.reword_send[1].deliveryInfo = this.form.deliveryInfo2

        //商品三
        this.reword_send[2].kjGoodsTypeList = this.reword_type3
        this.reword_send[2].goodsName = this.form.name3
        this.reword_send[2].goodsMarketPrice = this.form.price3
        this.reword_send[2].goodsCostPrice = this.form.priceLow3
        this.reword_send[2].goodsStockNum = this.form.count3
        this.reword_send[2].goodsSalesNum = this.form.countsales3
        this.reword_send[2].goodsImg1 = this.form.imageUrl3_1
        this.reword_send[2].goodsImg2 = this.form.imageUrl3_2
        this.reword_send[2].goodsImg3 = this.form.imageUrl3_3
        this.reword_send[2].deliveryType = this.form.deliveryType3
        this.reword_send[2].deliveryInfo = this.form.deliveryInfo3

        //商品四
        this.reword_send[3].kjGoodsTypeList = this.reword_type4
        this.reword_send[3].goodsName = this.form.name4
        this.reword_send[3].goodsMarketPrice = this.form.price4
        this.reword_send[3].goodsCostPrice = this.form.priceLow4
        this.reword_send[3].goodsStockNum = this.form.count4
        this.reword_send[3].goodsSalesNum = this.form.countsales4
        this.reword_send[3].goodsImg1 = this.form.imageUrl4_1
        this.reword_send[3].goodsImg2 = this.form.imageUrl4_2
        this.reword_send[3].goodsImg3 = this.form.imageUrl4_3
        this.reword_send[3].deliveryType = this.form.deliveryType4
        this.reword_send[3].deliveryInfo = this.form.deliveryInfo4

        //商品五
        this.reword_send[4].kjGoodsTypeList = this.reword_type5
        this.reword_send[4].goodsName = this.form.name5
        this.reword_send[4].goodsMarketPrice = this.form.price5
        this.reword_send[4].goodsCostPrice = this.form.priceLow5
        this.reword_send[4].goodsStockNum = this.form.count5
        this.reword_send[4].goodsSalesNum = this.form.countsales5
        this.reword_send[4].goodsImg1 = this.form.imageUrl5_1
        this.reword_send[4].goodsImg2 = this.form.imageUrl5_2
        this.reword_send[4].goodsImg3 = this.form.imageUrl5_3
        this.reword_send[4].deliveryType = this.form.deliveryType5
        this.reword_send[4].deliveryInfo = this.form.deliveryInfo5

        //商品六
        this.reword_send[5].kjGoodsTypeList = this.reword_type6
        this.reword_send[5].goodsName = this.form.name6
        this.reword_send[5].goodsMarketPrice = this.form.price6
        this.reword_send[5].goodsCostPrice = this.form.priceLow6
        this.reword_send[5].goodsStockNum = this.form.count6
        this.reword_send[5].goodsSalesNum = this.form.countsales6
        this.reword_send[5].goodsImg1 = this.form.imageUrl6_1
        this.reword_send[5].goodsImg2 = this.form.imageUrl6_2
        this.reword_send[5].goodsImg3 = this.form.imageUrl6_3
        this.reword_send[5].deliveryType = this.form.deliveryType6
        this.reword_send[5].deliveryInfo = this.form.deliveryInfo6

        //商品七
        this.reword_send[6].kjGoodsTypeList = this.reword_type7
        this.reword_send[6].goodsName = this.form.name7
        this.reword_send[6].goodsMarketPrice = this.form.price7
        this.reword_send[6].goodsCostPrice = this.form.priceLow7
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
</style>
