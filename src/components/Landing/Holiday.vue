<script setup>
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import HolidayCard1 from '../../assets/Images/Holiday-1.png'
import HolidayCard2 from '../../assets/Images/Holiday-2.png'
import HolidayCard3 from '../../assets/Images/Holiday-3.png'
import HolidayCard4 from '../../assets/Images/Holiday-4.png'
// Import Swiper styles
import 'swiper/swiper-bundle.css'

import 'swiper/css/pagination'

const modules = [Pagination, Navigation]
const HoliDays = [
  {
    id: 1,
    title: 'Azad Kashmir, India',
    description:
      'Azad Kashmir borders the Pakistani provinces of Punjab and Khyber Pakhtunkhwa to the south.',
    src: HolidayCard1,
    rating: 5,
    reviews: 120,
  },
  {
    id: 2,
    title: 'Bangkok, Thailand',
    description:
      'Bangkok is renowned for its vibrant street life, rich cultural heritage, and majestic temples.',
    src: HolidayCard2,
    rating: 5,
    reviews: 120,
  },
  {
    id: 3,
    title: 'Dubai',
    description:
      'Dubai is the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate.',
    src: HolidayCard3,
    rating: 5,
    reviews: 120,
  },
  {
    id: 4,
    title: 'Singapore',
    description:
      'Singapore is a unitary parliamentary republic with a Westminster system of unicameral parliamentary.',
    src: HolidayCard4,
    rating: 5,
    reviews: 120,
  },
]
</script>
<template>
  <section class="py-4 md:py-16 text-[#545454]">
    <div class="mx-auto px-4 w-11.5/12 md:w-10/12">
      <h2 class="text-start text-3xl font-bold font-sans mb-4">
        Our Holiday Packages <span>😊</span>
      </h2>
      <p class="text-start text-[#5F5F5F] font-sans mb-8 w-[712px]">
        Jicsom Travel is a dynamic & customer-focused travel agency that offers a wide range of
        travel services, including flight, hotel, Visa, Car Rent, vacation packages, & personalized
        travel itineraries.
      </p>
    
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
          <swiper-slide
            v-for="Holiday in HoliDays"
            :key="Holiday.id"
            class="bg-white min-w-[160px] md:min-w-[250px] rounded-md hover:shadow-lg transition-shadow"
          >
            <img
              :src="Holiday.src"
              :alt="Holiday.title"
              class="w-full h-48 object-cover rounded-t-lg"
            />
            <div class="p-4">
              <h3 class="text-lg font-semibold text-[#545454]">{{ Holiday.title }}</h3>
              <p class="text-sm text-[#5F5F5F] mb-3">{{ Holiday.description }}</p>
              <div class="flex items-center text-yellow-500">
                <span class="text-lg pi pi-star-fill"></span>
                <span class="text-sm ml-1 text-gray-700"
                  >{{ Holiday.rating }} ({{ Holiday.reviews }} Reviews)</span
                >
              </div>
            </div>
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
