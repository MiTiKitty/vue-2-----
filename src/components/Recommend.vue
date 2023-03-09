<template>
    <div class="today-recommend">
        <div class="py-container">
            <ul class="recommend">
                <li class="clock">
                    <img src="../assets/cat_logo.jpg" alt="">
                    <div class="time">
                        <h3>今日推荐</h3>
                    </div>
                </li>
                <li class="banner">
                    <img src="../assets/y1.jpg" alt="">
                </li>
                <li class="banner">
                    <img src="../assets/y1.jpg" alt="">
                </li>
                <li class="banner">
                    <img src="../assets/y1.jpg" alt="">
                </li>
                <li class="banner">
                    <img src="../assets/y1.jpg" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Recommend',

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
.today-recommend {
    margin: 20px 0;
}

.py-container {
    align-items: center;
}

.recommend {
    display: flex;
    flex-direction: row;
}

.clock,
.banner {
    width: 20%;
}

.clock {
    position: relative;
    text-align: center;
}

.clock img {
    background-color: #4e4e4e;
    opacity: 0.9;
}

.time {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    background-color: #2522227e;
    border-radius: 5px;
    padding: 5px;
}

.time h3 {
    color: #fff;
}

img {
    width: 100%;
}
</style>