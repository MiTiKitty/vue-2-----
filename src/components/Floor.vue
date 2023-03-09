<template>
    <div class="floor">
        <div class="floor-top">
            <el-row>
                <el-col :span="4" class="left-top">
                    <h3>家用电器</h3>
                </el-col>
                <el-col :span="20" class="right-top">
                    <ul>
                        <li class="type-item" v-for="item, index in types" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </el-col>
            </el-row>
        </div>
        <div class="line"></div>
        <div class="floor-content">
            <div class="head-img-box">
                <img src="../assets/cat_logo.jpg" alt="">
            </div>
            <div class="chart-img-box">
                <img src="../assets/y1.jpg" alt="">
            </div>
            <div class="item-img-box">
                <div class="item-img-half-box">
                    <img src="../assets/cat_logo.jpg" alt="">
                </div>
                <div class="item-img-half-box">
                    <img src="../assets/KrQ6ISVd7k.jpg" alt="">
                </div>
            </div>
            <div class="item-img-box">
                <img src="../assets/oppo.png" alt="">
            </div>
            <div class="item-img-box">
                <div class="item-img-half-box">
                    <img src="../assets/KrQ6ISVd7k.jpg" alt="">
                </div>
                <div class="item-img-half-box">
                    <img src="../assets/cat_logo.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Floor',

    data() {
        return {
            types: ['热门', '热门', '热门', '热门', '热门', '热门', '热门'],
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="css" scoped>
.floor {
    position: relative;
}

.floor-top {
    height: 40px;
    line-height: 40px;
}

.left-top {
    text-align: start;
    color: rgb(214, 29, 29);
}

.right-top {
    text-align: end;
}

.type-item {
    display: inline-block;
    padding: 2px 5px;
    margin: 0 5px;
}

.active {
    color: red;
}

.line {
    width: 100%;
    border-top: 2px solid red;
}

.floor-content {
    width: 100%;
    height: 300px;
    display: flex;
    margin-bottom: 20px;
}

img {
    width: 100%;
    height: 100%;
}

.head-img-box {
    width: 15%;
}

.chart-img-box {
    width: 25%;
}

.item-img-box {
    width: 20%;
    height: 100%;
}

.item-img-half-box {
    width: 100%;
    height: 50%;
    float: left;
}
</style>