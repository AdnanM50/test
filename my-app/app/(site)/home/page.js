import { Input } from "antd";
import Image from "next/image";
import React from "react";
import { VscSend } from "react-icons/vsc";

const page = () => {
  return (
    <div>
      {/* banner */}

      <div className="pb-[214px] ">
        <div className="bg-[url('/banner.png')] bg-cover bg-no-repeat xl:ps-[100px] lg:ps-[50px] pt-[79px] flex lg:flex-row flex-col xl:gap-x-[122px] lg:gap-x-[100px] relative lg:px-0 md:px-6 px-2">
          <div className="pt-[22px] lg:w-[40%]   w-full lg:pb-[100px] pb-[50px]">
            <Image
              src="/car_svg.png"
              className="h-[257px] md:w-[477px] w-full absolute lg:left-[20px] mt-[64px] object-fill md:block hidden "
              height={257}
              width={477}
            />
            <h2 className="xl:text-[61px] md:text-[38px] sm:text-start text-center text-[28px] text-white font-bold mb-[32px] capitatlzie">
              Get Your Best Car2Go Ride-Sharing Services
            </h2>
            <p className="text-white font-normal  w-full mb-[40px] sm:text-[16px] text-[12px]">
              Unlock a World of Convenience: Welcome to Car2Go Your Ultimate
              Ride-Sharing Destination! Seamlessly Connect with Reliable Drivers
              Enjoy Comfortable Journeys- One Ride at a Time. Unlock a World of
              Convenience: Welcome to Car2Go Your Ultimate Ride-Sharing
              Destination! Seamlessly Connect with Reliable Drivers{" "}
            </p>
            <div className="flex gap-x-[16px]">
              <Input
                placeholder="Pickup location"
                className="py-[12px] px-[20px]"
                suffix={<VscSend />}
              />
              <Input
                placeholder="Enter destination"
                className="py-[12px] px-[20px]"
              />
            </div>
            <button className="text-white px-[24px] py-[16px] bg-[#186F65] capitalize mt-[16px] rounded">
              Book Ride
            </button>
          </div>
          <Image
            src="/car.png"
            alt="car"
            width={798}
            height={424}
            className="w-full lg:w-[50%]  xl:h-[424px] md:h-[380px] h-[250px] object-fill "
          />
        </div>
      </div>
    </div>
  );
};

export default page;
