import React from "react";

const Cart_button = ({ title }) => {
  return (
    <button className="py-[11px] px-20 bg-primary text-white rounded-full mt-[56px]">
      {title}
    </button>
  );
};

export default Cart_button;
