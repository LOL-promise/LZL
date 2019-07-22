<template>
  <div id="left_nav" ref="wrapper">
      <ul class="table">
        <li v-for="(data,index) in tableList" :key="index" :class="{active:tableKey==data.id}">
          <div class="father-item" @click="change(data.id)">
            {{data.title}}
            <i v-if="tableKey==data.id"></i>
          </div>
        </li>
      </ul>
  </div>
</template>
<script>
// import BScroll from "better-scroll";
export default {
  data() {
    return {
      tableList: [
        {
          title: "首页",
          id: 1,
        },
        {
          title: "专业信息管理",
          id: 2,
        },
        {
          title: "企业信息管理",
          id: 3,
        },
        {
          title: "就业管理",
          id: 4,
        },
      ],
      tableKey: 1,
      type: localStorage.getItem("type"),
      userInfo: ""
    };
  },
  mounted() {
    switch(this.$route.name){
      case "schoolsIndex":
       this.tableKey=1;
       break;
    }
  },
  created() {
    const that = this;

  },
  methods: {
    change: function(i) {
      if (i == 1) {
        this.$router.push({
          name: "schoolsIndex"
        });
      } 
      this.tableKey = i;
    },
  },
  watch:{
    '$route'(to, from){
      switch(to.name){
      case "schoolsIndex":
       this.tableKey=1;
       break;
      }
    }
  }
};
</script>
<<style lang="scss" scoped>
#left_nav {
  position: absolute;
  left:0;
  z-index: 100;
  height: calc(100vh - 80px);
  width: 14%;
  color: #fff;
  background: rgba(34, 40, 54, 0.8);
  overflow-y: hidden;
  text-align: center;
  .table {
    li {
      position: relative;
      font-size: 16px;
      color: #fff;
      line-height: 66px;
      padding-left: 15%;
      box-sizing: border-box;
      text-align: left;
      border-bottom: 2px solid #fff;
      cursor: pointer;
      i {
        position: absolute;
        right: 0;
        top: 24px;
        display: inline-block;
        border-left: 10px solid transparent;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 15px solid #086a6b;
      }
    }
    li.active {
      padding-left: 0;
      .father-item {
        background: #fff;
        padding-left: 15%;
      }
      .chilren-container {
        display: block;
      }
      color: #086a6b;
    }
  }
  .logobottom {
    position:absolute;
    bottom:20px;
    width:100%;
    img {
      width: 60%;
    }
    p {
      font-size: 0.16rem;
      margin-top: 20px;
      width: 100%;
    }
  }
}

</style>
