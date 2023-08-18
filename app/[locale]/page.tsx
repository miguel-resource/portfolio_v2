import Image from "next/image";
import s from "./app.module.scss";
import SwiperComponent from '../../components/SwiperComponent';
import Title from './../../components/Title';
import { useTranslations } from "next-intl";
import ModelThree from '../../components/ModelThree';
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
