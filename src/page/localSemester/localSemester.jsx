import { useEffect, useState } from "react";
import { PostViewer } from "../../components/form/postForm/postViewer";
import { Container } from "../../components/container/container";
import { CommentForm } from "../../components/form/commentForm/commentForm";
import { CommentBox } from "../../components/box/commentBox";

export const LocalSemester = () => {
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function createComments(commentList) {
      try {
        await Promise.all(
          commentList.map((comment) =>
            fetch(comment.url, { signal })
              .then((res) => res.json())
              .then((res) => comment.action(res))
          )
        );
      } catch (error) {
        console.error("요청 실패:", error);
      }
    }

    const comments = [
      { url: "/post/2", action: (e) => setPost(e) },
      { url: `/postComment?postId=2`, action: (e) => setComments(e) },
    ];
    createComments(comments);

    return () => controller.abort();
  }, []);

  return (
    <>
      {post && (
        <>
          <Container className="p-4 ">
            <PostViewer item={post} />
          </Container>
          <Container className="p-4 ">
            <CommentForm articleId={post?.id} url="/postComment" />
            <CommentBox comment={comments} url="/postComment" />
          </Container>
        </>
      )}
    </>
  );
};
