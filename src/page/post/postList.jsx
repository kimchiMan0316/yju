import React, { useRef, useState } from "react";
import { Container } from "../../components/container/container";

export const PostList = () => {
  const textRef = useRef();
  const [input, setInput] = useState([]);
  const [value, setValue] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  const onKeyUp = () => {
    const textarea = textRef.current;

    const textUntilCursor = textarea.value.slice(0, textarea.selectionStart);
    const lineNumber = textUntilCursor.split("\n").length;
    const texts = textarea.value.split("\n");
    console.log(texts);
    console.log("현재 줄 번호:", lineNumber);

    setCurrentLine(lineNumber);

    const newInput = texts.map((item) => ({
      tag: "p",
      article: item,
      style: "min-h-[20px] text-center",
    }));

    setInput(newInput);

    setValue(
      newInput.map((item, index) =>
        React.createElement(
          item.tag,
          {
            key: index,
            className: item.style,
            src: item.src,
            width: item.width,
            height: item.height,
          },
          item.tag === "img" ? null : item.article
        )
      )
    );
  };
  console.log(input);
  console.log(currentLine);

  const onClick = () => {
    const textarea = textRef.current;

    const textUntilCursor = textarea.value.slice(0, textarea.selectionStart);
    const lineNumber = textUntilCursor.split("\n").length;

    setCurrentLine(lineNumber);
  };

  const h1 = (e) => {
    const { name } = e.target;
    input.map((v, i) => (i === currentLine - 1 ? { ...v, tag: name } : v));
  };

  return (
    <>
      <Container>
        <div className=" h-auto grid grid-cols-2">
          <div>
            <div className="flex gap-1 ">
              <button onCLick={h1} className="border border-black">
                T
              </button>
              <button onCLick className="border border-black">
                h1
              </button>
              <button>h2</button>
              <button>h3</button>
            </div>
            <textarea
              ref={textRef}
              placeholder="일력하세요"
              onClick={onClick}
              onKeyUp={onKeyUp}
              className="w-full h-96 bg-stone-400 resize-none border-none outline-none focus:outline-none focus:ring-0 shadow-none bg-transparent p-2 text-black overflow-scroll"
            ></textarea>
          </div>
          <div className="p-2 bg-brand-point">{value}</div>
        </div>
      </Container>
    </>
  );
};
