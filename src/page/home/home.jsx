import { Container } from "../../components/container/container";
import { PageContainer } from "../../components/container/pageContainer";
import { Modal } from "../../components/modal/modal";
import { useModal } from "../../hooks/useModal";
import { VideoLayerComponent } from "./components/videoLayer";
import { LongBox } from "../../components/box/longBox";
import { Introduce } from "./components/introduce";
import { GoodThing } from "./components/goodThing";
import { EndPoint } from "./components/endPoint";

export const Home = () => {
  const { isModal, openModal, closeModal } = useModal();

  return (
    <>
      <PageContainer>
        {isModal && (
          <Modal closeModal={closeModal}>
            <h1>모달입니다.</h1>
          </Modal>
        )}
        <Container page={true} className="bg-brand">
          <VideoLayerComponent />
          {/* "w-full h-48 flex justify-between items-center" */}
          <div className="md:grid md:grid-cols-2 flex flex-col gap-2 mt-2">
            <LongBox
              title="현지학기제"
              article="일본에서 보내는 방학생활을 알아봐요"
              to="/localSemester"
            >
              <img
                className="w-[4.5rem] h-[4.5rem] mr-1"
                src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png?type=thumb&opt=C72x72.fwebp"
                alt="나팔"
              />
            </LongBox>
            <LongBox
              title="게시판"
              article="친구들과 자유롭게 소통해요!"
              to="/post"
            >
              <img
                className="w-20 h-20"
                src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6565ef4d017800001.png?type=thumb&opt=C72x72.fwebp"
                alt="백열등"
              />
            </LongBox>
          </div>
        </Container>
      </PageContainer>

      <Introduce />
      <GoodThing />
      <EndPoint />
    </>
  );
};
