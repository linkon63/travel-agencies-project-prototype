<script setup>
import Contact from '../Shared/component/Contact.vue'
import Testimonial from '../Shared/component/Testimonial.vue' /* PartiallyEnd: #3632/scriptSetup.vue */
import bannerbg from "@/assets/Images/bannerbg.png"
</script>

<template>
  <section class="mb-20">
    <!-- About header start -->
    <section class=" text-center text-white" :style="{ backgroundImage: `url(${bannerbg})`}">
      <div class="bg-markcolor opacity-70 py-28">
        <h1 class="text-h2 font-semibold">About Us</h1>
        <div class="text-title font-thin space-x-5">
          <a href=""><i class="pi pi-home"></i> Home</a>
          <a href=""><i class="pi pi-angle-right"></i> About Us</a>
        </div>
      </div>
    </section>
    <!-- About header end -->

    <!-- 2nd part start -->
    <section class="mb-20">
      <div class="grid md:grid-cols-2 w-10/12 md:px-5 mx-auto mt-14 gap-x-5">
        <!-- text section start -->
        <div class="grid md:space-y-5 xs:px-2">
          <h1
            class="rd text-textpera xs:text-h4 xs:font-bold lg:text-h3 xl:text-h2 font-semibold leading-tight"
          >
            Enjoy Your Awesome Trip with Jicsom Travels
          </h1>
          <p class="text-textpera lg:text-[14px] md:hidden lg:block my-8 xl:text-xl">
            Jicson Travel is a dynamic and customer-focused travel agency that offers a wide range
            of travel services, including flight bookings, hotel booking, Visa, accommo- dations,
            vacation packages, and personalized travel itineraries. Our mission is to provide
            hassle-free travel experiences and make the process of planning and booking trips easy
            and enjoyable for our customers.
          </p>
          <div class="grid xs:gap-y-3 lg:pe-16 xl:pe-0 lg:gap-y-6">
            <div class="flex xs:space-x-2 lg:space-x-2 xl:space-x-3">
              <img
                class="xs:w-[30px] md:w-[50px] lg:w-[40px] object-contain xl:w-[50px]"
                src="../About/img/earthP.png"
                alt=""
              />
              <div class="grid">
                <h3 class="lg:text-xl xl:text-h3 font-bold text-textpera">Best Travel Pack</h3>
                <p class="xs:text-small lg:text-sm text-textpera xl:text-xl">
                  The best travel pack is durable, organized, and comfortable.
                </p>
              </div>
            </div>
            <div class="flex xs:space-x-1 lg:space-x-0 xl:space-x-2">
              <img
                class="xs:w-[30px] md:w-[50px] lg:w-[40px] object-contain xl:w-[60px]"
                src="../About/img/viwe.png"
                alt=""
              />
              <div class="grid">
                <h3 class="lg:text-xl xl:text-h3 font-bold text-textpera">Airline Best Flights</h3>
                <p class="xs:text-small lg:text-sm text-textpera xl:text-xl">
                  Top airline flights offer comfort and value.
                </p>
              </div>
            </div>
            <div class="flex xs:space-x-1 lg:space-x-0 xl:space-x-2">
              <img
                class="xs:w-[30px] md:w-[50px] lg:w-[40px] object-contain xl:w-[60px]"
                src="../About/img/earthL.png"
                alt=""
              />
              <div class="grid">
                <h3 class="lg:text-xl xl:text-h3 font-bold text-textpera">East Booking</h3>
                <p class="xs:text-small lg:text-sm text-textpera xl:text-xl">
                  Effortless East travel booking with convenience, reliability, and simplicity.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- text section start -->

        <!-- image section start -->
        <div class="grid mt-10 xs:px-3 md:relative">
          <div class="firstImg xs:relative lg:top-24 md:absolute xl:left-28">
            <img
              class="xs:w-52 md:w-80 lg:w-96 object-contain lg:rounded-3xl xl:w-full"
              src="./img/des.jpg"
              alt=""
            />
          </div>

          <div
            class="absolute lg:-bottom-8 md:-left-12 lg:-left-20 xl:-left-4 xl:bottom-16 2xl:bottom-0 secImg"
          >
            <img
              class="xs:w-32 md:w-52 lg:w-60 xl:w-80 lg:rounded-lg"
              src="../About/img/travel.jpg"
              alt=""
            />
          </div>
        </div>
        <!-- image section end -->
      </div>
    </section>
    <!-- 2nd part end -->

    <!-- 3rd part start -->
    <section class="bg-secondarybg">
      <div class="mx-auto xs:space-y-5 md:space-y-0 xs:py-10 md:py-0">
        <div
          class="grid grid-cols-2 place-content-center xs:space-y-5 lg:space-y-0 lg:flex lg:justify-between items-center text-number lg:px-14 lg:py-12"
        >
          <div class="grid place-items-center">
            <h1 class="xs:text-h3 md:text-h2 font-bold">5+</h1>
            <p class="xs:text-small md:text-xl">Years of Experience</p>
          </div>
          <div class="grid place-items-center">
            <h1 class="xs:text-h3 md:text-h2 font-bold">450+</h1>
            <p class="xs:text-small md:text-xl">Camping Destination</p>
          </div>
          <div class="grid place-items-center">
            <h1 class="xs:text-h3 md:text-h2 font-bold">2.5k+</h1>
            <p class="xs:text-small md:text-xl">Happy Customer</p>
          </div>
          <div class="grid place-items-center">
            <h1 class="xs:text-h3 md:text-h2 font-bold">48+</h1>
            <p class="xs:text-small md:text-xl">Country Served</p>
          </div>
          <div class="grid lg:block place-items-center">
            <h1 class="xs:text-h3 md:text-h2 font-bold">
              4.9 <i class="pi pi-star-fill xs:text-[25px] md:text-[35px]"></i>
            </h1>
            <p class="xs:text-small md:text-xl">Overall Rating</p>
          </div>
        </div>
        <div class="grid lg:hidden md:pb-10 text-number place-items-center">
          <h1 class="xs:text-h3 md:text-h2 font-bold">
            4.9 <i class="pi pi-star-fill xs:text-[20px]"></i>
          </h1>
          <p class="xs:text-small md:text-xl">Overall Rating</p>
        </div>
      </div>
    </section>
    <!-- 3rd part end -->

    <!-- 4th part start-->

    <section class="xl:my-20 bg-white">
      <div class="grid grid-cols-1 xl:grid-cols-2 xl:relative">
        <div class="container mx-auto md:pt-12 xl:py-32 z-50">
          <div
            class="vision lg:bg-secondarybg xs:px-3 xs:mb-10 lg:mb-0 lg:p-10 xl:absolute xl:w-[53%] space-y-3 xl:py-24 xl:ps-40 xl:pe-16"
          >
            <h1 class="text-h3 text-number font-bold">Vision</h1>
            <p class="text-textpera md:text-xl xl:text-sm 2xl:text-[16px]">
              At Jicson Travel, we aspire to be the most trusted and innovative travel agency,
              empowering people worldwide to explore the beauty and diversity of the world. We
              envision a future where every traveler enjoys a seamless and personalized journey,
              made possible through our cutting-edge technology, expert team, and strong global
              partnerships. Our commitment goes beyond providing exceptional services; we aim to
              promote sustainable and responsible tourism that preserves cultural heritage and
              protects the environment. By embracing innovation and delivering inspirational travel
              experiences, we strive to make every journey not only memorable but also meaningful,
              fostering a global community of adventurers who are confident and excited to discover
              the world.
            </p>
          </div>
        </div>
        <div
          class="bg-highblue xs:space-y-7 xs:py-10 xl:py-16 xl:px-32 xs:px-3 xl:rounded-s-[80px] text-white"
        >
          <div class="grid">
            <h1 class="xs:text-h3 lg:text-h2 font-semibold">Mission</h1>
            <p class="text-subtile font-thin md:text-xl xl:text-sm 2xl:text-[16px]">
              "At Jicson Travel, our vision is to deliver seamless and unforgettable travel
              experiences by combining expert guidance, cutting-edge solutions, and exceptional
              service. We are dedicated to making every journey stress-free, enjoyable, and fully
              personalized, ensuring that each traveler’s unique preferences, needs, and dreams are
              at the heart of their travel experience. Through our deep industry knowledge, strong
              partnerships, and a commitment to innovation, we aim to create tailored travel
              solutions that empower our clients to explore the world with confidence. Our goal is
              not only to provide a service, but to inspire adventure, foster cultural
              understanding, and build lifelong memories that will stay with our clients long after
              they’ve returned home."
            </p>
          </div>
          <div class="grid">
            <h1 class="xs:text-h3 lg:text-h2 font-semibold">Goals</h1>
            <p class="text-subtile font-thin md:text-xl xl:text-sm 2xl:text-[16px]">
              At Jicson Travel, our goal is to provide exceptional, personalized travel experiences
              by focusing on customer satisfaction, ensuring every journey is tailored to individual
              needs. We aim to offer a comprehensive range of services, from flights and
              accommodations to customized itineraries, covering all aspects of travel. Embracing
              innovation and technology, we seek to streamline the booking process and provide
              smarter travel solutions. We are committed to promoting sustainable tourism by
              offering eco-friendly options and supporting local communities. Expanding our global
              reach, we aim to form strong partnerships with international suppliers to offer
              exclusive opportunities and competitive pricing. By fostering employee excellence, we
              ensure a team of passionate professionals dedicated to delivering outstanding service.
              Through these goals, we strive to be a leader in the travel industry, known for our
              commitment to quality, innovation, and customer care.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4th part end-->

    <!-- 5th part start -->
    <Testimonial />

    <!-- 5th part end -->

    <!-- 6th part start -->

    <Contact />
    <!-- 6th part end -->
  </section>
