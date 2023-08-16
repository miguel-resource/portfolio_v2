"use client"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideHardSkills from "./SlideHardSkills";
import SlideSoftSkills from "./SlideSoftSkills";
import { Autoplay, Pagination } from "swiper/modules";
import s from "./components.module.scss";

const SwiperComponent = () => {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className={s.home__info__swiper__container}
      modules={[Pagination, Autoplay]} // add autoplay
    >
      <SwiperSlide className={s.home__info__swiper__container__slide}>
        <SlideHardSkills />
      </SwiperSlide>
      <SwiperSlide className={s.home__info__swiper__container__slide}>
        <SlideSoftSkills />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
