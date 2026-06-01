import React from 'react';
import {motion} from 'motion/react';

interface HeroTechVisualProps {
  isMobile: boolean;
}

const floatTransition = {
  duration: 7,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

const Particle = ({style, delay = 0}: {style: React.CSSProperties; delay?: number}) => (
  <motion.span
    className="absolute rounded-full bg-[#FF6331]"
    style={{
      width: 3,
      height: 3,
      boxShadow: '0 0 8px 2px rgba(255,99,49,0.8)',
      ...style,
    }}
    animate={{opacity: [0.3, 1, 0.4, 0.9, 0.3], scale: [0.8, 1.2, 0.9, 1.1, 0.8]}}
    transition={{duration: 3.5 + delay, repeat: Infinity, ease: 'easeInOut', delay}}
  />
);

export const HeroTechVisual: React.FC<HeroTechVisualProps> = ({isMobile}) => {
  const left = isMobile ? '58%' : '76%';
  const bottom = isMobile ? '56px' : '72px';
  const sceneW = isMobile ? 320 : 520;
  const sceneH = isMobile ? 340 : 480;

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
          width: sceneW,
          height: sceneH,
          transform: 'translateX(-50%)',
          perspective: 1100,
        }}
        animate={{
          y: [0, -14, 6, -8, 0],
          x: [0, 6, -5, 4, 0],
          rotate: [0, 0.4, -0.35, 0.2, 0],
        }}
        transition={floatTransition}
      >
        <div
          className="relative w-full h-full"
          style={{transformStyle: 'preserve-3d', transform: 'rotateY(-18deg) rotateX(8deg)'}}
        >
          {/* Ambient glow — no solid box */}
          <div
            className="absolute left-[20%] bottom-[8%] w-[75%] h-[55%] rounded-full opacity-80"
            style={{
              background: 'radial-gradient(ellipse, rgba(255,99,49,0.35) 0%, transparent 68%)',
              filter: 'blur(40px)',
            }}
          />

          {/* Orbital rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute left-[35%] bottom-[12%] rounded-full border border-[#FF6331]/40"
              style={{
                width: 180 + i * 55,
                height: 48 + i * 12,
                marginLeft: -(90 + i * 27.5),
                boxShadow: '0 0 20px rgba(255,99,49,0.25), inset 0 0 12px rgba(255,99,49,0.15)',
                transform: `rotateX(72deg) translateZ(${i * 8}px)`,
              }}
              animate={{rotate: i % 2 === 0 ? 360 : -360}}
              transition={{duration: 22 + i * 6, repeat: Infinity, ease: 'linear'}}
            />
          ))}

          {/* Light streak */}
          <motion.div
            className="absolute left-[48%] bottom-[28%] h-[2px] w-[140px] -ml-[70px] rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, #FF6331, transparent)',
              boxShadow: '0 0 16px rgba(255,99,49,0.7)',
              transform: 'rotate(-12deg)',
            }}
            animate={{opacity: [0.3, 0.9, 0.4], scaleX: [0.7, 1.1, 0.85]}}
            transition={{duration: 4, repeat: Infinity, ease: 'easeInOut'}}
          />

          {/* Floating graph panel */}
          <motion.div
            className="absolute left-[-2%] bottom-[38%] w-[88px] h-[52px] rounded-lg border border-[#FF6331]/30 bg-black/20 backdrop-blur-sm p-2"
            style={{boxShadow: '0 0 24px rgba(255,99,49,0.2)'}}
            animate={{y: [0, -5, 3, 0]}}
            transition={{duration: 5.5, repeat: Infinity, ease: 'easeInOut'}}
          >
            <svg viewBox="0 0 80 40" className="w-full h-full" fill="none">
              <path
                d="M4 32 L20 24 L36 28 L52 14 L68 18 L76 10"
                stroke="#FF6331"
                strokeWidth="2"
                strokeLinecap="round"
                style={{filter: 'drop-shadow(0 0 4px rgba(255,99,49,0.8))'}}
              />
            </svg>
          </motion.div>

          {/* Floating waveform panel */}
          <motion.div
            className="absolute left-[4%] bottom-[52%] flex items-end gap-[3px] h-[36px]"
            animate={{y: [0, 4, -3, 0]}}
            transition={{duration: 6, repeat: Infinity, ease: 'easeInOut'}}
          >
            {[12, 22, 16, 28, 18, 24, 14].map((h, i) => (
              <div
                key={i}
                className="w-[4px] rounded-full bg-gradient-to-t from-[#FF6331]/20 to-[#FF6331]"
                style={{
                  height: h,
                  boxShadow: '0 0 8px rgba(255,99,49,0.5)',
                }}
              />
            ))}
          </motion.div>

          {/* Particles */}
          <Particle style={{left: '12%', bottom: '45%'}} delay={0} />
          <Particle style={{left: '28%', bottom: '22%'}} delay={0.4} />
          <Particle style={{left: '55%', bottom: '18%'}} delay={0.8} />
          <Particle style={{left: '72%', bottom: '35%'}} delay={1.2} />
          <Particle style={{left: '85%', bottom: '48%'}} delay={0.6} />
          <Particle style={{left: '42%', bottom: '58%'}} delay={1.5} />

          {/* —— Smartphone —— */}
          <div
            className="absolute left-[8%] bottom-[14%] z-20"
            style={{transform: 'translateZ(40px) rotateY(6deg) rotateX(-4deg)'}}
          >
            {/* Holographic globe */}
            <motion.div
              className="absolute left-1/2 -top-[18%] -translate-x-1/2 w-[78%] aspect-square z-30"
              animate={{rotate: 360}}
              transition={{duration: 24, repeat: Infinity, ease: 'linear'}}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(255,99,49,0.5)" />
                    <stop offset="100%" stopColor="rgba(255,99,49,0)" />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="48" fill="url(#globeGlow)" />
                <ellipse cx="50" cy="50" rx="42" ry="42" fill="none" stroke="#FF6331" strokeWidth="0.6" opacity="0.5" />
                <ellipse cx="50" cy="50" rx="32" ry="42" fill="none" stroke="#FF6331" strokeWidth="0.5" opacity="0.4" />
                <ellipse cx="50" cy="50" rx="42" ry="32" fill="none" stroke="#FF6331" strokeWidth="0.5" opacity="0.4" />
                <path d="M50 8 L50 92 M8 50 L92 50" stroke="#FF6331" strokeWidth="0.4" opacity="0.35" />
                {[0, 30, 60, 90, 120, 150].map((rot) => (
                  <ellipse
                    key={rot}
                    cx="50"
                    cy="50"
                    rx="42"
                    ry="14"
                    fill="none"
                    stroke="#FF6331"
                    strokeWidth="0.35"
                    opacity="0.35"
                    transform={`rotate(${rot} 50 50)`}
                  />
                ))}
              </svg>
            </motion.div>

            {/* Phone body */}
            <div
              className="relative w-[148px] sm:w-[168px] rounded-[1.75rem] p-[6px]"
              style={{
                background: 'linear-gradient(145deg, #3a3a3a 0%, #0a0a0a 55%, #1f1f1f 100%)',
                boxShadow:
                  '0 0 0 1px rgba(255,255,255,0.12), 0 0 30px rgba(255,99,49,0.25), 0 28px 50px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.15)',
              }}
            >
              <div className="absolute top-[7px] left-1/2 -translate-x-1/2 w-[32%] h-[3px] rounded-full bg-white/15" />
              <div
                className="rounded-[1.35rem] overflow-hidden aspect-[9/19] w-full"
                style={{
                  background: 'linear-gradient(180deg, #121212 0%, #050505 100%)',
                }}
              >
                <div className="p-3 pt-5 flex flex-col gap-3 h-full">
                  {[
                    {w: '88%', icon: 'wave'},
                    {w: '72%', icon: 'chat'},
                    {w: '80%', icon: 'book'},
                    {w: '65%', icon: 'mic'},
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center border border-[#FF6331]/50"
                        style={{
                          background: 'radial-gradient(circle, rgba(255,99,49,0.35) 0%, rgba(255,99,49,0.05) 100%)',
                          boxShadow: '0 0 10px rgba(255,99,49,0.4)',
                        }}
                      >
                        <div className="w-3 h-3 rounded-sm bg-[#FF6331]/90" style={{opacity: 0.9}} />
                      </div>
                      <div className="flex-1 h-[6px] rounded-full bg-white/8 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: row.w,
                            background: 'linear-gradient(90deg, #FF6331, #ff8f5a)',
                            boxShadow: '0 0 8px rgba(255,99,49,0.6)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* —— Soccer ball (CSS + SVG, transparent) —— */}
          <div
            className="absolute right-[-2%] bottom-[10%] w-[58%] max-w-[300px] aspect-square z-30"
            style={{transform: 'translateZ(55px) rotateY(-8deg)'}}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{y: [0, 8, -6, 0], rotate: [0, 2, -1.5, 0]}}
              transition={{duration: 8, repeat: Infinity, ease: 'easeInOut'}}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                <defs>
                  <radialGradient id="ballShade" cx="32%" cy="28%" r="65%">
                    <stop offset="0%" stopColor="#4a4a4a" />
                    <stop offset="35%" stopColor="#1a1a1a" />
                    <stop offset="75%" stopColor="#0a0a0a" />
                    <stop offset="100%" stopColor="#000000" />
                  </radialGradient>
                  <radialGradient id="ballHighlight" cx="28%" cy="22%" r="35%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </radialGradient>
                  <filter id="seamGlow">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <circle cx="100" cy="100" r="88" fill="url(#ballShade)" />
                <circle cx="100" cy="100" r="88" fill="url(#ballHighlight)" />
                {/* Glowing seams */}
                <g fill="none" stroke="#FF6331" strokeWidth="2.2" filter="url(#seamGlow)" opacity="0.95">
                  <path d="M100 18 L130 42 L125 78 L100 95 L75 78 L70 42 Z" />
                  <path d="M100 95 L125 78 L155 88 L168 115 L155 142 L125 152 L100 138" />
                  <path d="M100 95 L75 78 L45 88 L32 115 L45 142 L75 152 L100 138" />
                  <path d="M100 18 L70 42 L45 52 L32 75 L45 100 L70 108 L100 95" />
                  <path d="M100 18 L130 42 L155 52 L168 75 L155 100 L130 108 L100 95" />
                </g>
                <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,99,49,0.25)" strokeWidth="1" />
              </svg>
              <div
                className="absolute inset-[15%] rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(255,99,49,0.2) 0%, transparent 70%)',
                  filter: 'blur(12px)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
