import React from 'react';
import {motion} from 'motion/react';
import heroBall from '../hero-ball.png';

interface HeroTechVisualProps {
  isMobile: boolean;
}

const floatTransition = {
  duration: 6.5,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

export const HeroTechVisual: React.FC<HeroTechVisualProps> = ({isMobile}) => {
  const scale = isMobile ? 0.78 : 1.05;
  const left = isMobile ? '62%' : '80%';
  const height = isMobile ? '48%' : '72%';
  const bottom = isMobile ? '64px' : '80px';

  return (
    <div
      id="hero-tech-visual"
      className="absolute inset-0 pointer-events-none select-none overflow-visible"
      style={{zIndex: 3}}
      aria-hidden
    >
      <motion.div
        className="absolute flex items-end justify-center origin-bottom"
        style={{
          left,
          bottom,
          height,
          width: isMobile ? 'min(88vw, 340px)' : 'min(42vw, 480px)',
          transform: 'translateX(-50%)',
        }}
        animate={{
          y: [0, -12, 5, -6, 0],
          x: [0, 5, -4, 3, 0],
          rotate: [0, 0.5, -0.4, 0.25, 0],
        }}
        transition={floatTransition}
      >
        {/* Soft glow — no box, only light */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[70%] h-[55%] rounded-full bg-[#FF6331]/20 blur-[70px]" />
        </div>

        <div
          className="relative w-full h-full flex items-end justify-center"
          style={{transform: `scale(${scale})`}}
        >
          {/* Smartphone — pure CSS, embedded in UI */}
          <motion.div
            className="relative z-20 w-[42%] max-w-[200px] shrink-0"
            animate={{y: [0, -4, 2, 0]}}
            transition={{...floatTransition, duration: 5}}
          >
            <div className="relative rounded-[2rem] border-[3px] border-white/25 bg-gradient-to-b from-neutral-800 to-neutral-950 p-[7px] shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
              <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[28%] h-[3px] rounded-full bg-white/20" />
              <div className="rounded-[1.4rem] overflow-hidden bg-neutral-950 aspect-[9/19] w-full">
                <div className="h-full w-full bg-gradient-to-b from-neutral-900 via-neutral-950 to-black p-3 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="h-1.5 w-8 rounded-full bg-[#FF6331]/80" />
                    <div className="h-1 w-1 rounded-full bg-white/40" />
                  </div>
                  <div className="mt-1 h-2 w-[70%] rounded-full bg-white/15" />
                  <div className="h-2 w-[55%] rounded-full bg-white/10" />
                  <div className="mt-2 flex-1 rounded-xl border border-[#FF6331]/30 bg-[#FF6331]/10 p-2 flex flex-col gap-1.5">
                    <div className="h-1.5 w-full rounded bg-[#FF6331]/50" />
                    <div className="h-1 w-[80%] rounded bg-white/20" />
                    <div className="h-1 w-[60%] rounded bg-white/15" />
                    <div className="mt-auto flex gap-1">
                      <div className="h-4 flex-1 rounded-md bg-[#FF6331]/40" />
                      <div className="h-4 flex-1 rounded-md bg-white/10" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    <div className="h-5 rounded-md bg-white/8" />
                    <div className="h-5 rounded-md bg-[#FF6331]/25" />
                    <div className="h-5 rounded-md bg-white/8" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 rounded-[2.5rem] border border-white/5 pointer-events-none" />
          </motion.div>

          {/* Soccer ball — cutout asset */}
          <motion.img
            src={heroBall}
            alt=""
            draggable={false}
            className="relative z-30 w-[58%] max-w-[280px] -ml-[8%] mb-[2%] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
            style={{mixBlendMode: 'screen'}}
            animate={{
              y: [0, 6, -5, 0],
              rotate: [0, -2, 1.5, 0],
            }}
            transition={{...floatTransition, duration: 7.5}}
          />
        </div>
      </motion.div>
    </div>
  );
};
