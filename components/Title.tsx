"use client"
import { Cursor, useTypewriter } from "react-simple-typewriter";
import s from "./../app/[locale]/app.module.scss";

const Title = () => {
  const professionHead = useTypewriter({
    words: ["FullStack Developer"],
    typeSpeed: 60,
  });
  const profession = professionHead[0];
  return (
    <h3
      className={`${s.home__info__profession} text-slate-800 dark:text-blue-700`}>
      {profession}{" "}
      <span>
        <Cursor></Cursor>
      </span>
    </h3>
  );
};

export default Title;
