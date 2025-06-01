import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { CustomImage } from "./components/customImageExtansion";
import { fromNow } from "../../../util/fromNow";
import FontSize from "./components/customFontSize";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { ProfilePhotoContainer } from "../../container/profilePhotoContainer";
import { useModal } from "../../../hooks/useModal";
import { OptionModal } from "../../modal/optionModal";
import { useFetch } from "../../../hooks/useFetch";
import { Modal } from "../../modal/modal";
import { useNavigate } from "react-router-dom";

export const PostViewer = ({ item, me, url, deletePosting }) => {
  const { isModal, openModal, closeModal } = useModal();
  const { response, fetcher } = useFetch();
  const navigate = useNavigate();

  const editor = useEditor({
    extensions: [
      StarterKit,
      CustomImage,
      FontSize,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: item.src,
    editable: false,
  });

  const list = [
    {
      name: "삭제하기",
      action: async () => {
        await fetcher({ url: `${url}/${item.id}`, method: "DELETE" });
        if (response?.photoId) {
          await fetch(`/photo/${response?.photoId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
        }
        deletePosting();
        closeModal();
      },
    },
    {
      name: "수정하기",
      action: () => {
        navigate(`/postEdit/${item.id}`);
      },
    },
  ];

  useEffect(() => {
    if (item?.src && editor) {
      editor.commands.setContent(item.src);
    }
  }, [item, editor]);

  if (!editor) return null;

  return (
    <>
      {isModal && (
        <Modal closeModal={closeModal}>
          <OptionModal list={list} closeModal={closeModal}>
            게시글 수정하기
          </OptionModal>
        </Modal>
      )}
      <div className="min-w-[500px] h-full overflow-scroll relative">
        <div className="w-full">
          <div className="flex justify-between border-b border-[#ededed] pb-4 mb-4  dark:border-brand-sub">
            <div className="flex gap-4 items-center justify-start ">
              <ProfilePhotoContainer
                id={item.userId}
                width="10"
                alt="프로필사진"
              />
              <div className="h-10">
                <p>{item.username}</p>
                <p className="text-sm text-brand-sub">
                  {fromNow(item.createAt)}
                </p>
              </div>
            </div>
            <div className="self-center">
              {me && (
                <div onClick={openModal}>
                  <SettingIcon className="hover:opacity-70 hover:bg-brand-point dark:hover:bg-card-hover w-8 rounded" />
                </div>
              )}
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center pt-4 pb-8">
          {item.title}
        </h1>
        <p className="text-right text-xs text-brand-sub  pb-10">
          작성일 : {item.createAt}
        </p>
        <EditorContent editor={editor} />
      </div>
    </>
  );
};

const SettingIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`size-6` + className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
};
