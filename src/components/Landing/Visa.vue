<script setup>
import visaCard1 from "../../assets/Images/visa-card-1.png";
import visaCard2 from "../../assets/Images/visa-card-2.png";
import visaCard3 from "../../assets/Images/visa-card-3.png";
import visaCard4 from "../../assets/Images/visa-card-4.png";
const visas = [
  {
    id: 1,
    title: "Umrah Visa Regular",
    src: visaCard1,
    rating: 5,
    reviews: 120,
    category: "Umrah",
  },
  {
    id: 2,
    title: "Hajj Visa",
    src: visaCard2,
    rating: 5,
    reviews: 120,
    category: "Umrah",
  },
  {
    id: 3,
    title: "Dubai Work Visa",
    src: visaCard3,
    rating: 5,
    reviews: 120,
    category: "Work Visa",
  },
  {
    id: 4,
    title: "Saudi Arabia Work Visa",
    src: visaCard4,
    rating: 5,
    reviews: 120,
    category: "Work Visa",
  },
];
</script>

<template>
  <section class="py-16 bg-[#F8F8F8] text-[#545454]">
    <div class="w-11/12 md:w-10/12 mx-auto ">
      <!-- Title -->
      <h2 class="text-3xl font-bold text-[#545454] ">Special Visa</h2>

      <!-- Tabs -->
      <div class="flex space-x-8 mb-2 justify-end">
        <button
          class="text-xl font-medium font-sans text-[#737373] before:w-0 hover:before:w-full before:bg-blue-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-blue-600 transition-all duration-300 before:left-0 cursor-pointer"
          :class="{'text-blue-600 font-semibold': activeTab === 'All'}"
          @click="filterVisas('All')"
        >
          All
        </button>
        <button
          class="text-xl font-medium font-sans text-[#737373] before:w-0 hover:before:w-full before:bg-blue-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-blue-600 transition-all duration-300 before:left-0 cursor-pointer"
          :class="{'text-blue-600 font-semibold': activeTab === 'Umrah'}"
          @click="filterVisas('Umrah')"
        >
          Umrah
        </button>
        <button
          class="text-xl font-medium font-sans text-[#737373] before:w-0 hover:before:w-full before:bg-blue-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-blue-600 transition-all duration-300 before:left-0 cursor-pointer"
          :class="{'text-blue-600 font-semibold': activeTab === 'Work Visa'}"
          @click="filterVisas('Work Visa')"
        >
          Work Visa
        </button>
      </div>
      <div class="flex items-center ">
 <!-- Left Arrow -->
 <button class="absolute left-10 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-200">
          <img src="../../assets/Images/left-icon.png" alt="Left Arrow" class="w-6 h-6" />
        </button>
      <!-- Visa Cards -->
      <div class="overflow-x-auto flex gap-4 px-2   mx-auto ">
        <div
          v-for="visa in visas"
          :key="visa.id"
          class="rounded-md min-w-[220px] md:min-w-[250px]"
        >
          <img
            :src="visa.src"
            :alt="visa.title"
            class="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 class="mt-4 text-lg font-bold ">{{ visa.title }}</h3>
          <div class="flex items-center text-yellow-500 mt-2">
            <span class="pi pi-star-fill"></span>
            <span class="text-gray-600 text-sm ml-1">{{ visa.rating }}</span>
            <span class="text-gray-400 text-sm ml-2">({{ visa.reviews }} Reviews)</span>
          </div>
          <button
            class="mt-4 px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-100"
          >
            View Details <i class="pi pi-arrow-up-right px-1"></i>
          </button>
        </div>
      </div>
      <!-- Right Arrow -->
      <button
          class="absolute right-10 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-200"
        >
          <img src="../../assets/Images/right-icon.png" alt="Right Arrow" class="w-6 h-6" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
