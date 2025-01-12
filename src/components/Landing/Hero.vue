<script setup>
import hero from '@/assets/Images/hero-bg-gradiant.png';
import heroBg from '@/assets/Images/hero-bg.png';
import { ref } from 'vue';
// Active tab state
const activeTab = ref('visa')
</script>

<template >
 <section
    class="relative bg-cover bg-center  items-center z-10 w-full h-[824px]"
    :style="{ backgroundImage: `url(${heroBg})` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 z-0" :style="{ backgroundImage: `url(${hero})` }"></div>
    <!-- Plane Image -->
  <div class="flex justify-start left-[150px] relative z-10">
    <img
      src="../../assets/Images/hero-plane.png"
      class="w-[225px] h-[50px] mt-[85px] "
      alt="Plane"
    />
  </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto text-white text-start w-[1080px] h-[408px] gap-[32px]">
      <div class="text-start  justify-start font-bold mb-6 w-[849px] h-[196px] gap-[24px]">
        <h1 class="text-4xl md:text-6xl font-sans w-[849px] h-[144px]">
          Enjoy Your Awesome Trip with Jicson Travels
        </h1>
        <p class="text-lg md:text-xl font-semibold w-[849px] h-[28px]">
          Find Visa & Holiday Travels
        </p>
      </div>
<!-- form -->
      <div class="bg-white rounded-lg shadow-md py-6 p-6 w-[1080px] h-[180px]">
        <!-- Tabs -->
        <div class="flex justify-start space-x-6 border-b pb-2">
          <button
            class="flex items-center space-x-2 text-[#178EEF] border-b-2 border-[#178EEF] font-medium"
          >
            <img src="../../assets/Images/Frame-1.png" class=""></img>
            <span>Visa</span>
          </button>
          <button class="flex items-center space-x-2 text-gray-500 hover:text-[#178EEF]">
            <img src="../../assets/Images/Frame-2.png" class="pi pi-briefcase"></img>
            <span>Hajj Umrah</span>
          </button>
          <button class="flex items-center space-x-2 text-gray-500 hover:text-[#178EEF]">
            <img src="../../assets/Images/Frame-2.png" class="pi pi-plane"></img>
            <span>Holiday Package</span>
          </button>
        </div>

        <!-- Form -->
        <div class="mt-4 grid grid-cols-1 md:grid-cols-9 gap-4">
          <!-- Country -->
          <div
            class="col-span-4 font-sans border rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <label for="country" class="flex justify-start w-[58px] h-[16px] text-sm text-gray-700 mb-1">
              Country
            </label>
            <select id="country" class="w-full h-[24px]  font-semibold text-[16px]">
              <option>Country</option>
              <option>USA</option>
              <option>Canada</option>
              <option>UK</option>
            </select>
          </div>

          <!-- Visa Type -->
          <div
            class="col-span-4 font-sans  border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <label for="visa-type" class="flex justify-start w-[72px] h-[16px] text-sm text-gray-700 mb-1">
              Visa Type
            </label>
            <select id="visa-type" class="w-full h-[24px] font-semibold  text-[16px]">
              <option>Tourist</option>
              <option>Business</option>
              <option>Student</option>
            </select>
          </div>

          <!-- Search Button -->
          <div class="flex items-end">
            <button
              class=" w-[3rem] h-[3rem]  p-3 gap-3 bg-[#178EEF] text-white font-medium rounded-md hover:scale-105 focus:outline-none focus:ring-2 "
            >
              <i class="pi pi-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
