import React from 'react';
import {motion} from 'motion/react';
import heroTechVisual from '../hero-tech-visual.png';

interface HeroTechVisualProps {
  isMobile: boolean;
}

export const HeroTechVisual: React.FC<HeroTechVisualProps> = ({isMobile}) => {
  return (
    <div
      id="hero-tech-visual"
      className="absolute inset-0 flex items-end justify-center sm:justify-end sm:items-center pointer-events-none select-none overflow-visible"
      style={{zIndex: 3}}
    >
      {/* Ambient tech glow */}
      <div
        className="absolute right-[8%] sm:right-[12%] bottom-[18%] sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 w-[min(92vw,520px)] aspect-square"
        aria-hidden
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-[#FF6331]/25 blur-[80px]"
          animate={{opacity: [0.35, 0.55, 0.4, 0.35], scale: [0.92, 1.05, 0.98, 0.92]}}
          transition={{duration: 5.5, repeat: Infinity, ease: 'easeInOut'}}
        />
        <motion.div
          className="absolute inset-[12%] rounded-full border border-white/15"
          animate={{rotate: 360}}
          transition={{duration: 28, repeat: Infinity, ease: 'linear'}}
        />
        <motion.div
          className="absolute inset-[22%] rounded-full border border-[#FF6331]/30 border-dashed"
          animate={{rotate: -360}}
          transition={{duration: 18, repeat: Infinity, ease: 'linear'}}
        />
      </div>

      {/* Main hero asset — subtle float / sway */}
      <motion.div
        className="relative z-10 w-[min(88vw,440px)] sm:w-[min(48vw,560px)] lg:w-[min(52vw,620px)]"
        style={{marginBottom: isMobile ? '72px' : 0, marginRight: isMobile ? 0 : '4%'}}
        animate={{
          y: [0, -10, 6, -4, 0],
          x: [0, 4, -3, 2, 0],
          rotate: [0, 0.6, -0.5, 0.35, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.img
          src={heroTechVisual}
          alt="Kepty — スマートフォンとサッカーボール"
          draggable={false}
          className="w-full h-auto object-contain drop-shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
          style={{
            mixBlendMode: 'screen',
            filter: 'saturate(1.08) contrast(1.05)',
          }}
          animate={{
            scale: [1, 1.02, 0.99, 1.01, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Scan line accent */}
      <motion.div
        className="absolute right-[10%] sm:right-[14%] bottom-[22%] sm:bottom-auto sm:top-[42%] h-px w-[min(70vw,380px)] bg-gradient-to-r from-transparent via-white/40 to-transparent"
        animate={{opacity: [0.2, 0.7, 0.2], scaleX: [0.85, 1, 0.9, 1]}}
        transition={{duration: 4, repeat: Infinity, ease: 'easeInOut'}}
        aria-hidden
      />
    </div>
  );
};
