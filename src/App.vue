<template>
  <div id="app">
    <MyHeader/>
    <router-view></router-view>
    <!-- 在home或者search，footer是显示的，在登录与注册是隐藏的 -->
    <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-content {
  width: 85%;
  margin: 0 auto;
}

li {
    list-style: none;
}

a {
  color: black;
  text-decoration: none;
}

.main-backgroud-color {
  background-color: #e9e2e2;
}

a:hover {
  color: #f21515;
}
</style>
