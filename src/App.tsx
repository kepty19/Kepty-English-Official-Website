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
  RefreshCw,
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
  Speech
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HeroTechVisual, HeroTechVisualMobile } from './components/HeroTechVisual';
import { SiteNavigation } from './components/SiteNavigation';
import { GrainOverlay } from './components/GrainOverlay';
import bgDarkSpace from './image_dark_space.jpg';
import ceoProfileImg from './ceo-profile.png';
import ceoSignatureImg from './ceo-signature.png';

/** CEO MESSAGE body — PC版は意図的な改行あり（段落区切り `\n\n` は維持） */
const CEO_MESSAGE = `静かに、しかし確実に、サッカー選手を取り巻くルールは変わりつつある。

「サッカーさえ上手ければ、道は開ける」

それは果たして、持続可能な真実なのだろうか。現代のサッカー選手にとって、
その言葉はキャリアを縛る、あまりに危うい賭けかもしれない。

現実は小難しい。ピッチの上でどれだけ輝いても、一歩外に出れば、自分の表現を持たない者は「透明な存在」として扱われてしまう。
本来築けたはずの深い絆も、言葉を持たなければ「ただの通りすがり」で終わってしまう。
あなたの輪郭が誰の記憶にも残らぬまま、時間は淡々と過ぎていく。

また、競技人生の終わりは、唐突にやってくる。
プロの世界で証明し続けてきた比類なき価値が、引退した途端に「サッカーという頂を極めた代償に、それ以外の術を持たない者」という偏見で片付けられる。
そんな不条理な現実に、僕はどうしても抗いたい。


この現実を自らの力で払拭し、人生の主導権を書き換える権利。
その未来を切り拓く、最も強力な鍵の一つが「英語力」であると、僕は信じている。

なぜなら、この世界共通の言語を自在に操れるようになることは、あなたの表現の幅、
そしてスキルの幅を、いかようにも広げてくれるからだ。
それは、これまで無意識に受け入れてきた「サッカー選手の限界」という定説を、
根底から覆していく力になる。


ただ、忘れないでほしい。その「新たな未来を切り拓く鍵」を掴み取れるかどうかの勝負は、すでに始まっている。

これから海外へ挑戦されるのであれば、ぜひ、今この瞬間から、英語を学び始めてほしい。
行ってからでは、あまりに時間が足りない。準備を怠れば、最初の1シーズンを棒に振り、
戦う場所すら失いかねない。

既に海外でプレーされているのであれば、今こそが、最もレバレッジが効く英語学習の黄金期だ。日々リアルな英語に触れられる環境があるからこそ、それ以外の時間での学習の質が、
理想を現実にするスピードを決定づける。
この貴重なチャンスを、決して無駄にしてほしくない。

そして、引退後のキャリアへの不安は、今を全力で生きる者なら、誰もが心のどこかに抱く影かもしれない。けれど、ピッチを離れてから準備を始めるのでは、自らの手で選べる未来は、あまりに少なくなってしまう。


英語は、“勉強”そのものではない。理想を実現するための“最高の投資”だ。

また、「3ヶ月でペラペラ」なんていう手品のような魔法は、一切この世に存在しない。
短期間で取り繕った知識や技術は、簡単に崩れ落ちる。時間をかけて積み上げた本質的なモノだけが、本物の武器となる。


この積み上げの果てに、我々は、単なる“英語力”以上のものを手にする。
それは、繰り返しになるが、人生のハンドルを握り続けるための“権利“だ。

外国人の監督やチームメイトと深い関係性を構築し、様々な“機会”を自ら掴み取る”権利”。

競技以外の活動を、日本国内に留まらず、“海外のグローバルな場”で実施する“権利”。

引退後に、英語という武器を活用しながら、現役時代に積み上げた資産を何倍にも膨らませた“新しい闘い”に挑む“権利”。


プロサッカー選手が英語を通して、人生をより豊かにする権利を獲得する。
そんな世界を、一部の選手だけの特権ではなく、すべての選手が実現できるように。
僕は、プロサッカー選手のための英語学習サービスを作った。

「プロサッカー選手に最適化した学習体験」と「長期間の学習を支える価格設計」。
それらを実現するために、プロダクトの細部に至るまで、徹底的に磨き上げた。

もちろん、ユーザーがプロフェッショナルなのだから、我々のサービス水準もプロフェッショナルだ。


プロサッカー選手の英語学習に、本気で向き合う。
CEOである僕自身も、ありたき姿を実現するために、毎日欠かさず英語を学び続けています。

`;

