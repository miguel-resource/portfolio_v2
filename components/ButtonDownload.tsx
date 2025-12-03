"use client";
import DowloadIcon from "@mui/icons-material/Download";
import s from "./../app/[locale]/app.module.scss";
import { useEffect } from "react";
import gsap from "gsap";

type Props = {
  download: string;
};

const ButtonDownload = (props: Props) => {
  const { download } = props;
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/17v1SIRebgWSbb0WvrwU_ZDGYAn1GJdZH/view?usp=share_link";
    link.target = "_blank";
    link.download = "CV.pdf";

    link.click();

    document;
  };

  useEffect(() => {
    const selectButton = document.querySelectorAll(
      `.${s.resume__container__button}`
    );
    gsap.to(selectButton, {
      opacity: 1,
      duration: 0.2,  
      y: -20,
      stagger: 0.1,
      ease: "power3.inOut",
      })
  } ,[]);

  return (
    <div className={s.resume__container} id="resume">
      <button
        className={`${s.resume__container__button} opacity-0 dark:text-slate-300 dark:bg-white`}
        onClick={handleDownload}
      >
        {download} <DowloadIcon 
          className={`${s.resume__container__button__icon} dark:text-slate-300`}
        />
      </button>
    </div>
  );
};

export default ButtonDownload;
