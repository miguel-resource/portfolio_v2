import s from './../app.module.scss';
import JobItems from '../../../components/JobItems';
import { useTranslations } from 'next-intl';

export default function Experience() {

  const t = useTranslations('experience');
  const translateExperience = {
    'description1': t('description1'),
    'description2': t('description2'),
    'description3': t('description3'),
  };


  return (
    <section className={s.experience}>
    <div className={s.experience__container}>
        <JobItems translateExperience={translateExperience}/>
    </div>
  </section>
  );
};

// export default Experience;