/** スマホ：赤丸箇所のみ PC 用改行を除去（それ以外は PC と同じ改行を維持） */
function ceoMessageForMobile(text: string) {
  return text
    .replace('現代のサッカー選手にとって、\nその言葉', '現代のサッカー選手にとって、その言葉')
    .replace('「サッカー選手の限界」という定説を、\n根底', '「サッカー選手の限界」という定説を、根底')
    .replace('最初の1シーズンを棒に振り、\n戦う', '最初の1シーズンを棒に振り、戦う')
    .replace('それ以外の時間での学習の質が、\n理想', 'それ以外の時間での学習の質が、理想');
}

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
            プロサッカー選手の英会話力を引き伸ばす
            <br />
            英語コーチングサービス
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
              <span className="text-[13px] text-white font-mono font-black">7</span>
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
              プロサッカー選手の英会話力を引き伸ばす
              <br />
              英語コーチングサービス
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
              7
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
            {/* Mobile: 2行テキストはそのまま、署名は名前の下（右寄せ） */}
            <div className="md:hidden flex flex-col gap-1.5">
              <p className="text-[15px] font-bold text-white/80 font-sans tracking-wide leading-relaxed">
                Kepty Co., Ltd.
              </p>
              <p className="text-[13px] font-bold text-white/80 font-sans tracking-wide leading-relaxed whitespace-nowrap">
                Founder & CEO：Tomohiro Kajiyama | 梶山 知裕
              </p>
              <div className="flex justify-end pt-2">
                <img
                  src={ceoSignatureImg}
                  alt="Tomohiro Kajiyama signature"
                  className="w-[120px] h-auto object-contain object-right pointer-events-none brightness-0 invert opacity-95"
                />
              </div>
            </div>

            {/* Desktop: unchanged side-by-side layout */}
            <div className="hidden md:flex flex-row items-center justify-start gap-6 sm:gap-8">
              <div className="flex flex-col gap-1.5 min-w-0 shrink-0">
                <p className="text-[15px] sm:text-[17px] font-bold text-white/80 font-sans tracking-wide leading-relaxed">
                  Kepty Co., Ltd.
                </p>
                <p className="text-[15px] sm:text-[17px] font-bold text-white/80 font-sans tracking-wide leading-relaxed">
                  Founder & CEO：Tomohiro Kajiyama | 梶山 知裕
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

      {/* 🚀 NEW SECTION: WHY IS EFFORT NECESSARY FOR ENGLISH ACQUISITION? */}
      <section
        id="why-effort-necessary-section" 
        className="relative bg-[#fff8f3] text-neutral-900 z-40 border-t border-orange-100 px-4 py-20 sm:py-28"
      >
        <div className="max-w-[920px] mx-auto w-full">
          {/* Main Title */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-neutral-950 font-serif mb-4 leading-tight">
              なぜ、英語習得に“努力”が必要か
            </h2>
            <div className="w-16 h-1.5 bg-[#E55C29] mx-auto rounded-full"></div>
          </div>

          <p className="text-center text-[17px] sm:text-[20px] leading-relaxed font-semibold max-w-[720px] mx-auto mb-16 font-sans text-neutral-700">
            「英語の言語特性」や「プロサッカー選手の傾向」を踏まえると、<br className="hidden sm:inline" />
            成人後に英語力を飛躍的に伸ばすためには、膨大な努力が必要です。
          </p>

          {/* Grid Layout for the 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch my-10">
            {/* Card 01 */}
            <div className="bg-white rounded-3xl border border-neutral-200/70 p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-center text-center min-h-[140px]">
              <div className="flex items-center justify-center gap-3.5 mb-2.5">
                <span className="text-2xl sm:text-3xl font-extrabold font-sans text-[#E55C29]">01</span>
                <h4 className="text-[19px] sm:text-[21px] font-extrabold text-neutral-950 font-serif tracking-wide">
                  英語と日本語の相違
                </h4>
              </div>
              <p className="text-sm sm:text-[15px] font-semibold text-neutral-600 leading-relaxed font-sans px-4">
                英語と日本語は、文法・発音共に、<br />
                全く異なる(対極に位置する)言語
              </p>
            </div>

            {/* Card 02 */}
            <div className="bg-white rounded-3xl border border-neutral-200/70 p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-center text-center min-h-[140px]">
              <div className="flex items-center justify-center gap-3.5 mb-2.5">
                <span className="text-2xl sm:text-3xl font-extrabold font-sans text-[#E55C29]">02</span>
                <h4 className="text-[19px] sm:text-[21px] font-extrabold text-neutral-950 font-serif tracking-wide">
                  日本人に必要な学習時間
                </h4>
              </div>
              <p className="text-sm sm:text-[15px] font-semibold text-neutral-600 leading-relaxed font-sans px-4">
                日本人が英語を習得するために必要な学習時間は、約2,300時間（※一般論）
              </p>
            </div>

            {/* Card 03 */}
            <div className="bg-white rounded-3xl border border-neutral-200/70 p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-center text-center min-h-[140px]">
              <div className="flex items-center justify-center gap-3.5 mb-2.5">
                <span className="text-2xl sm:text-3xl font-extrabold font-sans text-[#E55C29]">03</span>
                <h4 className="text-[19px] sm:text-[21px] font-extrabold text-neutral-950 font-serif tracking-wide">
                  学生時代の英語学習
                </h4>
              </div>
              <p className="text-sm sm:text-[15px] font-semibold text-neutral-600 leading-relaxed font-sans px-4">
                真剣な学習は実施してきておらず、<br />
                英語の“基礎体力”や“過去の貯蓄”が欠如
              </p>
            </div>

            {/* Card 04 */}
            <div className="bg-white rounded-3xl border border-neutral-200/70 p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-center text-center min-h-[140px]">
              <div className="flex items-center justify-center gap-3.5 mb-2.5">
                <span className="text-2xl sm:text-3xl font-extrabold font-sans text-[#E55C29]">04</span>
                <h4 className="text-[19px] sm:text-[21px] font-extrabold text-neutral-950 font-serif tracking-wide">
                  英語接点/活用量の希薄
                </h4>
              </div>
              <p className="text-sm sm:text-[15px] font-semibold text-neutral-600 leading-relaxed font-sans px-4">
                日常生活だけでは、第二言語習得に必要な<br />
                言語接点量/活用量の担保が困難
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 🚀 INSERTED SECTION: WHY ENGLISH COACHING IS EFFECTIVE (01, 02 AND RECIPIENT PROFILE LIST) */}
      <section 
        id="why-coaching-effective-section" 
        className="relative bg-[#faf9f6] text-neutral-900 z-40 border-t border-b border-orange-100/40 px-4 py-20 sm:py-28"
      >
        <div className="max-w-[840px] mx-auto w-full">
          {/* Main Title */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-neutral-950 font-serif mb-4 leading-tight">
              <span className="block sm:inline">なぜ、"英語コーチング"</span>
              <span className="block sm:inline">が有効か？</span>
            </h2>
            <div className="w-16 h-1.5 bg-[#E55C29] mx-auto rounded-full"></div>
          </div>
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mb-10">
              <span className="text-8xl sm:text-9xl font-sans text-[#E55C29] opacity-30 font-black tracking-tight leading-none select-none">
                01
              </span>
              <div className="flex-1">
                <p className="text-[19px] sm:text-[23px] font-sans font-bold leading-relaxed text-neutral-900 tracking-wide text-left">
                  英会話(*試合)ではなく、“トレーニング(*日々の練習)に着目し、効率的に英会話スキルの向上を図ることができます。
                </p>
              </div>
            </div>

            {/* Accent statement */}
            <div className="text-center text-neutral-900 font-sans font-extrabold text-[16px] sm:text-[19px] tracking-wide leading-relaxed mb-10 py-2">
              効率的に英会話力を伸ばすには、サッカー同様「日々の練習」と「試合」の両輪が重要です。
            </div>

            {/* Loop diagram with two columns/circles */}
            <div className="flex flex-row items-start justify-between gap-3 sm:gap-6 my-10 relative">
              
              {/* Left Circle - Training */}
              <div className="flex flex-col items-center text-center">
                <div className="w-[150px] h-[150px] sm:w-[230px] sm:h-[230px] rounded-full bg-white border-2 border-white p-4 sm:p-8 flex flex-col justify-start items-center shadow-md relative group hover:scale-[1.02] transition-transform duration-300 pt-6 sm:pt-10">
                  <div className="h-12 sm:h-14 flex flex-col justify-center items-center mb-3 sm:mb-4 border-b border-[#E55C29]/35 pb-2 w-full select-none">
                    <h4 className="text-[16px] sm:text-xl font-black text-neutral-950 tracking-wide">
                      トレーニング
                    </h4>
                    <span className="text-[11.5px] sm:text-[14.3px] text-neutral-800 font-bold mt-0.5">
                      (*日々の練習)
                    </span>
                  </div>
                  <div className="h-16 sm:h-20 flex flex-col justify-start">
                    <ul className="text-[10.5px] sm:text-[14.5px] font-extrabold text-[#111111] space-y-1 text-left list-disc list-inside">
                      <li>スキルAの強化</li>
                      <li>スキルBの強化</li>
                      <li>スキルCの強化</li>
                    </ul>
                  </div>
                </div>
                {/* Clean, backgroundless text as requested */}
                <div className="mt-3 sm:mt-4 text-[#E55C29] text-[12px] sm:text-[17px] font-bold tracking-wide select-none">
                  *英語コーチングで強化
                </div>
              </div>

              {/* Feed-back Loop arrow in between - Minimal rotating arrow only */}
              {/* Align arrow to circle centers (not captions) */}
              <div className="flex flex-col items-center select-none relative z-10 mt-[57px] sm:mt-[89px]">
                <RefreshCw className="w-[36px] h-[36px] sm:w-[52px] sm:h-[52px] text-[#E55C29] animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              {/* Right Circle - Matches */}
              <div className="flex flex-col items-center text-center">
                <div className="w-[150px] h-[150px] sm:w-[230px] sm:h-[230px] rounded-full bg-white border-2 border-white p-4 sm:p-8 flex flex-col justify-start items-center shadow-md relative group hover:scale-[1.02] transition-transform duration-300 pt-6 sm:pt-10">
                  <div className="h-12 sm:h-14 flex flex-col justify-center items-center mb-3 sm:mb-4 border-b border-[#E55C29]/35 pb-2 w-full select-none">
                    <h4 className="text-[16px] sm:text-xl font-black text-neutral-950 tracking-wide">
                      英会話
                    </h4>
                    <span className="text-[11.5px] sm:text-[14.3px] text-neutral-800 font-bold mt-0.5">
                      (*試合)
                    </span>
                  </div>
                  <div className="h-16 sm:h-20 flex flex-col justify-start">
                    <ul className="text-[10.5px] sm:text-[14.5px] font-extrabold text-[#111111] space-y-1.5 sm:space-y-2 text-left list-disc list-inside">
                      <li>磨いたスキルの活用</li>
                      <li>伸ばすスキルの発見</li>
                    </ul>
                  </div>
                </div>
                {/* Clean, backgroundless text as requested */}
                <div className="mt-3 sm:mt-4 text-[#E55C29] text-[12px] sm:text-[17px] font-bold tracking-wide select-none">
                  *日常生活・英会話で強化
                </div>
              </div>

            </div>

            {/* Analogy & Typic Problem block */}
            <div className="bg-white rounded-3xl shadow-md border border-neutral-200/50 p-6 sm:p-10 select-text">
              <div className="flex items-center gap-3 mb-8 border-b border-[#E55C29]/15 pb-4">
                <div className="w-1.5 h-6 bg-[#E55C29] rounded-full"></div>
                <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-neutral-950 tracking-wide text-left">
                  サッカーも英語も、成長へのアプローチは全く同じ。
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {/* Soccer column */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black bg-neutral-100 text-neutral-800 px-2 py-0.5 rounded uppercase tracking-wider">Football</span>
                    <h4 className="text-[16px] sm:text-[18px] font-sans font-black text-neutral-950">
                      サッカーの"試合"と"練習"
                    </h4>
                  </div>
                  <p className="text-[14.5px] sm:text-[15.5px] leading-[1.8] text-neutral-700 font-medium text-left">
                    サッカーでは、実践的な11対11の形式で公式戦や練習を実施すると同時に、そこで発見した課題を日々のトレーニングに落とし込み、課題克服のための練習を実施します。<br />
                    <span className="text-[13px] text-neutral-500 font-bold mt-2 block">
                      （シュート、ドリブル、パス、クロスなど、スキルを細分化した課題特定と打ち手のトレーニングを実施します。）
                    </span>
                  </p>
                </div>

                {/* English column */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black bg-neutral-100 text-neutral-800 px-2 py-0.5 rounded uppercase tracking-wider">English</span>
                    <h4 className="text-[16px] sm:text-[18px] font-sans font-black text-neutral-950">
                      英語の"実践"と"学習"
                    </h4>
                  </div>
                  <p className="text-[14.5px] sm:text-[15.5px] leading-[1.8] text-neutral-700 font-medium text-left">
                    英語もサッカーと同じです。ただ英会話を実施するだけ、ただ英語圏で生活するだけでは、実践経験は積むことができるものの、成長速度の観点では、少し効率が悪い傾向にあります。<br />
                    <span className="text-[13px] text-[#E55C29] font-bold mt-2 block">
                      サッカー同様に、実践（英会話）で見つけた課題を日々のトレーニング（学習）を通して改善することが重要です。
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-orange-200/50 my-16"></div>
          {/* Core Benefit Block 02 */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mb-10">
              <span className="text-8xl sm:text-9xl font-sans text-[#E55C29]/35 font-black tracking-tight leading-none select-none">
                02
              </span>
              <div className="flex-1">
                <p className="text-[19px] sm:text-[23px] font-sans font-bold leading-relaxed text-neutral-900 tracking-wide text-left">
                  英語コーチングを有効活用することで、「課題・打ち手の明確化」と「体系的な学習」を実施できます。
                </p>
              </div>
            </div>

            {/* Comparison structure */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:grid-rows-[auto_1fr_1fr_1fr] gap-6 items-stretch mt-12 relative">
              
              {/* === LEFT COLUMN CONTENT === */}
              {/* Left Column Header (Self-Study 独学) */}
              <div className="md:col-start-1 md:row-start-1 flex items-center gap-3 justify-center py-2.5 select-none">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                <h3 className="text-lg sm:text-xl font-bold font-serif text-neutral-700 tracking-wider">
                  独学の場合
                </h3>
              </div>

              {/* Card 1 L */}
              <div className="md:col-start-1 md:row-start-2 bg-white border border-neutral-200/80 p-6 rounded-2xl shadow-sm text-center flex items-center justify-center min-h-[120px] hover:shadow-md transition-shadow">
                <p className="text-[15px] sm:text-[16px] font-bold text-neutral-700 leading-relaxed text-left sm:text-center">
                  自分の課題は「何」か、課題に対する<br />
                  最適な学習は「何」か、わからない・・
                </p>
              </div>

              {/* Card 2 L */}
              <div className="md:col-start-1 md:row-start-3 bg-white border border-neutral-200/80 p-6 rounded-2xl shadow-sm text-center flex items-center justify-center min-h-[120px] hover:shadow-md transition-shadow">
                <p className="text-[15px] sm:text-[16px] font-bold text-neutral-700 leading-relaxed text-left sm:text-center">
                  英語学習の教材が多すぎて、「どのように」学習すると効率的なのか、わからない・・
                </p>
              </div>

              {/* Card 3 L */}
              <div className="md:col-start-1 md:row-start-4 bg-white border border-neutral-200/80 p-6 rounded-2xl shadow-sm text-center flex items-center justify-center min-h-[120px] hover:shadow-md transition-shadow">
                <p className="text-[15px] sm:text-[16px] font-bold text-neutral-700 leading-relaxed text-left sm:text-center">
                  頑張ると決めたのに、気がつくと、<br />
                  「学習の強度」が落ちている・・
                </p>
              </div>

              {/* Mobile-only divider: separate Self-Study and Coaching */}
              <div className="md:hidden h-px bg-neutral-200/70 my-3" />

              {/* === RIGHT COLUMN CONTENT === */}
              {/* Right Column Header (Coaching 英語コーチング) */}
              <div className="md:col-start-3 md:row-start-1 flex items-center gap-3 justify-center py-2.5 select-none">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#E55C29] animate-pulse" />
                <h3 className="text-lg sm:text-xl font-black font-serif text-[#E55C29] tracking-wider">
                  英語コーチングの場合
                </h3>
              </div>

              {/* Card 1 R */}
              <div className="md:col-start-3 md:row-start-2 bg-white border border-[#E55C29]/25 p-6 rounded-2xl shadow-sm text-center flex items-center justify-center min-h-[120px] hover:shadow-md transition-shadow relative overflow-hidden group">
                <p className="text-[15px] sm:text-[16px] font-bold text-neutral-800 leading-relaxed z-10 text-left sm:text-center">
                  学習理論を活用するため、「課題の具体化」と「打ち手の明確化」を実現できる！
                </p>
              </div>

              {/* Card 2 R */}
              <div className="md:col-start-3 md:row-start-3 bg-white border border-[#E55C29]/25 p-6 rounded-2xl shadow-sm text-center flex items-center justify-center min-h-[120px] hover:shadow-md transition-shadow relative overflow-hidden group">
                <p className="text-[15px] sm:text-[16px] font-bold text-neutral-800 leading-relaxed z-10 text-left sm:text-center">
                  中長期プログラムの構築により、「体系的な学習」を「段階的に進める」ことができる！
                </p>
              </div>

              {/* Card 3 R */}
              <div className="md:col-start-3 md:row-start-4 bg-white border border-[#E55C29]/25 p-6 rounded-2xl shadow-sm text-center flex items-center justify-center min-h-[120px] hover:shadow-md transition-shadow relative overflow-hidden group">
                <p className="text-[15px] sm:text-[16px] font-bold text-neutral-800 leading-relaxed z-10 text-left sm:text-center">
                  緻密なサービス設計により、<br />
                  「根性に頼らない継続」を実施できる！
                </p>
              </div>

              {/* === ROW-LEVEL CENTRAL ARROWS (DESKTOP GRID COORDS) === */}
              {/* Arrow 1 */}
              <div className="hidden md:flex md:col-start-2 md:row-start-2 items-center justify-center px-4 self-stretch">
                <div className="flex gap-1 text-[#E55C29] font-extrabold text-2xl tracking-widest animate-pulse select-none">
                  ≫≫
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="hidden md:flex md:col-start-2 md:row-start-3 items-center justify-center px-4 self-stretch">
                <div className="flex gap-1 text-[#E55C29] font-extrabold text-2xl tracking-widest animate-pulse select-none">
                  ≫≫
                </div>
              </div>

              {/* Arrow 3 */}
              <div className="hidden md:flex md:col-start-2 md:row-start-4 items-center justify-center px-4 self-stretch">
                <div className="flex gap-1 text-[#E55C29] font-extrabold text-2xl tracking-widest animate-pulse select-none">
                  ≫≫
                </div>
              </div>

            </div>

            {/* Bouncing giant orange indicator arrow below Section 2 */}
            <div className="flex flex-col items-center justify-center mt-20 select-none">
              <div className="animate-bounce flex flex-col items-center justify-center">
                <svg 
                  className="w-16 h-16 text-[#E55C29]" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 6l6 6 6-6" className="opacity-35" />
                  <path d="M6 13l6 6 6-6" />
                </svg>
              </div>
            </div>

          </div>

          {/* Section 03: Profile target list ("そのため、現在このような選手を...") */}
          <div className="mt-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-black font-serif mb-10 leading-relaxed text-left">
              従って、このような選手を中心にご利用頂いております。
            </h3>

            {/* Bullet points mapping */}
            <div className="bg-white/90 border border-orange-100 rounded-3xl p-6 sm:p-12 shadow-sm space-y-6 sm:space-y-8">
              {[
                "すでに海外でプレーされており、更なる英会話力向上に向き合う選手",
                "将来の海外移籍を見据え、日本でゼロから英語学習を始める選手",
                "外国人の監督や選手と、もっと密なコミュニケーションを取るために、英語でのコミュニケーション力を高めたいと考える選手",
                "これまで独学で突き進んできたが、伸び悩みを感じている選手",
                "オンライン英会話を実施してきたが、あまり効果を得られなかった選手",
                "引退後のキャリアを見据え、現役中に競技以外の語学スキルを高めたいと考える選手"
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-4 sm:gap-5 group">
                  <div className="mt-1.5 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#E55C29] border-2 border-[#E55C29]/30 shadow-sm flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <p className="text-[15px] sm:text-[18px] leading-[1.8] font-sans font-semibold text-neutral-800 tracking-wide text-left group-hover:text-black transition-colors">
                    {text}
                  </p>
                </div>
              ))}
              
              <div className="flex items-center gap-4 sm:gap-5 pt-2">
                <div className="w-3.5 h-3.5"></div>
                <p className="text-[14px] sm:text-[16px] font-semibold text-neutral-500 tracking-widest pl-1">
                  etc.
                </p>
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
                  英語コーチングは、英会話力の向上に重要な「3つの要素」を、最大化させるサービスです。
                </p>
              </div>
            </div>

            {/* Quality x Quantity x Consistency diagram */}
            <div className="flex flex-col items-center justify-center my-12 bg-white/40 p-6 sm:p-10 rounded-3xl border border-yellow-100/40 w-full max-w-[860px] mx-auto">
              
              <div className="w-full flex flex-col items-center">
                {/* 1. Circle Row with perfectly aligned centers */}
                <div className="flex items-center justify-between w-full max-w-[390px] sm:max-w-[590px] mx-auto px-2 sm:px-4 select-none">
                  {/* Quality circle */}
                  <div className="w-[96px] h-[96px] sm:w-[130px] sm:h-[130px] rounded-full bg-neutral-800 text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl sm:text-4xl font-extrabold font-serif">質</span>
                  </div>

                  {/* Multiply */}
                  <span className="text-2xl sm:text-4xl text-neutral-400 font-extrabold font-sans">×</span>

                  {/* Quantity circle */}
                  <div className="w-[96px] h-[96px] sm:w-[130px] sm:h-[130px] rounded-full bg-neutral-800 text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl sm:text-4xl font-extrabold font-serif">量</span>
                  </div>

                  {/* Multiply */}
                  <span className="text-2xl sm:text-4xl text-neutral-400 font-extrabold font-sans">×</span>

                  {/* Consistency circle */}
                  <div className="w-[96px] h-[96px] sm:w-[130px] sm:h-[130px] rounded-full bg-neutral-800 text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl sm:text-4xl font-extrabold font-serif">継続</span>
                  </div>
                </div>

                {/* 2. Label Row with aligned text below circles */}
                <div className="grid grid-cols-3 w-full max-w-[390px] sm:max-w-[590px] mx-auto mt-6 text-center select-none gap-x-2 sm:gap-x-4">
                  <div className="flex flex-col items-center justify-start">
                    <span className="text-[13px] sm:text-[16px] font-extrabold text-neutral-800 leading-snug">
                      個々の課題に即した<br />
                      学習計画
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <span className="text-[13px] sm:text-[16px] font-extrabold text-[#111111] leading-snug">
                      膨大なインプット/<br />
                      アウトプット
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <span className="text-[13px] sm:text-[16px] font-extrabold text-neutral-800 leading-snug">
                      中長期間の学習
                    </span>
                  </div>
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
                  <li>毎日、2時間〜3時間の実施を推奨</li>
                  <li>移動や治療、ストレッチの時間などを有効活用</li>
                  <li>個々のスケジュールに応じて柔軟に設計</li>
                </ul>
                <p className="mt-5 text-center text-[13px] sm:text-[15.5px] font-extrabold text-[#E55C29] tracking-wider bg-orange-50/50 py-1.5 rounded-lg">
                  ※まずは1時間/日から開始し、徐々に時間を増やす形も可能です。
                </p>
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
                  定期的なミーティングや日々の伴走サポートなどを通して、<br className="hidden sm:inline" />「英会話力を伸ばすための効率的な学習」を支援します。
                </p>
              </div>
            </div>

            {/* Grid of 4 support cards conforming strictly to mock */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-12">
              
              {/* Card 1 - 1on1 */}
              <div className="rounded-2xl p-5 sm:p-6 flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-all duration-300 group relative min-h-[300px] border border-orange-100/30">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-3 text-neutral-900 group-hover:scale-110 transition-transform select-none">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-[16px] sm:text-[17.5px] font-extrabold text-neutral-950 font-serif tracking-tight text-center leading-snug min-h-[44px] flex items-center justify-center">
                  1on1の定例<br/>ミーティング
                </h4>
                <div className="w-full border-t border-neutral-200 my-3"></div>
                <ul className="text-xs sm:text-[13px] font-bold text-neutral-600 space-y-2 text-left list-disc pl-4 leading-relaxed">
                  <li>毎週or2週間に一度、日々の進捗確認や、計画の修正を実施</li>
                </ul>
                {/* Thick accent line at the bottom */}
                <div className="w-8 h-1 bg-[#E55C29] rounded-full mt-auto pt-0.5"></div>
              </div>

              {/* Card 2 - Program design */}
              <div className="rounded-2xl p-5 sm:p-6 flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-all duration-300 group relative min-h-[300px] border border-orange-100/30">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-3 text-neutral-900 group-hover:scale-110 transition-transform select-none">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-[16px] sm:text-[17.5px] font-extrabold text-neutral-950 font-serif tracking-tight text-center leading-snug min-h-[44px] flex items-center justify-center">
                  学習プログラム/<br/>教材の設計
                </h4>
                <div className="w-full border-t border-neutral-200 my-3"></div>
                <ul className="text-xs sm:text-[13px] font-bold text-neutral-600 space-y-2 text-left list-disc pl-4 leading-relaxed">
                  <li>個々の目標/課題に即した教材の選定やカリキュラムの設計</li>
                </ul>
                <div className="w-8 h-1 bg-[#E55C29] rounded-full mt-auto pt-0.5"></div>
              </div>

              {/* Card 3 - Daily correction */}
              <div className="rounded-2xl p-5 sm:p-6 flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-all duration-300 group relative min-h-[300px] border border-orange-100/30">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-3 text-neutral-900 group-hover:scale-110 transition-transform select-none">
                  <PenTool className="w-6 h-6" />
                </div>
                <h4 className="text-[16px] sm:text-[17.5px] font-extrabold text-neutral-950 font-serif tracking-tight text-center leading-snug min-h-[44px] flex items-center justify-center">
                  日々の課題添削/<br/>フィードバック
                </h4>
                <div className="w-full border-t border-neutral-200 my-3"></div>
                <ul className="text-xs sm:text-[13px] font-bold text-neutral-600 space-y-2.5 text-left list-disc pl-4 leading-relaxed">
                  <li>各課題の提供/提出/添削サイクルの実施</li>
                  <li>個別の相談/質問/FB</li>
                </ul>
                <div className="w-8 h-1 bg-[#E55C29] rounded-full mt-auto pt-0.5"></div>
              </div>

              {/* Card 4 - Support */}
              <div className="rounded-2xl p-5 sm:p-6 flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-all duration-300 group relative min-h-[300px] border border-orange-100/30">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-3 text-neutral-900 group-hover:scale-110 transition-transform select-none">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h4 className="text-[16px] sm:text-[17.5px] font-extrabold text-neutral-950 font-serif tracking-tight text-center leading-snug min-h-[44px] flex items-center justify-center">
                  一定期間の<br/>伴走サポート
                </h4>
                <div className="w-full border-t border-neutral-200 my-3"></div>
                <ul className="text-xs sm:text-[13px] font-bold text-neutral-600 space-y-2.5 text-left list-disc pl-4 leading-relaxed">
                  <li>目標達成に向けた日々の伴走支援</li>
                  <li>期間：約6ヶ月</li>
                </ul>
                <div className="w-8 h-1 bg-[#E55C29] rounded-full mt-auto pt-0.5"></div>
              </div>

            </div>

            {/* Note below card grid */}
            <p className="mt-12 text-center text-xs sm:text-[14px] font-bold text-neutral-500 leading-relaxed font-sans max-w-[720px] mx-auto select-none">
              ※日々の学習は、単語や文法、シャドーイング、瞬間英作文、AIスピーキングなど、複数のトレーニングが存在
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
              Kepty English の特徴/拘り
            </h2>
            <div className="w-16 h-1.5 bg-[#E55C29] mx-auto rounded-full"></div>
            
            <p className="text-[19px] sm:text-[23px] font-sans font-bold leading-relaxed text-neutral-900 tracking-wide text-center mt-10">
              一般的な英語コーチングの価値に加え、<br />
              我々は、独自の価値および機能も持ち合わせております。
            </p>
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
                      Webアプリでの学習
                    </h4>
                  </div>
                  <p className="text-[14px] sm:text-[15.5px] font-bold text-neutral-600 leading-relaxed text-center">
                    「練習の合間や移動中の隙間時間」を、<br />
                    最高効率の学習時間へ変化させます。
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
                      テクノロジーの有効活用
                    </h4>
                  </div>
                  <p className="text-[14px] sm:text-[15.5px] font-bold text-neutral-600 leading-relaxed text-center">
                    より速く、より正確なフィードバックと、<br />
                    より心地よい学習体験を実現します。
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
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-purple-100/30 max-w-[940px] w-full mx-auto mt-10 text-center">
            
            {/* 03 Title Header inside card */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="text-5xl sm:text-6xl font-sans text-neutral-950 opacity-30 font-black tracking-tight leading-none select-none">
                  03
                </span>
                <h4 className="text-[18px] sm:text-[22px] font-extrabold text-neutral-950 font-serif tracking-tight leading-tight">
                  学習理論に立脚したサービス設計
                </h4>
              </div>

              <p className="text-[14px] sm:text-[16.5px] font-bold text-neutral-600 leading-relaxed max-w-[800px] mx-auto select-none mt-4">
                <span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">英会話の5ステップ</span>という学習理論を元に、学習内容を設計します。<br />
                <span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">より正確な課題特定</span>と<span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">個別最適なトレーニング</span>の提示を通して、効率的な学習を実現します。
              </p>
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

          </div>

          {/* Card 04 Block: 学習強度 */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-purple-100/30 max-w-[940px] w-full mx-auto mt-10">
            
            {/* 04 Title Header inside card */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="text-5xl sm:text-6xl font-sans text-neutral-950 opacity-30 font-black tracking-tight leading-none select-none">
                  04
                </span>
                <h4 className="text-[18px] sm:text-[22px] font-extrabold text-neutral-950 font-serif tracking-tight leading-tight">
                  段階的なトレーニング構造
                </h4>
              </div>

              <p className="text-[14px] sm:text-[16.5px] font-bold text-neutral-600 leading-relaxed max-w-[800px] mx-auto select-none mt-4">
                まずは、<span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">揺るぎない基礎</span>を構築し、それを<span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">使える武器</span>まで昇華させます。<br/>
                その後、実践的な会話の強化へ比重をシフトしていきます。
              </p>
            </div>

            {/* Stage Selector Grid */}
            <div className="mt-8 relative">
              
              {/* Learning Intensity Icons matching standard circles of same size as user request */}
              <div className="flex justify-end items-center gap-4 mb-4 pr-4">
                <span className="text-xs font-black text-neutral-500 font-sans">学習強度：</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="w-5 h-5 rounded-full bg-[#FFF6F2] border border-[#FFEBE0] flex items-center justify-center text-[9px] font-bold text-neutral-500">低</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-5 h-5 rounded-full bg-[#FFE6DB] border border-[#FFD2C2] flex items-center justify-center text-[9px] font-bold text-neutral-800">中</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-5 h-5 rounded-full bg-[#E55C29] border border-[#D04D1B] flex items-center justify-center text-[9px] font-bold text-white">高</span>
                  </div>
                </div>
              </div>

              {/* 3 Stage columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                
                {/* Early Stage 序盤 */}
                <div className="flex flex-col items-center bg-neutral-50/50 rounded-2xl p-6 border border-neutral-100/70 hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 mb-2 w-full justify-center">
                    <span className="text-[15px] sm:text-[16.5px] font-black text-neutral-950 tracking-wider">序盤</span>
                  </div>
                  <span className="text-[13.5px] sm:text-[14.5px] font-black text-[#E55C29] tracking-wider mb-6">強固な基礎固め</span>
                  
                  <div className="flex gap-2.5 justify-center h-[260px] items-stretch w-full max-w-[240px]">
                    {/* Column 1 - High Intensity */}
                    <div className="flex-1 rounded-2xl bg-[#E55C29] text-white font-black py-6 px-1 flex flex-col justify-around text-center border border-[#D04D1B] shadow-sm transition-transform hover:scale-[1.03]">
                      <span className="text-xs sm:text-[13px] tracking-widest leading-none">発音</span>
                      <span className="text-xs sm:text-[13px] tracking-widest leading-none">単語</span>
                      <span className="text-xs sm:text-[13px] tracking-widest leading-none">文法</span>
                    </div>
                    {/* Column 2 - Medium Intensity */}
                    <div className="flex-1 rounded-2xl bg-[#FFE6DB] text-neutral-850 font-black py-6 px-1 flex flex-col justify-around text-center border border-[#FFD2C2] shadow-xs transition-transform hover:scale-[1.03]">
                      <span className="text-[11.5px] sm:text-[12px] tracking-normal leading-tight">英作文</span>
                      <span className="text-[11px] sm:text-[11.5px] tracking-tighter leading-tight">シャドー<br />イング</span>
                      <span className="text-[10px] sm:text-[10.5px] tracking-tighter leading-none opacity-80">フォーム<br />改善</span>
                    </div>
                    {/* Column 3 - Low Intensity */}
                    <div className="flex-1 rounded-2xl bg-[#FFF6F2] text-neutral-400 font-extrabold py-6 px-1 flex flex-col justify-around text-center border border-[#FFEBE0]/60 shadow-2xs transition-transform hover:scale-[1.03]">
                      <span className="text-[10px] sm:text-[11px] tracking-tighter leading-tight">トピック<br />トーク</span>
                      <span className="text-[9.5px] sm:text-[10px] tracking-tighter leading-none opacity-70">オンライン<br />英会話</span>
                    </div>
                  </div>
                </div>

                {/* Mid Stage 中盤 */}
                <div className="flex flex-col items-center bg-neutral-50/50 rounded-2xl p-6 border border-neutral-100/70 hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 mb-2 w-full justify-center">
                    <span className="text-[15px] sm:text-[16.5px] font-black text-neutral-950 tracking-wider">中盤</span>
                  </div>
                  <span className="text-[13.5px] sm:text-[14.5px] font-black text-[#E55C29] tracking-wider mb-6">武器の磨き込み</span>
                  
                  <div className="flex gap-2.5 justify-center h-[260px] items-stretch w-full max-w-[240px]">
                    {/* Column 1 - Low Intensity */}
                    <div className="flex-1 rounded-2xl bg-[#FFF6F2] text-neutral-400 font-extrabold py-6 px-1 flex flex-col justify-around text-center border border-[#FFEBE0]/60 shadow-2xs transition-transform hover:scale-[1.03]">
                      <span className="text-xs sm:text-[13px] tracking-widest leading-none">発音</span>
                      <span className="text-xs sm:text-[13px] tracking-widest leading-none">単語</span>
                      <span className="text-xs sm:text-[13px] tracking-widest leading-none">文法</span>
                    </div>
                    {/* Column 2 - High Intensity */}
                    <div className="flex-1 rounded-2xl bg-[#E55C29] text-white font-black py-6 px-1 flex flex-col justify-around text-center border border-[#D04D1B] shadow-sm transition-transform hover:scale-[1.03]">
                      <span className="text-[11.5px] sm:text-[12.5px] tracking-normal leading-tight">英作文</span>
                      <span className="text-[11.5px] sm:text-[12px] tracking-tighter leading-tight">シャドー<br />イング</span>
                      <span className="text-[10.5px] sm:text-[11px] tracking-tighter leading-none opacity-90 font-black">フォーム<br />改善</span>
                    </div>
                    {/* Column 3 - Medium Intensity */}
                    <div className="flex-1 rounded-2xl bg-[#FFE6DB] text-neutral-850 font-black py-6 px-1 flex flex-col justify-around text-center border border-[#FFD2C2] shadow-xs transition-transform hover:scale-[1.03]">
                      <span className="text-[10px] sm:text-[11px] tracking-tighter leading-tight">トピック<br />トーク</span>
                      <span className="text-[9.5px] sm:text-[10px] tracking-tighter leading-none opacity-80">オンライン<br />英会話</span>
                    </div>
                  </div>
                </div>

                {/* Late Stage 終盤 */}
                <div className="flex flex-col items-center bg-neutral-50/50 rounded-2xl p-6 border border-neutral-100/70 hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 mb-2 w-full justify-center">
                    <span className="text-[15px] sm:text-[16.5px] font-black text-neutral-950 tracking-wider">終盤</span>
                  </div>
                  <span className="text-[13.5px] sm:text-[14.5px] font-black text-[#E55C29] tracking-wider mb-6">型の確立</span>
                  
                  <div className="flex gap-2.5 justify-center h-[260px] items-stretch w-full max-w-[240px]">
                    {/* Column 1 - Low Intensity */}
                    <div className="flex-1 rounded-2xl bg-[#FFF6F2] text-neutral-400 font-extrabold py-6 px-1 flex flex-col justify-around text-center border border-[#FFEBE0]/60 shadow-2xs transition-transform hover:scale-[1.03]">
                      <span className="text-xs sm:text-[13px] tracking-widest leading-none">発音</span>
                      <span className="text-xs sm:text-[13px] tracking-widest leading-none">単語</span>
                      <span className="text-xs sm:text-[13px] tracking-widest leading-none">文法</span>
                    </div>
                    {/* Column 2 - Medium Intensity */}
                    <div className="flex-1 rounded-2xl bg-[#FFE6DB] text-neutral-850 font-black py-6 px-1 flex flex-col justify-around text-center border border-[#FFD2C2] shadow-xs transition-transform hover:scale-[1.03]">
                      <span className="text-[11.5px] sm:text-[12px] tracking-normal leading-tight">英作文</span>
                      <span className="text-[11px] sm:text-[11.5px] tracking-tighter leading-tight">シャドー<br />イング</span>
                      <span className="text-[10px] sm:text-[10.5px] tracking-tighter leading-none opacity-80">フォーム<br />改善</span>
                    </div>
                    {/* Column 3 - High Intensity */}
                    <div className="flex-1 rounded-2xl bg-[#E55C29] text-white font-black py-6 px-1 flex flex-col justify-around text-center border border-[#D04D1B] shadow-sm transition-transform hover:scale-[1.03]">
                      <span className="text-[10.5px] sm:text-[11px] tracking-tighter leading-tight font-black">トピック<br />トーク</span>
                      <span className="text-[9.5px] sm:text-[10.5px] tracking-tighter leading-tight font-black">オンライン<br />英会話</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Section 05: サッカー特化のコンテンツ */}
          <div className="bg-white rounded-3xl px-6 py-6 sm:px-10 sm:py-8 pb-0 sm:pb-0 shadow-md border border-purple-100/30 max-w-[940px] w-full mx-auto mt-10 transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
              
              {/* Left Side Content Column */}
              <div className="flex flex-col justify-center text-left py-8 sm:py-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl sm:text-6xl font-sans text-neutral-950 opacity-30 font-black tracking-tight leading-none select-none">
                    05
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
                  ピッチ内外でのコミュニケーションや試合前後の<br/>
                  インタビューなど、様々な状況に対応可能です。
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
                          <span className="text-[7.5px] text-neutral-400 font-bold tracking-tight">Soccer Specialized Content Stream</span>
                        </div>
                        <span className="text-[8px] tracking-wider font-extrabold bg-red-50 text-red-600 px-2 py-0.5 rounded-full border border-red-100/55 font-mono">
                          PRE-MATCH PRACTICE
                        </span>
                      </div>

                      {/* Explanation subtitle block */}
                      <div className="text-left bg-neutral-50 rounded-xl p-1.5 border border-neutral-100 mb-2">
                        <p className="text-[8px] sm:text-[8.5px] leading-relaxed font-bold text-neutral-500">
                          特定のテーマについて自分の意見を論理的に展開し、会話を継続させる力がつきます。事前の準備と、本番での粘り強さが鍵となります。
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
                          <div className="text-[7px] font-extrabold text-neutral-400 font-mono tracking-wider mb-1">ACTIVE QUESTION</div>
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

          {/* Section 06: AIによる自動添削 */}
          <div className="bg-white rounded-3xl px-6 py-6 sm:px-10 sm:py-8 pb-0 sm:pb-0 shadow-md border border-purple-100/30 max-w-[940px] w-full mx-auto mt-10 transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
              
              {/* Left Side Content Column */}
              <div className="flex flex-col justify-center text-left py-8 sm:py-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl sm:text-6xl font-sans text-neutral-950 opacity-30 font-black tracking-tight leading-none select-none">
                    06
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
                          <span className="text-[10px] font-black tracking-normal uppercase text-neutral-900">KEPTY AI Coach</span>
                        </div>
                        <span className="text-[8px] font-bold text-neutral-700 font-mono">11:54 PM</span>
                      </div>

                      {/* Chat Messages Log Scroll area */}
                      <div className="flex-1 overflow-y-auto space-y-2 pr-0.5 text-left scrollbar-thin select-text">
                        
                        {/* Outgoing speech trigger bubble (user's input or status) - LINE green balloon */}
                        <div className="flex justify-end">
                          <div className="bg-[#85E249] text-neutral-900 rounded-2xl rounded-tr-xs px-2.5 py-1.5 max-w-[85%] text-[7.5px] font-bold leading-relaxed shadow-sm">
                            🎤 音声提出完了 (Kobe to Osaka / Australia)
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

          {/* Section 07: 中長期に渡るプログラム構成 */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-purple-100/30 max-w-[940px] w-full mx-auto mt-10">
            
            {/* 07 Title Header inside card */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="text-5xl sm:text-6xl font-sans text-neutral-950 opacity-30 font-black tracking-tight leading-none select-none">
                  07
                </span>
                <h4 className="text-[18px] sm:text-[22px] font-extrabold text-neutral-950 font-serif tracking-tight leading-tight">
                  中長期に渡るプログラム構成
                </h4>
              </div>

              <div className="max-w-[760px] mx-auto select-none mt-4 text-center">
                <p className="text-[15px] sm:text-[17px] font-black text-[#1a1a1a] leading-[1.85] font-sans">
                  「理論」や「基礎からの積み上げ」を軸にした<span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">本質的な能力向上</span>を実現するために、<br />
                  我々のプログラム期間は、<span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">約6ヶ月</span>で構成されます。
                </p>
                <p className="mt-5 text-[13px] sm:text-[14.5px] font-bold text-neutral-500 leading-relaxed font-sans bg-neutral-50 px-5 py-3 rounded-2xl inline-block border border-neutral-100/40">
                  ※短期での「詰め込み学習」や「小手先の技」は、提供しておりません。
                </p>
              </div>
            </div>

            {/* Layout: Top horizontal Specs + Bottom Gantt Timeline */}
            <div className="flex flex-col gap-6 mt-10 select-none max-w-[940px] mx-auto w-full">
              
              {/* Top Row: Horizontal Metadata Specs - White BG */}
              <div className="bg-white border border-neutral-200/60 p-5 rounded-2xl shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-left">
                <div className="flex items-center gap-3 pl-4">
                  <span className="text-[#E55C29] font-black text-xl">•</span>
                  <div>
                    <div className="text-[10.5px] uppercase tracking-wider text-neutral-400 font-extrabold font-sans">Training Term</div>
                    <div className="text-[16px] font-black text-neutral-850 font-sans">6 months</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 md:border-l md:border-neutral-100 md:pl-8 pl-4">
                  <span className="text-[#E55C29] font-black text-xl">•</span>
                  <div>
                    <div className="text-[10.5px] uppercase tracking-wider text-neutral-400 font-extrabold font-sans">Training Time</div>
                    <div className="text-[16px] font-black text-neutral-850 font-sans">2 hours / day</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:border-l md:border-neutral-100 md:pl-8 pl-4">
                  <span className="text-[#E55C29] font-black text-xl">•</span>
                  <div>
                    <div className="text-[10.5px] uppercase tracking-wider text-neutral-400 font-extrabold font-sans">Training Menu</div>
                    <div className="text-[16px] font-black text-neutral-850 font-sans">4 menus / day</div>
                  </div>
                </div>
              </div>

              {/* Bottom Column: Gantt Chart with horizontal scrolling on mobile */}
              <div className="w-full overflow-x-auto pb-4 scrollbar-thin">
                <div className="min-w-[700px] border border-neutral-100 rounded-2xl bg-[#fffdfb] overflow-hidden">
                  
                  {/* Phase Banners Row Grid */}
                  <div className="flex w-full border-b border-neutral-200 items-stretch bg-white">
                    {/* Leftspacer, match category style */}
                    <div className="w-[185px] shrink-0 border-r border-neutral-100/50 bg-neutral-50/10"></div>
                    
                    {/* Right Timeline Area */}
                    <div className="flex-1 grid grid-cols-6 gap-0.5 px-1 bg-neutral-100/10">
                      {/* Phase 1 */}
                      <div className="col-span-2 flex flex-col justify-between border-r border-[#E5E7EB]">
                        <div className="bg-[#FCA271] text-white font-extrabold text-xs sm:text-[13px] text-center py-2 tracking-wider font-sans">
                          Phase 1
                        </div>
                        <div className="p-3 bg-white text-center flex flex-col justify-center min-h-[68px]">
                          <span className="text-[12.5px] font-black text-neutral-850">“基礎”の再強化</span>
                          <span className="text-[9.5px] font-bold text-neutral-500 mt-1 whitespace-pre-line leading-tight">徹底的に強固な土台を構築する</span>
                        </div>
                      </div>

                      {/* Phase 2 */}
                      <div className="col-span-2 flex flex-col justify-between border-r border-[#E5E7EB]">
                        <div className="bg-[#E67E51] text-white font-extrabold text-xs sm:text-[13px] text-center py-2 tracking-wider font-sans">
                          Phase 2
                        </div>
                        <div className="p-3 bg-white text-center flex flex-col justify-center min-h-[68px]">
                          <span className="text-[12.5px] font-black text-neutral-850">“武器”の磨き上げ</span>
                          <span className="text-[9.5px] font-bold text-neutral-500 mt-1 whitespace-pre-line leading-tight">入念に技術を積み上げる</span>
                        </div>
                      </div>

                      {/* Phase 3 */}
                      <div className="col-span-2 flex flex-col justify-between">
                        <div className="bg-[#CD5126] text-white font-extrabold text-xs sm:text-[13px] text-center py-2 tracking-wider font-sans">
                          Phase 3
                        </div>
                        <div className="p-3 bg-white text-center flex flex-col justify-center min-h-[68px]">
                          <span className="text-[12.5px] font-black text-neutral-850">“型”の確立</span>
                          <span className="text-[9.5px] font-bold text-neutral-500 mt-1 whitespace-pre-line leading-tight">自身の勝ちパターンを確立する</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Month labels Timeline connector */}
                  <div className="bg-white py-4 border-b border-neutral-100 flex items-center justify-between gap-1">
                    <div className="w-[185px] shrink-0"></div> {/* Match category width spacer */}
                    
                    {/* Visual Month Connector Line */}
                    <div className="flex-1 flex items-center relative select-none px-1">
                      <div className="absolute left-0 right-0 h-[1.5px] bg-neutral-200 z-0"></div>
                      
                      <div className="w-full grid grid-cols-6 relative z-10 text-center font-bold text-neutral-600 text-[11px] sm:text-[12px] font-mono">
                        <div className="flex items-center justify-center relative font-sans">
                          <div className="absolute left-[5%] w-2.5 h-2.5 rounded-full bg-neutral-300 border-2 border-white shadow-xs"></div>
                          <span className="bg-white px-2.5 z-10 relative font-sans font-extrabold text-neutral-800">April</span>
                          <div className="absolute right-0 w-2 h-2 bg-neutral-300 rounded-full border border-white"></div>
                        </div>
                        <div className="flex items-center justify-center relative font-sans">
                          <span className="bg-white px-2.5 z-10 relative font-sans font-extrabold text-[#1a1a1a]">May</span>
                          <div className="absolute right-0 w-2 h-2 bg-[#E1E5F2] rounded-full border border-white"></div>
                        </div>
                        <div className="flex items-center justify-center relative font-sans">
                          <span className="bg-white px-2.5 z-10 relative font-sans font-extrabold text-[#1a1a1a]">June</span>
                          <div className="absolute right-0 w-2 h-2 bg-neutral-300 rounded-full border border-white"></div>
                        </div>
                        <div className="flex items-center justify-center relative font-sans font-bold">
                          <span className="bg-white px-2.5 z-10 relative font-sans font-extrabold text-[#1a1a1a]">July</span>
                          <div className="absolute right-0 w-2 h-2 bg-neutral-300 rounded-full border border-white"></div>
                        </div>
                        <div className="flex items-center justify-center relative font-sans font-bold">
                          <span className="bg-white px-2.5 z-10 relative font-sans font-extrabold text-[#1a1a1a]">August</span>
                          <div className="absolute right-0 w-2 h-2 bg-neutral-300 rounded-full border border-white"></div>
                        </div>
                        <div className="flex items-center justify-center relative font-sans font-bold">
                          <span className="bg-white px-2.5 z-10 relative font-sans font-extrabold text-[#1a1a1a]">September</span>
                          <div className="absolute right-[5%] w-2.5 h-2.5 rounded-full bg-neutral-300 border-2 border-white shadow-xs"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gantt Rows Space */}
                  <div className="bg-white py-4 flex flex-col gap-3.5 relative">
                    
                    {/* Vertical Gridlines across the rows container to represent month sections */}
                    <div className="absolute inset-0 flex pointer-events-none">
                      <div className="w-[186px] shrink-0 border-r border-[#FFEBE0]/40"></div>
                      <div className="flex-1 grid grid-cols-6 h-full px-1">
                        {[...Array(6)].map((_, idx) => (
                          <div key={idx} className="border-r border-neutral-100/50 h-full w-full"></div>
                        ))}
                      </div>
                    </div>

                    {/* Gantt categories rows mapping */}
                    {[
                      { badge: "知識DB", bg: "bg-[#FFF2D4] text-[#A67512] border-[#F2E0BC]", name: "Vocabulary", start: 0, end: 6, barColor: "from-neutral-900 via-[#AE663B] to-[#F1AA6E]" },
                      { badge: "知識DB", bg: "bg-[#FFF2D4] text-[#A67512] border-[#F2E0BC]", name: "Pronunciation", start: 0, end: 0.6, barColor: "from-neutral-900 to-[#925C37]" },
                      { badge: "知識DB", bg: "bg-[#FFF2D4] text-[#A67512] border-[#F2E0BC]", name: "Grammar", start: 0, end: 1.3, barColor: "from-neutral-900 to-[#B46736]" },
                      { badge: "音声知覚", bg: "bg-[#F3E0F7] text-[#713980] border-[#E5C9EC]", name: "Shadowing", start: 0, end: 6, barColor: "from-neutral-900 via-[#9955A1] to-[#E976E5]" },
                      { badge: "意味理解", bg: "bg-[#E2F7E4] text-[#297C3A] border-[#CEECD3]", name: "Reading", start: 3.5, end: 6, barColor: "from-neutral-900 via-[#347F46] to-[#59B569]" },
                      { badge: "概念化", bg: "bg-[#E3EDFA] text-[#285A9A] border-[#D1E0F3]", name: "Topic Talk", start: 2.2, end: 6, barColor: "from-neutral-900 via-[#3A6B9C] to-[#7EA9EE]" },
                      { badge: "文章化", bg: "bg-[#FFDFDF] text-[#A53434] border-[#F4CDCD]", name: "Speaking Form", start: 1.3, end: 2.5, barColor: "from-neutral-900 to-[#C64141]" },
                      { badge: "文章化", bg: "bg-[#FFDFDF] text-[#A53434] border-[#F4CDCD]", name: "Sentence Building", start: 0.7, end: 4.2, barColor: "from-neutral-900 via-[#A43B3B] to-[#EF7878]" }
                    ].map((row, i) => {
                      const totalC = 6;
                      const leftPercent = (row.start / totalC) * 100;
                      const widthPercent = ((row.end - row.start) / totalC) * 100;
                      return (
                        <div key={i} className="flex items-center relative z-10 min-h-[28px]">
                          
                        {/* Left label: Badge + Name */}
                        <div className="w-[185px] shrink-0 pl-3.5 flex items-center justify-start gap-2.5 text-left pr-2">
                          <span className={`w-14 shrink-0 text-center text-[9px] font-black tracking-tighter uppercase py-0.5 rounded border ${row.bg}`}>
                            {row.badge}
                          </span>
                          <span className="text-[12.5px] font-extrabold text-neutral-850 font-sans tracking-wide truncate">
                            {row.name}
                          </span>
                        </div>

                          {/* Right bar wrapper */}
                          <div className="flex-1 px-1 h-3.5 relative flex items-center">
                            <div 
                              style={{ left: `${leftPercent}%`, width: `${widthPercent}%` }}
                              className={`absolute h-[11.5px] rounded-full bg-gradient-to-r ${row.barColor} shadow-inner transition-all duration-300 hover:scale-y-110 cursor-pointer`}
                            />
                          </div>

                        </div>
                      );
                    })}

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
          </div>

          {/* Comparison Table Grid Wrapper (Horizontal Scroll on Mobile) */}
          <div className="w-full overflow-x-auto pb-6 scrollbar-thin select-none">
            {(() => {
              const comparisonRows = [
                {
                  label: "場の本質",
                  online: "アウトプットの場",
                  influencer: "コアファンの場",
                  bigCoaching: "建設的なスキル構築の場",
                  kepty: "建設的なスキル構築の場",
                },
                {
                  label: "学習内容",
                  online: "スピーキング中心",
                  influencer: "不明",
                  bigCoaching: ["・日常会話", "・ビジネス特化"],
                  kepty: ["・日常会話", "・サッカー特化"],
                },
                {
                  label: "メソッド",
                  online: "不明",
                  influencer: "不明",
                  bigCoaching: "科学的\n(第二言語習得論)",
                  kepty: "科学的\n(第二言語習得論)",
                },
                {
                  label: "学習期間",
                  online: "無期限",
                  influencer: "不明",
                  bigCoaching: "短期\n(約3ヶ月〜6ヶ月)",
                  kepty: "中長期\n(約6ヶ月)",
                },
                {
                  label: "価格",
                  online: "約1万〜2万/月",
                  influencer: "不明",
                  bigCoaching: "約10万/月〜\n20万/月",
                  kepty: "19,800円/月〜\n39,800円/月",
                },
                {
                  label: "コーチ",
                  online: "フィリピン人の\n講師等",
                  influencer: "インフルエンサー/\n委託講師",
                  bigCoaching: "一般の社員/\n委託講師",
                  kepty: "CEO",
                },
                {
                  label: "特徴",
                  online: "保持している\n基礎や武器の活用",
                  influencer: "インフルエンサーの\n思想やスタイルを取得",
                  bigCoaching: ["・内容：高品質", "・料金：高価格"],
                  kepty: ["・内容：大手同様", "・料金：低価格"],
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
                  <div className="w-[110px] sm:w-[130px] shrink-0 flex flex-col gap-3">
                    {/* Spacer matching Header height */}
                    <div className="h-[74px] sm:h-[84px]" />
                    
                    {comparisonRows.map((row, idx) => (
                      <div key={idx} className="h-[74px] sm:h-[84px] rounded-2xl bg-gradient-to-b from-[#FFA577] to-[#FF8149] p-2 text-center flex items-center justify-center shadow-xs">
                        <span className="text-white font-black text-[11.5px] sm:text-[13px] tracking-wide font-sans">
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
            <p className="before:content-['']">※上記、あくまで参考の比較表になります。</p>
            <p className="mt-1">※上記、2026年6月時点での実態です。今後変更する可能性がございます。</p>
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
            <p className="text-center text-neutral-800 text-[14px] sm:text-[17px] font-bold tracking-wider leading-relaxed mb-6 font-serif">
              「一部の選手だけでなく、全ての選手へ、プロフェッショナルな品質を。」
            </p>

            {/* Description text block */}
            <p className="text-center text-neutral-600 text-[14.5px] sm:text-[16.5px] font-bold leading-relaxed max-w-[800px] mx-auto mb-10 whitespace-pre-line font-sans">
              提供するサービスは、全ての選手に対して<span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">一律のプロフェッショナルクオリティ</span>であり、{"\n"}
              その内容に一切の差分はありません。{"\n"}
              この価格体系は、自らの英語学習に投資し、<span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">人生を前進させるきっかけ</span>を掴む、{"\n"}
              その権利を<span className="text-[#E55C29] text-[18px] sm:text-[21px] font-black">全カテゴリーのサッカー選手に届けたい。</span>という我々の思想の形です。
            </p>

            {/* Price Table Desktop/Mobile scroll wrapper */}
            <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
              <div className="min-w-[660px] max-w-[860px] mx-auto flex gap-3 p-1">
                
                {/* Column 1: Prices / Labels */}
                <div className="w-[150px] sm:w-[180px] shrink-0 flex flex-col gap-3">
                  {/* Header/Spacer cell */}
                  <div className="h-[58px] sm:h-[68px] rounded-2xl bg-gradient-to-b from-[#EFF7CE] to-[#DFEC9F] border border-[#CDDF85] p-2 flex items-center justify-center shadow-xs" />
                  
                  {/* Price Cells */}
                  <div className="h-[58px] sm:h-[68px] rounded-2xl bg-gradient-to-b from-[#EFF7CE] to-[#DFEC9F] border border-[#CDDF85] p-2 flex items-center justify-center shadow-xs">
                    <span className="text-[13.5px] sm:text-[15.5px] font-extrabold text-[#1a1a1a] font-sans">
                      月額 39,800円
                    </span>
                  </div>

                  <div className="h-[58px] sm:h-[68px] rounded-2xl bg-gradient-to-b from-[#EFF7CE] to-[#DFEC9F] border border-[#CDDF85] p-2 flex items-center justify-center shadow-xs">
                    <span className="text-[13.5px] sm:text-[15.5px] font-extrabold text-[#1a1a1a] font-sans">
                      月額 29,800円
                    </span>
                  </div>

                  <div className="h-[58px] sm:h-[68px] rounded-2xl bg-gradient-to-b from-[#EFF7CE] to-[#DFEC9F] border border-[#CDDF85] p-2 flex items-center justify-center shadow-xs">
                    <span className="text-[13.5px] sm:text-[15.5px] font-extrabold text-[#1a1a1a] font-sans">
                      月額 19,800円
                    </span>
                  </div>
                </div>

                {/* Column 2: Men's Category */}
                <div className="flex-1 w-[240px] sm:w-[280px] shrink-0 flex flex-col gap-3">
                  {/* Header */}
                  <div className="h-[58px] sm:h-[68px] rounded-2xl bg-gradient-to-b from-[#EFF7CE] to-[#DFEC9F] border border-[#CDDF85] p-2 flex items-center justify-center shadow-xs">
                    <span className="text-[14px] sm:text-[16px] font-extrabold text-[#1a1a1a] font-sans">
                      Men's Category
                    </span>
                  </div>
                  
                  {/* Category info Cells */}
                  <div className="h-[58px] sm:h-[68px] rounded-2xl bg-white border border-[#DFEC9F] p-2 flex items-center justify-center shadow-xs">
                    <span className="text-[13px] sm:text-[14.5px] font-extrabold text-[#1a1a1a] font-sans text-center">
                      海外主要リーグ、J1リーグ
                    </span>
                  </div>

                  <div className="h-[58px] sm:h-[68px] rounded-2xl bg-white border border-[#DFEC9F] p-2 flex items-center justify-center shadow-xs">
                    <span className="text-[13px] sm:text-[14.5px] font-extrabold text-[#1a1a1a] font-sans text-center">
                      J2リーグ
                    </span>
                  </div>

                  <div className="h-[58px] sm:h-[68px] rounded-2xl bg-white border border-[#DFEC9F] p-2 flex items-center justify-center shadow-xs">
                    <span className="text-[13px] sm:text-[14.5px] font-extrabold text-[#1a1a1a] font-sans text-center">
                      J3リーグ、その他リーグ
                    </span>
                  </div>
                </div>

                {/* Column 3: Women's Category */}
                <div className="flex-1 w-[240px] sm:w-[280px] shrink-0 flex flex-col gap-3">
                  {/* Header */}
                  <div className="h-[58px] sm:h-[68px] rounded-2xl bg-gradient-to-b from-[#EFF7CE] to-[#DFEC9F] border border-[#CDDF85] p-2 flex items-center justify-center shadow-xs">
                    <span className="text-[14px] sm:text-[16px] font-extrabold text-[#1a1a1a] font-sans">
                      Women's Category
                    </span>
                  </div>

                  {/* Category info Cells */}
                  <div className="h-[58px] sm:h-[68px] rounded-2xl bg-white border border-[#DFEC9F] p-2 flex items-center justify-center shadow-xs">
                    <span className="text-[13.5px] sm:text-[15.5px] font-extrabold text-[#1a1a1a] font-sans text-center">
                      -
                    </span>
                  </div>

                  <div className="h-[58px] sm:h-[68px] rounded-2xl bg-white border border-[#DFEC9F] p-2 flex items-center justify-center shadow-xs">
                    <span className="text-[13px] sm:text-[14.5px] font-extrabold text-[#1a1a1a] font-sans text-center">
                      海外主要リーグ
                    </span>
                  </div>

                  <div className="h-[58px] sm:h-[68px] rounded-2xl bg-white border border-[#DFEC9F] p-2 flex items-center justify-center shadow-xs">
                    <span className="text-[13px] sm:text-[14.5px] font-extrabold text-[#1a1a1a] font-sans text-center">
                      WEリーグ、その他リーグ
                    </span>
                  </div>
                </div>

              </div>
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
                英語コーチング利用者の声
              </h2>
              <div className="w-16 h-1.5 bg-[#E55C29] mx-auto rounded-full mb-6"></div>
              <p className="text-white/70 text-[14.5px] sm:text-[17px] font-bold tracking-wider leading-relaxed max-w-2xl mx-auto font-sans whitespace-pre-line">
                「英語の学習目的」や「過去の英語学習経験」などに関わらず、{"\n"}ご利用頂けるサービスです。
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
                      <line x1="35" y1="40" x2="65" y2="40" stroke="white" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
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

        {/* SUBSECTION 2: SUPPORTING PLAYERS (応援している選手) */}
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
        </div> {/* Close Subsection 2 wrapper */}
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
          {/* Header */}
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-white tracking-wide mb-10 sm:mb-16 select-none font-bold">
            Founder & CEO
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-stretch">
            {/* Left side: CEO Name & Transparent Cut-out Photo */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full">
              <div className="select-text">
                <p className="text-2xl sm:text-3xl font-serif text-white/80 tracking-wide font-medium">
                  Tomohiro Kajiyama
                </p>
                <h3 className="text-3xl sm:text-4xl font-serif font-black text-white/80 tracking-wider mt-2 mb-8">
                  梶山 知裕
                </h3>
              </div>
              <div className="w-[105%] max-w-[420px] md:max-w-[520px] lg:w-[145%] lg:max-w-none mx-auto lg:mx-0 mt-4 lg:-mt-[55px] lg:-ml-14 xl:-ml-20 select-none animate-fade-in">
                <img 
                  src={ceoProfileImg} 
                  alt="Tomohiro Kajiyama" 
                  className="w-full h-auto object-contain select-none pointer-events-none"
                />
              </div>
            </div>

            {/* Right side: Elegant detailed profile card */}
            <div className="lg:col-span-8 bg-white rounded-[2.2rem] p-6 sm:p-8 lg:px-7 lg:py-8 shadow-2xl border border-black/5 text-neutral-950 flex flex-col justify-center h-full">
              <ul className="space-y-4 text-[14px] sm:text-[16.5px] text-neutral-900 font-serif tracking-wider leading-snug list-none">
                
                {/* 1.出身 */}
                <li className="flex items-start gap-4">
                  <span className="mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-neutral-950" />
                  <div className="font-serif font-bold text-neutral-950">
                    兵庫県神戸市出身
                  </div>
                </li>

                {/* 2.ユース */}
                <li className="flex items-start gap-4">
                  <span className="mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-neutral-950" />
                  <div className="font-serif font-bold text-neutral-950">
                    センアーノ神戸ユースU-18
                  </div>
                </li>

                {/* 3.大学サッカー */}
                <li className="flex items-start gap-4">
                  <span className="mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-neutral-950" />
                  <div className="font-serif font-bold text-neutral-950">
                    関西大学体育会サッカー部
                  </div>
                </li>

                {/* 4.オーストラリアクラブ */}
                <li className="flex flex-col gap-1.5">
                  <div className="flex items-start gap-4">
                    <span className="mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-neutral-950" />
                    <div className="font-serif font-bold text-neutral-950">
                      Sutherland Sharks Football Club
                    </div>
                  </div>
                  <div className="pl-8 flex items-start gap-3">
                    <span className="mt-1.5 shrink-0 block w-2 h-2 rounded-full border border-neutral-950 bg-transparent" />
                    <span className="font-serif font-bold text-neutral-800">
                      オーストラリア NSW州1部リーグ
                    </span>
                  </div>
                </li>

                {/* 5.リクルート */}
                <li className="flex flex-col gap-1.5">
                  <div className="flex items-start gap-4">
                    <span className="mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-neutral-950" />
                    <div className="font-serif font-bold text-neutral-950">
                      株式会社リクルート
                    </div>
                  </div>
                  <div className="pl-8 flex items-start gap-3">
                    <span className="mt-1.5 shrink-0 block w-2 h-2 rounded-full border border-neutral-950 bg-transparent" />
                    <span className="font-serif font-bold text-neutral-800">
                      国内事業の戦略/企画、海外子会社の統括/戦略
                    </span>
                  </div>
                </li>

                {/* 6.Kepty */}
                <li className="flex flex-col gap-2">
                  <div className="flex items-start gap-4">
                    <span className="mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-neutral-950" />
                    <div className="font-serif font-bold text-neutral-950">
                      株式会社Kepty
                    </div>
                  </div>
                  <div className="pl-8 space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="mt-1.5 shrink-0 block w-2 h-2 rounded-full border border-neutral-950 bg-transparent" />
                      <span className="font-serif font-bold text-neutral-800">
                        創業（2023年）
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1.5 shrink-0 block w-2 h-2 rounded-full border border-neutral-950 bg-transparent" />
                      <span className="font-serif font-bold text-neutral-800">
                        他社の英語コーチング事業に携わる（2025年）
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1.5 shrink-0 block w-2 h-2 rounded-full border border-neutral-950 bg-transparent" />
                      <span className="font-serif font-bold text-neutral-800 lg:whitespace-nowrap">
                        プロサッカー選手向け英語コーチング事業開始（2026年）
                      </span>
                    </div>
                  </div>
                </li>

              </ul>
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
              <span className="font-anton text-sm tracking-widest text-white uppercase">Kepty Co., LTD.</span>
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
