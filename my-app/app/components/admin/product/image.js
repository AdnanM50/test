import React from "react";
import MultipleImageInput from "../../form/multiImage";
import { Form } from "antd";

const Image = () => {
  return (
    <div>
      <Form
        layout="vertical"
        onFinish={(value) => {
          console.log(value);
        }}
      >
        <MultipleImageInput label="Product Image" name="product" />
        <MultipleImageInput label="Thumb Image" name="thumb" />
        <MultipleImageInput label="Gallery Images" name="gallery" />
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

export default Image;
