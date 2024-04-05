"use client";
import MultipleImageInput from "@/app/components/form/multiImage";
import { useUser } from "@/app/contexts/user";
import { fetchUser, updateUser } from "@/app/helpers/backend";
import { useFetch } from "@/app/helpers/hooks";
import { Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";

const { TextArea } = Input;

const Page = () => {
  const [form] = Form.useForm();
  const [data, getData, { loading }] = useFetch(fetchUser);
  const [edit, setEdit] = useState(false);
  const [loadingRequest,setLoadingRequest]=useState(false)
  const { getUser } = useUser();
 const route=useRouter();
  useEffect(() => {
    form.setFieldsValue({
      ...data,
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      mobile: data?.phone,
      about: data?.about,
      address: data?.address,
      facebook: data?.facebook,
      linkedin: data?.linkedin,
      twitter: data?.twitter,
      instagram: data?.instagram,
      image: data?.image && [
        {
          uid: `-${0 + 1}`,
          name: "images",
          status: "done",
          url: data?.image,
        },
      ],
    });
  }, [data]);

  const handleOnFinish = async (values) => {
    const postData = {
      about: values.about,
      address: values.address,
      description: values.description,
      facebook: values.facebook,
      image: values?.image[0]?.originFileObj ? values?.image[0]?.originFileObj : values?.image[0]?.url,
      instagram: values.instagram,
      linkedin: values.linkedin,
      twitter: values.twitter,
    };
    const res = await updateUser(postData);
    if (res?.error === false) {
      message.success(res?.msg);
      getUser();
      setEdit(false)
   
      
    } 
    else {
      setEdit(false)
      message.error(res?.msg);
    }
  };

  return (
    <div className="xl:px-[32px] xl:pb-0  sm:-pb-[60px] pb-[60px]">
      <div className="flex justify-between items-center">
        <h3 className="uppercase font-normal font-['Mulish'] mt-[40px] text-[20px] ">
          {i18n.t("Personal Info")}{" "}
        </h3>
        <div
          onClick={() => setEdit(!edit)}
          className="bg-primary text-white px-[30px] py-[10px] flex items-center gap-2 cursor-pointer "
        >
          {edit ? <FaTimes /> : <FaEdit />}
          <p>{edit ? i18n.t("Cancel") : i18n.t("Edit")}</p>
        </div>
      </div>
      <Form
        className="mt-[20px]"
        layout="vertical"
        onFinish={handleOnFinish}
        form={form}
      >
        <div className='className="w-full p-2 mb-[6px]"'>
          {edit ? (
            <MultipleImageInput
              name="image"
              label={i18n.t("Profile Image")}
              maxCount={1}
              className="rounded-none p-2 border border-[#ebedf9]"
            />
          ) : (
            <img
              className="w-[150px] h-[150px] rounded-md object-contain"
              src={data?.image ? data?.image : '/user1.jpeg'}
              alt="profile"
            />
          )}
        </div>
        <Form.Item
          label={i18n.t("Full Name")}
          name="name"
          rules={[
            {
              required: true,
              message: i18n.t("Please input your full Name!"),
            },
          ]}
        >
          <Input
            placeholder={i18n.t("Full Name")}
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label={i18n.t("Email")}
          name="email"
          rules={[
            {
              required: true,
              message: i18n.t("Please input your Email!"),
            },
          ]}
        >
          <Input
            placeholder={i18n.t("Email")}
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={true}
          />
        </Form.Item>
        <Form.Item
          label={i18n.t("Phone")}
          name="phone"
          rules={[
            {
              required: true,
              message: i18n.t("Please input your Phone Number!"),
            },
          ]}
        >
          <Input
            placeholder={i18n.t("Phone Number *")}
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label={i18n.t("Address")}
          name="address"
          rules={[
            {
              required: true,
              message: i18n.t("Please input your Address!"),
            },
          ]}
        >
          <Input
            placeholder={i18n.t("Address *")}
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label={i18n.t("About")}
          name="about"
          rules={[
            {
              required: true,
              message: i18n.t("Please input your about"),
            },
          ]}
        >
          <Input
            placeholder={i18n.t("About *")}
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <h3 className="uppercase font-normal font-['Mulish'] mt-[20px] text-[20px] mb-[20px]">
          {i18n.t("Social Link")}
        </h3>
        <Form.Item
          label={i18n.t("Facebook")}
          name="facebook"
          rules={[
            {
              required: true,
              message: i18n.t("Please input your Facebook link!"),
            },
          ]}
        >
          <Input
            placeholder={i18n.t("Facebook *")}
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label={i18n.t("Linkedin")}
          name="linkedin"
          rules={[
            {
              required: true,
              message: i18n.t("Please input your Linkedin account!"),
            },
          ]}
        >
          <Input
            placeholder={i18n.t("Linkedin *")}
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label={i18n.t("Instagram")}
          name="instagram"
          rules={[
            {
              required: true,
              message: i18n.t("Please input your Instagram link!"),
            },
          ]}
        >
          <Input
            placeholder={i18n.t("Instagram *")}
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label={i18n.t("Twitter")}
          name="twitter"
          rules={[
            {
              required: true,
              message: i18n.t("Please input your twitter!"),
            },
          ]}
        >
          <Input
            placeholder={i18n.t("twitter *")}
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        {edit && (
          <button className="uppercase text-white bg-primary px-[32px] py-[14px] mb-[40px]">
            {i18n.t("Save Change")}
          </button>
        )}
      </Form>
    </div>
  );
};

export default Page;