</template>

<style scoped>
.firstImg {
  border-top: 2px solid #d9d9d9;
  padding-top: 20px;
  border-radius: 10px;
  border-left: #d9d9d9 2px solid;
  padding-left: 20px;
}
.secImg {
  border-top: 2px solid #d9d9d9;
  padding-top: 20px;
  border-radius: 10px;
  border-left: 2px solid #d9d9d9;
  padding-left: 20px;
  border-bottom: 2px solid #d9d9d9;
  border-right: 2px solid #d9d9d9;
}

.cusImg .man {
  height: 80px;
  width: 80px;
  top: 50px;
  border: 2px solid white;
  border-radius: 50%;
  right: -30px;
}

.vision::after {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 60px solid transparent;
  border-bottom: 35px solid rgba(255, 255, 255, 0.738);
  top: -35px;
  right: 0;
}
.vision::before {
  position: absolute;
  content: '';
  height: 0;
  width: 0;

  border-right: 60px solid transparent;
  border-top: 35px solid rgba(255, 255, 255, 0.738);
  bottom: -35px;
  right: 0;
}

@media screen and (min-width: 320px) {
  .firstImg {
    border-top: 1px solid #d9d9d9;
    margin-left: 65px;
    padding-top: 10px;
    border-radius: 10px;
    border-left: #d9d9d9 1px solid;
    padding-left: 10px;
  }
  .secImg {
    margin-top: 100px;
    margin-left: 15px;
    border-top: 1px solid #d9d9d9;
    padding-top: 8px;
    border-radius: 10px;
    border-left: 1px solid #d9d9d9;
    padding-left: 8px;
    border-bottom: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
  }

  .vision::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    display: none;
    border-left: 30px solid transparent;
    border-right: 60px solid transparent;
    border-bottom: 35px solid rgba(255, 255, 255, 0.738);
    top: -35px;
    right: 0;
  }
  .vision::before {
    position: absolute;
    content: '';
    height: 0;
    width: 0;
    display: none;
    border-right: 60px solid transparent;
    border-top: 35px solid rgba(255, 255, 255, 0.738);
    bottom: -35px;
    right: 0;
  }

  .cusImg .man {
    height: 60px;
    width: 60px;
    top: 20px;
    border: 2px solid white;
    border-radius: 50%;
    right: -24px;
  }
}

@media screen and (min-width: 1140px) {
  .vision::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    display: block;
    border-left: 30px solid transparent;
    border-right: 60px solid transparent;
    border-bottom: 35px solid rgba(255, 255, 255, 0.738);
    top: -35px;
    right: 0;
  }
  .vision::before {
    position: absolute;
    content: '';
    height: 0;
    width: 0;
    display: block;
    border-right: 60px solid transparent;
    border-top: 35px solid rgba(255, 255, 255, 0.738);
    bottom: -35px;
    right: 0;
    }}
</style>
