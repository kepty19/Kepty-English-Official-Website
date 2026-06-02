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

/**
 * Transparent PNG (no black matte) + figurine layout.
 * z-index 2: sits behind "Kepty English" (z-4), overlaps orange hero only.
 * Static anchor holds translateX/scale — motion only animates y.
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
      style={{zIndex: 2}}
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
            className="w-full h-full object-contain object-bottom pointer-events-none"
            style={{
              filter: 'drop-shadow(0 24px 48px rgba(35,10,4,0.35))',
            }}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  );
};
