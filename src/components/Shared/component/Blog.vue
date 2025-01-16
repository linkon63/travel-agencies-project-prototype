<script setup>
import blogCard1 from '@/assets/Images/blog-card-1.png'
import blogCard2 from '@/assets/Images/blog-card-2.png'
import blogCard3 from '@/assets/Images/blog-card-3.png'
import leftIcon from '@/assets/Images/left-icon.png'
import rightIcon from '@/assets/Images/right-icon.png'

const travelCards = [
  {
    category: 'Traveler',
    title: 'A Journey Through Earth’s Most Scenic Landscapes',

    description:
      'Azad Kashmir borders the Pakistani provinces of Punjab and Khyber Pakhtunkhwa to the south...',
    image: blogCard1,
    date: '7th December, 2024',
  },
  {
    category: 'Traveler',
    title: 'A Journey Through Earth’s Most Scenic Landscapes',

    description: 'Azad Kashmir borders the Pakistani provinces of Punjab and Khyber Pakhtunkhwa to the south...',
    image: blogCard2,
    date: '7th December, 2024',
  },
  {
    category: 'Traveler',
    title: "A Journey Through Earth’s Most Scenic Landscapes",

    description:
      'Azad Kashmir borders the Pakistani provinces of Punjab and Khyber Pakhtunkhwa to the south...',
    image: blogCard3,
    date: '7th December, 2024',
  },
]
</script>
<template>
  <section class="py-16 bg-[#F8F8F8] text-[#545454]">
    <div class="w-10/12 mx-auto">
      <!-- Title -->

      <h2 class="text-3xl font-bold text-[#545454] ">Our Blog</h2>
      <div class="flex mb-4 justify-end">
        <button
          class="px-4 py-2 text-sm font-normal text-[#178EEF] border border-[#178EEF] rounded hover:bg-blue-100"
        >
          View All Blog <i class="pi pi-arrow-up-right px-1"></i>
        </button>
      </div>
      <!-- blog card start -->
      <div class="relative w-full">
  <!-- Left Arrow -->
  <button
    class="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-200 hidden md:block"
  >
    <img :src="leftIcon" alt="Left Arrow" class="w-6 h-6" />
  </button>

  <!-- Scrollable Cards -->
  <div class="overflow-x-auto flex gap-4 px-2 items-center">
    <div
      v-for="(card, index) in travelCards"
      :key="index"
      class="flex-shrink-0 bg-white rounded-xl p-4 space-y-3 h-auto w-[300px] md:w-[350px] lg:w-[400px] shadow-lg"
    >
      <h1 class="px-4 py-1 text-[#178EEF] bg-[#E1F1FE] rounded-full inline-block text-sm md:text-base">
        {{ card.category }}
      </h1>
      <h1 class="text-[16px] md:text-[20px] font-bold text-textheader">
        {{ card.title }}
      </h1>
      <p class="text-textheader text-[13px] md:text-[16px]">
        {{ card.description }}
      </p>
      <img
        :src="card.image"
        class="rounded-lg h-[200px] md:h-[300px] object-cover w-full"
        alt="Card Image"
      />
      <div class="flex flex-col md:flex-row md:items-center justify-between space-y-3 md:space-y-0">
        <p class="text-textheader text-[13px] md:text-[16px]">
          <i class="pi pi-calendar" style="color: #178EEF;"></i> {{ card.date }}
        </p>
        <button
          class="text-[13px] md:text-[16px] px-3 py-1 font-sans rounded-md border border-[#178EEF] text-[#178EEF] transition-colors hover:bg-[#178EEF] hover:text-white"
        >
          View Details <i class="pi pi-arrow-up-right" style="font-size: 13px"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Right Arrow -->
  <button
    class="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-200 hidden md:block"
  >
    <img :src="rightIcon" alt="Right Arrow" class="w-6 h-6" />
  </button>
</div>

    </div>
  </section>
</template>
