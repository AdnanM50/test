"use client";
import Image from "next/image";
import Link from "next/link";

const UpperSection = ({ title, curTitle = "" }) => {
  return (
    <div className="md:h-[180px] lg:h-[260px] h-[110px] overflow-x-clip w-full mt-5 md:mt-[80px] upper-section lg:mt-[200px] flex justify-start items-center bg-tertiary_3">
      <div className="container relative">
        <div className="">
          <h2
            className={`lg:text-[44px] md:text-4xl text-2xl lg:mb-[15px] fredoka text-[#181818] text-start `}
          >
            {title}
          </h2>
          <Link href="/" className="">
            <div className="flex items-center gap-x-[6px]">
              <Image
                src={"/icon/homeicon.svg"}
                alt="home"
                width={16}
                height={16}
                className="w-[16px]"
              />
              <div className="flex items-center gap-x-[6px]">
                <p className="text-tertiary_text uppercase font-semibold md:text-base text-sm">
                  Home
                </p>
                <div>/</div>
                <div className="text-primary font-semibold md:text-base text-sm">
                  {curTitle ? curTitle : title}
                </div>
              </div>

            </div>
          </Link>

        </div>
        <div>
          <Image
            src={"/images/upperdog.png"}
            alt="dog"
            width={570}
            height={410}
            className="absolute w-[50%] -right-2 lg:-right-[80px] md:-bottom-[3.6rem] lg:-bottom-[5.6rem] -bottom-[1.7rem]"
          />
        </div>

      </div>
    </div>
  );
};

export default UpperSection;
