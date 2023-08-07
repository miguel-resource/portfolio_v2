import Image from "next/image";
import { Button } from "@mui/material";
import s from "./app.module.scss";

export default function Home() {
  return (
    <div className={s.home}>
      <div className={s.home__avatar}>
        <Image
          src="/images/yo.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          style={{ borderRadius: "100%" }}
        />
      </div>
    </div>
  );
}
