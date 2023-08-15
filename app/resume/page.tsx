"use client";
import React, { useEffect } from "react";
import s from "./../app.module.scss";
import Button from "@mui/material/Button";
import DowloadIcon from "@mui/icons-material/Download";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/17v1SIRebgWSbb0WvrwU_ZDGYAn1GJdZH/view?usp=share_link";
    link.target = "_blank";
    link.download = "CV.pdf";

    link.click();

    document;
  };

  return (
    <section className={s.resume}>
      <div className={s.resume__container}>
        <Button
          className={s.resume__container__button}
          onClick={handleDownload}
          size="large"
          variant="outlined"
        >
          Descargar CV <DowloadIcon/>
        </Button>
      </div>
    </section>
  );
};

export default Resume;
