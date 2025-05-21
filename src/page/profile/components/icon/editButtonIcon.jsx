import { useNavigate } from "react-router-dom";
import { Modal } from "../../../../components/modal/modal";
import { useModal } from "../../../../hooks/useModal";
import { clearSession } from "../../../../auth/auth";

export const EditButtonIcon = ({ editorHandler, id }) => {
  const { isModal, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const onLogOut = () => {
    clearSession();
    navigate("/login", { replace: true });
  };

  const editLoginInf = () => {
    navigate("/account/" + id);
  };

  return (
    <>
      {isModal && (
        <Modal closeModal={closeModal}>
          <div className="flex flex-col w-72 justify-center items-center">
            <p className="text-base w-full text-center font-bold border-b dark:border-[#262d38] pb-2 ">
              프로필 설정
            </p>
            <div
              onClick={closeModal}
              className="flex flex-col w-full text-center justify-center items-center  text-brand-sub font-medium text-sm"
            >
              <p
                className="hover:text-brand w-full dark:hover:text-brand-dark py-3 border-b dark:border-[#262d38]"
                onClick={editorHandler}
              >
                프로필 사진 변경
              </p>
              <p
                className="hover:text-brand w-full dark:hover:text-brand-dark py-3 border-b dark:border-[#262d38]"
                onClick={editLoginInf}
              >
                회원정보 변경
              </p>
              <p
                className="hover:text-brand w-full dark:hover:text-brand-dark py-3 border-b dark:border-[#262d38]"
                onClick={editLoginInf}
              >
                로그인 정보 변경
              </p>
              <p
                className="hover:text-red-600 w-full  py-3 border-b dark:border-[#262d38]"
                onClick={onLogOut}
              >
                로그아웃
              </p>
              <p
                className="hover:text-red-600 w-full  pt-3"
                onClick={closeModal}
              >
                취소
              </p>
            </div>
          </div>
        </Modal>
      )}
      <div
        onClick={openModal}
        className="bg-brand-point hover:opacity-50 cursor-pointer dark:bg-card-dark dark:hover:bg-card-hover text-base text-right rounded-lg p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 w-6`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
    </>
  );
};
