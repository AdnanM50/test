import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section className="container pb-16">
      <div className="flex justify-between items-center">
        <div>
          <Image
            src={"/images/p1.png"}
            alt="img"
            width={100}
            height={100}
          ></Image>
        </div>
        <div>
          <Image
            src={"/images/p2.png"}
            alt="img"
            width={100}
            height={100}
          ></Image>
        </div>
        <div>
          <Image
            src={"/images/p3.png"}
            alt="img"
            width={100}
            height={100}
          ></Image>
        </div>
        <div>
          <Image
            src={"/images/p4.png"}
            alt="img"
            width={100}
            height={100}
          ></Image>
        </div>
        <div>
          <Image
            src={"/images/p5.png"}
            alt="img"
            width={100}
            height={100}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Partners;
