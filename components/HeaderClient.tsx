'use client';

import { useTranslations } from 'next-intl';
import { Header } from './Header';

export function HeaderClient() {
  const t = useTranslations('navbar');
  
  return (
    <Header
      me={t('me')}
      experience={t('experience')}
      projects={t('projects')}
      resume={t('resume')}
    />
  );
}
