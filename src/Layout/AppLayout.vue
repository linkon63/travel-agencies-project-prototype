<script setup>
import Footer from '@/components/Shared/Footer.vue';
import Navbar from '../components/Shared/Navbar.vue'
</script>
<template>
  <div class="layout-wrapper overflow-hidden" :class="containerClass">
    <Navbar  />
     <!-- <h1>header</h1> -->
    <div class="mt-2">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>
