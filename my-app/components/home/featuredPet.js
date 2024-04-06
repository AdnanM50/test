"use client"
import React from "react";
import BreedCard from "../card/breedCard";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Featuredpet = () => {
  return (
    <div className="container relative">
    
      <Swiper
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20, },
          768: {
            slidesPerView: 2,
            spaceBetween: 40, },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50, },
          1280: {
            slidesPerView: 4,
            spaceBetween: 60, },
        }}
        loop={true}
       
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".next9",
          prevEl: ".prev9",
        }}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5,6].map((item, i) => (
          <SwiperSlide key={i} className="pt-10 md:pt-5">
          <div
            key={i}
            className="p-3 flex flex-col justify-center items-center m-6 relative"
          >
            {item % 2 === 0 ? (
              <div className="flex">
                <Image
                  src={"/images/Rleftwave.png"}
                  alt="Service Image"
                  width={65}
                  height={120}
                  className="absolute top-0 left-0 rotate-[10deg]"
                />
                <Image
                  src={"/images/Rrightwave.png"}
                  alt="Service Image"
                  width={65}
                  height={120}
                  className="absolute right-0 top-0 -rotate-[13deg]"
                />
              </div>
            ) : (
              <div className="flex">
                <Image
                  src={"/images/Bleftwave.png"}
                  alt="Service Image"
                  width={65}
                  height={120}
                  className="absolute left-4 -rotate-[25deg] bottom-[40px]"
                />
                <Image
                  src={"/images/Brightwave.png"}
                  alt="Service Image"
                  width={65}
                  height={120}
                  className="absolute right-4 rotate-[25deg] bottom-[40px]"
                />
              </div>
            )}
            
            <div className="bg-tertiary_3 rounded-full h-[324px] min-w-[200px] w-[224px] md:w-full flex justify-center items-center">
              <Image
                src={"/images/pug1.png"}
                alt="Service Image"
                width={1000}
                height={1000}
                className="h-[249px]  w-[177px] object-fill overflow-hidden"
              />
            </div>
        
            <h1 className="text-center heading_text_1 mt-6 flex justify-center items-center w-[247px]">
              Bpston Terrier
            </h1>
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>
      <button className="prev9 absolute left-0 top-[calc(50%-32px)] z-50 bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] p-1 md:p-2 rounded-full text-secondary_text">
        <IoIosArrowBack className="text-lg md:text-3xl" />
      </button>
      <button className="next9 absolute right-0 top-[calc(50%-32px)] z-50 bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] p-1 md:p-2 rounded-full text-secondary_text">
        <IoIosArrowForward className="text-lg md:text-3xl" />
      </button>
    </div>
  );
};

export default Featuredpet;
