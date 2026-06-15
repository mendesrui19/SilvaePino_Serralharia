import { motion } from "framer-motion";

export function Sobre() {
  return (
    <section id="sobre" className="section-light py-[110px] bg-bg-light border-y border-black/[0.04]">
      <div className="container max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] xl:gap-[120px] items-center">
          
          {/* ─── Text ─── */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="section-tag">A Empresa</div>
            <h2 className="section-h2 text-text-dark leading-[1.05] mb-6">
              Três décadas a<br />
              <span className="gradient-text">soldar confiança.</span>
            </h2>
            <p className="text-text-dark-sec text-[1rem] leading-[1.85] max-w-[500px] mb-4">
              A <strong className="text-text-dark">Serralharia Silva & Pina</strong> nasceu em <strong className="text-text-dark">Pedroso, Vila Nova de Gaia</strong>, e há mais de 30 anos mantém a mesma promessa: serralharia civil de alta qualidade a um preço justo.
            </p>
            <p className="text-text-dark-sec text-[0.9rem] leading-[1.85] max-w-[500px] mb-8">
              Sob a gerência de <strong className="text-text-dark">Manuel Silva</strong>, trabalhamos ferro, aço inox e alumínio para clientes residenciais, comerciais e industriais em todo o Grande Porto.
            </p>

            {/* 2×2 checkmarks */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                "Orçamento sem compromisso",
                "Fabrico próprio (sem intermediários)",
                "Trabalho com garantia",
                "Atendimento personalizado",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[0.82rem] font-semibold text-text-dark">
                  <span className="w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-[0.65rem] shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contacto" className="btn btn-ghost-dark rounded-full px-7">
              Fale Connosco
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          {/* ─── Image Stack ─── */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            {/* +30 badge */}
            <div className="absolute -top-8 -right-2 md:-right-6 w-[130px] h-[130px] border-2 border-accent/30 rounded-full flex flex-col items-center justify-center text-center bg-white/95 backdrop-blur-md z-30 shadow-2xl">
              <span className="gradient-text font-display text-[2.4rem] leading-none font-bold">+30</span>
              <span className="text-[0.58rem] tracking-[0.1em] text-text-dark uppercase font-bold leading-[1.4] mt-0.5">Anos<br/>Experiência</span>
            </div>
            
            <div className="relative z-10 rounded-2xl overflow-hidden border border-black/[0.06] shadow-xl">
              <img 
                src="/images/85a10616679cf559a06de0b589c5479e_fit.jpg" 
                alt="Serralharia Silva & Pina Oficina" 
                className="w-full h-auto aspect-[4/5] object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating secondary image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="absolute -bottom-10 -left-2 md:-left-12 w-[58%] bg-white p-2 shadow-2xl z-20 border border-black/10 rounded-xl"
            >
              <img 
                src="/images/d3c30698ebd1a03caf9e606c0005cd8d_fit.jpg" 
                alt="Trabalho em Ferro" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>
            
            {/* Corner decoration */}
            <div className="absolute -bottom-6 -right-6 w-[180px] h-[180px] border-b-2 border-r-2 border-accent/40 hidden md:block rounded-br-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
