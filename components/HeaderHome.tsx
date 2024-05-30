"use client"
import { useEffect } from "react";
import s from "./../app/[locale]/app.module.scss";
import ModelThree from "./ModelThree";
import SwiperComponent from './SwiperComponent';
import Title from './Title';
import gsap from "gsap";
import { Navbar } from "./Navbar";

type Props = {
    summary : string;
    me: string;
    experience: string;
    resume: string;
    translationSwiperObject: any;
};

const HeaderHome = (props: Props) => {
    const { summary, translationSwiperObject } = props;

    useEffect(() => {
        const selectTitle = document.querySelector(`.${s.home__info__title}`);
        const selectDescription = document.querySelector(`.${s.home__info__description}`);

        gsap.from(selectTitle, {
            duration: 1,
            opacity: 0,
            y: 100,
            ease: "power3.out",
        });
        gsap.from(selectDescription, {
            duration: 1,
            opacity: 0,
            y: 100,
            ease: "power3.out",
        });
    }, []);

  return (
    <div className={s.home__info}>
      <h1
        className={`${s.home__info__title} text-slate-500 dark:text-slate-300`}
      >
        Miguel Ángel Bermúdez Cruz
      </h1>
      <Title />
      <p
        className={`${s.home__info__description} text-slate-800 dark:text-slate-300`}
      >
        {summary}
      </p>
      <Navbar me={props.me} experience={props.experience} resume={props.resume} />
    
    </div>
  );
};

export default HeaderHome;
