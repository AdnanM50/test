"use client";
import PrimaryButton from '@/components/button/primary_button';
import FormInput from '@/components/from/input';
import { Form, message } from "antd";
import { sendOtp } from "@/app/helpers/backend";
import React from 'react'
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
  return (
    <div>
       <div className="w-full flex flex-col justify-center items-center p-8">
      <h1>This is forgetpass page</h1>

      <div className="flex justify-center items-center mt-10">
        <Form
          onFinish={async (values) => {

            if (values?.email) {
              const { error, msg, data } = await sendOtp({ email: values?.email, action: 'forgot_password' });
              if (error) {
                return message.error(msg);
              } else {
                message.success(`OTP sent to ${values?.email}`);
                router.push(`/otp?email=${values?.email}`);
              }
            }
          }}
          layout="vertical"
          className="w-full"
        >
          <FormInput label="Email" name={"email"}/>
         

          <div className="flex justify-center items-center">
            <PrimaryButton
              text="continue"
              className="px-10 bg-orange-400 py-3 rounded-3xl"
            />
          </div>
        </Form>
      </div>
    </div>
    </div>
  )
}

export default Page
