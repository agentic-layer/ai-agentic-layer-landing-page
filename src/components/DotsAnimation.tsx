import React, { useEffect, useRef, useState } from 'react';

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
  const [phase, setPhase] = useState<'chaos' | 'transition' | 'harmony'>('chaos');
  const dotsRef = useRef<Dot[]>([]);
  const startTimeRef = useRef<number>(Date.now());

  const DOT_COUNT = 80;
  const DOT_SIZE = 4;
  const TRANSITION_DURATION = 1000; // 1 second transition

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize dots
    const initializeDots = () => {
      dotsRef.current = [];
      for (let i = 0; i < DOT_COUNT; i++) {
        dotsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          targetX: 0,
          targetY: 0,
          originalX: 0,
          originalY: 0,
        });
      }
    };

    // Calculate wave positions
    const calculateWavePositions = () => {
      const centerY = canvas.height / 2;
      const amplitude = canvas.height * 0.15;
      const frequency = 2 * Math.PI / canvas.width;
      
      dotsRef.current.forEach((dot, index) => {
        const spacing = canvas.width / (DOT_COUNT - 1);
        const x = index * spacing;
        const y = centerY + Math.sin(x * frequency) * amplitude;
        
        dot.targetX = x;
        dot.targetY = y;
        dot.originalX = dot.x;
        dot.originalY = dot.y;
      });
    };

    // Resize canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initializeDots();
    };

    // Animation loop
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTimeRef.current;

      // Clear canvas
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Phase transitions
      if (elapsed > 5000 && phase === 'chaos') {
        setPhase('transition');
        calculateWavePositions();
      }

      // Update dots based on phase
      dotsRef.current.forEach((dot, index) => {
        if (phase === 'chaos') {
          // Chaotic movement
          dot.x += dot.vx;
          dot.y += dot.vy;

          // Bounce off edges
          if (dot.x <= DOT_SIZE || dot.x >= canvas.width - DOT_SIZE) {
            dot.vx *= -1;
          }
          if (dot.y <= DOT_SIZE || dot.y >= canvas.height - DOT_SIZE) {
            dot.vy *= -1;
          }

          // Keep dots in bounds
          dot.x = Math.max(DOT_SIZE, Math.min(canvas.width - DOT_SIZE, dot.x));
          dot.y = Math.max(DOT_SIZE, Math.min(canvas.height - DOT_SIZE, dot.y));
        } else if (phase === 'transition') {
          // Smooth transition to wave
          const transitionProgress = Math.min((elapsed - 5000) / TRANSITION_DURATION, 1);
          const eased = 1 - Math.pow(1 - transitionProgress, 3); // Ease out cubic
          
          dot.x = dot.originalX + (dot.targetX - dot.originalX) * eased;
          dot.y = dot.originalY + (dot.targetY - dot.originalY) * eased;

          if (transitionProgress >= 1) {
            setPhase('harmony');
          }
        } else if (phase === 'harmony') {
          // Harmonic wave movement
          const time = (elapsed - 6000) * 0.001;
          const waveOffset = Math.sin(time * 0.5) * 20;
          const verticalFloat = Math.sin(time * 2 + index * 0.1) * 8;
          
          dot.x = dot.targetX + waveOffset;
          dot.y = dot.targetY + verticalFloat;
        }

        // Draw dot
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_SIZE, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    animate();

    // Handle resize
    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [phase]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ background: '#000000' }}
    />
  );
};
