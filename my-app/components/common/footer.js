"use client";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import PrimaryButton from "../button/primary_button";
import Link from "next/link";


export default function Footer() {
  return (
    <div className="bg-primary_text">
      <div className="container text-white ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:place-items-start place-items-center gap-7 md:gap-10 pt-20">
          <div className="flex space-x-[44px]  items-center justify-center">
            <div>
              <FaFacebookF color="white" size={24} />
            </div>
            <div>
              <FaTwitter color="white" size={24} />
            </div>
            <div>
              <BsInstagram color="white" size={24} />
            </div>
            <div>
              <FaWhatsapp color="white" size={24} />
            </div>
          </div>
          <div>
            <Image src="/logo/logo1.png" alt="logo" width={200} height={100} />
          </div>
          <div>
            <h3 className="my-2">Let’s Update your self.</h3>
            <div className="">
              <form  className="flex lg:space-y-2 space-y-4 flex-col xl:flex-row">
                <input
                  name={"email"}
                  className="px-8 lg:px-10 py-4 rounded-full mr-6"
                />
                <PrimaryButton text="Subscribe" className="!px-6 !py-2 !text-sm" />
              </form>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:pb-36 pb-10 gap-10 md:gap-8  text-lg text-center md:text-start ">
            <div>
              <h1 className=" lg:text-[18px] text-[12px] pt-3 leading-10 font-normal capitalize fredoka">
                Bully Market Place{" "}
              </h1>
              <div className=" flex flex-col lg:justify-start justify-center mt-4 text-[#EBECED]">
                <p className=" capitalize md:mt-5 md:text-start text-center mt-2">
                  Find Puppy
                </p>
                <p className=" capitalize md:mt-5 md:text-start text-center mt-2">
                  Find Groomer
                </p>
                <p className=" capitalize md:mt-5 md:text-start text-center mt-2">
                  Find Trainer
                </p>
              </div>
            </div>
            <div>
              <h1 className="  lg:text-[18px] text-[12px] pt-3 leading-10 font-normal capitalize fredoka">
                List with Us
              </h1>
              <div className="flex flex-col lg:justify-start justify-center mt-4 text-[#EBECED]">
                <p className="capitalize md:mt-5 md:text-start text-center mt-2">
                  Breeders | Creating a Listing
                </p>
                <p className="capitalize md:mt-5 md:text-start text-center mt-2">
                  Groomer | Creating a Listing
                </p>
                <p className="capitalize md:mt-5 md:text-start text-center mt-2">
                  Trainer | Creating a Listing
                </p>
              </div>
            </div>
            <div>
              <h1 className=" lg:text-[18px] text-[12px] pt-3 leading-10 font-normal capitalize fredoka">
                Newsletters & Affiliates
              </h1>
              <div className=" flex flex-col lg:justify-start justify-center mt-4 text-[#EBECED]">
                <p className="capitalize md:mt-5 md:text-start text-center mt-2">
                  Newsletter Subscriptions
                </p>
                <p className="capitalize md:mt-5 md:text-start text-center mt-2">
                  Center
                </p>
                <p className="capitalize md:mt-5 md:text-start text-center mt-2">
                  Bully Good Works
                </p>
              </div>
            </div>
            <div>
              <h1 className=" lg:text-[18px] text-[12px] pt-3 leading-10 font-normal capitalize fredoka">
                Polices & Support
              </h1>
              <div className="flex flex-col lg:justify-start justify-center mt-4 text-[#EBECED]">
                <p className="capitalize md:mt-5 md:text-start text-center mt-2 ">
                  Terms of Use
                </p>
                <p className="capitalize md:mt-5 md:text-start text-center mt-2">
                  Privacy Policy
                </p>
                <Link href='contact-us' className="capitalize md:mt-5 md:text-start text-center mt-2">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className=" w-full" />
        <h1 className="text-center py-7  ">
          All Right Reserved Bully Mall © 2023 | | 1000S 8th Avenue, NY
        </h1>
      </div>
    </div>
  );
}
