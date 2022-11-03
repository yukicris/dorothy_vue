<template>
  <div>
 <!-- 所有的元素不能直接放在根节点下,必须用个标签套起来-->
    <h1>首页</h1>
   {{$route.params.id}}</div>
</template>

<script>
    export default {
        name: "Main",
    /*    beforeRouteEnter(to,from,next) {
            console.log("进入路由之前")
          next();
        },
      beforeRouteLeave(to,from,next) {
        console.log("进入路由之后")
        next();
      },*/
        data(){
          return {
            title: ''
          }
        },
        mounted() {
          this.title = this.$route.query.title
          console.log(this.title)
        },
        methods(){
        },

    }
</script>

<style scoped>

</style>
