import Image from 'next/image';
import React from 'react';

const ServiceCard = ({data}) => {
    const { imageSrc, heading, address, subheading } = data || {};

    return (
        <div className="bg-white cardShadow rounded-[10px] w-full" >
            <div className='w-full'>
                <Image src={"/images/test_card_img.png"}  alt="Service Image" width={1000} height={1000} className='rounded-t-md object-fill' />
            </div>
            <div className='p-6'>
                <div className='border-b'>
                    <h1 className="mb-4 heading_text_1">American Water Spaniel</h1>
                    <h2 className='font-normal text-lg mb-6'>Meal/Female available 15 weeks old</h2>
                </div>
                <p className="font-normal text-base  mt-6">664522 Spring Creek Montrose,CO 8542</p>
            </div>
        </div>
    );
};

export default ServiceCard;
