import { Form, Image, Modal, Space, Upload } from "antd";
import { useState } from "react";
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import Cropper from 'react-easy-crop'
import {
  Button,
  Typography,
  Slider,
} from "@mui/material";
// import ImgDialog from './ImgDialog'
// import getCroppedImg from './cropImage'
// import { styles } from './styles'
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

  const [images, setImage] = useState(false);
  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };
  const [thumb, setThumb] = useState("");
  const handleChange = async (data) => {
    if (!data?.file?.url && !data?.file?.preview) {
      const preview = await getBase64(data?.file?.originFileObj);
      data = { ...data, file: { ...data.file, preview } }; // Create a new object with the modified preview property
    }

    setPreviewImage2(data?.file?.url || data?.file?.preview);
    console.log("handleChange", data);
    setImage(true);
  };
 // edit image
 const [crop, setCrop] = useState({ x: 0, y: 0 })
 const [rotation, setRotation] = useState(0)
 const [zoom, setZoom] = useState(1)
 const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
 const [croppedImage, setCroppedImage] = useState(null)
 const onCropComplete = (croppedArea, croppedAreaPixels) => {
   setCroppedAreaPixels(croppedAreaPixels)
 }

 const showCroppedImage = async () => {
   try {
     const croppedImage = await getCroppedImg(
       previewImage2,
       croppedAreaPixels,
       rotation
     )
     console.log('donee', { croppedImage })
     setCroppedImage(croppedImage)
   } catch (e) {
     console.error(e)
   }
 }

 const onClose = () => {
   setCroppedImage(null)
 }
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
        onCancel={() => {
          setImage(false);
        }}
        title={"Edit Image"}
      >
        {previewImage2.endsWith(".pdf") ? (
          <embed
            src={previewImage2}
            type="application/pdf"
           
          />
        ) : (
          
          <img
            alt="edit image"
            style={{ width: "100%" }}
            src={previewImage2}
            className="mt-4"
          
          />
    //   <div className="bg-white">
    //   <div className="mb-4">
    //     <Cropper
    //       image={previewImage2}
    //       crop={crop}
    //       rotation={rotation}
    //       zoom={zoom}
    //       aspect={4 / 3}
    //       onCropChange={setCrop}
    //       onRotationChange={setRotation}
    //       onCropComplete={onCropComplete}
    //       onZoomChange={setZoom}
    //     />
    //   </div>
    //   <div style={{position:"static"}}>
    //     <div >
    //       <div>
    //         Zoom
    //       </div>
    //       <Slider
    //         value={zoom}
    //         min={1}
    //         max={3}
    //         step={0.1}
    //         aria-labelledby="Zoom"
          
    //         onChange={(e, zoom) => setZoom(zoom)}
    //       />
    //     </div>
    //     <div >
    //     <div>
    //         Rotate
    //       </div>
          
    //       <Slider
    //         value={rotation}
    //         min={0}
    //         max={360}
    //         step={1}
    //         aria-labelledby="Rotation"
    //         onChange={(e, rotation) => setRotation(rotation)}
    //       />
    //     </div>
    //     <Button
    //       onClick={showCroppedImage}
    //       variant="contained"
    //       color="primary"
    //     >
    //       Show Result
    //     </Button>
    //   </div>
    //   <Image img={croppedImage} onClose={onClose} />
    // </div>
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
