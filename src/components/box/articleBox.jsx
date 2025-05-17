import { useNavigate } from "react-router-dom";
import { Button } from "../button/button";

export const ArticleBox = ({ className, children, title, photo }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/profile/2");
  };

  return (
    <div className={`rounded-xl ${className}`}>
      <div>{title}</div>
      <Button className="w-28" onClick={onClick}>
        2번 프로필
      </Button>
      {children}
    </div>
  );
};
