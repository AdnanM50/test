import React from 'react'
import PrimaryButton from "@/components/button/primary_button"
import Image from "next/image"

const Publish = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center border rounded-xl bg-white border-[#FF5C2C] px-3">
        <Image src="/images/published.png" width={400} height={400} alt='finished'/>
        <p className='text-primary_text font-semibold text-2xl text-center'>You’re almost there!</p>
        <p className='text-tertiary_text text-center mt-3 mb-10'>Let’s publish your Gig and get you ready to start selling.</p>
    </div>
    <div className='flex justify-end mt-9 items-end'>
    <PrimaryButton text='Publish Service' className='!px-8 !py-2' />
  </div>
    </div>
  )
}

export default Publish
