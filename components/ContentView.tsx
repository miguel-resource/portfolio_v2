"use client";
import s from "@/app/[locale]/app.module.scss";
import JobItems from "./JobItems";

type Props = {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    description3: string;
};

export const ContentView = (props: Props) => {

    const {
        title,
        subtitle,
        description1,
        description2,
        description3
    } = props;
    

    return (
        <div className="home">
            <section className={s.experience}>
                <div className={s.experience__container}>
                    <JobItems 
                        title={title}
                        subtitle={subtitle}
                        description1={description1}
                        description2={description2}
                        description3={description3}
                    />
                </div>
            </section>
        </div>
    );
}