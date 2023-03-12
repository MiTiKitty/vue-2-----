<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#fefefe" text-color="#03140a" active-text-color="#0ded0d">
            <el-submenu index="1">
                <template slot="title">全部商品分类</template>
                <el-submenu v-for="c1 in categoryList" :key="getKey('1', c1.categoryId)"
                    :index="getKey('1', c1.categoryId)">
                    <template slot="title">
                        <a @click="goSearch(c1, 1)">{{ c1.categoryName }}</a>
                    </template>
                    <el-submenu v-for="c2 in c1.categoryChild" :key="getKey(getKey('1', c1.categoryId), c2.categoryId)"
                        :index="getKey(getKey('1', c1.categoryId), c2.categoryId)">
                        <template slot="title">
                            <a @click="goSearch(c2, 2)">{{ c2.categoryName }}</a>
                        </template>
                        <el-menu-item v-for="c3 in c2.categoryChild"
                            :key="getKey(getKey(getKey('1', c1.categoryId), c2.categoryId), c3.categoryId)"
                            :index="getKey(getKey(getKey('1', c1.categoryId), c2.categoryId), c3.categoryId)">
                            <a @click="goSearch(c3, 3)">{{ c3.categoryName }}</a>
                        </el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                服装城
            </el-menu-item>
            <el-menu-item index="3">
                美妆馆
            </el-menu-item>
            <el-menu-item index="4">
                超市
            </el-menu-item>
            <el-menu-item index="5">
                全球购
            </el-menu-item>
            <el-menu-item index="6">
                闪购
            </el-menu-item>
            <el-menu-item index="7">
                团购
            </el-menu-item>
            <el-menu-item index="8">
                有趣
            </el-menu-item>
            <el-menu-item index="9">
                秒杀
            </el-menu-item>
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
        
    },

    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        getKey(n, id) {
            return n + '-' + id
        },
        goSearch(c, n){
            const categoryId = 'category' + n + 'Id'
            const query = {
                'gender': n,
                'categoryId': c.categoryId,
                'categoryName': c.categoryName
            }
            const params = this.$route.params
            query[categoryId] = c.categoryId
            this.$router.push({
                name: 'search',
                query,
                params
            })
        },
    },
};
</script>

<style lang="css" scoped></style>