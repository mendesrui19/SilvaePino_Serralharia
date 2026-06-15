import { Phone, MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <div className="fixed right-6 bottom-6 z-[100] flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/351964053721?text=Ol%C3%A1%20Serralharia%20Silva%20%26%20Pina!%20Gostaria%20de%20pedir%20um%20or%C3%A7amento."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 animate-float"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+351964053721"
        className="w-14 h-14 rounded-full bg-accent text-bg-base flex items-center justify-center shadow-[0_4px_20px_rgba(255,106,43,0.3)] hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Ligar para Silva & Pina"
      >
        <Phone className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
}
