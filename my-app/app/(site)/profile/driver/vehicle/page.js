"use client"
import PageTitle from '@/app/components/common/title';
import FormSelect from '@/app/components/form/select';
import { fetchVehicleCategories, vehicleDetails } from '@/app/helpers/backend';
import { useFetch } from '@/app/helpers/hooks';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
    const [data, getData, { loading }] = useFetch(fetchVehicleCategories);
    const [item,setItem]=useState({});
    const {push} = useRouter();
    console.log(data);
    return (
            <div className='mx-4'>
            <div className='flex justify-between'>
            <PageTitle title="Vehicle Categories"/>
            {item && item?.subcategories && item?.subcategories.length > 0 &&
            <PageTitle title="Vehicles"/>
            }
           </div> 
            <div className='flex justify-between'>
            <div className='md:w-[50%] w-full'>
            <table className=' w-full'>
                <tbody>
                    {data?.categories.length > 0 && data?.categories.map((i, index) => (
                        <tr key={index} 
                        className={`cursor-pointer h-[50px] border border-1 w-full hover:bg-gray-300 transition-all 
                        duration-300 ease-in-out`}
                        onClick={()=>{setItem(i)}}>
                        <td className='ps-6'>{i.name}</td>
                        </tr> 
                    ))}
                </tbody>
            </table>
            </div>
            <div className='md:w-[30%] w-full'>
            {item && item?.subcategories && item?.subcategories.length > 0 &&
               <FormSelect
               label="Vehicle"
               name="name"
               initialValue=""
               onChange={(value)=>{
               console.log(value);
               push(`/profile/driver/vehicle/details/${value}`)}}
               options={item?.subcategories?.map((cat) => ({
                 label: cat?.name,
                 value: cat?._id,
               }))}
             />
        
            }
            </div>
            </div>
        </div>
    );
};

export default Page;
