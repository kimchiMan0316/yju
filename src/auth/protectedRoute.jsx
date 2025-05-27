import { useNavigate } from "react-router-dom";
import { checkSession } from "./auth"; // 세션 확인 함수 가져오기

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const mySession = async () => {
    const session = await checkSession();

    if (!session) {
      navigate("/login", { replace: true });
      return;
    }
  };
  mySession();

  return children; // 세션이 유효하면 자식 컴포넌트를 반환
};

export default ProtectedRoute;
