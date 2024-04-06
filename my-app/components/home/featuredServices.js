import Image from "next/image";
import React from "react";

const FeaturedServices = () => {
  return (
    <>
      <div className="container">
        <div className=" grid lg:grid-cols-2 lg:gap-[43px]">
          <div className="md:mt-12">
            <h1 className="heading_text ">Featured Services</h1>
            <p className="text-secondary_text mt-2">
              Designed so animals can relax & indulge in pet stylists, run
              around our exercise yards, make new friends in doggy daycare, or
              simply spend hours in our dog grooming salon.
            </p>
            <div>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-16 mt-4 lg:place-items-start place-items-start">
                <div className="flex items-center">
                  <div className="w-[74px] p-1 h-20 bg-[#7EC1F7] rounded-full flex justify-center items-center">
                    <Image
                      src="/icon/icon1.png"
                      alt="featured services"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-secondary_text ml-2 heading_text_1">
                      Grooming
                    </p>
                    <p className="text-secondary_text ml-2">
                      Your pet is in good hands with us! our center.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[74px] p-1 h-20 bg-[#7EC1F7] rounded-full flex justify-center items-center">
                    <Image
                      src="/icon/icon2.png"
                      alt="featured services"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-secondary_text ml-2 heading_text_1">
                      Dog Sitting
                    </p>
                    <p className="text-secondary_text ml-2">
                      Your pet is in good hands with us! our center.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[74px] p-1 h-20 bg-[#7EC1F7] rounded-full flex justify-center items-center">
                    <Image
                      src="/icon/icon3.png"
                      alt="featured services"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-secondary_text ml-2 heading_text_1">
                      Training
                    </p>
                    <p className="text-secondary_text ml-2">
                      Your pet is in good hands with us! our center.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[74px] p-1 h-20 bg-[#7EC1F7] rounded-full flex justify-center items-center">
                    <Image
                      src="/icon/icon4.png"
                      alt="featured services"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-secondary_text ml-2 heading_text_1">
                      Veterinary
                    </p>
                    <p className="text-secondary_text ml-2">
                      Your pet is in good hands with us! our center.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex lg:justify-end justify-center">
            {/* <Image src='/icon/Group.png' alt='featured services' width={20} height={20} className='object-fill  z-30'/> */}
            <div className="xl:w-[150px] xl:h-[150px] lg:w-[128px] lg:h-[138px] sm:w-[112px] sm:h-[120px] w-[80px] h-[88px] rounded-lg bg-[#7EC1F7] absolute z-20 xl:left-16 xl:top-16 lg:-left-10 lg:top-16 lg:ml-0 ml-5 lg:p-8 p-1 sm:left-16 top-16 -left-7 sm:top-24 font-semibold fredoka text-center text-white">
              50+ Service Available
            </div>
            <Image
              src="/images/Group1.png"
              alt="featured services"
              width={500}
              height={500}
              className="  object-fill z-10 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
