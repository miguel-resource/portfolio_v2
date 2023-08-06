"use client";
import Link from "next/link";
import s from "./components.module.scss";

const links = [
  { href: "/", label: "Me" },
  { href: "/perfil", label: "Perfil" },
  { href: "/experience", label: "Experiencia" },
  { href: "/contact", label: "Contacto" },
];

export const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div>
        {links.map(({ href, label }) => (
          <Link href={href} key={`${href}${label}`}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
