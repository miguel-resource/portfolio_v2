"use client";
import Image from "next/image";
import s from "./app.module.scss";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Component, use, useEffect, useRef } from "react";
import SlideHardSkills from "./../components/SlideHardSkills";
import SlideSoftSkills from "./../components/SlideSoftSkills";
import { QueryBuilder } from "@mui/icons-material";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { type } from "os";

export default function Home() {
  const summaryRef = useRef(null);

  const professionHead = useTypewriter({
    words: [
      "FullStack Developer",
    ],
    typeSpeed: 85,
  });
  const profession = professionHead[0];

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
        <h3>
          {profession}{" "}
          <span>
            <Cursor></Cursor>
          </span>
        </h3>
        <p className={s.home__info__description} ref={summaryRef}>
          Experienced Software Engineer with a strong focus on frontend
          development and additional backend capabilities for <b>FullStack</b>{" "}
          work. Proficient in Windows, macOS, and Linux operating systems.
          Enthusiastic about learning and collaborating within diverse teams.
          Currently, expanding skills in mobile apps and augmented reality,
          while maintaining excellence in web development.
        </p>

        <section className={s.home__info__swiper}>
          <Swiper
            autoplay={{
              delay: 5000,
            }}
            className={s.home__info__swiper__container}
            modules={[Pagination]} // add autoplay
          >
            <SwiperSlide className={s.home__info__swiper__container__slide}>
              <SlideHardSkills />
            </SwiperSlide>
            <SwiperSlide className={s.home__info__swiper__container__slide}>
              <SlideSoftSkills />
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
}
