import { useNavigate } from "react-router-dom";
import { checkSession } from "./auth";

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

  return children;
};

export default ProtectedRoute;
