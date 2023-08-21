import s from "./app.module.scss";
import { useTranslations } from "next-intl";
import HeaderHome from '../../components/HeaderHome';

export default function Home() {

  const translationHome = useTranslations("home");
  const translationSwiper = useTranslations("swiper");
  const translationSwiperObject = {
    'initiative': translationSwiper('initiative'),
    'adaptability': translationSwiper('adaptability'),
    'creativity': translationSwiper('creativity'),
    'communication': translationSwiper('communication'),
    'teamwork': translationSwiper('teamwork'),
  };


  return (
    <div className={s.home}>
      <HeaderHome 
        summary={translationHome('summary')}
        translationSwiperObject={translationSwiperObject}
      />
    </div>
  );
}
