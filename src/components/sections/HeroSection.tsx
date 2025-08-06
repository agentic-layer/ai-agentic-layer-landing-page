
import React from 'react';
import { ParticleWave } from '@/components/ParticleWave';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function HeroSection() {
  const animationRef = useScrollReveal({ delay: 200 });

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center py-20 pt-32">
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
