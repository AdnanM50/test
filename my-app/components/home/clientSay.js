"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ClientSay = () => {
    return (
        <div className='container relative'>
            <div className='mx-auto w-[93%] clientSay_swiper'>
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    navigation={{
                        nextEl: ".next2",
                        prevEl: ".prev2",
                    }}
                    className="mySwiper"
                >
                    {
                        [1, 2, 3, 4, 5].map((item, i) => <SwiperSlide key={i} className='pt-10 md:pt-5 pb-12'>
                            <div className='md:flex items-center gap-24'>
                                <div className='md:w-1/5  flex justify-center relative'>
                                    <div className='w-[250px] h-[324px] rounded-full bg-primary -z-10'>
                                        <Image className='absolute bottom-0 rounded-b-full' src={"/images/client.png"} alt="Service Image" width={255} height={387} />
                                    </div>
                                </div>
                                <div className='md:w-4/5 col-span-3 relative mt-5 md:mb-0'>
                                    <Image className='absolute -left-16 -top-9' src={"/images/quote.png"} alt="Service Image" width={56} height={56}></Image>
                                    <h1 className='heading_text_1'>Perfect Services!</h1>
                                    <p className='text-secondary_text text-lg my-8 pb-3 font-bold'>The breeder we worked with was very knowledgeable and patient with our questions.  Both of us were eager to ensure our puppy would be a good match.The AKC Marketplace is hands down the best resource available to find quality breeders best resource available to find quality breeders</p>
                                    <h1 className='text-black font-bold'>----------- Ripn Khan</h1>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
                <button className='prev2 absolute left-0 top-[calc(50%-16px)] z-50 bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] p-1 md:p-2 rounded-full text-secondary_text'>
                    <IoIosArrowBack className='text-lg md:text-3xl' />
                </button>
                <button className='next2 absolute right-0 top-[calc(50%-16px)] z-50 bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] p-1 md:p-2 rounded-full text-secondary_text'>
                    <IoIosArrowForward className='text-lg md:text-3xl' />
                </button>
            </div>
        </div>
    )
}

export default ClientSay