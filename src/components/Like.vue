<template>
    <div class="like-main-box">
        <div class="like-top">
            <el-row>
                <el-col :span="12" class="left-top">
                    <h3>猜你喜欢</h3>
                </el-col>
                <el-col :span="12" class="right-top">
                    <a href="#">
                        换一换<span class="el-icon-refresh re"></span>
                    </a>
                </el-col>
            </el-row>
        </div>
        <div class="like-content">
            <div class="like-item" v-for="item, index in items" :key="index">
                <div class="img-box">
                    <el-image style="width: 100%; height: 100px" :src="item.url" fit="cover"></el-image>
                </div>
                <div class="desc-box">
                    <p>{{ item.desc }}</p>
                </div>
                <div class="price-box">
                    <span>定金：￥{{ item.price }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Like',

    data() {
        return {
            items: [{url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', desc:'描述信息', price:'100.00'},
            {url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', desc:'描述信息', price:'100.00'},
            {url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', desc:'描述信息', price:'100.00'},
            {url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', desc:'描述信息', price:'100.00'},
            {url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', desc:'描述信息', price:'100.00'},
            {url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', desc:'描述信息', price:'100.00'}]
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="css" scoped>
.like-main-box {
    margin: 20px 0;
    position: relative;
}

.like-top {
    height: 40px;
    line-height: 40px;
}

.left-top {
    text-align: start;
}

.right-top {
    text-align: end;
}

.re {
    color: rgb(255, 21, 0);
}

.like-content {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
}

.like-item {
    width: 17%;
    display: inline-block;
    border: 1px solid #575757;
    padding: 5px 0 15px 0;
}

.img-box {
    width: 60%;
    margin: auto;
    padding: 10px;
}

.desc-box {
    padding: 5px 10px;
    text-align: start;
    text-indent: 3em;
    font-size: smaller;
}

.price-box {
    text-align: center;
    color: red;
    font-size: large;
    font-weight: bolder;
}
</style>