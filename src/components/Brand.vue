<template>
    <div class="brand">
        <ul>
            <li>
                <div class="my-brand"></div>
            </li>
            <li>
                <div class="my-brand"></div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Brand',

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
.brand {
    margin: 10px;
}

.brand ul {
    display: flex;
}

li {
    width: 50%;
    height: 50px;
}

.my-brand {
    width: 100%;
    height: 100%;
    background: url(../assets/brand.jpg) repeat-x -15px 5px;
}
</style>