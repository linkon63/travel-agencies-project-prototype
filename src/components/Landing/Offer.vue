<script setup>
import offerBg from '@/assets/Images/Offer-cardBg.png'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import card1 from '../../assets/Images/Offer-card-1.png'
import card2 from '../../assets/Images/Offer-card-2.png'
import card3 from '../../assets/Images/Offer-card-3.png'
import Service from './Service.vue' /* PartiallyEnd: #3632/scriptSetup.vue */

const modules = [Pagination, Navigation]

const cards = [
  {
    id: 1,
    src: card1,
    alt: 'Offer Card 1',
  },
  {
    id: 2,
    src: card2,
    alt: 'Offer Card 2',
  },
  {
    id: 3,
    src: card3,
    alt: 'Offer Card 3',
  },
]
</script>

<template>
  <section class="pt-12 inset-0 z-0 font-poppins" :style="{ backgroundImage: `url(${offerBg})` }">
    <div class="mx-auto px-4 w-11/12 z-20">
      <!-- Title and Description -->
      <div class="text-start mb-8">
        <h2 class="text-3xl font-bold text-[32px] text-textheader font-poppins mb-2">
          Exclusive Offers <span>🤗</span>
        </h2>
        <p class="text-textpera font-normal font-poppins text-base leading-6">
          Jicson Travel is a dynamic & customer-focused travel agency that offers a wide range of
          travel services, including flight, hotel, visa, car rent, vacation packages, &
          personalized travel itineraries.
        </p>
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
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }"
        class="mySwiper"
      >
        <swiper-slide
          v-for="card in cards"
          :key="card.id"
          class="min-w-[280px] md:min-w-[300px] h-[220px] rounded-sm shadow-md bg-white"
        >
          <img :src="card.src" :alt="card.alt" class="h-full w-full object-cover rounded-sm" />
        </swiper-slide>
      </swiper>
    </div>
    <Service />
  </section>
</template>
<style scoped>
.mySwiper {
  padding: 20px 0;
}
</style>
