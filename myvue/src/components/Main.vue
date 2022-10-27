<template>
    <h1>首页</h1>
</template>

<script>
    export default {
        name: "Main",
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
        }
    }
</script>

<style scoped>

</style>
