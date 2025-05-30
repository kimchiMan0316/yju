import { useEffect, useState } from "react";
import { PostViewer } from "../../components/form/postForm/postViewer";
import { Container } from "../../components/container/container";

export const LocalSemester = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch("/post/2")
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      });
  }, []);

  return (
    <>
      <Container className="p-4">
        {response && <PostViewer item={response} />}
      </Container>
    </>
  );
};
