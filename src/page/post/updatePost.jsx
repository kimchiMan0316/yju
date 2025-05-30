import { useParams } from "react-router-dom";
import MyEditor from "../../components/form/postForm/postForm";
import { useEffect, useState } from "react";

export const UpdatePost = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  console.log(id);

  useEffect(() => {
    fetch(`/post/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <MyEditor init={response} url="/post" exitPath={-1} post={false} />
      )}
    </div>
  );
};
