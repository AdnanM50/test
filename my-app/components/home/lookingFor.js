import Image from "next/image";
import React from "react";
import PageTitle from "../common/pageTitle";

const LookingFor = () => {
  return (
    <section className="container">
      <div className="flex flex-col justify-center items-center my-[60px]">
        <PageTitle
          title="What Are You Looking For?"
          description=" We offer long-term and short-term boarding. Every dog has its own
          private, spacious room and daily individual time in our large play
          yard."
        />
      </div>
      <div>
<Image src="/images/right1.png" alt="Looking For" width={100} height={100} className="absolute right-0 "/>
</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-3">
      
        <div className="flex flex-col items-center justify-center">
          <div className="md:w-[59%]  flex justify-center relative">
            <div className="w-[250px] h-[324px] rounded-full bg-tertiary_3 z-10">
              <Image
                className="absolute bottom-0 rounded-b-full"
                src={"/images/client.png"}
                alt="Service Image"
                width={255}
                height={387}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-bold my-5">Find Puppies</p>
            <p className="text-secondary_text mb-10 lg:w-[313px] text-center">
              Search the only source for 100% responsibly bred Bully purebred
              puppies.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="md:w-[59%]  flex justify-center relative">
            <div className="w-[250px] h-[324px] rounded-full bg-primary z-10">
              <Image
                className="absolute bottom-0 rounded-b-full"
                src={"/images/client.png"}
                alt="Service Image"
                width={255}
                height={387}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-bold my-5">Find Trainers</p>
            <p className="text-secondary_text mb-10 lg:w-[313px] text-center">
              Search for a CGC dog trainer near you who can help you and your
              dog reach your training goals.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="md:w-[59%]  flex justify-center relative">
            <div className="w-[250px] h-[324px] rounded-full bg-tertiary_3 z-10">
              <Image
                className="absolute bottom-0 rounded-b-full"
                src={"/images/client.png"}
                alt="Service Image"
                width={255}
                height={387}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-bold my-5">Find Groomers</p>
            <p className="text-secondary_text mb-10 lg:w-[313px] text-center">
              Search for a CGC dog trainer near you who can help you and your
              dog reach your training goals.
            </p>
          </div>
        </div>
       
      </div>
      <div>
      <Image src="/images/left1.png" alt="Looking For" width={100} height={100} className="absolute left-0 "/>
          </div>
    </section>
  );
};

export default LookingFor;
