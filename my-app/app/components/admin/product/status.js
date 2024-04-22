import { Form, Switch } from "antd";
import React from "react";

const Status = () => {
  return (
    <div>
      <Form
        onFinish={(value) => {
          console.log(value);
        }}
      >
        <Form.Item name="avaliable" label="Available / Stock Available">
          <Switch  /> {/* Corrected */}
        </Form.Item>
        <Form.Item name="visibility" label="Stock Visibility">
          <Switch />
        </Form.Item>
        <Form.Item>
          <button
            type="submit"
            className="bg-emerald-500 text-white px-[18px] py-2 rounded"
          >
            Submit
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Status;
