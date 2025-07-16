
import React from 'react';
import { ParticleWave } from '@/components/ParticleWave';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';

export function HeroSection() {
  const animationRef = useScrollReveal({ delay: 200 });
  const { t } = useTranslation('hero');

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center py-20 pt-32">
      {/* Text content - centered with section padding */}
      <div className="section-padding">
        <div className="container-width text-center">
          <h1 className="headline-text mb-6">
            {t('title')}
          </h1>
          <p className="subheadline-text max-w-4xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </div>
      
      {/* Dots Animation - replacing video */}
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
