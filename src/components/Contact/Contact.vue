
<script setup>

import ContactForm from '../About/ContactForm.vue';

</script>
<template>
  <section>
    <!-- contact header start -->
    <section class="bg-hero-pattern text-center text-white">
      <div class="bg-markcolor opacity-70 py-28">
        <h1 class="text-h2 font-semibold">Contact</h1>
        <div class="text-title font-thin space-x-5">
          <a href=""><i class="pi pi-home"></i> Home</a>
          <a href=""><i class="pi pi-angle-right"></i> Contact</a>
        </div>
      </div>
    </section>
    <!-- contact header end -->

    <section class="lg:p-32 bg-conbg">
      <ContactForm/>
    </section>
    <section>
      <iframe class="w-full h-96 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.308009912757!2d90.39860847592799!3d23.77204378794392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7193dbfcca7%3A0x495a7c57c50f61e3!2sMohakhali%20Bus%20Terminal!5e0!3m2!1sen!2sbd!4v1737049084788!5m2!1sen!2sbd"   style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  </section>
</template>

