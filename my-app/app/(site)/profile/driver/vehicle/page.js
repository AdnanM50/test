"use client"
import PageTitle from '@/app/components/common/title';
import { fetchVehicleCategories } from '@/app/helpers/backend';
import { useFetch } from '@/app/helpers/hooks';
import React from 'react';

const Page = () => {
    const [data, getData, { loading }] = useFetch(fetchVehicleCategories);
    console.log(data);
    return (
            <div className='mx-4'>
            <div>
            <PageTitle title="Vehicle Categories"/>
            </div> 
            <table className='md:w-[30%] w-full'>
                <tbody>
                    {data?.categories.length > 0 && data?.categories.map((i, index) => (
                        <tr key={index} className='h-[50px] border border-1 w-full bg-red-300 text-white'>
                        <td className='ps-6'>{i.name}</td>
                        </tr> 
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Page;
