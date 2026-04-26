import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--navy-deep)]" aria-hidden />
      <div className="absolute inset-0 topo-grid opacity-25" aria-hidden />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, color-mix(in oklab, var(--gold) 15%, transparent), transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center reveal">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Ready to Build Infrastructure That{" "}
          <span className="text-gold">Scales?</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Book a free 30-minute discovery call. No pitch, no pressure — just an
          honest conversation about your stack.
        </p>
        <div className="mt-10">
          <a
            href="https://calendly.com/ahmed-moustafa-kemetops/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-gold text-gold-foreground font-bold text-lg hover:brightness-110 transition shadow-glow-gold"
          >
            Book Your Free Call <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
