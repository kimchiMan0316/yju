import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import 수업 from "../../../assets/캡스톤사진.jpg";

export const EndPoint = () => {
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });

  // 70vw ~ 100vw (스크롤 진행률 0~1 기준)
  const width = useTransform(scrollYProgress, [0.1, 0.4], ["80vw", "100vw"]);

  return (
    <div ref={target} className="w-screen flex justify-center items-start">
      <motion.div
        className="flex justify-center items-start overflow-hidden relative"
        style={{ width }}
      >
        <img
          className="w-screen object-cover filter dark:brightness-75"
          src={수업}
          alt="수업"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-7xl font-bold">꿈을 위한 도전</h1>
        </div>
      </motion.div>
    </div>
  );
};
