import { useState } from "react";

export const useModal = () => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    console.log("openModal");
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return { isModal, openModal, closeModal };
};
