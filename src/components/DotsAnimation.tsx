

import React, { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  originalX: number;
  originalY: number;
}

export const DotsAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const phaseRef = useRef<'chaos' | 'transition' | 'harmony'>('chaos');
  const dotsRef = useRef<Dot[]>([]);
  const startTimeRef = useRef<number>(Date.now());
  const lastPhaseChangeRef = useRef<number>(Date.now());

  const DOT_COUNT = 40;
  const DOT_SIZE = 4;
  const TRANSITION_DURATION = 2000;
  const PHASE_DURATION = 5000; // 5 seconds per phase

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize dots
    const initializeDots = () => {
      dotsRef.current = [];
      const width = canvas.width;
      const height = canvas.height;
      
      console.log('Initializing dots with canvas dimensions:', width, 'x', height);
      
      for (let i = 0; i < DOT_COUNT; i++) {
        dotsRef.current.push({
          x: Math.random() * (width - DOT_SIZE * 4) + DOT_SIZE * 2,
          y: Math.random() * (height - DOT_SIZE * 4) + DOT_SIZE * 2,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          targetX: 0,
          targetY: 0,
          originalX: 0,
          originalY: 0,
        });
      }
    };

    // Calculate wave positions with time-based progression
    const calculateWavePositions = (timeOffset = 0) => {
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;
      const amplitude = Math.min(height * 0.15, 60);
      
      dotsRef.current.forEach((dot, index) => {
        const padding = width * 0.1;
        const availableWidth = width - (padding * 2);
        const x = padding + (availableWidth / (DOT_COUNT - 1)) * index;
        
        const frequency = (2 * Math.PI * 2) / width;
        const wavePhase = timeOffset * 0.002; // Wave progression speed
        const y = centerY + Math.sin(x * frequency + wavePhase) * amplitude;
        
        dot.targetX = Math.max(DOT_SIZE, Math.min(width - DOT_SIZE, x));
        dot.targetY = Math.max(DOT_SIZE, Math.min(height - DOT_SIZE, y));
        
        if (phaseRef.current === 'transition') {
          dot.originalX = dot.x;
          dot.originalY = dot.y;
        }
      });
    };

    // Calculate random chaos positions
    const calculateChaosPositions = () => {
      const width = canvas.width;
      const height = canvas.height;
      
      dotsRef.current.forEach((dot) => {
        dot.targetX = Math.random() * (width - DOT_SIZE * 4) + DOT_SIZE * 2;
        dot.targetY = Math.random() * (height - DOT_SIZE * 4) + DOT_SIZE * 2;
        dot.vx = (Math.random() - 0.5) * 2;
        dot.vy = (Math.random() - 0.5) * 2;
        
        if (phaseRef.current === 'transition') {
          dot.originalX = dot.x;
          dot.originalY = dot.y;
        }
      });
    };

    // Resize canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const minWidth = 400;
      const minHeight = 225;
      
      canvas.width = Math.max(rect.width, minWidth);
      canvas.height = Math.max(rect.height, minHeight);
      
      console.log('Canvas resized to:', canvas.width, 'x', canvas.height);
      
      if (canvas.width > 0 && canvas.height > 0) {
        initializeDots();
      }
    };

    // Animation loop
    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;
      
      if (width === 0 || height === 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const currentTime = Date.now();
      const elapsed = currentTime - startTimeRef.current;
      const timeSinceLastPhaseChange = currentTime - lastPhaseChangeRef.current;

      // Clear canvas
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Phase transitions - ping pong every 5 seconds
      if (timeSinceLastPhaseChange > PHASE_DURATION && phaseRef.current !== 'transition') {
        if (phaseRef.current === 'chaos') {
          console.log('Phase transition: chaos -> transition (to harmony) at', elapsed, 'ms');
          phaseRef.current = 'transition';
          calculateWavePositions(elapsed);
        } else if (phaseRef.current === 'harmony') {
          console.log('Phase transition: harmony -> transition (to chaos) at', elapsed, 'ms');
          phaseRef.current = 'transition';
          calculateChaosPositions();
        }
        lastPhaseChangeRef.current = currentTime;
      }

      let visibleDots = 0;

      // Update dots based on phase
      dotsRef.current.forEach((dot, index) => {
        if (phaseRef.current === 'chaos') {
          // Chaotic movement
          dot.x += dot.vx;
          dot.y += dot.vy;

          // Bounce off edges
          if (dot.x <= DOT_SIZE || dot.x >= width - DOT_SIZE) {
            dot.vx *= -1;
            dot.x = Math.max(DOT_SIZE, Math.min(width - DOT_SIZE, dot.x));
          }
          if (dot.y <= DOT_SIZE || dot.y >= height - DOT_SIZE) {
            dot.vy *= -1;
            dot.y = Math.max(DOT_SIZE, Math.min(height - DOT_SIZE, dot.y));
          }
        } else if (phaseRef.current === 'transition') {
          // Smooth transition
          const transitionProgress = Math.min(timeSinceLastPhaseChange / TRANSITION_DURATION, 1);
          const eased = 1 - Math.pow(1 - transitionProgress, 3);
          
          // Update target positions during transition
          if (dot.targetX !== 0 && dot.targetY !== 0) {
            // For wave transitions, recalculate positions with current time
            if (dot.targetX > width * 0.05 && dot.targetX < width * 0.95) {
              calculateWavePositions(elapsed);
            }
          }
          
          dot.x = dot.originalX + (dot.targetX - dot.originalX) * eased;
          dot.y = dot.originalY + (dot.targetY - dot.originalY) * eased;

          if (transitionProgress >= 1) {
            // Determine next phase based on target positions
            const isWaveTransition = dot.targetX > width * 0.05 && dot.targetX < width * 0.95;
            phaseRef.current = isWaveTransition ? 'harmony' : 'chaos';
            
            if (phaseRef.current === 'chaos') {
              console.log('Phase transition: transition -> chaos at', elapsed, 'ms');
            } else {
              console.log('Phase transition: transition -> harmony at', elapsed, 'ms');
            }
          }
        } else if (phaseRef.current === 'harmony') {
          // Continuous wave movement with progression
          const padding = width * 0.1;
          const availableWidth = width - (padding * 2);
          const baseX = padding + (availableWidth / (DOT_COUNT - 1)) * index;
          
          const frequency = (2 * Math.PI * 2) / width;
          const wavePhase = elapsed * 0.002; // Wave progression speed
          const centerY = height / 2;
          const amplitude = Math.min(height * 0.15, 60);
          
          // Calculate wave position with time-based progression
          const waveY = centerY + Math.sin(baseX * frequency + wavePhase) * amplitude;
          
          // Add gentle floating motion
          const time = elapsed * 0.0005;
          const verticalFloat = Math.sin(time * 2 + index * 0.3) * 8;
          const horizontalFloat = Math.sin(time + index * 0.1) * 20;
          
          dot.x = Math.max(DOT_SIZE, Math.min(width - DOT_SIZE, baseX + horizontalFloat));
          dot.y = Math.max(DOT_SIZE, Math.min(height - DOT_SIZE, waveY + verticalFloat));
        }

        // Count visible dots
        if (dot.x >= 0 && dot.x <= width && dot.y >= 0 && dot.y <= height) {
          visibleDots++;
        }

        // Draw dot
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_SIZE, 0, Math.PI * 2);
        ctx.fill();
      });

      // Debug info every second
      if (Math.floor(elapsed / 1000) !== Math.floor((elapsed - 16) / 1000)) {
        console.log(`Phase: ${phaseRef.current}, Elapsed: ${elapsed}ms, Time since last change: ${timeSinceLastPhaseChange}ms, Visible dots: ${visibleDots}/${DOT_COUNT}`);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start
    resizeCanvas();
    
    const timeoutId = setTimeout(() => {
      if (canvas.width > 0 && canvas.height > 0) {
        animate();
      }
    }, 100);

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      startTimeRef.current = Date.now();
      lastPhaseChangeRef.current = Date.now();
      phaseRef.current = 'chaos';
      console.log('Animation reset due to resize');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ background: '#000000' }}
    />
  );
};

