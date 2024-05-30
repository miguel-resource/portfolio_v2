// "use client";
import s from "@/app/[locale]/app.module.scss";
import JobItems from "./JobItems";
import SwiperComponent from "./SwiperComponent";
import ButtonDownload from "./ButtonDownload";

type Props = {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    description3: string;
    comunication: string;
    initiative: string;
    adaptability: string;
    teamwork: string;
    creativity: string;
    criticalThinking: string;
    resume: string;
};

export const ContentView = (props: Props) => {

    const {
        title,
        subtitle,
        description1,
        description2,
        description3,
        comunication,
        initiative,
        adaptability,
        teamwork,
        creativity,
        criticalThinking,
        resume
    } = props;


    return (
        <div
            className={s.home__view}>
            <section className={s.home__view__experience}>
                <div className={s.home__view__experience__container}>
                    <SwiperComponent
                        communication={comunication}
                        initiative={initiative}
                        adaptability={adaptability}
                        teamwork={teamwork}
                        creativity={creativity}
                        criticalThinking={criticalThinking}
                    />  
                    <JobItems
                        title={title}
                        subtitle={subtitle}
                        description1={description1}
                        description2={description2}
                        description3={description3}
                    />
                    <ButtonDownload download={resume}/>
                </div>
            </section>
        </div>
    );
}