import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Productlist from '../components/productlist.vue'
import Orderlist from '../components/orderlist.vue'
import Userlist from '../components/userlist.vue'
import Index from '../index/index.vue'
import Shopdetail from '../index/shopdetail.vue'
import Jump from '../index/jump.vue'
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(VueRouter)
const routes = [
  {
    path: '/admin',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/admin/productlist',
        name: 'productlist',
        component: Productlist
      },
      {
        path: '/admin/orderlist',
        name: 'orderlist',
        component: Orderlist
      },
      {
        path: '/admin/userlist',
        name: 'userlist',
        component: Userlist
      },
    ]
  },
  {
    path: '/admin/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'index',
    component: Index,
    
  },
  {
    path: '/shopdetail',
    name: 'shopdetail',
    component: Shopdetail
  },
  {
    path: '/jump',
    name: 'jump',
    component: Jump
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 配置路由的拦截器
router.beforeEach((to, from, next) => {
  
  if(to.matched[0].name==='home'||to.matched[0].name==='login'){
    document.title='私脸定治后台管理系统'
    if (to.name === 'login') {
      next();
    } else {
      // 如果请求的不是登录页面，验证token
      // 1. 获取本地存储中的token
      const token = localStorage.getItem('token');
      if (!token) {
       
              
      
        // 2. 如果没有token，跳转到登录
        next({
          name: 'login'
        });
      } else {
        // 3. 如果有token，继续往下执行
        next();
      }
    }
  }else{
    document.title='私脸定治代理商平台'
    if (to.name === 'jump') {
      next();
    }else{
      const token = localStorage.getItem('token');
      if (!token) {
        next({
          name: 'jump'
        });
      }else{
        next();
      }
    }
   
  }
      // 如果访问登录的路由地址，放过
  
    
  
    
  
});
export default router
