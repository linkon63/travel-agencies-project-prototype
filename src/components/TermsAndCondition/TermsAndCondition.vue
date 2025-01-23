<script setup>
import Contact from '../Shared/component/Contact.vue';
import bannerbg from "@/assets/Images/bannerbg.png"
</script>

<template>

<section class="">

  <section class=" text-center text-white" :style="{ backgroundImage: `url(${bannerbg})`}">
      <div class="bg-markcolor opacity-70 py-28">
        <h1 class="text-h2 font-semibold">Umrah Packages Detailssa</h1>
        <div class="text-title font-thin space-x-5">
          <a href=""><i class="pi pi-home"></i> Home</a>
          <a href=""><i class="pi pi-angle-right"></i> Umrah Packages Details</a>
        </div>
      </div>
    </section>

<section class="py-4 lg:mx-60 lg:px-20 font-poppins">
        <span class="font-bold text-4xl text-textheader">Terms and Conditions</span>
        <p class="py-2 text-xl text-textpera">Welcome to Jicson Travel! By using our services, you agree to the following terms and conditions. These terms are meant to outline the services we offer and your rights and responsibilities when booking with us. Please read them carefully before proceeding with any bookings.</p>
</section>

<section class=" px-6 mx-0 md:mx-12 lg:mx-60 lg:px-20 lg:static">
        <span class="mb-2 text-3xl font-medium text-textheader">Our Services</span>
        <p class="py-2 text-poppins font-normal text-xl text-textpera">We offer a wide range of travel services including flight bookings, hotel reservations, vacation packages, car rentals, tours, and other related services. All our services are provided through third-party suppliers, which means that the specific terms and conditions of these suppliers will apply.</p>
</section>

<section class="py-2 px-6 mx-0 md:mx-12 lg:mx-60 lg:px-20 lg:static">
        <span class="mb-2 text-3xl font-medium text-textheader">How to Book</span>
        <p class="py-2 text-poppins text-xl text-textpera">To book a service, you can contact us via phone, email, or our website. Once we confirm your booking, you are responsible for ensuring all details are correct. If there are any errors, please notify us immediately.</p>
</section>

<section class="py-2 px-6 mx-0 md:mx-12 lg:mx-60 lg:px-20 lg:static">
        <span class="mb-2 text-3xl font-medium text-textheader">Pricing and Payments</span>
        <p class="py-2 text-poppins text-xl text-textpera">Prices are subject to change without notice, and may vary depending on the supplier and availability. Payment for your booking must be made in full before we can confirm any reservations, unless otherwise stated. We accept payments by credit card, debit card, bank transfer.</p>
</section>

<section class="py-2 px-6 mx-0 md:mx-12 lg:mx-60 lg:px-20 lg:static">
        <span class="mb-2 text-3xl font-medium text-textheader">Cancellations and Refunds</span>
        <p class="py-2 text-poppins text-xl text-textpera">If you wish to cancel or make changes to your booking, please inform us as soon as possible. Cancellation policies vary depending on the service and supplier, and may include cancellation fees. We will inform you of any applicable fees before you confirm the cancellation.</p>
</section>

<section class="py-2 px-6 mx-0 md:mx-12 lg:mx-60 lg:px-20 lg:static">
         <p class="py-2 text-poppins-color text-16xl">Refunds, if applicable, will be processed in accordance with the supplier’s policy. Certain bookings, such as those for discounted services or special offers, may not be refundable.</p>
</section>

<section class="py-2 px-6 mx-0 md:mx-12 lg:mx-60 lg:px-20 lg:static">
        <span class="mb-2 text-3xl font-medium text-textheader">Travel Insurance</span>
        <p class="py-2 text-poppins text-xl text-textpera">We recommend that all our clients purchase travel insurance to protect against unexpected events, such as cancellations, illness, or lost luggage. Insurance is not included in our services, and it is your responsibility to arrange for coverage.</p>
</section>

<section class="py-2 px-6 mx-0 md:mx-12 lg:mx-60 lg:px-20 lg:static">
        <span class="mb-2 text-3xl font-medium text-textheader">Travel Documents</span>
        <p class="py-2 text-poppins text-xl text-textpera">It is your responsibility to ensure that you have all necessary travel documents, including passports, visas, and health certificates. We recommend checking your destination’s entry requirements well before your trip.</p>
</section>

<section class="py-2 px-6 mx-0 md:mx-12 lg:mx-60 lg:px-20 lg:static">
        <span class="mb-2 text-3xl font-medium text-textheader">Liability</span>
        <p class="py-2 text-poppins text-xl text-textpera">While we carefully select our service providers, Jicson Travel acts only as an agent between you and the supplier (e.g., airlines, hotels, tour operators). We are not liable for any loss, injury, or inconvenience caused by these third-party services. We also do not take responsibility for delays, cancellations, or issues that arise beyond our control, such as natural disasters or government restrictions.</p>
</section>

<section class="py-2 px-6 mx-0 md:mx-12 lg:mx-60 lg:px-20 lg:static">
        <span class="mb-2 text-3xl font-medium text-textheader">Privacy</span>
        <p class="py-2 text-poppins text-xl text-textpera">Your privacy is important to us. We collect only the personal information necessary to complete your bookings. We do not share your information with third parties unless required to do so for booking purposes, and we comply with all applicable data protection laws.</p>
</section>

</section>
<Contact/>

 </template>
