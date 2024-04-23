import { Form, Modal, Upload } from "antd";
import { useState } from "react";

//File Input Component
const MultipleImageInput = (props) => {
  let max = props.max || 1;
  let name = props.name || "img";
  let label = props.label;
  let listType = props.listType || "picture-card";

  return (
    <div className="form-group">
      <Form.Item
        name={name}
        label={label}
        rules={[
          {
            required: props?.required,
            message: `Please upload ${!!label ? label : "an image"}`,
          },
        ]}
      >
        <Input
          max={max}
          listType={listType}
          pdf={props?.pdf}
          noWebp={props?.noWebp}
        />
      </Form.Item>
    </div>
  );
};

const Input = ({ value, onChange, listType, max, noWebp, pdf }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewImage2, setPreviewImage2] = useState("");

  const [images,setImage]=useState(false);
  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };
  const [thumb,setThumb]=useState('')
  const handleChange = async (data) => {
    if (!data?.file?.url && !data?.file?.preview) {
      const preview = await getBase64(data?.file?.originFileObj);
      data = { ...data, file: { ...data.file, preview } }; // Create a new object with the modified preview property
    }
  
    setPreviewImage2(data?.file?.url || data?.file?.preview);
    console.log("handleChange", data);
    setImage(true);
  };
  

  return (
    <>
      <Upload
        accept={`image/png, image/gif, image/jpeg, ${!noWebp && "image/webp"}${
          pdf ? ", application/pdf" : ""
        }`}
        listType={listType}
        onPreview={handlePreview}
        fileList={value || []}
        onChange={handleChange}
        openFileDialogOnClick={true}
       
        maxCount={max}
      >
        {(value?.length || 0) < max && "+ upload"}
      </Upload>
      {/* <img src={previewImage} alt="image" /> */}
      <Modal
        open={previewVisible}
        footer={null}
        onCancel={handleCancel}
        title={"Preview"}
      >
        {previewImage.endsWith(".pdf") ? (
          <embed
            src={previewImage}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        ) : (
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        )}
      </Modal>
      <Modal   
        open={images}
        footer={null}
        onCancel={()=>{setImage(false)}}
        title={"Edit Image"}>
  {previewImage2.endsWith(".pdf") ? (
          <embed
            src={previewImage2}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        ) : (
          <img alt="edit image" style={{ width: "100%" }} src={previewImage2} />
        )}
      </Modal>
    </>
  );
};

export default MultipleImageInput;

// Utility function to convert file to base64
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}





