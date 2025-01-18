<script setup></script>

<template>
  <section class="bg-graybg px-5 lg:px-0 py-20 font-inter">
    <div class="grid md:grid-cols-2 container mx-auto gap-8 text-textheader w-10/12">
      <!-- Contact Details Section -->
      <div class="bg-white p-8 lg:py-20 lg:px-16 space-y-8 rounded-xl h-[450px] md:h-[596px]">
        <h1 class="text-3xl  lg:text-h3 font-bold text-textheader">
          Contact for Jicson Travels
        </h1>

        <div class="space-y-6">
          <!-- Office Address -->
          <div class="flex items-start space-x-4">
            <i class="pi pi-map-marker text-textheader mt-1 text-xl"></i>
            <div>
              <h2 class=" font-semibold text-lg">Our Office Address</h2>
              <p class="text-conlighetext text-sm md:text-base font-medium">
                H- 79, 4th Floor, New Airport Road, Chairman Bari, Banani, Dhaka, Bangladesh, 1213
              </p>
            </div>
          </div>

          <!-- Call -->
          <div class="flex items-start space-x-4">
            <i class="pi pi-phone text-textheader mt-1 text-xl"></i>
            <div>
              <h2 class="font-semibold text-lg">Call</h2>
              <p class="text-conlighetext text-sm md:text-base font-medium">+880 1994-901050</p>
            </div>
          </div>

          <!-- Email -->
          <div class="flex items-start space-x-4">
            <i class="pi pi-envelope text-textheader mt-1 text-xl"></i>
            <div>
              <h2 class=" font-semibold text-lg">E-mail</h2>
              <p class="text-conlighetext text-sm md:text-base font-medium">jicsontravels@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <!-- User Details Form -->
      <div class="bg-white p-8 lg:p-12 space-y-8 rounded-xl h-[596px]">
        <h1 class="text-textheader text-h4 font-semibold">Your Details</h1>

        <form class="space-y-6">
          <!-- Name and Email -->
          <div class="grid gap-4 lg:grid-cols-2">
            <div>
              <label for="name" class="block text-textheader text-sm font-medium">Name*</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                class="w-full mt-1 border border-formborder rounded-lg px-4 py-2 focus:ring-textheader focus:border-textheader"
                required
              />
            </div>
            <div>
              <label for="email" class="block text-textheader text-sm font-medium">Email*</label>
              <input
                id="email"
                type="email"
                placeholder="youremail@company.com"
                class="w-full mt-1 border border-formborder rounded-lg px-4 py-2 focus:ring-textheader focus:border-textheader"
                required
              />
            </div>
          </div>

          <!-- Contact Number -->
          <div>
            <label for="contact" class="block text-textheader text-sm font-medium">Contact Number*</label>
            <div class="flex mt-1">
              <select
                class="border border-formborder rounded-l-lg px-4 py-2 focus:ring-textheader focus:border-textheader"
              >
                <option value="us">US</option>
                <option value="can">CAN</option>
                <option value="bd">BD</option>
              </select>
              <input
                id="contact"
                type="text"
                placeholder="+1(555) 000-0000"
                class="w-full border border-l-0 border-formborder rounded-r-lg px-4 py-2 focus:ring-textheader focus:border-textheader"
                required
              />
            </div>
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-textheader text-sm font-medium">Your Message (optional)</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              class="w-full mt-1 border border-formborder rounded-lg px-4 py-2 focus:ring-textheader focus:border-textheader resize-none"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-[122px] bg-[#178EEF] text-white text-lg py-1 font-inter rounded-md text-center font-normal hover:bg-textheader-dark transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
