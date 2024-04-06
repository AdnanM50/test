import React from 'react'
import PrimaryButton from '@/components/button/primary_button'
import MultipleImageInput from '@/components/from/multiImage'
import { ExclamationOutlined } from '@ant-design/icons'
import { Form } from 'antd'
const Gallery = () => {
  return (
    <div>
        <div className='flex flex-col space-y-12'>
       <div className="border-b border-[#FF5C2C] space-x-3 py-2 flex justify-start items-start antSwitch">
       <p className='text-[#260E07] font-semibold text-2xl '>Showcase your Services In Service Gallery.</p>
      </div>
      <p className='text-[#260E07] font-semibold text-2xl mb-4'>SEncourage buyers to choice your gig by featuring a variety or your work.</p>
      <div className="bg-[#EEEEEE] rounded-md p-4 flex space-x-3">
      <ExclamationOutlined  size={24}/>
      <p>To comply with Fiverr’s terms of service, make sure to uplode only content you either own or you have the
permission or license licenseeto use.</p>
      </div>
      <div className="border-b border-[#FF5C2C] space-x-3 py-2 flex justify-start items-start antSwitch">
       <p className='text-primary_text font-semibold text-2xl '>Service Image guldelines</p>
      </div>
      <p className='text-primary font-semibold text-2xl '>Image (up to 3)</p>
      <Form>

      <p className='text-primary_text font-semibold text-2xl my-4'>Get notice by the right buyers with with visual examples examplesof your services.</p>
      <MultipleImageInput
        name="image"
        max={3}
        />
        <p className='text-primary_text font-semibold text-2xl my-4'>Get notice by the right buyers with with visual examples examplesof your services..</p>
      <MultipleImageInput
        name="image"
        max={3}
        />
        <p className='text-primary_text font-semibold text-2xl my-4'>Documents(up to 2)</p>
        <p className='text-primary_text font-semibold text-2xl my-4'>Get notice by the right buyers with with visual examples examplesof your services.</p>
      <MultipleImageInput
        name="image"
        max={3}
        />
        <div className='flex justify-center items-center'>
              <PrimaryButton text='Continue' className='!px-8 !py-2' />
            </div>
        </Form>
    </div>
    </div>
  )
}

export default Gallery