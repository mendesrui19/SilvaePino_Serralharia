import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-sec pt-20 pb-8 border-t border-white/[0.05]">
      <div className="container max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr] gap-14 mb-16">
          
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3.5 mb-5 text-left">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent2 to-accent flex items-center justify-center text-bg-base font-black text-[0.78rem] shadow-[0_0_20px_rgba(197,168,128,0.25)] border border-white/5">
                S&P
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-white text-[1rem] leading-none tracking-[0.03em]">
                  Silva & Pina
                </span>
                <span className="text-[0.52rem] text-accent tracking-[0.12em] uppercase mt-1.5 font-bold">
                  Serralharia Civil · desde 1990
                </span>
              </div>
            </div>
            <p className="text-[0.85rem] text-dim/80 leading-[1.85] max-w-[320px] mb-5">
              Especialistas em ferro, aço inox e alumínio. Fabrico próprio e montagem sob medida no Grande Porto há mais de 30 anos.
            </p>
            {/* Quick contact */}
            <a href="tel:+351964053721" className="inline-flex items-center gap-2 text-[0.85rem] text-white font-semibold hover:text-accent transition-colors">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-accent">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              964 053 721
            </a>
          </motion.div>
          
          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="font-display text-[0.8rem] font-bold text-white uppercase tracking-widest mb-5">Serviços</div>
            <div className="flex flex-col gap-2.5 text-[0.84rem] text-dim/80">
              {[
                "Portões & Cancelas",
                "Gradeamentos & Vedações",
                "Escadas & Corrimãos",
                "Varandas & Marquises",
                "Estruturas Metálicas",
                "Inox & Alumínio",
              ].map((s) => (
                <a key={s} href="#servicos" className="hover:text-accent transition-colors w-fit flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-300 overflow-hidden" />
                  {s}
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="font-display text-[0.8rem] font-bold text-white uppercase tracking-widest mb-5">Contacto</div>
            <div className="flex flex-col gap-3 text-[0.84rem]">
              <a href="tel:+351964053721" className="hover:text-accent transition-colors text-white font-semibold">
                964 053 721 (Telemóvel)
              </a>
              <a href="tel:+351227822825" className="hover:text-accent transition-colors text-dim/80">
                227 822 825 (Telefone/Fax)
              </a>
              <a 
                href="https://wa.me/351964053721?text=Olá%20Serralharia%20Silva%20%26%20Pina!%20Gostaria%20de%20pedir%20um%20orçamento."
                target="_blank" rel="noopener noreferrer" 
                className="hover:text-accent transition-colors text-[#25D366] flex items-center gap-1.5 font-medium"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                WhatsApp (Sr. Manuel)
              </a>
              <a href="mailto:geral@silvaepina.com" className="hover:text-accent transition-colors text-dim/80">
                geral@silvaepina.com
              </a>
              <div className="text-[0.76rem] text-dim/60 leading-[1.7] mt-1">
                Rua Venda de Baixo, 1610<br />
                Pedroso · Vila Nova de Gaia<br />
                <span className="text-accent/60">Seg–Sex: 08:30–12:30 | 13:30–17:30</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom bar */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-5"
        >
          <p className="text-[0.7rem] text-dim/50">
            © {currentYear} Serralharia Silva & Pina, Lda. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-[0.7rem] text-dim/50">
            <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Livro de Reclamações
            </a>
            <a href="https://www.arbitragemdeconsumo.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              CNIACC
            </a>
          </div>
        </motion.div>
        
        {/* Legal */}
        <div className="mt-6 pt-5 border-t border-white/[0.03] text-center text-[0.62rem] text-white/20 leading-[1.7]">
          <p>
            <strong>Lei 144/2015:</strong> Em caso de litígio, recorra ao CNIACC em{" "}
            <a href="http://www.arbitragemdeconsumo.org" className="hover:text-accent/50 transition-colors underline" target="_blank" rel="noopener noreferrer">
              arbitragemdeconsumo.org
            </a>{" "}
            ou ao CICAP.
          </p>
        </div>
      </div>
    </footer>
  );
}
