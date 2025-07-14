import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from './ThemeProvider';
import * as THREE from 'three';

interface ParticleWaveProps {
  currentPhase: 'chaos' | 'harmony' | 'transition';
}

const PARTICLE_COUNT = 1500;

function Particles({ currentPhase }: ParticleWaveProps) {
  const mesh = useRef<THREE.Points>(null);
  const [startTime] = useState(() => Date.now());
  
  // Velocity arrays for free movement
  const velocities = useMemo(() => {
    const vels = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      vels[i * 3] = (Math.random() - 0.5) * 0.03; // x velocity
      vels[i * 3 + 1] = (Math.random() - 0.5) * 0.03; // y velocity  
      vels[i * 3 + 2] = (Math.random() - 0.5) * 0.03; // z velocity
    }
    return vels;
  }, []);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Initialize particles randomly in 3D space
      positions[i * 3] = (Math.random() - 0.5) * 20; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
    }
    
    return positions;
  }, []);

  const originalPositions = useMemo(() => {
    return Float32Array.from(particlesPosition);
  }, [particlesPosition]);

  const targetPositions = useMemo(() => {
    return new Float32Array(PARTICLE_COUNT * 3);
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;

    const elapsed = (Date.now() - startTime) / 1000;
    const time = state.clock.elapsedTime;
    
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;

    if (currentPhase === 'chaos') {
      // Free-flying chaotic movement with persistent velocities
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        
        // Keep velocities constant for linear movement
        
        // Apply velocities to positions
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];
        
        // Bounce off boundaries instead of clamping
        if (positions[i3] > 12 || positions[i3] < -12) {
          velocities[i3] *= -0.8;
          positions[i3] = Math.max(-12, Math.min(12, positions[i3]));
        }
        if (positions[i3 + 1] > 7 || positions[i3 + 1] < -7) {
          velocities[i3 + 1] *= -0.8;
          positions[i3 + 1] = Math.max(-7, Math.min(7, positions[i3 + 1]));
        }
        if (positions[i3 + 2] > 7 || positions[i3 + 2] < -7) {
          velocities[i3 + 2] *= -0.8;
          positions[i3 + 2] = Math.max(-7, Math.min(7, positions[i3 + 2]));
        }
      }
    } else if (currentPhase === 'harmony') {
      // Multi-wave formation
      const gridSize = Math.sqrt(PARTICLE_COUNT);
      
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        const row = Math.floor(i / gridSize);
        const col = i % gridSize;
        
        // Normalize to -1 to 1 range
        const x = (col / gridSize) * 2 - 1;
        const z = (row / gridSize) * 2 - 1;
        
        // Create multiple overlapping waves
        const wave1 = Math.sin(x * 3 + time * 0.5) * 0.8;
        const wave2 = Math.sin(z * 2 + time * 0.3) * 0.6;
        const wave3 = Math.sin((x + z) * 1.5 + time * 0.7) * 0.4;
        const wave4 = Math.sin(x * 4 - z * 2 + time * 0.4) * 0.3;
        
        // Combine waves for complex surface
        const y = (wave1 + wave2 * 0.7 + wave3 * 0.5 + wave4 * 0.3) * 1.5;
        
        // Set target positions
        targetPositions[i3] = x * 8; // Spread horizontally
        targetPositions[i3 + 1] = y; // Wave height
        targetPositions[i3 + 2] = z * 8; // Spread in depth
        
        // Smooth interpolation to targets
        positions[i3] += (targetPositions[i3] - positions[i3]) * 0.05;
        positions[i3 + 1] += (targetPositions[i3 + 1] - positions[i3 + 1]) * 0.05;
        positions[i3 + 2] += (targetPositions[i3 + 2] - positions[i3 + 2]) * 0.05;
      }
    } else if (currentPhase === 'transition') {
      // Smooth direct transition between chaos and harmony
      const gridSize = Math.sqrt(PARTICLE_COUNT);
      
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        const row = Math.floor(i / gridSize);
        const col = i % gridSize;
        
        const x = (col / gridSize) * 2 - 1;
        const z = (row / gridSize) * 2 - 1;
        
        // Calculate harmonic wave positions directly
        const wave1 = Math.sin(x * 3 + time * 0.5) * 0.8;
        const wave2 = Math.sin(z * 2 + time * 0.3) * 0.6;
        const wave3 = Math.sin((x + z) * 1.5 + time * 0.7) * 0.4;
        const wave4 = Math.sin(x * 4 - z * 2 + time * 0.4) * 0.3;
        const y = (wave1 + wave2 * 0.7 + wave3 * 0.5 + wave4 * 0.3) * 1.5;
        
        // Set harmonic positions as targets for smooth transition
        targetPositions[i3] = x * 8;
        targetPositions[i3 + 1] = y;
        targetPositions[i3 + 2] = z * 8;
        
        // Faster interpolation during transition
        positions[i3] += (targetPositions[i3] - positions[i3]) * 0.08;
        positions[i3 + 1] += (targetPositions[i3 + 1] - positions[i3 + 1]) * 0.08;
        positions[i3 + 2] += (targetPositions[i3 + 2] - positions[i3 + 2]) * 0.08;
      }
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
        color="#ffffff"
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export const ParticleWave: React.FC = () => {
  const { theme } = useTheme();
  const [currentPhase, setCurrentPhase] = useState<'chaos' | 'harmony' | 'transition'>('chaos');
  const [startTime] = useState(() => Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100; // Start transition after 100px scroll
      
      if (scrollY === 0) {
        // At very top - chaos mode
        setCurrentPhase('chaos');
      } else if (scrollY < scrollThreshold) {
        // Transitioning from top
        setCurrentPhase('transition');
      } else {
        // Scrolled down - harmony mode
        setCurrentPhase('harmony');
      }
    };

    // Set initial phase based on current scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we're in dark mode
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <div className="relative w-full h-full particle-wave">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ 
          background: '#000000',
          width: '100%',
          height: '100%'
        }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Particles currentPhase={currentPhase} />
      </Canvas>
      
      {/* Text overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Chaos mode content - centered */}
        <div 
          className={`flex items-center justify-center h-full transition-opacity duration-1000 ${
            currentPhase === 'chaos' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center px-4 max-w-5xl space-y-8">
            <h1 className="headline-text mb-8">
              Runter vom PoC,<br />Rauf auf die<br />Produktiv-Pipeline!
            </h1>
            <p className="subheadline-text">
              Deine Agenten brauchen mehr als nur ein Dockerfile.
            </p>
          </div>
        </div>
        
        {/* Harmony mode content - centered */}
        <div 
          className={`flex items-center justify-center h-full transition-opacity duration-1000 absolute top-0 left-0 right-0 ${
            currentPhase === 'harmony' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center px-4 max-w-5xl space-y-8">
            <div className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/b65e98a0-a093-4a19-89e1-3152a8fd961c.png" 
                alt="Agentic Layer Logo" 
                className="w-48 h-auto mx-auto mb-8"
              />
              <h1 className="headline-text mb-8 text-center">
                <span className="hidden md:inline">Meet the Agentic Layer.<br />Your Control Plane for Intelligent Workloads.</span>
                <span className="md:hidden">Meet the<br />Agentic Layer.<br />Your Control Plane  for Intelligent Workloads.</span>
              </h1>
            </div>
            <p className="subheadline-text">
              Verwandle isolierte KI-Agenten in eine Enterprise-grade Workforce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};