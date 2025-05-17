import { useEffect, useState } from "react";

export const useGet = ({ url }) => {
  const [state, setState] = useState({
    loading: true,
    error: false,
  });

  useEffect(() => {
    const getFetch = async () => {
      try {
        const request = await fetch(url);
        const response = await request.json();
        if (response.length > 0) {
          setState(response);
        } else {
          throw new Error("에러발생");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFetch();
  }, [url]);

  return { state };
};
