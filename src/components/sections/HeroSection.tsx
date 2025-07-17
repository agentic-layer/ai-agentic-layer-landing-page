
import React from 'react';
import { ParticleWave } from '@/components/ParticleWave';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

export function HeroSection() {
  const animationRef = useScrollReveal({ delay: 200 });
  const textRef = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center py-20 pt-32">
      <div className="section-padding" ref={textRef}>
        <div className="container-width text-center space-y-8">
          <h1 className="headline-text">
            {t('hero.title')}
          </h1>
          <p className="subheadline-text">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
        </div>
      </div>
      
      <div className="mt-16 section-padding">
        <div className="container-width">
          <div className="relative w-full aspect-[9/16] md:aspect-[16/9]" ref={animationRef}>
            <ParticleWave />
          </div>
        </div>
      </div>
    </section>
  );
}
