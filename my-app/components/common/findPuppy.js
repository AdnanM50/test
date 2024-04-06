"use client"
import { Form, Select } from 'antd'
import React from 'react'
import PrimaryButton from '../button/primary_button'
import FormSelect from '../from/select'
import Search from 'antd/es/transfer/search'
import Image from 'next/image'

export default function FindPuppy({ children, title }) {
    const onSearch = (value, _e, info) => console.log(info?.source, value)
    return (
        <div className="relative">
            <div className="absolute -top-[91px] sm:-top-[229px] left-1/2 transform -translate-x-1/2 z-40">
                <Image
                    src="/images/cute-puppy.png"
                    alt="test"
                    width={553}
                    height={397}
                    className="sm:w-[397px] w-[200px] sm:h-[290px] object-fill"
                />
            </div>

            <div className="w-full bg-tertiary_3 flex flex-col justify-center px-9 lg:px-[88px] rounded-lg items-center z-20 mt-[250px]">
                <h1 className="pt-[61px] px-3 md:px-28  text-center heading_text_1">
                    {title}
                </h1>
                <h2 className="mt-2 mb-6 text-center text-tertiary_text">
                    I’m Looking for
                </h2>
                <div className='w-full'>
                    {children}
                </div>
            </div>
        </div>
    )
}
