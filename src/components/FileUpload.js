import { Button, Form, Input } from "antd";
import { useState } from "react";

export const FileUploadComponent = ({ cb = null, multiple = true }) => {
  const [files, setFiles] = useState([]);
  const onFileUploaded = (e) => {
    setFiles(e.target.files);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(files);
    if (cb) await cb(files);
  };
  return (
    <div>
      <Input type="file" onChange={onFileUploaded} multiple={multiple} />
      <Button onClick={(e) => onSubmit(e)}>Submit</Button>
    </div>
  );
};
