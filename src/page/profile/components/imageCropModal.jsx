import React, { useState, useRef } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./mycrop.css";
import { useMyProfile } from "../../../store/myprofile";

export const ImageCropper = ({ closeModal }) => {
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState({ unit: "%", width: 50, aspect: 1 });
  const [previewUrl, setPreviewUrl] = useState("");
  const [size, setSize] = useState(false);
  const imgRef = useRef(null);
  const [image, setImage] = useState(false);
  const { setMyprofile } = useMyProfile();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImgSrc(reader.result.toString() || "");
    reader.readAsDataURL(file);
  };

  const onCropComplete = (c) => {
    if (!imgRef.current || !c.width || !c.height) return;

    const image = imgRef.current;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const canvas = document.createElement("canvas");
    canvas.width = c.width * scaleX;
    canvas.height = c.height * scaleY;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      c.x * scaleX,
      c.y * scaleY,
      c.width * scaleX,
      c.height * scaleY,
      0,
      0,
      c.width * scaleX,
      c.height * scaleY
    );

    const base64Image = canvas.toDataURL("image/jpeg");
    // return base64Image
    console.log(base64Image);
    setPreviewUrl(base64Image);
  };

  const resizeBox = (e) => {
    const width = e.target.naturalWidth;
    const height = e.target.naturalHeight;

    console.log(width, height);
    if (height >= width) {
      setSize(true);
    } else {
      setSize(false);
    }
  };

  const selectImage = () => {
    setImgSrc(false);
    setImage(true);
  };

  const editProfilePhoto = () => {
    // 서버로 이미지 보내기
    setMyprofile();
    closeModal();
  };

  return (
    <div>
      <div className="flex justify-between items-center pb-2">
        <p
          className="font-semibold text-brand-sub hover:text-red-700"
          onClick={() => closeModal()}
        >
          취소
        </p>
        <p className="font-bold text-brand dark:text-brand-dark">프로필 편집</p>
        {image ? (
          <p
            onClick={editProfilePhoto}
            className="font-semibold text-brand-sub hover:text-[#38b4ff]"
          >
            완료
          </p>
        ) : (
          <p
            onClick={selectImage}
            className={`font-semibold text-brand-sub ${
              imgSrc.length > 1 ? "text-[#38b4ff]" : null
            }`}
          >
            확인
          </p>
        )}
      </div>
      {!imgSrc && (
        <div
          className={`h-[600px] w-[600px] flex justify-center items-center ${
            image ? "hidden" : null
          }`}
        >
          <label htmlFor="img"> 사진선택</label>
          <input
            className="hidden"
            id="img"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      )}

      {imgSrc && (
        <div
          className={"h-[600px] w-[600px] flex justify-center items-center "}
        >
          <div
            className={
              size
                ? "h-full w-full flex justify-center items-center bg-black"
                : "w-full "
            }
          >
            <ReactCrop
              crop={crop}
              onChange={(newCrop) => setCrop(newCrop)}
              onComplete={onCropComplete}
              aspect={1}
            >
              <img
                className={size ? "h-[600px]" : "w-[600px]"}
                onLoad={(e) => resizeBox(e)}
                ref={imgRef}
                src={imgSrc}
                alt=""
              />
            </ReactCrop>
          </div>
        </div>
      )}

      {image && (
        <div className="h-[600px] w-[600px] flex justify-center items-center">
          <img className="h-full w-full" src={previewUrl} alt="미리보기" />
        </div>
      )}
    </div>
  );
};
