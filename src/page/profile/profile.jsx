import { useLoaderData } from "react-router-dom";
import { Container } from "../../components/container/container";
import { MyProfileArea } from "./components/myProfileArea";
import { ProfileArea } from "./components/profileArea";
import { ArticleArea } from "./components/articleArea";

export const Profile = () => {
  const { username, message, id, me } = useLoaderData();

  console.log(username, message, id, me);

  return (
    <Container>
      {me ? <MyProfileArea /> : <ProfileArea />}
      <ArticleArea id={id} />
    </Container>
  );
};
