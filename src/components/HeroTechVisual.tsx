import React from 'react';
import {motion} from 'motion/react';
import heroTechArt from '../hero-tech-visual.png';

interface HeroTechVisualProps {
  isMobile: boolean;
}

const floatTransition = {
  duration: 7,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

/**
 * Layout matches CarouselItem (figurine).
 * IMPORTANT: centering transform lives on a non-motion wrapper — motion `animate={{y}}`
 * replaces the whole transform and previously pushed the asset off-screen.
 */
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
      <div
        id="hero-tech-visual-anchor"
        className="absolute origin-bottom"
        style={{
          left,
          bottom,
          height,
          aspectRatio: '3 / 2',
          zIndex: 20,
          transform: `translateX(-50%) scale(${scale})`,
        }}
      >
        <motion.div
          id="hero-tech-visual-stage"
          className="w-full h-full"
          animate={{y: [0, -10, 4, -6, 0]}}
          transition={floatTransition}
        >
          <img
            src={heroTechArt}
            alt=""
            draggable={false}
            className="w-full h-full object-contain object-bottom pointer-events-none mix-blend-screen"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  );
};
