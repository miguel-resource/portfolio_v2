"use client";
import gsap from "gsap";
import { useEffect } from "react";
import  s  from './components.module.scss';
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {

  useEffect(() => {

    let ctx = gsap.fromTo(
      "footer",
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out", 
      }
    );
  
  }, []);

  return (
    <footer
      className={s.footer}>
      <p className={s.label}>
        © 2023 Miguel Ángel Bermúdez Cruz
      </p>
      {/* Icons */}
      <div className={s.icons}>
        <ul>
          <li>
            <a href="" target="_blank">
              <GitHub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/miguel-ángel-bermúdez-cruz-797395192/" target="_blank">
              <LinkedIn />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
