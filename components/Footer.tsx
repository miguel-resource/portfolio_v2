"use client";
import gsap from "gsap";
import { useEffect } from "react";
import  s  from './components.module.scss';

const Footer = () => {

  useEffect(() => {

    let ctx = gsap.fromTo(
      "footer",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
      }
    );
  
  }, []);

  return (
    <footer
      className={s.footer}>
      <p className={s.label}>Miguel Ángel Bermúdez Cruz</p>
    </footer>
  );
};

export default Footer;
