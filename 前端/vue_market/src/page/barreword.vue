<template>
  <div class="reword_wrap">
    <div class="reword_con">
      <el-form ref="form" :model="form" label-width="82px" >
        <div class="reword_type">
          <!-- <span class="reword_num" v-for="(item,index) in reword" :key="index">{{item}}</span> -->
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <!-- 商品一 -->

            <el-tab-pane label="商品一" name="first">

              <el-form-item label="商品类型">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name1" placeholder="不超过15个字"></el-input>
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
                <el-input v-model="form.name2" placeholder="必须是大于0的数，支持小数点后两位"></el-input>
              </el-form-item>
              <el-form-item label="商品低价">
                <el-input v-model="form.name2" placeholder="必须是大于0的数，支持小数点后两位活动发布后不允许修改"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="商品库存">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>

              </el-form-item>


              <el-form-item label="配送方式"  style="width:26rem;">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" v-model="form.desc2"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="saveReword()">保存</el-button>
                <el-button type="primary" @click="backReword()">返回</el-button>
              </el-form-item>
            </el-tab-pane>
            <!-- 商品二 -->
            <el-tab-pane label="商品二" name="second">
              <el-form-item label="商品类型">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name1" placeholder="不超过15个字"></el-input>
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
                <el-input v-model="form.name2" placeholder="必须是大于0的数，支持小数点后两位"></el-input>
              </el-form-item>
              <el-form-item label="商品低价">
                <el-input v-model="form.name2" placeholder="必须是大于0的数，支持小数点后两位活动发布后不允许修改"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="商品库存">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>

              </el-form-item>


              <el-form-item label="配送方式"  style="width:26rem;">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" v-model="form.desc2"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="saveReword()">保存</el-button>
                <el-button type="primary" @click="backReword()">返回</el-button>
              </el-form-item>
            </el-tab-pane>
            <!-- 商品三 -->
            <el-tab-pane label="商品三" name="third">
              <el-form-item label="商品类型">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name1" placeholder="不超过15个字"></el-input>
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
                <el-input v-model="form.name2" placeholder="必须是大于0的数，支持小数点后两位"></el-input>
              </el-form-item>
              <el-form-item label="商品低价">
                <el-input v-model="form.name2" placeholder="必须是大于0的数，支持小数点后两位活动发布后不允许修改"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="商品库存">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>

              </el-form-item>


              <el-form-item label="配送方式"  style="width:26rem;">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" v-model="form.desc2"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="saveReword()">保存</el-button>
                <el-button type="primary" @click="backReword()">返回</el-button>
              </el-form-item>
            </el-tab-pane>


            <!-- 商品四 -->
            <el-tab-pane label="商品四" name="fourth">
              <el-form-item label="商品类型">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name1" placeholder="不超过15个字"></el-input>
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
                <el-input v-model="form.name2" placeholder="必须是大于0的数，支持小数点后两位"></el-input>
              </el-form-item>
              <el-form-item label="商品低价">
                <el-input v-model="form.name2" placeholder="必须是大于0的数，支持小数点后两位活动发布后不允许修改"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="商品库存">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>

              </el-form-item>


              <el-form-item label="配送方式"  style="width:26rem;">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" v-model="form.desc2"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="saveReword()">保存</el-button>
                <el-button type="primary" @click="backReword()">返回</el-button>
              </el-form-item>
            </el-tab-pane>

            <!-- 商品五 -->
            <el-tab-pane label="商品五" name="fifth">
              <el-form-item label="商品类型">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name1" placeholder="不超过15个字"></el-input>
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
                <el-input v-model="form.name2" placeholder="必须是大于0的数，支持小数点后两位"></el-input>
              </el-form-item>
              <el-form-item label="商品低价">
                <el-input v-model="form.name2" placeholder="必须是大于0的数，支持小数点后两位活动发布后不允许修改"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="商品库存">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>

              </el-form-item>


              <el-form-item label="配送方式"  style="width:26rem;">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" v-model="form.desc2"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="saveReword()">保存</el-button>
                <el-button type="primary" @click="backReword()">返回</el-button>
              </el-form-item>
            </el-tab-pane>

            <!-- 商品六 -->
            <el-tab-pane label="商品六" name="six">
              <el-form-item label="商品类型">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name1" placeholder="不超过15个字"></el-input>
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
                <el-input v-model="form.name2" placeholder="必须是大于0的数，支持小数点后两位"></el-input>
              </el-form-item>
              <el-form-item label="商品低价">
                <el-input v-model="form.name2" placeholder="必须是大于0的数，支持小数点后两位活动发布后不允许修改"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="商品库存">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>

              </el-form-item>


              <el-form-item label="配送方式"  style="width:26rem;">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" v-model="form.desc2"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="saveReword()">保存</el-button>
                <el-button type="primary" @click="backReword()">返回</el-button>
              </el-form-item>
            </el-tab-pane>

            <!-- 商品七 -->
            <el-tab-pane label="商品七" name="seventh">
              <el-form-item label="商品类型">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="form.name1" placeholder="不超过15个字"></el-input>
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
                <el-input v-model="form.name2" placeholder="必须是大于0的数，支持小数点后两位"></el-input>
              </el-form-item>
              <el-form-item label="商品低价">
                <el-input v-model="form.name2" placeholder="必须是大于0的数，支持小数点后两位活动发布后不允许修改"></el-input>
                <el-tooltip content="砍价商品的最低价格，砍到该价格后将不在降价" placement="bottom" effect="light">
                  <el-button>?</el-button>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="商品库存">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>
              <el-form-item label="虚拟销量">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="scccc">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
