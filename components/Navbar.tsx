"use client";
import gsap from "gsap";
import Link from "next/link";
import LanguageIcon from "@mui/icons-material/Language";
import {
  FormGroup,
  FormControlLabel,
  Switch,
  styled,
  NativeSelect,
  SelectChangeEvent,
  Select,
  MenuItem,
} from "@mui/material";
import s from "./components.module.scss";
import { useEffect, useState } from "react";
import { link } from "fs";

const links = [
  { href: "/", label: "me" },
  { href: "/experience", label: "experience" },
  { href: "/resume", label: "resume" },
];

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,

  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    animation: "$waterAnimation 3s infinite",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: localStorage.getItem("theme") === "dark" ? "#003892" : "#475569",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

interface Props {
  me : string
  experience : string
  resume : string
}

export const Navbar = (props: Props) => {
  const [state, setState] = useState(localStorage.getItem("theme") === "dark" ? true : false);
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "en");
  const prop: keyof Props = "me" || "experience" || "resume";

  useEffect(() => {
    const links = document.querySelectorAll("p");
    const dark = localStorage.getItem("theme") === "dark" ? true : false;
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    gsap.from(links, {
      opacity: 0,
      duration: 0.8,
      y: -20,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    localStorage.getItem("locale") === "es" ? setLocale("es") : setLocale("en");
    const url = window.location.href;
    const urlSplit = url.split("/");
    if (urlSplit[3] === "es") {
      setLocale("es");
    } else {
      setLocale("en");
    }
  }, []);


  const switchHandler = () => {
    if (localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    setState(!state);
  };

  const selectHandler = (event: SelectChangeEvent) => {
    setLocale(event.target.value);
    localStorage.setItem("locale", event.target.value);
    const url = window.location.href;
    const urlSplit = url.split("/");

    if (urlSplit[3] === "es" && event.target.value === "en" || event.target.value === "es" ) {

      if (urlSplit[4] !== undefined) {
        window.location.href = `${urlSplit[0]}//${urlSplit[2]}/${event.target.value}/${urlSplit[4]}`;
      } else {
        if (urlSplit[3] === "es") {
          window.location.href = `${urlSplit[0]}//${urlSplit[2]}/${event.target.value}`;
        } else {
          window.location.href = `${urlSplit[0]}//${urlSplit[2]}/${event.target.value}/${urlSplit[3]}`;
        }
      }
    }
  }

  return (
    <nav className={s.navbar}>
      <div className={s.navbar__links}>
        {links.map(({ href, label }: { href: string; label: string }) => (
          <Link href={href} key={`${href}${label}`} className="text-gray-800 dark:text-gray-300">
            <p
              className="text-gray-800 font-medium dark:text-gray-300 capitalize"
              >
              { label === "me" ? props.me : label === "experience" ? props.experience : props.resume }
              </p>
          </Link>
        ))}
      </div>
      <div className={s.navbar__config}>
        <FormGroup className={s.form}>
          <FormControlLabel
            control={<MaterialUISwitch 
              onChange={switchHandler} 
              checked={state}
              />
            }
            label=""
          />
          <div className={s.language}>
            <LanguageIcon className="text-slate-800 dark:text-slate-300" />
            <Select
              variant="standard"
              color="primary"
              value={locale}
              className="text-slate-800 dark:text-slate-400 dark:font-semibold"
              style={{fontFamily: "IBM Plex Mono", fontSize: "0.75rem", fontWeight: 500}}
              onChange={selectHandler}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Español</MenuItem>
            </Select>
          </div>
        </FormGroup>
      </div>
    </nav>
  );
};
