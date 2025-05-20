import { useEffect, useState } from "react";

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
      <p className="text-center font-bold m-1 mb-2 text-lg dark:text-brand-dark text-brand-sub">
        게시글
      </p>
      <div className="grid grid-cols-3 gap-1">
        {postList.map((item) => (
          <div
            key={item.id}
            className="grid grid-rows-[2fr_1fr] aspect-square border rounded-md cursor-pointer"
          >
            <div className="flex justify-center items-center ">
              <p className="text-2xl font-bold text-brand dark:text-brand-dark">
                {item.title}
              </p>
            </div>
            <div className="flex h-full rounded-b-md flex-col justify-between bg-brand-point dark:bg-card-dark p-2">
              <article className="text-sm line-clamp-3">{item.article}</article>
              <div className="text-left text-sm">{item.createAt}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
