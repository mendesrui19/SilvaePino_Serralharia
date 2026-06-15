import { useEffect, useRef } from "react";

export function ForgeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, dpr = 1;
    let sparks: Array<{
      x: number;
      y: number;
      r: number;
      vy: number;
      vx: number;
      a: number;
      flick: number;
      c: string;
    }> = [];

    const COLORS = ["#c5a880", "#e2d1b9", "#8d7455"];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };

    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(60, Math.floor(window.innerWidth / 20));

    const createSpark = () => ({
      x: Math.random() * w,
      y: h + Math.random() * h,
      r: (Math.random() * 1.6 + 0.4) * dpr,
      vy: (Math.random() * 0.6 + 0.25) * dpr,
      vx: (Math.random() - 0.5) * 0.3 * dpr,
      a: Math.random() * 0.5 + 0.2,
      flick: Math.random() * 0.04 + 0.01,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    for (let i = 0; i < count; i++) {
      const s = createSpark();
      s.y = Math.random() * h;
      sparks.push(s);
    }

    let rafId: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const s of sparks) {
        s.y -= s.vy;
        s.x += s.vx;
        s.a += (Math.random() - 0.5) * s.flick;

        if (s.y < -10 || s.a <= 0.04) {
          Object.assign(s, createSpark());
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.c;
        ctx.globalAlpha = Math.max(0, Math.min(s.a, 0.8));
        ctx.shadowBlur = 8 * dpr;
        ctx.shadowColor = s.c;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      rafId = requestAnimationFrame(draw);
    };

    draw();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(draw);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-20 w-full h-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 -z-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]"
        style={{
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 80%)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
