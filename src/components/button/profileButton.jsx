import { useNavigate } from "react-router-dom";
import defaultProfile from "../../assets/기본이미지.png";
import { useMyProfile } from "../../store/myprofile";

export const ProfileButton = ({ ...props }) => {
  const navigate = useNavigate();
  const { id, profilePhoto } = useMyProfile((state) => state.myProfile);

  const onClick = () => {
    navigate(`/profile/${id}`);
  };

  return (
    <>
      <div
        onClick={onClick}
        {...props}
        className="flex justify-center w-10 h-10 items-center  border-[#ededed]"
      >
        <div>
          <img
            className="object-cover  w-10 h-10 cursor-pointer rounded-full overflow-hidden"
            src={profilePhoto ? profilePhoto : defaultProfile}
            alt="profileImage"
          />
        </div>
      </div>
    </>
  );
};
