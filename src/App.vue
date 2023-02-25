<template>
  <div id="app">
    <MyHeader/>
    App.....
    <Footer/>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import Footer from '@/components/Footer'

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
