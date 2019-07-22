<template>
    <div id="head">
        <div class="logo">
            <img
                src="http://112.124.123.60:8499/ciic_qyuser3.2/images/%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF/u11.png"
                alt
            />
            <span>企业管理端</span>
        </div>
        <ul class="right">
            <li>
                <img src="http://112.124.123.60:8499/ciic_qyuser3.2/images/基本信息/u14.svg" alt />
            </li>
            <li>
                <img src="http://112.124.123.60:8499/ciic_qyuser3.2/images/基本信息/u12.svg" alt />
            </li>
            <li>
                <img src="http://112.124.123.60:8499/ciic_qyuser3.2/images/基本信息/u13.svg" alt />
            </li>
            <li>
                <img class="headPhone" src="http://112.124.123.60:8499/ciic_qyuser3.2/images/基本信息/u15.png" alt />
                陈敏
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            U_key: true,
            S_key: true,
            T_key: true,
            GroupName: "",
            SchoolLogo: ""
        };
    },
    mounted() {
        let that = this;
        that.getschool();
        document.addEventListener("click", this.handelClick);
        that.GroupName = sessionStorage.getItem("groupname");
    },
    methods: {
        getschool() {},
        Bcak() {
            this.$router.push({
                name: "Login"
            });
        },
        goPass() {},
        handelClick() {
            // console.log(1)
            this.U_key = true;
            this.T_key = true;
            this.S_key = true;
            return false;
        },
        Tchange(i) {
            if (i == 2) {
                this.U_key = !this.U_key;
                this.T_key = true;
                this.S_key = true;
            } else if (i == 1) {
                this.U_key = true;
                this.T_key = !this.T_key;
                this.S_key = true;
            } else if (i == 0) {
                this.U_key = true;
                this.T_key = true;
                this.S_key = !this.S_key;
            }
            console.log(this.S_key, this.T_key, this.U_key);
        }
    }
};
</script>
<style lang="scss" scoped>
#head {
    width: 100vw;
    position: relative;
    left: 0;
    z-index: 100;
    height: 80px;
    padding: 20px;
    box-sizing: border-box;
    background-size: cover;
    overflow: hidden;
    background: rgba(34, 40, 54, 1);
    .logo {
        float: left;
        // border-right: 1px solid #fff;
        img {
            width: 87px;
            height: 24px;
            margin-top: 16px;
            vertical-align: middle;
            position: relative;
            bottom: 8px;
        }
        span {
            display: inline-block;
            vertical-align: top;
            color: blue;
            font-size: 20px;
            margin-left: 10px;
            line-height: 40px;
            font-weight: bold;
            letter-spacing: 3px;
        }
    }
    .right {
        float: right;
        width: 300px;
        color: #fff;
        li {
            height: 40px;
            margin-right: 40px;
            float: left;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .headPhone{
              width:30px;
              height:30px;
              margin-right: 10px
            }
        }
    }
}
</style>

