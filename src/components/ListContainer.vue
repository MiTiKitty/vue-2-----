<template>
    <div class="list-main">
        <div class="list-left">
            <div class="banner">
                <div class="item">
                    <img :src="dataList[currentIndex]">
                </div>
                <div class="page" v-if="this.dataList.length > 1">
                    <ul>
                        <li @click="gotoPage(prevIndex)">&lt;</li>
                        <li v-for="(item, index) in dataList" @click="gotoPage(index)"
                            :class="{ 'current': currentIndex == index }" :key="index"> {{ index + 1 }}</li>
                        <li @click="gotoPage(nextIndex)">&gt;</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="list-right">
            <div class="right-box">
                <div class="box-top">
                    <el-row>
                        <el-col :span="18">
                            <h4>shp快报</h4>
                        </el-col>
                        <el-col :span="6">
                            <a href="#">更多 &nbsp;&gt;</a>
                        </el-col>
                    </el-row>
                </div>
                <div class="box-titles">
                    <div class="title-item" v-for="item in titles" :key="item.id">
                        <span class="bold">【{{ item.type }}】</span>
                        <span>{{ item.content }}</span>
                    </div>
                </div>
                <div class="box-items">
                    <ul>
                        <li class="box-item" v-for="item in items" :key="item.id">
                            <div class="icon"></div>
                            <span class="desc">{{ item.desc }}</span>
                        </li>
                    </ul>
                </div>
                <div class="box-bottom">
                    <img style="width: 100%;height: 90px;" src="../assets/KrQ6ISVd7k.jpg"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListContainer',

    data() {
        return {
            dataList: ["https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg", "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg", "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"],
            currentIndex: 0,   //默认显示图片
            timer: null,    //定时器
            titles: [
                {
                    id: 1,
                    type: '特惠',
                    content: '一二三四五 上山打老虎'
                }
            ],
            items: [
                {
                    id: 1,
                    icon: '',
                    desc: '话费'
                }
            ]
        };
    },

    mounted() {
        //this.runInv();
        this.initTitles();
        this.initItems();
    },

    methods: {
        initTitles(){
            for (let i = 1; i < 5; i++) {
                const item = this.titles[i - 1]
                item.id = item.id + 1
                this.titles.push(item)
            }
        },

        initItems(){
            for (let i = 1; i < 16; i++) {
                const item = this.items[i - 1]
                item.id = item.id + 1
                this.items.push(item)
            }
        },

        gotoPage(index) {
            this.currentIndex = index;
        },

        runInv() {
            this.timer = setInterval(() => {
                this.gotoPage(this.nextIndex)
            }, 1000)
        }
    },

    computed: {
        //上一张
        prevIndex() {
            if (this.currentIndex == 0) {
                return this.dataList.length - 1;
            } else {
                return this.currentIndex - 1;
            }
        },
        //下一张
        nextIndex() {
            if (this.currentIndex == this.dataList.length - 1) {
                return 0;
            } else {
                return this.currentIndex + 1;
            }
        }
    }
};
</script>

<style lang="css" scoped>
div {
    box-sizing: border-box;
}

.list-main {
    position: relative;
    width: 100%;
    height: 415px;
}

.list-left {
    display: inline-block;
    width: 75%;
    height: 100%;
}

ul li {
    display: inline-block;
    list-style: none;
    align-content: space-between;
    height: 30px;
    line-height: 27px;
    margin: 0 10px;
    padding: 3px;
    cursor: pointer;
    color: rgba(255, 255, 255, .8);
    font-size: 14px;
}

.banner {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    margin-top: 0;
}

.banner img {
    width: 100%;
    height: 100%;
    display: block;
}

.banner .page {
    background: rgba(0, 0, 0, .5);
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
}

.banner .page ul {
    text-align: center;
}

.current {
    color: #ff6700;
}

.list-right {
    position: absolute;
    display: inline-block;
    width: 25%;
    height: 100%;
    top: 0;
    right: 0;
}

.box-top,
.box-titles,
.box-items,
.box-bottom {
    margin: 2px;
}

.box-top {
    border: 1px solid #121212;
    padding: 5px;
}

.box-titles {
    border: 1px solid #121212;
    padding: 8px;
}

.title-item {
    padding: 2px;
}

.bold {
    font-weight: bold;
}

.box-items {
    text-align: center;
}

.box-items ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.box-item {
    border: 1px solid #121212;
    padding: 4px;
    color: #121212;
    width: 25%;
    height: 35px;
    margin: 0;
}
</style>