import React from 'react';
import {motion} from 'motion/react';
import heroTechArt from '../hero-tech-visual.png';

interface HeroTechVisualProps {
  isMobile: boolean;
}

const luminanceMask: React.CSSProperties = {
  WebkitMaskImage: `url(${heroTechArt})`,
  maskImage: `url(${heroTechArt})`,
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
  WebkitMaskMode: 'luminance',
  maskMode: 'luminance',
};

const floatTransition = {
  duration: 7.5,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

export const HeroTechVisual: React.FC<HeroTechVisualProps> = ({isMobile}) => {
  const left = isMobile ? '58%' : '78%';
  const bottom = isMobile ? '44px' : '64px';
  const width = isMobile ? 'min(94vw, 400px)' : 'min(54vw, 640px)';
  const scale = isMobile ? 1.02 : 1.12;
  const perspectiveTilt = isMobile
    ? 'perspective(900px) rotateY(-6deg) rotateX(3deg)'
    : 'perspective(1100px) rotateY(-10deg) rotateX(4deg)';

  return (
    <div
      id="hero-tech-visual"
      className="absolute inset-0 pointer-events-none select-none overflow-visible"
      style={{zIndex: 2}}
      aria-hidden
    >
      <motion.div
        className="absolute origin-bottom"
        style={{
          left,
          bottom,
          width,
          transform: `translateX(-50%) scale(${scale}) ${perspectiveTilt}`,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: [0, -11, 5, -7, 0],
          x: [0, 5, -4, 3, 0],
          rotateZ: [0, 0.35, -0.28, 0.15, 0],
        }}
        transition={floatTransition}
      >
        {/* Ground shadow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-[2%] w-[72%] h-[14%] rounded-[100%] opacity-50"
          style={{
            background: 'radial-gradient(ellipse, rgba(60,20,8,0.55) 0%, transparent 72%)',
            filter: 'blur(18px)',
          }}
        />

        {/* Ambient orange bloom */}
        <div
          className="absolute left-[6%] right-[-2%] top-[16%] bottom-[4%] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at 54% 48%, rgba(255,120,60,0.38) 0%, rgba(196,67,21,0.12) 50%, transparent 74%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="relative w-full aspect-[3/2]">
          {/* Emissive halo — luminance mask removes black matte */}
          <img
            src={heroTechArt}
            alt=""
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain object-center pointer-events-none mix-blend-screen opacity-50 scale-[1.05]"
            style={{
              ...luminanceMask,
              filter: 'blur(20px) saturate(1.25) brightness(1.2)',
            }}
            referrerPolicy="no-referrer"
          />

          {/* Main 3D art — true transparency via luminance mask, no black box */}
          <img
            src={heroTechArt}
            alt=""
            draggable={false}
            className="relative z-10 w-full h-full object-contain object-center pointer-events-none"
            style={{
              ...luminanceMask,
              filter:
                'saturate(1.06) contrast(1.05) brightness(1.02) drop-shadow(0 32px 60px rgba(45,14,6,0.5)) drop-shadow(0 0 52px rgba(255,99,49,0.28))',
            }}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Sparkles */}
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#FF6331]"
            style={{
              width: 3,
              height: 3,
              left: `${22 + i * 24}%`,
              top: `${30 + i * 12}%`,
              boxShadow: '0 0 10px 2px rgba(255,99,49,0.75)',
            }}
            animate={{opacity: [0.25, 0.95, 0.35], scale: [0.85, 1.15, 0.9]}}
            transition={{
              duration: 3.2 + i * 0.7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};
