import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Nav } from "../components/layout/Nav";

export const portfolioImages = [
  "/images/85a10616679cf559a06de0b589c5479e_fit.jpg",
  "/images/d3c30698ebd1a03caf9e606c0005cd8d_fit.jpg",
  "/images/80bec36cb5876c3a8c9b351d75b3f54b_fit.jpg",
  "/images/4468f84e98e2bdd194a7a6e2cb070f92_fit.jpg",
  "/images/71c120741a56c629c2943dbe4b3f644a_fit.jpg",
  "/images/ca259dbc5b04996ca092b5f7a00a904c_fit.jpg",
  "/images/da7aa9463a143641bb0071db7e099471_fit.jpg",
  "/images/5e1f39bf9981b261225be7cc5cb5b2c5_fit.jpg",
  "/images/9f1b080857eaeb4f03b499cc7c586687_fit.jpg",
  "/images/c492f05258233f9e15f1e8aa621e4c59_fit.jpg",
  "/images/445f041d7c3614a06c83ebb21bbf1d10_fit.jpg",
  "/images/7b0d0b08c96b30ab7d2b6bfdce4a89ef_fit.jpg",
  "/images/fe7b49ac8e1a8264810c7ae0c23661e2_fit.jpg",
  "/images/eb5c2fe7af8bef029eb72531d77d6e99_fit.jpg",
  "/images/c03580006a7e3589c08d028db4f6680d_fit.jpg",
  "/images/0acb3919b3bb0ccfd44ce215b273cffb_fit.jpg",
  "/images/1caa0f2335043aad2acc51ff1c752c0a_fit.jpg",
  "/images/b4bbae7c6ba4421d511551cd90fae46c_fit.jpg",
  "/images/d3b4639da7d3b39ef2924a1f88a8db03_fit.jpg",
  "/images/6573b1b2fc37f9f2bb4d84431799fdd6_fit.jpg",
  "/images/a538c9cc2cb352696c2fcbdde33768b6_fit.jpg",
  "/images/2a3a152482847148f88439baa4a5e8fb_fit.jpg",
  "/images/44798fb0fa4fdc2c75215de84daf01ad_fit.jpg",
  "/images/80ed161d3ff4cc363905523adc233ff9_fit.jpg",
  "/images/c898574deb18b7daf96c907c6ae07759_fit.jpg",
  "/images/e89348f2d38b723e1541c1e8e07aee04_fit.jpg",
  "/images/af33bdb17bd29b77f96dddfc5ed203de_fit.jpg",
  "/images/01baf6a825801eef574e30622b76d6f4_fit.jpg",
  "/images/df6d859ca04a25ea5738b344f107bff8_fit.jpg",
  "/images/87acfcd8c88b678b1b49543e179a89bc_fit.jpg",
];

export default function PortfolioPage() {
  const navigate = useNavigate();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const prev = useCallback(() => {
    setLightboxIdx((i) => (i === null ? null : (i - 1 + portfolioImages.length) % portfolioImages.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIdx((i) => (i === null ? null : (i + 1) % portfolioImages.length));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIdx]);

  return (
    <div className="min-h-screen bg-bg-base">
      <Nav />

      {/* Page Header */}
      <div className="pt-28 pb-10 px-5 md:px-8 max-w-[1400px] mx-auto">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-widest text-dim/60 hover:text-white transition-colors mb-8 group cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          Voltar ao site
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <div className="section-tag mb-3">Portfólio</div>
            <h1 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[0.02em]">
              Todas as <span className="gradient-text italic">nossas obras</span>
            </h1>
            <p className="mt-3 text-dim/60 text-[0.88rem] leading-relaxed max-w-[480px]">
              {portfolioImages.length} fotografias de instalações reais. Clique em qualquer imagem para ampliar.
            </p>
          </div>

          {/* Mini stats */}
          <div className="flex gap-6 shrink-0 pb-1">
            {[
              { n: "30+", l: "Anos" },
              { n: portfolioImages.length.toString(), l: "Obras" },
              { n: "100%", l: "Sob medida" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-[1.6rem] font-bold gradient-text leading-none">{s.n}</div>
                <div className="text-[0.6rem] text-dim/50 uppercase tracking-widest mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/[0.05] mb-8" />

      {/* Grid */}
      <div className="px-5 md:px-8 pb-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
          {portfolioImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: Math.min(idx * 0.025, 0.5) }}
              onClick={() => setLightboxIdx(idx)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/[0.05] cursor-zoom-in"
            >
              <img
                src={img}
                alt={`Obra Serralharia Silva & Pina ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-lg" />
              </div>
              {/* Index */}
              <span className="absolute bottom-2 right-2.5 text-[0.55rem] font-mono text-white/30 group-hover:text-white/60 transition-colors">
                {idx + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom back button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-widest text-dim/50 hover:text-white border border-white/[0.08] hover:border-white/20 px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar ao site
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[500] bg-black/96 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setLightboxIdx(null)}
          >
            {/* Close */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(null); }}
              className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIdx}
              src={portfolioImages[lightboxIdx]}
              alt={`Obra ${lightboxIdx + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-[88vw] max-h-[88vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <span className="text-[0.68rem] font-mono text-white/40 tracking-widest">
                {lightboxIdx + 1} / {portfolioImages.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
