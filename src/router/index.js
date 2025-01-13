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
    },
    {
      path:'/BlogDetails',
      name:'Blog-Details',
      component:() => import('@/components/Blog/BlogDetails.vue')
    },
    {
      path:'/PhotoGallery',
      name:'PhotoGallery',
      component:() => import ('@/components/PhotoGallery/PhotoGallery.vue')
    },

  ],
})

export default router
