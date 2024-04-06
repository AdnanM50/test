"use client";
import PrimaryButton from "@/components/button/primary_button";
import FormInput from "@/components/from/input";
//import { useUser } from "@/app/contexts/user";
import { postLogin } from "@/app/helpers/backend";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form, message } from "antd";
import Link from "next/link";

const Page = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  //const { getUser } = useUser();
  const [form] = Form.useForm();
  return (
    <div className="w-full flex flex-col justify-center items-center p-8">
      <h1>This is login page</h1>

      <div className="flex justify-center items-center mt-10">
        <Form
          onFinish={async (values) => {
            setError(null);
            const { error, msg, data } = await postLogin(values);
            if (error) {
              message.error(msg);
              setError(msg);
            } else {
              localStorage.setItem("token", data.token);
              message.success(msg);
              router.push("/details");
            }
          }}
          layout="vertical"
          className="w-full"
        >
          <FormInput label="Email" name={"email"}/>
          <FormInput label="Password" name={"password"}/>

          <div className="flex justify-center items-center">
            <PrimaryButton
              text="Login"
              className="px-10 bg-orange-400 py-3 rounded-3xl"
            />
          </div>
        </Form>
      </div>
        <div className="flex justify-between space-x-7">

        <Link href="/forgetpass">
          <h1>Forget Password</h1>
        </Link>
        <Link href="/register">sign up</Link>
        </div>
    </div>
  );
};

export default Page;
