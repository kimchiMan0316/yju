import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useMyProfile = create(
  persist(
    (set, get) => ({
      myProfile: {
        id: "",
        username: "",
        state: "",
        profilePhoto: "",
        message: "",
      },
      setMyProfile: (newProfile) =>
        set(() => ({
          myProfile: { ...newProfile },
        })),
      getMyProfile: () => get().myProfile,
    }),
    {
      name: "myProfile",
    }
  )
);
