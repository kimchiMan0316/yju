import { Container } from "../../components/container/container";
import { PageContainer } from "../../components/container/pageContainer";
import { Modal } from "../../components/modal/modal";
import { useModal } from "../../hooks/useModal";
import { VideoLayerComponent } from "./components/videoLayer";
import { LongBox } from "../../components/box/longBox";
import { Introduce } from "./components/introduce";
import { GoodThing } from "./components/goodThing";
import { EndPoint } from "./components/endPoint";
import { Intro } from "./components/intro";
import 수업사진 from "../../assets/수업사진.jpg";

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
          <div className="md:grid md:grid-cols-2 flex gap-2 mt-2">
            <LongBox
              title="현지학기제"
              article="일본에서 보내는 방학생활을 알아봐요"
              to="/localSemester"
            >
              <img
                className="w-12 h-12 md:w-[4.5rem] md:h-[4.5rem]"
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
                className="w-12 h-12 md:w-[4.5rem] md:h-[4.5rem]"
                src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6565ef4d017800001.png?type=thumb&opt=C72x72.fwebp"
                alt="백열등"
              />
            </LongBox>
          </div>
        </Container>
      </PageContainer>

      <Introduce />
      <Intro
        title="일본어"
        subtitle="일본어 특강"
        src={수업사진}
        alt="수업사진"
      >
        <p>
          일본회사에 취업하기 위해서 일본어학습은 필수입니다.
          <br />
          일본어 특별강의를 운영해 매일매일 일본어를 학습합니다.
        </p>
      </Intro>
      <GoodThing />

      <EndPoint />
    </>
  );
};
