<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
<template>
  <div class="flex justify-between items-center w-full relative bg-white boxShadow px-4 py-3">
    <!-- Logo Section -->
    <div class="flex items-center justify-between lg:justify-around px-4 py-3 w-full">
      <div class="flex gap-2 items-center">
        <img src="../../assets/Images/logo.png" alt="logo" class="w-[100px] h-[40px]" />
      </div>

      <!-- Navbar Links -->
      <ul class="items-center gap-5 text-[16px] font-normal text-gray-700 lg:flex hidden">
        <li>
          <router-link
            to="/"
            class="before:w-0 hover:before:w-full before:bg-blue-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-blue-600 leading-4 transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/visa"
            class="before:w-0 hover:before:w-full before:bg-blue-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-blue-600 transition-all duration-300 before:left-0 cursor-pointer capitalize flex items-center gap-2"
          >
            Visa Service
            <font-awesome-icon :icon="['fas', 'angle-down']" />
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="before:w-0 hover:before:w-full before:bg-blue-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-blue-600 transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            About Us
          </router-link>
        </li>
        <li>
          <router-link
            to="/blog"
            class="before:w-0 hover:before:w-full before:bg-blue-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-blue-600 transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            Blog
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="before:w-0 hover:before:w-full before:bg-blue-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-blue-600 transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            Contact Us
          </router-link>
        </li>
        <li>
          <router-link
            to=""
            class="before:w-0 hover:before:w-full before:bg-blue-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-blue-600 transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            <font-awesome-icon :icon="['fas', 'phone-volume']" />
            +880 1994 902050
          </router-link>
        </li>
      </ul>
    </div>
    <!-- Mobile Hamburger Menu -->
    <div
      class="lg:hidden flex cursor-pointer w-[24px] h-[24px] top-[20px] left-[20px]"
      @click="toggleMobileMenu"
    >
      <font-awesome-icon :icon="['fas', 'bars-staggered']" />
    </div>

    <!-- Mobile Sidebar -->
    <aside
      :class="{
        'translate-x-0 opacity-100 z-20': mobileMenuOpen,
        'translate-x-[200px] opacity-0 z-[-1]': !mobileMenuOpen,
      }"
      class="lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300"
    >
      <ul class="flex flex-col items-center gap-4 text-lg font-semibold text-gray-600">
        <li>
          <router-link
            to="/"
            class="hover:border-b-blue-600 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/visa"
            class="hover:border-b-blue-600 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize"
          >
            Visa Service
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="hover:border-b-blue-600 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize"
          >
            About Us
          </router-link>
        </li>
        <li>
          <router-link
            to="/blog"
            class="hover:border-b-blue-600 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize"
          >
            Blog
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="hover:border-b-blue-600 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize"
          >
            Contact Us
          </router-link>
        </li>
        <li>
          <router-link
            to=""
            class="hover:border-b-blue-600 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize"
          >
            +880 1994 902050
          </router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>
