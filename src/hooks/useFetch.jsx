import { useState } from "react";
import { checkSession } from "../auth/auth";
import { useNavigate } from "react-router-dom";

export const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetcher = async ({ url, method, body }, callback) => {
    if (method === "GET" || method === "DELETE") {
      setLoading(true);

      try {
        const session = await checkSession();
        if (!session) {
          navigate("/login", { replace: true });
          return;
        }

        const request = await fetch(`http://localhost:5000${url}`);
        const response = await request.json();
        if (response.length > 0) {
          setResponse(response);
          setLoading(false);
          if (callback) {
            callback();
          }
          return;
        }
      } catch (error) {}
    }

    setLoading(true);
    try {
      const session = await checkSession();
      if (!session) {
        navigate("/login", { replace: true });
        return;
      }

      const request = await fetch(`http://localhost:5000${url}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const response = await request.json();
      if (response.length > 0) {
        console.log(response);
        setResponse(response);
        if (callback) {
          callback();
        }
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, fetcher };
};
