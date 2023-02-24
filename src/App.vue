<template>
  <div id="app">
    <MyHeader/>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'

export default {
  name: 'App',
  components: {
    MyHeader
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
</style>
