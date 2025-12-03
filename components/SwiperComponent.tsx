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
import { Slide } from "@mui/material";

type Props = {
  communication: string;
  initiative: string;
  adaptability: string;
  teamwork: string;
  creativity: string;
  criticalThinking: string;
};

const SwiperComponent = (props: Props) => {
  const { communication, initiative, adaptability, teamwork, creativity, criticalThinking } = props;

  return (
    <section className={s.home__view__experience__container__hardSkills}>
      <SlideHardSkills />
      {/* <SlideSoftSkills 
        communication={communication}
        initiative={initiative}
        adaptability={adaptability}
        teamwork={teamwork}
        creativity={creativity}
        criticalThinking={criticalThinking}
      /> */}
    </section>
  );
};

export default SwiperComponent;
