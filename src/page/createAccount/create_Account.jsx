import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import useChange from "../../hooks/useChange";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/untityLogo.png";
import { useFetch } from "../../hooks/useFetch";
import dayjs from "dayjs";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/modal/modal";
import { CreateAccountModal } from "./components/modal";

export const CreateAccount = () => {
  const [value, setValue, onChange] = useChange({
    username: "",
    userId: "",
    checkedId: true,
    password: "",
    checkPassword: "",
  });
  const navigate = useNavigate();
  const { fetcher } = useFetch();
  const { isModal, openModal, closeModal } = useModal();

  console.log(value);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      value.username.length < 1 ||
      value.userId.length < 4 ||
      value.password.length < 4
    ) {
      alert("회원가입 정보를 적절하게 입력해주세요.");
      return;
    }
    console.log(value.password, value.checkPassword);
    if (value.password !== value.checkPassword) {
      alert("비밀번호를 재확인 해주세요.");
      return;
    }

    const createAccount = await fetcher({
      url: "/user",
      method: "POST",
      body: {
        username: value.username,
        userId: value.userId,
        password: value.password,
        state: 1,
        createAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        profilePhoto: "",
        message: "",
      },
    });
    if (createAccount) {
      openModal();
      return;
    } else {
      alert("회원가입 정보를 확인해보세요.");
    }
  };

  const checkId = (e) => {
    onChange(e, "userId");
    console.log(value);
    const id = e.target.value;

    fetch(`http://localhost:5000/user?userId=${id}`)
      .then((data) => data.json())
      .then((response) => {
        if (response.length > 0) {
          setValue((state) => {
            return {
              ...state,
              checkedId: false,
            };
          });
          console.log(response[0]);
        } else {
          setValue((state) => {
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
        <Modal closeModal={modalHandler} className="p-10">
          <CreateAccountModal value={value} onClick={modalHandler} />
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
          value={value.username}
          className="bg-[#ededed] border-none"
          onChange={(e) => onChange(e, "username")}
        >
          이름
        </Input>
        <Input
          value={value.userId}
          className="bg-[#ededed] border-none"
          onChange={(e) => checkId(e)}
          error={!value.checkedId}
          message="이미 사용중인 아이디입니다."
        >
          아이디
        </Input>
        <Input
          value={value.password}
          className="bg-[#ededed] border-none"
          onChange={(e) => onChange(e, "password")}
        >
          비밀번호
        </Input>
        <Input
          value={value.checkPassword}
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
