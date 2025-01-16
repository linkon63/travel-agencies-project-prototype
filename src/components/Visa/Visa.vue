<script setup>
import { reactive } from 'vue';

import Slider from 'primevue/slider';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

import Checkbox from 'primevue/checkbox';


import ContactForm from '../About/ContactForm.vue';

const states = reactive({
  data:[
    {
      url:'/src/assets/Visa-img/img1.jpg',
      title:'Saudi Arabia  5 Star Hotel Work Visa',
      pera:'A work visa is usually required to work in Saudi Arabia, which is issued according to the rules and procedures set by the Saudi Arabian government.',
      list:[
        "Work Visa Process",
        "Work Permit",
        "Work Conditions and Benefits"
      ]
    },
    {
      url:'/src/assets/Visa-img/img2.jpg',
      title:'Economy Umrah Package-Transit flight',
      list:[
        "13 Night 14 Days",
        "Visa Air ticket, transport, Ziyarah & Guide",
        "Accommodation in Makkah & Madinah",
        "Travel Date: 00/00/00 and 00/00/00"
      ]
    },
    {
      url:'/src/assets/Visa-img/img3.jpg',
      title:'Canada Work Visa',
      pera:'A Canada Work Visa (also referred to as a work permit) allows foreign nationals to work in Canada for a specific employer, job, or time period.',
      list:[
        "Work Visa Process",
        "Work Permit",
        "Work Conditions and Benefits"
      ]
    },
    {
      url:'/src/assets/Visa-img/img4.jpg',
      title:'Family Umrah Package',
      list:[
        "13 Night 14 Days",
        "Visa Air ticket, transport, Ziyarah & Guide",
        "Accommodation in Makkah & Madinah",
        "Travel Date: 00/00/00 and 00/00/00"
      ]
    },
  ]
})

