import { createRouter, createWebHistory } from 'vue-router';
// import AppLayout from "../Layout/AppLayout.vue";
import TermsAndCondition from '@/components/TermsAndCondition/TermsAndCondition.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/termsAndCondition',
      component: TermsAndCondition,
      children: [
        {
          path: '/packagesdetails',
          name: 'packagesdetails',

          component: () => import('../components/PackageDetails/PackageDetails.vue')
        },
        {
          path: '/termsAndCondition',
          name: 'termsAndCondition',

          component: () => import('../components/TermsAndCondition/TermsAndCondition.vue')
        },
        // {
        //   path: '/',
        //   name: 'landing',
        //   component: () => import('../components/TermsAndCondition/TermsAndCondition.vue'),
        // },
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import('../components/About/About.vue')
        // },
        // {
        //   path: '/blog',
        //   name: 'blog',
        //   component: () => import('../components/Blog/Blog.vue')
        // },
        // {
        //   path: '/contact',
        //   name: 'contact',

        //   component: () => import('../components/Contact/Contact.vue')
        // },
        // {
        //   path: '/visa',
        //   name: 'visa',

        //   component: () => import('../components/Visa/Visa.vue')
        // },
        // {
        //   path: '/photo-gallery',
        //   name: 'photo-gallery',

        //   component: () => import('../components/PhotoGallery/PhotoGallery.vue')
        // },
        // {
        //   path: '/faq',
        //   name: 'faq',

        //   component: () => import('../components/Faq/Faq.vue')
        // },
      ]
    }
  ]
});

export default router;
