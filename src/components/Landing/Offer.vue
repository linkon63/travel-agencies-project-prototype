<script setup>
import offerBg from '@/assets/Images/Offer-cardBg.png'
import Service from './Service.vue' /* PartiallyEnd: #3632/scriptSetup.vue */

</script>

<template>
  <section class="pt-12  inset-0 z-0" :style="{ backgroundImage: `url(${offerBg})` }">
    <div class="container mx-auto px-4 w-11/12  z-20">
      <!-- Title and Description -->
      <div class="text-start mb-8">
        <h2 class="text-3xl font-bold text-[32px] font-sans mb-2">
          Exclusive Offers <span>🤗</span>
        </h2>
        <p class="text-gray-600 font-normal font-sans text-base leading-6">
          Jicson Travel is a dynamic & customer-focused travel agency that offers a wide range of
          travel services, including flight, hotel, visa, car rent, vacation packages, &
          personalized travel itineraries.
        </p>
      </div>

      <!-- Horizontal Scrollable Cards -->
      <div class="relative">
        <!-- Left Arrow -->
        <button
          class="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-200 hidden md:flex"
        >
          <img src="../../assets/Images/left-icon.png" alt="Left Arrow" class="w-6 h-6" />
        </button>

        <div class="overflow-x-auto flex gap-4 px-2">
          <!-- Card 1 -->
          <div class="min-w-[280px] md:min-w-[300px] h-[220px] rounded-sm shadow-md bg-white">
            <img
              src="../../assets/Images/Offer-card-1.png"
              alt="Offer Card 1"
              class="h-full w-full object-cover rounded-sm"
            />
          </div>
          <!-- Card 2 -->
          <div class="min-w-[280px] md:min-w-[300px] h-[220px] rounded-sm shadow-md bg-white">
            <img
              src="../../assets/Images/Offer-card-2.png"
              alt="Offer Card 2"
              class="h-full w-full object-cover rounded-sm"
            />
          </div>
          <!-- Card 3 -->
          <div class="min-w-[280px] md:min-w-[300px] h-[220px] rounded-sm shadow-md bg-white">
            <img
              src="../../assets/Images/Offer-card-3.png"
              alt="Offer Card 3"
              class="h-full w-full object-cover rounded-sm"
            />
          </div>
        </div>

        <!-- Right Arrow -->
        <button
          class="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-200 hidden md:flex"
        >
          <img src="../../assets/Images/right-icon.png" alt="Right Arrow" class="w-6 h-6" />
        </button>
      </div>
    </div>
    <Service />
  </section>
</template>
