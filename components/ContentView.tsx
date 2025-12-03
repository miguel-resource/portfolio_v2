// "use client";
import s from "@/app/[locale]/app.module.scss";
import JobItems from "./JobItems";
import SwiperComponent from "./SwiperComponent";
import ButtonDownload from "./ButtonDownload";
import ProjectsSection from "./ProjectsSection";

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
    projectsTitle: string;
    projectsSubtitle: string;
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
        resume,
        projectsTitle,
        projectsSubtitle
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
                        translateExperience={{
                            description1,
                            description2,
                            description3
                        }}
                    />
                    <ProjectsSection
                        title={projectsTitle}
                        subtitle={projectsSubtitle}
                    />
                    <ButtonDownload download={resume}/>
                </div>
            </section>
        </div>
    );
}