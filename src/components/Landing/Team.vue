<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import teamCard1 from '../../assets/Images/team-card-1.png'
import teamCard2 from '../../assets/Images/team-card-2.png'
import teamCard3 from '../../assets/Images/team-card-3.png'
import teamCard4 from '../../assets/Images/team-card-4.png'

import 'swiper/css/pagination'

const modules = [Pagination, Navigation]
const teams = [
  {
    id: 1,
    title: 'Brooklyn Simmons',
    src: teamCard1,
    rating: 5,
    reviews: 120,
    description: 'Guide Manager',
  },
  {
    id: 2,
    title: 'Esther Howard',
    src: teamCard2,
    rating: 5,
    reviews: 120,
    description: 'Guide Manager',
  },
  {
    id: 3,
    title: 'Robert Fox',
    src: teamCard3,
    rating: 5,
    reviews: 120,
    description: 'Guide Manager',
  },
  {
    id: 4,
    title: 'Jacob Jones',
    src: teamCard4,
    rating: 5,
    reviews: 120,
    description: 'Guide Manager',
  },
]
</script>

<template>
  <section class="py-16 bg-[#F8F8F8] text-[#545454]">
    <div class="w-11/12 md:w-10/12 mx-auto">
      <div class="flex flex-col justify-end items-end">
        <!-- Title -->
        <h2 class="text-right text-3xl font-bold font-sans mb-4">Meet Our Team</h2>
        <p class="text-right text-[#5F5F5F] md:w-[712px] align-right font-sans mb-8">
          Make your next trip unforgettable with jicson travels ! From business class to economy
          class flights on international trips or domestic.
        </p>
      </div>

      <!-- team Cards -->
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
        class="mySwiper min-h-[250px] md:h-[435px]"
      >
        <swiper-slide
          v-for="team in teams"
          :key="team.id"
          class="rounded-md bg-white min-w-[160px] md:min-w-[250px]"
        >
          <img
            :src="team.src"
            :alt="team.title"
            class="w-full min-h-[126px]  md:h-[277px] object-cover rounded-lg bg-[#D8ECFD]"
          />
          <div class="flex flex-col items-center justify-center">
            <h3 class="mt-4 text-lg font-bold">{{ team.title }}</h3>
            <p class="text-sm text-[#5F5F5F] mb-3">{{ team.description }}</p>
            <div class="items-center mt-2 gap-2 hidden md:block">
              <font-awesome-icon :icon="['fab', 'facebook']" class="w-6" style="color: #1877f2" />
              <font-awesome-icon :icon="['fab', 'twitter']" class="w-6" />
              <font-awesome-icon :icon="['fab', 'instagram']" class="w-6" />
              <font-awesome-icon :icon="['fab', 'linkedin']" class="w-6" />
              <font-awesome-icon :icon="['fab', 'pinterest']" class="w-6" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style scoped>
.mySwiper {
  padding: 10px 0;
}
</style>
