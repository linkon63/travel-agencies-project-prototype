<script setup>
import leftIcon from '@/assets/Images/left-icon.png'
import rightIcon from '@/assets/Images/right-icon.png'
import quoteImage from '@/assets/Images/quote.png'
import testimonialsCard1 from '@/assets/Images/testimonial-card-1.png'
import testimonialsCard2 from '@/assets/Images/testimonial-card-2.png'
import testimonialsCard3 from '@/assets/Images/testimonial-card-3.png'

const testimonials = [
  {
    name: 'Md Dulal Hossain',
    profession: 'UX Designer at Techfes',
    rating: 5,
    image: testimonialsCard1,
    quoteImage: quoteImage,
    description:
      'I was on a tight schedule for my trip to the UAE, and Jicson Travel made sure my visa was approved within a few days. Their team was efficient and kept me informed at every step.',
      smdescription:'Jicson Travel is dynamic & customer-focused travel agency that offers a wide range of travel services, including flight...'
  },
  {
    name: 'Marvin McKinney',
    profession: 'Dog Trainer',
    rating: 5,
    image: testimonialsCard2,
    quoteImage: quoteImage,
    description:
      'I’ve traveled a lot, but this was the first time I worked with a travel agency. Jicson Travel’s expert advice and attention to detail ensured I had an unforgettable experience.',
      smdescription:'Jicson Travel is dynamic & customer-focused travel agency that offers a wide range of travel services, including flight...'
  },
  {
    name: 'Darrell Steward',
    profession: 'Web Designer',
    rating: 5,
    image: testimonialsCard3,
    quoteImage: quoteImage,
    description:
      'The visa application process for Albania can be confusing, but Jicson Travel took care of everything. They provided clear instructions, answered all my questions, and kept me updated.',
      smdescription:'Jicson Travel is dynamic & customer-focused travel agency that offers a wide range of travel services, including flight...'
  },
]
</script>

<template>
  <section class="bg-white px-3 md:p-12 md:py-4 lg:py-8 lg:px-2 w-11/12 mx-auto">

    <!-- Section Title -->
    <div class="text-start font-sans py-12">
      <h1 class="text-[#545454] text-3xl w-[328px] md:w-full font-bold leading-tight">

            What Our Customer Say About Us <span class="inline-block">😊</span>
          </h1>
          <p class="mt-2 text-[#5F5F5F] md:text-lg w-[328px] md:w-[955px]">
            Jicsom Travel is a dynamic & customer-focused travel agency that offers a wide range of
            travel services, including flight, hotel, Visa, Car Rent, vacation packages, &
            personalized travel itineraries.
          </p>
        </div>
        <div class="flex items-center relative">
          <!-- Left Arrow -->
          <button
            class="absolute -left-10 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-200 hidden md:block"
          >
            <img :src="leftIcon" alt="Left Arrow" class="w-6 h-6" />
          </button>
        <!-- Testimonials Cards -->
        <div class="overflow-x-auto flex gap-4 px-2 items-center ">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="flex bg-white shadow-lg min-w-[287px] md:min-w-[469px] h-[228px] md:h-[312px] rounded-lg"
          >
            <div class="relative bg-[#178EEF] w-full flex justify-center items-center p-6">
              <img
                class="absolute w-14 h-14 md:w-24 md:h-24 rounded-full ring-4 ring-white top-[40px] left-[65px] md:left-[50px]"
                :src="testimonial.image"
                alt="Customer Image"
              />
              <img
                class="w-8 h-6 md:w-16 md:h-10 absolute bottom-12"
                :src="testimonial.quoteImage"
                alt="Quote Icon"
              />
            </div>
            <div class="p- pl-8 md:pl-14 flex flex-col col-span-9 items-start">
              <h2 class="text-[#545454] text-lg md:text-2xl font-semibold font-sans">
                {{ testimonial.name }}
              </h2>
              <p class="text-[#545454] text-lg font-normal font-sans text-start">
                {{ testimonial.profession }}
              </p>
              <div class="flex justify-start space-x-1 md:mt-4">
                <i
                  v-for="star in testimonial.rating"
                  :key="star"
                  class="pi pi-star-fill text-yellow-400 text-lg text-start"
                ></i>
              </div>
              <p class="text-[#5F5F5F] text-xs md:text-sm font-normal md:mt-4 text-start block md:hidden">
                {{ testimonial.smdescription }}
              </p>
              <p class="text-[#5F5F5F] text-xs md:text-sm font-normal md:mt-4 text-start hidden md:block">
                {{ testimonial.description}}
              </p>
              <button
                class="text-[#178EEF] font-normal font-sans text-sm text-center mt-4 transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <!-- Right Arrow -->
        <button
          class="absolute -right-10 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-200 hidden md:block"
        >
          <img :src="rightIcon" alt="Right Arrow" class="w-6 h-6" />
        </button>
      </div>
  </section>
</template>

<style>
/* Add custom styles here if necessary */
</style>
