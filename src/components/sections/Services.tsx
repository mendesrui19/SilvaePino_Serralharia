import React, { useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ShimmerButton } from "../ui/shimmer-button";
import { Fence, Shield, Hammer, Compass, Layers, Wrench } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  details: string[];
  icon: React.ComponentType<any>;
  color: string;
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "Portões & Cancelas",
    desc: "Portões automáticos, de correr ou batente em ferro forjado, chapa ou inox.",
    details: ["Portões de garagem", "Automatização", "Chapa perfurada", "Ferro forjado"],
    icon: Fence,
    color: "rgba(255,106,43,0.12)",
  },
  {
    id: "02",
    title: "Gradeamentos & Vedações",
    desc: "Proteção de janelas, muros e terrenos com acabamentos estéticos refinados.",
    details: ["Lanças decorativas", "Grades fixas e móveis", "Vedações de muros", "Proteções industriais"],
    icon: Shield,
    color: "rgba(255,106,43,0.10)",
  },
  {
    id: "03",
    title: "Escadas & Guardas",
    desc: "Escadas em caracol ou suspensas. Corrimãos e guarda-corpos em inox e vidro.",
    details: ["Escadas em caracol", "Guarda-corpos em vidro", "Corrimãos tubulares", "Escadas suspensas"],
    icon: Hammer,
    color: "rgba(255,179,71,0.10)",
  },
  {
    id: "04",
    title: "Varandas & Marquises",
    desc: "Estruturas completas para varandas e fechos de marquise com isolamento acústico.",
    details: ["Marquises térmicas", "Alumínio lacado", "Vidro duplo", "Caixilharias"],
    icon: Compass,
    color: "rgba(57,224,255,0.08)",
  },
  {
    id: "05",
    title: "Estruturas Metálicas",
    desc: "Telheiros, alpendres, asnas, pilares e pavimentos sandwich de fabrico integral.",
    details: ["Coberturas sandwich", "Alpendres e telheiros", "Asnas e vigas", "Pavilhões industriais"],
    icon: Layers,
    color: "rgba(255,106,43,0.08)",
  },
  {
    id: "06",
    title: "Aço Inox & Alumínio",
    desc: "Mobiliário, letras e artefactos personalizados para fins residenciais ou comerciais.",
    details: ["Letras e símbolos", "Mesas em inox", "Mobiliário comercial", "Artefactos sob medida"],
    icon: Wrench,
    color: "rgba(255,179,71,0.08)",
  },
];

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-200);
    mouseY.set(-200);
  }, [mouseX, mouseY]);

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col p-7 rounded-2xl bg-bg-sec border border-white/[0.07] overflow-hidden transition-all duration-400 hover:border-accent/35 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] cursor-default inset-highlight"
    >
      {/* Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(220px circle at ${mouseX}px ${mouseY}px, rgba(255, 106, 43, 0.1), transparent 100%)
          `,
        }}
      />

      {/* Number */}
      <span className="svc-num">{service.id}</span>
      
      {/* Icon container */}
      <div className="relative z-10 w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-accent mb-5 group-hover:bg-gradient-to-br group-hover:from-accent2 group-hover:to-accent group-hover:text-bg-base group-hover:border-transparent group-hover:shadow-[0_0_24px_rgba(255,106,43,0.4)] transition-all duration-300">
        <Icon className="w-5 h-5" />
      </div>

      <div className="relative z-10">
        <h3 className="svc-name group-hover:text-accent transition-colors duration-300">{service.title}</h3>
        <p className="svc-desc mb-5">{service.desc}</p>
        
        {/* Divider */}
        <div className="w-full h-px bg-white/[0.05] mb-5 group-hover:bg-accent/20 transition-colors duration-300" />

        {/* Details */}
        <ul className="grid grid-cols-2 gap-y-2 gap-x-3 text-[0.68rem] text-dim font-medium uppercase tracking-wider">
          {service.details.map((detail, idx) => (
            <li key={idx} className="flex items-center gap-2 group-hover:text-white/60 transition-colors duration-200">
              <span className="w-1 h-1 rounded-full bg-accent/50 shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="servicos" className="py-[110px] bg-bg-base overflow-hidden relative border-t border-white/[0.04]">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.025] rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-[60px]"
        >
          <div className="section-tag mx-auto justify-center">O que fazemos</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.04] font-bold tracking-[-0.01em]">
            Soluções Metálicas <span className="gradient-text italic">de A a Z</span>
          </h2>
          <p className="mt-5 text-[#eef1f6]/50 text-[0.92rem] leading-[1.85] max-w-[580px] mx-auto">
            Projetamos, fabricamos no nosso estaleiro e instalamos. Trabalho artesanal e de alta durabilidade para a sua casa, comércio ou indústria.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center mt-14 gap-3"
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
