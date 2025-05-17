import { useState } from "react";

export const ArticleArea = ({ id }) => {
  // id기반으로 글 검색
  const [postList, setPostList] = useState([
    {
      id: 1,
      title: "글 1",
      article: "addgsdkflgjslkdfjglks",
      createAt: "2025/04/12-12:12:12",
    },
    {
      id: 2,
      title: "글 2",
      article: "addgsdkflgjslkdfjglks",
      createAt: "2025/04/12-12:12:12",
    },
    {
      id: 3,
      title: "글 3",
      article: "addgsdkflgjslkdfjglks",
      createAt: "2025/04/12-12:12:12",
    },
  ]);

  return (
    <div className="border-t-2 border-[#ededed] dark:border-[#191b22]">
      <p className="text-center font-bold m-1 mb-2 text-lg dark:text-brand-dark text-brand-sub">
        게시글
      </p>
      <div className="grid grid-cols-3 gap-1">
        <div className="bg-red-500 aspect-square rounded-md">1</div>
        {postList.map((item) => (
          <div key={item.id} className="grid grid-rows-2 aspect-square">
            <div className="">
              <p>{item.title}</p>
            </div>
            <div className="bg-brand-point">
              <article>{item.article}</article>
              <p>{item.createAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
