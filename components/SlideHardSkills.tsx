"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";
import {
  faReact,
  faAngular,
  faPython,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faTerminal } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useEffect } from "react";
import s from "./components.module.scss";

const SlideHardSkills = () => {
  const listHardSkills = [
    {
      name: "React",
      icon: faReact,
      details:
        "Typescript, NextJS, Redux Toolkit, Material UI, Tailwind CSS, Styled Components",
    },
    {
      name: "Angular",
      icon: faAngular,
      details: "Typescript, Angular Material, Tailwind CSS, Styled Components",
    },
    {
      name: "Python",
      icon: faPython,
      details: "Flask, Chalice, Unit Testing, SqlAlchemy",
    },
    {
      name: "AWS",
      icon: faAws,
      details: "CloudWatch, S3, EC2",
    },
    {
      name: "DataBase",
      icon: faDatabase,
      details: "PostgreSQL, MySQL, Firebase",
    },
    {
      name: "Bash/Zsh",
      icon: faTerminal,
      details: "Git, Docker, Nginx, Linux",
    },
  ];

  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "white",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "white",
      color: "black",
      fontSize: 12,
      textAlign: "center",
      paddingX: 1,
    },
  }));

  useEffect(() => {
    let itemHardSkill = document.querySelectorAll(`.${s.hard__skills} li`);
    let itemP = document.querySelectorAll(`.${s.hard__skills} ${s.name}`);
    gsap.fromTo(
      itemHardSkill,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
    gsap.fromTo(
      itemP,
      {
        opacity: 0,
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
    <ul className={s.home__view__experience__container__hardSkills__container}>
      {listHardSkills.map((item, index) => {
        return (
          <li key={index}>
            <BootstrapTooltip title={item.details} placement="top">
              <div className="text-slate-900 dark:text-slate-100">
                <FontAwesomeIcon icon={item.icon} className={s.icon} />
                <p className={s.name}>{item.name}</p>
              </div>
            </BootstrapTooltip>
          </li>
        );
      })}
    </ul>
  );
};

export default SlideHardSkills;
