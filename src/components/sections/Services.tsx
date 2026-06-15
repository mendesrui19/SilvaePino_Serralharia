import { useState } from "react";
import { motion } from "framer-motion";
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

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div
      className="group relative flex flex-col justify-between p-8 rounded-2xl bg-bg-sec border border-white/[0.06] transition-all duration-400 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] cursor-default shrink-0 w-[290px] sm:w-[330px] md:w-[350px] min-h-[300px]"
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
    </div>
  );
}

export function Services() {
  const [isHovered, setIsHovered] = useState(false);

  const doubleServices = [...services, ...services];

  return (
    <section id="servicos" className="py-[110px] bg-bg-base overflow-hidden relative border-t border-white/[0.04]">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full relative z-10">
        
        {/* Header */}
        <div className="container max-w-[1200px] mx-auto px-5 md:px-8 mb-12">
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
        </div>

        {/* Infinite Marquee Ticker */}
        <div 
          className="w-full overflow-hidden flex relative py-4"
          style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex gap-5 w-max animate-services-ticker"
            style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
          >
            {doubleServices.map((service, idx) => (
              <ServiceCard 
                key={`${service.id}-${idx}`} 
                service={service} 
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="container max-w-[1200px] mx-auto px-5 md:px-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center gap-3"
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

      </div>
    </section>
  );
}
