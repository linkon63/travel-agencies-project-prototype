<script setup>
  import ContactForm from '../About/ContactForm.vue';
</script>

<template>
  <section>
     <!-- Photo Gallery header start -->
     <section class="bg-hero-pattern text-center text-white">
      <div class="bg-markcolor opacity-70 py-28">
        <h1 class="text-h3 md:text-h2 font-semibold">Our Photo Gallery</h1>
        <div class="md:text-title font-thin space-x-5">
          <a href=""><i class="pi pi-home"></i> Home</a>
          <a href=""><i class="pi pi-angle-right"></i> Our Photo Gallery</a>
        </div>
      </div>
    </section>
    <!--  Photo Gallery header end -->

<!-- Photo content start -->

    <section class="pb-10">
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 py-10 px-4 lg:px-40 lg:gap-4 2xl:px-60 2xl:py-20">
        <img src="../../assets//Photos-gallery-img/photog1.jpg" class="w-full h-48 md:h-80 2xl:h-96 object-cover rounded-lg" alt="">
        <img src="../../assets/Photos-gallery-img/photog2.jpg" class="w-full h-48 md:h-80 2xl:h-96 object-cover rounded-lg" alt="">
        <img src="../../assets/Photos-gallery-img/photog3.jpg" class="w-full h-48 md:h-80 2xl:h-96 object-cover rounded-lg" alt="">
        <img src="../../assets/Photos-gallery-img/photog4.jpg" class="w-full h-48 md:h-80 2xl:h-96 object-cover rounded-lg" alt="">
        <img src="../../assets/Photos-gallery-img/photog5.jpg" class="w-full h-48 md:h-80 2xl:h-96 object-cover rounded-lg" alt="">
        <img src="../../assets/Photos-gallery-img/photog6.jpg" class="w-full h-48 md:h-80 2xl:h-96 object-cover rounded-lg" alt="">
        <img src="../../assets/Photos-gallery-img/photog7.jpg" class="w-full h-48 md:h-80 2xl:h-96  object-cover rounded-lg hidden lg:block" alt="">
        <img src="../../assets/Photos-gallery-img/photog8.jpg" class="w-full h-48 md:h-80 2xl:h-96 object-cover rounded-lg hidden lg:block" alt="">
        <img src="../../assets/Photos-gallery-img/photog9.jpg" class="w-full h-48 md:h-80 2xl:h-96 object-cover rounded-lg hidden lg:block" alt="">
      </div>
      <div class="flex justify-center ">
        <button class="border border-primary1 text-primary1 px-6 py-2 rounded-md" >Load Details <i class="pi pi-arrow-up-right " style="font-size: 13px;"></i></button>
      </div>
    </section>

<!-- Photo content end -->

    <ContactForm/>


  </section>
</template>
