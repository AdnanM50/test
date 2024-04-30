import Image from "next/image";
import React from "react";

const Download = () => {
  return (
    <div className="mb-[120px] mt-[331px]">
    <div className="container relative">
    <div className="  xl:px-[241px] md:px-5 pb-[76px] pt-[108px] shadow-custom rounded-tl-2xl rounded-br-2xl border bg-red-300">
   
       
        <h1 className="mt-[21px] text-[#0B204C] md:text-[32px] text-[21px] font-medium text-center">
          Your Key to Making Money and Reaching Financial Independence is to
          Unlock Financial Opportunities! UtilizeMond
        </h1>
        <p className="mt-[20px] text-[#919BB3] font-medium md:mb-[46px] mb-[20px] text-center">
          Discover countless opportunities using our platform to transform your
          passion and skills into a fulfilling source of money.
        </p>
        <div className="flex md:flex-row flex-col lg:gap-x-[100px] md:gap-x-[50px] md:gap-y-0 gap-y-[20px] md:justify-center  md:items-center items-start md:ms-0 ms-5">
          <div className=" md:max-w-[368px] ">
            <h3 className="text-[18px] font-normal mb-[12px] md:text-center">
              User App
            </h3>
            <div className="flex flex-row gap-x-[12px]  ">
              <Image
                src="/apple_store.png"
                height={52}
                width={178}
                className="lg:w-[178px] w-[50%] h-[52px] object-fill"
                alt="app store"
              />
              <Image
                src="/google_play.png"
                height={52}
                width={178}
                className="lg:w-[178px] w-[50%] h-[52px] object-fill"
                alt="app store"
              />
            </div>
          </div>
          <div className="bg-red-300 md:max-w-[368px]">
            <h3 className="text-[18px] font-normal mb-[12px] md:text-center">
              Driver App
            </h3>
            <div className="flex flex-row gap-x-[12px] ">
              <Image
                src="/apple_store.png"
                height={52}
                width={178}
                className="lg:w-[178px] w-[50%] h-[52px] object-fill"
                alt="app store"
              />
              <Image
                src="/google_play.png"
                height={52}
                width={178}
                className="lg:w-[178px] w-[50%] h-[52px] object-fill"
                alt="app store"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <img
          src="/white_car.png"
          className="md:w-[624px] w-[424px] md:h-[298px] h-[198px] object-fill  absolute md:top-[-211px] top-[-120px]"
          alt="white car"
        />
      </div>
      </div>
    </div>
  );
};

export default Download;
