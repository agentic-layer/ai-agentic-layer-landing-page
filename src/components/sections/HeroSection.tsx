
import React from 'react';
import { ParticleWave } from '../ParticleWave';
import { useLanguage } from '@/contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleWave />
      
      <div className="relative z-10 container-width section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="headline-text mb-6">
            {t('hero.title')}
          </h1>
          
          <p className="subheadline-text mb-12 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <button className="px-8 py-4 rounded-lg bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
            {t('hero.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}
