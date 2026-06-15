import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { ShimmerButton } from '../ui/shimmer-button';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'obras', label: 'Obras' },
  { id: 'contacto', label: 'Contacto' },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map(l => document.getElementById(l.id));
      let current = '';
      sections.forEach(section => {
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100) current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        id="nav"
        className={cn(
          "fixed top-0 left-0 right-0 z-[200] transition-all duration-400",
          scrolled 
            ? "bg-bg-base/90 backdrop-blur-xl border-b border-white/[0.07] py-3" 
            : "bg-transparent py-5"
        )}
      >
        <div className="flex items-center justify-between px-5 md:px-8 max-w-[1200px] mx-auto">
          {/* Logo */}
          <button onClick={() => navigate('/')} className="flex items-center gap-3.5 group cursor-pointer text-left">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent2 to-accent text-bg-base flex items-center justify-center text-[0.88rem] font-black shadow-[0_0_20px_rgba(197,168,128,0.35)] group-hover:shadow-[0_0_30px_rgba(197,168,128,0.55)] group-hover:scale-105 transition-all duration-300 border border-white/10">
              S&P
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-white text-[1.12rem] leading-none tracking-[0.03em] group-hover:text-accent transition-colors duration-300">
                Silva & Pina
              </span>
              <span className="text-[0.58rem] text-accent tracking-[0.16em] uppercase font-bold mt-1.5">
                Serralharia Civil · Desde 1990
              </span>
            </div>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7 list-none">
            {navLinks.map(({ id, label }) => (
              <li key={id} className="relative">
                <a
                  href={`#${id}`}
                  className={cn(
                    "text-[0.72rem] tracking-[0.14em] uppercase font-semibold transition-colors duration-200",
                    activeSection === id ? "text-white" : "text-dim hover:text-white"
                  )}
                >
                  {label}
                  {activeSection === id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent2 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </a>
              </li>
            ))}
            <li>
              <ShimmerButton
                href="#contacto"
                background="#c5a880"
                shimmerColor="#ffffff"
                className="text-bg-base text-[0.68rem] tracking-[0.14em] uppercase font-bold py-2.5 px-5 rounded-full hover:-translate-y-0.5 inline-flex shadow-[0_0_20px_rgba(197,168,128,0.2)]"
              >
                Pedir Orçamento
              </ShimmerButton>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col gap-[5px] p-1 cursor-pointer z-[210] relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span className={cn("block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center", isOpen && "rotate-45 translate-y-[6.5px]")} />
            <span className={cn("block w-6 h-[1.5px] bg-white transition-all duration-300", isOpen && "opacity-0 scale-x-0")} />
            <span className={cn("block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center", isOpen && "-rotate-45 -translate-y-[6.5px]")} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed inset-0 z-[190] bg-bg-base/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-dim hover:text-white hover:border-white/30 transition-all"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {navLinks.map(({ id, label }, i) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-display text-[2.4rem] font-bold tracking-[0.02em] transition-colors hover:text-accent"
              >
                {label}
              </motion.a>
            ))}
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
              <ShimmerButton
                href="#contacto"
                onClick={() => setIsOpen(false) as any}
                background="#c5a880"
                shimmerColor="#ffffff"
                className="text-bg-base text-base font-bold font-display tracking-[0.08em] py-4 px-10 rounded-full shadow-[0_0_40px_rgba(197,168,128,0.3)]"
              >
                Pedir Orçamento
              </ShimmerButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
