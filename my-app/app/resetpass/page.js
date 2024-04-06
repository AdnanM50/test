'use client';
import { Form, Input, message } from "antd";
import { useRouter } from "next/navigation";

import { postResetPassword } from "@/app/helpers/backend";
import FormInput from "@/components/from/input";
const Page = () => {
    const router = useRouter()


    const handleSubmit = async (values) => {
        const payload = {
            ...values,
            token: localStorage.getItem('token')
        }
        const { error, msg, data } = await postResetPassword(payload)
        if (error) {
            message.error(msg)
        } else {
            message.success(msg)
            router.push('/login')
        }
    }

  return (
    <div>
    <div className="">
        <div className="" >
            <div className="my-16 md:my-36 py-24" >
                <div className="lg:w-[648px] w-full mx-auto" >
                    <p className='text-center header_3 header_1 mb-8' >
                    "Reset Your Password"
                    </p>
                    <div className="divide-y ">
                        <div className="text-dark_text  sm:text-lg sm:leading-7">
                            <Form layout="vertical" onFinish={handleSubmit}>
                                <FormInput
                                    name="password"
                                    label={"New Password"}
                                    hasFeedback
                                />
                                    

                                <FormInput
                                    name="confirm_password"
                                    label={"Re-type Password"}
                                    dependencies={['password']}
                                    hasFeedback
                                   placeholder={'Confirm Your Password'}
                               />
                                <button className=" w-full py-3 bg-primary text-black mb-5 uppercase font-bold">
                                Reset
                                </button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Page
