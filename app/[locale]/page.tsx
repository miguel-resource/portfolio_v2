import Image from "next/image";
import s from "./app.module.scss";
import SwiperComponent from '../../components/SwiperComponent';
import Title from './../../components/Title';
import { useTranslations } from "next-intl";

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
      <div className={s.home__info}>
        <Image
          className={s.home__info__img}
          src="/images/yo.jpg"
          alt="Picture of the author"
          width={200}
          height={200}
          style={{ borderRadius: "100%" }}
        />
        <h1>Miguel Ángel Bermúdez Cruz</h1>
        <Title/>
        <p className={s.home__info__description} >
          {translationHome('summary')}
        </p>
        <section className={s.home__info__swiper}>
          <SwiperComponent translationSwiper={translationSwiperObject} />
        </section>
      </div>
    </div>
  );
}
