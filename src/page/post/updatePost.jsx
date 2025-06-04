import { useNavigate, useParams } from "react-router-dom";
import MyEditor from "../../components/form/postForm/postForm";
import { useEffect, useState } from "react";
import { useMyProfile } from "../../store/myprofile";

export const UpdatePost = ({ url }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const { id: myId } = useMyProfile((state) => state.myProfile);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getPost = async () => {
      try {
        const req = await fetch(`${url}/${id}`, {
          signal,
        });
        const res = await req.json();
        if (res.userId !== myId) {
          navigate("/");
          alert("수정권한이 없습니다.");
        }

        setResponse(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();

    return () => controller.abort();
  }, [id, myId, navigate, url]);

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
