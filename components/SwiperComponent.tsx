"use client"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideHardSkills from "./SlideHardSkills";
import SlideSoftSkills from "./SlideSoftSkills";
import { Autoplay, Pagination } from "swiper/modules";
import s from "./components.module.scss";
import { useEffect } from "react";

type Props = {
  translationSwiper: any;
};

const SwiperComponent = (props: Props) => {
  const { translationSwiper } = props;

  useEffect(() => {
    console.log(translationSwiper);
  }
  , []);

  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      style={{ width: "100%", height: "100%" }}
      className={s.home__info__swiper__container}
      modules={[Pagination, Autoplay]} // add autoplay
    >
      <SwiperSlide className={s.home__info__swiper__container__slide}>
        <SlideHardSkills />
      </SwiperSlide>
      <SwiperSlide className={s.home__info__swiper__container__slide}>
        <SlideSoftSkills  translationSoftSkills={translationSwiper}/>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
