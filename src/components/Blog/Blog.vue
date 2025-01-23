<script setup>
import Contact from '../Shared/component/Contact.vue'
import bannerbg from "@/assets/Images/bannerbg.png"

const cards = [
  {
    category: 'Traveler',
    title: 'A Journey Through Earth’s Most Scenic Landscapes',
    description:
      'Azad Kashmir borders the Pakistani provinces of Punjab and Khyber Pakhtunkhwa to the south...',
    image:
      'https://images.unsplash.com/photo-1560853960-d776c82ffc92?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '7th December, 2024',
  },
  {
    category: 'Traveler',
    title: 'A Journey Through Earth’s Most Scenic Landscapes',
    description:
      'Azad Kashmir borders the Pakistani provinces of Punjab and Khyber Pakhtunkhwa to the south...',
    image:
      'https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '7th December, 2024',
  },
  {
    category: 'Traveler',
    title: 'A Journey Through Earth’s Most Scenic Landscapes',
    description:
      'Azad Kashmir borders the Pakistani provinces of Punjab and Khyber Pakhtunkhwa to the south...',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '7th December, 2024',
  },
  {
    category: 'Traveler',
    title: 'A Journey Through Earth’s Most Scenic Landscapes',
    description:
      'Azad Kashmir borders the Pakistani provinces of Punjab and Khyber Pakhtunkhwa to the south...',
    image:
      'https://images.unsplash.com/photo-1500301111609-42f1aa6df72a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '7th December, 2024',
  },
  {
    category: 'Traveler',
    title: 'A Journey Through Earth’s Most Scenic Landscapes',
    description:
      'Azad Kashmir borders the Pakistani provinces of Punjab and Khyber Pakhtunkhwa to the south...',
    image:
      'https://plus.unsplash.com/premium_photo-1683121054777-acb80e8c5dc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '7th December, 2024',
  },
  {
    category: 'Traveler',
    title: 'A Journey Through Earth’s Most Scenic Landscapes',
    description:
      'Azad Kashmir borders the Pakistani provinces of Punjab and Khyber Pakhtunkhwa to the south...',
    image:
      'https://plus.unsplash.com/premium_photo-1683141079772-acf46d5e2ebb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '7th December, 2024',
  },
]
</script>

<template>
  <section class="mb-20">
    <!-- Blog header start -->
    <section class="text-center text-white" :style="{ backgroundImage: `url(${bannerbg})`}">
      <div class="bg-markcolor opacity-70 py-28">
        <h1 class="text-h2 font-semibold">Our Blog</h1>
        <div class="text-title font-thin space-x-5">
          <a href=""><i class="pi pi-home"></i> Home</a>
          <a href=""><i class="pi pi-angle-right"></i> Our Blog</a>
        </div>
      </div>
    </section>
    <!-- Blog header end -->

    <!-- Blog Hero-section start -->

    <section class="bg-card1bg py-10 px-3">
      <div class="grid gap-4 grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="py-4 px-3 md:px-5 md:py-8 bg-white space-y-2 rounded-lg "
        >
          <h1 :class="`px-4 py-1 rounded-full inline-block text-highblue bg-secondarybg`">
            {{ card.category }}
          </h1>
          <h1 class="text-[17px] md:text-[20px] font-bold text-textheader">
            {{ card.title }}
          </h1>
          <p class="text-textheader text-[13px] md:text-[16px]">
            {{ card.description }}
          </p>
          <img
            :src="card.image"
            class="rounded-lg h-32 object-cover md:w-full md:h-44 xl:h-96"
            alt=""
          />
          <div class="grid space-y-1 md:flex justify-between md:pt-4 md:space-y-0">
            <p class="text-textheader text-[13px] md:text-[16px]">
              <i class="pi pi-calendar text-highblue"></i> {{ card.date }}
            </p>
            <router-link
              to="/blog-details"
              class="text-[13px] md:text-[16px] md:px-3 lg:px-2 md:rounded-md border border-highblue text-highblue mx-auto"
            >
              View Details <i class="pi pi-arrow-up-right" style="font-size: 13px"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <router-link
          to="/blog-details"
          class="border border-highblue text-highblue px-6 py-2 rounded-md"
        >
          Load Details <i class="pi pi-arrow-up-right" style="font-size: 13px"></i>
        </router-link>
      </div>
    </section>

    <!-- Blog Hero-section end -->

    <!-- Contact Form -->
    <Contact />
    <!-- Contact Form -->
  </section>
</template>
