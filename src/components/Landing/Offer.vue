<script setup>
import offerBg from '@/assets/Images/Offer-cardBg.png'
</script>

<template>
  <section class="py-12" :style="{ backgroundImage: `url(${offerBg})` }">
    <div class="container mx-auto px-4 w-11/12 h-[332px] top-[972px] left-[183px]">
      <!-- Title and Description -->
      <div class="text-center mb-8">
        <h2
          class="text-3xl font-bold text-[32px] font-sans flex justify-start items-center gap-2 w-[1439px] h-[40px] top-[972px] left-[240px]"
        >
          Exclusive Offers <span>🤗</span>
        </h2>
        <p
          class="text-gray-600 font-normal font-sans text-4 leading-6 text-start w-[712px] h-[40px] top-[1020px] left-[240px]"
        >
          Jicson Travel is dynamic & customer-focused travel agency that offers a wide range of
          travel services, including flight, hotel, Visa, Car Rent, vacation packages, &
          personalized travel itineraries.
        </p>
      </div>

      <div class="grid grid-cols-3 gap-4 p-4">
        <!-- Card 1 -->
        <img
          src="../../assets/Images/Offer-card-1.png"
          class="h-[220px] rounded-sm shadow-md"
          alt="Offer Card 1"
        />
        <!-- Card 2 -->
        <img
          src="../../assets/Images/Offer-card-2.png"
          class="h-[220px] rounded-sm shadow-md"
          alt="Offer Card 2"
        />
        <!-- Card 3 -->
        <img
          src="../../assets/Images/Offer-card-3.png"
          class="h-[220px] rounded-sm shadow-md"
          alt="Offer Card 3"
        />
      </div>
    </div>
  </section>
</template>
