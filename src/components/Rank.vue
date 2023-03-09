<template>
    <div class="rank-box">
        <div class="rank-top">
            <div class="rank-type-item" v-for="item in types" :key="item.id">
                <div :class="['hot-type', item.active ? 'active-type' : '']"></div>
                <div :class="item.active ? 'active-name' : 'type-name'">{{ item.name }}</div>
            </div>
        </div>
        <div class="rank-list">
            <div class="rank-item-box" v-for="item, index in items" :key="index">
                <div class="item-img-box">
                    <img src="@/assets/oppo.png" alt="">
                </div>
                <div class="item-desc-box">
                    <p>{{ item.desc }}</p>
                </div>
                <div class="item-price-box">
                    <span>定金：￥{{ item.price }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Rank',

    data() {
        return {
            types: [{id:1,name:'热卖排行',active: true},
            {id:2,name:'热卖排行',active: false},
            {id:3,name:'热卖排行',active: false}],
            items: [{src:'',desc:'描述信息',price:'100.00'},
            {src:'@/assets/oppo.png',desc:'描述信息',price:'100.00'},
            {src:'',desc:'描述信息',price:'100.00'},
            {src:'',desc:'描述信息',price:'100.00'}]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.rank-box {
    text-align: center;
}

.rank-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-items: center;
}

.rank-type-item {
    width: 100px;
    height: 80px;
    margin: 0 5px;
    font-weight: 700;
}

.hot-type {
    margin: auto;
    width: 45%;
    height: 50px;
    background-color: #a7a4a4;
    border-radius: 73% 25% 64% / 53% 76% 47%;
}

.active-type {
    background-color: #ed6834b8;
}

.type-name {
    color: #302f2f;
}

.active-name {
    color: #f74b08b8;
}

.rank-list {
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: space-around;
    margin: 10px 0;
}

.rank-item-box {
    border: 1px solid #da2424;
    padding: 5px 15px;
    width: 23%;
    height: 350px;
}

.item-img-box {
    height: 230px;
}

img {
    width: 100%;
    height: 100%;
}

.item-desc-box {
    padding-top: 10px;
    text-indent: 1em;
    height: 50px;
    text-align: start;
}

.item-price-box {
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    text-align: start;
    color: red;
    text-indent: 0.7em;
}

</style>