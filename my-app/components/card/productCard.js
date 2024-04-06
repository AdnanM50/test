"use client"
import { Flex, Rate } from 'antd'
import Image from 'next/image'
import React from 'react'
import EyeOutlined from '@ant-design/icons/EyeOutlined'
import HeartOutlined from '@ant-design/icons/HeartOutlined'
import ShoppingOutlined from '@ant-design/icons/ShoppingOutlined'

const ProductCard = () => {
  return (
    <div>
      <div className="rounded-[10px] mr-5 relative group">
        <div className='w-full rounded-[10px] flex items-center justify-center py-[30px] px-[60px] relative bg-tertiary_3 group-hover:bg-primary'>
          <Image src={"/images/seepingdog.png"} alt="Service Image" width={500} height={500} className='w-[260px] h-[280px]  rounded-t-md  object-fill' />
          <div className={`bg-[url('/images/shep.png')] bg-no-repeat bg-cover h-[60px] w-[60px] absolute bottom-[50px] -right-7`}>
            <span className="font-semibold text-lg pt-4 flex justify-center items-center  rounded-md text-[#ffffff]">
              sold
            </span>
          </div>
          <div className='space-y-2 absolute left-4 bottom-5'>
            <EyeOutlined className='group-hover:block hidden p-3 rounded bg-white hover:bg-tertiary hover:text-white' />
            <ShoppingOutlined className='group-hover:block hidden p-3 rounded bg-white  hover:bg-tertiary hover:text-white' />
            <HeartOutlined className='group-hover:block hidden p-3 rounded bg-white hover:bg-tertiary hover:text-white' />
          </div>
        </div>
        <div className='p-6'>
          <div className='text-center'>
            <h1 className="mb-4 heading_text_2 !font-roboto">API® Freshwater Aquarium Master Test Kit</h1>
            <Rate defaultValue={3} />
            <h1 className="font-semibold text-lg leading-[26px] text-[#FE4651]">
              $999
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

