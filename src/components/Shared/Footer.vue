<script setup>
import logo from '../../assets/Images/logo.png'
</script>

<template>
  <footer class="bg-white border-t border-formborder py-8 font-inter">
    <div class="container mx-auto px-4 lg:px-0 w-10/12">
      <!-- Footer Top Section -->
      <div class="grid md:grid-cols-5 gap-8">
        <!-- About Section -->
        <div>
          <img :src="logo" class="w-[118px] h-12" alt="" />
          <p class="text-textpera text-sm mt-4 leading-relaxed">
            Jicson Travel is a dynamic & customer-focused travel agency that offers a wide range of
            travel services, including flight, hotel, visa, car rent, vacation packages, &
            personalized travel itineraries.
          </p>
        </div>

        <!-- Explore Section -->
        <div>
          <h3 class="font-semibold text-textpera text-md mb-4">Explore</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-textpera text-sm hover:underline">About Us</a></li>
            <li>
              <a href="#" class="text-textpera text-sm hover:underline">Terms & Conditions</a>
            </li>
            <li><a href="#" class="text-textpera text-sm hover:underline">FAQs</a></li>
            <li><a href="#" class="text-textpera text-sm hover:underline">Contact Us</a></li>
          </ul>
        </div>

        <!-- Services Section -->
        <div>
          <h3 class="font-semibold text-textpera text-md mb-4">Services</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-textpera text-sm hover:underline">Work Visa</a></li>
            <li><a href="#" class="text-textpera text-sm hover:underline">Umrah Visa</a></li>
            <li><a href="#" class="text-textpera text-sm hover:underline">Blog</a></li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div>
          <h3 class="font-semibold text-textpera text-md mb-4">Head Office</h3>
          <address class="text-textpera text-sm leading-relaxed not-italic">
            H-79, 4th Floor, New Airport Road, Chairman Bari, Banani, Dhaka, Bangladesh, 1213
          </address>
          <a href="#" class="text-textpera text-sm flex items-center mt-2 hover:underline">
            <i class="pi pi-map-marker mr-2 text-blue"></i> View Map
          </a>
        </div>
        <!-- office contact -->
        <div>
          <h3 class="font-semibold text-textpera text-md mb-4">Office Contact</h3>
          <ul class="space-y-2">
          <li>
            <a href="#" class="text-textpera text-sm hover:underline"
              >Email: jicsontravels@gmail.com</a
            >
          </li>
          <li>
            <a href="#" class="text-textpera text-sm hover:underline">Phone: +880 1994-901050</a>
          </li>
          <li>
            <a href="#" class="text-textpera text-sm hover:underline">What’s App: Message Us</a>
          </li>
        </ul>
          <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="#"><i class="pi pi-facebook text-xl text-textpera hover:text-textheader"></i></a>
          <a href="#"><i class="pi pi-linkedin text-xl text-textpera hover:text-textheader"></i></a>
          <a href="#"><i class="pi pi-instagram text-xl text-textpera hover:text-textheader"></i></a>
          <a href="#"><i class="pi pi-twitter text-xl text-textpera hover:text-textheader"></i></a>
          <a href="#"><i class="pi pi-pinterest text-xl text-textpera hover:text-textheader"></i></a>
        </div>
        </div>
      </div>

      <!-- Footer Bottom Section -->
      <div
        class="border-t border-formborder mt-8 pt-6 text-center md:text-left flex flex-col md:flex-row md:justify-between items-center"
      >
        <div class="flex space-x-4 text-sm text-textpera">
          <a href="#" class="hover:underline">Support Center</a>
          <a href="#" class="hover:underline">Privacy</a>
        </div>
        <p class="text-textpera text-sm mt-4 md:mt-0">© 2024. Jicson Travels. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
