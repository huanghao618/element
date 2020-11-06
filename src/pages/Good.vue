<!--  -->
<template>
  <div class="home">
    <!-- 内容 -->
    <el-main>
      <!-- 商品列表 -->
      <div>
        <template>
          <!--  -->
          <el-row>
            <el-col :span="3">
              <div class="grid-content bg-purple-dark">品类筛选：</div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-dark">
                <el-select v-model="cate" placeholder="请选择">
                  <el-option
                    v-for="item in list"
                    :key="item.id"
                    :label="item.cate_zh"
                    :value="item.cate"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>

          <!-- 表格 -->
          <el-table :data="tableData"  style="width: 100%" >
            <el-table-column fixed prop="name" label="商品名称" width="150"></el-table-column>
            <el-table-column prop="name" label="商品图片" width="120">
              <template slot-scope="scope">
                <img class="img" :src="scope.row.img" alt />
              </template>
            </el-table-column>
            <el-table-column prop="desc" label="商品详情" width="300"></el-table-column>
            <el-table-column prop="price" label="商品价格" width="100"></el-table-column>
            <el-table-column prop="create_time" label="上架时间" width="200"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="delGood(scope.row._id)" type="text" size="small">删除</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          
        </template>
      </div>
      <!-- 分页 -->
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="100"
          :current-page="page"
          layout="prev, pager, next, sizes"
          :total="1000"
        ></el-pagination>
      </div>
    </el-main>
  </div>
</template>

<script>
// 引入转换时间
import moment from "moment"

export default {
  data() {
    return {
      // list1:[],
      tableData: [],
      list: [],
      page: 1,
      size: 3,
      cate:""
    };
  },
  watch: {
    cate() {
      //    监听cate的变化，他一变就重新加载数据，点击然后是要返回第一页
      this.page = 1;
      this.getHotGoodList();
    }
  },
  methods: {
    // 封装加载商品
    getHotGoodList: function() {
      let params = {
        size: this.size,
        page: this.page,
        cate: this.cate
      };
      this.$http.getHotGoodList(params).then(res => {
        // console.log(res)
          res.list.map(function(ele,index){
           res.list[index].create_time=moment(ele.create_time).format('Y M D ,HH:mm:ss')
          })
        this.tableData = res.list;
      });
    },
    // 删除
    delGood(item) {
      // console.log(item)
      let params = {
        id: item
      };
      this.$http.delGood(params).then(() => {
        
        this.getHotGoodList();
      });
    },
    // 分页
    handleCurrentChange: function(page) {
      this.page = page;
      // 点击重新加载商品
      this.getHotGoodList();
    }
  },
  mounted() {
    //  调用商品
    this.getHotGoodList();
    // 品类筛选
    this.$http.getAllCates({}).then(res => {
      // 数组方法在头部添加一条数据
      // res.unshift({ cate: "", cate_zh: "全部品类" });
      this.list = res;
    });
  }
};
</script>

<style lang='scss' scoped>
.home {
  .grid-content {
    line-height: 40px;
  }
  .three {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .el-table{
    height: 700px;
  }
  .el-table__row {
    height: 20px;
  }
  .img {
    display: inline-block;
    width: 60px;
    height: 60px;
  }
}
</style>
