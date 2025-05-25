import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { checkSession } from "./auth"; // 세션 확인 함수 가져오기

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();

  const mySession = async () => {
    const session = await checkSession();
    setAuth(session);

    if (!session) {
      navigate("/login", { replace: true });
      return;
    }
  };
  mySession();

  if (auth === false) {
    return <Navigate to="/login" replace />;
  }

  return children; // 세션이 유효하면 자식 컴포넌트를 반환
};

export default ProtectedRoute;
