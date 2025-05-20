import { Link } from "react-router-dom";

export const LongBox = ({ title, article, to, children, className }) => {
  return (
    <div
      className={`flex justify-around items-center h-40 bg-brand-point dark:bg-card-dark rounded-2xl ${className}`}
    >
      <div className="flex items-center">
        {children}
        <div className="flex flex-col ml-4">
          <p className="text-3xl font-bold">{title}</p>
          <p className="text-brand-sub">{article}</p>
        </div>
      </div>
      <Link to={to} className=" text-brand-sub">
        바로가기
      </Link>
    </div>
  );
};
