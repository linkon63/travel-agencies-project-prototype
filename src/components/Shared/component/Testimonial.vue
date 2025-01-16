<script setup>
import quoteImage from '@/assets/Images/quote.png'
import testimonialsCard1 from '@/assets/Images/testimonial-card-1.png'
import testimonialsCard2 from '@/assets/Images/testimonial-card-2.png'
import testimonialsCard3 from '@/assets/Images/testimonial-card-3.png'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css/pagination'

const modules = [Pagination, Navigation]

const testimonials = [
  {
    name: 'Md Dulal Hossain',
    profession: 'UX Designer at Techfes',
    rating: 5,
    image: testimonialsCard1,
    quoteImage: quoteImage,
    description:
      'I was on a tight schedule for my trip to the UAE, and Jicson Travel made sure my visa was approved within a few days. Their team was efficient and kept me informed at every step.',
    smdescription:
      'Jicson Travel is dynamic & customer-focused travel agency that offers a wide range of travel services, including flight...',
  },
  {
    name: 'Marvin McKinney',
    profession: 'Dog Trainer',
    rating: 5,
    image: testimonialsCard2,
    quoteImage: quoteImage,
    description:
      'I’ve traveled a lot, but this was the first time I worked with a travel agency. Jicson Travel’s expert advice and attention to detail ensured I had an unforgettable experience.',
    smdescription:
      'Jicson Travel is dynamic & customer-focused travel agency that offers a wide range of travel services, including flight...',
  },
  {
    name: 'Darrell Steward',
    profession: 'Web Designer',
    rating: 5,
    image: testimonialsCard3,
    quoteImage: quoteImage,
    description:
      'The visa application process for Albania can be confusing, but Jicson Travel took care of everything. They provided clear instructions, answered all my questions, and kept me updated.',
    smdescription:
      'Jicson Travel is dynamic & customer-focused travel agency that offers a wide range of travel services, including flight...',
  },
]
</script>

<template>
  <section class="bg-white px-3 md:p-8 md:py-4 lg:py-4 lg:px-2 w-11/12 mx-auto">
    <!-- Section Title -->
    <div class="text-start font-sans py-12">
      <h1 class="text-[#545454] text-3xl w-[328px] md:w-full font-bold leading-tight">
        What Our Customer Say About Us <span class="inline-block">😊</span>
      </h1>
      <p class="mt-2 text-[#5F5F5F] md:text-lg w-[328px] md:w-[955px]">
        Jicsom Travel is a dynamic & customer-focused travel agency that offers a wide range of
        travel services, including flight, hotel, Visa, Car Rent, vacation packages, & personalized
        travel itineraries.
      </p>
    </div>

    <!-- Testimonials Cards -->
    <div class="flex items-center relative">
      <!-- Testimonials Cards -->
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1012: { slidesPerView: 2, spaceBetween: 20 },
          1100: { slidesPerView: 3, spaceBetween: 30 },
        }"
        class="mySwiper"
      >
        <swiper-slide
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="flex items-center justify-center h-auto"
        >
          <div
            class="flex bg-white shadow-lg rounded-lg overflow-hidden min-w-[287px] md:min-w-[380px] h-[228px] md:h-[312px]"
          >
            <!-- Left Section -->
            <div class="relative bg-[#178EEF] flex justify-center items-center w-1/6 md:w-2/6">
              <img
                class="absolute w-12 h-12 md:w-20 md:h-20 rounded-full ring-4 ring-white top-6 left-7 sm:10 md:left-16 md:top-8"
                :src="testimonial.image"
                alt="Customer Image"
              />
              <img
                class="w-8 h-6 md:w-12 md:h-8 absolute bottom-4 md:bottom-8"
                :src="testimonial.quoteImage"
                alt="Quote Icon"
              />
            </div>

            <!-- Right Section -->
            <div class="p-4 pl-8 flex flex-col w-4/6">
              <h2 class="text-[#545454] text-lg md:text-2xl font-semibold">
                {{ testimonial.name }}
              </h2>
              <p class="text-[#545454] text-sm md:text-lg font-normal">
                {{ testimonial.profession }}
              </p>
              <div class="flex mt-2 space-x-1">
                <i
                  v-for="star in testimonial.rating"
                  :key="star"
                  class="pi pi-star-fill text-yellow-400 text-lg"
                ></i>
              </div>
              <p class="text-[#5F5F5F] text-xs md:text-sm mt-4 block md:hidden">
                {{ testimonial.smdescription }}
              </p>
              <p class="text-[#5F5F5F] text-xs md:text-sm mt-4 hidden md:block">
                {{ testimonial.description }}
              </p>
              <button class="text-[#178EEF] font-medium text-sm md:text-base mt-4 hover:underline">
                Read More
              </button>
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
