import { Form, Input } from "antd";
import React from "react";

const Shipping = () => {
  return (
    <div>
      <Form
        layout="vertical"
        onFinish={(value) => {
          console.log(value);
        }}
        className="grid lg:grid-cols-2 grid-cols-1 gap-x-4"
      >
        <Form.Item
          name="days_of_delivery"
          label="Approximate product delivery days"
          className="lg:col-span-2"
          required
          
        >
          <Input placeholder="Enter number of product delivery days"type="number" className="p-2" />
        </Form.Item>
        <Form.Item
          name="free_shipping"
          label="Minimum amount for free shipping"
          className="lg:col-span-2"
          required
          
        >
          <Input placeholder="Enter free shiping minimum amount" type="number"className="p-2"/>
        </Form.Item>
        <Form.Item
          name="product_return"
          label="Number of Day for Product Return"
          required
         
        >
          <Input placeholder="Enter number of of day for product return"  type="number"className="p-2"/>
        </Form.Item>
        <Form.Item name="policy_message" label="Return Policy Message" required>
          <Input placeholder="Enter return policy message"type="number"className="p-2" />
        </Form.Item>
        <Form.Item>
          <button
            type="submit" // <-- Set type to "submit"
            className="bg-emerald-500 text-white px-[18px] py-2 rounded"
          >
            Submit
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Shipping;
