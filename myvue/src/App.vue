<template>
  <div id="app">
    HELLO Dorothy
    <h1 @click="dianji">点击首页</h1>
    <router-link :to="{name:'main',params:{id:1}}">首页</router-link>
   <!-- <router-link to="/content">内容页</router-link>-->
<!--    试试props传参-->
    <router-link :to="{name:'content',params:{password:2}}">内容页</router-link>
    <router-link to="/gohome">回到首页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import Content from "./components/Content";

export default {
  name: 'App',
  methods: {
    dianji () {
      var routeData = this.$router.resolve({
        path: '/main',
        query: { title: '"xskb","xzkb","xs_wcnrcls","xz_wcnrcls","xjzsl"'}
      })
      window.open(routeData.href, '_blank')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
