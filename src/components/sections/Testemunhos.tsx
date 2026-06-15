import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ShimmerButton } from "../ui/shimmer-button";

const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJn36xcoF7JA0RINyYvW5JrKk";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/Rm76arDjTepaLpT36";

const reviews = [
  {
    name: "António Teixeira",
    text: "Excelente qualidade nos trabalhos de ferro e inox. Muito profissionais e cumpridores dos prazos acordados. Recomendo vivamente!",
    stars: 5,
    time: "há 2 meses",
    source: "Google",
  },
  {
    name: "Rui Santos",
    text: "Instalaram um portão em alumínio soldado na minha residência e o resultado superou as expetativas. Excelente acabamento e robustez.",
    stars: 5,
    time: "há 5 meses",
    source: "Google",
  },
  {
    name: "Maria Silva",
    text: "Serviço rápido e atencioso. A equipa é extremamente profissional e esclareceu todas as dúvidas antes de avançarmos com a obra.",
    stars: 5,
    time: "há 1 ano",
    source: "Google",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#c5a880] text-[#c5a880]" />
      ))}
    </div>
  );
}

export function Testemunhos() {
  return (
    <section id="testemunhos" className="py-[100px] bg-bg-sec/20 border-y border-white/[0.04] overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-[60px]"
        >
          <div className="section-tag mx-auto">O Que Dizem De Nós</div>
          <h2 className="section-h2 text-white">Avaliações dos Clientes</h2>
          
          {/* Google rating badge */}
          <div className="mt-6 flex items-center gap-3 bg-white/[0.03] backdrop-blur-md px-6 py-3 rounded-full border border-white/[0.06] shadow-2xl">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl text-white font-bold">5.0</span>
              <StarRating count={5} />
              <span className="text-dim text-sm ml-1">(Avaliações no Google)</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-12 max-w-[1050px] mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg-sec/40 border border-white/[0.04] p-[clamp(1.2rem,3vw,1.75rem)] rounded-xl relative group hover:border-accent/40 hover:bg-bg-sec/60 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 flex flex-col h-full"
            >
              {/* Quote mark */}
              <div className="font-display text-[clamp(3.5rem,8vw,5rem)] leading-none text-accent/10 absolute -top-2 right-6 select-none">"</div>

              <div className="flex items-center gap-2 mb-4">
                <StarRating count={r.stars} />
                <span className="text-dim text-[clamp(0.65rem,1.5vw,0.72rem)]">{r.time}</span>
              </div>

              <p className="text-[clamp(0.8rem,2vw,0.88rem)] text-dim leading-[1.8] mb-6 relative z-10 flex-grow">
                "{r.text}"
              </p>

              <div className="border-t border-white/[0.06] pt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-display text-lg font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-[1rem] tracking-[0.04em] text-white font-semibold">{r.name}</div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-3 h-3"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    <span className="text-[0.65rem] text-dim">Avaliação no Google</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to leave a review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-dim text-[0.85rem] mb-4">Já trabalhou connosco? Partilhe a sua experiência!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <ShimmerButton
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              background="#c5a880"
              shimmerColor="#ffffff"
              className="text-bg-base font-bold tracking-wide text-xs px-8 py-3 flex items-center gap-2 rounded-sm shadow-[0_0_30px_rgba(197,168,128,0.2)] hover:-translate-y-1 transition-transform"
            >
              <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] bg-white rounded-full p-0.5"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              DEIXAR AVALIAÇÃO NO GOOGLE
            </ShimmerButton>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-sm text-xs font-bold border border-white/10 hover:border-white/20 text-white transition-all bg-white/[0.02] flex items-center justify-center hover:-translate-y-1"
            >
              Ver no Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
