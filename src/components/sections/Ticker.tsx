export function Ticker() {
  const items = [
    { text: "Ferro" },
    { text: "·", accent: true },
    { text: "Aço Inox" },
    { text: "·", accent: true },
    { text: "Alumínio" },
    { text: "·", accent: true },
    { text: "Portões Automáticos" },
    { text: "·", accent: true },
    { text: "Gradeamentos" },
    { text: "·", accent: true },
    { text: "Escadas Metálicas" },
    { text: "·", accent: true },
    { text: "Varandas & Marquises" },
    { text: "·", accent: true },
    { text: "Corrimãos Inox" },
    { text: "·", accent: true },
    { text: "Estruturas Metálicas" },
    { text: "·", accent: true },
    { text: "Sob Medida" },
    { text: "·", accent: true },
    { text: "Fabrico Próprio" },
    { text: "·", accent: true },
    { text: "Orçamento Grátis" },
    { text: "·", accent: true },
  ];

  const content = (
    <div className="flex gap-12 pr-12 items-center">
      {items.map((item, i) => (
        <span 
          key={i} 
          className={
            item.accent 
              ? 'text-accent opacity-50 text-base' 
              : 'whitespace-nowrap text-white/70 font-semibold text-[0.8rem] tracking-[0.12em] uppercase'
          }
        >
          {item.text}
        </span>
      ))}
    </div>
  );

  return (
    <div className="py-4 border-y border-white/[0.05] overflow-hidden bg-bg-sec flex" style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
      <div className="flex animate-ticker w-max">
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}
