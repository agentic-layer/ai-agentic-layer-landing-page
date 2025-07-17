
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ParticleWave } from '@/components/ParticleWave';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function HeroSection() {
  const animationRef = useScrollReveal({ delay: 200 });
  const textRef = useScrollReveal();
  const { t } = useTranslation('hero');

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center py-20 pt-32">
      {/* Text content - centered with section padding */}
      <div className="section-padding">
        <div className="container-width">
          <div className="text-center space-y-8" ref={textRef}>
            <h1 className="headline-text">
              {t('headline')}
            </h1>
            <h2 className="subheadline-text">
              {t('subheadline')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </div>
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
