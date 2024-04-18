"use client";
import React, { useEffect } from 'react';
import { Card} from 'antd';
import { useRouter } from 'next/navigation';
import { useFetch } from '@/app/helpers/hooks';
import { vehicleDetails } from '@/app/helpers/backend';
import PageTitle from '@/app/components/common/title';

const { Meta } = Card;

const page = ({ params }) => {
    // const [vehicle,getVehicle,{load}]=useFetch(vehicleDetails);
    // useEffect(()=>{
    // getVehicle({_id:params?.id})
    // },[params?.id])
    // console.log(vehicle);
  

    return (
<div className='mt-4'>
            {/* <div className='flex justify-between items-center bg-white p-4 shadow-md border'>
                <PageTitle title="Vehicle Details"className="mx-2"/>
             </div>
            <Card className="rounded-lg">
                        <div className="vehicle-details">
                            <ul className='md:text-lg py-1 font-semibold header_6'>
                            </ul>
                        </div>
            </Card> */}
 
 </div>
    );
};

export default page;
