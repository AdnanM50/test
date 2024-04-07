"use client";
import PrimaryButton from "@/components/button/primary_button";
import MultipleImageInput from "../../components/from/multiImage";
import FormSelect from "../../components/from/select";
//import { useUser } from "@/app/contexts/user";
import { getprofile, updateUser } from "@/app/helpers/backend";
import { useFetch } from "@/app/helpers/hooks";
import FormInput from "@/components/from/input";
import { Checkbox, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import ChangePassword from "../changepass/page";


const { TextArea } = Input;

const Page = () => {
  const [form] = Form.useForm();
  const [data, getData, { loading }] = useFetch(getprofile);
  console.log(data)
  const [edit, setEdit] = useState(false);
  const [loadingRequest, setLoadingRequest] = useState(false);
  //const { getUser } = useUser();
  const [ac, setAc] = useState(data?.vehicle?.ac);
  const [online, setOnline] = useState(data?.vehicle?.online);
  //console.log("Online", data?.vehicle?.online);
  const route = useRouter();
  useEffect(() => {
    getData();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    message.success("Logged out successfully");
    window.location.href = "/";
    console.log("Logged out successfully");
  };

  const ChangePassword = () => {
    route.push("/changepass");
  }
  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        ...data,
        documents: data?.documents?.map((img, index) => ({
          uid: `-${index + 1}`,
          name: img,
          status: "done",
          url: img,
        })),
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        mobile: data?.phone,
        about: data?.about,
        address: data?.address,
        license_no: data?.license_no,
        country_name: data?.country?.name,
        country_code: data?.country?.code,
        currency_name: data?.currency?.name,
        currency_symbol: data?.currency?.symbol,
        currency_code: data?.currency?.code,
        lat: data?.location?.lat,
        lng: data?.location?.lng,
        vehicle_lat: data?.vehicle?.location?.lat,
        vehicle_lng: data?.vehicle?.location?.lng,
        driver_name: data?.vehicle?.name,
        category: data?.vehicle?.category?.name,
        category_image: data?.vehicle?.category?.image && [
          {
            uid: `-${0 + 1}`,
            name: "images",
            status: "done",
            url: data?.vehicle?.category?.image,
          },
        ],
        model: data?.vehicle?.model,
        year: data?.vehicle?.year,
        images: data?.vehicle?.images.map((img, index) => ({
          uid: `-${index + 1}`,
          name: img,
          status: "done",
          url: img,
        })),
        max_power: data?.vehicle?.max_power,
        max_speed: data?.vehicle?.max_speed,
        capacity: data?.vehicle?.capacity,
        color: data?.vehicle?.color,
        fuel_type: data?.vehicle?.fuel_type,
        mileage: data?.vehicle?.mileage,
        ac: data?.vehicle?.ac,
        online: data?.vehicle?.online,
        gear_type: data?.vehicle?.gear_type,
        vehicle_number: data?.vehicle?.vehicle_number,
        document_image: data?.vehicle?.documents.map((img, index) => ({
          uid: `-${index + 1}`,
          name: img,
          status: "done",
          url: img,
        })),

        image: data?.image && [
          {
            uid: `-${0 + 1}`,
            name: "images",
            status: "done",
            url: data?.image,
          },
        ],
      });
    }
  }, [data]);

  const handleOnFinish = async (values) => {
    const postData = {
      about: values.about,
      address: values.address,
      description: values.description,
      facebook: values.facebook,
      image: values?.image[0]?.originFileObj
        ? values?.image[0]?.originFileObj
        : values?.image[0]?.url,
      instagram: values.instagram,
      linkedin: values.linkedin,
      twitter: values.twitter,
    };
    const res = await updateUser(postData);
    if (res?.error === false) {
      message.success(res?.msg);
      getUser();
      setEdit(false);
    } else {
      setEdit(false);
      message.error(res?.msg);
    }
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setOnline(e.target.checked);
  };
  const onChange2 = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setAc(e.target.checked);
  };
  console.log("online_", typeof data?.vehicle?.online);
  return (
    <div className="xl:px-[32px] xl:pb-0  sm:-pb-[60px] pb-[60px]">
      <div className="flex justify-between items-center">
      <h3 className="uppercase  font-['Mulish'] mt-[40px] lg:text-3xl md:text-2xl text-xl font-semibold ">
          Personal Info{" "}
        </h3>
        <div
          onClick={() => setEdit(!edit)}
          className="bg-primary text-white px-[30px] py-[10px] flex items-center gap-2 cursor-pointer "
        >
          {edit ? <FaTimes /> : <FaEdit />}
          <p>{edit ? "Cancel" : "Edit"}</p>
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
              label="Profile Image"
              maxCount={4}
              className="rounded-none p-2 border border-[#ebedf9]"
            />
          ) : (
            <img
              className="w-[150px] h-[150px] rounded-md object-contain"
              src={data?.image ? data?.image : "/user1.jpeg"}
              alt="profile"
            />
          )}
        </div>
        <MultipleImageInput name="documents" label="Thum_Image" />
        <Form.Item
          label=" Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input
            placeholder="Name"
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label=" Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            placeholder="Email"
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label="Experience"
          name="experience"
          rules={[
            {
              required: true,
              message: "Please input your experience!",
            },
          ]}
        >
          <Input
            placeholder="Experience"
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label="About"
          name="about"
          rules={[
            {
              required: true,
              message: "Please input your about!",
            },
          ]}
        >
          <Input
            placeholder="About"
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label=" Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your Address!",
            },
          ]}
        >
          <Input
            placeholder="address"
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label=" Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone!",
            },
          ]}
        >
          <Input
            placeholder="Phone"
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label=" license_no"
          name="license_no"
          rules={[
            {
              required: true,
              message: "Please input your license!",
            },
          ]}
        >
          <Input
            placeholder="license_no"
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <h3 className="uppercase  font-['Mulish'] my-[20px]  md:text-2xl text-xl font-semibold ">
          Country
        </h3>
        <Form.Item
          label="  Name"
          name="country_name"
          rules={[
            {
              required: true,
              message: "Please input your Country!",
            },
          ]}
        >
          <Input
            placeholder="Country Name"
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label="  Code"
          name="country_code"
          rules={[
            {
              required: true,
              message: "Please input your Country Code!",
            },
          ]}
        >
          <Input
            placeholder="Country Code"
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>

        <h2 className="  Capitalize font-normal font-['Mulish'] mb-[10px] text-[20px]">
          Currency
        </h2>
        <Form.Item
          label=" Name"
          name="currency_name"
          rules={[
            {
              required: true,
              message: "Please input your Currency Name!",
            },
          ]}
        >
          <Input
            placeholder=" Name"
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label=" Code"
          name="currency_code"
          rules={[
            {
              required: true,
              message: "Please input your Currency Code!",
            },
          ]}
        >
          <Input
            placeholder=" Code"
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label="Symbol"
          name="currency_symbol"
          rules={[
            {
              required: true,
              message: "Please input your Currency Symbol!",
            },
          ]}
        >
          <Input
            placeholder=" Symbol"
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <h2 className="  Capitalize font-normal font-['Mulish'] mb-[10px] text-[20px]">
          Location
        </h2>
        <Form.Item
          label="Lat"
          name="lat"
          rules={[
            {
              required: true,
              message: "Please input your Location Latitute!",
            },
          ]}
        >
          <Input
            placeholder="Lng"
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label="lng"
          name="lng"
          rules={[
            {
              required: true,
              message: "Please input your Location Longitute!",
            },
          ]}
        >
          <Input
            placeholder="Lng"
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <h2 className="  Capitalize font-normal font-['Mulish'] mb-[10px] text-[20px]">
          Vehicle Location
        </h2>
        <Form.Item
          label="Lat"
          name="vehicle_lat"
          rules={[
            {
              required: true,
              message: "Please input your Vehicle Location Latitute!",
            },
          ]}
        >
          <Input
            placeholder="Lng"
            className="rounded-none p-2 border border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label="lng"
          name="vehicle_lng"
          rules={[
            {
              required: true,
              message: "Please input your Vehicle Location Longitute!",
            },
          ]}
        >
          <Input
            placeholder=" Lng"
            className="rounded-none p-2 border  border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <FormSelect
          label="Payment Method"
          name="payment_methods"
          required
          initialValue=""
          options={data?.payment_methods?.map((i) => ({
            label: i,
            value: i,
          }))}
        />
        <h2 className="Capitalize font-normal font-['Mulish'] mb-[10px] text-[20px]">
          Car Details
        </h2>
        <Form.Item
          label="Name"
          name="driver_name"
          rules={[
            {
              required: true,
              message: "Please input your Driver Name!",
            },
          ]}
        >
          <Input
            placeholder="Driver Name"
            className="rounded-none p-2 border  border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label="Name"
          name="category_name"
          rules={[
            {
              required: true,
              message: "Please input your Driver Name!",
            },
          ]}
        >
          <Input
            placeholder="Category"
            className="rounded-none p-2 border  border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <MultipleImageInput name="category_image" label="Image" />
        <Form.Item
          label="Model"
          name="model"
          rules={[
            {
              required: true,
              message: "Please input your Model!",
            },
          ]}
        >
          <Input
            placeholder="Model"
            className="rounded-none p-2 border  border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label="Year"
          name="year"
          rules={[
            {
              required: true,
              message: "Please input your year!",
            },
          ]}
        >
          <Input
            placeholder="Year"
            className="rounded-none p-2 border  border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <MultipleImageInput name="images" label="Images" />
        <Form.Item
          label="Max_Power"
          name="max_power"
          rules={[
            {
              required: true,
              message: "Please input the max_power!",
            },
          ]}
        >
          <Input
            placeholder="max_power"
            className="rounded-none p-2 border  border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label="Max_Speed"
          name="max_speed"
          rules={[
            {
              required: true,
              message: "Please input the max_speed!",
            },
          ]}
        >
          <Input
            placeholder="max_speed"
            className="rounded-none p-2 border  border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label="Capacity"
          name="capacity"
          rules={[
            {
              required: true,
              message: "Please input the capacity!",
            },
          ]}
        >
          <Input
            placeholder="Capacity"
            className="rounded-none p-2 border  border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label="Color"
          name="color"
          rules={[
            {
              required: true,
              message: "Please input the color!",
            },
          ]}
        >
          <Input
            placeholder="Color"
            className="rounded-none p-2 border  border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label="Fuel_Type"
          name="fuel_type"
          rules={[
            {
              required: true,
              message: "Please input the fuel_type!",
            },
          ]}
        >
          <Input
            placeholder="fuel_type"
            className="rounded-none p-2 border  border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label="Mileage"
          name="mileage"
          rules={[
            {
              required: true,
              message: "Please input the mileage!",
            },
          ]}
        >
          <Input
            placeholder="mileage"
            className="rounded-none p-2 border  border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label="Gear_type"
          name="gear_type"
          rules={[
            {
              required: true,
              message: "Please input the gear_type!",
            },
          ]}
        >
          <Input
            placeholder="gear_type"
            className="rounded-none p-2 border  border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>
        <Form.Item
          label="vehicle_number"
          name="vehicle_number"
          rules={[
            {
              required: true,
              message: "Please input the vehicle_number!",
            },
          ]}
        >
          <Input
            placeholder="vehicle_number"
            className="rounded-none p-2 border  border-[#ebedf9]"
            disabled={!edit}
          />
        </Form.Item>

        <MultipleImageInput name="document_image" label="Images" />
        <div className="flex justify-center items-center space-x-10 mb-16">

        <button
        className="w-[10%] h-9 mt-[20px] rounded-lg bg-slate-600 text-white flex justify-center items-center cursor-pointer"
        
        onClick={handleLogout}>Log Out</button>
         <button
        className="w-[10%] h-9 mt-[20px] rounded-lg bg-slate-600 text-white p-3 flex justify-center items-center cursor-pointer"
        
        onClick={ChangePassword}>ChangePassword</button>
        </div>
      </Form>
    
    </div>
  );
};

export default Page;