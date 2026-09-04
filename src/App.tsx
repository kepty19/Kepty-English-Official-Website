import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Share2, 
  Layers, 
  Compass, 
  User, 
  Users,
  Award, 
  Check, 
  Activity,
  Heart,
  ChevronDown,
  Youtube,
  ExternalLink,
  BookOpen,
  PenTool,
  Calendar,
  HeartHandshake,
  Volume2,
  Headphones,
  Brain,
  FileText,
  Mic,
  Database,
  Ear,
  Speech,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HeroTechVisual, HeroTechVisualMobile } from './components/HeroTechVisual';
import { SiteNavigation } from './components/SiteNavigation';
import { GrainOverlay } from './components/GrainOverlay';
import bgDarkSpace from './image_dark_space.jpg';
import ceoSignatureImg from './ceo-signature.png';

/** CEO MESSAGE body — PC版は意図的な改行あり（段落区切り `\n\n` は維持） */
const CEO_MESSAGE = `静かに、しかし確実に、サッカー選手を取り巻くルールは変わりつつある。

「サッカーさえ上手ければ、道は開ける」

それは真実だ。
でも、その道をもっと遠くへ、もっと自由に広げる武器がある。

それが、英語だ。

世界へ挑むとき、最初の数シーズンを無駄にしないために。
外国人監督やチームメイトと、もっと深い絆で繋がるために。
そして現役を終えた後も、自らの手でやりたいことを自由に選択するために。

英語はただの「勉強」じゃない。
ピッチで積み上げたあなたの価値を、さらに大きく膨らませるための「最大の武器」だ。

また、「3ヶ月でペラペラ」なんていう魔法は、一切この世に存在しない。
プロの世界と同じように、時間をかけて積み上げた本質的なものだけが、一生ものの力になる。

正しい武器の磨き方と、迷いのない最短ルートは、我々がすべて用意している。
あとは、あなたの「覚悟」だけ。

言葉という武器を手にした瞬間から、あなたの可能性はどこまでも広がっていく。
`;

/** スマホ：赤丸箇所のみ PC 用改行を除去（それ以外は PC と同じ改行を維持） */
function ceoMessageForMobile(text: string) {
  return text
    .replace('現代のサッカー選手にとって、\nその言葉', '現代のサッカー選手にとって、その言葉')
    .replace('「サッカー選手の限界」という定説を、\n根底', '「サッカー選手の限界」という定説を、根底')
    .replace('最初の1シーズンを棒に振り、\n戦う', '最初の1シーズンを棒に振り、戦う')
    .replace('それ以外の時間での学習の質が、\n理想', 'それ以外の時間での学習の質が、理想');
}

const ENGLISH_LEARNING_STRUGGLES = [
  {
    num: '01',
    title: '何から、どう学べばよいかわからない・・',
    body: '過去に真剣に学習したことがないため、まずは何から、どう学習していけばよいかわからない。',
  },
  {
    num: '02',
    title: '同じ単語やフレーズばかり使ってしまう・・',
    body: '英会話を続けているが、いつも同じ単語やフレーズ、パターンで完結してしまい、そこからの伸び悩みを感じている。',
  },
  {
    num: '03',
    title: '独学やAIだけでは、実践で活きるか不安・・',
    body: '独学やAIアプリのみだと、実践的な人間相手のコミュニケーションで活かせるかわからない。',
  },
  {
    num: '04',
    title: 'なかなか継続できない・・',
    body: 'やる気はあるものの、日々の練習や試合の疲労で後回しになり、気づけば学習強度が落ちてしまっている。',
  },
  {
    num: '05',
    title: 'サッカーに支障のない日程で着実に進めたい・・',
    body: 'サッカーのパフォーマンスに影響のないように、学習日程や時間を柔軟に調整しながら着実に学習を進めていきたい。',
  },
] as const;

const TARGET_PLAYERS = [
  {
    num: '01',
    before: '将来の海外移籍を見据え、',
    highlight: '日本でゼロから正しいやり方で英語を始めたい',
    after: '選手',
  },
  {
    num: '02',
    before: 'すでに海外でプレーしているが、',
    highlight: '会話の伸び悩みや壁を感じている',
    after: '選手',
  },
  {
    num: '03',
    before: '外国人の監督や選手と',
    highlight: '深いコミュニケーションを取り、ピッチ上の信頼を得たい',
    after: '選手',
  },
  {
    num: '04',
    before: 'これまで独学やアプリを試してきたが、',
    highlight: '本質的な効果を得られなかった',
    after: '選手',
  },
  {
    num: '05',
    before: '現役中に、',
    highlight: '引退後のキャリアにも活きる一生モノの語学力を養いたい',
    after: '選手',
  },
] as const;

const SOLUTION_PILLARS = [
  {
    num: '01',
    title: (
      <>
        間違った自己流を脱却し、一生モノの
        <span className="text-[#E55C29]">「型と基礎」</span>
        が身につく
      </>
    ),
    paragraphs: [
      <>
        サッカーと同じで、自己流のフォーム（間違った基礎）で走り出すと、どれだけ努力しても途中で限界が訪れます。だからこそ最初の
        <span className="text-[#E55C29] font-extrabold">「初動」</span>
        がすべて。将来にわたって英語力を伸ばし続けるために必要な
        <span className="text-[#E55C29] font-extrabold">「最重要な型と正しい学習法」</span>
        を徹底的に脳へ叩き込みます。
      </>,
    ],
  },
  {
    num: '02',
    title: (
      <>
        科学的アプローチで、学習の
        <span className="text-[#E55C29]">「伸び悩み」</span>
        をピンポイント突破
      </>
    ),
    paragraphs: [
      <>
        感覚論ではなく
        <span className="text-[#E55C29] font-extrabold">「第二言語習得論（SLA）」</span>
        に基づき、あなたの今の課題と必要なトレーニングを科学的に特定。無駄な遠回りを一切排除し、最短ルートで成長の限界をこじ開けることで、伸び悩みのブレイクスルーを実現します。
      </>,
    ],
  },
  {
    num: '03',
    title: (
      <>
        <span className="text-[#E55C29]">「毎日の継続習慣」</span>
        と
        <span className="text-[#E55C29]">「実戦で物怖じしない圧倒的な自信」</span>
        を獲得
      </>
    ),
    paragraphs: [
      <>
        英語学習で最も難しい
        <span className="text-[#E55C29] font-extrabold">「継続」</span>
        を専属トレーナーが強固に仕組み化。さらに実践的な対話（フィリピン人講師）の場を設けることで、
        <span className="text-[#E55C29] font-extrabold">「話すことへの恐怖」</span>
        をなくし、実戦で堂々と自分を表現できる慣れと自信を醸成します。
      </>,
    ],
  },
  {
    num: '04',
    title: (
      <>
        <span className="text-[#E55C29]">「正しい学習法」</span>
        の体得により、英語学習における
        <span className="text-[#E55C29]">「迷い」</span>
        をゼロに
      </>
    ),
    paragraphs: [
      <>
        一度
        <span className="text-[#E55C29] font-extrabold">「正しい学習の型」</span>
        を体得してしまえば、プログラム終了後に一人になっても学習ルートで迷うことはありません。英語という長旅の中で起こりがちな挫折や停滞を根本から防ぎ、一生自力で伸ばし続けられる
        <span className="text-[#E55C29] font-extrabold">「確固たる自走力」</span>
        を構築します。
      </>,
    ],
  },
] as const;

/** Hand-drawn crayon/brush underline for phase subtitles */
function PhaseSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center mb-5">
      <h5 className="relative inline-block text-[17px] sm:text-[20px] font-extrabold text-neutral-950 font-serif tracking-wide px-0.5">
        <span className="relative z-10">{children}</span>
        <svg
          className="absolute left-[-4%] bottom-[0.04em] w-[108%] h-[0.5em] z-0 pointer-events-none -rotate-[1.2deg] origin-left"
          viewBox="0 0 280 16"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M5 10.2 C 42 6.2, 88 13.4, 138 8.6 C 186 4.4, 232 12.2, 275 7.8"
            fill="none"
            stroke="#E55C29"
            strokeWidth="7.4"
            strokeLinecap="round"
            opacity="0.38"
          />
          <path
            d="M7 9.1 C 50 12.6, 96 5.4, 148 10.4 C 194 14.2, 236 6.8, 273 9.4"
            fill="none"
            stroke="#E55C29"
            strokeWidth="5.2"
            strokeLinecap="round"
            opacity="0.72"
          />
          <path
            d="M9 10.8 C 58 7.6, 110 13, 162 9 C 208 5.6, 244 11.8, 271 8.4"
            fill="none"
            stroke="#F07845"
            strokeWidth="2.6"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>
      </h5>
    </div>
  );
}

/** Set to true to show the 「応援している選手」 subsection again. */
const SHOW_SUPPORTING_PLAYERS = false;

const SUPPORTING_PLAYERS = [
  {
    name: 'FOXY CHIP',
    bg: '#F4845F',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png',
    grade: '9.8 MINT EDITION',
    price: '¥18,500 JPY'
  },
  {
    name: 'MINTY BREEZE',
    bg: '#6BBF7A',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png',
    grade: '9.9 GEM MINT',
    price: '¥20,000 JPY'
  },
  {
    name: 'PINKY PUFF',
    bg: '#E882B4',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png',
    grade: '9.8 MINT EDITION',
    price: '¥21,500 JPY'
  },
  {
    name: 'NEO WING',
    bg: '#6EB5FF',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png',
    grade: '9.9 GEM MINT',
    price: '¥23,000 JPY'
  },
  {
    name: 'FOXY CHARGE',
    bg: '#F4845F',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png',
    grade: '9.8 MINT EDITION',
    price: '¥19,500 JPY'
  },
  {
    name: 'MINTY SHADOW',
    bg: '#6BBF7A',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png',
    grade: '9.9 GEM MINT',
    price: '¥21,000 JPY'
  },
  {
    name: 'PINKY GALACTIC',
    bg: '#E882B4',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png',
    grade: '9.8 MINT EDITION',
    price: '¥22,500 JPY'
  },
  {
    name: 'NEO COBALT',
    bg: '#6EB5FF',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png',
    grade: '9.9 GEM MINT',
    price: '¥24,500 JPY'
  },
  {
    name: 'FOXY BLITZ',
    bg: '#F4845F',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png',
    grade: '9.8 MINT EDITION',
    price: '¥18,500 JPY'
  },
  {
    name: 'NEO CHROME',
    bg: '#6EB5FF',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png',
    grade: '9.9 GEM MINT',
    price: '¥26,000 JPY'
  }
];

