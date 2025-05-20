import defaultPhoto from "../../../assets/기본이미지.png";

export const ProfileArea = ({ username, message, profilePhoto }) => {
  return (
    <>
      <div className="flex flex-col my-4 justify-center items-center h-96">
        <div className="relative flex w-full justify-center h-[330px]">
          <div className="flex justify-center items-center w-48 h-48 overflow-hidden rounded-full relative">
            <img
              className="object-cover w-48 h-48 z-[2] cursor-pointer"
              src={profilePhoto ? profilePhoto : defaultPhoto}
              alt="profilePhoto"
            />
          </div>
          <div className="absolute bottom-0 z-[1] h-56 w-96 rounded-xl bg-brand-point dark:bg-card-dark flex flex-col justify-start ">
            <div className="p-2 flex items-center justify-end">
              <div className="bg-brand-point cursor-pointer dark:bg-card-dark dark:hover:bg-card-hover text-base text-right rounded-lg p-1"></div>
            </div>
            <div className="text-center mt-14">
              <p className="text-3xl font-bold ">{username}</p>
              <p className="my-2 text-brand-sub">
                {message ? message : `${username}의 프로필`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
