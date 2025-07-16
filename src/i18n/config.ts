import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import deCommon from './locales/de/common.json';
import deHero from './locales/de/hero.json';
import deBenefits from './locales/de/benefits.json';
import deArchitecture from './locales/de/architecture.json';
import deOpenSource from './locales/de/openSource.json';
import deCta from './locales/de/cta.json';
import deHeader from './locales/de/header.json';
import deImpressum from './locales/de/impressum.json';

import enCommon from './locales/en/common.json';
import enHero from './locales/en/hero.json';
import enBenefits from './locales/en/benefits.json';
import enArchitecture from './locales/en/architecture.json';
import enOpenSource from './locales/en/openSource.json';
import enCta from './locales/en/cta.json';
import enHeader from './locales/en/header.json';
import enImpressum from './locales/en/impressum.json';

const resources = {
  de: {
    common: deCommon,
    hero: deHero,
    benefits: deBenefits,
    architecture: deArchitecture,
    openSource: deOpenSource,
    cta: deCta,
    header: deHeader,
    impressum: deImpressum,
  },
  en: {
    common: enCommon,
    hero: enHero,
    benefits: enBenefits,
    architecture: enArchitecture,
    openSource: enOpenSource,
    cta: enCta,
    header: enHeader,
    impressum: enImpressum,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    defaultNS: 'common',
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;