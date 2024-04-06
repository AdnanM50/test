import Image from "next/image";
import PageTitle from "../common/pageTitle";

const ShopbyPeat = () => {
  const dataArray = [
    {
        image: "/images/icon.png",
        name: "dog"
    },
    {
        image: "/images/cat2.png",
        name: "cat"
    },
    {
        image: "/images/pic.png",
        name: "birds"
    },
    {
        image: "/images/rabit.png",
        name: "Rabbit"
    },
    {
        image: "/images/fish.png",
        name: "Fish"
    },
    {
        image: "/images/Vector.png",
        name: "reptile"
    }
];
  return (
    <div className="container my-28">
      <PageTitle
        title={"Shop by Peat"}
        description={
          "Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog grooming salon."
        }
      ></PageTitle>
      <div className="absolute right-0">
        <Image
          src="/icon/rightIcon.png"
          alt="featured services"
          width={70}
          height={70}
        />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:grid-cols-6  gap-x-8 gap-y-8 mt-[60px] place-content-center relative">
              
        {dataArray.map((data, index) => (
          <div className="flex flex-col items-center" 
           key={index}>
            <div className="w-[155px]  p-1 h-28 bg-[#7EC1F7] rounded-full flex justify-center items-center">
              <Image
                src={data.image}
                alt={data.name}
                width={70}
                height={70}
              />
            </div>
            <h1 className="text-center  heading_text_1 hover:text-tertiary_3 mt-4 capitalize">
              {data.name}
            </h1>
          </div>
        ))}

      </div>
      <div className="absolute left-0">
        <Image
          src="/icon/leftIcon.png"
          alt="featured services"
          width={70}
          height={70}
        />
      </div>
    </div>
  );
};

export default ShopbyPeat;
