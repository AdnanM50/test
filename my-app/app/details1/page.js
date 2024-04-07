"use client";

//import MultipleImageInput from "@/app/components/form/multiImage";
//import FormSelect from "@/app/components/form/select";
import { useUser } from "@/app/contexts/user";
import {getprofile , updateUser } from "@/app/helpers/backend";
import { useFetch } from "@/app/helpers/hooks";
import PrimaryButton from "@/components/button/primary_button";
import { Checkbox, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";


const page = () => {
    const [form] = Form.useForm();
  const [data, getData, { loading }] = useFetch(getprofile);
  console.log("🚀 ~ page ~ data:", data)
  const [edit, setEdit] = useState(false);
  const [loadingRequest, setLoadingRequest] = useState(false);
  //const { getUser } = useUser();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    ([]);
    message.success("Logout Successfully");
    push("/");
    getUser();
  };
  const route = useRouter();
  useEffect(() => {
    form.setFieldsValue({
      ...data,
      documents:( data?.documents?.map((img, index) => ({
        uid: `-${index + 1}`,
        name: img,
        status: 'done',
        url: img,
    }))),
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      mobile: data?.phone,
      about: data?.about,
      address: data?.address,
      license_no:data?.license_no,
      country_name:data?.country?.name,
      country_code:data?.country?.code,
      currency_name:data?.currency?.name,
      currency_symbol:data?.currency?.symbol,
      currency_code:data?.currency?.code,
      lat:data?.location?.lat,
      lng:data?.location?.lng,
      vehicle_lat:data?.vehicle?.location?.lat,
      vehicle_lng:data?.vehicle?.location?.lng,
      driver_name:data?.vehicle?.name,
      category:data?.vehicle?.category?.name,
      image: data?.vehicle?.category?.image && [
        {
          uid: `-${0 + 1}`,
          name: "images",
          status: "done",
          url: data?.vehicle?.category?.image,
        },
      ],
      model:data?.vehicle?.model,
      year:data?.vehicle?.year,
      images:( data?.vehicle?.images.map((img, index) => ({
        uid: `-${index + 1}`,
        name: img,
        status: 'done',
        url: img,
    }))),
    max_power:data?.vehicle?.max_power,
    max_speed:data?.vehicle?.max_speed,
    capacity:data?.vehicle?.capacity,
    color:data?.vehicle?.color,
    fuel_type:data?.vehicle?.fuel_type,
    mileage:data?.vehicle?.mileage,
    gear_type:data?.vehicle?.gear_type,
    vehicle_number:data?.vehicle?.vehicle_number,
    document_image:( data?.vehicle?.documents.map((img, index) => ({
      uid: `-${index + 1}`,
      name: img,
      status: 'done',
      url: img,
  }))),

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
  return (
    <div>
        <div>
      <h1>User Profile</h1>
      {data && (
        <div>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Role:</strong> {data.role}</p>
          <p><strong>Address:</strong> {data.address}</p>

          {data.country && (
            <div>
              <p><strong>Country:</strong> {data.country.name}</p>
              <p><strong>Country Code:</strong> {data.country.code}</p>
            </div>
          )}

          {data.documents && data.documents.length > 0 && (
            <div>
              <p><strong>Documents:</strong></p>
              <ul>
                {data.documents.map((doc, index) => (
                  <li key={index}>
                    <img src={doc} alt={`Document ${index + 1}`} />
                  </li>
                ))}
              </ul>
            </div>
          )}

         
          {data.vehicle && (
            <div>
              <p><strong>Vehicle Name:</strong> {data.vehicle.name}</p>
          
            </div>
          )}
        </div>
      )}
      
<PrimaryButton text="logout"

onClick={handleLogOut}
/>
    </div>
    </div>
  )
}

export default page