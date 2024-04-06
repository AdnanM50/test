import Image from 'next/image'
import React from 'react'

const BreedCard = ({ data }) => {

  const { bgColor, imageSrc, text } = data || {};
  return (
    <div className='p-3'>
      {/* <div style={{ backgroundColor: bgColor }} className='mx-auto'> */}
        <Image src={"/images/test_card_img.png"} alt="Service Image" width={1000} height={1000} className='rounded-full h-[324px] min-w-[200px] w-[224px] md:w-full mx-auto object-fill' />
      {/* </div> */}
      <h1 className='text-center heading_text_1 mt-6'>
        Bpston Terrier
      </h1>
    </div>
  )
}

export default BreedCard