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
import ListContainer from '@/components/ListContainer';
import Recommend from '@/components/Recommend';
import Rank from '@/components/Rank';
import Like from '@/components/Like';
import Floor from '@/components/Floor';
import Brand from '@/components/Brand';

export default {
    name: 'SphIndex',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },

    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    }
};
</script>

<style lang="css" scoped>

</style>