</script>
<template>

  <section class="mb-20">
    <!-- Visa header start -->
    <section class="bg-hero-pattern text-center text-white">
      <div class="bg-markcolor opacity-70 py-28">
        <h1 class="text-h2 font-semibold">Visa</h1>
        <div class="text-title font-thin space-x-5">
          <a href=""><i class="pi pi-home"></i> Home</a>
          <a href=""><i class="pi pi-angle-right"></i> Visa</a>
        </div>
      </div>
    </section>
    <!-- Visa header end -->

    <section>
      <section class="container mx-auto my-10  ">
        <div class="grid grid-cols-4 gap-4">
          <!-- left side start -->
          <div class="space-y-12">
            <div class="px-12">
             <div class="border">
              <div class="bg-conbg text-center py-2">
                <h1 class="text-xl text-textheader font-semibold">Filter By Category</h1>
              </div>
              <Accordion value="0">
                <AccordionPanel value="0">
                    <AccordionHeader ><p class="text-primary1">Visa</p></AccordionHeader>
                    <AccordionContent>
                      <div class="gird ms-3 text-textheader font-semibold">
                        <div class="flex justify-start items-center  gap-x-3">
                          <Checkbox class="text-primary1" v-model="checked" binary /> Work Visa
                        </div>
                        <div class="flex justify-start items-center gap-x-3">
                          <Checkbox v-model="checked" binary /> Umrah Visa
                        </div>

                      </div>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
             </div>
            </div>
            <div class="px-12">
              <div class="border">
               <div class="bg-conbg text-center py-2">
                 <h1 class="text-xl text-textheader font-semibold">Country</h1>
               </div>
               <div class="gird ms-3 p-4 space-y-3 text-textheader font-semibold">
                <div class="flex justify-start items-center  gap-x-3">
                  <Checkbox class="text-primary1" v-model="checked" binary /> Saudia Arabia
                </div>
                <div class="flex justify-start items-center gap-x-3">
                  <Checkbox v-model="checked" binary /> Malaysia
                </div>
                <div class="flex justify-start items-center gap-x-3">
                  <Checkbox v-model="checked" binary /> Dubai
                </div>
                <div class="flex justify-start items-center gap-x-3">
                  <Checkbox v-model="checked" binary /> Qatar
                </div>
                <div class="flex justify-start items-center gap-x-3 ">
                  <Checkbox v-model="checked" binary /> Canada
                </div>

              </div>
              </div>
             </div>
             <div class="px-12">
              <div class="border">
               <div class="bg-conbg text-center py-2">
                 <h1 class="text-xl text-textheader font-semibold">Prices</h1>
               </div>
               <div class="gird  px-4 py-8 space-y-5 text-textheader ">
                <div class="flex justify-between items-center text-[#4A5D85]">
                  <p>TK. 1200</p>
                  <p>TK. 100000</p>
                </div>
                <div class="flex justify-center">
                  <Slider v-model="value"  range class="w-60"  />
                </div>
                <div class="flex justify-between items-center">
                  <input type="number" class="w-24 py-1">
                  <h1>To</h1>
                  <input type="number" class="w-24 py-1 ">
                </div>
                <div class="flex justify-center items-center">
                  <button class="border border-primary1 text-primary1 rounded-md px-12 py-2 font-bold">Search</button>
                </div>
              </div>
              </div>
             </div>
             <div class="px-12">
              <div class="border">
               <div class="bg-conbg text-center py-2">
                 <h1 class="text-xl text-textheader font-semibold">Prices</h1>
               </div>
               <div class="gird  p-4 space-y-3 text-textheader font-semibold">
                <div class="flex justify-start items-center  gap-x-3">
                  <Checkbox class="text-primary1" v-model="checked" binary /> 5 Star
                </div>
                <div class="flex justify-start items-center gap-x-3">
                  <Checkbox v-model="checked" binary /> 4 Star
                </div>
                <div class="flex justify-start items-center gap-x-3">
                  <Checkbox v-model="checked" binary /> 3 Star
                </div>
                <div class="flex justify-start items-center gap-x-3">
                  <Checkbox v-model="checked" binary /> 2 Star
                </div>
                <div class="flex justify-start items-center gap-x-3 ">
                  <Checkbox v-model="checked" binary /> 1 Star
                </div>

              </div>
              </div>
             </div>
          </div>
            <!-- left side end -->

          <!-- right side start -->
          <div class="col-span-3">
            <div class="gird space-y-7">
              <div class="bg-conbg lg:px-3 lg:py-2 rounded-md">
                <h1 class="text-textpera">32 Visa found</h1>
              </div>
              <!-- Card & details start -->

              <div v-for="state in states.data" :key="state" class="grid grid-cols-3 p-4 bg-conbg rounded-lg place-items-start lg:gap-x-8">
                <div class="">
                  <img class="rounded-lg h-[270px] object-cover" :src="state.url" alt="">
                </div>
                <div class="col-span-2 space-y-1">
                  <h1 class="text-[29px] font-semibold text-textheader">{{ state.title }}</h1>
                  <p class=" text-textheader">{{state.pera}}</p>

                  <ul v-for="list in state.list" :key="list" class="list-disc ps-4  text-textheader text-subtitle">
                    <li>{{list}}</li>

                  </ul>

                  <p class="text-textheader text-subtitle font-bold">   <i class="pi pi-star-fill text-yellow-300 lg:text-[20px]"></i> 5 (120 Reviews)</p>

                  <button class="text-[13px] md:text-[16px] md:px-3 lg:px-4 lg:py-2 md:rounded-md border border-primary1 text-primary1">View Details <i class="pi pi-arrow-up-right " style="font-size: 13px;"></i></button>

                </div>
              </div>
              <!-- Card & details end -->

              <div class="flex justify-center py-8">
                <button class="border border-primary1 text-primary1 px-6 py-2 rounded-md" >Load Details <i class="pi pi-arrow-up-right " style="font-size: 13px;"></i></button>
              </div>

            </div>
          </div>
          <!-- right side end -->
        </div>
      </section>
    </section>

    <ContactForm/>


  </section>

</template>

<style scoped>

::v-deep(.p-slider-range) {
  background-color: #555755 !important;
}


</style>
