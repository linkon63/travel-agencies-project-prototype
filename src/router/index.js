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
      path: '/about',
      name: 'about',

      component: () => import('../components/About/About.vue')
    },
    {
      path: '/blog',
      name: 'blog',

      component: () => import('../components/Blog/Blog.vue')
    },
    {
      path: '/contact',
      name: 'contact',

      component: () => import('../components/Contact/Contact.vue')
    },
    {
      path: '/visa',
      name: 'visa',

      component: () => import('../components/Visa/Visa.vue')
    },
    {
      path: '/umrah-packages-details',
      name: '',

      component: () => import('../components/PackageDetails/PackageDetails.vue')
    },
    {
      path: '/terms-and-condition',
      name: '',

      component: () => import('../components/TermsAndCondition/TermsAndCondition.vue')
    },
    {
      path: '/',
      name: '',

      component: () => import('../components/')
    },

  ]
})

export default router
