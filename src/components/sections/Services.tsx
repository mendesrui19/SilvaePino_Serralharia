import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ShimmerButton } from "../ui/shimmer-button";

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

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive visible cards count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ensure currentIndex stays in bounds if visibleCards changes
  useEffect(() => {
    const maxIndex = services.length - visibleCards;
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCards, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev < services.length - visibleCards ? prev + 1 : prev
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const maxIndex = services.length - visibleCards;

  return (
    <section id="servicos" className="py-[110px] bg-bg-base overflow-hidden relative border-t border-white/[0.04]">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="container max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
        
        {/* Header with Nav arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="section-tag">O que fazemos</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.01em]">
              Soluções Metálicas <span className="gradient-text italic">de A a Z</span>
            </h2>
            <p className="mt-4 text-dim/60 text-[0.9rem] leading-[1.8] max-w-[500px]">
              Trabalho artesanal e de alta durabilidade sob medida para a sua casa, comércio ou indústria.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${
                currentIndex === 0 
                  ? "opacity-30 cursor-not-allowed text-dim" 
                  : "text-white hover:border-accent hover:text-accent cursor-pointer bg-white/[0.02]"
              }`}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${
                currentIndex >= maxIndex 
                  ? "opacity-30 cursor-not-allowed text-dim" 
                  : "text-white hover:border-accent hover:text-accent cursor-pointer bg-white/[0.02]"
              }`}
              aria-label="Seguinte"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden w-full" ref={containerRef}>
          <motion.div
            className="flex gap-6 w-full"
            animate={{ x: `calc(-${currentIndex * (100 / visibleCards)}% - ${currentIndex * 16}px)` }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                style={{ width: `calc((100% - ${(visibleCards - 1) * 24}px) / ${visibleCards})` }}
                className="shrink-0"
              >
                <div className="group relative flex flex-col p-8 rounded-2xl bg-bg-sec/45 border border-white/[0.04] transition-all duration-300 hover:border-accent/30 hover:bg-bg-sec/70 h-[320px] justify-between">
                  
                  {/* Decorative golden accent top line on hover */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
                  
                  <div className="flex flex-col">
                    <h3 className="font-display text-[1.28rem] font-bold text-white group-hover:text-accent transition-colors duration-300 mb-3.5">
                      {service.title}
                    </h3>
                    <p className="text-[0.88rem] text-dim/75 leading-[1.7] font-body font-normal">
                      {service.desc}
                    </p>
                  </div>
                  
                  <div>
                    {/* Minimal divider */}
                    <div className="w-full h-px bg-white/[0.05] mb-5 group-hover:bg-accent/10 transition-colors duration-300" />

                    {/* Details list */}
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-3 text-[0.66rem] text-dim/60 font-semibold uppercase tracking-wider">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 truncate group-hover:text-white/60 transition-colors duration-200">
                          <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress indicator bar */}
        <div className="w-full max-w-[150px] mx-auto h-[2px] bg-white/5 rounded-full mt-10 overflow-hidden relative">
          <motion.div 
            className="absolute top-0 bottom-0 left-0 bg-accent rounded-full"
            style={{ width: `${(1 / (services.length - visibleCards + 1)) * 100}%` }}
            animate={{ x: `${(currentIndex / services.length) * 150 * (services.length / (services.length - visibleCards + 1))}px` }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center mt-12 gap-3"
        >
          <ShimmerButton
            href="#contacto"
            background="#c5a880"
            shimmerColor="#ffffff"
            className="text-bg-base font-bold tracking-widest uppercase text-[0.72rem] px-9 py-3.5 shadow-[0_0_40px_rgba(197,168,128,0.25)] hover:-translate-y-1 flex items-center gap-2.5 rounded-full"
          >
            Peça o seu orçamento
            <svg viewBox="0 0 16 16" fill="none" className="w-[13px] h-[13px]">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ShimmerButton>
          <p className="text-[0.7rem] text-dim/55">Orçamento gratuito e sem compromisso</p>
        </motion.div>

      </div>
    </section>
  );
}
