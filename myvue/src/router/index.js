import Vue from 'vue'
import VueRouter from "vue-router";
import Content from "../components/Content";
import Main from "../components/Main";
import UserProfile from "../user/Profile"
import NotFound from "../NotFound";

//安装路由
Vue.use(VueRouter);
//配置导出路由
export default new VueRouter({
  routes: [
    {
      //路由路径 类似@RequestMapping
      path: '/content',
      name: 'content',
      //跳转的组件
      component: Content,
      props: true
    },
    {
      //路由路径 类似@RequestMapping
      path: '/main/ :id',
      name: 'main',
      //跳转的组件
      component: Main,
      children:[
        { path: '/main',component:UserProfile}
      ]
    },
    {
      //重定向
      path: '/gohome',
      redirect: '/main'
    },
 /*   {
      path:'/:pathMatch(.*)',
      component: 'NotFound'
    }*/
   /* {
    path: '/main',
    component: resolve =>
    require(['../components/Main.vue'], resolve),
    redirect: '/main'
    }*/
  ]
})
