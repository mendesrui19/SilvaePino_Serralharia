import { ShimmerButton } from "../ui/shimmer-button";
import { BlurIn } from "../ui/blur-in";
import { motion } from "framer-motion";
import { PortfolioCTA } from "./Obras";

export function Hero() {
  return (
    <header className="relative min-h-[100svh] flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden bg-bg-base">
      {/* Background Video Banner */}
      <motion.div 
        initial={{ scale: 1.02, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,12,14,0.55)_0%,rgba(11,12,14,0.8)_60%,rgba(11,12,14,1)_100%)] z-10" />
        <video
          src="/estou_a_fazer_um_site_para_uma.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        {/* Grid overlay for architectural texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:60px_60px] z-20" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-5 md:px-8 max-w-[1200px] w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center w-full">
          
          {/* ─── Content Column ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="flex flex-col"
          >
            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full bg-accent/8 border border-accent/20 text-accent text-[0.7rem] font-bold tracking-widest mb-8 uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-[pingSm_1.5s_cubic-bezier(0,0,0.2,1)_infinite] absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Serralharia Civil · Vila Nova de Gaia
            </motion.div>

            <BlurIn
              word="Damos forma ao ferro,"
              className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-white m-0 text-left font-bold"
              duration={0.8}
            />
            <BlurIn
              word="inox e alumínio."
              className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] gradient-text m-0 text-left font-bold mt-1"
              duration={1}
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-7 mb-10 text-[1rem] text-[#eef1f6]/60 leading-[1.85] max-w-[520px]"
            >
              Há mais de <strong className="text-white/80">30 anos</strong> a desenhar, fabricar e instalar portões, gradeamentos, escadas e estruturas metálicas — tudo <strong className="text-white/80">sob medida</strong> no Grande Porto.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-3 items-center"
            >
              <ShimmerButton
                href="#contacto"
                shimmerSize="0.1em"
                shimmerColor="#ffffff"
                shimmerDuration="2.5s"
                background="#c5a880"
                className="text-bg-base text-[0.75rem] font-bold uppercase tracking-widest px-8 py-4 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 shadow-[0_0_50px_rgba(197,168,128,0.35)] rounded-full"
              >
                Pedir Orçamento Grátis
                <svg viewBox="0 0 16 16" fill="none" className="w-[13px] h-[13px]">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </ShimmerButton>
              
              <PortfolioCTA className="text-[0.72rem] py-3.5 px-6" />
            </motion.div>

            {/* Quick trust stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex gap-8 mt-12 pt-8 border-t border-white/[0.07] flex-wrap"
            >
              {[
                { val: "30+", label: "Anos de Experiência" },
                { val: "1200+", label: "Obras Instaladas" },
                { val: "100%", label: "Fabricação Própria" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display text-[1.9rem] font-bold text-white leading-none tracking-tight">{s.val}</span>
                  <span className="text-[0.68rem] text-dim uppercase tracking-wider mt-1.5 font-medium">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── Blueprint Visual Column ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-[440px] group">
              {/* Glow blur */}
              <div className="absolute inset-[8%] bg-gradient-to-tr from-accent/25 via-accent2/10 to-transparent blur-[50px] rounded-full group-hover:scale-110 transition-all duration-700" />
              
              <svg 
                className="w-full h-auto overflow-visible relative z-10"
                viewBox="0 0 520 460" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="steel-line" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#8fa3bd"/>
                    <stop offset="1" stopColor="#4d6178"/>
                  </linearGradient>
                  <linearGradient id="forge-fire" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#00d8ff"/>
                    <stop offset="1" stopColor="#0066ff"/>
                  </linearGradient>
                </defs>

                <line className="draw-line" x1="20" y1="430" x2="500" y2="430" stroke="url(#steel-line)" strokeWidth="2"/>
                <path className="draw-line" d="M120 430 V200 L260 110 L400 200 V430" fill="none" stroke="url(#steel-line)" strokeWidth="2.5"/>
                <path className="draw-line" d="M100 212 L260 100 L420 212" fill="none" stroke="url(#steel-line)" strokeWidth="2.5"/>
                <rect className="draw-line" x="150" y="250" width="70" height="80" fill="none" stroke="url(#steel-line)" strokeWidth="2"/>
                <line className="draw-line" x1="167" y1="250" x2="167" y2="330" stroke="url(#forge-fire)" strokeWidth="1.8"/>
                <line className="draw-line" x1="185" y1="250" x2="185" y2="330" stroke="url(#forge-fire)" strokeWidth="1.8"/>
                <line className="draw-line" x1="203" y1="250" x2="203" y2="330" stroke="url(#forge-fire)" strokeWidth="1.8"/>
                <line className="draw-line" x1="150" y1="290" x2="220" y2="290" stroke="url(#forge-fire)" strokeWidth="1.8"/>
                <rect className="draw-line" x="300" y="300" width="60" height="130" fill="none" stroke="url(#steel-line)" strokeWidth="2"/>
                <circle cx="350" cy="365" r="3.5" fill="none" stroke="url(#forge-fire)" strokeWidth="1.8"/>
                <line className="draw-line" x1="150" y1="200" x2="370" y2="200" stroke="url(#steel-line)" strokeWidth="2"/>
                {[160,190,220,250,280,310,340].map((x, i) => (
                  <line key={i} className="draw-line" x1={x} y1="160" x2={x} y2="200" stroke="url(#forge-fire)" strokeWidth="1.8"/>
                ))}
                <path className="draw-line" d="M150 160 H370" stroke="url(#steel-line)" strokeWidth="2"/>
                <rect className="draw-line" x="420" y="320" width="70" height="110" fill="none" stroke="url(#steel-line)" strokeWidth="2.5"/>
                <line className="draw-line" x1="437" y1="320" x2="437" y2="430" stroke="url(#forge-fire)" strokeWidth="1.8"/>
                <line className="draw-line" x1="455" y1="320" x2="455" y2="430" stroke="url(#forge-fire)" strokeWidth="1.8"/>
                <line className="draw-line" x1="473" y1="320" x2="473" y2="430" stroke="url(#forge-fire)" strokeWidth="1.8"/>
              </svg>
              
              <div className="absolute bottom-[-18px] right-0 text-[0.68rem] text-dim/60 italic tracking-wide">
                Cada linha é soldada à mão.
              </div>

              {/* Floating info badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-bg-sec border border-white/10 rounded-xl px-4 py-3 shadow-2xl"
              >
                <div className="text-[0.6rem] text-dim uppercase tracking-widest">Fabrico em</div>
                <div className="font-display font-bold text-white text-sm">Pedroso, Gaia</div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[0.6rem] text-dim/50 tracking-[0.2em] uppercase">Scroll</span>
        <div className="scroll-indicator w-[1px] h-8 bg-gradient-to-b from-accent/60 to-transparent" />
      </motion.div>

      {/* Line-art drawing animation */}
      <style dangerouslySetInnerHTML={{__html: `
        .draw-line {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: drawStroke 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .draw-line:nth-child(2n) { animation-delay: 0.15s; }
        .draw-line:nth-child(3n) { animation-delay: 0.30s; }
        .draw-line:nth-child(4n) { animation-delay: 0.45s; }
        @keyframes drawStroke {
          to { stroke-dashoffset: 0; }
        }
      `}} />
    </header>
  );
}
