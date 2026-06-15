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
  return (
    <>
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
    </>
  );
}

export default App;

