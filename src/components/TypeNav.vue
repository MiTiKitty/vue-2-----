<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#fefefe" text-color="#03140a" active-text-color="#0ded0d">
            <el-submenu index="1">
                <template slot="title">全部商品分类</template>
                <el-submenu v-for="c1 in categoryList" :key="getKey('1', c1.categoryId)"
                    :index="getKey('1', c1.categoryId)">
                    <template slot="title"> {{ c1.categoryName }}</template>
                    <el-submenu v-for="c2 in c1.categoryChild" :key="getKey(getKey('1', c1.categoryId), c2.categoryId)"
                        :index="getKey(getKey('1', c1.categoryId), c2.categoryId)">
                        <template slot="title"> {{ c2.categoryName }}</template>
                        <el-menu-item v-for="c3 in c2.categoryChild"
                            :key="getKey(getKey(getKey('1', c1.categoryId), c2.categoryId), c3.categoryId)"
                            :index="getKey(getKey(getKey('1', c1.categoryId), c2.categoryId), c3.categoryId)">
                            {{ c3.categoryName }}
                        </el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'TypeNav',

    data() {
        return {
            activeIndex: '1'
        };
    },

    computed: {
        ...mapState({
            // 对象写法，需要一个函数，当需要使用时，立即执行一次
            // 这里传进来的是大仓库
            categoryList: (state) => {
                return state.home.categoryList
            }
        })
    },

    created() {

    },

    mounted() {
        // 通知vuex发送请求，获取数据，存储于仓库当中
        this.$store.dispatch('categoryList')
    },

    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        getKey(n, id) {
            return n + '-' + id
        },
    },
};
</script>

<style lang="css" scoped></style>