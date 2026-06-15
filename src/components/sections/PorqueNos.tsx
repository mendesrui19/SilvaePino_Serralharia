import { motion } from "framer-motion";
import { MapPin, CheckCircle, ShieldCheck, HeartHandshake, Zap } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "100% Sob Medida",
    short: "Fabricação exclusiva",
    desc: "Cada portão, grade ou estrutura é desenhada e fabricada exclusivamente para a sua obra. Não trabalhamos com medidas padrão.",
    accent: "from-accent to-accent2",
  },
  {
    icon: ShieldCheck,
    title: "Fabrico Próprio",
    short: "Sem intermediários",
    desc: "Cortamos, soldamos e tratamos as peças na nossa própria oficina em Pedroso. Controlo total da qualidade e custo direto.",
    accent: "from-accent2 to-accent",
  },
  {
    icon: HeartHandshake,
    title: "Compromisso e Confiança",
    short: "Relação próxima",
    desc: "Orçamentos grátis, visitas técnicas rigorosas e cumprimento de prazos acordados. Mais de 30 anos de confiança acumulada.",
    accent: "from-accent to-accent2",
  },
  {
    icon: Zap,
    title: "Corte Térmico & Acústico",
    short: "Isolamento avançado",
    desc: "As nossas soluções em alumínio integram vidros duplos, temperados e sistemas avançados de isolamento térmico e acústico.",
    accent: "from-accent2 to-accent",
  },
];

const zones = [
  "Vila Nova de Gaia", "Porto", "Espinho", "S. M. da Feira", 
  "Ovar", "Esmoriz", "Matosinhos", "Maia", "Gondomar", "Valongo"
];

export function PorqueNos() {
  return (
    <section id="porquenos" className="section-light py-[110px] bg-bg-light border-y border-black/[0.04] relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-[64px]"
        >
          <div className="section-tag mx-auto justify-center">A Nossa Promessa</div>
          <h2 className="section-h2 text-text-dark">
            Porquê a <span className="gradient-text italic">Silva & Pina?</span>
          </h2>
          <p className="mt-5 text-text-dark-sec text-[0.92rem] leading-[1.85] max-w-[520px] mx-auto">
            Qualidade artesanal, preço justo e compromisso total. É a nossa fórmula há mais de 30 anos.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-8">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="group flex gap-5 p-7 rounded-2xl bg-white border border-black/[0.05] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${r.accent} flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                  <Icon className="w-5.5 h-5.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-accent mb-1">{r.short}</div>
                  <h3 className="font-display text-[1.05rem] font-bold text-text-dark mb-2">{r.title}</h3>
                  <p className="text-[0.84rem] text-text-dark-sec leading-[1.75]">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Coverage Zones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-5xl mx-auto p-7 rounded-2xl bg-white border border-black/[0.05] shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-center gap-7">
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-white shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display text-[1.05rem] font-bold text-text-dark">Zonas de Atuação</h4>
                <p className="text-[0.75rem] text-text-dark-sec mt-0.5">Grande Porto e arredores · deslocação incluída</p>
              </div>
            </div>
            
            <div className="w-px h-10 bg-black/[0.07] hidden lg:block" />
            
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {zones.map((zone) => (
                <span 
                  key={zone} 
                  className="text-[0.7rem] uppercase tracking-widest text-text-dark-sec border border-black/[0.06] py-1.5 px-4 rounded-full bg-bg-light hover:bg-accent hover:border-accent hover:text-white transition-all duration-250 cursor-default font-semibold"
                >
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
