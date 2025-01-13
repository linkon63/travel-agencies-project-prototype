<template>
  <section class="bg-conbg xs:px-5 lg:px-0 py-20">
    <div class="grid lg:grid-cols-2 container mx-auto xs:gap-y-5 lg:gap-4">
      <div class="bg-white xs:px-4 xs:space-y-2 xs:py-8 lg:py-20 lg:px-24 grid rounded-xl">
        <h1 class="text-textheader xs:text-h4 lg:text-h3 font-semibold">
          Contact For Jicson Travels
        </h1>

        <div
          class="bg-white xs:px-4 xs:space-y-2 xs:py-8 md:px-10 lg:px-0 xl:py-20 xl:px-2 grid rounded-xl"
        >
          <h1 class="text-textheader xs:text-h4 md:text-h3 font-semibold lg:text-h4">
            Contact For Jicson Travels
          </h1>

          <div class="flex justify-start items-start space-x-4">
            <div>
              <i class="pi pi-map-marker mt-3"></i>
            </div>
            <div>
              <h1 class="text-textheader md:text-h4 font-semibold">Our Office Address</h1>
              <p class="text-textc xs:text-[12px] md:text-[16px] font-semibold">
                H- 79, 4th Floor, New Airport Road, Chairman Bari, Banani, Dhaka, Bangladesh, 1213
              </p>
            </div>
          </div>
          <div class="flex justify-start items-start space-x-4">
            <div>
              <!-- <i class="pi pi-headphones mt-3 "></i> -->
              <svg
                class="w-[20px] h-[20px] mt-2 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 class="text-textheader md:text-h4 font-semibold">Call</h1>
              <p class="text-textc xs:text-[12px] md:text-[16px] font-semibold">
                +880 1994-901050
              </p>
            </div>
          </div>
          <div class="flex justify-start items-start space-x-4">
            <div>
              <i class="pi pi-envelope mt-3"></i>
            </div>
            <div>
              <h1 class="text-textheader md:text-h4 font-semibold">E-mail</h1>
              <p class="text-textc xs:text-[12px] md:text-[16px] font-semibold">
                jicsontravels@gmail.com
              </p>
            </div>
          </div>
        </div>


      </div>
      <div class="bg-white xs:px-3 xs:py-8 lg:p-12 grid gap-y-6 rounded-xl">
        <h1 class="text-textheader text-h4 font-semibold">Your Details</h1>

        <div class="grid xs:gap-y-4 lg:gap-y-0 lg:grid-cols-2 gap-x-5">
          <div class="">
            <label for="name" class="text-textheader text-xl">Name*</label> <br />
            <input
              class="w-full border-[#D9D9D9] rounded-lg"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div class="">
            <label for="email" class="text-textheader text-xl">Email*</label> <br />
            <input
              type="email"
              class="w-full border-[#D9D9D9] rounded-lg"
              placeholder="youremail@company.com"
            />
          </div>
        </div>
        <div>
          <label for="contact" class="text-textheader text-xl">Contact Number*</label>
          <div class="flex">
            <select name="" class="border-[#D9D9D9] text-textheader rounded-s-lg">
              <option value="">us</option>
              <option value="">can</option>
              <option value="">bd</option>
            </select>
            <input
              type="number"
              id="contact"
              placeholder="+1(555) 000-0000"
              class="w-full border-[#D9D9D9] rounded-e-lg text-[#D9D9D9]"
            />
          </div>
        </div>
        <div>
          <label for="mgs" class="text-textheader text-xl">Your Message (optional)</label>
          <br />
          <textarea
            rows="5"
            id="mgs"
            class="w-full resize-none border-[#D9D9D9] rounded-lg text-[#D9D9D9]"
            placeholder="Writing the Message"
          ></textarea>

          <button class="bg-primary1 py-2 px-6 text-white rounded-md mt-5">Submit</button>
        </div>
      </div>
    </div>
  </section>

</template>
