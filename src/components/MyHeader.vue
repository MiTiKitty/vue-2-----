<template>
    <div class="header-box">
        <!-- 头部-顶部链接展示区 -->
        <div class="header-top main-backgroud-color">
            <div class="main-content">
                <el-row :gutter="0">
                    <el-col :span="6">
                        <div class="header-top-left header-content">
                            <ul>
                                <li>S-P-H欢迎您!</li> |
                                <li>请
                                    <a href="#">登录</a>
                                </li> |
                                <li>
                                    <a href="#">免费注册</a>
                                </li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div class="header-top-right header-content">
                            <ul>
                                <li>
                                    <a href="#">我的订单</a>
                                </li> |
                                <li>
                                    <a href="#">我的购物车</a>
                                </li> |
                                <li>
                                    <a href="#">我的SPH</a>
                                </li>
                                <li>
                                    <a href="#">SPH会员</a>
                                </li> |
                                <li>
                                    <a href="#">企业采购</a>
                                </li> |
                                <li>
                                    <a href="#">关注SPH</a>
                                </li> |
                                <li>
                                    <a href="#">合作招商</a>
                                </li> |
                                <li>
                                    <a href="#">我的购物车</a>
                                </li> |
                                <li>
                                    <a href="#">商家后台</a>
                                </li>
                            </ul>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="header-bottom">
            <div class="main-content">
                <el-row :gutter="0">
                    <el-col :span="4">
                        <div class="header-left">
                            <a href="#">
                                <img class="logo-img" src="sph-logo.png" alt="加载图片失败">
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="20">
                        <div class="header-right">
                            <div class="search-box">
                                <el-input class="search-input" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchContent">
                            </el-input>
                            <el-button class="search-btn" type="success">搜索</el-button>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',

    data() {
        return {
            searchContent: ""
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="css" scoped>
.header-box {
    align-items: center;
    justify-content: center;
}

.header-top {
    display: flex;
    flex-direction: column;
    min-height: 40px;
    line-height: 40px;
    font-size: 12px;
}

.header-top-left,
.header-left {
    display: flex;
    float: left;
    text-align: start;
}

.header-content li {
    display: inline-block;
}

.header-content li a {
    padding: 5px;
    border-radius: 5px;
}

.header-content li a:hover {
    background-color: rgb(192, 194, 193);
}

.header-top-right,
.header-right {
    display: flex;
    float: right;
    text-align: end;
}

.header-top-right::after,
.header-right::after {
    content: "";
    display: table;
    clear: both;
}

.header-bottom {
    height: 90px;
}

.logo-img {
    width: 180px;
    height: 60px;
    margin: 15px 10px;
}

.search-box {
    width: 500px;
    height: 50px;
    margin: 20px 5px;
}

.search-input {
    width: 80%;
}

.search-btn {
    width: 20%;
    color: #fffdfd;
    font-weight: bold;
}
</style>