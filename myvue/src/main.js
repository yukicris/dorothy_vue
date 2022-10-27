import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
//import VueRouter from 'vue-router'
import router from './router'   //自动扫描已集成的路由配置

Vue.config.productionTip = false


//显示声明使用VueRouter
Vue.use(VueAxios,axios)
//Vue.use(VueRouter)



new Vue({
  el: '#app',
  //配置路由
  router,
  components: { App },
  template: '<App/>'
})
