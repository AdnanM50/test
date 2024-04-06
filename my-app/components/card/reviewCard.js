import { Rate } from 'antd'
import Image from 'next/image'
import React from 'react'

function ReviewCard() {
    return (
        <div className='space-y-6'>
            {
                [1, 2, 3, 4].map((item, index) => <div key={index} className='p-4 md:p-8 bg-white rounded-[10px]'>
                    <div className='flex gap-5 items-center'>
                        <Image className='rounded-full w-[90px] h-[90px]' src={"/images/Ellipse2905.png"} alt="img" width={200} height={200}></Image>
                        <div>
                            <h1 className='text-lg font-bold'>nadavshez</h1>
                            <h1 className='text-secondary_text text-base'>Nevada, USA </h1>
                        </div>
                    </div>
                    <div className='flex items-center my-4'>
                        <Rate defaultValue={3} /><h1>(125)</h1>
                    </div>
                    <p className='text-base text-secondary_text'>Best ui ux designer we hired so far i on fiverr, we are very happy and lucky to meet emon and adding him to our team, thanks to him we are most assure our product we be designed properly and on time as he is very responsible and kind with time schedules.</p>
                    <h1 className='text-lg font-bold mt-8'>Purchased: Basic Training - Canine Good Citizen</h1>
                </div>)
            }
        </div>
    )
}

export default ReviewCard