"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Pagination, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from 'next/image';
const GallerySlider = ({ items }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {
                    items.map((item, index) => <SwiperSlide key={index}>
                        <Image className='h-[200px] md:h-[450px] object-fill' src={item} width={1000} height={1000} alt="review"></Image>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className='h-[10px] md:h-[30px]'></div>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper5"
            >
                {
                    items.map((item, index) => <SwiperSlide className='cursor-pointer' key={index}>
                        <Image className='h-[60px] md:h-[130px] object-fill' src={item} width={1000} height={1000} alt="review"></Image>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default GallerySlider