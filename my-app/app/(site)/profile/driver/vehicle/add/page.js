'use client';
import React, { useEffect, useState } from 'react';
import PageTitle from '../../../../../components/common/title';
import { Card, Checkbox, Form, Switch, message } from 'antd';
import { useAction, useFetch } from '../../../../../helpers/hooks';
import { useRouter } from 'next/navigation';
import { fetchVehicleCategories, postVehicle } from '@/app/helpers/backend';
import FormInput from '@/app/components/form/input';
import FormSelect from '@/app/components/form/select';
import MultipleImageInput from '@/app/components/form/multiImage';
import Button from '@/app/components/common/button';

const page = () => {
    const { push } = useRouter()
    const [form] = Form.useForm()
    const [categories, getCategories] = useFetch(fetchVehicleCategories)
    const [ac,setAc]=useState(false)
    const onFinish =async (values) => {
        console.log(values)
        const imgArray = [];
        let docArray = [];

        const preImg = [];
        const preDoc = [];

        if (values?.images?.length > 0) {
            for (let i = 0; i < values?.images.length; i++) {
                values?.images[i]?.uid < 0
                    ? preImg.push(values?.images[i]?.url)
                    : imgArray.push(values?.images[i].originFileObj);
            }
        }

        if (values?.documents?.length > 0) {
            for (let i = 0; i < values?.documents.length; i++) {
                values?.documents[i]?.uid < 0
                    ? preDoc.push(values?.documents[i]?.url)
                    : docArray.push(values?.documents[i].originFileObj);
            }
        }

        values.images = imgArray;
        values.documents = docArray;
        if (preImg?.length > 0) {
            values.images = preImg;
        }
        if (preDoc?.length > 0) {
            values.documents = preDoc;
        }
        // values.images = values?.image[0]?.originFileObj;
        // values.documents = values?.image[0]?.originFileObj;
        values.ac=ac ? true : false
        const {error,msg}=await postVehicle(values);
        if(!error){
            message.success(msg)
        }
        else{
            message.error(error);
            push('/profile/driver/vehicle');
        }
        // return useAction(
        //      postVehicle,
        //     {
        //         ...values,
        //     },
        //     () => {
        //         push('/driver/vehicle')
        //     }
        // );
    }

    return (
        <div className='mx-4'>
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                        <FormInput name="name" label="Vehicle Name" required />
                        {categories && (
                            <FormSelect
                                label="Vehicle Category"
                                name="category"
                                initialValue=""
                                options={categories?.categories?.map((cat) => ({
                                    label: cat?.name,
                                    value: cat?._id,
                                }))}
                            />
                        )}
                        <FormInput name="model" label="Vehicle Model" required className="border border-2" />
                        <FormInput name="year" label="Vehicle Year" required />
                        <FormInput name="max_power" label="Max Power" required />
                        <FormInput name="max_speed" label="Max Speed" required />
                        <FormInput name="capacity" label="Capacity" required />
                        <FormInput name="color" label="Color" required />
                        <FormInput name="fuel_type" label="Fuel Type" required />
                        <FormInput name="mileage" label="Mileage" required />
                        <FormInput name="gear_type" label="Gear Type" required />
                        <FormInput name="vehicle_number" label="Vehicle Number" required />
                        <Checkbox 
                        onChange={(e) => {
                            console.log(`checked = ${e.target.checked}`);
                            setAc(e.target.checked)
                          }}>
                           AC
                        </Checkbox>
                        <MultipleImageInput name="documents" label="Documents"max={4} />
                        {/* <MultipleImageInput name="documents" label="Document" max={1}/> */}
                        <MultipleImageInput name="images" label="Images" max={4}/>
                        {/* <MultipleImageInput name="images" label="Image" max={1}/> */}
                    </div>
                    <Button type="primary" htmlType="submit">Add Vehicle</Button>
                </Form>
        </div>
    );
};

export default page;