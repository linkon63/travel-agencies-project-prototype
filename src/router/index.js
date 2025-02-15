import { createRouter, createWebHistory } from 'vue-router';

import AppLayout from "../Layout/AppLayout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',

      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'landing',
          component: () => import('../components/Landing/Landing.vue'),
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
          path: '/blog-details',
          name: 'blogdetails',
          component: () => import('../components/Blog/BlogDetails.vue')
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
          name: 'umrah-packages-details',

          component: () => import('../components/PackageDetails/PackageDetails.vue')
        },
        {
          path: '/terms-and-condition',
          name: 'terms-and-condition',

          component: () => import('../components/TermsAndCondition/TermsAndCondition.vue')
        },
        {
          path: '/photo-gallery',
          name: 'photo-gallery',

          component: () => import('../components/PhotoGallery/PhotoGallery.vue')
        },
        {
          path: '/faq',
          name: 'faq',

          component: () => import('../components/Faq/Faq.vue')
        },
      ]
    }
  ]

});

export default router;


