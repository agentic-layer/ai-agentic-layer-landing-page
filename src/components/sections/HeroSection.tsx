import React from 'react';
import { ParticleWave } from '@/components/ParticleWave';
export function HeroSection() {
  return <section id="hero" className="min-h-screen flex flex-col justify-center py-20 pt-32">
      {/* Text content - centered with section padding */}
      
      
      {/* Dots Animation - replacing video */}
      <div className="mt-16 section-padding">
        <div className="container-width">
          <div className="relative w-full" style={{
          aspectRatio: '16/9'
        }}>
            <ParticleWave />
          </div>
        </div>
      </div>
    </section>;
}