"use client";
import OTPInput from "react-otp-input";
import PrimaryButton from "@/components/button/primary_button";
import FormInput from "@/components/from/input";
import { sendOtp,postRegister } from "@/app/helpers/backend";
import { Form, Modal, message } from "antd";
import { useState } from "react";
import { useTimer } from "use-timer";
import { useRouter } from "next/navigation";
import PhoneNumberInput from "@/components/from/phoneNumberInput";
// import { useUser } from "../contexts/user";


const Page = () => {
  const [email, setEmail] = useState("");
  const [otpModal, setOtpModal] = useState(false);
  const [registrationValues, setRegistrationValues] = useState({});
  const [loadingRequrest, setLoadingRequest] = useState(false);

  const { time, start, pause, reset, status } = useTimer({
    initialTime: 150,
    timerType: "DECREMENTAL",
  });
  const router = useRouter();
  // const { getUser } = useUser();
  return (
    <div className="w-full flex flex-col justify-center items-center p-8">
      <h1>This is Register</h1>

      <div className="flex justify-center items-center mt-10">
        <Form
          layout="vertical"
          onFinish={async (values) => {
            if (!!values?.email) {
              setEmail(values?.email);
              const { error, msg, data } = await sendOtp({
                email: values?.email,
                action: "registration",
              });
              if (error) {
                return message.error(msg);
              } else {
                setOtpModal(true);
                values.role = values?.radio || "user";
                setRegistrationValues(values);
              }
            }
          }}
          className="w-full"
        >
          <FormInput label="Name" name={"name"} />
          <FormInput label="Email" name={"email"} />

          {/* <FormInput label="Phone" name={"phone"} /> */}
            <PhoneNumberInput label="Phone" name={"phone"} />
          <FormInput label="Password" name={"password"} />
          <FormInput label="confrom Password" name={"confirm_password"} />
          <div className="flex justify-center items-center">
            <PrimaryButton
              text="Register"
              className="px-10 bg-orange-400 py-3 rounded-3xl"
            />
          </div>
        </Form>

        <Modal
            open={otpModal}
            onCancel={() => setOtpModal(false)}
            footer={null}
            width={1000}
          >
            <div className=" w-4/5 md:w-3/5 mx-auto py-20">
              <div className="flex flex-col justify-center items-center mb-10">
                <p className="paragraph_2 mb-5">Verify Code</p>
                <p className="text-gray2-100 text-center">
                OTP code send to this
                  <span className="text-primary"> {email} </span>
                  email account.
                </p>
              </div>
              <Form
                name="basic"
                className="max-w-[360px] mx-auto"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={async (values) => {
                  setLoadingRequest(true)
                  if (!!values?.otp) {
                    setOtpModal(false);
                    const payload = {
                      ...registrationValues,
                      otp: values?.otp,
                    };
                    const { error, msg, data } = await postRegister(payload);
                    if (error) {
                      setLoadingRequest(false)
                      return message.error(msg);
                    } else {
                      setOtpModal(false);
                      message.success(msg);
                      router.push("/login");
                       
                    }
                  }
                }}
              >
                <Form.Item name="otp" className="my-8">
                  <OTPInput
                    numInputs={4}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{
                      width: "50px",
                      height: "48px",
                      marginRight: "1rem",
                      fontSize: "20px",
                      border: "1px solid #F79C39",
                      outline: "none",
                    }}
                  />
                </Form.Item>
                <p className="dark:text-White_Color">
                  {time === 0 ? (
                    <span
                      className="text-primary cursor-pointer"
                      onClick={async () => {
                        const { error, msg } = await sendOtp({
                          email: email,
                          action: "registration",
                        });
                        if (error) return message.error(msg);
                        message.success(msg);
                        reset();
                        start();
                      }}
                    >
                      Your OTP has expired.{" "} Resend OTP
                    </span>
                  ) : (
                    <span className="text-primary">
                     Your OTP will expire in 
                      {time}s
                    </span>
                  )}
                </p>
                <button className="w-full text-black h-10 rounded-md mt-4 ">
                Verify
                </button>
              </Form>
            </div>
          </Modal>
      </div>
    </div>
  );
};

export default Page;
