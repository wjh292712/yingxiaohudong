<template>
  <div class="reword_wrap">
    <div class="reword_con">
      <el-form ref="form" :model="form" label-width="82px" >
        <div class="reword_type">
          <!-- <span class="reword_num" v-for="(item,index) in reword" :key="index">{{item}}</span> -->
          <el-tabs tag= "ul" v-model="activeName" @tab-click="handleClick" >
            <!--奖品一 -->
            <el-tab-pane tag='li'label="奖品一" name="first" data-idx="0">
              <el-form-item label="奖品来源">
                <el-radio-group v-model="radio1">
                  <el-radio label="1">自家商品</el-radio>
                  <el-radio label="2">平台奖品库</el-radio>
                </el-radio-group>
                <a href="javascript:;">去奖平商城购买</a>
              </el-form-item>
              <el-form-item label="奖品名称">
                <el-input v-model="form.name1" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  action="http://center.marketing.yunpaas.cn/jgg/upImg/upActivityImg"
                  list-type="picture-card"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                  :http-request='upload'
                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <span class="load_text">奖品图片将在九宫格中显示</span>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>

              </el-form-item>
              <el-form-item label="奖品数量">
                <el-input v-model="form.name2" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="导入券码">
                <el-radio-group v-model="radio2">
                  <el-radio label="1">系统生成</el-radio>
                  <el-radio label="2">手动导入</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="">
                <el-input type="textarea" v-model="form.desc1"></el-input>
              </el-form-item>
              <el-form-item label="奖品类型">
                <el-select v-model="form.region" placeholder="请选择奖品类型">
                  <el-option v-for="(items,index) in reword_type1"  :label="items.name" :value="index+1" :key="index"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-date-picker
                  v-model="value4"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="兑奖方式"  style="width:26rem;">
                <el-radio-group v-model="radio3">
                  <el-radio label="1">
                    <span class="ppp">公众号兑奖</span>
                  </el-radio>
                  <el-radio label="2">

                    <span class="nnn">线下门店兑奖</span>
                  </el-radio>

                  <div class="second">
                    <el-radio label="3">
                      <span class="ccc">联系客服兑奖</span>
                    </el-radio>
                    <el-radio label="4">
                      <span class="bbc">平台提供兑奖说明</span>
                    </el-radio>

                  </div>

                </el-radio-group>
              </el-form-item>
              <div class="public">
                <el-form-item label="公众号名称">
                  <el-input v-model="form.name3" placeholder="不超过15个字"></el-input>
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card_pic"
                    :on-preview="handlePictureCardPreview"
                    :on-success="handleAvatarSuccess"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                  >
                    <span>上传公众号二维码</span>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input type="textarea" v-model="form.name5"></el-input>
                </el-form-item>
              </div>

              <div class="shop_info">
                <el-form-item label="门店地址">
                  <el-input v-model="form.address" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone1" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name6" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>
              <div class="ser_info">
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone2" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name7" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>

              <!--<el-form-item>-->
                <!--<el-button type="primary" @click="saveReword()">保存</el-button>-->
                <!--<el-button type="primary" @click="back()">返回</el-button>-->
              <!--</el-form-item>-->
            </el-tab-pane>
            <!-- 奖品二 -->
            <el-tab-pane label="奖品二" name="second" data-idx="1">
              <el-form-item label="奖品来源">
                <el-radio-group v-model="radio2_1">
                  <el-radio label="1">自家商品</el-radio>
                  <el-radio label="2">平台奖品库</el-radio>
                </el-radio-group>
                <a href="javascript:;">去奖平商城购买</a>
              </el-form-item>
              <el-form-item label="奖品名称">
                <el-input v-model="form.name2_1" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"

                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <span class="load_text">奖品图片将在九宫格中显示</span>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>

              </el-form-item>
              <el-form-item label="奖品数量">
                <el-input v-model="form.name2_2" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="导入券码">
                <el-radio-group v-model="radio2_2">
                  <el-radio label="1">系统生成</el-radio>
                  <el-radio label="2">手动导入</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="">
                <el-input type="textarea" v-model="form.desc2_1"></el-input>
              </el-form-item>
              <el-form-item label="奖品类型">
                <el-select v-model="form.region2_2" placeholder="请选择活动区域">
                  <el-option v-for="(items,index) in reword_type2"  :label="items.name" :value="index+1" :key="index"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-date-picker
                  v-model="value4"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="兑奖方式"  style="width:26rem;">
                <el-radio-group v-model="radio2_3">
                  <el-radio label="1">
                    <span class="ppp">公众号兑奖</span>
                  </el-radio>
                  <el-radio label="2">

                    <span class="nnn">线下门店兑奖</span>
                  </el-radio>

                  <div class="second">
                    <el-radio label="3">
                      <span class="ccc">联系客服兑奖</span>
                    </el-radio>
                    <el-radio label="4">
                      <span class="bbc">平台提供兑奖说明</span>
                    </el-radio>

                  </div>

                </el-radio-group>
              </el-form-item>
              <div class="public">
                <el-form-item label="公众号名称">
                  <el-input v-model="form.name3" placeholder="不超过15个字"></el-input>
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card_pic"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                  >
                    <span>上传公众号二维码</span>
                  </el-upload>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input type="textarea" v-model="form.desc2"></el-input>
                </el-form-item>
              </div>

              <div class="shop_info">
                <el-form-item label="门店地址">
                  <el-input v-model="form.address" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone1" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name6" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>
              <div class="ser_info">
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone2" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name7" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>

              <!--<el-form-item>-->
                <!--<el-button type="primary" @click="saveReword()">保存</el-button>-->
                <!--<el-button type="primary" @click="back()">返回</el-button>-->
              <!--</el-form-item>-->
            </el-tab-pane>
            <!-- 奖品三 -->
            <el-tab-pane label="奖品三" name="third" data-idx="2">
              <el-form-item label="奖品来源">
                <el-radio-group v-model="radio3_1">
                  <el-radio label="1">自家商品</el-radio>
                  <el-radio label="2">平台奖品库</el-radio>
                </el-radio-group>
                <a href="javascript:;">去奖平商城购买</a>
              </el-form-item>
              <el-form-item label="奖品名称">
                <el-input v-model="form.name3_1" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"

                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <span class="load_text">奖品图片将在九宫格中显示</span>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>

              </el-form-item>
              <el-form-item label="奖品数量">
                <el-input v-model="form.name3_2" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="导入券码">
                <el-radio-group v-model="radio3_2">
                  <el-radio label="1">系统生成</el-radio>
                  <el-radio label="2">手动导入</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="">
                <el-input type="textarea" v-model="form.desc3_1"></el-input>
              </el-form-item>
              <el-form-item label="奖品类型">
                <el-select v-model="form.region3" placeholder="请选择活动区域">
                  <el-option v-for="(items,index) in reword_type3"  :label="items.name" :value="index+1" :key="index"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-date-picker
                  v-model="value4"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="兑奖方式"  style="width:26rem;">
                <el-radio-group v-model="radio3_3">
                  <el-radio label="1">
                    <span class="ppp">公众号兑奖</span>
                  </el-radio>
                  <el-radio label="2">

                    <span class="nnn">线下门店兑奖</span>
                  </el-radio>

                  <div class="second">
                    <el-radio label="3">
                      <span class="ccc">联系客服兑奖</span>
                    </el-radio>
                    <el-radio label="4">
                      <span class="bbc">平台提供兑奖说明</span>
                    </el-radio>

                  </div>

                </el-radio-group>
              </el-form-item>
              <div class="public">
                <el-form-item label="公众号名称">
                  <el-input v-model="form.name3" placeholder="不超过15个字"></el-input>
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card_pic"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                  >
                    <span>上传公众号二维码</span>
                  </el-upload>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input type="textarea" v-model="form.desc2"></el-input>
                </el-form-item>
              </div>

              <div class="shop_info">
                <el-form-item label="门店地址">
                  <el-input v-model="form.address" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone1" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name6" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>
              <div class="ser_info">
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone2" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name7" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>

              <!--<el-form-item>-->
                <!--<el-button type="primary" @click="saveReword()">保存</el-button>-->
                <!--<el-button type="primary" @click="back()">返回</el-button>-->
              <!--</el-form-item>-->
            </el-tab-pane>


            <!-- 奖品四 -->
            <el-tab-pane label="奖品四" name="fourth" data-idx="3">
              <el-form-item label="奖品来源">
                <el-radio-group v-model="radio4_1">
                  <el-radio label="1">自家商品</el-radio>
                  <el-radio label="2">平台奖品库</el-radio>
                </el-radio-group>
                <a href="javascript:;">去奖平商城购买</a>
              </el-form-item>
              <el-form-item label="奖品名称">
                <el-input v-model="form.name4_1" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"

                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <span class="load_text">奖品图片将在九宫格中显示</span>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>

              </el-form-item>
              <el-form-item label="奖品数量">
                <el-input v-model="form.name4_2" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="导入券码">
                <el-radio-group v-model="radio4_2">
                  <el-radio label="1">系统生成</el-radio>
                  <el-radio label="2">手动导入</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="">
                <el-input type="textarea" v-model="form.desc4_1"></el-input>
              </el-form-item>
              <el-form-item label="奖品类型">
                <el-select v-model="form.region4" placeholder="请选择活动区域">
                  <el-option v-for="(items,index) in reword_type4"  :label="items.name" :value="index+1" :key="index"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-date-picker
                  v-model="value4"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="兑奖方式"  style="width:26rem;">
                <el-radio-group v-model="radio4_3">
                  <el-radio label="1">
                    <span class="ppp">公众号兑奖</span>
                  </el-radio>
                  <el-radio label="2">

                    <span class="nnn">线下门店兑奖</span>
                  </el-radio>

                  <div class="second">
                    <el-radio label="3">
                      <span class="ccc">联系客服兑奖</span>
                    </el-radio>
                    <el-radio label="4">
                      <span class="bbc">平台提供兑奖说明</span>
                    </el-radio>

                  </div>

                </el-radio-group>
              </el-form-item>
              <div class="public">
                <el-form-item label="公众号名称">
                  <el-input v-model="form.name3" placeholder="不超过15个字"></el-input>
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card_pic"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                  >
                    <span>上传公众号二维码</span>
                  </el-upload>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input type="textarea" v-model="form.desc2"></el-input>
                </el-form-item>
              </div>

              <div class="shop_info">
                <el-form-item label="门店地址">
                  <el-input v-model="form.address" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone1" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name6" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>
              <div class="ser_info">
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone2" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name7" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>

              <!--<el-form-item>-->
                <!--<el-button type="primary" @click="saveReword()">保存</el-button>-->
                <!--<el-button type="primary" @click="back()">返回</el-button>-->
              <!--</el-form-item>-->
            </el-tab-pane>

            <!-- 奖品五 -->
            <el-tab-pane label="奖品五" name="fifth" data-idx="4">
              <el-form-item label="奖品来源">
                <el-radio-group v-model="radio5_1">
                  <el-radio label="1">自家商品</el-radio>
                  <el-radio label="2">平台奖品库</el-radio>
                </el-radio-group>
                <a href="javascript:;">去奖平商城购买</a>
              </el-form-item>
              <el-form-item label="奖品名称">
                <el-input v-model="form.name5_1" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"

                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <span class="load_text">奖品图片将在九宫格中显示</span>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>

              </el-form-item>
              <el-form-item label="奖品数量">
                <el-input v-model="form.name5_2" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="导入券码">
                <el-radio-group v-model="radio5_2">
                  <el-radio label="1">系统生成</el-radio>
                  <el-radio label="2">手动导入</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="">
                <el-input type="textarea" v-model="form.desc5_1"></el-input>
              </el-form-item>
              <el-form-item label="奖品类型">
                <el-select v-model="form.region5" placeholder="请选择活动区域">
                  <el-option v-for="(items,index) in reword_type5"  :label="items.name" :value="index+1" :key="index"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-date-picker
                  v-model="value4"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="兑奖方式"  style="width:26rem;">
                <el-radio-group v-model="radio5_3">
                  <el-radio label="1">
                    <span class="ppp">公众号兑奖</span>
                  </el-radio>
                  <el-radio label="2">

                    <span class="nnn">线下门店兑奖</span>
                  </el-radio>

                  <div class="second">
                    <el-radio label="3">
                      <span class="ccc">联系客服兑奖</span>
                    </el-radio>
                    <el-radio label="4">
                      <span class="bbc">平台提供兑奖说明</span>
                    </el-radio>

                  </div>

                </el-radio-group>
              </el-form-item>
              <div class="public">
                <el-form-item label="公众号名称">
                  <el-input v-model="form.name3" placeholder="不超过15个字"></el-input>
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card_pic"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                  >
                    <span>上传公众号二维码</span>
                  </el-upload>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input type="textarea" v-model="form.desc2"></el-input>
                </el-form-item>
              </div>

              <div class="shop_info">
                <el-form-item label="门店地址">
                  <el-input v-model="form.address" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone1" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name6" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>
              <div class="ser_info">
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone2" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name7" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>

              <!--<el-form-item>-->
                <!--<el-button type="primary" @click="saveReword()">保存</el-button>-->
                <!--<el-button type="primary" @click="back()">返回</el-button>-->
              <!--</el-form-item>-->
            </el-tab-pane>

            <!-- 奖品六 -->
            <el-tab-pane label="奖品六" name="sixth" data-idx="5">
              <el-form-item label="奖品来源">
                <el-radio-group v-model="radio6_1">
                  <el-radio label="1">自家商品</el-radio>
                  <el-radio label="2">平台奖品库</el-radio>
                </el-radio-group>
                <a href="javascript:;">去奖平商城购买</a>
              </el-form-item>
              <el-form-item label="奖品名称">
                <el-input v-model="form.name6_1" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"

                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <span class="load_text">奖品图片将在九宫格中显示</span>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>

              </el-form-item>
              <el-form-item label="奖品数量">
                <el-input v-model="form.name6_2" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="导入券码">
                <el-radio-group v-model="radio6_2">
                  <el-radio label="1">系统生成</el-radio>
                  <el-radio label="2">手动导入</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="">
                <el-input type="textarea" v-model="form.desc6_1"></el-input>
              </el-form-item>
              <el-form-item label="奖品类型">
                <el-select v-model="form.region6" placeholder="请选择活动区域">
                  <el-option v-for="(items,index) in reword_type6"  :label="items.name" :value="index+1" :key="index"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-date-picker
                  v-model="value4"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="兑奖方式"  style="width:26rem;">
                <el-radio-group v-model="radio3">
                  <el-radio label="1">
                    <span class="ppp">公众号兑奖</span>
                  </el-radio>
                  <el-radio label="2">

                    <span class="nnn">线下门店兑奖</span>
                  </el-radio>

                  <div class="second">
                    <el-radio label="3">
                      <span class="ccc">联系客服兑奖</span>
                    </el-radio>
                    <el-radio label="4">
                      <span class="bbc">平台提供兑奖说明</span>
                    </el-radio>

                  </div>

                </el-radio-group>
              </el-form-item>
              <div class="public">
                <el-form-item label="公众号名称">
                  <el-input v-model="form.name3" placeholder="不超过15个字"></el-input>
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card_pic"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                  >
                    <span>上传公众号二维码</span>
                  </el-upload>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input type="textarea" v-model="form.desc2"></el-input>
                </el-form-item>
              </div>

              <div class="shop_info">
                <el-form-item label="门店地址">
                  <el-input v-model="form.address" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone1" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name6" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>
              <div class="ser_info">
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone2" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name7" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>

              <!--<el-form-item>-->
                <!--<el-button type="primary" @click="saveReword()">保存</el-button>-->
                  <!--<el-button type="primary" @click="back()">返回</el-button>-->
              <!--</el-form-item>-->
            </el-tab-pane>

            <!-- 奖品七 -->
            <el-tab-pane label="奖品七" name="seventh" data-idx="6">
              <el-form-item label="奖品来源">
                <el-radio-group v-model="radio7_1">
                  <el-radio label="1">自家商品</el-radio>
                  <el-radio label="2">平台奖品库</el-radio>
                </el-radio-group>
                <a href="javascript:;">去奖平商城购买</a>
              </el-form-item>
              <el-form-item label="奖品名称">
                <el-input v-model="form.name7_1" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"

                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <span class="load_text">奖品图片将在九宫格中显示</span>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>

              </el-form-item>
              <el-form-item label="奖品数量">
                <el-input v-model="form.name7_2" placeholder="不超过15个字"></el-input>
              </el-form-item>
              <el-form-item label="导入券码">
                <el-radio-group v-model="radio7_2">
                  <el-radio label="1">系统生成</el-radio>
                  <el-radio label="2">手动导入</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="">
                <el-input type="textarea" v-model="form.desc7_1"></el-input>
              </el-form-item>
              <el-form-item label="奖品类型">
                <el-select v-model="form.region7" placeholder="请选择活动区域">
                  <el-option v-for="(items,index) in reword_type7"  :label="items.name" :value="index+1" :key="index"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-date-picker
                  v-model="value4"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="兑奖方式"  style="width:26rem;">
                <el-radio-group v-model="radio7_3">
                  <el-radio label="1">
                    <span class="ppp">公众号兑奖</span>
                  </el-radio>
                  <el-radio label="2">

                    <span class="nnn">线下门店兑奖</span>
                  </el-radio>

                  <div class="second">
                    <el-radio label="3">
                      <span class="ccc">联系客服兑奖</span>
                    </el-radio>
                    <el-radio label="4">
                      <span class="bbc">平台提供兑奖说明</span>
                    </el-radio>

                  </div>

                </el-radio-group>
              </el-form-item>
              <div class="public">
                <el-form-item label="公众号名称">
                  <el-input v-model="form.name3" placeholder="不超过15个字"></el-input>
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card_pic"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                  >
                    <span>上传公众号二维码</span>
                  </el-upload>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input type="textarea" v-model="form.desc2"></el-input>
                </el-form-item>
              </div>

              <div class="shop_info">
                <el-form-item label="门店地址">
                  <el-input v-model="form.address" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone1" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name6" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>
              <div class="ser_info">
                <el-form-item label="客服电话">
                  <el-input v-model="form.phone2" placeholder="不超过15个字"></el-input>
                </el-form-item>
                <el-form-item label="兑奖说明">
                  <el-input v-model="form.name7" placeholder="不超过15个字"></el-input>
                </el-form-item>
              </div>

              <!--<el-form-item>-->
                <!--<el-button type="primary" @click="saveReword()">保存</el-button>-->
                <!--<el-button type="primary" @click="back()">返回</el-button>-->
              <!--</el-form-item>-->
            </el-tab-pane>

            <!-- 奖品八 -->
            <!--<el-tab-pane label="奖品八" name="eighth" data-idx="7">-->
              <!--<el-form-item label="奖品来源">-->
                <!--<el-radio-group v-model="radio8_1">-->
                  <!--<el-radio label="1">自家商品</el-radio>-->
                  <!--<el-radio label="2">平台奖品库</el-radio>-->
                <!--</el-radio-group>-->
                <!--<a href="javascript:;">去奖平商城购买</a>-->
              <!--</el-form-item>-->
              <!--<el-form-item label="奖品名称">-->
                <!--<el-input v-model="form.name8_1" placeholder="不超过15个字"></el-input>-->
              <!--</el-form-item>-->
              <!--<el-form-item>-->
                <!--<el-upload-->
                  <!--action="https://jsonplaceholder.typicode.com/posts/"-->
                  <!--list-type="picture-card"-->

                  <!--:on-remove="handleRemove">-->
                  <!--<i class="el-icon-plus"></i>-->
                <!--</el-upload>-->
                <!--<span class="load_text">奖品图片将在九宫格中显示</span>-->
                <!--<el-dialog :visible.sync="dialogVisible">-->
                  <!--<img width="100%" :src="dialogImageUrl" alt="">-->
                <!--</el-dialog>-->

              <!--</el-form-item>-->
              <!--<el-form-item label="奖品数量">-->
                <!--<el-input v-model="form.name8_2" placeholder="不超过15个字"></el-input>-->
              <!--</el-form-item>-->
              <!--<el-form-item label="导入券码">-->
                <!--<el-radio-group v-model="radio8_2">-->
                  <!--<el-radio label="1">系统生成</el-radio>-->
                  <!--<el-radio label="2">手动导入</el-radio>-->
                <!--</el-radio-group>-->
              <!--</el-form-item>-->
              <!--<el-form-item label="">-->
                <!--<el-input type="textarea" v-model="form.desc8_1"></el-input>-->
              <!--</el-form-item>-->
              <!--<el-form-item label="奖品类型">-->
                <!--<el-select v-model="form.region8">-->
                  <!--<el-option v-for="(items,index) in reword_type8"  :label="items.name" :value="index+1" :key="index"></el-option>-->
                <!--</el-select>-->
              <!--</el-form-item>-->
              <!--<el-form-item label="活动时间">-->
                <!--<el-date-picker-->
                  <!--v-model="value4"-->
                  <!--type="datetimerange"-->
                  <!--range-separator="至"-->
                  <!--start-placeholder="开始日期"-->
                  <!--end-placeholder="结束日期">-->
                <!--</el-date-picker>-->
              <!--</el-form-item>-->
              <!--<el-form-item label="兑奖方式"  style="width:26rem;">-->
                <!--<el-radio-group v-model="radio8_3">-->
                  <!--<el-radio label="1">-->
                    <!--<span class="ppp">公众号兑奖</span>-->
                  <!--</el-radio>-->
                  <!--<el-radio label="2">-->

                    <!--<span class="nnn">线下门店兑奖</span>-->
                  <!--</el-radio>-->

                  <!--<div class="second">-->
                    <!--<el-radio label="3">-->
                      <!--<span class="ccc">联系客服兑奖</span>-->
                    <!--</el-radio>-->
                    <!--<el-radio label="4">-->
                      <!--<span class="bbc">平台提供兑奖说明</span>-->
                    <!--</el-radio>-->

                  <!--</div>-->

                <!--</el-radio-group>-->
              <!--</el-form-item>-->
              <!--<div class="public">-->
                <!--<el-form-item label="公众号名称">-->
                  <!--<el-input v-model="form.name3" placeholder="不超过15个字"></el-input>-->
                  <!--<el-upload-->
                    <!--action="https://jsonplaceholder.typicode.com/posts/"-->
                    <!--list-type="picture-card_pic"-->
                    <!--:on-preview="handlePictureCardPreview"-->
                    <!--:on-remove="handleRemove"-->
                  <!--&gt;-->
                    <!--<span>上传公众号二维码</span>-->
                  <!--</el-upload>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="兑奖说明">-->
                  <!--<el-input type="textarea" v-model="form.desc2"></el-input>-->
                <!--</el-form-item>-->
              <!--</div>-->

              <!--<div class="shop_info">-->
                <!--<el-form-item label="门店地址">-->
                  <!--<el-input v-model="form.address" placeholder="不超过15个字"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="客服电话">-->
                  <!--<el-input v-model="form.phone1" placeholder="不超过15个字"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="兑奖说明">-->
                  <!--<el-input v-model="form.name6" placeholder="不超过15个字"></el-input>-->
                <!--</el-form-item>-->
              <!--</div>-->
              <!--<div class="ser_info">-->
                <!--<el-form-item label="客服电话">-->
                  <!--<el-input v-model="form.phone2" placeholder="不超过15个字"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="兑奖说明">-->
                  <!--<el-input v-model="form.name7" placeholder="不超过15个字"></el-input>-->
                <!--</el-form-item>-->
              <!--</div>-->

              <!--<el-form-item>-->
                <!--<el-button type="primary" @click="saveReword()">保存</el-button>-->
                <!--<el-button type="primary" @click="">返回</el-button>-->
              <!--</el-form-item>-->
            <!--</el-tab-pane>-->
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
  import "../plugins/sudoku/jquery-1.11.0"
  import "../js/lrz"
  import "../js/exif"
  import "../js/mobileFix.mini"
  export default({
    data(){
      return {
        list:[],
        dialogImageUrl: '',
        dialogVisible: false,
        reword:"",
        start_date:"",
        end_date:"",
        imgData:'',
        fileList:[{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},],
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
        value5: '',
        form: {
          //奖品一
          name1: '',//奖品名称
          name2: '',//奖品数量
          name3: '',
          name4:'',//公众号名称
          name5:'',//公众号兑奖说明
          address:'',//门店地址
          phone1:'',//门店客服电话
          name6:'',//门店兑奖说明
          phone2:'',//联系客服电话
          name7:'',//客服兑奖说明

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
      this.saveReword()//保存数据
      // this.$store.dispatch("saveData")
      this.partReword()
      this.timestampToTime()
      $('.shop_info').hide();
      $('.ser_info').hide();
      $(".public").hide();
      $('.nnn').click(function () {
        console.log(333333344443333);
        $('.shop_info').show()
        $('.ser_info').hide()
        $(".public").hide()
      })
      $(".ccc").click(function () {
        $('.ser_info').show()
        $('.shop_info').hide()
        $(".public").hide()
      })
      $('.ppp').click(function () {
        $(".public").show()
        $('.shop_info').hide();
        $('.ser_info').hide();
      })
      $('.bbc').click(function () {
        console.log(222);
        $('.shop_info').hide();
        $('.ser_info').hide();
        $(".public").hide();
      })
    },
    computed:{
      ...mapState(['setting_data']),
      ...mapActions(['saveData']),
      sdata(){
        return this.setting_data
      }
    },
    updated(){
      //this.partReword()//
      this.saveReword()
    },
    methods: {

      handlePictureCardPreview(file) {

         this.dialogImageUrl = file.url;
         this.dialogVisible = true;
      },
      handleAvatarSuccess(res, file,fileList) {
      this.imgData=file.response.data
        // this.imageUrl = URL.createObjectURL(file.raw);
       this.saveReword()
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
        console.log(file.response.data);
      },

      beforeAvatarUpload(file){
        const isJPG = file.type === 'image/jpeg';
        const isPNG=file.type==='image/png';
        const isLt1M = file.size / 100 < 1;

        if (!isJPG&&!isPNG) {
          this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
        }
        if (!isLt1M) {
          this.$message.error('上传头像图片大小不能超过 1MB!');
        }
        return isJPG|| isPNG && isLt1M;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      //日期时间设置

      timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y+M+D+h+m+s;
      },

      //奖金设置部分的数据
      partReword(){
        let Data = sessionStorage.getItem('Data')
        this.reword_data = JSON.parse(Data).jggAwardSetupExtendList
        this.list=this.reword_data

        console.log(this.reword_data)
        //  日期时间转换设置

        this.start_date =this.reword_data[0].exchangeStartDate
//日期开始时间
//         console.log(this.start_data);
        this.end_date=this.reword_data[0].exchangeEndDate//结束时间
        let str = this.start_date
        console.log(str);
        let strend=this.end_date
        console.log(strend);
        //时间戳转换日期
        let newStr= this.timestampToTime(str)
        strend=this.timestampToTime(strend)
        this.value4=[newStr,strend]


        //奖品一
        this.form.name1 = this.reword_data[0].prizeName
        this.form.name2 = this.reword_data[0].prizeNum
        this.form.name3 = this.reword_data[0].wxPublicAccountName
        this.radio1 = this.reword_data[0].prizeType.toString()
        this.radio2 = this.reword_data[0].prizeSource.toString()
        this.radio3 = this.reword_data[0].prizeExchangeTypeId.toString()
        this.imgData=this.reword_data[0].prizeImg
        this.reword_type1 = this.reword_data[0].jggAwardTypeList
        console.log(this.reword_type1);

        //奖品二
        this.form.name2_1 = this.reword_data[1].prizeName
        this.form.name2_2 = this.reword_data[1].prizeNum
        this.form.name2_3 = this.reword_data[1].wxPublicAccountName
        this.radio2_1 = this.reword_data[1].prizeType.toString()
        this.radio2_2 = this.reword_data[1].prizeSource.toString()
        this.radio2_3 = this.reword_data[1].prizeExchangeTypeId.toString()
        this.imgData=this.reword_data[1].prizeImg
        this.reword_type2 = this.reword_data[1].jggAwardTypeList

        //奖品三
        this.form.name3_1 = this.reword_data[2].prizeName
        this.form.name3_2 = this.reword_data[2].prizeNum
        this.form.name3_3 = this.reword_data[2].wxPublicAccountName
        this.radio3_1 = this.reword_data[2].prizeType.toString()
        this.radio3_2 = this.reword_data[2].prizeSource.toString()
        this.radio3_3 = this.reword_data[2].prizeExchangeTypeId.toString()
        this.imgData=this.reword_data[2].prizeImg
        this.reword_type3 = this.reword_data[2].jggAwardTypeList

        //奖品四
        this.form.name4_1 = this.reword_data[3].prizeName
        this.form.name4_2 = this.reword_data[3].prizeNum
        this.form.name4_3 = this.reword_data[3].wxPublicAccountName
        this.radio4_1 = this.reword_data[3].prizeType.toString()
        this.radio4_2 = this.reword_data[3].prizeSource.toString()
        this.radio4_3 = this.reword_data[3].prizeExchangeTypeId.toString()
        this.imgData=this.reword_data[3].prizeImg
        this.reword_type4 = this.reword_data[3].jggAwardTypeList

        //奖品五
        this.form.name5_1 = this.reword_data[4].prizeName
        this.form.name5_2 = this.reword_data[4].prizeNum
        this.form.name5_3 = this.reword_data[4].wxPublicAccountName
        this.radio5_1 = this.reword_data[4].prizeType.toString()
        this.radio5_2 = this.reword_data[4].prizeSource.toString()
        this.radio5_3 = this.reword_data[4].prizeExchangeTypeId.toString()
        this.imgData=this.reword_data[4].prizeImg
        this.reword_type5 = this.reword_data[4].jggAwardTypeList

        //奖品六
        this.form.name6_1 = this.reword_data[5].prizeName
        this.form.name6_2 = this.reword_data[5].prizeNum
        this.form.name6_3 = this.reword_data[5].wxPublicAccountName
        this.radio6_1 = this.reword_data[5].prizeType.toString()
        this.radio6_2 = this.reword_data[5].prizeSource.toString()
        this.radio6_3 = this.reword_data[5].prizeExchangeTypeId.toString()
        this.imgData=this.reword_data[5].prizeImg
        this.reword_type6 = this.reword_data[5].jggAwardTypeList

        //奖品七
        this.form.name7_1 = this.reword_data[6].prizeName
        this.form.name7_2 = this.reword_data[6].prizeNum
        this.form.name7_3 = this.reword_data[6].wxPublicAccountName
        this.radio7_1 = this.reword_data[6].prizeType.toString()
        this.radio7_2 = this.reword_data[6].prizeSource.toString()
        this.radio7_3 = this.reword_data[6].prizeExchangeTypeId.toString()
        this.imgData=this.reword_data[6].prizeImg
        this.reword_type7 = this.reword_data[6].jggAwardTypeList

        //奖品八
        // this.form.name8_1 = this.reword_data[7].prizeName
        // this.form.name8_2 = this.reword_data[7].prizeNum
        // this.form.name8_3 = this.reword_data[7].wxPublicAccountName
        // this.radio8_1 = this.reword_data[7].prizeType.toString()
        // this.radio8_2 = this.reword_data[7].prizeSource.toString()
        // this.radio8_3 = this.reword_data[7].prizeExchangeTypeId.toString()
        // this.reword_type8 = this.reword_data[7].jggAwardTypeList
      },
      //保存奖品数据
      saveReword(){
        // this.$store.dispatch("saveData")

        let Data = sessionStorage.getItem('Data')
        console.log(Data+"555");
        // let Data1=sessionStorage.setItem('Data')
        this.reword_send = JSON.parse(Data).jggAwardSetupExtendList
        //奖品一
        this.reword_send[0].prizeName = this.form.name1
        this.reword_send[0].prizeNum = this.form.name2
        this.reword_send[0].wxPublicAccountName = this.form.name3
        this.reword_send[0].prizeType = Number(this.radio1)
        this.reword_send[0].prizeSource = Number(this.radio2)
        this.reword_send[0].prizeExchangeTypeId = Number(this.radio3)
        this.reword_send[0].exchangeAddress=this.form.address
        this.reword_send[0].prizeImg=this.imgData
        console.log(this.imgData);
        this.reword_type1 = this.reword_data.jggAwardTypeList

        //奖品二
        this.reword_send[1].prizeName = this.form.name2_1
        this.reword_send[1].prizeNum = this.form.name2_2
        this.reword_send[1].wxPublicAccountName = this.form.name2_3
        this.reword_send[1].prizeType = Number(this.radio2_1)
        this.reword_send[1].prizeSource = Number(this.radio2_2)
        this.reword_send[1].prizeExchangeTypeId = Number(this.radio2_3)
        this.reword_send[1].exchangeAddress=this.form.address
        this.reword_send[1].prizeImg=this.imgData
        this.reword_type2 = this.reword_data.jggAwardTypeList

        //奖品三
        this.reword_send[2].prizeName = this.form.name3_1
        this.reword_send[2].prizeNum = this.form.name3_2
        this.reword_send[2].wxPublicAccountName = this.form.name3_3
        this.reword_send[2].prizeType = Number(this.radio3_1)
        this.reword_send[2].prizeSource = Number(this.radio3_2)
        this.reword_send[2].prizeExchangeTypeId = Number(this.radio3_3)
        this.reword_send[2].exchangeAddress=this.form.address
        this.reword_send[2].prizeImg=this.imgData
        this.reword_type3 = this.reword_data.jggAwardTypeList

        //奖品四
        this.reword_send[3].prizeName = this.form.name4_1
        this.reword_send[3].prizeNum = this.form.name4_2
        this.reword_send[3].wxPublicAccountName = this.form.name4_3
        this.reword_send[3].prizeType = Number(this.radio4_1)
        this.reword_send[3].prizeSource = Number(this.radio4_2)
        this.reword_send[3].prizeExchangeTypeId = Number(this.radio4_3)
        this.reword_send[3].exchangeAddress=this.form.address
        this.reword_send[3].prizeImg=this.imgData
        this.reword_type4 = this.reword_data.jggAwardTypeList

        //奖品五
        this.reword_send[4].prizeName = this.form.name5_1
        this.reword_send[4].prizeNum = this.form.name5_2
        this.reword_send[4].wxPublicAccountName = this.form.name5_3
        this.reword_send[4].prizeType = Number(this.radio5_1)
        this.reword_send[4].prizeSource = Number(this.radio5_2)
        this.reword_send[4].prizeExchangeTypeId = Number(this.radio5_3)
        this.reword_send[4].exchangeAddress=this.form.address
        this.reword_send[4].prizeImg=this.imgData
        this.reword_type5 = this.reword_data.jggAwardTypeList

        //奖品六
        this.reword_send[5].prizeName = this.form.name6_1
        this.reword_send[5].prizeNum = this.form.name6_2
        this.reword_send[5].wxPublicAccountName = this.form.name6_3
        this.reword_send[5].prizeType = Number(this.radio6_1)
        this.reword_send[5].prizeSource = Number(this.radio6_2)
        this.reword_send[5].prizeExchangeTypeId = Number(this.radio6_3)
        this.reword_send[5].exchangeAddress=this.form.address
        this.reword_send[5].prizeImg=this.imgData
        this.reword_type6 = this.reword_data.jggAwardTypeList

        //奖品七
        this.reword_send[6].prizeName = this.form.name6_1
        this.reword_send[6].prizeNum = this.form.name6_2
        this.reword_send[6].wxPublicAccountName = this.form.name6_3
        this.reword_send[6].prizeType = Number(this.radio6_1)
        this.reword_send[6].prizeSource = Number(this.radio6_2)
        this.reword_send[6].prizeExchangeTypeId = Number(this.radio6_3)
        this.reword_send[6].exchangeAddress=this.form.address
        this.reword_send[6].prizeImg=this.imgData
        this.reword_type7 = this.reword_data.jggAwardTypeList

        // 奖品八
        // this.reword_send[7].prizeName = this.form.name7_1
        // this.reword_send[7].prizeNum = this.form.name7_2
        // this.reword_send[7].wxPublicAccountName = this.form.name7_3
        // this.reword_send[7].prizeType = Number(this.radio7_1)
        // this.reword_send[7].prizeSource = Number(this.radio7_2)
        // this.reword_send[7].prizeExchangeTypeId = Number(this.radio7_3)
        // this.reword_type8 = this.reword_data.jggAwardTypeList

        this.$store.state.setting_data.jggAwardSetupExtendList = this.reword_send
        this.$bus.emit("send_reword",this.reword_send)
        console.log(this.reword_data)
      },
      //添加奖品
      addgift(){
$("#tab-first").css({"display":"none"})
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

      back(){
        this.$router.go(-1)
      }
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
          width: 0.8rem;
          height: 0.8rem;
          line-height: 0.8rem;
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
  .cddd{
    position: absolute;
    top: 10px;
    right: 1.2rem;
  }
  .el-tabs__nav .el-tabs__item{
    padding: 0px 15px;
  }
</style>
