import { useEffect } from 'react';
import s from './components.module.scss';
import { useTranslations } from 'next-intl';

type Props = {
  communication: string;
  initiative: string;
  adaptability: string;
  teamwork: string;
  creativity: string;
  criticalThinking: string;
};

const SlideSoftSkills = (props: Props) => {
  const listSoftSkills:any = props;

  return (
    <div className={s.soft__skills}>
      <ul
        className={`${s.soft__skills__list}`}
      >
        {Object.keys(listSoftSkills).map((key) => (
          <li key={key}
            className='font-mono text-sm font-semibold text-slate-800 dark:text-blue-100'
          >
            <p className={s.details}>{listSoftSkills[key]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlideSoftSkills;
