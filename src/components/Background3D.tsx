'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  radius: number;
  vx: number;
  vy: number;
  vz: number;
  color: string;
  glowColor: string;
  alpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  isSpecial?: boolean;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  color: string;
  width: number;
}

export default function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const handleResize = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Color palette for cosmic theme
    const colors = [
      { core: '#FFFFFF', glow: '#38BDF8' }, // Electric Cyan
      { core: '#F8FAFC', glow: '#818CF8' }, // Indigo Glow
      { core: '#DDD6FE', glow: '#C084FC' }, // Nebula Purple
      { core: '#FDE68A', glow: '#F59E0B' }, // Warm Amber
      { core: '#93C5FD', glow: '#3B82F6' }, // Deep Sapphire
    ];

    const PARTICLE_COUNT = 180;
    const MAX_DEPTH = 1500;
    const particles: Particle[] = [];

    // Spawn 3D Particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const colorObj = colors[Math.floor(Math.random() * colors.length)];
      const isSpecial = Math.random() > 0.85;
      particles.push({
        x: (Math.random() - 0.5) * width * 2.5,
        y: (Math.random() - 0.5) * height * 2.5,
        z: Math.random() * MAX_DEPTH + 10,
        baseX: 0,
        baseY: 0,
        radius: isSpecial ? Math.random() * 2.2 + 1.8 : Math.random() * 1.4 + 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: Math.random() * 0.8 + 0.4, // Moving forward towards camera
        color: colorObj.core,
        glowColor: colorObj.glow,
        alpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
        isSpecial,
      });
    }

    // Meteors / Shooting stars system
    const meteors: Meteor[] = [];
    const createMeteor = (): Meteor => {
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.2; // Slanted down-right
      return {
        x: Math.random() * width * 1.2 - width * 0.2,
        y: -50,
        length: Math.random() * 120 + 80,
        speed: Math.random() * 10 + 12,
        angle,
        alpha: 1,
        color: Math.random() > 0.5 ? '#38BDF8' : '#A855F7',
        width: Math.random() * 2 + 1,
      };
    };

    let time = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.08;
      targetMouseY = (e.clientY - height / 2) * 0.08;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      time += 0.015;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // Deep Space Base & Floating Nebula Gradients
      const baseGrad = ctx.createLinearGradient(0, 0, 0, height);
      baseGrad.addColorStop(0, '#020617');
      baseGrad.addColorStop(0.5, '#070A1C');
      baseGrad.addColorStop(1, '#030712');
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // Nebula 1 (Cyan/Blue Cloud)
      const neb1X = width * 0.3 + Math.sin(time * 0.4) * 80 + mouseX * 2;
      const neb1Y = height * 0.4 + Math.cos(time * 0.3) * 60 + mouseY * 2;
      const neb1Grad = ctx.createRadialGradient(neb1X, neb1Y, 0, neb1X, neb1Y, width * 0.5);
      neb1Grad.addColorStop(0, 'rgba(14, 165, 233, 0.12)');
      neb1Grad.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)');
      neb1Grad.addColorStop(1, 'transparent');
      ctx.fillStyle = neb1Grad;
      ctx.fillRect(0, 0, width, height);

      // Nebula 2 (Purple/Violet Cloud)
      const neb2X = width * 0.75 + Math.cos(time * 0.35) * 90 - mouseX * 2;
      const neb2Y = height * 0.6 + Math.sin(time * 0.45) * 70 - mouseY * 2;
      const neb2Grad = ctx.createRadialGradient(neb2X, neb2Y, 0, neb2X, neb2Y, width * 0.45);
      neb2Grad.addColorStop(0, 'rgba(168, 85, 247, 0.11)');
      neb2Grad.addColorStop(0.5, 'rgba(139, 92, 246, 0.04)');
      neb2Grad.addColorStop(1, 'transparent');
      ctx.fillStyle = neb2Grad;
      ctx.fillRect(0, 0, width, height);

      // Occasional Meteor Spawn
      if (Math.random() < 0.015 && meteors.length < 3) {
        meteors.push(createMeteor());
      }

      // Render Meteors
      for (let m = meteors.length - 1; m >= 0; m--) {
        const meteor = meteors[m];
        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;
        meteor.alpha -= 0.008;

        if (meteor.alpha <= 0 || meteor.y > height + 100 || meteor.x > width + 100) {
          meteors.splice(m, 1);
          continue;
        }

        const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length;
        const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length;

        const mGrad = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
        mGrad.addColorStop(0, meteor.color);
        mGrad.addColorStop(0.3, meteor.color);
        mGrad.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = mGrad;
        ctx.lineWidth = meteor.width;
        ctx.globalAlpha = meteor.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = meteor.color;
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      }

      const fov = 380;
      const projectedParticles: Array<{
        px: number;
        py: number;
        scale: number;
        p: Particle;
      }> = [];

      // Update & Project Particles
      particles.forEach((p) => {
        // Move towards camera (3D flight)
        p.z -= p.vz * 1.8;
        p.x += p.vx;
        p.y += p.vy;

        // Reset position when passing camera or straying too far
        if (p.z <= 1) {
          p.z = MAX_DEPTH;
          p.x = (Math.random() - 0.5) * width * 2.5;
          p.y = (Math.random() - 0.5) * height * 2.5;
        }

        // 3D Perspective Projection
        const scale = fov / (fov + p.z);
        const projX = width / 2 + (p.x + mouseX * (1 + p.z * 0.001)) * scale;
        const projY = height / 2 + (p.y + mouseY * (1 + p.z * 0.001)) * scale;

        // Keep inside render buffer
        if (projX >= -50 && projX <= width + 50 && projY >= -50 && projY <= height + 50) {
          projectedParticles.push({ px: projX, py: projY, scale, p });
        }
      });

      // Draw Constellation Connection Lines in 3D Space
      for (let i = 0; i < projectedParticles.length; i++) {
        const p1 = projectedParticles[i];
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p2 = projectedParticles[j];

          const dx = p1.p.x - p2.p.x;
          const dy = p1.p.y - p2.p.y;
          const dz = p1.p.z - p2.p.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < 180) {
            const lineAlpha = (1 - dist3D / 180) * 0.18 * p1.scale;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = p1.p.glowColor;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.7 * p1.scale;
            ctx.stroke();
          }
        }
      }

      // Render Individual Particles
      projectedParticles.forEach(({ px, py, scale, p }) => {
        p.pulsePhase += p.pulseSpeed;
        const pulse = Math.sin(p.pulsePhase) * 0.3 + 0.7;
        const size = Math.max(0.6, p.radius * scale * 2.8 * pulse);
        const currentAlpha = Math.min(1, p.alpha * scale * 1.6 * pulse);

        ctx.globalAlpha = currentAlpha;

        // Outer Glow for special/larger particles
        if (p.isSpecial || scale > 0.6) {
          ctx.beginPath();
          ctx.arc(px, py, size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = p.glowColor;
          ctx.globalAlpha = currentAlpha * 0.25;
          ctx.fill();
        }

        // Particle Core
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentAlpha;
        ctx.shadowBlur = p.isSpecial ? 15 : 6;
        ctx.shadowColor = p.glowColor;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 bg-slate-950"
    />
  );
}

