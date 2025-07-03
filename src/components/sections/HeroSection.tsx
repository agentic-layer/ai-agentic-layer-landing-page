
import React from 'react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding py-20">
      {/* Text content - centered with its own container */}
      <div className="container-width">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="headline-text">
            Das Gen-AI-Paradoxon
          </h1>
          <p className="subheadline-text max-w-4xl mx-auto">
            Ihre KI-Anwendungen sind brillant, aber sie spielen nicht zusammen. 
            Das Ergebnis ist Lärm, keine Symphonie.
          </p>
        </div>
      </div>
      
      {/* Video Integration - same width as cards below */}
      <div className="container-width mt-16">
        <div className="relative w-full" style={{
          aspectRatio: '16/9'
        }}>
          <video className="w-full h-full object-cover" controls autoPlay muted loop playsInline>
            <source src="https://mqelqevuwjpebvaldcym.supabase.co/storage/v1/object/public/video/dots.mp4" type="video/mp4" />
            Ihr Browser unterstützt das Video-Element nicht.
          </video>
        </div>
      </div>
    </section>
  );
}
