import { useState } from "react";
import { motion } from "framer-motion";
import { ShimmerButton } from "../ui/shimmer-button";
import { Phone, Mail, MapPin, Calendar, MessageSquare } from "lucide-react";

export function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    
    // @ts-ignore
    const nome = f.nome.value.trim();
    // @ts-ignore
    const tel = f.telefone.value.trim();
    // @ts-ignore
    const tipo = f.tipo.value;
    // @ts-ignore
    const msg = f.mensagem.value.trim();

    if (!nome || !tel) return;

    let text = `Olá Serralharia Silva & Pina! 👋\n\n`;
    text += `*Nome:* ${nome}\n`;
    text += `*Contacto:* ${tel}\n`;
    if (tipo) text += `*Tipo de trabalho:* ${tipo}\n`;
    if (msg)  text += `*Detalhes:* ${msg}\n`;
    text += `\nGostaria de pedir um orçamento. Obrigado!`;

    window.open(`https://wa.me/351964053721?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-[120px] bg-bg-base overflow-hidden relative border-t border-white/[0.04]">
      <div className="container max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[60px] md:gap-[80px] lg:gap-[120px] items-start">
          
          {/* Contact Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="section-tag">Fale Connosco</div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
              <h2 className="section-h2 mb-0 font-bold">Peça o seu <span className="text-accent italic">Orçamento</span></h2>
              <div className="flex flex-col gap-2 shrink-0">
                <a 
                  href="https://wa.me/351964053721?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20de%20serralharia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa text-[0.7rem] py-2 px-4 flex items-center justify-center gap-2 rounded-sm shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:-translate-y-0.5 transition-transform"
                >
                  <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                  Enviar WhatsApp
                </a>
                <a 
                  href="tel:+351964053721" 
                  className="btn btn-ghost text-[0.7rem] py-2 px-4 flex items-center justify-center gap-2 rounded-sm border-white/10 hover:border-accent hover:-translate-y-0.5 transition-all"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Ligar: 964 053 721
                </a>
              </div>
            </div>
            <p className="section-desc mb-12">
              Diga-nos o que precisa. Respondemos rápido e apresentamos uma cotação sem compromisso.
            </p>

            <div className="flex flex-col gap-6">
              
              {/* Contact item: Phone */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-accent bg-bg-sec">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="text-[0.62rem] tracking-[0.15em] uppercase text-dim font-bold mb-1">Telefone / WhatsApp</div>
                  <div className="text-[0.95rem] mb-1 font-semibold text-white">
                    <a href="tel:+351964053721" className="hover:text-accent transition-colors">964 053 721</a>
                  </div>
                  <div className="text-[0.8rem] text-dim">
                    Telefone/Fax: 227 822 825
                  </div>
                </div>
              </div>

              {/* Contact item: Email */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-accent bg-bg-sec">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[0.62rem] tracking-[0.15em] uppercase text-dim font-bold mb-1">E-mail</div>
                  <div className="text-[0.95rem] text-white">
                    <a href="mailto:geral@silvaepina.com" className="hover:text-accent transition-colors">geral@silvaepina.com</a>
                  </div>
                </div>
              </div>

              {/* Contact item: Address */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-accent bg-bg-sec">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[0.62rem] tracking-[0.15em] uppercase text-dim font-bold mb-1">Localização &amp; GPS</div>
                  <div className="text-[0.95rem] text-[#eef1f6]/80 leading-[1.6]">
                    Rua Venda de Baixo, 1610<br />
                    4415-363 Pedroso · Vila Nova de Gaia<br />
                    <span className="text-dim text-xs block mt-1">(A 2 Km da saída da A1 &gt; Pedroso/Carvalhos)</span>
                  </div>
                  <div className="text-xs text-accent mt-2 font-mono">
                    +41° 04' 43.88" N , -8° 34' 34.56" W
                  </div>
                </div>
              </div>

              {/* Contact item: Schedule */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-accent bg-bg-sec">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[0.62rem] tracking-[0.15em] uppercase text-dim font-bold mb-1">Horário</div>
                  <div className="text-[0.9rem] text-[#eef1f6]/80 leading-[1.6]">
                    Segunda a Sexta: 08:30h - 12:30h | 13:30h - 17:30h<br />
                    Sábados, Domingos e Feriados: Encerrado<br />
                    <span className="text-dim text-[0.8rem]">* Atendimento extra-horário por marcação</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Form and Map Column */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-8 w-full"
          >
            {/* Input Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-bg-sec p-8 md:p-10 border border-white/[0.04] rounded-2xl flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.65rem] tracking-[0.1em] uppercase text-dim font-bold" htmlFor="nome">O seu Nome *</label>
                    <input className="w-full bg-transparent border border-white/10 rounded-sm py-3.5 px-4 text-[0.95rem] text-white focus:outline-none focus:border-accent focus:bg-white/[0.01] transition-colors" id="nome" name="nome" type="text" placeholder="Nome completo" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.65rem] tracking-[0.1em] uppercase text-dim font-bold" htmlFor="telefone">Telemóvel *</label>
                    <input className="w-full bg-transparent border border-white/10 rounded-sm py-3.5 px-4 text-[0.95rem] text-white focus:outline-none focus:border-accent focus:bg-white/[0.01] transition-colors" id="telefone" name="telefone" type="tel" placeholder="9XX XXX XXX" required />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.1em] uppercase text-dim font-bold" htmlFor="tipo">Tipo de trabalho</label>
                  <select className="w-full bg-bg-sec border border-white/10 rounded-sm py-3.5 px-4 text-[0.95rem] text-white focus:outline-none focus:border-accent focus:bg-white/[0.01] transition-colors appearance-none cursor-pointer" id="tipo" name="tipo">
                    <option value="">Selecione o tipo de trabalho...</option>
                    <option>Portão / Cancela</option>
                    <option>Gradeamento / Vedação</option>
                    <option>Escada / Guarda-corpos</option>
                    <option>Varanda / Marquise</option>
                    <option>Estrutura metálica</option>
                    <option>Trabalho em Inox / Alumínio</option>
                    <option>Outro / Reparação</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.1em] uppercase text-dim font-bold" htmlFor="mensagem">Descreva o que precisa (opcional)</label>
                  <textarea className="w-full bg-transparent border border-white/10 rounded-sm py-3.5 px-4 text-[0.95rem] text-white focus:outline-none focus:border-accent focus:bg-white/[0.01] transition-colors min-h-[120px] resize-y" id="mensagem" name="mensagem" placeholder="Medidas aproximadas, materiais pretendidos..." />
                </div>
                <ShimmerButton 
                  type="submit"
                  background="#c5a880"
                  shimmerColor="#ffffff"
                  className="text-bg-base font-bold tracking-[0.16em] uppercase text-sm w-full py-4 shadow-[0_0_40px_rgba(197,168,128,0.25)] hover:-translate-y-0.5 transition-transform flex items-center justify-center gap-2"
                >
                  Pedir Orçamento Grátis
                  <svg viewBox="0 0 16 16" fill="none" className="w-[14px] h-[14px]"><path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </ShimmerButton>
                <p className="text-center text-[0.7rem] text-dim">
                  Ao enviar, abrirá o WhatsApp com a sua mensagem pronta.
                </p>
              </form>
            ) : (
              <div className="bg-bg-sec p-16 border border-white/[0.04] text-center flex flex-col items-center justify-center min-h-[350px] rounded-2xl">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="mb-6"><circle cx="26" cy="26" r="24" stroke="#c5a880" strokeWidth="2"/><path d="M16 26l8 8 12-16" stroke="#c5a880" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <h3 className="font-display text-3xl mb-3 font-bold">WhatsApp Aberto!</h3>
                <p className="text-dim text-sm max-w-[320px] mx-auto">
                  Enviámos o seu pedido para a aplicação. Se a janela não abriu automaticamente, por favor clique no botão flutuante.
                </p>
              </div>
            )}

            {/* Embedded Google Maps */}
            <div className="w-full h-[220px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96198.06101311579!2d-8.585560715359131!3d41.10855432045052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247b810d68e2eb%3A0xa93122cceb242278!2sR.+Venda+de+Baixo+1610%2C+Pedroso!5e0!3m2!1spt-PT!2spt!4v1520942492355" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
