import { Button, Form, Input ,Space} from "antd";
import React, { useContext } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { tabbar } from "@/app/contexts/tabContext";

const Feature = () => {
  const {tab,setTab}=useContext(tabbar)

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
              <div className="grid grid-cols-1 ">
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} align="baseline"style={{display:"block"}}>
                    <div className="grid grid-cols-12 gap-x-2  align-self-center  w-full">
                      <div className="col-span-6">
                      <Form.Item
                        {...restField}
                        name={[name, "specific_name"]}
                        rules={[
                          {
                            required: true,
                            message: "please enter specific name",
                          },
                        ]}
                      >
                        <Input placeholder="Enter the product specific name" />
                      </Form.Item>
                      </div>
                      <div className="col-span-5">
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
                      </div>
                      <div className="col-span-1  mt-2">
                      <AiOutlineDelete
                        size={36}
                        style={{ color: "red" }}
                        size={14}
                        onClick={() => remove(name)}
                      />
                    </div>
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
      <div className="flex justify-end">
      <div className="flex gap-x-4 items-center">
       <button className="bg-purple-500 text-white h-12 w-24"onClick={()=>{setTab('descriptions')}}>Previous</button>
       <button className="bg-purple-500 text-white h-12 w-24"onClick={()=>{setTab('status')}}>Next</button>
      </div>
      </div>
    </div>
  );
};

export default Feature;
