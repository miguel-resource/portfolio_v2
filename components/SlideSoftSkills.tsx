import { useEffect } from 'react';
import s from './components.module.scss';
import { useTranslations } from 'next-intl';

type Props = {
  translationSoftSkills: any;
};

const SlideSoftSkills = (props: Props) => {
  const { translationSoftSkills } = props;
  const listSoftSkills = translationSoftSkills;

  useEffect(() => {
    console.log(translationSoftSkills);
  }, []);

  return (
    <div className={s.soft__skills}>
      <ul>
        {/* renderiza considerando que es un objeto */}
        {Object.keys(listSoftSkills).map((key) => (
          <li key={key}>
            <p className={s.details}>{listSoftSkills[key]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlideSoftSkills;
