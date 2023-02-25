<template>
    <div class="footer main-backgroud-color">
        <div class="main-content">
            <div class="footer-top">
                <el-row>
                    <el-col :span="4">
                        <ul class="footer-ul">
                            <li>
                                <h4>标题</h4>
                            </li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                        </ul>
                    </el-col>
                    <el-col :span="4">
                        <ul class="footer-ul">
                            <li>
                                <h4>标题</h4>
                            </li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                        </ul>
                    </el-col>
                    <el-col :span="4">
                        <ul class="footer-ul">
                            <li>
                                <h4>标题</h4>
                            </li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                        </ul>
                    </el-col>
                    <el-col :span="4">
                        <ul class="footer-ul">
                            <li>
                                <h4>标题</h4>
                            </li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                        </ul>
                    </el-col>
                    <el-col :span="4">
                        <ul class="footer-ul">
                            <li>
                                <h4>标题</h4>
                            </li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                            <li><a href="#">一些链接</a></li>
                        </ul>
                    </el-col>
                    <el-col :span="4">
                        <ul class="footer-ul">
                            <li>
                                <h4>帮助中心</h4>
                            </li>
                            <li>
                                <img class="footer-img" src="cat_wx.png" alt="图片加载失败">
                            </li>
                        </ul>
                    </el-col>
                </el-row>
            </div>
            <div class="footer-bottom">
                <div class="about">
                    <ul>
                        <li><a href="#">关于我们</a></li> |
                        <li><a href="#">关于我们</a></li> |
                        <li><a href="#">关于我们</a></li> |
                        <li><a href="#">关于我们</a></li> |
                        <li><a href="#">关于我们</a></li> |
                        <li><a href="#">关于我们</a></li> |
                        <li><a href="#">关于我们</a></li> |
                        <li><a href="#">关于我们</a></li> |
                        <li><a href="#">关于我们</a></li> |
                        <li><a href="#">关于我们</a></li>
                    </ul>
                </div>
                <p class="footrt-content">
                    地址：喵星球喵星球喵星球
                </p>
                <p class="footrt-content">
                    喵3674-5957438号
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="css" scoped>
.footer {
    padding: 20px 0;
}

.footer-ul {
    padding-left: 20px;
}

.footer-ul li a {
    padding-left: 5px;
    font-size: xx-small;
}

.footer-img {
    width: 130px;
    height: 130px;
}

.footer-bottom {
    text-align: center;
}

.about,
.footrt-content {
    align-content: center;
    font-size: xx-small;
}

.about ul li {
    display: inline-block;
    padding: 15px 10px 5px 10px;
}
</style>