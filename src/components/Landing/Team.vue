<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import teamCard1 from '../../assets/Images/team-card-1.png'
import teamCard2 from '../../assets/Images/team-card-2.png'
import teamCard3 from '../../assets/Images/team-card-3.png'
import teamCard4 from '../../assets/Images/team-card-4.png'
const visas = [
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
    <div class="w-10/12 mx-auto">
      <div class="flex flex-col justify-end items-end">
      <!-- Title -->
      <h2 class="text-right text-3xl font-bold font-sans mb-4">Meet Our Team</h2>
      <p class="text-right text-[#5F5F5F] w-[712px]  align-right font-sans mb-8 ">
        Make your next trip unforgettable with jicson travels ! From business class to economy class
        flights on international trips or domestic.
      </p>
    </div>
      <div class="flex items-center">
        <!-- Left Arrow -->
        <button class="absolute left-10 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-200">
          <img src="../../assets/Images/left-icon.png" alt="Left Arrow" class="w-6 h-6" />
        </button>
        <!-- Visa Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full mx-auto gap-2 h-[435px]">
          <div v-for="visa in visas" :key="visa.id" class="rounded-md bg-white ">
            <img
              :src="visa.src"
              :alt="visa.title"
              class="w-full h-[277px] object-cover rounded-lg bg-[#D8ECFD]"
            />
            <div class="flex flex-col items-center justify-center">
              <h3 class="mt-4 text-lg font-bold">{{ visa.title }}</h3>
              <p class="text-sm text-[#5F5F5F] mb-3">{{ visa.description }}</p>
              <div class="flex items-center mt-2 gap-2">
                <font-awesome-icon :icon="['fab', 'facebook']" class="w-6" style="color: #1877f2" />
                <font-awesome-icon :icon="['fab', 'twitter']" class="w-6" />
                <font-awesome-icon :icon="['fab', 'instagram']" class="w-6" />
                <font-awesome-icon :icon="['fab', 'linkedin']" class="w-6" />
                <font-awesome-icon :icon="['fab', 'pinterest']" class="w-6" />
              </div>
            </div>
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
