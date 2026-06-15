import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, Grid3X3 } from "lucide-react";
import { portfolioImages } from "../../pages/PortfolioPage";

const PREVIEW_COUNT = 8;
const previewImages = portfolioImages.slice(0, PREVIEW_COUNT);

export function PortfolioCTA({ className = "" }: { className?: string }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/portfolio")}
      className={`group relative inline-flex items-center gap-2.5 rounded-full border border-accent/40 hover:border-accent bg-transparent px-6 py-3.5 font-display font-semibold text-[0.75rem] tracking-[0.1em] uppercase text-accent hover:text-white transition-all duration-300 cursor-pointer ${className}`}
    >
      <Grid3X3 className="w-3.5 h-3.5 shrink-0 text-accent group-hover:text-white transition-colors" />
      <span>Ver Portfólio</span>
      <span className="ml-0.5 text-accent/50 group-hover:text-white/50 font-mono text-[0.6rem] font-normal transition-colors">
        ({portfolioImages.length})
      </span>
    </button>
  );
}

// --- Section Obras ---
export function Obras() {
  const navigate = useNavigate();

  return (
    <section id="obras" className="py-[110px] bg-bg-sec border-y border-white/[0.04]">
      <div className="container max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12"
        >
          <div>
            <div className="section-tag">Obras Concluídas</div>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[0.02em] font-bold">
              O ferro que <span className="gradient-text italic">deixámos</span> em cada obra
            </h2>
            <p className="mt-4 text-dim/60 text-[0.88rem] leading-[1.8] max-w-[480px]">
              Uma seleção do nosso trabalho. Clique no botão para ver o portfólio completo.
            </p>
          </div>

          {/* CTA desktop */}
          <div className="shrink-0">
            <PortfolioCTA />
          </div>
        </motion.div>

        {/* Preview Grid — 8 imagens fixas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
        >
          {previewImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => navigate("/portfolio")}
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/[0.06] cursor-pointer"
            >
              <img
                src={img}
                alt="Obra Serralharia Silva & Pina"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <Search className="text-white opacity-0 group-hover:opacity-100 w-5 h-5 transition-all duration-300" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA central */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <p className="text-[0.72rem] text-dim/40 tracking-widest uppercase">
            — {portfolioImages.length - PREVIEW_COUNT} obras adicionais no portfólio —
          </p>
          <PortfolioCTA />
        </motion.div>

      </div>
    </section>
  );
}
