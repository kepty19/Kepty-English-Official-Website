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

/** Same layout as CarouselItem figurine — correct position on the orange hero */
export const HeroTechVisual: React.FC<HeroTechVisualProps> = ({isMobile}) => {
  const left = isMobile ? '50%' : '80%';
  const bottom = isMobile ? '56px' : '72px';
  /** Landscape art: slightly shorter than figurine height so width stays in the right column */
  const height = isMobile ? '46%' : '62%';
  const maxWidth = isMobile ? 'min(92vw, 400px)' : 'min(46vw, 560px)';
  const scale = isMobile ? 0.92 : 1.25;

  return (
    <div
      id="hero-tech-visual"
      className="absolute inset-0 pointer-events-none select-none overflow-visible"
      aria-hidden
    >
      <motion.div
        id="hero-tech-visual-stage"
        className="absolute flex flex-col items-center justify-end overflow-visible origin-bottom bg-transparent"
        style={{
          left,
          bottom,
          height,
          maxWidth,
          width: 'auto',
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
          className="h-full w-auto max-w-full object-contain object-bottom pointer-events-none bg-transparent"
          style={{
            filter: 'drop-shadow(0 20px 40px rgba(40,12,4,0.35))',
          }}
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  );
};
