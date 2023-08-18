"use client"
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Title = () => {
  const professionHead = useTypewriter({
    words: ["FullStack Developer"],
    typeSpeed: 85,
  });
  const profession = professionHead[0];
  return (
    <h3 className="text-slate-800 dark:text-blue-700">
      {profession}{" "}
      <span>
        <Cursor></Cursor>
      </span>
    </h3>
  );
};

export default Title;
