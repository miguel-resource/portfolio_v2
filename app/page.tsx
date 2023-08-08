"use client";
import Image from "next/image";
import { Button } from "@mui/material";
import s from "./app.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/modules";
import "swiper/css";

export default function Home() {
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
        <h3>FullStack Developer</h3>
        <p>
          Experienced Software Engineer with a strong focus on frontend
          development and additional backend capabilities for <b>FullStack</b> work.
          Proficient in Windows, macOS, and Linux operating systems.
          Enthusiastic about learning and collaborating within diverse teams.
          Currently, expanding skills in mobile apps and augmented reality,
          while maintaining excellence in web development.
        </p>

        <section className={s.home__info__swiper}>
          <Swiper navigation={true} modules={[Navigation]}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
}
