<template>
    <div class="main-content">
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <floor></floor>
        <floor></floor>
        <Brand></Brand>
    </div>
</template>

<script>
import ListContainer from '@/components/ListContainer.vue';
import Recommend from '@/components/Recommend.vue';
import Rank from '@/components/Rank.vue';
import Like from '@/components/Like.vue';
import Floor from '@/components/Floor.vue';
import Brand from '@/components/Brand.vue';
import TypeNav from '@/components/TypeNav.vue';
import { reqCategoryList } from '@/api/index';

export default {
    name: 'Home',

    data() {
        return {
            
        };
    },

    mounted() {
        reqCategoryList()
    },

    methods: {
        
    },

    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand,
        TypeNav
    }
};
</script>

<style lang="css" scoped>

</style>