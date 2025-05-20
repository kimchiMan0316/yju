import { useEffect, useState } from "react";
import { PostingBox } from "./box/postingBox";

export const ArticleArea = ({ id }) => {
  // id기반으로 글 검색
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const req = await fetch(`http://localhost:5000/post?authorId=${id}`);
        const res = await req.json();

        setPostList(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <div className="border-t-2 border-[#ededed] dark:border-[#191b22]">
      <p className="text-center font-bold m-1 mb-2 text-lg  dark:text-brand-dark text-brand-sub">
        게시글
      </p>
      <div
        className={
          postList.length > 0
            ? "grid grid-cols-3 gap-1"
            : "flex justify-center items-center h-[40vh]"
        }
      >
        {postList.length > 0 ? (
          postList.map((item) => <PostingBox item={item} />)
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="font-bold ">게시글 없음</p>
          </div>
        )}
      </div>
    </div>
  );
};
