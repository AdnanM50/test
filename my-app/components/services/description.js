
import PrimaryButton from "@/components/button/primary_button";
import FormInput from "@/components/from/input";
import JodiEditor from "@/components/from/jodiEditor";
import { Switch } from "antd"


const Description = () => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };
  return (
    <div>
      <div>
      <div className="border-b border-[#FF5C2C] space-x-3 py-2 flex justify-end items-end antSwitch">
        <span className="text-primary font-semibold text-lg">Offer Packages</span>
      <Switch defaultChecked onChange={onChange} />
      </div>
      <p className='text-[#260E07] font-semibold text-2xl mt-20 mb-8'>Briefly Describe Your  Service</p>
      <JodiEditor 
        placeholder="I will do something I’ll really good at" 
        className="lg:w-[80%] register_form3"
        name="description"
        rules={[{ required: true, message: 'Please input your description!' }]}
      />
       <div className="border-b border-[#FF5C2C] space-x-3 py-2 flex justify-start items-sjustify-start antSwitch">
        <span className="text-primary font-semibold text-lg">Frequently Asked Questions</span>
      </div>
      <p className='text-[#260E07] font-semibold text-2xl mt-20 mb-8'>Add Questions & Answers for Your Buyers.</p>
      <div className="w-full register_form2 register_form2">
      <FormInput  placeholder='I will do something I’ll really good at ' />  
      <FormInput  textArea={true}  />
      <div className="flex justify-end items-end space-x-4">
      <PrimaryButton text='Cancel' className='!bg-transparent !border !border-[#FF5C2C] !text-primary !px-9 !py-2' />
      <PrimaryButton text='Add' className=' !px-9 !py-2' />
      </div>
      </div>
    </div>
    </div>
  )
}

export default Description
