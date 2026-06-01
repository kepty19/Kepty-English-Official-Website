import React from 'react';
import {motion} from 'motion/react';
import heroTechArt from '../hero-tech-visual-cutout.png';

interface HeroTechVisualProps {
  isMobile: boolean;
}

const floatTransition = {
  duration: 7,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

export const HeroTechVisual: React.FC<HeroTechVisualProps> = ({isMobile}) => {
  const left = isMobile ? '50%' : '80%';
  const bottom = isMobile ? '56px' : '72px';
  const height = isMobile ? '50%' : '75%';
  const scale = isMobile ? 0.92 : 1.25;

  return (
    <div
      id="hero-tech-visual"
      className="absolute inset-0 pointer-events-none select-none overflow-visible"
      aria-hidden
    >
      <motion.div
        id="hero-tech-visual-stage"
        className="absolute flex items-end justify-center overflow-visible origin-bottom"
        style={{
          left,
          bottom,
          height,
          width: isMobile ? 'min(100vw, 520px)' : 'min(58vw, 720px)',
          zIndex: 20,
          transform: `translateX(-50%) scale(${scale})`,
          willChange: 'transform',
        }}
        animate={{y: [0, -10, 4, -6, 0]}}
        transition={floatTransition}
      >
        <img
          src={heroTechArt}
          alt=""
          draggable={false}
          className="w-full h-full object-contain object-bottom pointer-events-none"
          style={{
            filter: 'drop-shadow(0 24px 48px rgba(35,10,4,0.4))',
          }}
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  );
};
