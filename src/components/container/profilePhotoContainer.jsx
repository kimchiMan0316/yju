import { useNavigate } from "react-router-dom";
import defaultPhoto from "../../assets/기본이미지.png";

export const ProfilePhotoContainer = ({ id, width, src, alt }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/profile/" + id);
  };

  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer justify-center items-center border rounded-full overflow-hidden w-${width} h-${width}`}
    >
      <img
        className="w-full h-full object-cover"
        src={src ? src : defaultPhoto}
        alt={alt}
      />
    </div>
  );
};
