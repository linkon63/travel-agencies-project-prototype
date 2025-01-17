<script setup>
import blogCard1 from '@/assets/Images/blog-card-1.png'
import blogCard2 from '@/assets/Images/blog-card-2.png'
import blogCard3 from '@/assets/Images/blog-card-3.png'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/vue'

const modules = [Pagination, Navigation]

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

    description:
      'Azad Kashmir borders the Pakistani provinces of Punjab and Khyber Pakhtunkhwa to the south...',
    image: blogCard2,
    date: '7th December, 2024',
  },
  {
    category: 'Traveler',
    title: 'A Journey Through Earth’s Most Scenic Landscapes',

    description:
      'Azad Kashmir borders the Pakistani provinces of Punjab and Khyber Pakhtunkhwa to the south...',
    image: blogCard3,
    date: '7th December, 2024',
  },
]
</script>
<template>
  <section class="py-16 bg-[#F8F8F8] text-textheader">
    <div class="w-11/12 md:w-10/12 mx-auto">
      <!-- Title -->

      <h2 class="text-3xl font-bold text-textheader">Our Blog</h2>
      <div class="flex mb-4 justify-end">
        <button
          class="px-4 py-2 text-sm font-normal text-blue border border-blue rounded hover:bg-lightblue"
        >
          View All Blog <i class="pi pi-arrow-up-right px-1"></i>
        </button>
      </div>
      <!-- blog card start -->

      <!-- Scrollable Cards -->
      <swiper
        :slidesPerView="3"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }"
        class="mySwiper"
      >
        <swiper-slide
          v-for="(card, index) in travelCards"
          :key="index"
          class="flex-shrink-0 bg-white rounded-xl p-4 space-y-3 h-auto max-w-[280px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] shadow-lg"
        >
          <h1
            class="px-4 py-1 text-blue bg-lightblue rounded-full inline-block text-sm md:text-base"
          >
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
          <div
            class="flex flex-col md:flex-row md:items-center justify-between space-y-3 md:space-y-0"
          >
            <p class="text-textheader text-[13px] md:text-[16px]">
              <i class="pi pi-calendar" style="color: #178eef"></i> {{ card.date }}
            </p>
            <button
              class="text-[13px] md:text-[16px] px-3 py-1 font-poppins rounded-md border border-blue text-blue transition-colors hover:bg-blue hover:text-white"
            >
              View Details <i class="pi pi-arrow-up-right" style="font-size: 13px"></i>
            </button>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
