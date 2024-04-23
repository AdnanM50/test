import { Switch } from "antd";
import Form from "antd/es/form/Form";
import React from "react";

const Status = () => {
  return (
    <div >
      <Form layout="vertical" className="space-y-8" onFinish={(value)=>{console.log(value)}}>
        <div className="flex justify-center items-center">
        <div>
        <div className="flex justify-between mb-4 space-x-12">
          <h1>Available / Stock available</h1>
          <Form.Item name="available" >
          <Switch defaultChecked/>
          </Form.Item>
        </div>
        <div className="flex justify-between mb-4 space-x-12">
          <h1>Stock Visibility</h1>
          <Form.Item name="visibility" >
          <Switch name="visibility" />
          </Form.Item>
        </div>
        <div className="flex justify-between mb-4 space-x-12">
          <h1>Flash Deal</h1>
          <Form.Item name="flash">
          <Switch  />
          </Form.Item>
        </div>
        <div className="flex justify-between mb-4 space-x-12">
          <h1>New Arrival</h1>
          <Form.Item name="Arrival" >
          <Switch name="Arrival" defaultChecked/>
          </Form.Item>
        </div>
        <div className="flex justify-between mb-4 space-x-12">
          <h1>On Sell</h1>
          <Switch name="onSell" />
        </div>
        <div className="flex justify-between mb-4 space-x-12">
          <h1>Best Sell</h1>
          <Switch name="bestSell" />
        </div>
        <div className="flex justify-between mb-4 space-x-12">
          <h1>Hot Sell</h1>
          <Switch name="hotSell" />
        </div>
        <div className="flex justify-between mb-4 space-x-12">
          <h1>Trending</h1>
          <Switch name="trending" />
        </div>
        <div className="flex justify-between mb-4 space-x-12">
          <h1>Featured</h1>
          <Switch name="featured" />
        </div>
        <div className="flex justify-between mb-4 space-x-12">
          <h1>Popular</h1>
          <Switch name="popular" />
        </div>
        <div className="flex justify-between mb-4 space-x-12">
          <h1>Product Active Status</h1>
          
          <Switch name="Active" defaultChecked/>
          </div>
          </div>
          </div>
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

export default Status;