export default function App() {
  // Create reference for CEO section parallax tracking
  const ceoRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ceoRef,
    offset: ["start end", "end start"]
  });

  // Cinematic parallax displacement, horizontal drifting, spatial rotation and zoomed-out scale parameters
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [0.85, 1.02]);

  // Active navigation tab tracker
  const [activeTab, setActiveTab] = useState<string>('hero');
  // Interactive spec viewer active model in collection section
  const [selectedSpecIndex, setSelectedSpecIndex] = useState<number>(0);

  // Inquiry form submission status tracker
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);
  const [inquirySubmitting, setInquirySubmitting] = useState<boolean>(false);
  const [inquiryError, setInquiryError] = useState<string | null>(null);

  const handleInquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInquiryError(null);

    const formData = new FormData(e.currentTarget);
    const userName = formData.get('userName') as string;
    const userEmail = formData.get('userEmail') as string;
    const userMessage = formData.get('userMessage') as string;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setInquiryError(
        '送信設定が未完了です。お手数ですが contact@kepty.co へ直接メールをお送りください。'
      );
      return;
    }

    const payload = new FormData();
    payload.append('access_key', accessKey);
    payload.append('subject', '【Keptyホームページ】お問い合わせ');
    payload.append('from_name', userName);
    payload.append('name', userName);
    payload.append('email', userEmail);
    payload.append('replyto', userEmail);
    payload.append(
      'message',
      `お名前: ${userName}\nメールアドレス: ${userEmail}\n\nお問い合わせ内容:\n${userMessage}`
    );

    setInquirySubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (response.ok && result.success) {
        setInquirySubmitted(true);
        e.currentTarget.reset();
      } else {
        setInquiryError(
          result.message ?? '送信に失敗しました。しばらくしてから再度お試しください。'
        );
      }
    } catch {
      setInquiryError(
        '送信に失敗しました。通信環境をご確認のうえ、contact@kepty.co へ直接メールでもお問い合わせください。'
      );
    } finally {
      setInquirySubmitting(false);
    }
  };

  // Scroll spy to dynamically highlight top navigation tabs based on user position (Swapped Order with SERVICE)
  useEffect(() => {
    const handleScroll = () => {
      const heroSec = document.getElementById('hero-section');
      const ceoSec = document.getElementById('ceo-message-section');
      const effortSec = document.getElementById('why-effort-necessary-section');
      const coachingSec = document.getElementById('why-coaching-effective-section');
      const overviewSec = document.getElementById('coaching-overview-section');
      const collSec = document.getElementById('collection-section');
      const ceoProfileSec = document.getElementById('ceo-profile-section');
      const companySec = document.getElementById('company-section');

      if (!heroSec || !ceoSec || !collSec) return;

      const currentScroll = window.scrollY + 180; // Offset for trigger boundaries

      if (companySec && currentScroll >= companySec.offsetTop - 50) {
        setActiveTab('company');
      } else if (ceoProfileSec && currentScroll >= ceoProfileSec.offsetTop - 50) {
        setActiveTab('ceo-profile');
      } else if (currentScroll >= collSec.offsetTop) {
        setActiveTab('collection');
      } else if (overviewSec && currentScroll >= overviewSec.offsetTop) {
        setActiveTab('service');
      } else if (coachingSec && currentScroll >= coachingSec.offsetTop) {
        setActiveTab('service');
      } else if (effortSec && currentScroll >= effortSec.offsetTop) {
        setActiveTab('service');
      } else if (currentScroll >= ceoSec.offsetTop) {
        setActiveTab('ceo-message');
      } else {
        setActiveTab('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler clicked from navigation tabs
  const scrollToSection = (id: string, tabName: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveTab(tabName);
    }
  };

  return (
    <div
      id="toonhub-viewport-root"
      style={{
        backgroundColor: '#171717', // Neutral base background for smooth dark sections transition
        fontFamily: "'Inter', sans-serif",
      }}
      className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden scroll-smooth transition-colors selection:bg-white/20 selection:text-white"
    >
      <SiteNavigation activeTab={activeTab} onNavigate={scrollToSection} />

      {/* SECTION A: HERO LANDING VIEWPORT (h-screen)
          Styled with high-end premium matte orange linear/radial dynamic gradient layout */}
      <section 
        id="hero-section" 
        style={{
          background: 'radial-gradient(ellipse at center, #E55C29 0%, #C44315 55%, #922704 100%)'
        }}
        className="relative w-full min-h-[100dvh] h-[100dvh] md:h-screen overflow-hidden flex flex-col justify-between"
      >
        {/* Particle/Lustrous Ambient Backlight */}
        <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-white/10 to-transparent pointer-events-none mix-blend-overlay" />

        {/* Grain overlay (zIndex 50) */}
        <GrainOverlay />

        {/* Brand label — vertical center aligned with mobile menu (top-4, h-11) */}
        <div 
          id="toonhub-logo-header"
          className="absolute top-4 left-4 md:top-8 md:left-8 z-60 pointer-events-none select-none flex items-center h-11 md:h-[68px] keep-original-font"
        >
          <svg viewBox="0 0 160 50" className="h-10 md:h-16 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 13.5C9.5 13.5 7.5 15.5 7.5 19.5V28.5C7.5 32.5 9.5 34.5 12.5 34.5C13.8 34.5 14.8 32.2 14.8 28.5V19.5C14.8 15.5 13.8 13.5 12.5 13.5Z" fill="#FF6331" />
            <path d="M22.5 11.5C17.8 11.5 16.2 13.8 16.2 18.5V29.5C16.2 34.2 17.8 36.5 22.5 36.5C28.2 36.5 30.8 32.2 30.8 24C30.8 15.8 28.2 11.5 22.5 11.5Z" fill="#E55C29" />
            <text x="36" y="31" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="20" fill="#FFFFFF" letterSpacing="-0.03em">Kepty</text>
          </svg>
        </div>

        {/* Right Info Controls */}
        <div className="absolute top-8 right-8 z-60 hidden md:flex items-center select-none pointer-events-none">
          <span className="text-[25px] font-sans font-bold tracking-wider text-white select-none leading-none">
            Kepty Co. LTD.
          </span>
        </div>

        {/* Hero: 3D tech visual — behind ghost text (z-2 vs z-4) */}
        <HeroTechVisual />

        {/* —— Mobile HOME stack: title → tagline → photo → badge —— */}
        <div className="md:hidden relative z-10 flex flex-col flex-1 min-h-0 pt-[7rem] px-4 pb-24">
          <h1
            className="font-anton text-white font-black leading-[0.95] mb-6"
            style={{
              fontSize: 'clamp(36px, 11vw, 56px)',
              letterSpacing: '-0.02em',
              textShadow: '0 8px 80px rgba(0,0,0,0.08)',
            }}
          >
            Kepty English
          </h1>

          <p className="font-sans font-bold uppercase tracking-wide text-[17px] leading-snug text-white opacity-95">
            プロサッカー選手の人生に、
            <br />
            もう一つの確固たる武器を。
          </p>

          <div className="flex-1 flex items-end justify-center min-h-0 mt-8 translate-y-12">
            <HeroTechVisualMobile />
          </div>

          <div className="mt-3 mb-2">
            <div className="inline-flex items-center gap-2.5 bg-black/35 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 shadow-lg">
              <span className="relative flex h-[10px] w-[10px] font-sans">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6331] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-[#FF6331]"></span>
              </span>
              <span className="text-[13px] font-sans tracking-wide text-white font-bold">Total Users</span>
              <span className="text-[13px] text-white font-mono font-black">9</span>
            </div>
          </div>
        </div>

        {/* Giant ghost display text "Kepty English" — desktop only */}
        <div
          id="ghost-background-text"
          className="hidden md:block absolute left-24 pointer-events-none select-none top-[28%] z-[4]"
        >
          <span
            className="font-anton text-white select-none whitespace-nowrap text-left relative z-10"
            style={{
              fontSize: 'clamp(36px, 11vw, 145px)',
              fontWeight: 900,
              lineHeight: 1,
              opacity: 0.95,
              letterSpacing: '-0.02em',
              textShadow: '0 8px 80px rgba(0,0,0,0.08)',
            }}
          >
            Kepty English
          </span>
        </div>

        {/* Bottom-left metadata — desktop only */}
        <div
          id="bottom-navigation-details"
          className="hidden md:block absolute bottom-36 left-24 max-w-[720px] select-none text-white z-60"
        >
          <div className="transition-all duration-300">
            <p className="font-sans font-bold uppercase tracking-widest mb-5 text-[33px] opacity-95">
              プロサッカー選手の人生に、
              <br />
              もう一つの確固たる武器を。
            </p>
          </div>

          <div className="inline-flex items-center gap-3.5 bg-black/35 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 shadow-lg">
            <span className="relative flex h-[11px] w-[11px] font-sans">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6331] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-[11px] w-[11px] bg-[#FF6331]"></span>
            </span>
            <span className="text-[16px] font-sans tracking-wide text-white font-bold">
              Total Users
            </span>
            <span className="text-[16px] text-white font-mono font-black">
              9
            </span>
          </div>
        </div>

        {/* Floating Hint to Scroll Down */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-60 animate-bounce flex flex-col items-center gap-1.5 opacity-60">
          <span className="text-[8px] font-mono tracking-[0.2em] uppercase text-white">SCROLL DOWN TO EXPLORE</span>
          <ChevronDown className="w-5 h-5 text-white" />
        </div>
      </section>

      {/* SECTION B (SWAPPED ORDER): CEO / REPRESENTATIVE MESSAGE VIEW (会社の代表からのメッセージ) */}
      <section 
        ref={ceoRef}
        id="ceo-message-section" 
        className="relative min-h-screen text-white z-40 border-t border-white/5 py-24 px-4 sm:px-8 flex items-center justify-center overflow-hidden"
      >
        {/* Cinematic parallax background that brings out the uploaded space image beautifully */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-neutral-950">
          <motion.div 
            style={{ 
              y: bgY, 
              x: bgX,
              rotate: bgRotate,
              scale: bgScale,
              backgroundImage: `url(${bgDarkSpace})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '120vw',
              height: '120vh',
            }} 
            className="absolute -inset-20 opacity-80 brightness-[0.55] contrast-[1.1]"
          />
          {/* Soft vignette and smooth color gradients to blend naturally with neighboring black sections */}
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-neutral-950 via-neutral-950/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        <div className="max-w-[760px] mx-auto w-full py-12 relative z-10">
          {/* Plain white reading paragraphs with preserved spacing and layout elements */}
          <div className="text-white text-[15px] sm:text-[17px] leading-[1.9] font-sans text-left tracking-wider opacity-90 select-text">
            <div className="md:hidden whitespace-pre-wrap">{ceoMessageForMobile(CEO_MESSAGE)}</div>
            <div className="hidden md:block whitespace-pre-wrap">{CEO_MESSAGE}</div>
          </div>

          {/* Signature Block with high-end typography */}
          <div className="mt-12 pt-8 border-t border-white/10 select-none text-left">
            {/* Mobile: 会社名を右寄せ、その真下にサイン */}
            <div className="md:hidden flex flex-col items-end gap-1.5">
              <p className="text-[15px] font-bold text-white/80 font-sans tracking-wide leading-relaxed text-right">
                Kepty Co., Ltd.
              </p>
              <img
                src={ceoSignatureImg}
                alt="Tomohiro Kajiyama signature"
                className="w-[120px] h-auto object-contain object-right pointer-events-none brightness-0 invert opacity-95"
              />
            </div>

            {/* Desktop: unchanged side-by-side layout */}
            <div className="hidden md:flex flex-row items-center justify-start gap-6 sm:gap-8">
              <div className="flex flex-col gap-1.5 min-w-0 shrink-0">
                <p className="text-[15px] sm:text-[17px] font-bold text-white/80 font-sans tracking-wide leading-relaxed">
                  Kepty Co., Ltd.
                </p>
              </div>
              <img
                src={ceoSignatureImg}
                alt="Tomohiro Kajiyama signature"
                className="w-[148px] sm:w-[172px] h-auto object-contain object-right shrink-0 pointer-events-none brightness-0 invert opacity-95"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE: typical challenges → invitation to solve them */}
      <section
        id="why-effort-necessary-section"
        className="relative bg-[#fff8f3] text-neutral-900 z-40 border-t border-orange-100"
      >
        {/* 課題 */}
        <div className="px-4 py-20 sm:py-28">
          <div className="max-w-[920px] mx-auto w-full">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-neutral-950 font-serif mb-5 leading-[1.25]">
                プロ選手が直面する典型的な課題
              </h2>
              <div className="w-16 h-1.5 bg-[#E55C29] mx-auto rounded-full"></div>
            </div>
            <div className="flex flex-col gap-4">
              {ENGLISH_LEARNING_STRUGGLES.map((item) => (
                <div
                  key={item.num}
                  className="bg-white rounded-2xl border border-neutral-200/70 px-5 py-5 sm:px-8 sm:py-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span className="text-2xl sm:text-[28px] font-extrabold font-sans text-[#E55C29] leading-none pt-0.5 shrink-0">
                      {item.num}
                    </span>
                    <div className="min-w-0 flex-1 text-left">
                      <h3 className="text-[16px] sm:text-[19px] font-extrabold text-neutral-950 font-serif tracking-wide leading-snug mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[13.5px] sm:text-[15px] font-semibold text-neutral-600 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 解決の招待 */}
        <div className="relative bg-neutral-950 text-white px-4 py-20 sm:py-28 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              background:
                'radial-gradient(ellipse at 20% 0%, rgba(229,92,41,0.55) 0%, transparent 52%), radial-gradient(ellipse at 90% 100%, rgba(229,92,41,0.28) 0%, transparent 48%)',
            }}
          />
          <div className="max-w-[920px] mx-auto w-full relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-white font-serif mb-5 leading-[1.25]">
                <span className="block">その課題、</span>
                <span className="block">我々と共に最速で解決しませんか？</span>
              </h2>
              <div className="w-16 h-1.5 bg-[#E55C29] mx-auto rounded-full mb-8"></div>
              <div className="text-[15px] sm:text-[18px] leading-relaxed font-semibold max-w-[740px] mx-auto text-white/80 space-y-3">
                <p>
                  「英語の言語特性」や「プロサッカー選手の傾向」を踏まえると、
                  <span className="text-[#E55C29] font-black">成人後</span>
                  に英語力を飛躍的に伸ばすためには、一定量の努力が必要です。
                </p>
                <p>
                  だからこそKepty Englishでは、無駄な遠回りを一切排除。2ヶ月の徹底伴走を通して、
                  <span className="text-[#E55C29] font-black">一生モノの武器となる3つの変化</span>
                  を提供します。
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 sm:gap-6">
              {SOLUTION_PILLARS.map((item) => (
                <article
                  key={item.num}
                  className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm px-5 py-7 sm:px-10 sm:py-10 overflow-hidden"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-14 -right-14 h-[168px] w-[168px] sm:-top-16 sm:-right-16 sm:h-[200px] sm:w-[200px] rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle at 38% 36%, rgba(210, 168, 128, 0.38) 0%, rgba(196, 148, 108, 0.22) 48%, rgba(180, 130, 90, 0.08) 100%)',
                    }}
                  />
                  <div className="relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                    <span className="text-4xl sm:text-6xl font-black font-sans text-[#E55C29] leading-none shrink-0 tracking-tight">
                      {item.num}
                    </span>
                    <div className="min-w-0 flex-1 text-left">
                      <h3 className="text-[17px] sm:text-[22px] font-extrabold font-serif tracking-wide leading-snug text-white mb-5">
                        {item.title}
                      </h3>
                      <div className="flex flex-col gap-4">
                        {item.paragraphs.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-[14px] sm:text-[16px] font-medium text-white/75 leading-[1.9]"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 INSERTED SECTION: WHY ENGLISH COACHING IS EFFECTIVE (01, 02 AND RECIPIENT PROFILE LIST) */}
      <section 
        id="why-coaching-effective-section" 
        className="relative bg-[#faf9f6] text-neutral-900 z-40 border-t border-b border-orange-100/40 px-4 py-20 sm:py-28"
      >
        <div className="max-w-[920px] mx-auto w-full">
          {/* Target players */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-neutral-950 font-serif mb-5 leading-[1.25]">
                <span className="block">従って、このような選手を</span>
                <span className="block">中心にご利用頂いております。</span>
              </h2>
              <div className="w-16 h-1.5 bg-[#E55C29] mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col gap-4">
              {TARGET_PLAYERS.map((item) => (
                <div
                  key={item.num}
                  className="bg-white rounded-2xl border border-neutral-200/70 px-5 py-5 sm:px-8 sm:py-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span className="text-2xl sm:text-[28px] font-extrabold font-sans text-[#E55C29] leading-none pt-0.5 shrink-0">
                      {item.num}
                    </span>
                    <p className="text-[15px] sm:text-[18px] leading-[1.85] font-semibold text-neutral-700 tracking-wide text-left">
                      {item.before}
                      <span className="text-neutral-950 font-extrabold">{item.highlight}</span>
                      {item.after}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-[13px] sm:text-[14px] font-semibold tracking-[0.35em] text-neutral-400">
              etc.
            </p>
          </div>

          {/* Analogy: soccer = English */}
          <div className="bg-white rounded-3xl shadow-md border border-neutral-200/50 p-6 sm:p-10 select-text">
            <div className="flex items-center gap-3 mb-6 border-b border-[#E55C29]/15 pb-4">
              <div className="w-1.5 h-6 bg-[#E55C29] rounded-full"></div>
              <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-neutral-950 tracking-wide text-left">
                サッカーも英語も、上達へのアプローチは全く同じ。
              </h3>
            </div>

            <p className="text-[14.5px] sm:text-[16px] leading-[1.9] text-neutral-700 font-medium text-left mb-8">
              成人後の脳に最適な『第二言語習得論』の科学的アプローチにおいて、英語習得とサッカーのレベルアップ構造は驚くほど類似しています。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {/* Soccer column */}
              <div className="space-y-5 pb-8 border-b border-neutral-200/70 md:border-b-0 md:pb-0">
                <div className="flex flex-col items-start gap-2">
                  <span className="text-[11px] font-black bg-neutral-100 text-neutral-800 px-2 py-0.5 rounded uppercase tracking-wider">Football</span>
                  <h4 className="text-[16px] sm:text-[18px] font-sans font-black text-neutral-950 leading-snug">
                    サッカーのフェーズ別アプローチ
                  </h4>
                </div>
                <p className="text-[14.5px] sm:text-[15.5px] leading-[1.8] text-neutral-700 font-medium text-left">
                  ただ我流でボールを蹴るだけ、ただ試合に出続けるだけでは、真の上達は望めません。
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="flex items-center gap-2 text-[13.5px] sm:text-[14.5px] font-black text-neutral-950 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#E55C29] shrink-0" aria-hidden="true" />
                      基礎強化フェーズ
                    </p>
                    <p className="text-[14.5px] sm:text-[15.5px] leading-[1.8] text-neutral-700 font-medium text-left">
                      「止めて、蹴る」の正確な基礎技術がなければ、どれだけ練習しても上達に限界が来る。
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-[13.5px] sm:text-[14.5px] font-black text-neutral-950 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#E55C29] shrink-0" aria-hidden="true" />
                      スキル強化フェーズ
                    </p>
                    <p className="text-[14.5px] sm:text-[15.5px] leading-[1.8] text-neutral-700 font-medium text-left">
                      試合で浮き彫りになった自分の課題（判断力、キック精度など）を細分化し、ピンポイントでトレーニングしないと伸び悩む。
                    </p>
                  </div>
                </div>
              </div>

              {/* English column */}
              <div className="space-y-5">
                <div className="flex flex-col items-start gap-2">
                  <span className="text-[11px] font-black bg-neutral-100 text-neutral-800 px-2 py-0.5 rounded uppercase tracking-wider">English</span>
                  <h4 className="text-[16px] sm:text-[18px] font-sans font-black text-neutral-950 leading-snug">
                    英語のフェーズ別アプローチ
                  </h4>
                </div>
                <p className="text-[14.5px] sm:text-[15.5px] leading-[1.8] text-neutral-700 font-medium text-left">
                  ただ英会話レッスンを受けるだけ、ただ英語圏で生活するだけでは、効率的な上達は望めません。
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="flex items-center gap-2 text-[13.5px] sm:text-[14.5px] font-black text-neutral-950 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#E55C29] shrink-0" aria-hidden="true" />
                      基礎強化フェーズ
                    </p>
                    <p className="text-[14.5px] sm:text-[15.5px] leading-[1.8] text-neutral-700 font-medium text-left">
                      独学を通して変な癖がつく前に、正しい「音の出し方・学習方法」などの基礎を身体に叩き込む。
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-[13.5px] sm:text-[14.5px] font-black text-neutral-950 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#E55C29] shrink-0" aria-hidden="true" />
                      スキル強化フェーズ
                    </p>
                    <p className="text-[14.5px] sm:text-[15.5px] leading-[1.8] text-neutral-700 font-medium text-left">
                      実際の会話を通して見えた課題や弱点に対して、ピンポイントで打ち手の改善トレーニングを実施する。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🚀 NEW SECTION: OVERVIEW OF ENGLISH COACHING (英語コーチングの概要) */}
      <section 
        id="coaching-overview-section" 
        className="relative bg-[#fafaf2] text-neutral-900 z-40 border-t border-b border-yellow-100/50 px-4 py-20 sm:py-28"
      >
        <div className="max-w-[940px] mx-auto w-full">
          {/* Main Title */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-neutral-950 font-serif mb-4 leading-tight">
              英語コーチングの概要
            </h2>
            <div className="w-16 h-1.5 bg-[#E55C29] mx-auto rounded-full"></div>
          </div>

          {/* 01 Section */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mb-10">
              <span className="text-8xl sm:text-9xl font-sans text-neutral-950 opacity-30 font-black tracking-tight leading-none select-none">
                01
              </span>
              <div className="flex-1">
                <p className="text-[21px] sm:text-[25px] font-sans font-bold leading-relaxed text-neutral-900 tracking-wide text-left">
                  英語コーチングは、英会話力の向上に重要な「3つの要素」を最大化させるサービスです。
                </p>
              </div>
            </div>

            {/* Quality x Quantity x Consistency diagram */}
            <div className="flex flex-col items-center justify-center my-12 bg-white/40 p-6 sm:p-10 rounded-3xl border border-yellow-100/40 w-full max-w-[860px] mx-auto">
              
              {/* Circles + labels share one grid so mobile text aligns under each circle */}
              <div className="grid grid-cols-[92px_auto_92px_auto_92px] sm:grid-cols-[130px_auto_130px_auto_130px] gap-x-1.5 sm:gap-x-4 w-full justify-center select-none">
                {/* Row 1: circles */}
                <div className="col-start-1 row-start-1 flex justify-center">
                  <div className="w-[92px] h-[92px] sm:w-[130px] sm:h-[130px] rounded-full bg-neutral-800 text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300 shrink-0">
                    <span className="text-3xl sm:text-4xl font-extrabold font-serif">質</span>
                  </div>
                </div>
                <span className="col-start-2 row-start-1 self-center text-[22px] sm:text-4xl leading-none text-neutral-400 font-extrabold font-sans">×</span>
                <div className="col-start-3 row-start-1 flex justify-center">
                  <div className="w-[92px] h-[92px] sm:w-[130px] sm:h-[130px] rounded-full bg-neutral-800 text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300 shrink-0">
                    <span className="text-3xl sm:text-4xl font-extrabold font-serif">量</span>
                  </div>
                </div>
                <span className="col-start-4 row-start-1 self-center text-[22px] sm:text-4xl leading-none text-neutral-400 font-extrabold font-sans">×</span>
                <div className="col-start-5 row-start-1 flex justify-center">
                  <div className="w-[92px] h-[92px] sm:w-[130px] sm:h-[130px] rounded-full bg-neutral-800 text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300 shrink-0">
                    <span className="text-3xl sm:text-4xl font-extrabold font-serif">継続</span>
                  </div>
                </div>

                {/* Row 2: labels (PCと同じ改行位置) */}
                <div className="col-start-1 row-start-2 mt-6 text-center">
                  <p className="text-[11px] sm:text-[16px] font-extrabold text-neutral-800 leading-snug">
                    <span className="block whitespace-nowrap">個々の課題に即した</span>
                    <span className="block whitespace-nowrap">正しい学習</span>
                  </p>
                </div>
                <div className="col-start-3 row-start-2 mt-6 text-center">
                  <p className="text-[11px] sm:text-[16px] font-extrabold text-[#111111] leading-snug">
                    <span className="block whitespace-nowrap">膨大なインプット/</span>
                    <span className="block whitespace-nowrap">アウトプット</span>
                  </p>
                </div>
                <div className="col-start-5 row-start-2 mt-6 text-center">
                  <p className="text-[11px] sm:text-[16px] font-extrabold text-neutral-800 leading-snug">
                    <span className="block whitespace-nowrap">中長期間の学習</span>
                  </p>
                </div>
              </div>

              {/* Extra spacing */}
              <div className="h-8"></div>

              {/* Guidance card inside (Removed dotted arrow) */}
              <div className="bg-[#fffdfb] rounded-2xl border border-orange-100 p-6 sm:p-8 max-w-[600px] w-full text-left shadow-sm">
                <h5 className="text-center font-black text-[14px] sm:text-[17px] font-serif text-neutral-800 mb-4 tracking-wide">
                  【学習量の目安】
                </h5>
                <ul className="text-[13px] sm:text-[15.5px] font-bold text-neutral-700 space-y-2.5 pl-4 sm:pl-8 list-disc">
                  <li>毎日90分~120分の学習時間を推奨してます。</li>
                  <li>移動や治療、ストレッチの時間などを有効活用できます。</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="border-t border-orange-200/50 my-16"></div>

          {/* 02 Section */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mb-10">
              <span className="text-8xl sm:text-9xl font-sans text-neutral-950 opacity-30 font-black tracking-tight leading-none select-none">
                02
              </span>
              <div className="flex-1">
                <p className="text-[19px] sm:text-[23px] font-sans font-bold leading-relaxed text-neutral-900 tracking-wide text-left">
                  徹底的な日々の伴走サポートを通して、「科学的かつ効率的な学習」を支援します。
                </p>
              </div>
            </div>

            {/* Grid of 4 support cards — mobile: 2×2, lg: 4 columns */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch mt-12">
              
              {/* Card 1 - 1on1 */}
              <div className="rounded-2xl p-4 sm:p-6 flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-all duration-300 group relative min-h-[260px] sm:min-h-[300px] border border-orange-100/30">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-3 text-neutral-900 group-hover:scale-110 transition-transform select-none">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-[16px] sm:text-[17.5px] font-extrabold text-neutral-950 font-serif tracking-tight text-center leading-snug min-h-[44px] flex items-center justify-center">
                  1on1の定例<br/>ミーティング
                </h4>
                <div className="w-full border-t border-neutral-200 my-3"></div>
                <ul className="text-xs sm:text-[13px] font-bold text-neutral-600 space-y-2 text-left list-disc pl-4 leading-relaxed">
                  <li>2週間に一度、日々の進捗確認や計画の修正を実施</li>
                </ul>
                {/* Thick accent line at the bottom */}
                <div className="w-8 h-1 bg-[#E55C29] rounded-full mt-auto pt-0.5"></div>
              </div>

              {/* Card 2 - Program design */}
              <div className="rounded-2xl p-4 sm:p-6 flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-all duration-300 group relative min-h-[260px] sm:min-h-[300px] border border-orange-100/30">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-3 text-neutral-900 group-hover:scale-110 transition-transform select-none">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-[16px] sm:text-[17.5px] font-extrabold text-neutral-950 font-serif tracking-tight text-center leading-snug min-h-[44px] flex items-center justify-center">
                  学習プログラム/<br/>教材の設計
                </h4>
                <div className="w-full border-t border-neutral-200 my-3"></div>
                <ul className="text-xs sm:text-[13px] font-bold text-neutral-600 space-y-2 text-left list-disc pl-4 leading-relaxed">
                  <li>個々の目標/課題に即した学習プログラムの設計</li>
                  <li>アプリやオンライン英会話などの学習環境の提供</li>
                </ul>
                <div className="w-8 h-1 bg-[#E55C29] rounded-full mt-auto pt-0.5"></div>
              </div>

              {/* Card 3 - Daily correction */}
              <div className="rounded-2xl p-4 sm:p-6 flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-all duration-300 group relative min-h-[260px] sm:min-h-[300px] border border-orange-100/30">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-3 text-neutral-900 group-hover:scale-110 transition-transform select-none">
                  <PenTool className="w-6 h-6" />
                </div>
                <h4 className="text-[16px] sm:text-[17.5px] font-extrabold text-neutral-950 font-serif tracking-tight text-center leading-snug min-h-[44px] flex items-center justify-center">
                  課題添削/<br/>フィードバック
                </h4>
                <div className="w-full border-t border-neutral-200 my-3"></div>
                <ul className="text-xs sm:text-[13px] font-bold text-neutral-600 space-y-2.5 text-left list-disc pl-4 leading-relaxed">
                  <li>課題の提供や提出、添削の実施</li>
                </ul>
                <div className="w-8 h-1 bg-[#E55C29] rounded-full mt-auto pt-0.5"></div>
              </div>

              {/* Card 4 - Support */}
              <div className="rounded-2xl p-4 sm:p-6 flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-all duration-300 group relative min-h-[260px] sm:min-h-[300px] border border-orange-100/30">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-3 text-neutral-900 group-hover:scale-110 transition-transform select-none">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h4 className="text-[16px] sm:text-[17.5px] font-extrabold text-neutral-950 font-serif tracking-tight text-center leading-snug min-h-[44px] flex items-center justify-center">
                  伴走サポート
                </h4>
                <div className="w-full border-t border-neutral-200 my-3"></div>
                <ul className="text-xs sm:text-[13px] font-bold text-neutral-600 space-y-2.5 text-left list-disc pl-4 leading-relaxed">
                  <li>パーソナルトレーナーによる2ヶ月間の徹底伴走</li>
                </ul>
                <p className="mt-2 text-[10px] sm:text-[11px] font-bold text-neutral-500 leading-relaxed text-left">
                  ※3ヶ月目以降は、自学習で進められる形へ推移します。
                </p>
                <div className="w-8 h-1 bg-[#E55C29] rounded-full mt-auto pt-0.5"></div>
              </div>

            </div>

            {/* Note below card grid */}
            <p className="mt-12 text-center text-xs sm:text-[14px] font-bold text-neutral-500 leading-relaxed font-sans max-w-[720px] mx-auto select-none">
              ※日々の学習は、単語や文法、シャドーイング、瞬間英作文、AIスピーキング、フィリピン人講師とのオンライン英会話など、複数のトレーニングが存在
            </p>

          </div>

        </div>
      </section>

      {/* 🚀 NEW SECTION: KEPTY ENGLISH FEATURES / PHILOSOPHY - COMMITMENT (Kepty English の特徴/拘り) */}
      <section 
        id="kepty-features-section" 
        className="relative bg-[#faf8ff] text-neutral-900 z-40 border-t border-b border-purple-100/50 px-4 py-20 sm:py-28"
      >
        <div className="max-w-[940px] mx-auto w-full">
          {/* Main Title */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-neutral-950 font-serif mb-4 leading-tight">
              Kepty Englishの特徴
            </h2>
            <div className="w-16 h-1.5 bg-[#E55C29] mx-auto rounded-full"></div>
          </div>

          {/* 01 & 02 Cards alongside Laptop mockup */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch mt-16 max-w-[940px] mx-auto">
            
            {/* Left stacked cards */}
            <div className="flex flex-col gap-6 justify-center">
              
              {/* Card 01 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-purple-100/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <span className="text-5xl sm:text-6xl font-sans text-neutral-950 opacity-30 font-black tracking-tight leading-none select-none">
                      01
                    </span>
                    <h4 className="text-[18px] sm:text-[21px] font-extrabold text-neutral-950 font-serif tracking-tight leading-tight">
                      Webアプリの利用
                    </h4>
                  </div>
                  <p className="text-[14px] sm:text-[15.5px] font-bold text-neutral-600 leading-relaxed text-center">
                    アプリによる手軽な学習により、「移動や治療の時間」を「良質なインプット時間」に転換できる。
                  </p>
                </div>
              </div>

              {/* Card 02 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-purple-100/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <span className="text-5xl sm:text-6xl font-sans text-neutral-950 opacity-30 font-black tracking-tight leading-none select-none">
                      02
                    </span>
                    <h4 className="text-[18px] sm:text-[21px] font-extrabold text-neutral-950 font-serif tracking-tight leading-tight">
                      オンライン英会話の実施
                    </h4>
                  </div>
                  <p className="text-[14px] sm:text-[15.5px] font-bold text-neutral-600 leading-relaxed text-center">
                    オンライン英会話の実施により、「実践的なアウトプットスキル」を獲得できる。
                  </p>
                </div>
              </div>

            </div>

            {/* Right Laptop mockup */}
            <div className="flex items-center justify-center">
              {/* Responsive Container for HTML/CSS Macbook-style mockup */}
              <div className="relative w-full max-w-[460px] select-none pt-4">
                {/* Screen bezel */}
                <div className="relative mx-auto rounded-xl border-4 border-neutral-800 bg-neutral-900 p-1.5 shadow-2xl overflow-hidden aspect-[16/10] w-[95%] sm:w-full">
                  {/* Gloss glare reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10"></div>
                  
                  {/* Web App interface inside */}
                  <div className="relative bg-white h-full w-full rounded-md flex flex-col overflow-hidden text-[#111111] font-sans p-2.5 sm:p-3 pb-1">
                    {/* Fake Web Browser URL Bar/Tabs */}
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-2 mb-2 select-none">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        <span className="text-[7.5px] sm:text-[8.5px] font-bold text-neutral-400 ml-1.5 font-mono">app.kepty.jp</span>
                      </div>
                      <div className="bg-neutral-100 rounded-md px-4 py-0.5 text-[7px] sm:text-[8px] text-neutral-500 font-mono tracking-tight flex items-center gap-1">
                        <span className="text-[#E55C29] font-black">●</span> Live Feedback Screen
                      </div>
                    </div>

                    {/* App Window Layout */}
                    <div className="flex-1 flex flex-col justify-between overflow-hidden">
                      {/* Active Workout Name */}
                      <div className="bg-neutral-50 rounded-xl p-2 border border-neutral-100 mb-2">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[9px] sm:text-[10px] font-black text-neutral-800 font-serif">Shadowing App</span>
                          <span className="text-[7.5px] sm:text-[8.5px] text-[#E55C29] font-black tracking-normal uppercase bg-orange-50 px-1 py-0.5 rounded">
                            Recording...
                          </span>
                        </div>
                        {/* Smooth animated/fake micro audio waveform bars */}
                        <div className="flex items-end gap-0.5 h-4 select-none justify-center px-1">
                          {[30, 45, 12, 60, 80, 95, 25, 45, 60, 20, 10, 35, 80, 90, 42, 58, 28, 12, 50, 78, 88, 40, 15, 52, 60, 30, 10].map((h, i) => (
                            <div key={i} className="flex-1 bg-gradient-to-t from-[#E55C29] to-[#fb923c] rounded-t-sm" style={{ height: `${h}%` }}></div>
                          ))}
                        </div>
                      </div>

                      {/* Sound categories highlights legend */}
                      <div className="grid grid-cols-4 gap-1 text-[7.5px] sm:text-[8.5px] font-bold py-1 border-b border-neutral-100 mb-2">
                        <div className="flex items-center gap-1 justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></div>Linking</div>
                        <div className="flex items-center gap-1 justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#f43f5e]"></div>Reduction</div>
                        <div className="flex items-center gap-1 justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#eab308]"></div>Flap</div>
                        <div className="flex items-center gap-1 justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>Elision</div>
                      </div>

                      {/* Paragraph Transcript content with interactive styled underscores matching the screenshot transcript */}
                      <div className="flex-1 text-left px-1 py-1 sm:py-2 text-[8.5px] sm:text-[10px] leading-relaxed font-sans text-neutral-600 font-bold">
                        "In all <span className="underline decoration-2 decoration-[#3b82f6] text-neutral-900">those very</span> different contexts, <span className="underline decoration-2 decoration-[#f43f5e] text-neutral-900">one characteristic</span> emerged as <span className="bg-[#eab308]/20 px-0.5 rounded text-neutral-900 font-black">a significant</span> predictor of success. <span className="underline decoration-2 decoration-[#10b981] text-neutral-900">And it</span> wasn't social intelligence..."
                      </div>

                      {/* Mini playback strip */}
                      <div className="bg-neutral-50 rounded-lg py-1 px-2.5 flex items-center justify-between text-neutral-400 font-mono text-[7px] sm:text-[7.5px]">
                        <span className="font-bold text-[#E55C29]">00:15 / 00:30</span>
                        <div className="flex items-center gap-2">
                          <span className="hover:text-black">◀◀</span>
                          <span className="text-normal font-black text-neutral-700 hover:text-black">▶ PLAY</span>
                          <span className="hover:text-black">▶▶</span>
                        </div>
                        <span>VOL 100%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MacBook Aluminum hinge edge base */}
                <div className="relative mx-auto bg-neutral-800 h-2 w-full rounded-b-xl shadow-lg"></div>
                {/* Visual perspective depth shadow of base */}
                <div className="w-[90%] mx-auto h-3 bg-neutral-950/20 blur-sm rounded-full mt-0.5"></div>
              </div>
            </div>

          </div>

          {/* Card 03 Block */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-purple-100/30 max-w-[940px] w-full mx-auto mt-10">
            
            {/* 03 Title Header inside card */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="text-5xl sm:text-6xl font-sans text-neutral-950 opacity-30 font-black tracking-tight leading-none select-none">
                  03
                </span>
                <h4 className="text-[18px] sm:text-[22px] font-extrabold text-neutral-950 font-serif tracking-tight leading-tight">
                  学習理論に立脚した2つのコース
                </h4>
              </div>
            </div>

            {/* Phase 1: 学習初期フェーズの選手 */}
            <div className="mb-14">
              <PhaseSubtitle>基礎徹底コース</PhaseSubtitle>
              <p className="text-[14px] sm:text-[16.5px] font-bold text-neutral-600 leading-relaxed text-center max-w-[760px] mx-auto mb-10">
                <span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">学習初期に習得すべき重要な本質と基礎</span>だけを厳選し、それを確実に体得します。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {[
                  {
                    num: "01",
                    icon: Volume2,
                    title: "音の知覚・発音",
                    approach: (
                      <>
                        <span className="text-[#E55C29] font-extrabold">英語の音を正しく聞き取る、正しく発することは、英会話の最重要基礎</span>
                        。独学やアプリ学習のみでは困難な喉・口・舌の使い方を徹底補正します。
                      </>
                    ),
                    effect: (
                      <>
                        「正しい発音」を体得することで、
                        <span className="text-[#E55C29] font-extrabold">カタカナ英語からの脱却</span>
                        と
                        <span className="text-[#E55C29] font-extrabold">ネイティブ特有の音声変化や日本語にない音を識別</span>
                        できるようになります。
                      </>
                    ),
                  },
                  {
                    num: "02",
                    icon: MessageSquare,
                    title: "頻出のフレーズ・型",
                    approach: (
                      <>
                        日々の生活で
                        <span className="text-[#E55C29] font-extrabold">遭遇率が高い表現や文章の型だけに絞り込み</span>
                        、優先的に脳へインストールします。
                      </>
                    ),
                    effect: (
                      <>
                        守破離でいう「守（基本の型）」が早期に出来上がり、実戦で「使えた！」という成功体験を最速で獲得できます。
                        <span className="text-[#E55C29] font-extrabold">確固たる型（軸足）があるからこそ</span>
                        、その後の応用や表現の派生にも迷わず進むことができます。
                      </>
                    ),
                  },
                  {
                    num: "03",
                    icon: Speech,
                    title: "実践的な英会話",
                    approach: (
                      <>
                        リアルな相手との英会話を通して、知識を
                        <span className="text-[#E55C29] font-extrabold">「実戦で使えるスキル」へと昇華</span>
                        させます。
                      </>
                    ),
                    effect: (
                      <>
                        AI相手の練習では得られない相手のリアルな反応や表情を体感し、無意識にかかる
                        <span className="text-[#E55C29] font-extrabold">「英語を話す恐怖心や心理的ブロック」を打破</span>
                        します。実戦の場で堂々と話せる、本物の慣れと自信が手に入ります。
                      </>
                    ),
                  },
                ].map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={item.num}
                      className="relative bg-[#fefdfb] rounded-2xl p-5 sm:p-6 border border-[#f0ece6] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
                    >
                      <div className="relative mb-4">
                        <div className="w-[84px] h-[84px] rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg">
                          <ItemIcon className="w-9 h-9" />
                        </div>
                        <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#E55C29] text-white text-[12px] font-black flex items-center justify-center shadow-sm">
                          {item.num}
                        </span>
                      </div>
                      <h6 className="text-[15.5px] sm:text-[17px] font-extrabold text-neutral-950 font-serif tracking-wide mb-4">
                        {item.title}
                      </h6>
                      <div className="w-full flex flex-col gap-5 text-left">
                        <div className="flex flex-col gap-2">
                          <div className="pb-2 border-b border-neutral-200/80">
                            <span className="text-[13.5px] sm:text-[14.5px] font-black text-neutral-950 font-serif tracking-wide leading-none">
                              取り組み
                            </span>
                          </div>
                          <p className="text-[13px] sm:text-[14px] font-medium text-neutral-600 leading-relaxed">
                            {item.approach}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="pb-2 border-b border-neutral-200/80">
                            <span className="text-[13.5px] sm:text-[14.5px] font-black text-neutral-950 font-serif tracking-wide leading-none">
                              得られる効能
                            </span>
                          </div>
                          <p className="text-[13px] sm:text-[14px] font-medium text-neutral-600 leading-relaxed">
                            {item.effect}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-neutral-200/80 my-4 mb-12"></div>

            {/* Phase 2: 学習中上級フェーズの選手 */}
            <div>
              <PhaseSubtitle>スキル強化コース</PhaseSubtitle>
              <p className="text-[14px] sm:text-[16.5px] font-bold text-neutral-600 leading-relaxed text-center max-w-[760px] mx-auto mb-8">
                <span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">ピンポイントでの課題特定と打ち手の実施</span>により、より効率的な学習を実現します。
              </p>

            {/* Mobile-only horizontal scroll hint (top-left, not overlapping the figure) */}
            <div className="md:hidden flex justify-start -mb-1 mt-2 pl-1 pointer-events-none select-none">
              <span className="inline-flex items-center gap-2 text-[12px] font-black tracking-[0.22em] text-[#E55C29] drop-shadow-[0_2px_10px_rgba(229,92,41,0.35)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E55C29] animate-pulse" />
                scroll→
              </span>
            </div>

            {/* Steps Timeline Visual */}
            <div className="relative w-full overflow-x-auto overflow-y-hidden pb-6 pt-4 select-none">
              <div className="min-w-[800px] w-[800px] mx-auto relative px-4">
                
                {/* Category Overlays listening / speaking */}
              <div className="relative w-full h-8 mb-6">
                <div className="absolute left-[24px] w-[312px]">
                  <div className="bg-neutral-100 text-neutral-850 text-[13px] sm:text-[14px] font-black tracking-widest py-1.5 rounded-full border border-neutral-200 shadow-sm uppercase font-mono text-center">
                    Listening
                  </div>
                </div>
                <div className="absolute left-[352px] w-[392px]">
                  <div className="bg-neutral-100 text-neutral-850 text-[13px] sm:text-[14px] font-black tracking-widest py-1.5 rounded-full border border-neutral-200 shadow-sm uppercase font-mono text-center">
                    Speaking
                  </div>
                </div>
              </div>

              {/* Central Connection Flow with Ears & Mouth Icons */}
              <div className="relative flex items-center justify-between w-full px-6 py-6">
                
                {/* Ear sound source */}
                <div className="flex items-center gap-1.5 select-none flex-shrink-0 z-10 bg-white pr-3">
                  <span className="text-neutral-400 font-extrabold text-[16px]">(((</span>
                  <div className="w-20 h-20 bg-transparent flex items-center justify-center text-neutral-950">
                    <Ear className="w-12 h-12 text-neutral-950" />
                  </div>
                </div>

                {/* Continuous Timeline line */}
                <div className="absolute left-[84px] right-[84px] h-[4px] bg-neutral-950 flex items-center justify-end z-0">
                  {/* Highly visible Arrow Head pointing Left to Right */}
                  <div className="w-4 h-4 border-t-[4px] border-r-[4px] border-neutral-950 transform rotate-45 -translate-x-[2px] hover:scale-110 transition-transform"></div>
                </div>

                {/* Dynamic Steps Node Container */}
                <div className="relative w-full flex justify-between px-6 z-10">
                  {[
                    { step: "STEP 1", icon: Headphones, label: "音声知覚" },
                    { step: "STEP 2", icon: BookOpen, label: "意味理解" },
                    { step: "STEP 3", icon: Brain, label: "概念化" },
                    { step: "STEP 4", icon: FileText, label: "文章化" },
                    { step: "STEP 5", icon: Mic, label: "音声化" }
                  ].map((node, i) => {
                    const NodeIcon = node.icon;
                    return (
                      <div key={i} className="flex flex-col items-center group relative min-w-[90px]">
                        {/* Step number on top of node tag */}
                        <span className="text-[11px] sm:text-[12.5px] font-black text-neutral-400 font-mono tracking-wider absolute -top-8 bg-white px-2.5 py-0.5 rounded-full border border-neutral-100 shadow-sm">
                          {node.step}
                        </span>

                        {/* Central Dot representing node placement on line */}
                        <div className="w-5 h-5 rounded-full bg-neutral-950 border-[3px] border-white flex items-center justify-center shadow-md group-hover:scale-125 transition-all duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        </div>

                        {/* Node Card wrapper with descriptive Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-white border-2 border-neutral-100 shadow-md flex items-center justify-center text-neutral-950 mt-5 z-10 group-hover:text-[#E55C29] group-hover:border-[#E55C29] transition-all duration-300">
                          <NodeIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                        </div>

                        {/* Detailed Jap label text below card */}
                        <span className="text-[14.5px] sm:text-[15.5px] font-black text-neutral-800 tracking-wide mt-3 leading-tight select-none">
                          {node.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Mouth Sound Target Waves */}
                <div className="flex items-center gap-1.5 select-none flex-shrink-0 z-10 bg-white pl-3">
                  <div className="w-20 h-20 bg-transparent flex items-center justify-center text-neutral-950">
                    <Speech className="w-12 h-12 text-neutral-950" />
                  </div>
                  <span className="text-neutral-400 font-extrabold text-[16px]">)))</span>
                </div>

              </div>

              {/* Fanning Database Lines directly linking Central Schema to components */}
              <div className="relative w-full flex flex-col items-center select-none pb-4">
                
                {/* SVG containing the 5 curved Arrow Lines pointing up to the 5 Steps */}
                <div className="relative w-full max-w-[800px] h-20 -mt-11">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 800 80" preserveAspectRatio="none">
                    <defs>
                      <marker
                        id="arrow-head"
                        viewBox="0 0 10 10"
                        refX="6"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#D4D4D4" />
                      </marker>
                    </defs>

                    {/* 5 curved dashed lines from center-bottom to each of the 5 steps above */}
                    <path d="M 400 78 Q 294 61, 189 44" fill="none" stroke="#D4D4D4" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrow-head)" />
                    <path d="M 400 78 Q 347 59, 295 44" fill="none" stroke="#D4D4D4" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrow-head)" />
                    <path d="M 400 78 Q 400 61, 400 44" fill="none" stroke="#D4D4D4" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrow-head)" />
                    <path d="M 400 78 Q 453 59, 505 44" fill="none" stroke="#D4D4D4" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrow-head)" />
                    <path d="M 400 78 Q 506 61, 611 44" fill="none" stroke="#D4D4D4" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrow-head)" />
                  </svg>
                </div>

                {/* 知識データベース styled exactly like upper cards */}
                <div className="z-10 -mt-2 flex flex-col items-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-neutral-100 shadow-md flex items-center justify-center text-neutral-950 mt-1 z-10 group-hover:text-[#E55C29] group-hover:border-[#E55C29] transition-all duration-300">
                    <Database className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[14.5px] sm:text-[15.5px] font-black text-neutral-800 tracking-wide mt-3 leading-tight select-none">
                    知識データベース
                  </span>
                </div>

              </div>

            </div>

          </div>

              {/* Challenge → Training protocol map */}
              <div className="mt-10 max-w-[760px] mx-auto">
                <div className="grid grid-cols-[minmax(0,1fr)_40px_minmax(0,1.15fr)] sm:grid-cols-[minmax(0,1fr)_48px_minmax(0,1.2fr)] items-end px-1 sm:px-2 mb-3">
                  <div className="pb-2 border-b border-neutral-200/80">
                    <span className="text-[13px] sm:text-[14px] font-black text-neutral-950 font-serif tracking-wide leading-none">課題</span>
                  </div>
                  <div aria-hidden />
                  <div className="pb-2 border-b border-neutral-200/80">
                    <span className="text-[13px] sm:text-[14px] font-black text-neutral-950 font-serif tracking-wide leading-none">トレーニング</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {[
                    { step: "01", icon: Headphones, challenge: "音声知覚", training: "シャドーイング" },
                    { step: "02", icon: BookOpen, challenge: "意味理解", training: "リーディング" },
                    { step: "03", icon: Brain, challenge: "概念化", training: "トピックトーク" },
                    { step: "04", icon: FileText, challenge: "文章化", training: "瞬間英作文" },
                    { step: "05", icon: Mic, challenge: "音声化", training: "発音" },
                  ].map((row) => {
                    const RowIcon = row.icon;
                    return (
                      <div
                        key={row.step}
                        className="group grid grid-cols-[minmax(0,1fr)_40px_minmax(0,1.15fr)] sm:grid-cols-[minmax(0,1fr)_48px_minmax(0,1.2fr)] items-center rounded-2xl bg-[#fefdfb] border border-[#f0ece6] shadow-sm hover:shadow-md hover:border-[#E55C29]/25 transition-all duration-300 px-3 sm:px-4 py-3 sm:py-3.5"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <span className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-950 text-white text-[10px] sm:text-[11px] font-black font-mono flex items-center justify-center">
                            {row.step}
                          </span>
                          <div className="hidden sm:flex w-10 h-10 rounded-xl bg-white border border-[#f0ece6] shadow-sm items-center justify-center text-neutral-950 shrink-0 group-hover:text-[#E55C29] group-hover:border-[#E55C29]/40 transition-colors">
                            <RowIcon className="w-5 h-5" />
                          </div>
                          <span className="text-[13.5px] sm:text-[15.5px] font-extrabold text-neutral-950 font-serif tracking-wide truncate">
                            {row.challenge}
                          </span>
                        </div>

                        <div className="flex items-center justify-center">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#f0ece6] shadow-sm flex items-center justify-center group-hover:border-[#E55C29]/30 transition-colors">
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E55C29]" strokeWidth={2.75} />
                          </div>
                        </div>

                        <div className="min-w-0">
                          <span className="text-[13.5px] sm:text-[15.5px] font-extrabold text-neutral-950 font-serif tracking-wide">
                            {row.training}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* Section 04: サッカー特化のコンテンツ */}
          <div className="bg-white rounded-3xl px-6 py-6 sm:px-10 sm:py-8 pb-0 sm:pb-0 shadow-md border border-purple-100/30 max-w-[940px] w-full mx-auto mt-10 transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
              
              {/* Left Side Content Column */}
              <div className="flex flex-col justify-center text-left py-8 sm:py-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl sm:text-6xl font-sans text-neutral-950 opacity-30 font-black tracking-tight leading-none select-none">
                    04
                  </span>
                  <h4 className="text-[18px] sm:text-[22px] font-extrabold text-neutral-950 font-serif tracking-tight leading-tight">
                    サッカー特化のコンテンツ
                  </h4>
                </div>
                
                <p className="text-[14.5px] sm:text-[16.5px] font-bold text-neutral-600 leading-relaxed font-sans mt-2 text-center">
                  <span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">サッカー選手の人生や日常</span>に合わせた、<br />
                  サッカー選手向けコンテンツも存在。
                </p>
                
                <p className="text-[14px] sm:text-[16px] font-bold text-neutral-900 leading-relaxed font-sans mt-5 bg-neutral-50 px-4 py-3 rounded-xl text-center">
                  試合前後のインタビューなど、<br/>
                  様々なサッカーシーンを想定した学習も可能です。
                </p>
              </div>

              {/* Right Side Tablet/Smartphone Mockup featuring Topic Talk */}
              <div className="flex items-end justify-center">
                <div className="relative w-full max-w-[340px] select-none pt-4">
                  {/* Smartphone/Tablet container - Compact 2/3 vertical aspect, no border, overlapping with bottom card edge */}
                  <div className="relative mx-auto rounded-t-3xl bg-neutral-50 shadow-2xl overflow-hidden aspect-[3/3.33] w-full animate-pulse-slow translate-y-[2px]">
                    {/* Screen glare gloss overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10"></div>
                    
                    {/* App viewport canvas inside */}
                    <div className="relative bg-white h-full w-full rounded-t-[18px] flex flex-col overflow-hidden text-[#111111] font-sans p-3.5 sm:p-4 pb-2">
                      
                      {/* Topic Talk Header banner */}
                      <div className="flex items-center justify-between border-b border-neutral-100 pb-2 mb-2">
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-black text-neutral-950 tracking-tight font-serif uppercase">Topic Talk</span>
                          <span className="text-[7.5px] text-neutral-400 font-bold tracking-tight">Football Specialized Content</span>
                        </div>
                        <span className="text-[8px] tracking-wider font-extrabold bg-red-50 text-red-600 px-2 py-0.5 rounded-full border border-red-100/55 font-mono">
                          Speaking Practice
                        </span>
                      </div>

                      {/* Explanation subtitle block */}
                      <div className="text-left bg-neutral-50 rounded-xl p-1.5 border border-neutral-100 mb-2">
                        <p className="text-[8px] sm:text-[8.5px] leading-relaxed font-bold text-neutral-500">
                          特定のテーマについて自分の意見を論理的に展開し、会話を継続させる力がつきます。
                        </p>
                      </div>

                      {/* Filter/Topic flow pills matching layout */}
                      <div className="space-y-1.5 mb-2">
                        {/* Level 1 Stream Pills */}
                        <div className="flex flex-wrap gap-1 items-center justify-start text-[7.5px] sm:text-[8px] font-bold">
                          <span className="bg-[#E55C29] text-white px-2 py-0.5 rounded-full font-black border border-[#E55C29]">Football</span>
                          <span className="bg-neutral-100 text-neutral-650 px-2 py-0.5 rounded-full">Daily Life</span>
                          <span className="bg-neutral-100 text-neutral-650 px-2 py-0.5 rounded-full">Business</span>
                        </div>

                        {/* Level 2 Subtopic Pills */}
                        <div className="flex flex-wrap gap-1 items-center justify-start text-[7px] sm:text-[7.5px] font-extrabold text-[#E55C29] pt-0.5">
                          <span className="bg-orange-50/50 px-1.5 py-0.5 rounded border border-orange-100 text-[#E55C29] font-black">● Position</span>
                          <span className="text-neutral-500 bg-neutral-50 px-1.5 py-0.5 rounded border border-neutral-100">Tactics</span>
                          <span className="text-neutral-500 bg-neutral-50 px-1.5 py-0.5 rounded border border-neutral-100">Training</span>
                        </div>
                      </div>

                      {/* Interactive focus card displaying the soccer-themed active question */}
                      <div className="flex-1 bg-gradient-to-br from-neutral-50 to-neutral-100/60 rounded-xl p-2.5 border border-neutral-100 flex flex-col justify-between text-left relative overflow-hidden group">
                        {/* Absolute indicator */}
                        <span className="absolute right-2.5 top-2 text-[7px] font-black tracking-widest text-[#E55C29] bg-white border border-orange-100 px-1.5 py-0.5 rounded uppercase">
                          Position
                        </span>
                        
                        <div>
                          <div className="text-[7px] font-extrabold text-neutral-400 font-mono tracking-wider mb-1">QUESTION</div>
                          <p className="text-[10px] sm:text-[11.5px] font-black tracking-tight text-neutral-950 leading-snug">
                            "What is your favorite position to play?"
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-[6.5px] font-bold text-neutral-500 mt-1 pt-1 border-t border-dashed border-neutral-200">
                          <span>⏱️ PREPARATION: 3 MIN</span>
                          <span className="font-extrabold text-[#E55C29]">READY TO START ▶</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section 05: AIによる自動添削 */}
          <div className="bg-white rounded-3xl px-6 py-6 sm:px-10 sm:py-8 pb-0 sm:pb-0 shadow-md border border-purple-100/30 max-w-[940px] w-full mx-auto mt-10 transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
              
              {/* Left Side Content Column */}
              <div className="flex flex-col justify-center text-left py-8 sm:py-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl sm:text-6xl font-sans text-neutral-950 opacity-30 font-black tracking-tight leading-none select-none">
                    05
                  </span>
                  <h4 className="text-[18px] sm:text-[22px] font-extrabold text-neutral-950 font-serif tracking-tight leading-tight">
                    AIによる自動添削
                  </h4>
                </div>
                
                <p className="text-[14.5px] sm:text-[16.5px] font-bold text-neutral-600 leading-relaxed font-sans mt-2 text-center">
                  スピーキングの学習において、<br />
                  AIを有効活用し、添削を自動化します。
                </p>
                
                <p className="text-[14px] sm:text-[16px] font-bold text-neutral-900 leading-relaxed font-sans mt-5 bg-neutral-50 px-4 py-3 rounded-xl text-center">
                  <span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">より速く、より正確な</span>添削・フィードバックの提供を実現します。
                </p>
              </div>

              {/* Right Side Tilted Phone Mockup featuring Chat AI Feedback */}
              <div className="flex items-end justify-center">
                <div className="relative w-full max-w-[340px] select-none pt-4 transform rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
                  {/* Smartphone container - Dark premium finish, aspect-matched & aligned at bottom to match Section 05 exactly */}
                  <div className="relative mx-auto rounded-t-3xl bg-neutral-900 shadow-2xl overflow-hidden aspect-[3/3.33] w-full animate-pulse-slow border-t border-x border-neutral-800 translate-y-[2px]">
                    {/* Screen glare gloss overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10"></div>
                    
                    {/* Chat viewport container - LINE style with baby blue background */}
                    <div className="relative bg-[#7494c0] h-full w-full flex flex-col justify-between overflow-hidden text-neutral-800 font-sans p-3">
                      
                      {/* Chat Status/Header */}
                      <div className="flex items-center justify-between border-b border-black/10 pb-2 mb-2">
                        <div className="flex items-center gap-1.5 text-left">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#17C142] animate-pulse"></div>
                          <span className="text-[10px] font-black tracking-normal uppercase text-neutral-900">Kepty English | Topic Talk</span>
                        </div>
                        <span className="text-[8px] font-bold text-neutral-700 font-mono">11:54 PM</span>
                      </div>

                      {/* Chat Messages Log Scroll area */}
                      <div className="flex-1 overflow-y-auto space-y-2 pr-0.5 text-left scrollbar-thin select-text">
                        
                        {/* Outgoing speech trigger bubble (user's input or status) - LINE green balloon */}
                        <div className="flex justify-end">
                          <div className="bg-[#85E249] text-neutral-900 rounded-2xl rounded-tr-xs px-2.5 py-1.5 max-w-[85%] text-[7.5px] font-bold leading-relaxed shadow-sm">
                            🎤 音声提出完了
                          </div>
                        </div>

                        {/* Incoming AI Coach feedback list - LINE white balloon */}
                        <div className="flex justify-start">
                          <div className="bg-white text-neutral-800 rounded-2xl rounded-tl-xs px-3 py-2.5 max-w-[98%] shadow-sm border border-neutral-200/50">
                            
                            {/* Snippet text mimicking the screenshot */}
                            <div className="space-y-1.5 text-[7px] sm:text-[7.5px] leading-relaxed font-bold tracking-tight text-neutral-750">
                              <p className="text-neutral-700">
                                くなり、洗練された印象を与えることができます。
                              </p>
                              
                              <p className="text-[#E55C29] font-extrabold text-[8px] pt-0.5">
                                (2) 文の構造の多様性
                              </p>
                              <p className="text-neutral-600">
                                「I went to... and went to...」のように同じ動詞や構造が続く箇所を、一つの文にまとめたり、関係代名詞を使ったりすることで、より自然で流麗な英語らしい響きになります。
                              </p>

                              <p className="text-neutral-900 bg-neutral-100 p-1 px-1.5 rounded font-extrabold border-l-2 border-[#E55C29] mt-1 text-[7.5px]">
                                【ブラッシュアップ後の英文 📝】
                              </p>
                              <p className="text-[#E55C29] font-extrabold"># 修正ポイント</p>
                              <p className="text-neutral-650">
                                文頭の「And」を減らし、時系列をよりスムーズに繋ぐ表現を採用しました。また、大学卒業後の動向を「relocated」などの語彙を使って、より自然なフレーズに整えています。
                              </p>

                              <p className="text-neutral-900 font-mono bg-neutral-50 p-1.5 rounded border border-neutral-200 text-[6.5px] whitespace-pre-line leading-normal font-bold">
                                My name is Tomohiro. I was born and raised in Japan, attending school in Kobe until high school and later moving to Osaka for university. Upon graduation, I relocated to Australia to pursue my passion for football and play for a local club.
                              </p>
                            </div>

                          </div>
                        </div>

                      </div>

                      {/* Line/Aa Interactive Input panel at bottom */}
                      <div className="border-t border-black/5 pt-1.5 flex items-center justify-between gap-1.5 mt-1 text-neutral-650 select-none">
                        <span className="text-[11px] font-bold hover:text-neutral-900 cursor-pointer px-0.5">+</span>
                        <div className="text-[9px] hover:text-neutral-900 cursor-pointer">📷</div>
                        <div className="text-[9px] hover:text-neutral-900 cursor-pointer">🖼️</div>
                        
                        {/* Live Input Bar */}
                        <div className="flex-1 bg-white rounded-full py-0.5 px-2.5 text-[8px] text-neutral-600 text-left flex items-center justify-between border border-neutral-200 shadow-inner">
                          <span>Aa</span>
                          <span className="text-[9px]">😊</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section 06: 学習プログラムの作成 */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-purple-100/30 max-w-[940px] w-full mx-auto mt-10">
            
            {/* 06 Title Header inside card */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="text-5xl sm:text-6xl font-sans text-neutral-950 opacity-30 font-black tracking-tight leading-none select-none">
                  06
                </span>
                <h4 className="text-[18px] sm:text-[22px] font-extrabold text-neutral-950 font-serif tracking-tight leading-tight">
                  自走学習状態の確立
                </h4>
              </div>
            </div>

            {/* Part 1: 緻密な学習プログラム */}
            <div className="mb-14">
              <PhaseSubtitle>緻密な学習プログラム</PhaseSubtitle>
              <div className="max-w-[760px] mx-auto select-none mt-4 mb-10 text-center">
                <p className="text-[14px] sm:text-[16.5px] font-bold text-neutral-600 leading-relaxed font-sans">
                  緻密な学習プログラムの作成により、<span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">今日、何をすべきか</span>が明確になり、<span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">迷いなく学習を進める</span>ことができる。
                </p>
              </div>

            {/* Layout: Top horizontal Specs + Bottom Gantt Timeline */}
            <div className="flex flex-col gap-6 mt-10 select-none max-w-[940px] mx-auto w-full">
              
              {/* Top Row: Horizontal Metadata Specs - White BG (never overflow on mobile) */}
              <div className="bg-white border border-neutral-200/60 p-4 sm:p-5 rounded-2xl shadow-xs grid grid-cols-3 gap-2 sm:gap-6 items-stretch text-center divide-x divide-neutral-100">
                <div className="min-w-0 flex items-center justify-center gap-2 px-1 sm:px-0">
                  <span className="text-[#E55C29] font-black text-[16px] sm:text-xl leading-none">•</span>
                  <div className="min-w-0">
                    <div className="text-[8px] sm:text-[10.5px] uppercase tracking-wider text-neutral-400 font-extrabold font-sans leading-tight">
                      Training Term
                    </div>
                    <div className="text-[11px] sm:text-[16px] font-black text-neutral-850 font-sans leading-tight break-words">
                      6 months
                    </div>
                  </div>
                </div>
                
                <div className="min-w-0 flex items-center justify-center gap-2 px-1 sm:px-0">
                  <span className="text-[#E55C29] font-black text-[16px] sm:text-xl leading-none">•</span>
                  <div className="min-w-0">
                    <div className="text-[8px] sm:text-[10.5px] uppercase tracking-wider text-neutral-400 font-extrabold font-sans leading-tight">
                      Training Time
                    </div>
                    <div className="text-[11px] sm:text-[16px] font-black text-neutral-850 font-sans leading-tight break-words">
                      2 hours / day
                    </div>
                  </div>
                </div>

                <div className="min-w-0 flex items-center justify-center gap-2 px-1 sm:px-0">
                  <span className="text-[#E55C29] font-black text-[16px] sm:text-xl leading-none">•</span>
                  <div className="min-w-0">
                    <div className="text-[8px] sm:text-[10.5px] uppercase tracking-wider text-neutral-400 font-extrabold font-sans leading-tight">
                      Training Menu
                    </div>
                    <div className="text-[11px] sm:text-[16px] font-black text-neutral-850 font-sans leading-tight break-words">
                      4 menus / day
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile-only horizontal scroll hint (top-left, not overlapping the figure) */}
              <div className="md:hidden flex justify-start -mb-1 pt-1 pl-1 pointer-events-none select-none">
                <span className="inline-flex items-center gap-2 text-[12px] font-black tracking-[0.22em] text-[#E55C29] drop-shadow-[0_2px_10px_rgba(229,92,41,0.35)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E55C29] animate-pulse" />
                  scroll→
                </span>
              </div>

              {/* Gantt: fixed left column + scrollable timeline (avoids sticky/month layering bugs on iOS) */}
              <div className="w-full overflow-x-auto overflow-y-hidden pb-4 scrollbar-thin">
                <div className="inline-grid min-w-[700px] grid-cols-[140px_560px] border border-neutral-100 rounded-2xl bg-[#fffdfb]">
                  
                  {/* Phase row — left rail (fixed in viewport) | timeline (scrolls) */}
                  <div className="sticky left-0 z-30 bg-[#fffdfb] border-r border-b border-neutral-200" aria-hidden />
                  <div className="border-b border-neutral-200 bg-white grid grid-cols-6 gap-0.5 px-1 bg-neutral-100/10">
                    <div className="col-span-2 flex flex-col border-r border-[#E5E7EB]">
                      <div className="bg-[#FCA271] text-white font-extrabold text-xs sm:text-[13px] text-center py-2 tracking-wider font-sans">
                        Phase 1
                      </div>
                      <div className="p-3 bg-white text-center flex flex-col justify-center min-h-[68px]">
                        <span className="text-[12.5px] font-black text-neutral-850">“基礎”の再強化</span>
                        <span className="text-[9.5px] font-bold text-neutral-500 mt-1 whitespace-pre-line leading-tight">徹底的に強固な土台を構築する</span>
                      </div>
                    </div>
                    <div className="col-span-2 flex flex-col border-r border-[#E5E7EB]">
                      <div className="bg-[#E67E51] text-white font-extrabold text-xs sm:text-[13px] text-center py-2 tracking-wider font-sans">
                        Phase 2
                      </div>
                      <div className="p-3 bg-white text-center flex flex-col justify-center min-h-[68px]">
                        <span className="text-[12.5px] font-black text-neutral-850">“武器”の磨き上げ</span>
                        <span className="text-[9.5px] font-bold text-neutral-500 mt-1 whitespace-pre-line leading-tight">入念に技術を積み上げる</span>
                      </div>
                    </div>
                    <div className="col-span-2 flex flex-col">
                      <div className="bg-[#CD5126] text-white font-extrabold text-xs sm:text-[13px] text-center py-2 tracking-wider font-sans">
                        Phase 3
                      </div>
                      <div className="p-3 bg-white text-center flex flex-col justify-center min-h-[68px]">
                        <span className="text-[12.5px] font-black text-neutral-850">“型”の確立</span>
                        <span className="text-[9.5px] font-bold text-neutral-500 mt-1 whitespace-pre-line leading-tight">自身の勝ちパターンを確立する</span>
                      </div>
                    </div>
                  </div>

                  {/* Month row — labels live ONLY in the right column (never overlap left rail) */}
                  <div className="sticky left-0 z-30 bg-white border-r border-b border-neutral-100 py-4" aria-hidden />
                  <div className="bg-white py-4 border-b border-neutral-100 flex items-center relative select-none px-1">
                    <div className="absolute left-0 right-0 h-[1.5px] bg-neutral-200" />
                    <div className="w-full grid grid-cols-6 text-center font-bold text-neutral-600 text-[11px] sm:text-[12px] font-mono">
                      <div className="flex items-center justify-center relative font-sans">
                        <div className="absolute left-[5%] w-2.5 h-2.5 rounded-full bg-neutral-300 border-2 border-white shadow-xs" />
                        <span className="bg-white px-2.5 relative font-sans font-extrabold text-neutral-800">April</span>
                        <div className="absolute right-0 w-2 h-2 bg-neutral-300 rounded-full border border-white" />
                      </div>
                      <div className="flex items-center justify-center relative font-sans">
                        <span className="bg-white px-2.5 relative font-sans font-extrabold text-[#1a1a1a]">May</span>
                        <div className="absolute right-0 w-2 h-2 bg-[#E1E5F2] rounded-full border border-white" />
                      </div>
                      <div className="flex items-center justify-center relative font-sans">
                        <span className="bg-white px-2.5 relative font-sans font-extrabold text-[#1a1a1a]">June</span>
                        <div className="absolute right-0 w-2 h-2 bg-neutral-300 rounded-full border border-white" />
                      </div>
                      <div className="flex items-center justify-center relative font-sans font-bold">
                        <span className="bg-white px-2.5 relative font-sans font-extrabold text-[#1a1a1a]">July</span>
                        <div className="absolute right-0 w-2 h-2 bg-neutral-300 rounded-full border border-white" />
                      </div>
                      <div className="flex items-center justify-center relative font-sans font-bold">
                        <span className="bg-white px-2.5 relative font-sans font-extrabold text-[#1a1a1a]">August</span>
                        <div className="absolute right-0 w-2 h-2 bg-neutral-300 rounded-full border border-white" />
                      </div>
                      <div className="flex items-center justify-center relative font-sans font-bold">
                        <span className="bg-white px-2.5 relative font-sans font-extrabold text-[#1a1a1a]">September</span>
                        <div className="absolute right-[5%] w-2.5 h-2.5 rounded-full bg-neutral-300 border-2 border-white shadow-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Program rows */}
                  {[
                    { badge: "知識DB", bg: "bg-[#FFF2D4] text-[#A67512] border-[#F2E0BC]", name: "Vocabulary", start: 0, end: 6, barColor: "from-neutral-900 via-[#AE663B] to-[#F1AA6E]" },
                    { badge: "知識DB", bg: "bg-[#FFF2D4] text-[#A67512] border-[#F2E0BC]", name: "Pronunciation", start: 0, end: 0.6, barColor: "from-neutral-900 to-[#925C37]" },
                    { badge: "知識DB", bg: "bg-[#FFF2D4] text-[#A67512] border-[#F2E0BC]", name: "Grammar", start: 0, end: 1.3, barColor: "from-neutral-900 to-[#B46736]" },
                    { badge: "音声知覚", bg: "bg-[#F3E0F7] text-[#713980] border-[#E5C9EC]", name: "Shadowing", start: 0, end: 6, barColor: "from-neutral-900 via-[#9955A1] to-[#E976E5]" },
                    { badge: "意味理解", bg: "bg-[#E2F7E4] text-[#297C3A] border-[#CEECD3]", name: "Reading", start: 3.5, end: 6, barColor: "from-neutral-900 via-[#347F46] to-[#59B569]" },
                    { badge: "概念化", bg: "bg-[#E3EDFA] text-[#285A9A] border-[#D1E0F3]", name: "Topic Talk", start: 2.2, end: 6, barColor: "from-neutral-900 via-[#3A6B9C] to-[#7EA9EE]" },
                    { badge: "文章化", bg: "bg-[#FFDFDF] text-[#A53434] border-[#F4CDCD]", name: "Speaking Form", start: 1.3, end: 2.5, barColor: "from-neutral-900 to-[#C64141]" },
                    { badge: "文章化", bg: "bg-[#FFDFDF] text-[#A53434] border-[#F4CDCD]", name: "Sentence Building", start: 0.7, end: 4.2, barColor: "from-neutral-900 via-[#A43B3B] to-[#EF7878]" }
                  ].map((row, i, arr) => {
                    const totalC = 6;
                    const leftPercent = (row.start / totalC) * 100;
                    const widthPercent = ((row.end - row.start) / totalC) * 100;
                    const rowPad = i === 0 ? 'pt-4' : i === arr.length - 1 ? 'pb-4' : '';
                    const rowGap = i < arr.length - 1 ? 'pb-3.5' : '';
                    return (
                      <React.Fragment key={row.name}>
                        <div className={`sticky left-0 z-30 pl-1 pr-1 flex items-center justify-start gap-1 text-left bg-white border-r min-h-[28px] ${rowPad} ${rowGap}`}>
                          <span className={`w-9 shrink-0 text-center text-[8px] font-black tracking-tighter uppercase py-0.5 rounded border leading-[1.05] whitespace-normal ${row.bg}`}>
                            {row.badge.length === 4 ? (
                              <>
                                {row.badge.slice(0, 2)}
                                <br />
                                {row.badge.slice(2)}
                              </>
                            ) : (
                              row.badge
                            )}
                          </span>
                          <span className="text-[12px] font-extrabold text-neutral-850 font-sans tracking-wide truncate min-w-0">
                            {row.name}
                          </span>
                        </div>
                        <div className={`relative min-h-[28px] flex items-center px-1 bg-white ${rowPad} ${rowGap}`}>
                          <div className="absolute inset-0 grid grid-cols-6 pointer-events-none px-1">
                            {[...Array(6)].map((_, idx) => (
                              <div key={idx} className="border-r border-neutral-100/50 h-full w-full last:border-r-0" />
                            ))}
                          </div>
                          <div
                            style={{ left: `${leftPercent}%`, width: `${widthPercent}%` }}
                            className={`absolute h-[11.5px] rounded-full bg-gradient-to-r ${row.barColor} shadow-inner`}
                          />
                        </div>
                      </React.Fragment>
                    );
                  })}

                </div>
              </div>

            </div>

            </div>

            <div className="border-t border-neutral-200/80 my-4 mb-12"></div>

            {/* Part 2: 伴走フェーズから自走フェーズへ遷移 */}
            <div>
              <PhaseSubtitle>伴走フェーズから自走フェーズへ</PhaseSubtitle>
              <p className="text-[14px] sm:text-[16.5px] font-bold text-neutral-600 leading-relaxed text-center max-w-[760px] mx-auto mb-10">
                最初の2ヶ月は、他者の介在により<span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">独学やアプリでは届かない本質</span>を徹底体得。その後は、科学的アプローチを用いて、<span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">自ら学習を進められる状態</span>を作ります。
              </p>

              {/* Transition visual */}
              <div className="relative max-w-[820px] mx-auto mb-12">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-3 items-stretch">
                  {/* 伴走 */}
                  <div className="relative bg-neutral-950 text-white rounded-3xl p-6 sm:p-8 overflow-hidden shadow-lg">
                    <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-[#E55C29]/20" />
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <span className="text-[11px] font-black tracking-[0.18em] text-[#E55C29] uppercase mb-3">Month 1 – 2</span>
                      <div className="w-16 h-16 rounded-full bg-[#E55C29] flex items-center justify-center mb-4 shadow-md">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h6 className="text-[18px] sm:text-[20px] font-extrabold font-serif tracking-wide mb-2">伴走フェーズ</h6>
                      <p className="text-[13px] sm:text-[14.5px] font-bold text-white/80 leading-relaxed">
                        パーソナルトレーナーと共に<br />正しい型と習慣を徹底体得
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center py-1 md:py-0">
                    <div className="md:hidden text-[#E55C29] font-black text-2xl leading-none">↓</div>
                    <div className="hidden md:flex gap-0.5 text-[#E55C29] font-extrabold text-2xl tracking-widest animate-pulse select-none">
                      ≫≫
                    </div>
                  </div>

                  {/* 自走 */}
                  <div className="relative bg-[#faf8ff] rounded-3xl p-6 sm:p-8 overflow-hidden border border-purple-100/70 shadow-sm">
                    <div className="absolute -left-6 -bottom-6 w-28 h-28 rounded-full bg-[#E55C29]/10" />
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <span className="text-[11px] font-black tracking-[0.18em] text-[#E55C29] uppercase mb-3">Month 3 –</span>
                      <div className="w-16 h-16 rounded-full bg-white border-2 border-neutral-900 flex items-center justify-center mb-4 shadow-sm">
                        <User className="w-8 h-8 text-neutral-900" />
                      </div>
                      <h6 className="text-[18px] sm:text-[20px] font-extrabold font-serif tracking-wide text-neutral-950 mb-2">自走フェーズ</h6>
                      <p className="text-[13px] sm:text-[14.5px] font-bold text-neutral-600 leading-relaxed">
                        科学的アプローチを用い<br />自ら学習を進められる状態へ
                      </p>
                    </div>
                  </div>
                </div>

                {/* Month track */}
                <div className="mt-8 flex items-center justify-center gap-1.5 sm:gap-2 select-none">
                  {[1, 2, 3, 4, 5, 6].map((m) => (
                    <div key={m} className="flex flex-col items-center gap-1.5">
                      <div
                        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-[12px] sm:text-[13px] font-black ${
                          m <= 2
                            ? 'bg-[#E55C29] text-white shadow-sm'
                            : 'bg-white text-neutral-400 border-2 border-neutral-200'
                        }`}
                      >
                        {m}
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-bold text-neutral-400">{m}ヶ月</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-center gap-8 text-[11px] sm:text-[12px] font-extrabold tracking-wide">
                  <span className="text-[#E55C29]">徹底伴走</span>
                  <span className="text-neutral-400">自走学習</span>
                </div>
              </div>

              {/* Why 2 months */}
              <div className="bg-[#fefdfb] rounded-3xl p-6 sm:p-8 border border-[#f0ece6]">
                <h6 className="text-center text-[16px] sm:text-[18px] font-extrabold text-neutral-950 font-serif tracking-wide mb-8">
                  なぜ「2ヶ月」でフェーズを変えるのか？
                </h6>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#E55C29] text-white text-[13px] font-black flex items-center justify-center mt-0.5">
                      1
                    </span>
                    <div className="text-left">
                      <p className="text-[14.5px] sm:text-[16px] font-extrabold text-neutral-950 leading-snug mb-2">
                        迷宮入りを防ぐ「正しいフォーム」と「人の目が必要な本質」の凝縮
                      </p>
                      <p className="text-[13.5px] sm:text-[15px] font-medium text-neutral-600 leading-relaxed">
                        自己流で何年も無駄にする迷宮入りを防ぐため、独学では不可能な「音の矯正」や「科学的学習法」など、他者の介入が効果的な領域だけを2ヶ月に凝縮しました。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#E55C29] text-white text-[13px] font-black flex items-center justify-center mt-0.5">
                      2
                    </span>
                    <div className="text-left">
                      <p className="text-[14.5px] sm:text-[16px] font-extrabold text-neutral-950 leading-snug mb-2">
                        科学と行動心理が示す「超集中 ✕ 習慣化」の最適解
                      </p>
                      <p className="text-[13.5px] sm:text-[15px] font-medium text-neutral-600 leading-relaxed">
                        試験・昇進など期限（緊急度）がないサッカー選手が中だるみせず最高強度で走れる限界（行動経済学）と、行動が定着する科学的期間「約66日（ロンドン大学研究）」から割り出した、最も効果的な期間が2ヶ月です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🚀 NEW SECTION: COMPARISON WITH OTHER SERVICES (他社サービスとの比較) */}
      <section 
        id="kepty-comparison-section" 
        className="relative bg-[#FCFBEC] text-neutral-900 z-40 border-t border-b border-[#F5ECD2]/40 px-4 py-20 sm:py-28"
      >
        <div className="max-w-[940px] mx-auto w-full">
          {/* Main Title */}
          <div className="text-center mb-16 sm:mb-20 select-none">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-neutral-950 font-serif mb-4 leading-tight">
              他社サービスとの比較
            </h2>
            <div className="w-16 h-1.5 bg-[#E55C29] mx-auto rounded-full"></div>
            <p className="text-center text-neutral-800 text-[14px] sm:text-[17px] font-bold tracking-wider leading-relaxed mt-10 font-serif max-w-[800px] mx-auto">
              「一部の限られた選手だけでなく、全ての選手へ、プロフェッショナルな英語コーチングを。」<br />この思想を実現するために、我々は「高品質」かつ「相場よりも低価格」にこだわります。
            </p>
          </div>

          {/* Mobile-only horizontal scroll hint (top-left, not overlapping the table) */}
          <div className="md:hidden flex justify-start -mb-1 mt-2 pl-1 pointer-events-none select-none">
            <span className="inline-flex items-center gap-2 text-[12px] font-black tracking-[0.22em] text-[#E55C29] drop-shadow-[0_2px_10px_rgba(229,92,41,0.35)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E55C29] animate-pulse" />
              scroll→
            </span>
          </div>

          {/* Comparison Table Grid Wrapper (Horizontal Scroll on Mobile) */}
          <div className="relative w-full overflow-x-auto pb-6 scrollbar-thin select-none">
            {(() => {
              const comparisonRows = [
                {
                  label: "場の本質",
                  online: "スキルを表現する場",
                  influencer: "コアファンが集う場",
                  bigCoaching: "スキルを高める場",
                  kepty: "スキルを高める場",
                },
                {
                  label: "メソッド",
                  online: "不明",
                  influencer: "不明",
                  bigCoaching: "科学的\n(第二言語習得論)",
                  kepty: "科学的\n(第二言語習得論)",
                },
                {
                  label: "価格\n（3ヶ月換算）",
                  online: "約3~6万円",
                  influencer: "不明",
                  bigCoaching: "約50~60万円",
                  kepty: "約23万円",
                }
              ];

              const renderCellContent = (val: string | string[], isKepty: boolean) => {
                if (Array.isArray(val)) {
                  return (
                    <div className="flex flex-col items-center justify-center gap-1 font-sans h-full text-center w-full">
                      {val.map((item, i) => (
                        <span key={i} className="text-[13px] sm:text-[14px] font-extrabold text-[#1a1a1a] leading-tight">
                          {item}
                        </span>
                      ))}
                    </div>
                  );
                }
                
                // Text with possible newline splits
                return (
                  <span className="text-[13px] sm:text-[14px] font-extrabold leading-tight text-[#1a1a1a] whitespace-pre-line text-center font-sans">
                    {val}
                  </span>
                );
              };

              return (
                <div className="min-w-[890px] max-w-[940px] mx-auto flex items-stretch gap-2 px-1 pt-4 pb-4">
                  
                  {/* Column 1: Labels (左端の項目名) */}
                  <div className="w-[110px] sm:w-[130px] shrink-0 flex flex-col gap-3 sticky left-0 z-20 bg-[#FCFBEC] pr-2">
                    {/* Spacer matching Header height */}
                    <div className="h-[74px] sm:h-[84px]" />
                    
                    {comparisonRows.map((row, idx) => (
                      <div key={idx} className="h-[74px] sm:h-[84px] rounded-2xl bg-gradient-to-b from-[#FFA577] to-[#FF8149] p-2 text-center flex items-center justify-center shadow-xs">
                        <span className="text-white font-black text-[11.5px] sm:text-[13px] tracking-wide font-sans whitespace-pre-line leading-tight">
                          {row.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Column 2: オンライン英会話事業 */}
                  <div className="flex-1 w-[165px] sm:w-[185px] shrink-0 flex flex-col gap-3">
                    {/* Header */}
                    <div className="h-[74px] sm:h-[84px] rounded-2xl bg-gradient-to-b from-[#FFA577] to-[#FF8149] p-2 text-center flex items-center justify-center shadow-xs">
                      <span className="text-white text-[12.5px] sm:text-[13.5px] font-black leading-tight font-sans">
                        オンライン<br />英会話事業
                      </span>
                    </div>
                    {/* Cells */}
                    {comparisonRows.map((row, idx) => (
                      <div key={idx} className="h-[74px] sm:h-[84px] rounded-2xl bg-white border border-neutral-200/80 p-2 text-center flex items-center justify-center shadow-xs">
                        {renderCellContent(row.online, false)}
                      </div>
                    ))}
                  </div>

                  {/* Column 3: インフルエンサーの英語事業 */}
                  <div className="flex-1 w-[165px] sm:w-[185px] shrink-0 flex flex-col gap-3">
                    {/* Header */}
                    <div className="h-[74px] sm:h-[84px] rounded-2xl bg-gradient-to-b from-[#FFA577] to-[#FF8149] p-2 text-center flex items-center justify-center shadow-xs">
                      <span className="text-white text-[12.5px] sm:text-[13.5px] font-black leading-tight font-sans">
                        インフルエンサー<br />の英語事業
                      </span>
                    </div>
                    {/* Cells */}
                    {comparisonRows.map((row, idx) => (
                      <div key={idx} className="h-[74px] sm:h-[84px] rounded-2xl bg-white border border-neutral-200/80 p-2 text-center flex items-center justify-center shadow-xs">
                        {renderCellContent(row.influencer, false)}
                      </div>
                    ))}
                  </div>

                  {/* Column 4: 大手の英語コーチング事業 */}
                  <div className="flex-1 w-[165px] sm:w-[185px] shrink-0 flex flex-col gap-3">
                    {/* Header */}
                    <div className="h-[74px] sm:h-[84px] rounded-2xl bg-gradient-to-b from-[#FFA577] to-[#FF8149] p-2 text-center flex items-center justify-center shadow-xs">
                      <span className="text-white text-[12.5px] sm:text-[13.5px] font-black leading-tight font-sans">
                        大手の英語<br />コーチング事業
                      </span>
                    </div>
                    {/* Cells */}
                    {comparisonRows.map((row, idx) => (
                      <div key={idx} className="h-[74px] sm:h-[84px] rounded-2xl bg-white border border-neutral-200/80 p-2 text-center flex items-center justify-center shadow-xs">
                        {renderCellContent(row.bigCoaching, false)}
                      </div>
                    ))}
                  </div>

                  {/* Column 5: Kepty English (The Highlighted brand wrapped with border and padding) */}
                  <div className="flex-1 w-[185px] sm:w-[205px] shrink-0 ml-4 mr-1 relative">
                    {/* The thick orange rounded box surrounding everything including the header and all cells */}
                    <div className="absolute -inset-x-2 -inset-y-2 border-[5px] border-[#E55C29] rounded-[28px] bg-[#FFFCEF] z-0 shadow-[0_12px_28px_rgba(229,92,41,0.08)]" />
                    
                    {/* The relative layer containing the content cells so they render on top of the background box */}
                    <div className="relative z-10 flex flex-col gap-3">
                      {/* Header */}
                      <div className="h-[74px] sm:h-[84px] rounded-2xl bg-gradient-to-b from-[#FFA577] to-[#FF8149] p-2 text-center flex items-center justify-center shadow-xs">
                        <span className="text-white text-[13.5px] sm:text-[14.5px] font-black tracking-wide font-sans font-black">
                          Kepty English
                        </span>
                      </div>
                      {/* Cells */}
                      {comparisonRows.map((row, idx) => (
                        <div key={idx} className="h-[74px] sm:h-[84px] rounded-2xl bg-white border border-orange-100/60 p-2 text-center flex items-center justify-center shadow-xs">
                          {renderCellContent(row.kepty, true)}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })()}
          </div>

          {/* Under annotations */}
          <div className="mt-2 text-left max-w-[940px] mx-auto text-[11px] sm:text-[12.5px] font-bold text-neutral-500 leading-relaxed font-sans pl-1 select-none">
            <p className="before:content-['']">※上記、あくまで参考の実態・比較表になります</p>
          </div>

        </div>
      </section>

      {/* 🚀 NEW SECTION: PRICE DETAILS (価格詳細) */}
      <section 
        id="kepty-price-details-section" 
        className="relative bg-[#FCFBEC] text-neutral-900 z-40 border-b border-[#F5ECD2]/40 px-4 pb-20 sm:pb-28"
      >
        <div className="max-w-[940px] mx-auto w-full">
          {/* Main Title */}
          <div className="text-center mb-16 sm:mb-20 select-none">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-neutral-950 font-serif mb-4 leading-tight">
              価格詳細
            </h2>
            <div className="w-16 h-1.5 bg-[#E55C29] mx-auto rounded-full"></div>
          </div>

          {/* Price details main card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-[#F1E8C9]/30 w-full select-none">
            {/* Lead quote */}
            <p className="text-center text-neutral-800 text-[14px] sm:text-[17px] font-bold tracking-wider leading-relaxed mb-10 font-serif">
              最初の2ヶ月は、パーソナルトレーナーと共に徹底強化する「伴走フェーズ」。正しい型と習慣を身につけた3ヶ月目以降は、自ら伸ばす「自走フェーズ」へ。
            </p>

            {/* Mobile-only horizontal scroll hint */}
            <div className="md:hidden flex justify-start mb-2 pl-1 pointer-events-none select-none">
              <span className="inline-flex items-center gap-2 text-[12px] font-black tracking-[0.22em] text-[#E55C29] drop-shadow-[0_2px_10px_rgba(229,92,41,0.35)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E55C29] animate-pulse" />
                scroll→
              </span>
            </div>

            <div className="relative w-full overflow-x-auto pb-2 scrollbar-thin max-md:-mx-3 max-md:w-[calc(100%+1.5rem)]">
              {(() => {
                const contentItems = [
                  { text: '学習計画プログラム', inRepeat: true },
                  { text: '学習用Webアプリ', inRepeat: true },
                  { text: 'オンライン英会話', inRepeat: true },
                  { text: '毎日の課題添削', inRepeat: true },
                  { text: 'チャットサポート', inRepeat: true },
                  { text: '毎日の伴走サポート', inRepeat: false },
                  { text: '週次/隔週の定例', inRepeat: false },
                ] as const;

                const headerCell =
                  'rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#EFF7CE] to-[#DFEC9F] border border-[#CDDF85] px-1.5 py-1.5 sm:p-2 flex items-center justify-center shadow-xs';
                const labelCell =
                  'rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#EFF7CE] to-[#DFEC9F] border border-[#CDDF85] px-1.5 py-1.5 sm:p-2 flex items-center justify-center shadow-xs sticky left-0 z-20';
                const valueCell =
                  'rounded-xl sm:rounded-2xl bg-white border border-[#DFEC9F] px-1.5 py-2 sm:p-2.5 flex items-center justify-center shadow-xs';
                const contentsValueCell =
                  'rounded-xl sm:rounded-2xl bg-white border border-[#DFEC9F] px-1.5 py-5 sm:px-2.5 sm:py-6 flex items-center shadow-xs';

                const renderContents = (showStrikethrough: boolean) => (
                  <ul className="w-full text-left space-y-1.5 px-1 sm:px-2">
                    {contentItems.map((item) => {
                      const struck = showStrikethrough && !item.inRepeat;
                      return (
                        <li
                          key={item.text}
                          className={`text-[10.5px] sm:text-[12.5px] font-extrabold font-sans leading-none flex gap-1 whitespace-nowrap ${
                            struck ? 'text-neutral-400' : 'text-[#1a1a1a]'
                          }`}
                        >
                          <span className="shrink-0">・</span>
                          <span className={struck ? 'line-through decoration-2 decoration-neutral-400' : undefined}>
                            {item.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                );

                const rowH = 'min-h-[64px] sm:min-h-[72px]';

                const learningStyleCell = (period: string, style: string) => (
                  <div className={`${valueCell} ${rowH} flex-col gap-2`}>
                    <span className="text-[10px] sm:text-[12px] font-extrabold text-neutral-500 font-sans text-center leading-none whitespace-nowrap">
                      {period}
                    </span>
                    <span className="text-[13px] sm:text-[16px] font-extrabold text-[#1a1a1a] font-sans text-center leading-none whitespace-nowrap">
                      {style}
                    </span>
                  </div>
                );

                return (
                  <div className="w-fit max-w-full mx-auto grid grid-cols-[72px_148px_148px_148px] sm:grid-cols-[84px_168px_168px_168px] gap-1.5 sm:gap-2.5 py-1">
                    {/* Row 1: plan names */}
                    <div className={`${headerCell} min-h-[44px] sm:min-h-[52px] bg-white border-[#DFEC9F] sticky left-0 z-20`} />
                    <div className={`${headerCell} col-span-2 min-h-[44px] sm:min-h-[52px]`}>
                      <span className="text-[13px] sm:text-[16px] font-extrabold text-[#1a1a1a] font-sans text-center leading-none whitespace-nowrap">
                        Kepty Englishプログラム
                      </span>
                    </div>
                    <div className={`${headerCell} min-h-[44px] sm:min-h-[52px]`}>
                      <span className="text-[13px] sm:text-[16px] font-extrabold text-[#1a1a1a] font-sans text-center leading-none whitespace-nowrap">
                        継続利用
                      </span>
                    </div>

                    {/* Row 2: 学習形態（期間をセル内へ） */}
                    <div className={`${labelCell} ${rowH}`}>
                      <span className="text-[11px] sm:text-[13.5px] font-extrabold text-[#1a1a1a] font-sans text-center leading-tight whitespace-nowrap">
                        学習形態
                      </span>
                    </div>
                    {learningStyleCell('最初の2ヶ月', '徹底伴走')}
                    {learningStyleCell('3ヶ月目', 'プレ自走')}
                    {learningStyleCell('4ヶ月目以降', '完全自走')}

                    {/* Row 3: 提供内容 */}
                    <div className={`${labelCell}`}>
                      <span className="text-[11px] sm:text-[13.5px] font-extrabold text-[#1a1a1a] font-sans text-center leading-tight whitespace-nowrap">
                        提供内容
                      </span>
                    </div>
                    <div className={`${contentsValueCell} col-span-2`}>
                      {renderContents(false)}
                    </div>
                    <div className={contentsValueCell}>
                      {renderContents(true)}
                    </div>

                    {/* Row 4: 価格 */}
                    <div className={`${labelCell} ${rowH}`}>
                      <span className="text-[11px] sm:text-[13.5px] font-extrabold text-[#1a1a1a] font-sans text-center leading-tight whitespace-nowrap">
                        価格
                      </span>
                    </div>
                    <div className={`${valueCell} col-span-2 ${rowH} flex-col gap-1.5`}>
                      <span className="text-[13px] sm:text-[16px] font-extrabold text-[#1a1a1a] font-sans text-center leading-none whitespace-nowrap">
                        3ヶ月 229,400円
                      </span>
                      <span className="text-[9px] sm:text-[11px] font-bold text-[#E55C29] font-sans text-center whitespace-nowrap tracking-tight leading-none">
                        ※支援制度活用 → 実質月額9,800円
                      </span>
                    </div>
                    <div className={`${valueCell} ${rowH}`}>
                      <span className="text-[13px] sm:text-[16px] font-extrabold text-[#1a1a1a] font-sans text-center leading-none whitespace-nowrap">
                        月額9,800円
                      </span>
                    </div>
                  </div>
                );
              })()}
            </div>

            <div className="mt-4 text-left text-[11px] sm:text-[12.5px] font-bold text-neutral-500 leading-relaxed font-sans select-none space-y-1">
              <p>※Jリーグ所属選手は、選手会の就学支援金制度の活用を推奨</p>
              <p>※その他のリーグ所属選手は、選手会の就学支援金制度が存在しないため、最大20万円を弊社負担で支援可能</p>
              <p>※オンライン英会話は、日々の学習内容と連動した内容で、弊社専属のフィリピン人講師が実施</p>
              <p>※プロサッカー選手以外の一般の方にも提供可能（支援金の活用は不可）</p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION C (SWAPPED ORDER): OUR DETAILED COLLECTION GRID / SPEC SHEET VIEW */}
      <section 
        id="collection-section" 
        className="relative z-40 border-t border-white/10 w-full"
      >
        {/* SUBSECTION 1: USER VOICE (英語コーチング利用者の声) */}
        <div className="bg-neutral-950 text-white px-4 py-20 sm:py-24 w-full border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto">
            {/* Title Block */}
            <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 select-none">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-white font-serif mb-4 leading-tight">
                サービス利用者の声
              </h2>
              <div className="w-16 h-1.5 bg-[#E55C29] mx-auto rounded-full mb-6"></div>
              <p className="text-white/70 text-[14.5px] sm:text-[17px] font-bold tracking-wider leading-relaxed max-w-2xl mx-auto font-sans whitespace-pre-line">
                「学習目的」や「過去の経験」は人それぞれ。皆様にご利用いただけます。
              </p>
            </div>

            {/* Testimonial Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 max-w-[1100px] mx-auto mt-24 px-2 items-stretch">
              
              {/* Card 1: Yさん */}
              <div className="bg-neutral-900/60 backdrop-blur-md rounded-[2rem] p-6 sm:p-8 pt-16 pb-10 shadow-xl border-[1.5px] border-white/20 relative flex flex-col hover:border-[#E55C29]/50 transition-all duration-300">
                {/* Float Overlap Icon Header */}
                <div className="flex items-center justify-center gap-3 absolute -top-10 left-1/2 -translate-x-1/2 w-full">
                  <div className="w-[72px] h-[72px] rounded-full bg-neutral-950 border-4 border-neutral-900 shadow-lg flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="grad-y" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#E55C29" />
                          <stop offset="100%" stopColor="#FFA07A" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="48" fill="#1C1C1C" stroke="url(#grad-y)" strokeWidth="2.5" />
                      <circle cx="50" cy="40" r="16" fill="url(#grad-y)" />
                      <path d="M25 75C30 62 40 55 50 55C60 55 70 62 75 75" stroke="#E55C29" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-base font-extrabold text-white font-sans tracking-wide">Yさん</span>
                </div>

                <div className="flex-1 flex flex-col gap-6 mt-4">
                  {/* Category 1 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold font-sans tracking-wide text-[#E55C29] shrink-0">
                        学習目的
                      </span>
                      <span className="h-[1px] flex-1 bg-white/[0.08]"></span>
                    </div>
                    <p className="text-white/90 text-[13.5px] sm:text-[14.5px] leading-relaxed font-bold font-sans text-left">
                      海外でサッカー選手と指導者の両者の経験があり、英語力の重要性を再認識したから。
                    </p>
                  </div>

                  {/* Category 2 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold font-sans tracking-wide text-[#E55C29] shrink-0">
                        過去の学習経験
                      </span>
                      <span className="h-[1px] flex-1 bg-white/[0.08]"></span>
                    </div>
                    <p className="text-white/90 text-[13.5px] sm:text-[14.5px] leading-relaxed font-bold font-sans text-left">
                      独学での数ヶ月間。
                    </p>
                  </div>

                  {/* Category 3 */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold font-sans tracking-wide text-[#E55C29] shrink-0">
                        サービスの効果/効能
                      </span>
                      <span className="h-[1px] flex-1 bg-white/[0.08]"></span>
                    </div>
                    <p className="text-white/80 text-[13px] sm:text-[14px] leading-relaxed font-bold font-sans text-left whitespace-pre-wrap">
                      {"2ヶ月目あたりから、発音が綺麗に変化してきた。\n\nそれと同時に、リスニング力も一気に伸びてきた実感があり、自信を持って英語で他者とコミュニケーションができるように変化してきた。\n\n英語コーチングを通して、基礎的な部分から、段階的に学び直す過程を踏んで良かったと、心から思う。"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Kさん */}
              <div className="bg-neutral-900/60 backdrop-blur-md rounded-[2rem] p-6 sm:p-8 pt-16 pb-10 shadow-xl border-[1.5px] border-white/20 relative flex flex-col hover:border-[#E55C29]/50 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 absolute -top-10 left-1/2 -translate-x-1/2 w-full">
                  <div className="w-[72px] h-[72px] rounded-full bg-neutral-950 border-4 border-neutral-900 shadow-lg flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="grad-k" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4A90E2" />
                          <stop offset="100%" stopColor="#50E3C2" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="48" fill="#1C1C1C" stroke="url(#grad-k)" strokeWidth="2.5" />
                      <rect x="42" y="28" width="16" height="16" rx="4" fill="url(#grad-k)" />
                      <path d="M25 72C30 60 40 54 50 54C60 54 70 60 75 72" stroke="url(#grad-k)" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-base font-extrabold text-white font-sans tracking-wide">Kさん</span>
                </div>

                <div className="flex-1 flex flex-col gap-6 mt-4">
                  {/* Category 1 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold font-sans tracking-wide text-[#E55C29] shrink-0">
                        学習目的
                      </span>
                      <span className="h-[1px] flex-1 bg-white/[0.08]"></span>
                    </div>
                    <p className="text-white/90 text-[13.5px] sm:text-[14.5px] leading-relaxed font-bold font-sans text-left">
                      現在海外でサッカーをしているが、今後の海外キャリアや引退後のキャリアのために、より高い英語力を獲得したいと考えているから。
                    </p>
                  </div>

                  {/* Category 2 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold font-sans tracking-wide text-[#E55C29] shrink-0">
                        過去の学習経験
                      </span>
                      <span className="h-[1px] flex-1 bg-white/[0.08]"></span>
                    </div>
                    <p className="text-white/90 text-[13.5px] sm:text-[14.5px] leading-relaxed font-bold font-sans text-left">
                      オンライン英会話を2年間。
                    </p>
                  </div>

                  {/* Category 3 */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold font-sans tracking-wide text-[#E55C29] shrink-0">
                        サービスの効果/効能
                      </span>
                      <span className="h-[1px] flex-1 bg-white/[0.08]"></span>
                    </div>
                    <p className="text-white/80 text-[13px] sm:text-[14px] leading-relaxed font-bold font-sans text-left whitespace-pre-wrap">
                      {"過去のオンライン英会話では、「なんとなく会話する」「毎回、知っている語彙や文法を活用して会話する」だけで、英会話力が大きく伸びた実感はなかった。\n\n英語コーチングは「英会話力を伸ばすための課題は何か」「各課題に対する最適なトレーニングは何か」を意識するので、正にサッカーと同じアプローチ手法だと感じた。"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Eさん */}
              <div className="bg-neutral-900/60 backdrop-blur-md rounded-[2rem] p-6 sm:p-8 pt-16 pb-10 shadow-xl border-[1.5px] border-white/20 relative flex flex-col hover:border-[#E55C29]/50 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 absolute -top-10 left-1/2 -translate-x-1/2 w-full">
                  <div className="w-[72px] h-[72px] rounded-full bg-neutral-950 border-4 border-neutral-900 shadow-lg flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="grad-e" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#D2029B" />
                          <stop offset="100%" stopColor="#F5A623" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="48" fill="#1C1C1C" stroke="url(#grad-e)" strokeWidth="2.5" />
                      <path d="M50 22L64 36L50 50L36 36Z" fill="url(#grad-e)" />
                      <path d="M25 72C30 60 40 54 50 54C60 54 70 60 75 72" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-base font-extrabold text-white font-sans tracking-wide">Eさん</span>
                </div>

                <div className="flex-1 flex flex-col gap-6 mt-4">
                  {/* Category 1 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold font-sans tracking-wide text-[#E55C29] shrink-0">
                        学習目的
                      </span>
                      <span className="h-[1px] flex-1 bg-white/[0.08]"></span>
                    </div>
                    <p className="text-white/90 text-[13.5px] sm:text-[14.5px] leading-relaxed font-bold font-sans text-left">
                      子供がインターナショナルスクールに通っていたり、サッカーの遠征で海外に行ったりするので、自分も英語を頑張りたいと思ったから。
                    </p>
                  </div>

                  {/* Category 2 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold font-sans tracking-wide text-[#E55C29] shrink-0">
                        過去の学習経験
                      </span>
                      <span className="h-[1px] flex-1 bg-white/[0.08]"></span>
                    </div>
                    <p className="text-white/90 text-[13.5px] sm:text-[14.5px] leading-relaxed font-bold font-sans text-left">
                      数年間、英会話の経験あり。
                    </p>
                  </div>

                  {/* Category 3 */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold font-sans tracking-wide text-[#E55C29] shrink-0">
                        サービスの効果/効能
                      </span>
                      <span className="h-[1px] flex-1 bg-white/[0.08]"></span>
                    </div>
                    <p className="text-white/80 text-[13px] sm:text-[14px] leading-relaxed font-bold font-sans text-left whitespace-pre-wrap">
                      {"3ヶ月目あたりから、リスニング時に「以前よりも聞こえる」という感覚が出始めた。\n\nまた、子供のインターナショナルスクールの先生との会話がスムーズに実施できるようになった。\n\n自身のスケジュールや予定とうまく調整しながら進められる点も、非常に嬉しいポイントです。"}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Disclaimer */}
            <p className="text-center text-xs sm:text-[13px] text-white/40 font-extrabold select-none mt-16 font-sans">
              ※実際に、英語コーチングサービスを提供させて頂いた方々の声になります。
            </p>
          </div>
        </div>

        {/* SUBSECTION 2: SUPPORTING PLAYERS (応援している選手) — hidden until SHOW_SUPPORTING_PLAYERS is true */}
        {SHOW_SUPPORTING_PLAYERS && (
        <div className="bg-neutral-950 text-white px-4 py-20 sm:py-24 w-full border-t border-white/[0.08]">
          <div className="max-w-7xl mx-auto">
            {/* Title Block */}
            <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 select-none">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-white font-serif mb-4 leading-tight">
                応援している選手
              </h2>
              <div className="w-16 h-1.5 bg-[#E55C29] mx-auto rounded-full mb-6"></div>
              <p className="text-white/70 text-[14.5px] sm:text-[17px] font-bold tracking-wider leading-relaxed max-w-2xl mx-auto font-sans">
                私たちが誇り、応援する選手の方々です。
              </p>
            </div>

            {/* Marquee Ticker */}
            <div className="w-full overflow-hidden relative py-6">
              {/* Soft touch of horizontal fading gradient masks */}
              <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

              <motion.div
                className="flex gap-6 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  ease: "linear",
                  duration: 35,
                  repeat: Infinity,
                }}
              >
                {/* Render cards */}
                {[...SUPPORTING_PLAYERS, ...SUPPORTING_PLAYERS].map((item, idx) => (
                  <div 
                    key={`${item.name}-${idx}`}
                    className="w-[300px] shrink-0 bg-neutral-900/60 backdrop-blur-md rounded-[2.5rem] p-6 sm:p-7 border border-[#8eb5f0]/25 hover:border-[#E55C29]/40 transition-all duration-300 relative flex flex-col justify-between min-h-[420px] shadow-3xl"
                  >
                    {/* Character Illustration Center (Top Header Deleted) */}
                    <div className="my-auto flex items-center justify-center p-4 relative mb-4">
                      <div 
                        className="absolute w-36 h-36 rounded-full blur-[40px] opacity-20"
                        style={{ backgroundColor: item.bg }}
                      />
                      <img
                        src={item.src}
                        alt={item.name}
                        className="max-h-[200px] object-contain select-none z-10 transform hover:scale-105 transition-transform duration-500 pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Card spec details details bottom */}
                    <div className="border-t border-white/10 pt-4 mt-auto">
                      <div className="flex justify-between items-end z-10">
                        <div>
                          <span className="text-[9px] text-neutral-500 uppercase block font-sans tracking-wide">Coming soon</span>
                          <span className="text-xs font-black text-white font-sans tracking-wide">Coming soon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
        )}
      </section>

      {/* SECTION: FOUNDER & CEO PROFILE */}
      <section 
        id="ceo-profile-section" 
        style={{
          background: 'radial-gradient(ellipse at center, #E55C29 0%, #C44315 55%, #922704 100%)'
        }}
        className="py-20 px-4 sm:px-6 text-white relative z-40 border-t border-white/10"
      >
        <div className="max-w-[840px] mx-auto w-full">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-white tracking-wide mb-10 sm:mb-16 select-none font-bold">
            Founder & CEO
          </h2>

          <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-0">
            {/* Left: company, title, name */}
            <div className="md:w-[34%] md:pr-10 lg:pr-12 shrink-0 select-text">
              <p className="text-[15px] sm:text-[16.5px] font-bold text-white/80 tracking-wide">
                株式会社Kepty
              </p>
              <p className="text-[15px] sm:text-[16.5px] font-bold text-white/80 tracking-wide mt-1.5 mb-3">
                代表取締役
              </p>
              <h3 className="text-[30px] sm:text-[38px] lg:text-[42px] font-serif font-black text-white tracking-wider leading-tight">
                梶山 知裕
              </h3>
            </div>

            {/* Divider: horizontal on mobile, vertical on desktop */}
            <div className="md:hidden h-px w-full bg-white" aria-hidden />
            <div className="hidden md:block w-px bg-white self-stretch" aria-hidden />

            {/* Right: biography */}
            <div className="md:flex-1 md:pl-10 lg:pl-14 flex flex-col space-y-6 sm:space-y-7 select-text">
              <p className="text-[15px] sm:text-[16.5px] leading-[1.95] font-serif font-medium text-white tracking-wider">
                センアーノ神戸ユースU-18、関西大学を経て、2016年よりオーストラリアNSW州1部リーグで2シーズンプレー。2017年には同リーグにおいて日本人初となる年間得点王を獲得。
              </p>
              <p className="text-[15px] sm:text-[16.5px] leading-[1.95] font-serif font-medium text-white tracking-wider">
                現役引退後、株式会社リクルートに入社。国内最大級の教育プロダクト「スタディサプリ」や、東南アジア（フィリピン・インドネシア）向けのグローバル教育事業「Quipper」にて事業戦略・企画に従事。
              </p>
              <p className="text-[15px] sm:text-[16.5px] leading-[1.95] font-serif font-medium text-white tracking-wider">
                その後、株式会社Keptyを設立。外部の英語コーチング事業に参画し、第二言語習得論に基づく科学的な指導ノウハウを習得。教育プロダクトの知見、英語コーチングの実践ノウハウを結集し、2026年よりプロサッカー選手特化型英語コーチングサービス『Kepty English』を本格始動。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: COMPANY & INQUIRY */}
      <section 
        id="company-section" 
        style={{
          background: 'radial-gradient(ellipse at center, #E55C29 0%, #C44315 55%, #922704 100%)'
        }}
        className="pb-0 pt-10 px-4 sm:px-6 text-white relative z-40"
      >
        <div className="max-w-[840px] mx-auto w-full">
          {/* Header */}
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-white tracking-wide mb-10 sm:mb-16 select-none font-bold">
            Company
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left Column: Basic Company Info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="bg-black/20 backdrop-blur-md rounded-[1.8rem] p-6 sm:p-8 border border-white/10 h-full flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-serif font-black tracking-wider mb-6 pb-3 border-b border-white/20">
                  会社概要
                </h3>
                <dl className="space-y-4 text-sm sm:text-base tracking-wide font-sans">
                  <div>
                    <dt className="text-white/60 text-xs uppercase font-extrabold tracking-widest mb-1">社名 / Company Name</dt>
                    <dd className="font-bold text-white">株式会社Kepty (Kepty Co., Ltd.)</dd>
                  </div>
                  <div>
                    <dt className="text-white/60 text-xs uppercase font-extrabold tracking-widest mb-1">創業 / Established</dt>
                    <dd className="font-bold text-white">2023年</dd>
                  </div>
                  <div>
                    <dt className="text-white/60 text-xs uppercase font-extrabold tracking-widest mb-1">代表 / Founder & CEO</dt>
                    <dd className="font-bold text-white">梶山 知裕 / Tomohiro Kajiyama</dd>
                  </div>
                  <div>
                    <dt className="text-white/60 text-xs uppercase font-extrabold tracking-widest mb-1">事業内容 / Services</dt>
                    <dd className="font-bold text-white leading-relaxed text-xs sm:text-sm">
                      IT・AI関連事業<br />
                      サッカー選手向け英語コーチング事業
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Right Column: Dynamic Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-[2.2rem] p-6 sm:p-8 shadow-2xl border border-black/5 text-neutral-950 flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-extrabold text-neutral-950 tracking-wider mb-5">
                Contact Us
              </h3>
              {inquirySubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100 shadow-sm animate-bounce">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">送信が完了しました</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto">
                    お問い合わせありがとうございます。ご入力いただいた内容を確認の上、担当者よりご連絡いたします。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  {inquiryError && (
                    <p className="text-sm text-red-600 font-bold bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                      {inquiryError}
                    </p>
                  )}
                  <div>
                    <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider mb-1.5 pl-1">
                      お名前 / Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="userName"
                      className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#E55C29] focus:ring-1 focus:ring-[#E55C29] rounded-xl px-4 py-3 text-sm text-neutral-900 font-medium placeholder-neutral-400 outline-none transition-all duration-200"
                      placeholder="例：山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider mb-1.5 pl-1">
                      メールアドレス / Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      name="userEmail"
                      className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#E55C29] focus:ring-1 focus:ring-[#E55C29] rounded-xl px-4 py-3 text-sm text-neutral-900 font-medium placeholder-neutral-400 outline-none transition-all duration-200"
                      placeholder="example@kepty.co"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider mb-1.5 pl-1">
                      お問い合わせ内容 / Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      name="userMessage"
                      className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#E55C29] focus:ring-1 focus:ring-[#E55C29] rounded-xl px-4 py-3 text-sm text-neutral-900 font-medium placeholder-neutral-400 outline-none transition-all duration-200 resize-none"
                      placeholder="ご不明点や受講相談など、些細なことでもお気軽にお問い合わせください！"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={inquirySubmitting}
                    className="w-full bg-[#E55C29] hover:bg-[#c8491d] disabled:bg-[#E55C29]/60 disabled:cursor-not-allowed text-white font-extrabold text-[14px] uppercase tracking-widest py-3.5 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-200 select-none cursor-pointer flex items-center justify-center"
                  >
                    <span>{inquirySubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="text-white/50 text-xs pt-16 pb-12 px-6 text-center">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="font-anton text-sm tracking-widest text-white">Kepty Co., Ltd.</span>
            </div>
            <p className="text-[11px] text-white/50 font-sans">
              &copy; 2026 Kepty Co., Ltd. All rights reserved.
            </p>
            <div className="flex gap-4 font-sans">
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
