<template>
  <div id="apps">
    <el-button type="primary" size="small" @click="centerDialogVisible = true">按钮</el-button>

    <el-dialog title="批量上下架" :visible.sync="centerDialogVisible" width="30%" center>
      <span>上下架状态:</span>
      <el-select v-model="status">
        <el-option v-for="item in options" :value="item.value" :label="item.name" :key="item.value"> </el-option>
      </el-select>

      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: '',
      centerDialogVisible: false,
      options: [
        { name: '我', value: '5' },
        { name: '爱', value: '2' },
        { name: '你', value: '1' }
      ]
    };
  }
}
</script>
<style>

</style>
