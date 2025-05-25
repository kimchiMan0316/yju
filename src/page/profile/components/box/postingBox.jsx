import { Modal } from "../../../../components/modal/modal";
import { useModal } from "../../../../hooks/useModal";
import { fromNow } from "../../../../util/fromNow";

export const PostingBox = ({ item }) => {
  const { isModal, openModal, closeModal } = useModal();

  return (
    <>
      {isModal && (
        <Modal closeModal={closeModal}>
          <p>모달창 제공</p>
        </Modal>
      )}
      <div
        onClick={openModal}
        className="grid grid-rows-[2fr_1fr] aspect-square border dark:border-[#161b22] rounded-md cursor-pointer hover:opacity-75"
      >
        <div className="flex justify-center items-center ">
          <p className="text-base md:text-xl lg:text-2xl font-bold text-brand line-clamp-1 px-2 dark:text-brand-dark">
            {item.title}
          </p>
        </div>
        <div className="flex h-full rounded-b-md flex-col justify-between bg-brand-point dark:bg-card-dark p-2">
          <article className="text-sm line-clamp-2 text-brand-sub lg:line-clamp-3">
            {item.article}
          </article>
          <div className="text-sm flex pt-1 justify-between border-t-[1px] dark:border-[#0d1117] py-1 text-brand-sub">
            <p>by {item.username}</p>
            <p>{fromNow(item.createAt)}</p>
          </div>
        </div>
      </div>
    </>
  );
};
