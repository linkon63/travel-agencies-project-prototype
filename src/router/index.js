import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue'),
    },
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
    {
      path:'/Visa',
      name:'Visa',
      component:() => import('@/components/Visa/Visa.vue')
    },
    {
      path:'/Contact',
      name:'Contact',
      component:() => import('@/components/Contact/Contact.vue')
    },

  ],
})

export default router
