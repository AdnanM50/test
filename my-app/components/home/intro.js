import React from 'react'
import PrimaryButton from '../button/primary_button'
import Image from 'next/image'

const Intro = () => {
    return (
        <div className='container'>
            <div className='lg:flex justify-between items-center mt-10 md:mt-16 lg:mt-28'>
                <div className='w-full lg:w-[50%] '>
                    <h1 className='text-4xl md:text-[76px] lg:text-[96px] fredoka md:leading-[90px] lg:leading-[104px]'>Established & Trusted Pet Care Service</h1>
                    <p className='text-2xl text-secondary_text mt-3 mb-6 md:mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    <PrimaryButton>Find Now</PrimaryButton>
                </div>
                <div className='w-full lg:w-[50%] relative mt-8 lg:mt-0'>
                    <div className='bg-white p-3 md:p-7 rounded-xl shadow-md md:w-1/2 w-[60%] absolute -bottom-[60px] right-[120px] lg:right-[135px]'>
                        <div className='flex gap-x-3 md:gap-x-6 items-center'>
                            <Image src={'/images/cat2.png'} alt="intro_img" width={44} height={44}></Image>
                            <div>
                                <h1 className='text-base font-roboto'>Cat Food</h1>
                                <p className='text-xs text-secondary_text '>Lorem Ipsam</p>
                            </div>
                        </div>
                        <hr className='my-3 md:my-6' />
                        <div className='flex gap-x-3 md:gap-x-6 items-center'>
                            <Image src={'/images/cat2.png'} alt="intro_img" width={44} height={44}></Image>
                            <div>
                                <h1 className='text-base font-roboto'>Cat Food</h1>
                                <p  className='text-xs text-secondary_text '>Lorem Ipsam</p>
                            </div>
                        </div>
                    </div>
                    <Image src={'/images/intro-Group.png'} alt="intro_img" width={1000} height={1000}></Image>
                </div>
            </div>
        </div>
    )
}

export default Intro