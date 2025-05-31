import { fromNow } from "../../util/fromNow";
import { ProfilePhotoContainer } from "../container/profilePhotoContainer";

// 댓글 배열만 받는 컴포넌트
export const CommentBox = ({ comment, url }) => {
  console.log(comment);

  return (
    <div>
      {comment.map((item) => (
        <div
          key={item.id}
          className="h-auto flex flex-col py-6 border-b border-[#ededed] dark:border-brand-sub"
        >
          <div className="flex items-center">
            <ProfilePhotoContainer width={16} id={item.userId} alt="" />
            <div className="ml-4">
              <p className="font-bold text-lg">{item.username}</p>
              <p className="text-xs text-brand-sub">{fromNow(item.createAt)}</p>
            </div>
          </div>
          <div className="mt-4">
            <p>{item.article}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
