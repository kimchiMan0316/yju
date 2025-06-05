import { Button } from "../../button/button";
import useChange from "../../../hooks/useChange";
import { useMyProfile } from "../../../store/myprofile";
import { useFetch } from "../../../hooks/useFetch";
import { createAt } from "../../../util/createAt";

// articleId = 게시글 id
// url 댓글을 저장해야하는 테이블
// getComment 댓글 작성 완료 후 바로 볼 수 있도록 댓글 내용 가져오기

export const CommentForm = ({ articleId, url, getComment }) => {
  const { inputValue, setInputValue, onChange } = useChange({
    comment: "",
  });
  const { id, username } = useMyProfile((state) => state.myProfile);
  const { response, fetcher } = useFetch();

  const createComment = async () => {
    const key = url === "/postComment" ? "postId" : "semesterId";

    try {
      await fetcher({
        url: url,
        method: "POST",
        body: {
          userId: id,
          username: username,
          [key]: articleId,
          article: inputValue.comment,
          createAt: createAt(),
        },
      });

      if (typeof getComment === "function") {
        getComment(response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setInputValue({ comment: "" });
    }
  };

  return (
    <div className="flex flex-col gap-4 border-t py-8 my-10 border-[#ededed] dark:border-[#27303d]">
      <p className="text-lg font-bold">댓글</p>
      <textarea
        value={inputValue.comment}
        onChange={(e) => onChange(e, "comment")}
        className="px-4 py-2 rounded-md resize-none w-full border border-[#ededed] dark:border-[#27303d] focus:outline-none dark:bg-card-hover "
        placeholder="댓글 달기..."
      />
      <Button onClick={createComment} className="w-full sm:w-32 self-end">
        댓글 작성
      </Button>
    </div>
  );
};
