import { useEffect } from 'react';
import s from './components.module.scss';


const SlideSoftSkills = () => {
  const listSoftSkills = [
    'Comunicación',
    'Iniciativa',
    'Adaptabilidad',
    'Pensamiento crítico',
    'Creatividad'
  ];

  useEffect(() => {
    console.log('SlideSoftSkills');
  }, []);


  return (
    <div className={s.soft__skills}>
      <ul>
        {listSoftSkills.map((item, index) => (
          <li key={index} className='text-slate-800 dark:text-slate-300 hover:text-slate-600'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlideSoftSkills;
