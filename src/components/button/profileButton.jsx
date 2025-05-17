import { useNavigate } from "react-router-dom";
import defaultProfile from "../../assets/기본이미지.png";
import { useMyProfile } from "../../store/myprofile";

export const ProfileButton = ({ image }) => {
  const navigate = useNavigate();
  const id = useMyProfile((state) => state.myProfile.id);

  const onClick = () => {
    navigate(`/profile/${id}`);
  };

  return (
    <div
      onClick={onClick}
      className="flex justify-center w-10 h-10 items-center rounded-[50%] overflow-hidden border-[#ededed]"
    >
      <div>
        <img
          className="object-cover  w-10 h-10 cursor-pointer"
          src={image ? image : defaultProfile}
          alt="profileImage"
        />
      </div>
    </div>
  );
};
