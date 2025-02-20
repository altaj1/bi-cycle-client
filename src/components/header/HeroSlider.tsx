import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function HeroSlider() {
  return (
    <div className=" bg-gray-100 flex items-center justify-center">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex  flex-col items-center justify-center h-screen bg-yellow-200 text-black">
              <h1 className="text-5xl font-bold">FREEDOM RIDE</h1>
              <p className="text-lg mt-4">
                Your personal electric bike with insurance from{" "}
                <span className="text-red-500">€88</span>/month.
              </p>
              <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg">
                Shop Bikes →
              </button>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-screen bg-blue-200 text-black">
              <h1 className="text-5xl font-bold">ELECTRIC POWER</h1>
              <p className="text-lg mt-4">
                Experience the thrill of effortless riding with high-speed
                electric bikes.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
                Discover More →
              </button>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-screen bg-green-200 text-black">
              <h1 className="text-5xl font-bold">SUSTAINABLE TRAVEL</h1>
              <p className="text-lg mt-4">
                Ride green, save fuel, and reduce carbon emissions with our
                eco-friendly bikes.
              </p>
              <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg">
                Go Green →
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
