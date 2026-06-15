import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShimmerButton } from "../ui/shimmer-button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  details: string[];
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "Portões & Cancelas",
    desc: "Portões automáticos, de correr ou batente em ferro forjado, chapa ou inox.",
    details: ["Portões de garagem", "Automatização", "Chapa perfurada", "Ferro forjado"],
  },
  {
    id: "02",
    title: "Gradeamentos & Vedações",
    desc: "Proteção de janelas, muros e terrenos com acabamentos estéticos refinados.",
    details: ["Lanças decorativas", "Grades fixas e móveis", "Vedações de muros", "Proteções industriais"],
  },
  {
    id: "03",
    title: "Escadas & Guardas",
    desc: "Escadas em caracol ou suspensas. Corrimãos e guarda-corpos em inox e vidro.",
    details: ["Escadas em caracol", "Guarda-corpos em vidro", "Corrimãos tubulares", "Escadas suspensas"],
  },
  {
    id: "04",
    title: "Varandas & Marquises",
    desc: "Estruturas completas para varandas e fechos de marquise com isolamento acústico.",
    details: ["Marquises térmicas", "Alumínio lacado", "Vidro duplo", "Caixilharias"],
  },
  {
    id: "05",
    title: "Estruturas Metálicas",
    desc: "Telheiros, alpendres, asnas, pilares e pavimentos sandwich de fabrico integral.",
    details: ["Coberturas sandwich", "Alpendres e telheiros", "Asnas e vigas", "Pavilhões industriais"],
  },
  {
    id: "06",
    title: "Aço Inox & Alumínio",
    desc: "Mobiliário, letras e artefactos personalizados para fins residenciais ou comerciais.",
    details: ["Letras e símbolos", "Mesas em inox", "Mobiliário comercial", "Artefactos sob medida"],
  },
];

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative flex flex-col justify-between p-8 rounded-2xl bg-bg-sec border border-white/[0.06] transition-all duration-400 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] cursor-default snap-start shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] min-h-[300px]"
    >
      <div>
        {/* Top Header Row of Card */}
        <div className="flex justify-between items-start mb-6">
          {/* Subtle gold line accent */}
          <div className="w-8 h-[2px] bg-accent/30 group-hover:w-16 group-hover:bg-accent transition-all duration-300 rounded-full mt-3" />
          {/* Professional elegant number */}
          <span className="font-display font-bold text-3xl text-white/10 group-hover:text-accent/20 tracking-wider transition-colors duration-300">
            {service.id}
          </span>
        </div>

        <h3 className="font-display text-[1.2rem] font-bold text-white group-hover:text-accent transition-colors duration-300 mb-3">
          {service.title}
        </h3>
        <p className="text-dim/80 text-[0.84rem] leading-[1.7] mb-6">
          {service.desc}
        </p>
      </div>

      <div>
        {/* Divider */}
        <div className="w-full h-px bg-white/[0.05] mb-5 group-hover:bg-accent/20 transition-colors duration-300" />

        {/* Details list */}
        <ul className="grid grid-cols-2 gap-y-2 gap-x-3 text-[0.68rem] text-dim/60 font-semibold uppercase tracking-widest list-none">
          {service.details.map((detail, idx) => (
            <li key={idx} className="flex items-center gap-1.5 group-hover:text-white/60 transition-colors duration-200">
              <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const checkScrollLimits = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollLimits);
      // initial check
      checkScrollLimits();
      // handle resize
      window.addEventListener("resize", checkScrollLimits);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScrollLimits);
      window.removeEventListener("resize", checkScrollLimits);
    };
  }, []);

  // Autoplay
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isHovered) return;

    const interval = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      if (scrollLeft >= scrollWidth - clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const scrollAmount = window.innerWidth >= 1024 
          ? clientWidth / 3 
          : window.innerWidth >= 640 
            ? clientWidth / 2 
            : clientWidth;
        el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-[110px] bg-bg-base overflow-hidden relative border-t border-white/[0.04]">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
        
        {/* Header with Slider Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[580px]"
          >
            <div className="section-tag">O que fazemos</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.01em]">
              Soluções Metálicas <span className="gradient-text italic">de A a Z</span>
            </h2>
            <p className="mt-4 text-[#eef1f6]/50 text-[0.88rem] leading-[1.8]">
              Projetamos, fabricamos no nosso estaleiro e instalamos. Trabalho artesanal e de alta durabilidade para a sua casa, comércio ou indústria.
            </p>
          </motion.div>

          {/* Carousel Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex gap-2.5 self-end md:self-auto shrink-0"
          >
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white transition-all ${
                canScrollLeft 
                  ? "hover:border-accent hover:text-accent cursor-pointer bg-white/[0.02]" 
                  : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white transition-all ${
                canScrollRight 
                  ? "hover:border-accent hover:text-accent cursor-pointer bg-white/[0.02]" 
                  : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="Seguinte"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Snap-scroll Carousel Container */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col items-center mt-8 gap-3"
        >
          <ShimmerButton
            href="#contacto"
            background="#c5a880"
            shimmerColor="#ffffff"
            className="text-bg-base font-bold tracking-widest uppercase text-[0.75rem] px-10 py-4 shadow-[0_0_50px_rgba(197,168,128,0.3)] hover:-translate-y-1 flex items-center gap-2.5 rounded-full"
          >
            Peça o seu orçamento
            <svg viewBox="0 0 16 16" fill="none" className="w-[13px] h-[13px]">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ShimmerButton>
          <p className="text-[0.72rem] text-dim/60">Orçamento gratuito e sem compromisso</p>
        </motion.div>

      </div>
    </section>
  );
}
