import Logo from "../../assets/untityLogo.png";
import { DisplayControler } from "../button/displayControler";
import { ProfileButton } from "../button/profileButton";
import { TabButton } from "../button/tabButton";
import { Container } from "../container/container";

export const TopNav = ({ children }) => {
  return (
    <nav className="fixed flex items-center w-screen h-16 border-b bg-white border-b-[#ededed] z-10 dark:border-b-[#282828] dark:bg-brand-dark">
      <Container>
        <div className="flex justify-between items-center ">
          <TabButton to="/" className="w-36 h-14 flex items-center">
            <img src={Logo} className="object-cover" alt="logo" />
          </TabButton>
          <div className="flex">
            <div className="flex w-auto pr-7 gap-1">
              <TabButton to="/">홈</TabButton>
              <TabButton to="/localSemester">현지학기</TabButton>
              <TabButton to="/post">게시판</TabButton>
              <TabButton to="/member">조원소개</TabButton>
            </div>
            <div className="flex items-center gap-4">
              <ProfileButton />
              <DisplayControler />
            </div>
          </div>
        </div>
      </Container>

      {children}
    </nav>
  );
};
