import Image from 'next/image'
import React from 'react'

const FoodCard = () => {
  return (
    <div>
       <div className="bg-white cardShadow rounded-[10px] w-full " >
            <div className='w-full  flex items-center justify-center p-9 relative'>
        <div className='absolute left-[20px] top-5'>
        <span className="font-semibold text-lg leading-[26px] py-1 px-3 rounded-md bg-[#FE4651] text-[#ffffff]">
               $999
              </span>
        </div>
                <Image src={"/images/food.png"}  alt="Service Image" width={353} height={250} className='rounded-t-md mb-14 object-fill' />
            </div>
            <div className='p-6'>
                <div className='border-b'>
                    <h1 className="mb-4 heading_text_1 !text-lg">API® Freshwater Aquarium Master Test Kit</h1>
                   
                </div>
                <p className="font-normal text-base  mt-6">664522 Spring Creek Montrose,CO 8542</p>
                <h1 className="font-semibold text-lg leading-[26px] text-[#FE4651]">
               $999
              </h1>
            </div>
        </div>
    </div>
  )
}

export default FoodCard
