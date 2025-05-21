import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { clearSession } from "../../auth/auth";

export const SideMenuBar = ({ state, close }) => {
  const navigate = useNavigate();

  const page = [
    {
      path: "/",
      label: "홈",
    },
    {
      path: "/localSemester",
      label: "현지학기",
    },
    {
      path: "/post",
      label: "게시판",
    },
    {
      path: "/member",
      label: "조원소개",
    },
  ];

  const onLogOut = () => {
    clearSession();
    navigate("/login", { replace: true });
  };

  return (
    <AnimatePresence>
      {state && (
        <div className="fixed z-40 bg-black/20 top-0 left-0 w-screen h-screen">
          <motion.div
            className="fixed z-50 right-0 top-0 h-screen w-72 bg-[#ededed] backdrop-blur-lg  dark:bg-card-dark md:hidden"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100vw", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex flex-col justify-between h-screen items-stretch">
              <nav className="mt-20 gap-2 flex flex-col justify-center items-center">
                {page.map((item, index) => (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-red-700" : ""
                    }
                    key={index}
                    to={item.path}
                  >
                    <p className="text-lg font-semibold py-2">{item.label}</p>
                  </NavLink>
                ))}
              </nav>

              <div className="text-center mb-2 flex-col gap-2 flex text-lg font-semibold py-2">
                <p className="cursor-pointer">설정</p>
                <p
                  onClick={onLogOut}
                  className="hover:text-red-700 cursor-pointer"
                >
                  로그아웃
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
