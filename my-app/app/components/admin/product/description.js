import React from "react";
import TextEditor from "../../form/editor";
import { Form } from "antd";

const Description = () => {
    const handleFinish=(value)=>{
        console.log(value);
    }
  return (
    <div>
      <Form onFinish={handleFinish} layout="vertical">
      <Form.Item name="short_description" label="Short Description" required>
        <TextEditor />
      </Form.Item>
      <Form.Item name="description" label="Description" required>
        <TextEditor />
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

export default Description;
