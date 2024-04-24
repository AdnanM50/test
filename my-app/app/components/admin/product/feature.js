import { Button, Checkbox, Form, Input ,Modal,Select,Space} from "antd";
import React, { useContext, useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { tabbar } from "@/app/contexts/tabContext";
import Sketch from "@uiw/react-color-sketch";

const Feature = () => {
  const {tab,setTab}=useContext(tabbar);
  const [colors,setColor]=useState(false);
  const [modal,setModal]=useState(false);
  const [hex, setHex] = useState("#fff");
  // const [disableAlpha, setDisableAlpha] = useState(false);
  console.log("color",hex);
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
        <div className="grid lg:grid-cols-2 grid-cols-1 ">
       
             <Form.List name="specfic">
          {(fields, { add, remove }) => (
            <>
              <div className="grid grid-cols-1 ">
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} align="baseline"style={{display:"block"}}>
                    <div className="">
                      <div className="">
                 
         
                      <Form.Item
              {...restField}
              name={[name, "attribute"]}
              className="lg:col-span-2 col-span-1"
              rules={[
                {
                  required: true,
                  message: "please select your attribute",
                },
              ]}
            >
              <Select placeholder="Selcet An Attribute">
                {" "}
                <Option value="1">pointure</Option>
                <Option value="2">coulur</Option>
                <Option value="3">size</Option>
                <Option value="4">volume</Option>
                <Option value="5">stockage</Option>
                <Option value="6">ram</Option>
                <Option value="7">puissance</Option>
              </Select>
                     </Form.Item>
                     </div>
                      <div className="">
      <Form.List name="options">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              style={{
                display: 'flex',
                marginBottom: 8,
              }}
              align="baseline"
            >
                  <Form.Item
              {...restField}
             name={[name, "option_label"]}
              className="lg:col-span-2 col-span-1"
              rules={[
                {
                  required: true,
                  message: "please select your option",
                },
              ]}
            >
              <Select placeholder="Options Label">
                {" "}
                <Option value="1">pointure</Option>
                <Option value="2">coulur</Option>
                <Option value="3">size</Option>
                <Option value="4">volume</Option>
                <Option value="5">stockage</Option>
                <Option value="6">ram</Option>
                <Option value="7">puissance</Option>
              </Select>
                     </Form.Item>
              {
                colors && 
                <Form.Item
                {...restField}
                name={[name, 'color']}
                className={`bg-[${hex}]`}
                rules={[
                  {
                    required: true,
                    message: 'please select the color',
                  },
                ]}
                // className="h-full"
              >
                <Button  style={{ backgroundColor: hex }}  onClick={()=>{setModal(true)}}>Select Color</Button>
              </Form.Item>
              }
              
              <Form.Item
                {...restField}
                name={[name, 'option_price']}
                rules={[
                  {
                    required: true,
                    message: 'please input your option price',
                  },
                ]}
              >
                <Input placeholder="Option Price"className="py-2" />
              </Form.Item>
              <AiOutlineDelete onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item  {...restField} name={[name, "add_property"]}>
            <Button type="dashed" onClick={() => add()} block icon={<BsPlusCircleDotted />}>
              Add Property
            </Button>
          </Form.Item>
        </>
      )}
      </Form.List>
                      </div>
                      <div className="col-span-1  mt-2">
                      <AiOutlineDelete
                        size={18}
                        style={{ color: "red" }}
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
        <Checkbox
        onChange={(e) => setColor(e.target.checked)}
      >
      Color
      </Checkbox>
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
                        size={18}
                        style={{ color: "red" }}
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
       <button className="bg-[#5664d2] text-white px-[12px] py-[7.52px] rounded"onClick={()=>{setTab('descriptions')}}>Previous</button>
       <button className="bg-[#5664d2] text-white px-[12px] py-[7.52px] rounded"onClick={()=>{setTab('status')}}>Next</button>
      </div>
      </div>
      <Modal title="Select Color" open={modal}  onCancel={()=>{setModal(false)}} onOk={()=>{setModal(false)}}>
      <Sketch
        style={{ marginLeft: 20 }}
        color={hex}
        // disableAlpha={disableAlpha}
        onChange={(color) => {
          setHex(color.hex);
        }}
      />
      {/* <button >
        disableAlpha={disableAlpha.toString()}
      </button> */}
      </Modal>
    </div>
  );
};

export default Feature;
