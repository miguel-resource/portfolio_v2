"use client";
import { Button } from "@mui/material";
import DowloadIcon from "@mui/icons-material/Download";
import s from "./../app/[locale]/app.module.scss";

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
  return (
    <div className={s.resume__container}>
      <Button
        className={s.resume__container__button}
        onClick={handleDownload}
        size="large"
        variant="outlined"
      >
        {download} <DowloadIcon />
      </Button>
    </div>
  );
};

export default ButtonDownload;
