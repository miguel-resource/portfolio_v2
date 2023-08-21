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

  return (
    <Swiper
      spaceBetween={90}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true
      }}
      breakpoints={{
        1600: {
          spaceBetween: 90,
        }
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      style={{ width: "90%", margin: "0 auto" }}
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
