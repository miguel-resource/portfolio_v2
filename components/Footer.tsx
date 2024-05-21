"use client";
import gsap from "gsap";
import { useEffect } from "react";
import  s  from './components.module.scss';
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {

  const socialLinks = [
    {
      name: "GitHub",
      link: "https://github.com/miguel-resource",
      icon: <GitHub />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/miguel-ángel-bermúdez-cruz-797395192/",
      icon: <LinkedIn />,
    },
    {
      name: "Email",
      link: "mailto:miguelbercru27@gmail.com",
      icon: <Email />,
    }
  ];

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
      <p className="block text-slate-800 dark:text-slate-300">
        © 2024 Miguel Bermúdez 
      </p>
      {/* Icons */}
      <div className={s.icons}>
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index} className="hover:scale-90 hover:opacity-75 duration-100 ease-in-out">
              <a href={link.link} target="_blank" className="text-slate-800 ease-in-out dark:text-slate-300 hover:scale-x-95">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
