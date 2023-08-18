"use client";
import { useEffect, useState } from "react";
import s from "./../app/[locale]/app.module.scss";
import gsap from "gsap";
import HelpIcon from "@mui/icons-material/Help";
import { Box, Modal } from "@mui/material";
import ModalInfo from "./ModalInfo";

type Props = {
  translateExperience: any;
};

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#bd514a",
  p: 4,
};


const JobItems = (props: Props) => {
  const { translateExperience } = props;
  const [activeStackIndex, setActiveStackIndex] = useState(-1);
  const experience = [
    {
      title: "Ezaudita Startup",
      position: "FullStack Developer",
      jobDescription: translateExperience.description1,
      img: "ezaudita",
      stack: {
        "react": ["ReactJS", "Sass", "TailwindCSS", "AntDesign", "Typescript"],
        "python": ["Chalice", "Pytest", "Stripe"],
        "aws": ["S3", "CloudWatch"],
        "bash": ["Git", "AWS CLI", "Stripe CLI"]
      }
    },
    {
      title: "Yastas Gentera",
      position: "Frontend Developer",
      jobDescription: translateExperience.description2,
      img: "yastas",
      stack: {
        "angular": ["Material", "SASS", "Bootstrap", "Typescript"],
        "python": ["Flask", "Pytest"],
        "bash": ["Git"]
      }
    },
    {
      title: "Fullstack Developer",
      jobDescription: translateExperience.description3,
      img: "freelances",
      stack: {
        "angular": ["Material", "SASS", "Bootstrap", "Typescript"],
        "firebase": ["Firestore", "Authentication", "Storage"],
        "tailwind": ["TailwindCSS"],
      }
    },
  ];

  const toggleInfo = (index: number) => {
    if (activeStackIndex === index) {
      return setActiveStackIndex(-1);
    }
    setActiveStackIndex(index);
  };
  useEffect(() => {
    const selectItem = document.querySelectorAll(
      `.${s.experience__container__boxes__item}`
    );
    gsap.fromTo(
      selectItem,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className={s.experience__container__boxes}>
      {experience.map((item, index) => (
        <div key={index} className={s.experience__container__boxes__item}>
          <div className={s.experience__container__boxes__item__point}>
            {index + 1}
          </div>
          <div
            className={`${s.experience__container__boxes__item__card} bg-slate-300 border-blue-950 dark:bg-slate-800 dark:border-blue-400 `}
          >
            <div className={s.experience__container__boxes__item__card__header}>
              <h3 className={s.experience__container__boxes__item__card__header__title}>
                {item.title}
              </h3>
              <button
                className={s.experience__container__boxes__item__card__btn}
                onClick={() => toggleInfo(index)}
              >
                <HelpIcon/>
              </button>
            </div>
            <p>
              {
                item.jobDescription.length > 100 ?
                item.jobDescription.substring(0, 250) + "..."
                :
                item.jobDescription
              }
            </p>
          </div>
          <ModalInfo 
            activeStackIndex={activeStackIndex}
            index={index}
            setActiveStackIndex={setActiveStackIndex}
            item={item}
          />
          <div className={s.experience__container__boxes__item__line}></div>
        </div>
      ))}
    </div>
  );
};

export default JobItems;
