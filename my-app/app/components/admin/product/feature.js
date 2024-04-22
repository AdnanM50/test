import { Button, Form, Input ,Space} from "antd";
import React from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const Feature = () => {
  return (
    <div>
      <Form
        layout="vertical"
        onFinish={(value) => {
          console.log(value);
        }}
        // className="grid lg:grid-cols-2 grid-cols-1 gap-x-4"
      >
        <div className="font-bold pb-2 text-[18px] lg:col-span-2  mb-6">
          Add Attributes
        </div>
        <div className="font-bold pb-2 text-[18px] lg:col-span-2  mb-6">
          Product Specifications{" "}
        </div>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input description",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.List name="specfic">
          {(fields, { add, remove }) => (
            <>
              <div className=" ">
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} align="baseline">
                    <div className="grid grid-cols-1">
                      <Form.Item
                        {...restField}
                        name={[name, "specific_name"]}
                        className="lg:w-[80%] w-full"
                        rules={[
                          {
                            required: true,
                            message: "please enter specific name",
                          },
                        ]}
                      >
                        <Input placeholder="Enter the product specific name" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "specific_value"]}
                        required
                        rules={[
                          {
                            required: true,
                            message: "Please enter product specific value",
                          },
                        ]}
                      >
                        <Input placeholder="Enter the product specific name" />
                      </Form.Item>
                      <AiOutlineDelete
                        style={{ color: "red" }}
                        size={14}
                        onClick={() => remove(name)}
                      />
                    </div>
                  </Space>
                ))}
              </div>
              <Form.Item>
                <Button
                  onClick={() => add()}
                  className=" px-6 rounded"
                  style={{ background: "#5664d2" }}
                >
                  <BsPlusCircleDotted style={{ color: "white" }} size={20} />
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  );
};

export default Feature;
