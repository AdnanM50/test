"use client"
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Col, Row } from 'antd';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PageTitle from '../common/pageTitle';
const PopularBreeds = () => {
    return (
        <div className='container'>
            <PageTitle title={"The Most Popular Breeds"} description={"Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog grooming salon."}></PageTitle>
            <div className='relative mt-[60px] popular_breeds_swiper'>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    loop={true}
                    modules={[EffectCoverflow, Navigation]}
                    navigation={{ nextEl: '.next', prevEl: '.prev' }}
                    className="mySwiper"
                >
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => <SwiperSlide key={i} className='!w-[250px] md:!w-[640px]'>
                            <Image className='mx-auto' src={"/images/test_card_img.png"} alt="Service Image" width={1000} height={1000}></Image>
                        </SwiperSlide>)
                    }

                </Swiper>
                <button className='prev absolute -left-1 lg:-left-3 top-[calc(50%-16px)] z-50 bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] p-1 md:p-2 rounded-full text-secondary_text'>
                    {/* <FaArrowLeft className='text-3xl' /> */}
                    <IoIosArrowBack className='text-lg md:text-3xl' />
                </button>
                <button className='next absolute -right-1 lg:-right-3 top-[calc(50%-16px)] z-50 bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] p-1 md:p-2 rounded-full text-secondary_text'>
                    <IoIosArrowForward className='text-lg md:text-3xl' />
                </button>
            </div>

            <div className='mt-10'>
                <h1 className='heading_text_1 mb-2'>Fetch Bulldog</h1>
                <Row gutter={[16, 32]}>
                    {
                        [1, 2, 3, 4].map((item, i) => <Col key={i} xs={12} md={6} className='text-secondary_text text-sm space-y-2'>
                            <h3>Golden Retriever</h3>
                            <h3>Labrador Retriever</h3>
                            <h3>German Shepherd Dog</h3>
                            <h3>Poodle.</h3>
                            <h3>Yorkshire Terrier</h3>
                            <h3>Bulldog</h3>
                            <h3>Pembroke Welsh Corgi</h3>
                            <h3>Rottweiler</h3>
                            <h3>Cavalier King Charles Spaniel</h3>
                            <h3>Australian Shepherd</h3>
                            <h3>Australian Shepherd</h3>
                            <h3>Miniature Schnauzer</h3>
                            <h3>Dachshund</h3>
                            <h3>Doberman Pinscher</h3>
                        </Col>)
                    }
                </Row>
            </div>
        </div>
    )
}

export default PopularBreeds