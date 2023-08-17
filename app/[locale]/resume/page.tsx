import s from "./../app.module.scss";
import Button from "@mui/material/Button";
import DowloadIcon from "@mui/icons-material/Download";
import { useTranslations } from "next-intl";
import ButtonDownload from '../../../components/ButtonDownload';

const Resume = () => {
  const translationResume = useTranslations("resume");

  return (
    <section className={s.resume}>
      <ButtonDownload download={translationResume('download')}/>
    </section>
  );
};

export default Resume;
