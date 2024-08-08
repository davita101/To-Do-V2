import { Context } from "@/App";
import React, { useContext, useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {

  const [file, setFile] = useState(null)
  const [addBox, setAddBox, cardObjMain, setCardObjMain, imgSrc, setImgSrc] = useContext(Context)
  const handleChange = (file) => {
    setFile(file)
  }
  useEffect(() => {
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImgSrc(reader.result)
      }
      reader.readAsDataURL(file)
    }

  }, [file])

  return (
    <div>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </div>
  );
}

export default DragDrop;