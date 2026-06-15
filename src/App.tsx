import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "./components/layout/Nav";
import { Hero } from "./components/sections/Hero";
import { Ticker } from "./components/sections/Ticker";
import { Sobre } from "./components/sections/Sobre";
import { Services } from "./components/sections/Services";
import { Obras } from "./components/sections/Obras";
import { Testemunhos } from "./components/sections/Testemunhos";
import { PorqueNos } from "./components/sections/PorqueNos";
import { Contacto } from "./components/sections/Contacto";
import { Footer } from "./components/layout/Footer";
import { WhatsAppFloat } from "./components/ui/WhatsAppFloat";
import { ForgeCanvas } from "./components/ui/ForgeCanvas";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload critical images first
    let loadedCount = 0;
    const criticalImages = [
      "/images/85a10616679cf559a06de0b589c5479e_fit.jpg",
      "/images/d3c30698ebd1a03caf9e606c0005cd8d_fit.jpg",
    ];

    const handleLoad = () => {
      // Ensure minimum load screen visibility of 1.2s for a premium feel
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    };

    if (criticalImages.length === 0) {
      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
      }
    } else {
      criticalImages.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === criticalImages.length) {
            if (document.readyState === "complete") {
              handleLoad();
            } else {
              window.addEventListener("load", handleLoad);
            }
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === criticalImages.length) {
            handleLoad();
          }
        };
      });
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] bg-[#0b0c0e] flex flex-col items-center justify-center gap-6 pointer-events-auto"
          >
            {/* Animated Logo / Spinner */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              {/* Outer spinning ring */}
              <div 
                className="absolute inset-0 rounded-xl border border-accent/20 animate-spin" 
                style={{ animationDuration: '3s' }} 
              />
              {/* Inner glowing core */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent2 to-accent text-bg-base flex items-center justify-center text-[0.8rem] font-black shadow-[0_0_30px_rgba(197,168,128,0.4)] border border-white/10 animate-pulse">
                S&P
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="font-display font-bold text-white tracking-[0.2em] uppercase text-[0.7rem]">
                Silva & Pina
              </span>
              <span className="text-[0.55rem] text-accent tracking-[0.15em] uppercase font-semibold mt-1.5">
                A carregar...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ForgeCanvas />
          <Nav />
          <main>
            <Hero />
            <Ticker />
            <Sobre />
            <Services />
            <Obras />
            <Testemunhos />
            <PorqueNos />
            <Contacto />
          </main>
          <Footer />
          <WhatsAppFloat />
        </motion.div>
      )}
    </>
  );
}

export default App;
