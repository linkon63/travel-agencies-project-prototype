<script setup>
import galleryPhoto1 from '@/assets/Images/gallery-photo-1.png'
import galleryPhoto2 from '@/assets/Images/gallery-photo-2.png'
import galleryPhoto3 from '@/assets/Images/gallery-photo-3.png'
import galleryPhoto4 from '@/assets/Images/gallery-photo-small-1.png'
import galleryPhoto5 from '@/assets/Images/gallery-photo-small-2.png'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css/pagination'

const modules = [Pagination, Navigation]

const galleryImages = [
  {
    src: galleryPhoto1,
    alt: 'Poolside view with palm trees',
  },
  {
    src: galleryPhoto2,
    alt: 'Tropical resort area with palm trees',
  },
  {
    src: galleryPhoto3,
    alt: 'Beachside villa',
  },
  {
    src: galleryPhoto4,
    alt: 'Tourist overlooking the ocean cliffs',
  },
  {
    src: galleryPhoto5,
    alt: 'Traveler holding a map in a forest path',
  },
]
</script>

<template>
  <section class="bg-graybg pt-8 px-5 lg:px-10">
    <div class="w-11/12 md:w-11/12 mx-auto">
      <!-- Section Title -->
      <div class="flex justify-between items-center">
        <div class="font-poppins">
          <h2 class="text-2xl md:text-3xl font-bold text-textheader">Our Photo Gallery</h2>
          <p class="text-sm md:text-lg font-normal w-[260px] md:w-[712px] text-textpera">
            Make your next trip unforgettable with Jicson Travels! From business class to economy
            class flights on international trips or domestic.
          </p>
        </div>
        <button
          class="px-1 py-2 w-[130px] text-sm font-normal text-blue border border-blue rounded hover:bg-lightblue hidden md:block"
        >
          View All
          <i class="pi pi-arrow-up-right ml-2"></i>
        </button>
      </div>

      <!-- Gallery Grid -->
      <swiper
        :slidesPerView="1"
        :spaceBetween="5"
        :breakpoints="{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }"
        :navigation="true"
        :pagination="{ clickable: true }"
        :modules="[Navigation, Pagination]"
        class="mySwiper mt-8 min-h-[250px] md:min-h-[469px]"
      >
        <!-- First Large Image (Index 0) -->
        <swiper-slide class="relative flex-shrink-0 md:col-span-2 md:row-span-2 min-w-[260px]">
          <img
            :src="galleryImages[0].src"
            :alt="galleryImages[0].alt"
            class="w-full min-h-[190px] md:h-full object-cover rounded-lg"
          />
        </swiper-slide>
        <!-- Grid Layout for Smaller Images -->
        <swiper-slide class="relative flex-shrink-0 min-w-[260px] max-h-[469px]">
          <div class="grid grid-cols-2 grid-rows-2 gap-2 h-full">
            <div class="col-span-2 row-span-1">
              <img
                :src="galleryImages[1].src"
                :alt="galleryImages[1].alt"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                :src="galleryImages[3].src"
                :alt="galleryImages[3].alt"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                :src="galleryImages[4].src"
                :alt="galleryImages[4].alt"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="relative flex-shrink-0 md:col-span-2 md:row-span-2 min-w-[260px]">
          <img
            :src="galleryImages[2].src"
            :alt="galleryImages[2].alt"
            class="w-full min-h-[190px] md:h-full object-cover rounded-lg"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<style scoped>
.mySwiper {
  width: 100%;
  padding: 5px 0;
}
</style>
