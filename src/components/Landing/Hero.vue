<script setup>
import hero from '@/assets/Images/hero-bg-gradiant.png'
import heroBg from '@/assets/Images/hero-bg.png'
import { ref } from 'vue'
// Active tab state
const activeTab = ref('visa')
</script>

<template>
  <section
    class="relative bg-cover  bg-center items-center z-10 w-full h-[824px] font-poppins"
    :style="{ backgroundImage: `url(${heroBg})` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 z-0 bg-cover w-full bg-no-repeat" :style="{ backgroundImage: `url(${hero})`}"></div>
    <!-- Plane Image -->
    <div class="flex justify-start md:left-[150px] relative z-10">
      <img
        src="../../assets/Images/hero-plane.png"
        class="w-[100px] sm:w-[150px] md:w-[225px] h-[50px] mt-[85px]"
        alt="Plane"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto text-white px-4 w-10/12">
      <!-- Title & Description -->
      <div class="mb-6 w-9/12">
        <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          Enjoy Your Awesome Trip with Jicson Travels
        </h1>
        <p class="text-lg sm:text-xl font-semibold">Find Visa & Holiday Travels</p>
      </div>

      <!-- Form Section -->
      <div class="bg-white rounded-lg shadow-md p-6 space-y-6">
        <!-- Tabs -->
        <div class="flex justify-start space-x-6 border-b-2 border-formborder pb-2">
          <button class="flex items-center space-x-1 text-highblue border-b-2 border-highblue font-medium">
            <img src="../../assets/Images/Frame-1.png" alt="Visa" class="w-6 h-6" />
            <span>Visa</span>
          </button>
          <button class="flex items-center space-x-1 text-formtextlight hover:text-highblue">
            <img src="../../assets/Images/Frame-2.png" alt="Hajj Umrah" class="w-6 h-6" />
            <span>Hajj Umrah</span>
          </button>
          <button class="flex items-center space-x-1 text-formtextlight hover:text-highblue">
            <img src="../../assets/Images/Frame-2.png" alt="Holiday Package" class="w-6 h-6" />
            <span>Holiday Package</span>
          </button>
        </div>

        <!-- Form -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-9 gap-4">
          <!-- Country -->
          <div
            class="col-span-4 md:col-span-4 border-2 border-formborder rounded-md p-2 px-4 focus:outline-none focus:ring-2 focus:ring-highblue"
          >
            <label for="country" class="block text-sm text-formtextlight mb-1 "> Country </label>
            <select id="country" class="w-full text-formtextdark font-semibold text-xl border-none">
              <option>Country</option>
              <option>USA</option>
              <option>Canada</option>
              <option>UK</option>
            </select>
          </div>

          <!-- Visa Type -->
          <div
            class="col-span-4 md:col-span-4 border-2 border-formborder   rounded-md p-2 px-4 focus:outline-none focus:ring-2 focus:ring-highblue"
          >
            <label for="visa-type" class="block text-sm text-formtextlight mb-1"> Visa Type </label>
            <select id="visa-type" class="w-full text-formtextdark font-semibold text-xl border-none">
              <option>Tourist</option>
              <option>Business</option>
              <option>Student</option>
            </select>
          </div>

          <!-- Search Button -->
          <div class="col-span-1 flex justify-center items-end">
            <button
              class="w-full sm:w-12 h-12 bg-highblue text-white rounded-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-highblue"
            >
              <i class="pi pi-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
