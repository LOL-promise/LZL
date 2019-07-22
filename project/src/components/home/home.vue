<template>
  <div id="home">
    <headers></headers>
    <leftNav></leftNav>
    <div class="right_nav">
      <div class="contain">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import leftNav from "./left_nav";
import headers from "./head";
export default {
  data() {
    return {

    };
  },
  mounted() {
    let that=this
  },
  components: { leftNav, headers },

};
</script>
<style lang="scss" scoped>
*{
  font-size:16px;
  margin: 0;
  padding: 0
}
.contain {
  width: 100vw;
  height: calc(100vh - 80px);
  box-sizing: border-box;
  position: relative;
  letter-spacing: 3px;
  overflow-y:scroll ;
  .top {
    position: relative;
    height: 60px;
    width: 96%;
    font-size: 14px;
    padding: 0 5px;
    span {
      color: #627fa3;
      margin-right: 100px;
    }
    .el-input {
      width: 180px;
      height: 14px;
      margin: 0;
      font-size: 12px !important;
      text-align: center;
    }
    .el-select {
      width: 80px;
      text-align: center;
    }
    input {
      height: 18px !important;
    }
    .right {
      .el-select {
        width: 70px;
      }
    }
  }
  .el-table {
    min-height: 650px;
    height: auto;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
.el-pagination {
  text-align: right;
  padding-right: 100px;
  margin: 20px 0 40px;
}
</style>
