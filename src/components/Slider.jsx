import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import slidea from "/slide-a.jpg";
import slideb from "/slide-b.jpg";
import slidec from "/slide-c.jpg";
import slided from "/slide-d.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="w-full  md:w-10/12 mx-auto py-5">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slidea}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40">
              <h1 className="text-4xl text-white font-bold text-center">
                TechVerse Conference
              </h1>
              <p className="text-white text-center px-5 md:px-20">
                A cutting-edge technology conference bringing together
                innovators, developers, and industry leaders to explore AI,
                Web3, and future tech trends.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slideb}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40">
              <h1 className="text-4xl text-white font-bold text-center">
                Art Exhibition
              </h1>
              <p className="text-white text-center px-5 md:px-20">
                An interactive local art exhibition where emerging artists
                display their work while attendees enjoy live painting demos and
                artisan coffee.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slidec}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40">
              <h1 className="text-4xl text-white font-bold text-center">
                Charity Marathon
              </h1>
              <p className="text-white text-center px-5 md:px-20">
                A community marathon supporting underprivileged children's
                education, featuring live music, food stalls, and local
                sponsors.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slided}
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40">
              <h1 className="text-4xl text-white font-bold text-center">
                Pitch & Networking Night
              </h1>
              <p className="text-white text-center px-5 md:px-20">
                An evening event where budding entrepreneurs pitch their
                startups to investors and connect with mentors, followed by a
                casual networking mixer.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
