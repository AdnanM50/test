"use client";
import React, { useState } from "react";
const page = () => {
  const tags = [
    "General",
    "Descriptions",
    "Product Features",
    "Status",
    "Images",
    "Shipping Information",
  ];
  const [tag, setTag] = useState("General");
  return (
    <div>
      {/* tags */}
      <div className="flex justify-center border-b-2">
        <div className="flex mx-auto gap-x-8">
          {tags.map((i, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setTag(i);
                }}
                className={`pb-2 duration-500 transition-all ease-in-out  ${i === tag ? "border-b-4 text-blue-600 border-blue-600" : "text-black"}`}
              >
                {i}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
