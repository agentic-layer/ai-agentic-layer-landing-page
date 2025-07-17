import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import commonDE from './locales/de/common.json';
import commonEN from './locales/en/common.json';
import heroDE from './locales/de/hero.json';
import heroEN from './locales/en/hero.json';
import benefitsDE from './locales/de/benefits.json';
import benefitsEN from './locales/en/benefits.json';
import architectureDE from './locales/de/architecture.json';
import architectureEN from './locales/en/architecture.json';
import ctaDE from './locales/de/cta.json';
import ctaEN from './locales/en/cta.json';
import openSourceDE from './locales/de/opensource.json';
import openSourceEN from './locales/en/opensource.json';

const resources = {
  de: {
    common: commonDE,
    hero: heroDE,
    benefits: benefitsDE,
    architecture: architectureDE,
    cta: ctaDE,
    opensource: openSourceDE,
  },
  en: {
    common: commonEN,
    hero: heroEN,
    benefits: benefitsEN,
    architecture: architectureEN,
    cta: ctaEN,
    opensource: openSourceEN,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de', // default language
    fallbackLng: 'de',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;