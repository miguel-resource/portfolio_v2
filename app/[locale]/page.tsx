'use client';

import s from "./app.module.scss";
import { useTranslations } from "next-intl";
import HeaderHome from '../../components/HeaderHome';
import { ContentView } from "@/components/ContentView";

export default function Home() {
  
  const translationHome = useTranslations("home");
  const translationSwiper = useTranslations("swiper");
  const translateExperience = useTranslations("experience");
  const translationProjects = useTranslations("projects");
  const translationSwiperObject = {
    'initiative': translationSwiper('initiative'),
    'adaptability': translationSwiper('adaptability'),
    'creativity': translationSwiper('creativity'),
    'communication': translationSwiper('communication'),
    'teamwork': translationSwiper('teamwork'),
  };
  const translationResume = useTranslations("resume");

  return (
    <div className={s.home}>
      <HeaderHome 
        summary={translationHome('summary')}
        me={useTranslations("navbar")("me")}
        experience={useTranslations("navbar")("experience")}
        projects={useTranslations("navbar")("projects")}
        resume={useTranslations("navbar")("resume")}
        translationSwiperObject={translationSwiperObject}
      />
      <ContentView
        title={translateExperience('title')}
        subtitle={translateExperience('subtitle')}
        description1={translateExperience('description1')}
        description2={translateExperience('description2')}
        description3={translateExperience('description3')}
        comunication={translationSwiper('communication')}
        initiative={translationSwiper('initiative')}
        adaptability={translationSwiper('adaptability')}
        teamwork={translationSwiper('teamwork')}
        creativity={translationSwiper('creativity')}
        criticalThinking={translationSwiper('criticalThinking')}
        resume={translationResume('download')}
        projectsTitle={translationProjects('title')}
        projectsSubtitle={translationProjects('subtitle')}
      />
    </div>
  );
}
