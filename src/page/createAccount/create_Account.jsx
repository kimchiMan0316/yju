import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import useChange from "../../hooks/useChange";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/untityLogo.png";
import dayjs from "dayjs";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/modal/modal";
import { CreateAccountModal } from "./components/modal";

export const CreateAccount = () => {
  const { inputValue, setInputValue, onChange } = useChange({
    username: "",
    userId: "",
    checkedId: true,
    password: "",
    checkPassword: "",
  });
  const navigate = useNavigate();
  const { isModal, openModal, closeModal } = useModal();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      inputValue.username.length < 1 ||
      inputValue.userId.length < 4 ||
      inputValue.password.length < 4
    ) {
      alert("회원가입 정보를 적절하게 입력해주세요.");
      return;
    }
    if (inputValue.password !== inputValue.checkPassword) {
      alert("비밀번호를 재확인 해주세요.");
      return;
    }

    const createAccount = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: inputValue.username,
        userId: inputValue.userId,
        password: inputValue.password,
        state: 1,
        createAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        profilePhoto: "",
        message: "",
      }),
    });
    const res = await createAccount.json();
    console.log(res);

    if (typeof res.id === "number") {
      openModal();
    } else {
      alert("회원가입 정보를 확인해보세요.");
    }
  };

  // 아이디 중복 체크
  const checkId = (e) => {
    onChange(e, "userId");
    const id = e.target.value;

    fetch(`http://localhost:5000/user?userId=${id}`)
      .then((data) => data.json())
      .then((response) => {
        if (response.length > 0) {
          setInputValue((state) => {
            return {
              ...state,
              checkedId: false,
            };
          });
        } else {
          setInputValue((state) => {
            return {
              ...state,
              checkedId: true,
            };
          });
        }
      });
  };

  const modalHandler = () => {
    navigate("/login", { replace: true });
    closeModal();
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center ">
      {isModal && (
        <Modal closeModal={closeModal} className="p-10">
          <CreateAccountModal value={inputValue} onClick={modalHandler} />
        </Modal>
      )}
      <div className="w-48 mb-4">
        <img className="object-cover" src={logo} alt="logo" />
      </div>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
        className="w-96"
      >
        <h1 className="text-brand font-bold text-3xl my-8 ml-2">회원가입</h1>
        <Input
          value={inputValue.username}
          className="bg-[#ededed] border-none"
          onChange={(e) => onChange(e, "username")}
        >
          이름
        </Input>
        <Input
          value={inputValue.userId}
          className="bg-[#ededed] border-none"
          onChange={(e) => checkId(e)}
          error={!inputValue.checkedId}
          message="이미 사용중인 아이디입니다."
        >
          아이디
        </Input>
        <Input
          value={inputValue.password}
          className="bg-[#ededed] border-none"
          onChange={(e) => onChange(e, "password")}
        >
          비밀번호
        </Input>
        <Input
          value={inputValue.checkPassword}
          className="bg-[#ededed] border-none "
          onChange={(e) => onChange(e, "checkPassword")}
        >
          비밀번호 재확인
        </Input>
        <Button type="submit" className="w-full my-2">
          회원가입
        </Button>
      </form>
      <Link
        to="/login"
        className="text-brand-sub text-sm hover:text-stone-400 mt-2"
      >
        이미 계정이 있으신가요?
      </Link>
    </div>
  );
};
