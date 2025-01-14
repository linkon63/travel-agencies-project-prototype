<script setup>
import galleryPhoto1 from '@/assets/Images/gallery-photo-1.png'
import galleryPhoto2 from '@/assets/Images/gallery-photo-2.png'
import galleryPhoto3 from '@/assets/Images/gallery-photo-3.png'
import galleryPhoto4 from '@/assets/Images/gallery-photo-small-1.png'
import galleryPhoto5 from '@/assets/Images/gallery-photo-small-2.png'
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
  <section class="bg-[#EEEEF5] py-10 px-5 lg:px-20 ">
    <div class="container w-10/12 mx-auto">
      <!-- Section Title -->
      <div class="flex justify-between items-center">
        <div class="font-sans">
          <h2 class="text-2xl md:text-3xl font-bold text-[#545454]">Our Photo Gallery</h2>
          <p class=" text-sm md:text-lg font-normal text-[#5F5F5F]">
            Make your next trip unforgettable with Jicson Travels! From business class to economy
            class flights on international trips or domestic.
          </p>
        </div>
        <button
          class="px-2 py-2 w-[120px] text-sm font-normal text-[#178EEF] border border-[#178EEF] rounded hover:bg-blue-100"
        >
          View All
          <i class="pi pi-arrow-up-right ml-2"></i>
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-6 gap-4 mt-8">
    <!-- First Large Image (Index 0) -->
    <div class="col-span-6 md:col-span-2 row-span-2">
      <img
        :src="galleryImages[0].src"
        :alt="galleryImages[0].alt"
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
    <!-- Smaller Images (Index 1 and 2 below Index 0) -->
    <div class="col-span-3 md:col-span-2 row-span-1">
      <img
        :src="galleryImages[1].src"
        :alt="galleryImages[1].alt"
        class="w-full h-40 md:h-full object-cover rounded-lg"
      />
    </div>
    <div class="col-span-3 md:col-span-2 row-span-2">
      <img
        :src="galleryImages[2].src"
        :alt="galleryImages[2].alt"
        class="w-full h-40 md:h-full object-cover rounded-lg"
      />
    </div>
    <!-- Second Large Image (Index 4) -->
    <div class="col-span-6 md:col-span-1 row-span-1">
      <img
        :src="galleryImages[3].src"
        :alt="galleryImages[3].alt"
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div class="col-span-6 md:col-span-1 row-span-1">
      <img
        :src="galleryImages[4].src"
        :alt="galleryImages[4].alt"
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
    </div>
  </section>
</template>

