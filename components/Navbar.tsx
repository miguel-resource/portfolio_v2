"use client";
import s from "@/app/[locale]/app.module.scss";

const links = [
    { href: "/", label: "me" },
    { href: "/experience", label: "experience" },
    { href: "/resume", label: "resume" },
];

type NavbarProps = {
    me: string;
    experience: string;
    resume: string;
};

export const Navbar = (props: NavbarProps) => {

    return (
        <nav className={`${s.home__info__navbar}
        `}>
            {links.map(({ href, label }: { href: string; label: string }) => (
                <li

                    key={`${href}${label}`} className={`${s.home__info__navbar__link} text-slate-900 dark:text-slate-300`}>
                    <p
                    // className="text-gray-800 font-medium dark:text-gray-300 hover:scale-200 transition-transform duration-300 ease-in-out capitalize"
                    >
                        <span
                            className={`
                            bg-slate-900 dark:bg-slate-300
                            dark:text-gray-300`}></span>
                        {label === "me" ? props.me : label === "experience" ? props.experience : props.resume}
                    </p>
                </li>
            ))}
        </nav>

    );
};