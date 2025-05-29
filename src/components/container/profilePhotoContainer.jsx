import { useNavigate } from "react-router-dom";
import defaultPhoto from "../../assets/기본이미지.png";
import getPhoto from "../../util/getPhoto";
import { useEffect, useState } from "react";

export const ProfilePhotoContainer = ({ id, width, alt }) => {
  const navigate = useNavigate();
  const [profilePhoto, setProfilePhoto] = useState("");

  const onClick = () => {
    navigate("/profile/" + id);
  };

  useEffect(() => {
    const photo = async () => {
      const profileImg = await getPhoto(id);
      setProfilePhoto(profileImg);
    };
    photo();
  }, [id]);

  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer justify-center items-center rounded-full overflow-hidden w-${width} h-${width}`}
    >
      <img
        className="w-full h-full object-cover"
        src={profilePhoto ? profilePhoto : defaultPhoto}
        alt={alt}
      />
    </div>
  );
};
