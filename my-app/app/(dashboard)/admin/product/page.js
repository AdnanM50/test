"use client";
import Description from "@/app/components/admin/product/description";
import GeneralForm from "@/app/components/admin/product/generalForm";
import { Card } from "antd";
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
  const [tag, setTag] = useState("general");
  return (
    <div className="bg-white p-6">
      {/* tags */}
      <div className="lg:flex w-full justify-center border-b-2 mb-4">
        <div className="lg:flex  mx-auto gap-x-8">
          {tags.map((i, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setTag(i.toLowerCase());
                }}
                className={`pb-2 duration-500 transition-all ease-in-out   ${i.toLowerCase() === tag ? "border-b-4 text-blue-600 border-blue-600" : "text-black"}`}
              >
                {i}
              </div>
            );
          })}
        </div>
      </div>
      <Card>
        {
            tag === "general" && <GeneralForm/>
        }
        {
            tag === "descriptions" && <Description/>
        }
      </Card>
    </div>
  );
};

export default page;
