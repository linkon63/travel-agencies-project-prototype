import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('../components/Home.vue'),
    // },
    {
      path:'/About',
      name:'About',
      component:() => import('@/components/About/About.vue')
    },

    {
      path:'/Blog',
      name:'Blog',
      component:() => import ('@/components/Blog/Blog.vue')
    }

  ],
})

export default router
