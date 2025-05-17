export const Footer = () => {
  const react_icon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K";
  const redux_icon = "https://ko.redux.js.org/img/redux.svg";
  const tailwindcss =
    "https://images.seeklogo.com/logo-png/43/2/tailwind-css-logo-png_seeklogo-434090.png";
  const zustand =
    "https://blog.kakaocdn.net/dn/c6iYkh/btsHGAFFlRR/azRoShzk9xNeTJizFBh2O1/img.png";
  return (
    <div className="w-screen h-36 flex justify-center dark:bg-brand-dark">
      <div className="w-[1200px] h-36 relative border-t-[1px] border-[#ededed] dark:border-[#3d3d3d]">
        <div className="grid grid-cols-2 gap-4 px-2 py-5">
          <div className="text-sm text-[#8b95a1]">
            <p>service | maruta company</p>
            <p>Tech Stack | react redux/toolkit zustand tailwindcss</p>
            <div className="w-full h-10 flex mt-4 items-center">
              <div className="w-8 h-8">
                <img className="w-full" src={react_icon} alt="리액트 로고" />
              </div>
              <div className="w-8 h-8 mx-3">
                <img className="w-full" src={redux_icon} alt="리덕스 로고" />
              </div>
              <div className="w-20 h-8">
                <img
                  className="w-full h-8 object-cover"
                  src={tailwindcss}
                  alt="테일윈드 로고"
                />
              </div>
              <div className="w-20 h-8">
                <img
                  className="w-12 h-8 object-cover"
                  src={zustand}
                  alt="테일윈드 로고"
                />
              </div>
            </div>
          </div>
          <div className="text-sm">
            <p className="text-[#333d4b] dark:text-brand-dark">
              team_untity
              <br />
              Copyright ⓒ Untity2. All Rights Reserved
            </p>
            <p className="pt-3 text-[#8b95a1]">
              영진전문대학교 글로벌캠퍼스 | 영진전문대학교 복현캠퍼스
              <br />
              주소 : 대구광역시 북구 복현로 35 (복현동, 영진전문대학) | 우편번호
              : (41527)
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
