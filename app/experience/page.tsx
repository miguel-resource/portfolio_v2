'use client';
import { useEffect, useRef } from 'react';
import s from './../app.module.scss';
import gsap from 'gsap';

const Experience = () => {
  const experience = [
    {
      company: 'Empresa 1',
      jobTitle: 'Puesto en Empresa 1',
      jobDescription: 'Descripción de tu experiencia en la empresa 1.',
      stack: ['Tecnología 1', 'Tecnología 2']
    },
    {
      company: 'Empresa 2',
      jobTitle: 'Puesto en Empresa 2',
      jobDescription: 'Descripción de tu experiencia en la empresa 2.',
      stack: ['Tecnología 1', 'Tecnología 2']
    },
    {
      company: 'Empresa 3',
      jobTitle: 'Puesto en Empresa 3',
      jobDescription: 'Descripción de tu experiencia en la empresa 3.',
      stack: ['Tecnología 1', 'Tecnología 2']
    },
  ];


  useEffect(() => {
    const selectItem = document.querySelectorAll(`.${s.experience__container__boxes__item}`);
    gsap.fromTo(
      selectItem,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
  }, []);


  return (
    <section className={s.experience}>
    <div className={s.experience__container}>
      <div className={s.experience__container__boxes}>
        {experience.map((item, index) => (
          <div key={index} className={s.experience__container__boxes__item} >
            <div className={s.experience__container__boxes__item__point}>{index + 1}</div>
            <div className={s.experience__container__boxes__item__card}>
              <h3 className={s.experience__container__boxes__item__card__title}>{item.jobTitle}</h3>
              <p>{item.jobDescription}</p>
            </div>
            <div className={s.experience__container__boxes__item__line}></div>
            <div className={s.experience__container__boxes__item__stack}>
              {item.stack.map((item, index) => (
                <div key={index} >
                  {item}
                  </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Experience;