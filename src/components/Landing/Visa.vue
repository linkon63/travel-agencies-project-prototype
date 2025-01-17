<script setup>
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import visaCard1 from '../../assets/Images/visa-card-1.png'
import visaCard2 from '../../assets/Images/visa-card-2.png'
import visaCard3 from '../../assets/Images/visa-card-3.png'
import visaCard4 from '../../assets/Images/visa-card-4.png'

import 'swiper/css/pagination'

const modules = [Pagination, Navigation]

const visas = [
  {
    id: 1,
    title: 'Umrah Visa Regular',
    src: visaCard1,
    rating: 5,
    reviews: 120,
    category: 'Umrah',
  },
  {
    id: 2,
    title: 'Hajj Visa',
    src: visaCard2,
    rating: 5,
    reviews: 120,
    category: 'Umrah',
  },
  {
    id: 3,
    title: 'Dubai Work Visa',
    src: visaCard3,
    rating: 5,
    reviews: 120,
    category: 'Work Visa',
  },
  {
    id: 4,
    title: 'Saudi Arabia Work Visa',
    src: visaCard4,
    rating: 5,
    reviews: 120,
    category: 'Work Visa',
  },
]
</script>

<template>
  <section class="py-16 bg-card1bg text-textheader md:h-[752px] font-poppins">
    <div class="w-11/12 md:w-10/12 mx-auto">
      <div class="flex flex-col md:flex-row gap-4 justify-between mb-4">
        <!-- Title -->
        <h2 class="text-3xl font-bold text-textheader">Special Visa</h2>

        <!-- Tabs -->
        <div class="flex space-x-6 md:space-x-4 justify-center md:justify-end">
          <button
            class="text-xl font-medium font-poppins text-formtextlight before:w-0 hover:before:w-full before:bg-blue before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-blue transition-all duration-300 before:left-0 cursor-pointer"
            :class="{ 'text-blue font-semibold': activeTab === 'All' }"
            @click="filterVisas('All')"
          >
            All
          </button>
          <button
            class="text-xl font-medium font-poppins text-formtextlight before:w-0 hover:before:w-full before:bg-blue before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-blue transition-all duration-300 before:left-0 cursor-pointer"
            :class="{ 'text-blue font-semibold': activeTab === 'Umrah' }"
            @click="filterVisas('Umrah')"
          >
            Umrah
          </button>
          <button
            class="text-xl font-medium font-poppins text-formtextlight before:w-0 hover:before:w-full before:bg-blue before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-blue transition-all duration-300 before:left-0 cursor-pointer"
            :class="{ 'text-blue font-semibold': activeTab === 'Work Visa' }"
            @click="filterVisas('Work Visa')"
          >
            Work Visa
          </button>
        </div>
      </div>
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        :breakpoints="{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }"
        class="mySwiper"
      >
        <!-- Visa Cards -->
        <swiper-slide
          v-for="visa in visas"
          :key="visa.id"
          class="rounded-md h-[266px] md:h-[480px] min-w-[160px] md:min-w-[250px]"
        >
          <img
            :src="visa.src"
            :alt="visa.title"
            class="w-full h-[148px] md:h-[348px] object-cover rounded-t-lg"
          />
          <h3 class="mt-2 text-lg font-semibold truncate">{{ visa.title }}</h3>
          <div class="flex items-center  mt-2">
            <span class="pi pi-star-fill text-yellow"></span>
            <span class="text-gray-600 text-sm ml-1">{{ visa.rating }}</span>
            <span class="text-gray-400 text-sm ml-2">({{ visa.reviews }} Reviews)</span>
          </div>
          <button
            class="mt-4 px-4 py-2 text-sm text-blue border border-blue rounded hover:bg-lightblue"
          >
            View Details <i class="pi pi-arrow-up-right px-1"></i>
          </button>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style scoped>
.mySwiper {
  padding: 20px 0;
}
</style>