</span>

              </el-form-item>


              <el-form-item label="配送方式"  style="width:26rem;">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>


              <el-form-item label="发货说明">
                <el-input type="textarea" v-model="form.desc2"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="saveReword()">保存</el-button>
                <el-button type="primary" @click="backReword()">返回</el-button>
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
  export default({
    data(){
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        reword:"",
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',


        form: {
          //奖品一
          name1: '',//奖品名称
          name2: '',//奖品数量
          name3: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          //奖品二
          name2_1: '',//奖品名称
          name2_2: '',//奖品数量
          name2_3: '',
          region2: '',
          date2_1: '',
          date2_2: '',

          //奖品三
          name3_1: '',//奖品名称
          name3_2: '',//奖品数量
          name3_3: '',
          region3: '',
          date3_1: '',
          date3_2: '',

          //奖品四
          name4_1: '',//奖品名称
          name4_2: '',//奖品数量
          name4_3: '',
          region4: '',
          date4_1: '',
          date4_2: '',

          //奖品五
          name5_1: '',//奖品名称
          name5_2: '',//奖品数量
          name5_3: '',
          region5: '',
          date5_1: '',
          date5_2: '',

          //奖品六
          name6_1: '',//奖品名称
          name6_2: '',//奖品数量
          name6_3: '',
          region6: '',
          date6_1: '',
          date6_2: '',

          //奖品七
          name7_1: '',//奖品名称
          name7_2: '',//奖品数量
          name7_3: '',
          region7: '',
          date7_1: '',
          date7_2: '',

        },
        activeName: 'first',
        radio1:'',//单选框1
        radio2:'',//单选框2
        radio3:'',//单选框3
        //奖品二
        radio2_1:'',//单选框1
        radio2_2:'',//单选框2
        radio2_3:'',//单选框3
        //奖品三
        radio3_1:'',//单选框1
        radio3_2:'',//单选框2
        radio3_3:'',//单选框3
        //奖品四
        radio4_1:'',//单选框1
        radio4_2:'',//单选框2
        radio4_3:'',//单选框3
        //奖品五
        radio5_1:'',//单选框1
        radio5_2:'',//单选框2
        radio5_3:'',//单选框3
        //奖品六
        radio6_1:'',//单选框1
        radio6_2:'',//单选框2
        radio6_3:'',//单选框3
        //奖品七
        radio7_1:'',//单选框1
        radio7_2:'',//单选框2
        radio7_3:'',//单选框3
        //奖品八
        radio8_1:'',//单选框1
        radio8_2:'',//单选框2
        radio8_3:'',//单选框3


        reword_type1:'',//奖品一类型
        reword_type2:'',//奖品二类型
        reword_type3:'',//奖品三类型
        reword_type4:'',//奖品四类型
        reword_type5:'',//奖品五类型
        reword_type6:'',//奖品六类型
        reword_type7:'',//奖品七类型
        reword_type8:'',//奖品八类型

        reword_data:'',//接口数据保存
        reword_send:''//奖品数据回调
      }
    },
    created(){

      // this.saveReword()
    },
    mounted(){
      // this.$store.dispatch("saveData")
      this.partReword()
    },
    computed:{
      ...mapState(['setting_data']),
      ...mapActions(['saveData']),
      sdata(){
        return this.setting_data
      }
    },
    methods: {

      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },

      //奖金设置部分的数据
      partReword(){
        let Data = sessionStorage.getItem('Data')
        this.reword_data = JSON.parse(Data).jggAwardSetupExtendList
        console.log(this.reword_data)
        //奖品一
        this.form.name1 = this.reword_data[0].prizeName
        this.form.name2 = this.reword_data[0].prizeNum
        this.form.name3 = this.reword_data[0].wxPublicAccountName
        this.radio1 = this.reword_data[0].prizeType.toString()
        this.radio2 = this.reword_data[0].prizeSource.toString()
        this.radio3 = this.reword_data[0].prizeExchangeTypeId.toString()
        this.reword_type1 = this.reword_data[0].jggAwardTypeList

        //奖品二
        this.form.name2_1 = this.reword_data[1].prizeName
        this.form.name2_2 = this.reword_data[1].prizeNum
        this.form.name2_3 = this.reword_data[1].wxPublicAccountName
        this.radio2_1 = this.reword_data[1].prizeType.toString()
        this.radio2_2 = this.reword_data[1].prizeSource.toString()
        this.radio2_3 = this.reword_data[1].prizeExchangeTypeId.toString()
        this.reword_type2 = this.reword_data[1].jggAwardTypeList

        //奖品三
        this.form.name3_1 = this.reword_data[2].prizeName
        this.form.name3_2 = this.reword_data[2].prizeNum
        this.form.name3_3 = this.reword_data[2].wxPublicAccountName
        this.radio3_1 = this.reword_data[2].prizeType.toString()
        this.radio3_2 = this.reword_data[2].prizeSource.toString()
        this.radio3_3 = this.reword_data[2].prizeExchangeTypeId.toString()
        this.reword_type3 = this.reword_data[2].jggAwardTypeList

        //奖品四
        this.form.name4_1 = this.reword_data[3].prizeName
        this.form.name4_2 = this.reword_data[3].prizeNum
        this.form.name4_3 = this.reword_data[3].wxPublicAccountName
        this.radio4_1 = this.reword_data[3].prizeType.toString()
        this.radio4_2 = this.reword_data[3].prizeSource.toString()
        this.radio4_3 = this.reword_data[3].prizeExchangeTypeId.toString()
        this.reword_type4 = this.reword_data[3].jggAwardTypeList

        //奖品五
        this.form.name5_1 = this.reword_data[4].prizeName
        this.form.name5_2 = this.reword_data[4].prizeNum
        this.form.name5_3 = this.reword_data[4].wxPublicAccountName
        this.radio5_1 = this.reword_data[4].prizeType.toString()
        this.radio5_2 = this.reword_data[4].prizeSource.toString()
        this.radio5_3 = this.reword_data[4].prizeExchangeTypeId.toString()
        this.reword_type5 = this.reword_data[4].jggAwardTypeList

        //奖品六
        this.form.name6_1 = this.reword_data[5].prizeName
        this.form.name6_2 = this.reword_data[5].prizeNum
        this.form.name6_3 = this.reword_data[5].wxPublicAccountName
        this.radio6_1 = this.reword_data[5].prizeType.toString()
        this.radio6_2 = this.reword_data[5].prizeSource.toString()
        this.radio6_3 = this.reword_data[5].prizeExchangeTypeId.toString()
        this.reword_type6 = this.reword_data[5].jggAwardTypeList

        //奖品七
        this.form.name7_1 = this.reword_data[6].prizeName
        this.form.name7_2 = this.reword_data[6].prizeNum
        this.form.name7_3 = this.reword_data[6].wxPublicAccountName
        this.radio7_1 = this.reword_data[6].prizeType.toString()
        this.radio7_2 = this.reword_data[6].prizeSource.toString()
        this.radio7_3 = this.reword_data[6].prizeExchangeTypeId.toString()
        this.reword_type7 = this.reword_data[6].jggAwardTypeList

        //奖品八
        this.form.name8_1 = this.reword_data[7].prizeName
        this.form.name8_2 = this.reword_data[7].prizeNum
        this.form.name8_3 = this.reword_data[7].wxPublicAccountName
        this.radio8_1 = this.reword_data[7].prizeType.toString()
        this.radio8_2 = this.reword_data[7].prizeSource.toString()
        this.radio8_3 = this.reword_data[7].prizeExchangeTypeId.toString()
        this.reword_type8 = this.reword_data[7].jggAwardTypeList
      },
      //保存奖品数据
      saveReword(){
        // this.$store.dispatch("saveData")
        let Data = sessionStorage.getItem('Data')
        this.reword_send = JSON.parse(Data).jggAwardSetupExtendList
        //奖品一
        this.reword_send[0].prizeName = this.form.name1
        this.reword_send[0].prizeNum = this.form.name2
        this.reword_send[0].wxPublicAccountName = this.form.name3
        this.reword_send[0].prizeType = Number(this.radio1)
        this.reword_send[0].prizeSource = Number(this.radio2)
        this.reword_send[0].prizeExchangeTypeId = Number(this.radio3)
        this.reword_type1 = this.reword_data.jggAwardTypeList

        //奖品二
        this.reword_send[1].prizeName = this.form.name2_1
        this.reword_send[1].prizeNum = this.form.name2_2
        this.reword_send[1].wxPublicAccountName = this.form.name2_3
        this.reword_send[1].prizeType = Number(this.radio2_1)
        this.reword_send[1].prizeSource = Number(this.radio2_2)
        this.reword_send[1].prizeExchangeTypeId = Number(this.radio2_3)
        this.reword_type2 = this.reword_data.jggAwardTypeList

        //奖品三
        this.reword_send[2].prizeName = this.form.name3_1
        this.reword_send[2].prizeNum = this.form.name3_2
        this.reword_send[2].wxPublicAccountName = this.form.name3_3
        this.reword_send[2].prizeType = Number(this.radio3_1)
        this.reword_send[2].prizeSource = Number(this.radio3_2)
        this.reword_send[2].prizeExchangeTypeId = Number(this.radio3_3)
        this.reword_type3 = this.reword_data.jggAwardTypeList

        //奖品四
        this.reword_send[3].prizeName = this.form.name4_1
        this.reword_send[3].prizeNum = this.form.name4_2
        this.reword_send[3].wxPublicAccountName = this.form.name4_3
        this.reword_send[3].prizeType = Number(this.radio4_1)
        this.reword_send[3].prizeSource = Number(this.radio4_2)
        this.reword_send[3].prizeExchangeTypeId = Number(this.radio4_3)
        this.reword_type4 = this.reword_data.jggAwardTypeList

        //奖品五
        this.reword_send[4].prizeName = this.form.name5_1
        this.reword_send[4].prizeNum = this.form.name5_2
        this.reword_send[4].wxPublicAccountName = this.form.name5_3
        this.reword_send[4].prizeType = Number(this.radio5_1)
        this.reword_send[4].prizeSource = Number(this.radio5_2)
        this.reword_send[4].prizeExchangeTypeId = Number(this.radio5_3)
        this.reword_type5 = this.reword_data.jggAwardTypeList

        //奖品六
        this.reword_send[5].prizeName = this.form.name6_1
        this.reword_send[5].prizeNum = this.form.name6_2
        this.reword_send[5].wxPublicAccountName = this.form.name6_3
        this.reword_send[5].prizeType = Number(this.radio6_1)
        this.reword_send[5].prizeSource = Number(this.radio6_2)
        this.reword_send[5].prizeExchangeTypeId = Number(this.radio6_3)
        this.reword_type6 = this.reword_data.jggAwardTypeList

        //奖品七
        this.reword_send[6].prizeName = this.form.name6_1
        this.reword_send[6].prizeNum = this.form.name6_2
        this.reword_send[6].wxPublicAccountName = this.form.name6_3
        this.reword_send[6].prizeType = Number(this.radio6_1)
        this.reword_send[6].prizeSource = Number(this.radio6_2)
        this.reword_send[6].prizeExchangeTypeId = Number(this.radio6_3)
        this.reword_type7 = this.reword_data.jggAwardTypeList

        // 奖品八
        this.reword_send[7].prizeName = this.form.name7_1
        this.reword_send[7].prizeNum = this.form.name7_2
        this.reword_send[7].wxPublicAccountName = this.form.name7_3
        this.reword_send[7].prizeType = Number(this.radio7_1)
        this.reword_send[7].prizeSource = Number(this.radio7_2)
        this.reword_send[7].prizeExchangeTypeId = Number(this.radio7_3)
        this.reword_type8 = this.reword_data.jggAwardTypeList

        this.$store.state.setting_data.jggAwardSetupExtendList = this.reword_send
        this.$bus.emit("send_reword",this.reword_send)
        console.log(this.reword_data)
      },

      //返回
      backReword(){
        //点击返回


      },

      //添加奖品
      addgift(){
        if(this.reword.length==7){
          this.reword.push('奖金八')
        }else{
          alert("最多添加8个奖品")
        }

      },
      //删除奖品
      reducegift(){
        if(this.reword.length==8){
          this.reword.splice(7,1)
        }else{
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
    width:100%;
    .reword_con {

      /* .el-upload--picture-card{
          float:left;
      } */
      .load_text {
        display:block;
        float:left;
        color:red;
      }
      .second {
        .el-radio:nth-of-type(2) {
          margin-left:16px;
        }
      }
      .reword_type {
        width:95%;
        margin:0 auto .5rem;
        .reword_num {
          right: 2rem;
          top: 0;
          width:1rem;
          height:1rem;
          line-height:1rem;
          border:solid 1px #ccc;
          margin:0 .1rem;
          text-align:center;
          display:inline-block;
          border-radius:4px;
          cursor: pointer;
        }
      }
    }
  }
  .cddd{
    position: absolute;
    top: 10px;
    right: 1rem;
  }
  .scccc{
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
