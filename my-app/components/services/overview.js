import React from 'react'
import PrimaryButton from '@/components/button/primary_button';
import FormInput from '@/components/from/input'
import {  Select } from 'antd';
import { Option } from 'antd/es/mentions';


const Overview = () => {
  return (
    <div className=' bg-[#FF5C2C1A] rounded-lg border border-[#FF5C2C] py-9 px-10'>
        <div className='flex flex-col space-y-7'>
            <div className='flex flex-col space-y-4'>
            <p className='text-[#260E07] font-semibold text-2xl'>Service Tittle</p>
            <p className='text-tertiary_text lg:w-[593px]'>As your service storefront, your tittle is most important place to includes keywords that buyers would likely use to search for a service like yours.</p>
            <div className='lg:w-[80%] register_form3'>
                <FormInput  placeholder='I will do something I’ll really good at ' />    
            </div>
            </div>
            <div className='flex flex-col space-y-4'>
            <p className='text-[#260E07] font-semibold text-2xl'>Category</p>
            <p className='text-tertiary_text lg:w-[593px]'>Choose the category and subcategory most suitable for your service</p>
            <div className='lg:w-[30%] selector'>
           
      <Select
        defaultValue="Zhejianggggg"
        style={{
          width: '100%',
        }}
      >
        <Option value="Zhejianggggg">Zhejianggggg</Option>
        <Option value="Jiangsu">Jiangsu</Option>
      </Select>

            </div>
            </div>
            <div className='flex flex-col space-y-4'>
            <p className='text-[#260E07] font-semibold text-2xl'>Positive Keywords</p>
            <p className='text-tertiary_text lg:w-[593px]'>Enter search terms you feel your buyers will use when looking for your service.</p>
            <div className='lg:w-[80%] selector'>
            <Select
            
        allowClear
        mode="multiple"
        defaultValue="Zhejianggggg"
        maxCount={5}
        minCount={1}
        style={{
          width: '50%',
        }}
      >
        <Option value="Zhejianggggg">Zhejianggggg</Option>
        <Option value="Jiangsu">Jiangsu</Option>
        <Option value="Zhegg">Zhegg</Option>
        <Option value="Jiangsu">Jdmdj</Option>
        <Option value="Zhejianqw">Zhejianqw</Option>
        <Option value="Jiaefrfsu">Jiaefrfsu</Option>
        
      </Select>   
            </div>
            <p className='text-tertiary_text'>5 tags maximum</p>
            <div className='flex justify-end items-end'>
              <PrimaryButton text='Continue' className='!px-8 !py-2' />
            </div>
            </div>
            </div>
           
    </div>
  )
}

export default Overview