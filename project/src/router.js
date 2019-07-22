import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


var router = new Router({
  // mode: 'history',
  routes: [
      {
          path: '/',
          name: 'home',
          // component: () => import('./views/home/home.vue'),
          children: [
              // {name: "案例列表", path: '/caseList', component: () => import('@/views/case/caseList')}
          ]
      },
      // {
      //     path: '/login',
      //     name: 'login',
      //     component: () => import('@/views/login/login')
      // }

  ]
})

router.beforeEach((to, from, next) => {
  // // 登录拦截
  // if (to.fullPath == '/'){
  //     if (sessionStorage.getItem('user')){
  //         next({ path: '/main' })
  //         return
  //     } else {
  //         Message({
  //             message: '会话已过期,请重新登录!',
  //             showClose: true,
  //             type: 'warning'
  //         });

  //         next({ path: '/login' })
  //         return
  //     }
  // } else if (to.fullPath == '/login'){
  //     next();
  //     return
  // } else {
  //     if (sessionStorage.getItem('user')){
  //         next();
  //         return
  //     } else {
  //         Message({
  //             message: '会话已过期,请重新登录!',
  //             showClose: true,
  //             type: 'warning'
  //         });

  //         next({ path: '/login' })
  //         return
  //     }
  // }
})
export default router
