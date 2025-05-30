import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/home/home";
import { Profile } from "../page/profile/profile";
import { Post } from "../page/post/post";
import Login from "../page/login/login";
import { CreateAccount } from "../page/createAccount/create_Account";
import DefaultLayout from "../components/laytout/defaultLayout";
import { PostList } from "../page/post/postList";
import { Member } from "../page/member/member";
import { LocalSemester } from "../page/localSemester/localSemester";
import { ErrorPage } from "../page/error/error";
import { profileLoader } from "./api/profileLoader";
import { Account } from "../page/account/account";
import { UpdatePost } from "../page/post/updatePost";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
        loader: profileLoader,
      },
      {
        // 무한스크롤 구현할 부분 리스트 페이지 구분없이 스크롤로 구현 예정
        path: "/post",
        element: <PostList />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/postEdit/:id",
        element: <UpdatePost />,
      },
      {
        path: "/member",
        element: <Member />,
      },
      {
        path: "/localSemester",
        element: <LocalSemester />,
      },
      {
        path: "/account/:id",
        element: <Account />,
        loader: "",
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
