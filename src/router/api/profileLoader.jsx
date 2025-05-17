import { useMyProfile } from "../../store/myprofile";

export const profileLoader = async ({ params }) => {
  const MYUID = Number(sessionStorage.getItem("uid"));
  const id = Number(params.id);

  if (id === MYUID) {
    const myProfile = useMyProfile.getState().getMyProfile();

    return {
      ...myProfile,
      me: true,
    };
  } else if (id !== MYUID) {
    const reqProfile = await fetch(`http://localhost:5000/user?id=${id}`);
    const resProfile = await reqProfile.json();

    return {
      id: resProfile[0].id,
      username: resProfile[0].username,
      profilePhoto: resProfile[0].profilePhoto,
      message: resProfile[0].message,
      me: false,
    };
  }
};
