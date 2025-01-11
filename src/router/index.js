import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue'),
    },
    {
      path:'/Carousel',
      name:'Carousel',
      component:() => import ('@/components/About/Carousel.vue')
    }

  ],
})

export default router
