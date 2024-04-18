"use client"
import { DetailTable } from '@/app/components/common/table';
import PageTitle from '@/app/components/common/title';
import FormSelect from '@/app/components/form/select';
import { useUser } from '@/app/contexts/user';
import { fetchUser, fetchVehicleCategories, vehicleDetails } from '@/app/helpers/backend';
import { useFetch } from '@/app/helpers/hooks';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [data, getData, { loading }] = useFetch(fetchVehicleCategories);
    const [vehicle,getVehicle,{load}] =useFetch(vehicleDetails);
    const {user}=useUser()
    useEffect(()=>{
    getVehicle({_id:user?.vehicle?._id})
    },[user])
    const [item,setItem]=useState({});
    const {push} = useRouter();
    console.log(data);
    const [image, setImage] = useState(0)
    const [document, setDocuments] = useState(0)
    return (
        //     <div className='mx-4'>
        //     <div className='flex justify-between'>
        //     <PageTitle title="Vehicle Categories"/>
        //     <div>
        //     <button 
        //     className='cursor-pointer btn btn-success'
        //     onClick={()=>{push('/profile/driver/vehicle/add') }}>
        //       Add Vehicle
        //     </button>
        //     {item && item?.subcategories && item?.subcategories.length > 0 &&
        //     <PageTitle title="Vehicles"/>
        //     }
        //     </div>

        //    </div> 
        //     <div className='flex justify-between'>
        //     <div className='md:w-[50%] w-full'>
        //     <table className=' w-full'>
        //         <tbody>
        //             {data?.categories.length > 0 && data?.categories.map((i, index) => (
        //                 <tr key={index} 
        //                 className={`cursor-pointer h-[50px] border border-1 w-full hover:bg-gray-300 transition-all 
        //                 duration-300 ease-in-out`}
        //                 onClick={()=>{setItem(i)}}>
        //                 <td className='ps-6'>{i.name}</td>
        //                 </tr> 
        //             ))}
        //         </tbody>
        //     </table>
        //     </div>
        //     <div className='md:w-[30%] w-full'>
        //     {item && item?.subcategories && item?.subcategories.length > 0 &&
        //        <FormSelect
        //        label="Vehicle"
        //        name="name"
        //        initialValue=""
        //        onChange={(value)=>{
        //        console.log(value);
        //        push(`/profile/driver/vehicle/details/${value}`)}}
        //        options={item?.subcategories?.map((cat) => ({
        //          label: cat?.name,
        //          value: cat?._id,
        //        }))}
        //      />
        
        //     }
        //     </div>
        //     </div>
        // </div>
        <div>
        <PageTitle item="Vehicle Details" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <DetailTable
              title="Vehicle Details"
              columns={[
                { text: "Vehicle Name", dataIndex: 'name' },
                { text: "Category", dataIndex: 'category', formatter: (_, d) => d?.category?.name },
                { text: "model", dataIndex: 'model' },
                { text: "year", dataIndex: 'year' },
                {text:"max_power", dataIndex: 'max_power'},
                {text: "min_power", dataIndex: "min_power"},
                {text:"capacity",dataIndex:"capacity"},
                {text:"color",dataIndex:"color"},
                {text:"fuel_type",dataIndex:"fuel_type"},
                {text:"mileage",dataIndex:"mileage"},
                {text:"gear_type",dataIndex:"gear_type"},
                // {text:"ac",dataIndex:"ac"},
                {text:"vehicle_number",dataIndex:"vehicle_number"},
                // {text:"online",dataIndex:"online"}
           ]}
              data={vehicle} />
          </div>
          <div>
            <div className="border rounded-md p-4 bg-white shadow-md">
              <h6 className="title">Vehicle Images</h6>
              <div className="body mt-2">
                <div className="text-center mb-3" style={{ height: 300 }}>
                  <img src={vehicle?.images?.[image]} style={{ height: '100%' }} alt="" />
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {vehicle?.images?.map((image, index) => (
                    <div
                      key={index}
                      role="button"
                      onClick={() => setImage(index)}
                      style={{ height: 80 }}
                      className="rounded inline-block text-center bg-white p-2">
                      <img src={image} style={{ height: '100%' }} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border rounded-md p-4 bg-white shadow-md">
              <h6 className="title">Documents</h6>
              <div className="body mt-2">
                <div className="text-center mb-3" style={{ height: 300 }}>
                  <img src={vehicle?.documents?.[document]} style={{ height: '100%' }} alt="" />
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {vehicle?.documents?.map((image, index) => (
                    <div
                      key={index}
                      role="button"
                      onClick={() => setDocuments(index)}
                      style={{ height: 80 }}
                      className="rounded inline-block text-center bg-white p-2">
                      <img src={image} style={{ height: '100%' }} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Page;
