import React from 'react'
import { FaCreativeCommonsSampling } from 'react-icons/fa6'
import PrimaryButton from '../button/primary_button'
import Image from 'next/image'

const Health = () => {
    return (
        <div className='container'>
            <div className='flex gap-x-8 lg:gap-x-16 mb-6 md:mr-20 lg:mr-24 justify-center md:justify-end text-lg fredoka'>
                        <button className='hover:text-tertiary_3 hover:underline'>For Dog</button>
                        <button className='hover:text-tertiary_3 hover:underline'>For Cat</button>
                        <button className='hover:text-tertiary_3 hover:underline'>For Others</button>
                    </div>
            <div className='w-full gap-5 lg:gap-24 md:flex justify-between items-start'>
                <div className='md:w-[36%]'>
                    <h1 className='heading_text_1'>Health and Wellness Services</h1>
                    <div className='flex gap-x-6 md:gap-x-3 lg:gap-x-6 my-8 text-secondary_text text-lg'>
                        <div className='flex gap-1 hover:text-black items-center'>
                            <FaCreativeCommonsSampling />
                            <h2>Eat</h2>
                        </div>
                        <div className='flex gap-1 hover:text-black items-center'>
                            <FaCreativeCommonsSampling />
                            <h2>Eat</h2>
                        </div>
                        <div className='flex gap-1 hover:text-black items-center'>
                            <FaCreativeCommonsSampling />
                            <h2>Eat</h2>
                        </div>
                        <div className='flex gap-1 hover:text-black items-center'>
                            <FaCreativeCommonsSampling />
                            <h2>Eat</h2>
                        </div>
                    </div>
                    <p className='text-secondary_text text-lg'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog grooming salon.</p>
                    <PrimaryButton className='!mt-10'>Book Appointment</PrimaryButton>
                </div>
                <div className='md:w-[64%]  mt-10 md:mt-0'>
                    {/* <div className='flex gap-x-8 lg:gap-x-16 md:mr-20 lg:mr-24 justify-center md:justify-end text-lg font-bold fredoka'>
                        <button className='hover:text-tertiary_3 hover:underline'>For Dog</button>
                        <button className='hover:text-tertiary_3 hover:underline'>For Cat</button>
                        <button className='hover:text-tertiary_3 hover:underline'>For Others</button>
                    </div> */}
                    <div className="w-full bg-[url('/images/client_group.png')] bg-[length:100%_100%] bg-no-repeat pb-16 md:pb-24 lg:pb-28">
                        <Image className='w-[75%] mx-auto' src="/images/health.png" alt="test" width={1000} height={1000} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Health